/* ═══════════════════════════════════════════════
   Portfolio Initialization
   ═══════════════════════════════════════════════ */

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ─── DOM UTILITIES ──────────────────────────────
const DOM = {
  navLogo: document.getElementById('nav-logo'),
  navbar: document.getElementById('navbar'),
  heroEyebrow: document.getElementById('hero-eyebrow'),
  nameFirst: document.getElementById('name-first'),
  nameDot: document.getElementById('name-dot'),
  nameLast: document.getElementById('name-last'),
  heroTagline: document.getElementById('hero-tagline-el'),
  cursor: document.getElementById('cursor'),
  cursorDot: document.getElementById('cursor-dot'),
  bentoGrid: document.getElementById('bento-grid'),
  timeline: document.getElementById('timeline'),
  eduList: document.getElementById('edu-list'),
  marquee1: document.getElementById('marquee-1'),
  marquee2: document.getElementById('marquee-2'),
  emailBtn: document.getElementById('email-btn'),
  linkedinBtn: document.getElementById('linkedin-btn'),
  footerName: document.getElementById('footer-name'),
  footerYear: document.getElementById('footer-year'),
  heroLocation: document.getElementById('hero-location'),
  heroRoleSmall: document.getElementById('hero-role-small'),
};

// ─── LOAD PROFILE DATA ──────────────────────────
let profileData = null;

async function loadProfileData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    profileData = await response.json();
    initializePortfolio();
  } catch (error) {
    console.error('Error loading profile data:', error);
  }
}

// ─── INITIALIZE PORTFOLIO ──────────────────────
function initializePortfolio() {
  populateHeader();
  populateHero();
  populateBento();
  populateTimeline();
  populateEducation();
  populateSkills();
  populateFooter();
  setupCustomCursor();
  setupAnimations();
  setupEventListeners();
}

// ═══════════════════════════════════════════════
//   DATA POPULATION FUNCTIONS
// ═══════════════════════════════════════════════

function populateHeader() {
  const { name } = profileData;
  DOM.navLogo.textContent = `${name.first} ${name.last}`;
}

function populateHero() {
  const { name, role, location, tagline } = profileData;
  
  DOM.heroLocation.textContent = location;
  DOM.heroRoleSmall.textContent = role;
  DOM.nameFirst.textContent = name.first;
  DOM.nameDot.textContent = '.';
  DOM.nameLast.textContent = name.last;
  DOM.heroTagline.textContent = tagline;
}

function populateBento() {
  const { yearsExperience, tagline } = profileData;
  
  const aboutContent = `
    <p class="bento-label" style="margin-bottom: 1rem;">About</p>
    <p class="bento-description">
      ${tagline} With expertise across ML pipelines, recommendation systems, and generative AI tooling, I bridge the gap between research-grade models and production-grade infrastructure.
    </p>
  `;

  const experienceContent = `
    <div class="bento-number">${yearsExperience}</div>
    <div class="bento-label">Years Experience</div>
  `;

  const locationContent = `
    <div class="bento-number" style="font-size: 2rem; line-height: 1.2; margin-bottom: 0.5rem;">📍</div>
    <div class="bento-number" style="font-size: 1.5rem;">${profileData.location}</div>
    <div class="bento-label">Based in</div>
  `;

  const cards = [
    { class: 'bento-card-1', content: aboutContent },
    { class: 'bento-card-2', content: experienceContent },
    { class: 'bento-card-3', content: locationContent },
  ];

  cards.forEach(card => {
    const element = document.createElement('div');
    element.className = `bento-card glass reveal ${card.class}`;
    element.innerHTML = card.content;
    DOM.bentoGrid.appendChild(element);
  });
}

function populateTimeline() {
  profileData.experience.forEach(exp => {
    const bulletsHTML = exp.bullets
      .map(bullet => `<li>${bullet}</li>`)
      .join('');

    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = `
      <div class="timeline-date">${exp.date} · ${exp.location}</div>
      <div class="timeline-company">${exp.company}</div>
      <div class="timeline-role">${exp.role}</div>
      <ul class="timeline-bullets">
        ${bulletsHTML}
      </ul>
    `;
    DOM.timeline.appendChild(item);
  });
}

function populateEducation() {
  const section = document.createElement('div');
  section.className = 'education-section reveal';
  section.innerHTML = '<p class="section-label" style="margin-bottom: 1.5rem;">Education</p>';
  
  const listContainer = document.createElement('div');
  listContainer.className = 'education-list glass';
  
  profileData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'education-item glass reveal';
    item.innerHTML = `
      <div>
        <div class="education-school">${edu.school}</div>
        <div class="education-degree">${edu.degree}</div>
      </div>
      <span class="tag accent">${edu.year}</span>
    `;
    listContainer.appendChild(item);
  });
  
  section.appendChild(listContainer);
  DOM.eduList.parentElement.appendChild(section);
}

function populateSkills() {
  buildMarquee(DOM.marquee1, profileData.skills.row1);
  buildMarquee(DOM.marquee2, profileData.skills.row2);
}

function buildMarquee(element, items) {
  // Duplicate items for infinite scrolling effect
  const duplicatedItems = [...items, ...items];
  
  element.innerHTML = duplicatedItems
    .map(skill => `
      <span class="marquee-item">
        ${skill}
        <span class="marquee-dot"></span>
      </span>
    `)
    .join('');
}

function populateFooter() {
  const { name, email } = profileData;
  const year = new Date().getFullYear();
  
  DOM.footerName.textContent = `${name.first} ${name.last} · ${email}`;
  DOM.footerYear.textContent = `© ${year}`;
  DOM.emailBtn.href = `mailto:${email}`;
  DOM.linkedinBtn.href = profileData.linkedin;
}

// ═══════════════════════════════════════════════
//   CURSOR INTERACTION
// ═══════════════════════════════════════════════

function setupCustomCursor() {
  let mouseX = 0;
  let mouseY = 0;
  let curX = 0;
  let curY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    
    DOM.cursor.style.left = `${curX}px`;
    DOM.cursor.style.top = `${curY}px`;
    DOM.cursorDot.style.left = `${mouseX}px`;
    DOM.cursorDot.style.top = `${mouseY}px`;
    
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Add hover effect to interactive elements
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => DOM.cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => DOM.cursor.classList.remove('hovering'));
  });
}

// ═══════════════════════════════════════════════
//   GSAP ANIMATIONS
// ═══════════════════════════════════════════════

function setupAnimations() {
  // Hero entrance animation
  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  
  heroTl
    .from(DOM.heroEyebrow, { opacity: 0, y: 20, duration: 0.8 }, 0.3)
    .to(DOM.heroEyebrow, { opacity: 1 }, 0.3)
    .from(DOM.nameFirst, { opacity: 0, y: 60, duration: 1 }, 0.5)
    .from(DOM.nameDot, { opacity: 0, scale: 0, duration: 0.5 }, 0.9)
    .from(DOM.nameLast, { opacity: 0, x: -40, duration: 0.8 }, 0.7)
    .from('.hero-role', { opacity: 0, y: 20, duration: 0.8 }, 1)
    .from('.hero-scroll', { opacity: 0, duration: 0.8 }, 1.4)
    .from('nav', { opacity: 0, y: -20, duration: 0.8 }, 0.2);

  // Scroll reveal animations
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Navigation background on scroll
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      if (self.progress > 0) {
        DOM.navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        DOM.navbar.style.backdropFilter = 'blur(20px)';
        DOM.navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.06)';
      } else {
        DOM.navbar.style.background = 'transparent';
        DOM.navbar.style.backdropFilter = 'none';
        DOM.navbar.style.borderBottom = 'none';
      }
    },
  });
}

// ═══════════════════════════════════════════════
//   EVENT LISTENERS
// ═══════════════════════════════════════════════

function setupEventListeners() {
  // Marquee pause on hover
  document.querySelectorAll('.marquee-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      wrapper.querySelectorAll('.marquee-track').forEach(track => {
        track.style.animationPlayState = 'paused';
      });
    });

    wrapper.addEventListener('mouseleave', () => {
      wrapper.querySelectorAll('.marquee-track').forEach(track => {
        track.style.animationPlayState = 'running';
      });
    });
  });

  // Timeline hover effect
  const timeline = document.getElementById('timeline');
  if (timeline) {
    timeline.addEventListener('mouseenter', function() {
      this.style.opacity = '0.3';
    });
    
    timeline.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  }
}

// ═══════════════════════════════════════════════
//   START
// ═══════════════════════════════════════════════

// Load and initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProfileData);
} else {
  loadProfileData();
}
