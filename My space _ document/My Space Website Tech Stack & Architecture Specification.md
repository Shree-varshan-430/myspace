# My Space Website Tech Stack & Architecture Specification

## My Space Engineering, Construction & Valuers

**Document purpose:** Define the recommended technology stack, system architecture, content model, integrations, security, performance, and delivery standards for the My Space website.  
**Primary market:** Bengaluru / Bangalore  
**Primary product:** SEO-led lead-generation website for construction, interiors, design visualization, commercial projects, and property valuation enquiries.  
**Document status:** Technical recommendation for implementation

---

## 1. Executive Recommendation

The recommended implementation is a **content-managed, server-rendered website** using Next.js, TypeScript, Tailwind CSS, a headless CMS, PostgreSQL where structured data is needed, and a transactional email provider for enquiry notifications.

The architecture should prioritize four outcomes:

1. **Fast first-page experience** for mobile visitors arriving from search or social media.
2. **Crawlable service and insight content** for local SEO.
3. **Simple content administration** for projects, FAQs, testimonials, images, and metadata.
4. **Secure and traceable lead handling** for construction, design, and valuation enquiries.

The website should begin as a focused marketing and lead-generation platform. It should not introduce a complex client portal, custom CRM, online payment flow, or document-upload system until the business has validated the lead process and defined the associated privacy and operational requirements.

### Recommended stack at a glance

| Layer | Recommendation |
|---|---|
| Frontend | Next.js with TypeScript and React |
| Rendering | Static generation or server rendering for public content; client components only where interaction requires them |
| Styling | Tailwind CSS with design tokens and reusable components |
| Components | Accessible component primitives using Radix UI or an equivalent maintained library |
| CMS | Sanity, Strapi, or another headless CMS with draft/preview support |
| Database | PostgreSQL only for structured operational data that the CMS cannot manage comfortably |
| Forms | Server-side API route with validation, spam protection, and transactional email |
| Email | Resend, Postmark, SendGrid, or an approved transactional provider |
| Analytics | Google Analytics 4 or privacy-conscious equivalent plus Google Search Console |
| Hosting | Vercel, Cloudflare Pages, or equivalent managed platform |
| Images | CMS image pipeline plus responsive WebP/AVIF delivery |
| SEO | Next.js metadata, sitemap, robots, canonical URLs, JSON-LD, and structured content |
| Monitoring | Sentry or equivalent error monitoring plus hosting analytics |
| Source control | GitHub with protected main branch and pull-request review |

The final provider choice should consider the team’s existing accounts, budget, data location, support model, and operational familiarity.

---

## 2. Product Scope

### 2.1 Version 1 scope

Version 1 should include:

- Homepage.
- Service pages for residential construction, commercial construction, civil construction, interior design, elevation design, 3D floor plans, and property valuation.
- Projects index and project detail pages.
- Process page.
- About page.
- Insights or blog section.
- FAQs.
- Contact and enquiry forms.
- Privacy, terms, and consent content.
- Responsive design.
- SEO metadata and structured data.
- Call and WhatsApp links.
- Analytics and conversion events.
- CMS editing for approved content types.

### 2.2 Explicitly deferred scope

The initial release should not include:

- Online payment collection.
- Automated construction cost quotations.
- A client project-management portal.
- Public document upload for valuation reports.
- Automated bank or lender integration.
- Automated legal or title verification.
- User accounts for general website visitors.
- Multi-city content at scale.
- A custom CRM unless a specific approved operational workflow requires it.

These features introduce additional security, privacy, operational, or compliance requirements and should be planned separately.

---

## 3. Recommended Architecture

### 3.1 Logical architecture

```text
Visitor browser
      |
      v
CDN / managed hosting / HTTPS
      |
      v
Next.js web application
      |
      +--> CMS API: pages, projects, FAQs, insights, media
      |
      +--> Server-side form endpoint
      |       |
      |       +--> Validation and spam protection
      |       +--> Transactional email
      |       +--> Approved CRM or internal notification destination
      |
      +--> Analytics and Search Console
      |
      +--> Error monitoring and performance telemetry
```

### 3.2 Rendering strategy

Use static generation or incremental static regeneration for stable content such as service pages, About, Process, FAQs, and published articles. Use server rendering only when a page genuinely needs request-time data.

Use client-side React components for interactions such as:

- Mobile navigation.
- FAQ accordion.
- Progressive enquiry form.
- Project filters.
- Image galleries.
- Reduced-motion-aware visual transitions.

Do not make the entire homepage a client-rendered application. The primary page copy, headings, navigation links, service descriptions, and SEO content must be available in the initial HTML response.

### 3.3 Suggested application structure

```text
app/
  (marketing)/
    page.tsx
    services/
      page.tsx
      [slug]/page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    process/page.tsx
    about/page.tsx
    insights/
      page.tsx
      [slug]/page.tsx
    faqs/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  api/
    enquiry/route.ts
    revalidate/route.ts
components/
  layout/
  navigation/
  hero/
  services/
  projects/
  process/
  forms/
  faq/
  seo/
content/
lib/
  cms/
  analytics/
  validation/
  email/
public/
styles/
  tokens.css
  globals.css
```

The exact framework structure may vary with the selected CMS and deployment platform. The principle is to separate page composition, reusable components, content access, validation, and integrations.

---

## 4. Frontend Stack

### 4.1 Next.js and TypeScript

Use Next.js with TypeScript for:

- Server-rendered and statically generated content.
- Route-level metadata.
- Built-in image optimization.
- Structured route organization.
- Secure server-side form handlers.
- Preview and revalidation workflows.

TypeScript should be enabled in strict mode. Public content types, enquiry payloads, analytics events, and CMS responses should have explicit types.

### 4.2 Styling and design tokens

Use Tailwind CSS or an equivalent token-based styling system. The UI/UX brief already defines the core colour and typography system.

Create tokens for:

- Brand colours.
- Text colours.
- Surface colours.
- Border colours.
- Spacing.
- Typography sizes.
- Border radius.
- Shadows.
- Motion duration.
- Breakpoints.

Do not scatter hex values throughout component files. Every colour used in production should come from a named design token.

### 4.3 Component library

Build reusable, accessible components for:

- Header and navigation.
- Mobile menu.
- Button variants.
- Hero.
- Service card.
- Project card.
- Process timeline.
- Material detail strip.
- Testimonial or trust block.
- FAQ accordion.
- Enquiry form.
- Valuation process module.
- Breadcrumbs.
- Footer.
- Mobile contact bar.

A maintained accessible primitive library may be used for dialogs, accordions, dropdowns, tabs, and navigation menus. The team should not add a large UI framework when only a small number of primitives are needed.

---

## 5. Content Management System

### 5.1 CMS requirements

The CMS must allow an authorized editor to:

- Create and edit service pages.
- Create and edit project case studies.
- Upload and crop responsive images.
- Publish FAQs.
- Publish insights and articles.
- Edit page title, description, canonical URL, and social image.
- Save drafts and preview before publishing.
- Schedule or unpublish content where supported.
- Maintain author, reviewer, publish date, and updated date fields.
- Preserve version history or provide a reliable rollback path.

### 5.2 CMS selection criteria

Evaluate Sanity, Strapi, or an equivalent headless CMS against:

| Criterion | Requirement |
|---|---|
| Editorial experience | Non-technical team can update content safely |
| Preview | Draft pages can be previewed before publishing |
| Structured content | Projects, services, FAQs, and articles use reusable fields |
| Media | Responsive images, alt text, captions, credit, and focal point |
| Workflow | Draft, review, publish, update, and rollback support |
| Permissions | Editors cannot change infrastructure or credentials |
| Exportability | Content can be backed up or migrated |
| Cost | Fits the business’s current traffic and editorial needs |

### 5.3 Content models

#### Service

| Field | Type | Required |
|---|---|---:|
| Title | Text | Yes |
| Slug | Slug | Yes |
| Primary keyword | Text | Yes |
| H1 | Text | Yes |
| Short description | Text | Yes |
| Hero image | Media | Yes, unless approved alternative exists |
| Audience problem | Rich text | Yes |
| Service outcome | Rich text | Yes |
| Scope items | Repeatable list | Yes |
| Process steps | Repeatable list | Yes |
| Proof items | Repeatable list | Recommended |
| FAQs | References | Recommended |
| CTA label | Text | Yes |
| SEO title | Text | Yes |
| Meta description | Text | Yes |
| Canonical URL | URL | Recommended |
| Social image | Media | Recommended |
| Published status | Workflow | Yes |

#### Project

| Field | Type | Required |
|---|---|---:|
| Project name or descriptor | Text | Yes |
| Slug | Slug | Yes |
| Category | Select | Yes |
| Status | Select: Completed, Ongoing, Concept | Yes |
| Location | Text | Only if approved |
| Client brief | Rich text | Yes |
| My Space scope | Rich text | Yes |
| Constraints | Rich text | Recommended |
| Gallery | Media list | Yes |
| Image alt text | Text per image | Yes |
| Related services | References | Recommended |
| Testimonial | Reference or text | Only with permission |
| SEO fields | Group | Yes |

#### Insight article

| Field | Type | Required |
|---|---|---:|
| Title | Text | Yes |
| Slug | Slug | Yes |
| Primary intent | Text | Yes |
| Author | Reference | Recommended |
| Reviewer | Reference | Recommended for cost or valuation content |
| Publish date | Date | Yes |
| Updated date | Date | Recommended |
| Featured image | Media | Yes |
| Body | Rich text or MDX | Yes |
| Related service | Reference | Yes |
| FAQ block | Repeatable list | Recommended |
| SEO fields | Group | Yes |

#### FAQ

| Field | Type | Required |
|---|---|---:|
| Question | Text | Yes |
| Answer | Rich text | Yes |
| Related service | Reference | Recommended |
| Display location | Select | Recommended |
| Review status | Select | Yes |

### 5.4 Content safety

The CMS should not allow accidental publication of placeholder claims. Where possible, include editorial fields for:

- Approval status.
- Image permission status.
- Claim verification status.
- Professional review status.
- Required disclaimer.

---

## 6. Data and Lead Architecture

### 6.1 Lead handling principle

Enquiries contain personal information and may contain sensitive property context. The system should collect only what is needed for initial contact and route it securely to approved recipients.

### 6.2 Recommended enquiry flow

```text
Visitor selects service
        |
        v
Progressive form displays relevant fields
        |
        v
Client-side validation for usability
        |
        v
Server-side validation and spam checks
        |
        v
Store only approved operational fields
        |
        +--> Send notification email
        +--> Send acknowledgement email where approved
        +--> Send event to analytics without message contents
        +--> Forward to approved CRM or internal destination
```

### 6.3 Enquiry payload

The first-stage payload should include:

- Name.
- Phone number.
- Email, if provided.
- Service of interest.
- Project location.
- Message.
- Consent status.
- Source page.
- UTM campaign fields where appropriate.
- Submission timestamp.

Additional service-specific fields should be added only after the visitor chooses a service.

### 6.4 Validation

Use a shared schema library such as Zod or an equivalent for server-side validation. Client-side validation is for usability; server-side validation is authoritative.

Validate:

- Required fields.
- Phone format.
- Email format when provided.
- Maximum lengths.
- Allowed service values.
- Consent field.
- Rate and spam controls.

Do not trust hidden fields, client-provided source values, or client-provided redirect URLs.

### 6.5 Storage decision

For the initial launch, use one of the following approved patterns:

1. **Email-first:** Validate on the server and send a structured notification to a controlled business inbox. Store only logs needed for delivery and troubleshooting.
2. **Database-backed:** Store structured enquiry records in PostgreSQL with restricted access, retention rules, and an admin workflow.
3. **CRM-backed:** Send the enquiry to an approved CRM through a server-side integration, with a fallback notification path.

Do not store valuation documents or identity documents in the basic enquiry flow. A future secure document workflow requires a separate security and privacy design.

---

## 7. Integrations

### 7.1 Required integrations

| Integration | Purpose | Implementation rule |
|---|---|---|
| Transactional email | Enquiry notifications and acknowledgements | Use server-side API and verified sending domain |
| Analytics | Conversion and UX measurement | Consent-aware; do not send message contents |
| Search Console | Search performance and indexing | Verify production domain |
| CMS | Content management | Use preview and revalidation |
| WhatsApp | Direct contact | Use official business number and track click event |

### 7.2 Optional integrations

- CRM or lead pipeline.
- Calendar booking for consultations.
- Maps provider for verified address or service area.
- Review platform links.
- Call tracking, subject to privacy and budget review.

No optional integration should be added merely because it is available. Every integration creates credentials, failure states, privacy implications, and maintenance work.

---

## 8. SEO Technical Implementation

### 8.1 Required technical SEO

Implement:

- Server-rendered or statically available headings and body content.
- Unique title and meta description per indexable page.
- Canonical URLs.
- XML sitemap.
- Robots.txt.
- Clean descriptive URLs.
- Breadcrumbs where appropriate.
- Open Graph and Twitter/X metadata.
- Image alt text.
- Internal links.
- 404 page.
- Redirect map for changed URLs.
- JSON-LD structured data where accurate.

### 8.2 Structured data

Use JSON-LD for appropriate types such as:

- Organization or suitable LocalBusiness type.
- Service.
- BreadcrumbList.
- Article.
- FAQPage only when the visible page content meets applicable guidelines.

Structured data must describe visible, accurate content. Do not mark up fake reviews, hidden claims, or unsupported business details.

### 8.3 Sitemap behavior

The sitemap should include only canonical, indexable pages intended for search. Exclude preview URLs, query-parameter duplicates, private routes, and thin filter combinations.

### 8.4 URL and redirect governance

Maintain a redirect map for every changed page. Avoid changing established service URLs after indexing unless there is a strong reason. If a change is necessary, use a permanent redirect and update internal links and canonical tags.

---

## 9. Performance Requirements

### 9.1 Targets

The implementation should aim to pass Core Web Vitals on representative mobile pages. Targets should be treated as quality goals rather than guarantees across every device and network.

| Area | Target direction |
|---|---|
| Largest Contentful Paint | Prioritize a fast hero image and server-rendered headline |
| Interaction to Next Paint | Avoid heavy client-side JavaScript and expensive event handlers |
| Cumulative Layout Shift | Reserve image dimensions and avoid late-loading layout changes |
| JavaScript | Ship only the scripts needed for the page |
| Images | Use responsive sizes, modern formats, compression, and focal points |
| Fonts | Preload only critical fonts and use reliable fallbacks |
| Third-party scripts | Audit every script and load non-essential tools after consent or interaction |

### 9.2 Image rules

- Use CMS transformations or an image CDN.
- Provide width and height or aspect-ratio metadata.
- Use AVIF or WebP where supported.
- Use lazy loading below the fold.
- Preload only the primary hero image when justified.
- Never ship a 4K image to a small card.
- Define focal points for mobile crops.
- Preserve meaningful image context.

### 9.3 Motion performance

Hero transitions and scroll reveals must not block input or create layout shift. Provide a static first frame and respect reduced-motion preferences.

---

## 10. Accessibility Requirements

Target WCAG 2.2 AA.

The implementation must include:

- Semantic HTML.
- One H1 per page.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Labelled form fields.
- Accessible error and success messages.
- Accordion buttons with correct ARIA state.
- Descriptive link text.
- Alternative text for meaningful images.
- Empty alternative text for decorative images.
- Sufficient colour contrast.
- No colour-only status communication.
- Reduced-motion support.
- Touch targets of at least 44 × 44 pixels.
- No essential content dependent on hover.

Run automated checks and manual keyboard and screen-reader checks before launch.

---

## 11. Security and Privacy

### 11.1 Security baseline

- Enforce HTTPS.
- Store secrets in environment variables or a managed secret store.
- Never expose API keys in client-side code.
- Validate all server inputs.
- Apply rate limiting to form endpoints.
- Use spam protection such as a honeypot and/or managed challenge where appropriate.
- Restrict CMS roles by least privilege.
- Enable multi-factor authentication for admin accounts where supported.
- Keep dependencies updated.
- Review third-party scripts.
- Log failures without exposing personal data.
- Maintain backups and a rollback path.

### 11.2 Privacy baseline

The website should publish a privacy policy that explains:

- What enquiry information is collected.
- Why it is collected.
- Who can access it.
- How long it is retained.
- How visitors can request correction or deletion where applicable.
- Which third parties process it.
- How analytics and cookies are handled.

Do not collect property documents or identity documents in the general form. Do not send personal data to analytics tools unnecessarily.

### 11.3 Valuation-specific caution

Property valuation enquiries may contain sensitive property, financial, or document context. The first website interaction should collect only basic qualification information. Any document exchange must be designed separately with access control, encryption, retention, and professional review.

---

## 12. Analytics and Observability

### 12.1 Conversion events

Implement the following events:

- `hero_primary_click`
- `service_path_select`
- `service_page_view`
- `project_view`
- `valuation_cta_click`
- `faq_expand`
- `lead_form_start`
- `lead_form_submit`
- `click_to_call`
- `whatsapp_click`
- `download_consultation_guide` if introduced

Parameters should include service type, page path, source section, device category, and campaign attribution where appropriate. Do not send message contents or documents.

### 12.2 Error monitoring

Use Sentry or an equivalent tool for:

- JavaScript exceptions.
- Form endpoint failures.
- CMS fetch failures.
- Image or asset failures.
- Release tracking.

Scrub personal data from error events. Configure alert thresholds so normal validation errors do not trigger incident noise.

### 12.3 Operational monitoring

Monitor:

- Form delivery failures.
- Email bounce or provider errors.
- 404 rates.
- Sitemap accessibility.
- CMS publishing failures.
- Build and deployment failures.
- Performance regressions.
- Broken external links.

---

## 13. Environments and Delivery Workflow

### 13.1 Environments

Use at least:

1. **Local development:** Individual developer environment.
2. **Preview or staging:** CMS preview and review environment.
3. **Production:** Public website with production credentials.

Never test form delivery or destructive content operations against production from local development without explicit safeguards.

### 13.2 Git workflow

- Protect the main branch.
- Use short-lived feature branches.
- Require pull-request review for production changes.
- Run linting, type checks, tests, and build checks in CI.
- Use preview deployments for visual review.
- Record release notes for major content or system changes.

### 13.3 Deployment checklist

Before production deployment:

- Environment variables are present and correct.
- CMS production project is connected.
- Domain and HTTPS are active.
- Forms route to the approved destination.
- Analytics and Search Console are configured.
- Sitemap and robots.txt are accessible.
- Structured data validates.
- Redirects are loaded.
- Error monitoring is active.
- Privacy and legal pages are published.
- Placeholder content is removed.

---

## 14. Testing Strategy

### 14.1 Functional tests

Test:

- Navigation and mobile menu.
- Service and project routes.
- CMS content rendering.
- Image loading and fallbacks.
- FAQ accordion.
- Progressive enquiry form.
- Service-specific fields.
- Client and server validation.
- Email notifications.
- Success and error states.
- Call and WhatsApp links.
- Analytics events.

### 14.2 SEO tests

Check:

- One H1 per page.
- Correct metadata.
- Canonical URLs.
- Sitemap contents.
- Robots behavior.
- Indexability.
- Broken links.
- Redirects.
- Structured data.
- Image alt text.
- Internal link coverage.

### 14.3 Accessibility tests

Perform automated scans and manual review using:

- Keyboard-only navigation.
- Screen-reader spot checks.
- Zoom and reflow checks.
- Colour contrast testing.
- Reduced-motion testing.
- Mobile touch testing.

### 14.4 Performance tests

Test representative pages on:

- Homepage.
- Residential service page.
- Interior service page.
- Property valuation page.
- Project detail page.
- Insight article.

Test with large images, slow network conditions, and mid-range mobile hardware where possible.

---

## 15. Recommended Implementation Phases

| Phase | Focus | Deliverables |
|---|---|---|
| 1 | Foundation | Repository, framework, tokens, layout, CMS connection, environments |
| 2 | Core pages | Homepage, service template, About, Process, Contact, legal pages |
| 3 | Content proof | Projects, project detail, FAQs, insights, media pipeline |
| 4 | Conversion | Progressive forms, email routing, WhatsApp, analytics events |
| 5 | SEO and quality | Metadata, schema, sitemap, accessibility, performance, redirects |
| 6 | Launch | Production deployment, monitoring, baseline metrics, rollback plan |
| 7 | Optimization | Search Console review, content updates, conversion improvements |

---

## 16. Acceptance Criteria

The technical implementation is ready for launch when:

1. All core pages render correctly on supported browsers and devices.
2. Public SEO content is available in the initial HTML or crawlable rendered output.
3. The CMS can manage services, projects, FAQs, insights, images, and SEO fields.
4. The form endpoint validates input on the server and routes notifications correctly.
5. Personal information is not exposed in client-side logs or analytics payloads.
6. Phone and WhatsApp actions work and are tracked.
7. Sitemap, robots, canonical URLs, metadata, and structured data are implemented.
8. No placeholder claims, images, or contact details remain in production.
9. Accessibility and performance checks meet the agreed launch threshold.
10. Error monitoring and operational alerts are active.
11. Backups, deployment documentation, and rollback steps exist.
12. The business owner has approved content, credentials, project proof, and valuation wording.

---

## 17. Final Technical Recommendation

Build My Space as a fast, content-managed, server-rendered marketing website with a small and maintainable frontend system. Keep content, design tokens, forms, analytics, and integrations modular. Avoid overengineering before the website has proven its conversion paths.

The most important technical principle is:

> **Make the content fast and crawlable, make the enquiry path secure and measurable, and make the editing workflow simple enough for the business to maintain.**

---

## References

[1]: https://nextjs.org/docs "Next.js Documentation"

[2]: https://www.typescriptlang.org/docs/ "TypeScript Documentation"

[3]: https://tailwindcss.com/docs "Tailwind CSS Documentation"

[4]: https://www.w3.org/TR/WCAG22/ "Web Content Accessibility Guidelines (WCAG) 2.2"

[5]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide "Search Engine Optimization (SEO) Starter Guide — Google Search Central"

[6]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Introduction to Structured Data Markup in Google Search — Google Search Central"
