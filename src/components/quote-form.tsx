"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AlertCircle, Mail } from "lucide-react";

import { buttonClass } from "./button";

export type Option = { value: string; label: string };

type Props = {
  email: string;
  phone: { display: string; href: string };
  services: Option[];
};

const customerTypes: Option[] = [
  { value: "privat", label: "Privatperson" },
  { value: "foretag", label: "Företag" },
  { value: "brf", label: "Bostadsrättsförening" },
  { value: "fastighetsagare", label: "Fastighetsägare" },
];

const budgets = ["Under 100 000 kr", "100 000–500 000 kr", "500 000–2 milj. kr", "Över 2 milj. kr", "Vet inte än"];
const timelines = ["Så snart som möjligt", "Inom 3 månader", "Inom 3–6 månader", "Senare än 6 månader", "Inte bestämt"];

type Field = "namn" | "epost" | "telefon" | "kundtyp" | "tjanst" | "ort" | "beskrivning";
type Errors = Partial<Record<Field, string>>;

const labels: Record<Field, string> = {
  namn: "Namn",
  epost: "E-post",
  telefon: "Telefon",
  kundtyp: "Jag är",
  tjanst: "Vad gäller förfrågan?",
  ort: "Var ligger projektet?",
  beskrivning: "Beskriv projektet",
};

function validate(data: FormData): Errors {
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const errors: Errors = {};
  if (get("namn").length < 2) errors.namn = "Skriv ditt namn.";
  const email = get("epost");
  if (!email) errors.epost = "Skriv din e-postadress.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.epost = "Kontrollera e-postadressen, till exempel namn@foretag.se.";
  const phone = get("telefon");
  if (phone && phone.replace(/\D/g, "").length < 7) errors.telefon = "Telefonnumret verkar vara för kort.";
  if (!get("kundtyp")) errors.kundtyp = "Välj vilken typ av kund du är.";
  if (!get("tjanst")) errors.tjanst = "Välj vad förfrågan gäller.";
  if (get("ort").length < 2) errors.ort = "Ange ort eller adress för projektet.";
  if (get("beskrivning").length < 20) errors.beskrivning = "Beskriv projektet med minst 20 tecken.";
  return errors;
}

export function QuoteForm({ email, phone, services }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState<string | null>(null);
  const id = useId();

  // Prefill from links such as /kontakt?tjanst=renovering&kund=brf.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    const service = params.get("tjanst");
    const customer = params.get("kund");
    const select = form.elements.namedItem("tjanst") as HTMLSelectElement | null;
    if (service && select && services.some((s) => s.value === service)) select.value = service;
    if (customer) {
      const radio = form.querySelector<HTMLInputElement>(`input[name="kundtyp"][value="${CSS.escape(customer)}"]`);
      if (radio) radio.checked = true;
    }
  }, [services]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setMailto(null);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const serviceLabel = services.find((s) => s.value === get("tjanst"))?.label ?? get("tjanst");
    const customerLabel = customerTypes.find((c) => c.value === get("kundtyp"))?.label ?? "";
    const body = [
      `Namn: ${get("namn")}`,
      `E-post: ${get("epost")}`,
      get("telefon") ? `Telefon: ${get("telefon")}` : null,
      `Kundtyp: ${customerLabel}`,
      `Tjänst: ${serviceLabel}`,
      `Plats: ${get("ort")}`,
      get("budget") ? `Budget: ${get("budget")}` : null,
      get("tidplan") ? `Önskad tidplan: ${get("tidplan")}` : null,
      "",
      get("beskrivning"),
    ]
      .filter((line) => line !== null)
      .join("\n");
    setMailto(
      `mailto:${email}?subject=${encodeURIComponent(`Offertförfrågan: ${serviceLabel}`)}&body=${encodeURIComponent(body)}`,
    );
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  // Re-check a field as soon as it has been corrected.
  const onChange = () => {
    if (!Object.keys(errors).length || !formRef.current) return;
    const fresh = validate(new FormData(formRef.current));
    setErrors((prev) => {
      const next: Errors = {};
      for (const key of Object.keys(prev) as Field[]) if (fresh[key]) next[key] = fresh[key];
      return next;
    });
  };

  const errorList = Object.entries(errors) as [Field, string][];
  const describedBy = (f: Field, hint?: boolean) =>
    [hint ? `${id}-${f}-hint` : "", errors[f] ? `${id}-${f}-error` : ""].filter(Boolean).join(" ") || undefined;
  const fieldClass = (f: Field) =>
    [
      "mt-2 block w-full rounded-[2px] border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70",
      "focus:outline-2 focus:outline-offset-0 focus:outline-ink",
      errors[f] ? "border-danger" : "border-line-strong hover:border-ink",
    ].join(" ");

  const errorText = (f: Field) =>
    errors[f] ? (
      <p id={`${id}-${f}-error`} className="mt-2 flex items-start gap-1.5 text-[0.875rem] font-medium text-danger">
        <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {errors[f]}
      </p>
    ) : null;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} onChange={onChange} aria-label="Offertförfrågan">
      {errorList.length ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 border-l-4 border-danger bg-white p-5 focus:outline-none"
        >
          <p className="font-semibold">
            {errorList.length === 1 ? "Ett fält behöver kompletteras:" : `${errorList.length} fält behöver kompletteras:`}
          </p>
          <ul className="mt-2 space-y-1 text-[0.9375rem]">
            {errorList.map(([f, msg]) => (
              <li key={f}>
                <a href={`#${id}-${f}`} className="underline underline-offset-2">
                  {labels[f]}
                </a>{" "}
                – {msg}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-namn`} className="font-semibold">
            Namn <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-namn`}
            name="namn"
            autoComplete="name"
            required
            aria-invalid={!!errors.namn}
            aria-describedby={describedBy("namn")}
            className={fieldClass("namn")}
          />
          {errorText("namn")}
        </div>
        <div>
          <label htmlFor={`${id}-epost`} className="font-semibold">
            E-post <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-epost`}
            name="epost"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={!!errors.epost}
            aria-describedby={describedBy("epost")}
            className={fieldClass("epost")}
          />
          {errorText("epost")}
        </div>
        <div>
          <label htmlFor={`${id}-telefon`} className="font-semibold">
            Telefon <span className="font-normal text-muted">(valfritt)</span>
          </label>
          <input
            id={`${id}-telefon`}
            name="telefon"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.telefon}
            aria-describedby={describedBy("telefon")}
            className={fieldClass("telefon")}
          />
          {errorText("telefon")}
        </div>
        <div>
          <label htmlFor={`${id}-ort`} className="font-semibold">
            Var ligger projektet? <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-ort`}
            name="ort"
            autoComplete="address-level2"
            placeholder="Ort eller adress"
            required
            aria-invalid={!!errors.ort}
            aria-describedby={describedBy("ort")}
            className={fieldClass("ort")}
          />
          {errorText("ort")}
        </div>

        <fieldset
          id={`${id}-kundtyp`}
          tabIndex={-1}
          className="sm:col-span-2"
          aria-invalid={!!errors.kundtyp}
          aria-describedby={describedBy("kundtyp")}
        >
          <legend className="font-semibold">
            Jag är <span aria-hidden="true">*</span>
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {customerTypes.map((c) => (
              <label
                key={c.value}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[2px] border bg-white px-4 py-2 text-[0.9375rem] font-medium transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink ${
                  errors.kundtyp ? "border-danger" : "border-line-strong hover:border-ink"
                }`}
              >
                <input type="radio" name="kundtyp" value={c.value} className="size-4 accent-signal" />
                {c.label}
              </label>
            ))}
          </div>
          {errorText("kundtyp")}
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-tjanst`} className="font-semibold">
            Vad gäller förfrågan? <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-tjanst`}
            name="tjanst"
            defaultValue=""
            required
            aria-invalid={!!errors.tjanst}
            aria-describedby={describedBy("tjanst")}
            className={`${fieldClass("tjanst")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23202525%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12`}
          >
            <option value="" disabled>
              Välj tjänst
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {errorText("tjanst")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-beskrivning`} className="font-semibold">
            Beskriv projektet <span aria-hidden="true">*</span>
          </label>
          <p id={`${id}-beskrivning-hint`} className="mt-1 text-[0.875rem] text-muted">
            Vad ska göras, ungefärlig omfattning och om det finns ritningar eller underlag.
          </p>
          <textarea
            id={`${id}-beskrivning`}
            name="beskrivning"
            rows={6}
            required
            aria-invalid={!!errors.beskrivning}
            aria-describedby={describedBy("beskrivning", true)}
            className={`${fieldClass("beskrivning")} resize-y`}
          />
          {errorText("beskrivning")}
        </div>

        <div>
          <label htmlFor={`${id}-budget`} className="font-semibold">
            Ungefärlig budget <span className="font-normal text-muted">(valfritt)</span>
          </label>
          <select id={`${id}-budget`} name="budget" defaultValue="" className={`${fieldClass("namn")} border-line-strong`}>
            <option value="">Ingen uppgift</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-tidplan`} className="font-semibold">
            Önskad tidplan <span className="font-normal text-muted">(valfritt)</span>
          </label>
          <select id={`${id}-tidplan`} name="tidplan" defaultValue="" className={`${fieldClass("namn")} border-line-strong`}>
            <option value="">Ingen uppgift</option>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 border-t border-ink pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[0.875rem] text-muted">
          Fält markerade med * är obligatoriska. Vi använder uppgifterna endast för att besvara din förfrågan.
        </p>
        <button type="submit" className={buttonClass("signal", "cursor-pointer")}>
          Skicka förfrågan
        </button>
      </div>

      <div className="mt-6 hatch p-4">
        <p className="bg-paper-2/90 text-[0.875rem] text-ink/80">
          <strong>Konceptversion:</strong> formuläret är ännu inte kopplat till någon e-posttjänst och skickar inget
          automatiskt. När uppgifterna är ifyllda skapas förfrågan som ett färdigt e-postmeddelande till {email}.
        </p>
      </div>

      {mailto ? (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="status"
          className="mt-8 border-2 border-ink bg-white p-6 focus:outline-none sm:p-8"
        >
          <p className="t-h3">Förfrågan är klar att skicka</p>
          <p className="mt-3 max-w-lg text-ink/80">
            Allt är korrekt ifyllt. Öppna förfrågan i ditt e-postprogram och skicka den därifrån – eller ring oss på{" "}
            <a href={phone.href} className="font-semibold underline underline-offset-2">
              {phone.display}
            </a>
            .
          </p>
          <a href={mailto} className={buttonClass("ink", "mt-6")}>
            <Mail aria-hidden="true" className="size-5" />
            Öppna i e-post
          </a>
        </div>
      ) : null}
    </form>
  );
}
