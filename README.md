# ElektraServe - Corporate Website

A modern, responsive, and professional corporate website for **ElektraServe Energy Services Private Limited**. This application is built to elegantly showcase the company's electrical infrastructure expertise, substation construction capabilities, and the core vision of its founder, Ketan Gandhi.

## 🚀 Technologies & Dependencies

- **Framework**: `react` (^19.0.0), `react-dom` (^19.0.0) built via `vite` (^6.0.0).
- **Styling Engine**: `tailwindcss` (^3.4.17) via PostCSS.
- **Animations**: `framer-motion` (^12.4.7) for all scroll, entrance, and gesture animations.
- **Routing**: `react-router-dom` (^7.2.0) powering the dynamic project portfolio and SPA navigation.
- **Iconography**: `lucide-react` (^0.476.0) for consistent, scalable corporate iconography.
- **In-Page Navigation**: `react-scroll` (^1.9.3) for smooth scrolling anchor links across the main landing page.

## ✨ Key Features

- **Premium Corporate Aesthetic**: Light-themed, clean minimalist design prioritizing readability and professional trust.
- **Dynamic Projects Portfolio**: Centralized data architecture (`src/data/projects.js`) powering an 'All Projects' grid and automatically generating dynamic individual `/projects/:id` detail pages.
- **Cinematic Animations**: Sophisticated scroll-linked reveals, hover zooms, and staggered entrance flows using Framer Motion.
- **Responsive Architecture**: Fully mobile-optimized layouts with a custom smart-collapsing navigation drawer.
- **Dedicated Leadership Hub**: A dedicated page (`/ketan-gandhi`) detailing the CEO's vision, biography, and a curated catalog of published books linked directly to a WhatsApp store.

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/kundanmehta01/substation.git
   cd substation
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```
   *(Ensure you let Vite install its required dependencies for React and Tailwind)*

3. **Start the Development Server**  
   ```bash
   npm run dev
   ```
   *The application will launch on `http://localhost:5173`.*

4. **Build for Production**  
   To generate a minified, production-ready build of the application:
   ```bash
   npm run build
   ```
   *(The compiled output will be placed in the `/dist` folder, ready for deployment on platforms like Vercel, Netlify, or standard web hosting).*

## 📁 Project Structure

```text
src/
├── assets/          # Static images, logos, and SVGs
├── components/      # Reusable UI sections (Navbar, Hero, About, Projects, etc.)
├── data/            # Centralized application data (e.g., projects.js)
├── pages/           # Dedicated route views (AllProjects, CEODetails, ProjectDetails)
├── App.jsx          # Main application router and root layout
├── main.jsx         # React DOM rendering entry point
└── index.css        # Global CSS, Tailwind layers, and typography overrides
```

## 📝 Customization

- **Brand Assets**: The primary logo is located at `public/logo.png` and `src/assets/logo.png`. Replace these files to instantly update the branding across the site.
- **Theme Colors**: Color palettes, including the primary `brand` deep-blue, are centralized inside `tailwind.config.js`.

---
*Developed for ElektraServe Energy Services Pvt. Ltd.*
