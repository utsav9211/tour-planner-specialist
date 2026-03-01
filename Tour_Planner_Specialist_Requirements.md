# Website Requirements Document: Tour Planner Specialist

> **Company Origin:** India-based travel & tour management company  
> **Architecture:** Multi-page, modular website (HTML5 / CSS3 / Vanilla JS ES Modules)  
> **Primary Users:** Indian corporates, families, couples, students & educators — with global reach  

---

## 1. Executive Summary

**Tour Planner Specialist** is a premium, India-based travel and tour management platform. It serves **four core demographics** — Corporate Professionals, Leisure/Individual Travelers, Couples & Honeymooners, and Educational Institutions — each with **dedicated sub-categories** (e.g., Off-Site Meetings under Corporate, Heritage Walks under Educational). The platform is a **multi-page website** built with a **modular approach** so every section, page, and component can be developed, styled, and maintained independently. Indian payment gateways (Razorpay, UPI, Paytm), INR-first pricing, Hindi + English language support, and IRCTC/Indian Railways integrations are first-class citizens alongside international options.

---

## 2. Site Map — Multi-Page Architecture

| # | Page File | Purpose |
|---|-----------|---------|
| 1 | `index.html` | Homepage — hero, search, trust bar, featured packages, stats, testimonials, newsletter, footer |
| 2 | `corporate.html` | Corporate travel hub — all sub-categories, packages, quote form |
| 3 | `leisure.html` | Leisure & individual travel hub — all sub-categories, packages |
| 4 | `couples.html` | Couples & honeymoon hub — all sub-categories, registry |
| 5 | `education.html` | Educational tours hub — all sub-categories, approval workflows |
| 6 | `packages.html` | All packages gallery with filters across every category |
| 7 | `about.html` | Company story, team, certifications, India roots |
| 8 | `contact.html` | Contact form, office locations (India map), WhatsApp & phone CTAs |

Each page shares a **common navbar** and **footer** via modular JS/CSS imports.

---

## 3. Target Audience, Core Modules & Sub-Categories

### 3.1. Corporate / Professional Travel (`corporate.html`)

- **Target Audience:** HR managers, team leads, corporate event planners, C-suite executives, startup founders.

#### Sub-Categories (displayed as filterable cards on the page):

| Sub-Category | Description |
|---|---|
| **Off-Site Meetings** | Conference rooms at resorts/hotels, AV equipment, high-speed Wi-Fi, breakout rooms, professional facilitation support. |
| **Team Dinners & Gala Events** | Fine-dining venue bookings, curated multi-course menus (veg/non-veg/Jain), live entertainment, themed evenings. |
| **Team-Building Retreats** | Adventure camps, outbound training, leadership workshops, sports tournaments at offbeat India locations (Rishikesh, Coorg, Udaipur). |
| **Industrial & Factory Visits** | Manufacturing plant tours, SEZ visits, logistics and supply-chain exposure trips with safety compliance. |
| **Conference & Summit Travel** | End-to-end logistics for sending teams to national/international conferences — flights, visas, hotels, local transport. |
| **Incentive & Reward Trips** | Performance-based reward holidays — domestic (Goa, Andamans) or international (Thailand, Dubai) — branded merchandise, awards ceremonies. |
| **Client Entertainment** | Hosting client delegations — airport pickups, heritage city tours, luxury dining, golf outings. |
| **CSR & Volunteering Tours** | Community outreach trips, tree-planting drives, NGO-collaboration visits, rural immersion programs. |

- **Key Functionality:**
  - Bulk booking & room allocation tools.
  - Automated GST-compliant corporate invoices, proforma invoices, and quotation PDFs.
  - Integration with Indian expense platforms (Zoho Expense, SAP Concur India).
  - Dedicated B2B portal with Key Account Manager (KAM) access.
  - Meeting-room, AV gear, and conference facility add-on booking.
  - Company-branded itinerary exports (add client logo, colours).

---

### 3.2. Leisure / Individual Travel (`leisure.html`)

- **Target Audience:** Solo travelers, families, friend groups, senior citizens, backpackers.

#### Sub-Categories:

| Sub-Category | Description |
|---|---|
| **Weekend Getaways** | 2–3 night short breaks near major Indian metros (Lonavala, Matheran, Nainital, Mahabalipuram). |
| **Family Holidays** | Kids-friendly resorts, amusement parks, heritage cities, wildlife safaris (Ranthambore, Jim Corbett). |
| **Adventure & Trekking** | Himalayan treks, river rafting, paragliding, desert safaris, scuba diving (Andamans, Lakshadweep). |
| **Pilgrimage / Spiritual** | Char Dham Yatra, Varanasi, Golden Temple, Tirupati — with temple darshan priority arrangements. |
| **Wellness & Ayurveda** | Kerala Ayurveda retreats, yoga ashrams (Rishikesh), spa resorts, meditation camps. |
| **Solo Backpacker** | Hostel-centric budget packages, guided group joins for solo travelers, women-only batches available. |
| **Senior Citizen Specials** | Slow-paced itineraries, medical support on-call, wheelchair-accessible stays, Varanasi / Rameswaram spiritual journeys. |
| **International Holidays** | Bali, Thailand, Europe tours, Dubai shopping festivals — visa assistance, forex, travel insurance bundled. |

- **Key Functionality:**
  - Flexible search (by date, budget, destination, theme, group size).
  - Curated pre-built packages with rich photos & videos.
  - EMI options via Bajaj Finserv / HDFC, and UPI / Paytm / GPay one-click pay.
  - Customer reviews, ratings, and verified traveler testimonials.
  - Family-friendly filters (kids' clubs, child meals, interconnecting rooms).

---

### 3.3. Couples & Honeymooners (`couples.html`)

- **Target Audience:** Newlyweds, anniversary couples, romantic getaway seekers, pre-wedding trip planners.

#### Sub-Categories:

| Sub-Category | Description |
|---|---|
| **Honeymoon Packages** | Exotic honeymoons — Maldives, Bali, Manali, Andamans, Udaipur palaces — all-inclusive with transfers. |
| **Pre-Wedding Shoots & Trips** | Scenic location scouting, photographer tie-ups, Rajasthan/Kerala/Ladakh shoot packages. |
| **Anniversary Celebrations** | Surprise candlelight dinners, yacht cruises (Goa/Mumbai), hot-air balloon rides (Jaipur), spa+cake combos. |
| **Private Romantic Getaways** | Secluded villas, overwater bungalows, private beach stays — exclusively for two. |
| **Group Couples Retreat** | Travel with other couples — double-couple or quad-couple group packages with social activities & games. |
| **Destination Wedding Support** | Venue recce tours, vendor city visits (Udaipur, Jaipur, Kerala backwaters) — coordination with wedding planners. |

- **Key Functionality:**
  - **Travel Style Toggle:** "Private Getaway" vs "Group Couples Retreat."
  - **Honeymoon Registry:** Shareable link for friends/family to gift experiences (couple's spa, sunset cruise, room upgrade).
  - Room upgrade & romantic add-ons (champagne, flowers, candlelight setup, private transfers).
  - Curated romantic itineraries with time-of-day recommendations (sunrise hikes, sunset dinners).

---

### 3.4. Educational Tours (`education.html`)

- **Target Audience:** School principals, college HODs, university tour coordinators, professors, NCC/NSS coordinators, coaching institutes.

#### Sub-Categories:

| Sub-Category | Description |
|---|---|
| **Historical & Heritage Tours** | Mughal monuments (Delhi, Agra), Rajasthan forts, Hampi, Ajanta-Ellora — with certified ASI guides. |
| **Science & Technology Visits** | ISRO Sriharikota, BARC Mumbai, Nehru Science Centre, planetariums, tech-park tours (Bangalore, Hyderabad). |
| **Industrial Training Trips** | B.Tech/MBA factory/plant visits — Tata Steel Jamshedpur, Maruti Gurgaon, textile mills Ahmedabad — safety gear & compliance. |
| **Nature & Wildlife Expeditions** | National park safaris (Jim Corbett, Kaziranga, Periyar), botanical gardens, Western Ghats ecology walks — with naturalist guides. |
| **University & Campus Tours** | Visits to IITs, IIMs, AIIMS, central universities — admissions awareness, campus experience, faculty interaction sessions. |
| **Skill Development Workshops** | Soft-skills boot camps, coding hackathon trips (tech campuses), journalism workshops, photography expeditions. |
| **NCC / NSS / Scout Camps** | Adventure camps, trekking, community service, leadership training — with necessary Ministry of Defence / MoE approvals facilitated. |
| **International Academic Tours** | Education fairs abroad, NASA Space Camp (USA), Oxford/Cambridge visits (UK), Singapore STEM tours — visa, forex, insurance managed. |
| **Museum & Cultural Immersion** | National Museum Delhi, Salar Jung Hyderabad, Indian Museum Kolkata, folk-art villages — with expert art historians. |
| **Geography & Geology Field Trips** | Himalayan geology, Deccan Plateau formations, coastal studies (Konkan, Coromandel), river delta mapping. |

- **Key Functionality:**
  - Budget-friendly, high-capacity dormitory and hostel accommodation filtering.
  - Certified educational guide & subject-matter-expert booking per trip type.
  - Digital safety waiver, medical fitness, and parental consent form collection.
  - Student roster, ID card management, and emergency contact database.
  - Multi-tier approval workflow: Teacher → HOD → Principal / Registrar → Accounts → Payment.
  - Compliance with CBSE/state board/UGC circular requirements for educational excursions.
  - Chaperone-to-student ratio calculator & auto-suggestion.

---

### 3.5. Value-Added Services & User Retention

#### For the User (Traveler Needs):

- **Real-Time Trip Updates:** SMS & WhatsApp notifications for gate changes, weather alerts, or itinerary shifts.
- **Offline Mode:** Downloadable PDF/PWA of itinerary, tickets, hotel vouchers, and emergency contacts — works without Wi-Fi.
- **Local Connect — Hidden Gems:** Curated local recommendations (street food, chai spots, sunrise points) not on mainstream tourist apps — crowd-sourced & editor-picked.
- **Post-Trip Memory Board:** Private digital space — upload photos, co-create album/video montage, share on social.

#### For the Tour Company (Business Value):

- **Loyalty & Referral Program:** "Yatra Credits" earned on every booking — redeem on next trip or refer & earn.
- **AI-Powered Suggestions:** "You visited Jim Corbett last monsoon — want early access to our new Kaziranga winter package?"
- **Automated Post-Trip Surveys:** Instant feedback capture; auto-request Google/Trustpilot review if rating ≥ 4★.
- **24/7 Concierge Chat:** Priority WhatsApp business line for VIP/Corporate clients during live trips.

---

## 4. Design & Theme Requirements

### 4.1. Visual Identity & Colour Theme

| Context | Primary Colour | Accent | Imagery |
|---|---|---|---|
| **Global / Homepage** | Deep Navy `#0a1628` | Saffron Orange `#ff6b35` | Diverse India travel montage |
| **Corporate Mode** | Navy `#1a237e` + Silver `#cfd8dc` | Slate Blue | Boardrooms, team outings, conferences |
| **Leisure Mode** | Sky Blue `#0288d1` + Sunny Yellow `#fdd835` | Vibrant teal | Beaches, mountains, families, street food |
| **Couples Mode** | Soft Rose `#e91e63` + Champagne Gold `#d4a574` | Blush pink | Sunsets, palaces, candles, Udaipur lakes |
| **Education Mode** | Academic Green `#2e7d32` + Slate Blue `#455a64` | Lime | Students at monuments, labs, campuses |

- **Typography:** Montserrat (headings), Open Sans (body), Playfair Display (hero/decorative).
- **Indian Touch:** Rangoli-inspired dividers, mandala motifs in section backgrounds, Tricolour accent bar near footer.

### 4.2. UI / UX Standards

- **Dynamic Contextual Theming:** Entire UI (colours, imagery, copy) shifts when user selects a category tab on the homepage hero or navigates to a category page.
- **Micro-Interactions & Animations:** Smooth hover effects, skeleton loaders, fade-in on scroll, parallax hero backgrounds.
- **Sticky Navbar:** Logo, nav links (Home, Corporate, Leisure, Couples, Education, Packages, About, Contact), language toggle (EN / हिंदी), Login CTA, WhatsApp floating button.
- **Responsive:** Mobile-first. Flawless on desktop, tablet, mobile.
- **Accessibility:** WCAG 2.1 AA — high contrast mode toggle, scalable text, ARIA labels, keyboard navigation, screen-reader friendly.
- **Imagery:** High-def authentic Indian travel photography. UGC Instagram feed. Clean Font-Awesome icons.

---

## 5. Functional Requirements

### 5.1. General Platform Features

- **India-First Payments:** Razorpay, Paytm, UPI (GPay/PhonePe), Net Banking, Debit/Credit Cards. International: Stripe/PayPal as fallback. EMI via Bajaj Finserv / LazyPay.
- **Multi-Currency & Language:** INR default. USD/EUR/GBP converter. English + Hindi language toggle.
- **User Authentication & Security:**
  - MFA via SMS (Indian mobile) or Authenticator App.
  - Aadhaar / PAN / Passport scanning for high-value corporate/educational bookings.
  - Trust badges: SSL Secured, Ministry of Tourism Registered, IATO Member, Razorpay Verified, ISO 9001.
  - RBAC: Corporate admins see only their company data; users see only their own trips.
  - Transparent Policy Hub: Cancellation, Refund, COVID/Health, Privacy Policy — all accessible from every page footer.
- **Dynamic Contextual Theming:** Described in Section 4.1 — themes auto-switch on homepage tab selection and are pre-set on category pages.
- **Personalized Dashboards:** Separate portal views for Standard Users, Corporate Admins, Educators.
- **Step-by-Step Booking Wizard:** Progress bar — Select Dates → Choose Stay → Add Extras → Add Insurance → Payment.
- **Customer Support Hub:** Live chat (bot + human), searchable FAQ, WhatsApp Business API integration, 24/7 helpline number.

### 5.2. Advanced Functionality

- **AI Natural-Language Search:** "I need a 5-day team retreat near Jaipur for 40 people under ₹8,000 per person in November" → instant matched packages.
- **Dynamic Itinerary Builder:** Drag-and-drop daily schedule customizer. Export as branded PDF or shareable link.
- **Automated Quote Generator:** Input headcount, dates, meal type (veg/non-veg/Jain), budget — get instant cost breakdown.
- **Travel Insurance:** One-click add-on at checkout (flight cancellation, medical, baggage). Indian insurers: ICICI Lombard, HDFC ERGO.
- **Secure Document Vault:** Encrypted upload for passports, visas, student ID cards, permission slips, Aadhaar copies.
- **IRCTC / Indian Railways Integration:** Train booking assistance, Tatkal support, PNR tracking for budget educational tours.

---

## 6. Modular Technical Architecture

### 6.1. Directory Structure

```
Project/
├── index.html                  # Homepage
├── corporate.html              # Corporate travel page
├── leisure.html                # Leisure travel page
├── couples.html                # Couples & honeymoon page
├── education.html              # Educational tours page
├── packages.html               # All packages gallery
├── about.html                  # About us
├── contact.html                # Contact page
│
├── css/
│   ├── base.css                # Reset, variables, theming, typography
│   ├── navbar.css              # Shared sticky navbar
│   ├── hero.css                # Hero sections (varies per page)
│   ├── trust-bar.css           # Trust badges strip
│   ├── packages.css            # Package cards, filters, badges
│   ├── services.css            # Services grid
│   ├── categories.css          # Category cards & sub-category layouts (NEW)
│   ├── how-it-works.css        # Steps section
│   ├── stats.css               # Animated counters
│   ├── testimonials.css        # Testimonial slider
│   ├── quote.css               # Quote form
│   ├── policies.css            # Policy cards
│   ├── newsletter.css          # Newsletter signup
│   ├── footer.css              # Footer
│   ├── modal.css               # Login/register modal
│   ├── chat.css                # Floating chat widget
│   ├── utilities.css           # Animations, scroll reveal, back-to-top
│   └── about.css               # About page specific styles
│   └── contact.css             # Contact page specific styles
│
├── js/
│   ├── app.js                  # Main entry — boots shared modules
│   ├── navbar.js               # Navbar scroll, hamburger, dropdowns
│   ├── hero.js                 # Hero slideshow, search tabs, theme switch
│   ├── packages.js             # Package filters, wishlist, category dropdown integration
│   ├── categories.js           # Category card flip/expand, sub-category tabs (NEW)
│   ├── testimonials.js         # Testimonial slider
│   ├── stats.js                # Intersection Observer counter animation
│   ├── scroll-reveal.js        # Fade-in on scroll
│   ├── modal.js                # Login modal
│   ├── chat.js                 # Chat widget
│   ├── forms.js                # Quote, newsletter, contact form handlers
│   └── theme.js                # Dynamic contextual theme switcher (NEW)
│
└── Tour_Planner_Specialist_Requirements.md
```

### 6.2. Module Conventions

- Every JS file exports a single `initXxx()` function.
- `app.js` is loaded as `<script type="module">` — it imports and calls all init functions used on that page.
- Each HTML page loads only the CSS modules it needs (e.g., `education.html` loads `base.css + navbar.css + hero.css + categories.css + packages.css + quote.css + footer.css + utilities.css`).
- CSS Variables (custom properties) in `base.css` drive the theming; each category page sets `data-theme` on `<body>`.

---

## 7. Technical & Security Requirements

- **Performance:** Core Web Vitals optimised — lazy-loaded images, deferred JS, minified CSS.
- **SEO:** Meta tags, Open Graph, structured data (schema.org TourPackage), XML sitemap.
- **Security:** SSL enforced, GDPR-compliant cookie consent, tokenised payment (no card data stored).
- **Analytics:** Google Analytics 4 + Meta Pixel integration ready.
- **Hosting-Ready:** Static files deployable on Vercel, Netlify, or any Apache/Nginx server.

---

## 8. Summary of All Pages

| Page | Key Sections |
|---|---|
| **Homepage** | Hero with 4-tab search, trust bar, featured packages (2 per category), 8 services, how-it-works, stats, testimonials, newsletter, footer |
| **Corporate** | Corporate hero banner, 8 sub-category cards, featured corporate packages, corporate quote form, testimonials, footer |
| **Leisure** | Leisure hero banner, 8 sub-category cards, featured leisure packages, testimonials, footer |
| **Couples** | Romantic hero banner, 6 sub-category cards, honeymoon registry CTA, featured packages, testimonials, footer |
| **Education** | Academic hero banner, 10 sub-category cards, approval workflow infographic, featured packages, safety compliance section, footer |
| **Packages** | All packages with multi-filter (category + sub-category + budget + duration + destination), grid/list toggle |
| **About** | Company story, India heritage, team, certifications (IATO, ISO), partners, UGC gallery |
| **Contact** | Form, India office map, WhatsApp CTA, phone, email, social links |

---

