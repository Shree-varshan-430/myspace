# My Space — Headless CMS Content Model Specification

This document defines the content models, fields, validation rules, and publishing workflows for **My Space Engineering, Construction & Valuers** to configure in Sanity, Strapi, or another headless CMS.

---

## 1. Content Types

### 1.1 Service Model (`service`)
- `title` (String, required): e.g. "Residential Construction"
- `slug` (Slug, required, unique): e.g. `house-construction-bangalore`
- `category` (Enum: `Build`, `Design`, `Assess`, required)
- `h1` (String, required): Editorial problem-led headline
- `primaryKeyword` (String, required): Primary SEO keyword
- `metaTitle` (String, required)
- `metaDescription` (Text, required, max 160 chars)
- `eyebrow` (String, required)
- `tagline` (String, required)
- `heroImage` (Image, required, with alt text & focal point)
- `summary` (Text, required)
- `whoIsThisFor` (Array of Strings)
- `whatWeHelpWith` (Array of Objects: `title`, `desc`)
- `whatToPrepare` (Array of Strings)
- `scopeInclusions` (Array of Strings)
- `scopeExclusions` (Array of Strings)
- `disclaimer` (Text, optional)
- `faqs` (Array of References to `faq` or embedded objects)
- `relatedServices` (Array of References to `service`)

### 1.2 Project Model (`project`)
- `title` (String, required): e.g. "The Courtyard Residence"
- `slug` (Slug, required, unique): e.g. `serene-courtyard-villa-hsr`
- `category` (Enum: `Residential`, `Commercial`, `Civil`, `Interiors`, `Elevation & 3D`)
- `status` (Enum: `Completed`, `Ongoing`, `Concept`, required)
- `location` (String, required): Specific Bangalore locality (e.g. "HSR Layout Sector 2, Bengaluru")
- `builtUpArea` (String, required): e.g. "4,200 sq.ft (G+2 Duplex)"
- `year` (String, required): e.g. "2024"
- `heroImage` (Image, required)
- `galleryImages` (Array of Images with `caption` and `type`: `photo`, `blueprint`, `render`)
- `summary` (Text, required)
- `clientBrief` (Text, required)
- `mySpaceContribution` (Array of Strings)
- `keyFeatures` (Array of Strings)
- `materialsUsed` (Array of Strings)

### 1.3 Insight / Article Model (`insight`)
- `title` (String, required)
- `slug` (Slug, required, unique)
- `h1` (String, required)
- `category` (Enum: `Construction Guides`, `Design & Planning`, `Property Valuation`, `Cost & Budgeting`)
- `readTime` (String, required): e.g. "7 min read"
- `publishDate` (Date, required)
- `author` (Object: `name`, `role`)
- `heroImage` (Image, required)
- `metaTitle` (String, required)
- `metaDescription` (Text, required)
- `keyTakeaways` (Array of Strings)
- `sections` (Array of Objects: `heading`, `content` in rich text/markdown)

### 1.4 FAQ Model (`faq`)
- `question` (String, required)
- `answer` (Text, required)
- `category` (Enum: `General`, `Construction & Cost`, `Design & 3D`, `Valuation`, `Execution & Approvals`)
- `featuredOnHome` (Boolean, default: false)

### 1.5 Site Settings (`siteSettings`)
- `businessName` (String, required)
- `brandPromise` (String, required)
- `phone` (String, required)
- `whatsapp` (String, required)
- `email` (String, required)
- `officeAddress` (Object: `street`, `city`, `state`, `postalCode`)
- `operatingHours` (String)
- `serviceAreas` (Array of Strings)
- `globalDisclaimers` (Text)

---

## 2. Publishing Workflow & Content Verification
1. **Draft / Preview**: Support live preview before publishing.
2. **Mandatory Authenticity Check**: Editors must ensure all published project photos are labelled correctly (`Completed`, `Ongoing`, or `Concept`), and no unsupported rankings ("No. 1") or unverified credentials are included.
