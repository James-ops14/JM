# [JM] — JM Technologies portfolio

A responsive, modern portfolio website built with React. 

<<<<<<< Updated upstream
🌐 **Live Demo:** [Link to your live site, e.g., https://yourname.dev]
=======
The current scope is deliberately limited to application scaffolding, a dual-theme visual foundation, routing, reusable interface primitives, automated tests, and developer tooling. Finished page designs, approved company content, contact handling, case studies, and AI-assistant functionality have not yet been implemented.
>>>>>>> Stashed changes

---

<<<<<<< Updated upstream
## 🛠️ Tech Stack
=======
- React 19 and React DOM
- React Router 8 in data-router mode
- Vite 8 with the official React plugin
- TypeScript in strict mode
- Tailwind CSS 4 through its official Vite plugin
- Local Inter, Space Grotesk, and IBM Plex Mono font packages
- ESLint and Prettier
- Vitest, React Testing Library, jest-dom, user-event, and jsdom
>>>>>>> Stashed changes

- **Frontend:** React, JavaScript (ES6+), [Tailwind CSS / Styled Components]
- **Build Tool:** [Vite / Next.js / Create React App]
- **Deployment:** [Vercel / Netlify / GitHub Pages]

---

## ✨ Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Dynamic Projects Section:** Interactive cards showcasing my best work with live links and source code.
- **Contact Form:** Integrated with [EmailJS / Formspree / Custom Backend] for direct messaging.
- **Dark Mode:** (Optional) Seamless theme switching for better user experience.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have Node.js and npm installed.
- [Download Node.js](https://nodejs.org)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com[your-username]/[your-repo-name].git
   cd [your-repo-name]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *(Note: Change to `npm start` if you are using Create React App)*

4. Open `http://localhost:5173` (or the terminal-provided port) in your browser.

---

## 📂 Project Structure

```text
src/
├── assets/          # Images, icons, and logos
├── components/      # Reusable UI components (Button, Navbar, Footer)
├── sections/        # Main page sections (Hero, About, Projects, Contact)
├── styles/          # Global styles or Tailwind configuration
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

---

<<<<<<< Updated upstream
## 📄 License
=======
## Visual foundation

The application supports light and dark themes using semantic CSS tokens and a typed React theme provider. A visitor's saved jm-theme selection takes priority; otherwise the first visit follows the system colour preference. A small inline script applies that choice before React renders to prevent an obvious theme flash.

The development-only design-system preview is available at /__design-system. It is intentionally excluded from primary navigation and is not a public JM page.

## Environment variables
>>>>>>> Stashed changes

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ✉️ Contact

<<<<<<< Updated upstream
- **Email:** [jaymohsilvah@gmail.con]
- **LinkedIn:** [://linkedin.com]
- **Twitter/X:** [@yourhandle]
Use code with caution.
=======
The application has minimal verification pages for /, /about, /services, /portfolio, /team, /contact, and /privacy, plus a not-found route. The internal /__design-system route previews foundational tokens and primitives. Public route pages remain scaffolding and are not representative of the final JM design.

## Project status

The engineering and first visual-system foundations are in place. Brand strategy approval, content modelling, production application shell, public page design, integrations, and deployment decisions remain pending. Verified company email and social profiles are not currently available and are intentionally omitted.

## Contributing

1. Pull the latest changes from the appropriate shared branch.
2. Create a focused working branch when the team workflow calls for one.
3. Keep changes scoped and avoid committing secrets or generated output.
4. Run `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test:run`, and `npm run build` before requesting review.
5. Use a pull request for review; do not merge another contributor's work without coordination.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
>>>>>>> Stashed changes
