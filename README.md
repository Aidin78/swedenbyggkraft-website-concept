# Sweden Bygg Kraft – website redesign concept

A redesign proposal for [swedenbyggkraft.se](https://swedenbyggkraft.se/): a multi-page Swedish-language website for Sweden Bygg Kraft AB, a construction and property-services company in Stockholm.

Built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS 4 and Lucide icons. No backend or CMS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build; deploys to Vercel as-is
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, company summary, service index, selected projects, Solna figure, BRF section, process, CTA |
| `/tjanster` | All construction services in alternating editorial sections |
| `/tjanster/[slug]` | 8 service pages (prefabmontage, betongarbeten, nybyggnation, om- och tillbyggnad, fasad och tak, renovering, snickeri, rivning) |
| `/projekt` | Composed project grid and a reference table |
| `/projekt/[slug]` | 7 project pages with facts, figures, gallery and related projects |
| `/brf-fastighetsagare` | Landing page for housing associations and property owners |
| `/brf-fastighetsagare/fastighetsskotsel` | Property maintenance, inspections, ground works, gardening, snow clearing |
| `/brf-fastighetsagare/underhallsplan` | Maintenance planning |
| `/om-oss` | Business idea, values, team, credentials, environment, partners |
| `/kontakt` | Contact details, contact persons and the quote request form |

The project also includes `sitemap.xml`, `robots.txt`, an Open Graph image, page-level metadata, and JSON-LD (`GeneralContractor`, `Service`, `BreadcrumbList`).

## Structure

```
src/
  app/          routes, layout, metadata files, error and 404 pages
  components/   header, footer, hero, service index, project card, form, …
  content/      all copy and data: site facts, services, projects, property services, photos
  assets/photos the company's own site photos, resized (max 2000 px)
```

You can change the content without touching layout code: edit the files in `src/content/`.

## Design direction: Nordic Industrial Precision

- **Colour.** The palette uses concrete paper `#efefeb`, graphite `#202525`, concrete grey `#929b9b` and white. The signal yellow `#f9cf06` is taken from the helmet in the existing logo, so the accent comes from the brand instead of a generic orange.
- **Type.** The whole site uses one family, Archivo (variable). Its width axis stands in for a second typeface: expanded heavy cuts for headlines, a normal width for body text, and a condensed tabular cut for codes, figures and metadata.
- **Signature elements.**
  - The hero headline sits in a paper block cut into the corner of a full-bleed site photo.
  - The 28 m figure for the Solna project is drawn with a construction-drawing dimension line.
  - Hatching like a section cut marks honest placeholders.
- **Motion.** The hero has one orchestrated entrance followed by a slow crossfade. Project images wipe into view once as you scroll. All motion respects `prefers-reduced-motion`.
- **Logo.** The header uses a simplified geometric redraw of the existing mark (roof and helmet in brand blue and yellow). It is a proposal, and the original logo can be swapped back in `src/components/logo.tsx`.

## Content and fact checks: please verify before launch

All copy is based on the current website, rewritten into clearer Swedish. Nothing has been invented: no certifications, awards, reviews, statistics or projects. A few facts still need confirmation from the company:

1. **Founding year.** The current site says the company was founded in 2017. The company registry (via Syna) lists the company as registered on 2013-12-17. The new site deliberately shows no founding year until this is clarified.
2. **Number of employees.** The current site says "mer än 40 kollektivarbetare". Syna lists 15 employees. The new site shows no headcount.
3. **Address.** The site uses Mellanbergsvägen 43, 129 30 Hägersten, as on the current site. Syna lists Telefonvägen 30, 126 26 Hägersten. Please confirm which address is current.
4. **Contact persons.** Martins Levalds (VD) and Anastasiia Duzhak (administratör) are taken from the current contact page.
5. **"Branschvinnare" badge.** The current site shows this badge without any explanation. It is left out until its source can be verified.
6. **Clients and partners.** The list comes from the "Våra kunder" logos on the current site and from the project descriptions.

### Photography

- All photos are the company's own, taken from the current website's media library.
- Each project's lead image is the one the current site shows next to that project.
- **Täby** also gets photos from the same photo series of the same building, and **Saltsjö-Boo lokaler** gets a second shot of the same stair lift.
- Photos whose project could not be confirmed are only used to illustrate services, without naming a project.
- The Patriam lead image and one image in the Fyren gallery are developer renderings. Both are labelled *Visionsbild*.
- Projects with fewer than two photos show a hatched placeholder that says more images will be added.

## Quote form

The form has full client-side validation with accessible error handling: an error summary, `aria-invalid`, and field-level messages. It prefills from links such as `/kontakt?tjanst=renovering&kund=brf`.

**The form is not connected to any email service.** It does not pretend to send anything. When the form is valid, it builds a ready-to-send email to `info@swedenbyggkraft.se` that the visitor opens in their own email program, and the page says so clearly. To go live, connect the form to a Route Handler or Server Action that uses an email provider (for example Resend or Postmark), or to a form service.
