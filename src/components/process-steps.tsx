const steps = [
  {
    title: "Förfrågan",
    text: "Ni berättar vad ni planerar – via formuläret, e-post eller telefon.",
  },
  {
    title: "Genomgång",
    text: "Vi går igenom förutsättningar, tidplan och önskemål, gärna på plats.",
  },
  {
    title: "Offert",
    text: "Ni får en kostnadsfri offert med tydlig omfattning.",
  },
  {
    title: "Utförande",
    text: "Vi planerar, bemannar och bygger med fokus på miljö, kvalitet, tid och ekonomi.",
  },
  {
    title: "Uppföljning",
    text: "Vi följer upp resultatet och tar med erfarenheterna till nästa uppdrag.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-y-8 md:grid-cols-5 md:gap-x-6">
      {steps.map((step, i) => (
        <li key={step.title} className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 md:block">
          <div className="md:mb-6 md:flex md:items-center">
            <span className="t-figure block text-[3.25rem] md:text-[4.5rem]">{i + 1}</span>
            {/* Ruler segment linking the steps on wide screens. */}
            <span aria-hidden="true" className="ml-4 hidden h-px flex-1 bg-line-strong md:block" />
          </div>
          <div className="border-t border-ink pt-3 md:border-t-0 md:pt-0">
            <h3 className="text-[1.1875rem] font-bold tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-1.5 text-[0.9375rem] text-muted">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
