# My Space Website UI/UX Design Brief

## My Space Engineering, Construction & Valuers

**Document purpose:** Guide the visual design, interaction design, content presentation, and responsive implementation of the My Space website.  
**Primary audience:** Property owners and decision-makers in Bengaluru / Bangalore.  
**Primary conversion:** Qualified construction, design, interior, commercial, or valuation enquiry.  
**Prepared by:** Manus AI  
**Document status:** Design direction and implementation brief

---

## 1. Design Direction

My Space should look like a refined architecture and engineering practice with the practical confidence of a construction company and the warmth of an interior design studio. The website must not look like a generic contractor catalogue, a real-estate listing portal, or a visually empty corporate brochure.

The central design idea is:

> **Make complex property decisions feel clear, visible, and manageable.**

The interface should make the visitor feel that My Space understands the uncertainty around construction, interiors, visual design, commercial projects, and property valuation. The design should show a clear path from **idea → drawing → design → construction → interior → finished space**.

### 1.1 Desired brand qualities

| Quality | How the UI should express it |
|---|---|
| Trust | Deep navy, stable layouts, visible contact details, clear process, accurate labels |
| Engineering precision | Structured grids, measured spacing, linework, technical drawings, disciplined components |
| Design sensitivity | Editorial typography, material imagery, careful image cropping, generous whitespace |
| Approachability | Plain-language headings, guided forms, warm images, clear next steps |
| Local relevance | Bengaluru references, authentic Indian architecture, service-area clarity |
| Premium quality | Strong art direction, restrained motion, rich project photography, considered details |

### 1.2 What the design must avoid

The design must avoid generic construction imagery, excessive hard-hat photography, noisy gradients, overly bright orange or red construction colours, repetitive card grids, unsupported achievement badges, fake testimonials, fake statistics, excessive glassmorphism, and large empty spaces without a visual purpose.

---

## 2. Audience and Pain-Point Design Requirements

The homepage and service pages must visibly solve the visitor’s main concern rather than simply listing services.

| Audience | Core question | Required UI response |
|---|---|---|
| Plot owner | Where do I begin? | Problem-led hero, guided enquiry, five-stage process |
| Home builder | How do I control scope and cost? | Scope explanation, assumptions, construction process, cost-guide links |
| Interior client | Can someone coordinate design and execution? | Service scope, material visuals, design-to-execution pathway |
| Design-led client | Can I see the result before building? | Elevation, floor-plan, drawing-to-visualization sequence |
| Commercial client | Can the work be coordinated around my business? | Commercial service page, project coordination proof, tailored enquiry fields |
| Valuation client | What documents and steps are involved? | Separate valuation pathway, document guidance, inspection-to-report sequence |
| First-time client | Can I ask without knowing technical terms? | Plain language, “not sure yet” form option, preparation checklist |
| Remote client | How will I know what is happening? | Milestones, communication expectations, decision points, process visibility |

### Design rule

Every major page section should do at least one of the following:

1. Identify a user concern.
2. Explain how My Space helps.
3. Show what the visitor can expect.
4. Provide evidence or a clear limitation.
5. Offer a relevant next step.

---

## 3. Information Architecture and Page Templates

### 3.1 Primary navigation

Desktop navigation should contain:

- Services
- Projects
- How It Works
- About
- Insights
- Contact
- Start a Project

The header should not expose every keyword or service as separate top-level links. Services should open a clear grouped menu with the following categories:

| Group | Links |
|---|---|
| Build | Civil Construction, Residential Construction, Commercial Construction |
| Design | Interior Design, Elevation Design, 3D Floor Plans |
| Assess | Property Valuation |

### 3.2 Page hierarchy

| Page | Main design role | Primary SEO topic |
|---|---|---|
| Homepage | Broad positioning and routing | Construction company in Bangalore |
| Residential construction | Build confidence for plot and home projects | House construction company in Bangalore |
| Commercial construction | Explain commercial coordination and scope | Commercial construction company in Bangalore |
| Civil construction | Establish technical execution credibility | Civil contractors in Bangalore |
| Interior design | Explain design, materials, and execution | Interior design company in Bangalore |
| Elevation design | Show façade and exterior design capability | 3D elevation design Bangalore |
| 3D floor plans | Show spatial planning and visualization | 3D floor plan design Bangalore |
| Property valuation | Clarify valuation purpose, documents, inspection, and report | Property valuation in Bangalore |
| Projects | Provide proof through project stories | Service-specific long-tail searches |
| Process | Make the journey visible | House construction process in Bangalore |
| Insights | Answer cost and decision-support questions | Cost and process keywords |
| FAQs | Resolve objections and support long-tail intent | Question-based searches |
| Contact | Convert and provide complete business details | Local and branded intent |

### 3.3 Page template pattern

Every service page should follow this structure:

1. Problem-led hero.
2. Plain-language service definition.
3. What is included or discussed.
4. Process and decision points.
5. Visual proof or relevant project evidence.
6. What the visitor should prepare.
7. FAQs.
8. Contextual enquiry CTA.

---

## 4. Homepage UI/UX Specification

### 4.1 Homepage journey

The homepage should guide the visitor through:

> **I have a concern → My Space understands it → There is a clear process → I can see the thinking → I know what to prepare → I can start a conversation.**

### 4.2 Section sequence

| Order | Section | Visitor question answered |
|---:|---|---|
| 1 | Hero | Can My Space help with my type of need? |
| 2 | Reassurance strip | Do they understand the risks and uncertainty? |
| 3 | Situation-led service selector | Which path is relevant to me? |
| 4 | Pain-point section | Do they understand what usually goes wrong? |
| 5 | Solution process | How does My Space reduce uncertainty? |
| 6 | Drawing-to-built journey | Can I see how the idea becomes real? |
| 7 | Project proof | Have they handled relevant work? |
| 8 | Materials and design details | Do they care about quality and decisions? |
| 9 | Elevation and 3D plans | Can I visualize before construction? |
| 10 | Valuation pathway | Can they help with property valuation clearly? |
| 11 | Trust and accountability | Who is responsible and how are decisions managed? |
| 12 | FAQs | Can I resolve remaining concerns? |
| 13 | Final CTA | What is the easiest next step? |
| 14 | Footer | Are the business details complete and trustworthy? |

---

## 5. Homepage Content and Layout Brief

### 5.1 Header

#### Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ [MY SPACE]  Services  Projects  How It Works  About  Insights │
│                                           [Start a Project]   │
└──────────────────────────────────────────────────────────────┘
```

The header should use a transparent or semi-transparent state over the hero and transition to a solid white or deep navy state on scroll. The primary CTA must remain visually prominent.

#### Mobile

```text
┌──────────────────────────────────────────────┐
│ [MY SPACE]                         [Call] [≡] │
└──────────────────────────────────────────────┘
```

After the visitor leaves the hero, show a sticky bottom action bar:

```text
┌──────────────────────────────────────────────┐
│ [Call]          [WhatsApp]          [Enquire] │
└──────────────────────────────────────────────┘
```

### 5.2 Hero

#### Primary user problem

> “I want to build, design, or value a property, but I am unsure where to begin.”

#### Recommended hero content

**Eyebrow:**

> BUILD WITH MORE CLARITY

**H1:**

> Planning to build, design, or value a space in Bangalore?

**Supporting copy:**

> My Space brings engineering, construction, interiors, visual design, and property valuation enquiries into one clear journey.

**Primary CTA:** `Tell Us What You Are Planning`  
**Secondary CTA:** `See How It Works`

#### Visual direction

Use a large, immersive image-led hero rather than a small image beside a long paragraph. The background should combine:

- Contemporary residential or commercial architecture.
- Subtle architectural drawing or floor-plan linework.
- Natural greenery and landscaped space.
- Concrete, stone, wood, brick, steel, or glass.
- A visible relationship between concept and built space.
- A negative-space area for readable text.

The hero may use a four-stage transition:

> Imagine → Design → Build → Live

Motion must remain slow, subtle, and understandable without animation.

#### Hero service chips

Show four small selectable links below the CTA:

- I want to build a home
- I need design clarity
- I need interiors
- I need a valuation

Each option should route to a relevant page or set the enquiry form mode.

### 5.3 Reassurance strip

Use four short evidence-led statements:

- **Start with clarity:** Understand what needs to happen before work begins.
- **See the idea first:** Use drawings, elevations, and 3D plans to make decisions.
- **Know the next stage:** Follow a visible process from planning to handover.
- **Talk to one team:** Reduce confusion between design, execution, and coordination.

Do not use unverified numbers, rankings, or “guaranteed” claims.

### 5.4 Situation-led service selector

**Eyebrow:** `WHAT ARE YOU PLANNING?`  
**H2:** `Choose the next decision you need to make.`

Use six image-led cards:

| Card | Primary visual | CTA |
|---|---|---|
| Build a home | Villa, home, plot, courtyard, or construction stage | Explore home construction |
| Shape a commercial space | Office, retail, clinic, or commercial façade | Discuss commercial construction |
| Make the inside work | Warm interior, materials, lighting, storage | Explore interior design |
| See it before building | Elevation, floor plan, or 3D visual | Explore design services |
| Strengthen the build | Concrete, foundation, structure, or site progress | Explore civil construction |
| Understand the property | Property exterior, inspection, or report context | Explore valuation |

The cards should use a varied editorial grid rather than six identical boxes.

### 5.5 Pain-point section

**H2:**

> Most property stress begins before the first brick is placed.

Show four risks:

- Unclear scope.
- Disconnected teams.
- Difficult visual decisions.
- Uncertain documentation.

Use concise explanations and a constructive tone. The next section should immediately show how My Space addresses these risks.

### 5.6 Process solution section

**H2:**

> A clearer way forward, from first conversation to final outcome.

Display:

1. Understand.
2. Plan.
3. Visualize.
4. Build.
5. Handover.

Each stage should include a short visitor-facing explanation and a related image or visual: site note, floor plan, elevation, material, construction, or completed space.

### 5.7 Drawing-to-built visual journey

**H2:**

> See the thinking before you see the finished space.

Display a sequence:

```text
Brief → Sketch → Floor Plan → Elevation → Construction → Finished Space
```

Use an interactive slider only if it remains accessible and fast. A scrollable editorial sequence is preferred for mobile.

### 5.8 Projects

**Eyebrow:** `SELECTED WORK`  
**H2:** `Spaces shaped around how people live and work.`

Projects must be presented as stories, not only image tiles. Each project should show:

- Project type.
- General location.
- Client need or brief.
- My Space contribution.
- Status: Completed, Ongoing, or Concept.
- Relevant images, drawings, or progress evidence.
- `View project` link.

If an item is a concept or visualization, label it clearly.

### 5.9 Materials and design details

**H2:** `Details that shape the experience.`

Use a horizontal band of material close-ups:

- Concrete.
- Brick.
- Stone.
- Wood.
- Metal.
- Glass.
- Tile.
- Greenery.
- Lighting.

The section should make the website tactile and architectural without becoming decorative noise.

### 5.10 Elevation and 3D floor plan section

**H2:** `See the space before it is built.`

Use two large visual panels:

- Elevation Design: façade drawing transitioning into a rendered exterior.
- 3D Floor Plans: technical plan transitioning into a furnished spatial view.

Include:

> Visualizations communicate design intent. Final construction and approval drawings depend on project scope and qualified technical review.

### 5.11 Property valuation section

**H2:** `Need a valuation for a bank, property decision, or record?`

Show:

> Enquire → Share documents → Inspect → Assess → Report

Explain purpose, documents, inspection, report scope, and professional limitations. Use a distinct pale-blue or structured-report visual treatment so valuation visitors can identify their route quickly.

Required disclaimer:

> A valuation does not guarantee loan approval. The final scope depends on the property, documents, inspection, and applicable professional requirements.

### 5.12 Trust and accountability

**H2:** `Thoughtful planning. Clear execution.`

Use four principles:

- Clear scope.
- Visible decisions.
- Coordinated communication.
- Accurate expectations.

Use project and process evidence rather than unsupported performance claims.

### 5.13 FAQs

Use an accessible accordion with the following initial questions:

1. I am not sure where to start. Can I still contact My Space?
2. Do you handle residential and commercial construction?
3. Can I request only an elevation design or 3D floor plan?
4. Do you provide interior design with execution support?
5. How are construction scope and estimates explained?
6. What information is useful for a first consultation?
7. How does a property or bank valuation enquiry work?
8. Does a valuation guarantee bank approval?
9. Which areas of Bengaluru do you serve?
10. Can I view completed or ongoing work?

### 5.14 Final CTA

**H2:**

> You do not need to have everything figured out.

**Supporting copy:**

> Tell us what you are planning, what is unclear, or where you need help. We will start with the right questions.

**Initial fields:**

- Name.
- Phone number.
- What do you need help with?
- Project location.
- Message.

**Dropdown options:**

- Build a home.
- Commercial construction.
- Civil construction.
- Interior design.
- Elevation or 3D floor plan.
- Property valuation.
- Not sure yet.

**CTA:** `Start the Conversation`

---

## 6. Visual Design System

### 6.1 Colour palette

#### Core colours

| Token | Hex | Usage |
|---|---|---|
| Midnight Navy | `#0B1F3A` | Header, footer, dark panels, primary dark text |
| My Space Blue | `#155EEF` | Primary buttons, links, active states |
| Steel Blue | `#2F6FED` | Secondary accents, hover, diagrams |
| Sky Mist | `#EAF2FF` | Soft sections, valuation, forms |
| Ice White | `#F7FAFF` | Page background, alternating sections |

#### Supporting colours

| Token | Hex | Usage |
|---|---|---|
| Slate | `#334155` | Body text |
| Muted Slate | `#64748B` | Captions and metadata |
| Architectural Gold | `#B77A32` | Small premium accent only |
| Concrete Grey | `#D8DDE5` | Borders, drawing backgrounds, neutral surfaces |
| Brick Terracotta | `#A85D3A` | Image-led material accent only |
| Natural Green | `#5E765A` | Image-led landscape accent only |
| Warm Sand | `#C9B79C` | Image-led architectural accent only |
| Success Green | `#16855B` | Success state with text or icon |
| Error Red | `#B42318` | Error state with explanatory text |

### 6.2 Colour rules

1. Use Midnight Navy as the main trust and foundation colour.
2. Use My Space Blue for actions and interactive emphasis.
3. Keep gold below approximately 5% of the interface.
4. Let natural green, brick, wood, and stone appear primarily through photography and material visuals.
5. Do not use colour as the only indicator of status.
6. Test all actual combinations for WCAG 2.2 AA contrast.

### 6.3 Typography

| Role | Font | Use |
|---|---|---|
| Display | DM Serif Display | H1, major H2s, editorial statements, project titles |
| Interface | Manrope | Navigation, body, buttons, forms, labels, cards, technical text |
| Display fallback | Georgia, serif | Fallback for display headings |
| Interface fallback | Arial, sans-serif | Fallback for interface text |

#### Type scale

| Element | Desktop | Mobile | Guidance |
|---|---:|---:|---|
| H1 | 56–72 px | 38–48 px | Use a strong but readable line break |
| H2 | 40–52 px | 30–36 px | Major section statements |
| H3 | 24–32 px | 22–26 px | Service and project headings |
| Body large | 20–22 px | 18–20 px | Hero and introductory text |
| Body | 16–18 px | 16–17 px | Main reading text |
| Label | 12–14 px | 12–13 px | Eyebrows, metadata, categories |
| Button | 15–16 px | 15–16 px | Medium or semibold weight |

Use sentence case for most headings. Use uppercase only for short labels and service categories.

### 6.4 Grid, spacing, and layout

- Desktop content width: 1,200–1,280 px.
- Desktop grid: 12 columns with 24 px gutters.
- Tablet grid: 8 columns.
- Mobile grid: 4 columns with comfortable side padding.
- Spacing system: multiples of 8 px.
- Desktop section padding: 96–144 px.
- Mobile section padding: 64–88 px.
- Card radius: 12–20 px, used consistently.
- Primary button height: 48–56 px.
- Form input height: minimum 48 px.
- Tap target: minimum 44 × 44 px.
- Reading width: approximately 60–75 characters.

Avoid making every section the same height. Use visual rhythm: full-width image, contained content, dark panel, drawing sequence, project gallery, then conversion section.

### 6.5 Borders, shadows, and surfaces

- Use thin, low-contrast borders for cards and inputs.
- Use shadows sparingly and softly.
- Prefer depth through image framing, background contrast, spacing, and panel overlap.
- Avoid heavy drop shadows and excessive floating cards.
- Use blueprint lines and measurement marks only when they support the content.

### 6.6 Imagery and art direction

Use original project images whenever available. The required image categories are:

- Contemporary Bangalore homes and villas.
- Residential and commercial construction progress.
- Concrete, brick, stone, wood, glass, metal, and tile.
- Architectural drawings and floor plans.
- Elevation studies and 3D visualization.
- Warm interiors with natural light and greenery.
- Courtyards, gardens, balconies, and indoor-outdoor spaces.
- Site inspection and property documentation context for valuation.

Avoid generic hard-hat stock images, unrelated skyscrapers, empty rooms, unrealistic luxury mansions, overly futuristic architecture, and images that do not represent the service described.

All images require descriptive alternative text. Concept visuals must be labelled as concept or visualization. Do not present stock or AI-generated visuals as completed My Space projects.

---

## 7. Component Specification

### 7.1 Buttons

| Button type | Appearance | Use |
|---|---|---|
| Primary | My Space Blue fill, white text | Main enquiry and project actions |
| Secondary | Transparent or white with navy/blue border | Explore, view, and supporting actions |
| Dark-panel primary | White or blue fill on Midnight Navy | CTA sections |
| Text link | Underline or arrow, no container | Project and service navigation |

Button labels should be specific:

- Start a Project
- Tell Us What You Are Planning
- Discuss a Commercial Project
- Plan Your Interiors
- Request a Valuation Consultation
- View Project
- See How It Works

Do not use `Submit` as the main conversion label.

### 7.2 Service cards

Each service card should include:

- Situation-led title.
- One-sentence outcome.
- Relevant image or drawing.
- Service category label.
- Contextual link.
- Hover and focus state.

Do not use six identical icon cards for the primary service selector.

### 7.3 Project cards

Each project card should include:

- Image or drawing.
- Category.
- Project name or approved neutral descriptor.
- General location if permitted.
- Status.
- Short brief or challenge.
- View project link.

### 7.4 Process timeline

Desktop should use a horizontal five-stage sequence. Mobile should use a vertical timeline. Each stage should have a number, title, short explanation, visual, and optional active state.

### 7.5 FAQ accordion

Each question must be a real button with:

- `aria-expanded`.
- `aria-controls`.
- Visible focus.
- Clear open and closed states.
- No hover-only content.

### 7.6 Enquiry form

Use progressive disclosure. Start with a short form and reveal service-specific questions after the visitor chooses a path.

| Service | Additional fields |
|---|---|
| Residential | Property type, plot location, approximate area, current stage |
| Commercial | Business type, property type, location, approximate scope, timeline |
| Interiors | Property type, area, possession status, rooms involved |
| Elevation / 3D | Existing plan availability, desired deliverable, property type |
| Civil | Work type, site stage, technical requirement, location |
| Valuation | Property type, purpose, location, area, document availability |

Provide clear field labels, errors, success state, privacy notice, and spam protection.

### 7.7 Trust proof block

Use approved project stories, team credentials, process evidence, and testimonials with permission. If proof is unavailable, use a factual “What to expect” block instead of placeholder praise.

### 7.8 Mobile contact bar

Show after the hero:

- Call.
- WhatsApp.
- Enquire.

Do not cover form fields, cookie notices, or important content.

---

## 8. Responsive Design Requirements

### Desktop: 1,024 px and above

- Full navigation.
- Immersive hero with architectural background.
- Varied service grid.
- Horizontal process timeline.
- Editorial project gallery.
- Split valuation section.
- Two-column final CTA with form.

### Tablet: 768–1,023 px

- Reduced hero text width.
- Two-column or asymmetric service layout.
- Project gallery in two columns.
- Process may wrap or become vertical.
- Final CTA may stack.

### Mobile: 320–767 px

- Single-column content.
- Hero text above or clearly separated from image.
- Full-width service cards with image.
- Vertical process timeline.
- Project gallery stacked vertically.
- Valuation section clearly separated.
- Sticky Call, WhatsApp, and Enquire bar.
- No hover-dependent information.
- Minimum 44 px tap targets.
- Forms use large fields and clear validation.

---

## 9. Motion and Interaction Design

Motion should support understanding, not decoration.

### Approved motion patterns

- Fade-up section reveal.
- Gentle image mask reveal.
- Subtle card lift on hover and focus.
- Slow hero image transition.
- Process stage activation.
- Accordion expansion.
- Smooth anchor scrolling.

### Motion restrictions

- No autoplay audio.
- No aggressive parallax.
- No rapid background changes.
- No excessive page transitions.
- Respect `prefers-reduced-motion`.
- Essential content must remain available without animation.

---

## 10. SEO and Content Presentation Requirements

### 10.1 Page-level SEO

Each page should have:

- One clear H1.
- Unique title tag.
- Unique meta description.
- Descriptive URL.
- Canonical URL.
- Open Graph metadata.
- Breadcrumbs where useful.
- Semantic heading hierarchy.
- Descriptive image alt text.
- One primary topic and clear internal links.

### 10.2 Keyword integration

Use the supplied keyword strategy to guide page topics, not to create repetitive copy. Each pillar page should target one primary keyword family:

| Page | Primary phrase |
|---|---|
| Homepage | Construction company in Bangalore |
| Residential | House construction company in Bangalore |
| Commercial | Commercial construction company in Bangalore |
| Civil | Civil contractors in Bangalore |
| Interior | Interior design company in Bangalore |
| Elevation | 3D elevation design Bangalore |
| 3D plans | 3D floor plan design Bangalore |
| Valuation | Property valuation in Bangalore |

### 10.3 Cost content

Cost pages must explain variables, assumptions, exclusions, date, and update ownership. Do not show unverified universal prices or imply that an educational range is a final quotation.

### 10.4 Valuation content

Use bank-related keywords only when they accurately represent My Space’s professional qualifications and scope. Never imply loan approval. Separate valuation, market opinion, construction estimate, and title verification.

### 10.5 Local context

Use Bangalore in selected search-facing elements and Bengaluru naturally in editorial and local context. Publish area-specific pages only when the company has genuine service coverage and unique content.

---

## 11. Accessibility and Usability

The design must target WCAG 2.2 AA.

Required:

- Keyboard navigation.
- Visible focus state.
- Logical heading order.
- One H1 per page.
- Accessible navigation menu.
- Real buttons for accordions.
- Labelled inputs and clear errors.
- Descriptive links.
- Alternative text for meaningful images.
- Empty alternative text for decorative images.
- Sufficient colour contrast.
- No colour-only status communication.
- Reduced-motion support.
- Form controls large enough for touch.

---

## 12. Analytics and Conversion Tracking

Track these events:

| Event | Trigger | Parameters |
|---|---|---|
| `hero_primary_click` | Hero primary CTA | Source section, device |
| `service_path_select` | Situation-led card or chip | Selected situation |
| `service_page_view` | Service page visit | Service name |
| `process_stage_view` | Process stage interaction | Stage name |
| `project_view` | Project opened | Project category, status |
| `valuation_cta_click` | Valuation action | CTA location |
| `faq_expand` | FAQ opened | Question ID |
| `lead_form_start` | First form interaction | Form mode |
| `lead_form_submit` | Successful enquiry | Service type, source section |
| `click_to_call` | Phone link | Page and section |
| `whatsapp_click` | WhatsApp link | Page and section |

Do not send message contents, documents, or unnecessary personal information to analytics tools.

---

## 13. Content and Brand Governance

Before launch, the client must approve:

- Logo and wordmark.
- Formal business name.
- Contact details.
- Service coverage.
- Team names and qualifications.
- Project images and permissions.
- Testimonials.
- Valuation credentials and limitations.
- Cost information and update dates.
- Claims about approvals, bank relationships, certifications, warranties, and timelines.

The design team should use placeholders only when clearly marked and should maintain a content inventory so placeholder images and claims cannot accidentally reach production.

---

## 14. Design Deliverables

The design phase should produce:

1. Desktop homepage design.
2. Tablet homepage adaptation.
3. Mobile homepage design.
4. Service page template.
5. Project detail template.
6. Process page template.
7. Contact and enquiry form states.
8. Valuation-specific form state.
9. Header states: default, scrolled, mobile menu open.
10. Footer design.
11. Component library.
12. Colour and typography tokens.
13. Image ratio and art-direction guide.
14. Accessibility annotations.
15. Interaction and motion notes.
16. Content placement map.
17. Developer handoff specifications.

---

## 15. Design Review Checklist

The design is ready for build when:

- The visitor problem is visible before the service list.
- The hero explains who the company helps and what the next action is.
- The six service paths are understandable without technical expertise.
- Construction, architecture, interiors, drawings, materials, and valuation are represented visually.
- The page does not rely on repetitive cards.
- The drawing-to-built journey is easy to understand.
- Project proof is labelled accurately.
- The valuation path is distinct and compliant.
- The enquiry form is short at the first step.
- Contact actions are visible on mobile.
- The H1 and page topic align with the SEO strategy.
- Typography, colour, contrast, and spacing are consistent.
- All components have hover, focus, error, success, and mobile states where relevant.
- All claims and visual assets have been approved.
- The page still works and remains understandable when motion is disabled.

---

## 16. Final Design Recommendation

The My Space website should be designed as a **guided property decision experience**, not as a list of company capabilities.

The most important visual and UX sequence is:

> **Concern → Clarity → Drawing → Construction → Finished space → Conversation**

If a visitor can recognize their concern, see a relevant path, understand the process, view credible evidence, and start with a short enquiry, the design will solve the audience pain points while supporting the SEO strategy.

The homepage should ultimately communicate:

> **You do not need to have everything figured out before contacting My Space. You only need to know what you are trying to create.**
