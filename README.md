# Jane Du — Personal Portfolio

A modern, AI-focused portfolio website showcasing professional experience, skills, and projects. Built with clean, modular code following web development best practices.

## 🎯 Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** — GSAP-powered scroll reveals and hero entrance animations
- **Custom Cursor** — Interactive cursor that responds to elements
- **Glassmorphism UI** — Modern aesthetic with frosted glass effects
- **Modular Architecture** — Separated HTML, CSS, and JavaScript for maintainability
- **JSON-based Configuration** — Update profile content without touching code
- **Performance Optimized** — Minimal dependencies, fast load times

## 📁 Project Structure

```
public/
├── index.html          # Semantic HTML structure
├── styles.css          # Organized styling with CSS variables
├── main.js             # Modular JavaScript logic
├── data.json           # Profile configuration (easy to update)
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox
- **JavaScript (Vanilla)** — No framework dependencies
- **GSAP** — Animation library for smooth interactions
- **ScrollTrigger** — Scroll-based animations
- **Google Fonts** — Typography (Syne, DM Mono)

## 📋 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for customization (VS Code recommended)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Jane-Du_Personal-Portfolio-AI-.git
   cd Jane-Du_Personal-Portfolio-AI-
   ```

2. **Open in browser**
   - Navigate to `public/index.html` and open in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server public
   ```

3. **Access the site**
   - Open `http://localhost:8000/public/` in your browser

## 🎨 Customization

### Update Profile Information
Edit `public/data.json` to customize:
- Name and contact details
- Professional role and tagline
- Experience history
- Education
- Skills
- Links (LinkedIn, email, etc.)

**Example:**
```json
{
  "name": { "first": "Jane", "last": "Du" },
  "email": "your-email@example.com",
  "location": "Your City, State",
  ...
}
```

### Customize Colors & Spacing
Edit `public/styles.css` — All design tokens are defined at the top:
```css
:root {
  --color-accent: #CCFF00;
  --color-bg: #050505;
  --spacing-lg: 2rem;
  /* ... more variables ... */
}
```

### Modify Animations
Edit `public/main.js` — Look for the `setupAnimations()` function to adjust:
- Hero entrance timing
- Scroll reveal triggers
- Navigation transitions

## 📚 Code Quality Improvements

This project refactors the original monolithic structure into modular components:

✅ **Separation of Concerns** — HTML, CSS, and JavaScript are separate  
✅ **No Inline Styles** — All styling uses external stylesheet  
✅ **CSS Variables** — Centralized design tokens for easy theming  
✅ **Async Data Loading** — Profile data loaded from JSON  
✅ **Organized JavaScript** — DOM utilities, clear function separation  
✅ **Semantic HTML** — Proper markup structure  
✅ **Accessibility** — ARIA attributes and semantic tags  

## 🚀 Deployment

### Deploy to Vercel
```bash
vercel
```

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch, `/public` folder
4. Your site will be live at `https://yourusername.github.io/Jane-Du_Personal-Portfolio-AI-`

### Deploy to Netlify
1. Connect your GitHub repo to Netlify
2. Set publish directory to `public`
3. Deploy!

## 📝 License

This project is open source and available under the MIT License.

## 👋 Connect

- **LinkedIn:** [jane-du](https://linkedin.com/in/jane-du)
- **Email:** jiayidu90@gmail.com
- **Location:** Bellevue, WA

---

**Built with ❤️ as a modern, AI-focused engineer's portfolio**