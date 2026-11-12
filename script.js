/**
 * SHAKTHI SCAFFOLDING - JAVASCRIPT
 * Interactions: Theme toggle, Mobile menu, FAQ Accordions,
 * Project stories tab switcher, Lightbox preview, and Inquiry Form submission.
 */

// Project Stories Data for projects.html
const projectStoriesData = [
  {
    image: "assets/images/project-reliance-digital.jpg",
    number: "PROJECT 01",
    title: "Reliance Digital Commercial Scaffolding",
    location: "Commercial • Kadapa, Andhra Pradesh",
    type: "Commercial",
    position: "center 30%",
    work: "Steel pipe & coupler scaffolding ·<br>Façade access · Signage support",
    region: "Near Koti Reddy Circle, Kadapa, Andhra Pradesh",
    result: "Professional external scaffolding system installed for the Reliance Digital showroom, ensuring safe access for façade installation, signage work, and exterior maintenance while maintaining uninterrupted operations."
  },
  {
    image: "assets/images/project-shirdi-sai.jpg",
    number: "PROJECT 02",
    title: "Shirdi Sai Electricals Manufacturing Facility",
    location: "Industrial • Kadapa, Andhra Pradesh",
    type: "Industrial",
    position: "center center",
    work: "- Industrial Steel Scaffolding<br>- Structural Steel Access<br>- Exterior Cladding Support<br>- Roofing &amp; Maintenance Platforms<br>- Safe Working Platforms",
    region: "Shirdi Sai Electricals Limited<br>Industrial Development Area (IDA),<br>YSR Kadapa District,<br>Andhra Pradesh, India.",
    result: "Professional industrial scaffolding installation for the Shirdi Sai Electricals manufacturing facility. Our team provided safe and reliable access solutions for structural steel erection, exterior cladding, façade works, roofing, maintenance, and finishing operations while maintaining the highest safety standards."
  },
  {
    image: "assets/images/project-dwaraka-nagar.jpg",
    number: "PROJECT 03",
    title: "Commercial Building External Scaffolding",
    location: "Commercial • Andhra Pradesh",
    type: "Commercial",
    position: "center 55%",
    work: "Multi-storey scaffolding ·<br>Façade finishing · Glazing support",
    region: "Kadapa & Rayachoti, Andhra Pradesh",
    result: "Complete external scaffolding system for a multi-storey commercial complex in Andhra Pradesh, providing safe access for exterior finishing, plastering, and painting with maximum stability."
  },
  {
    image: "assets/images/project-prakruthi-nagar.jpg",
    number: "PROJECT 04",
    title: "Residential Apartment Scaffolding Project",
    location: "Residential • Kadapa, Andhra Pradesh",
    type: "Residential",
    position: "center 80%",
    work: "Perimeter frame scaffolding ·<br>Safety green nets · Exterior finishing",
    region: "Near Utukur, Prakruthi Nagar,<br>YSR Kadapa District,<br>Andhra Pradesh, India.",
    result: "Safe perimeter scaffolding with green safety nets for multi-floor residential apartments, ensuring secure access for exterior plastering, painting, and maintenance works."
  },
  {
    image: "assets/images/project-smart-bazaar.jpg",
    number: "PROJECT 05",
    title: "Smart Bazaar Commercial Building Scaffolding",
    location: "Mixed Development • Kadapa, Andhra Pradesh",
    type: "Commercial",
    position: "center 30%",
    work: "Steel pipe & coupler scaffolding · Multi-storey façade access ·<br>Exterior finishing support · Painting & cladding · Safe platforms",
    region: "Near Nehru Park, Smart Bazaar, Kadapa, Andhra Pradesh",
    result: "A large-scale external scaffolding system designed to provide safe and reliable access for façade construction, exterior finishing, painting, and maintenance works on a multi-storey commercial building while ensuring maximum stability and worker safety."
  }
];

// Lightbox modal functions
function openLightbox(src) {
  const modal = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (modal && img) {
    img.src = src;
    modal.style.display = 'grid';
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Contact constants
const CONTACT_PHONE_E164 = '916300025230';
const CONTACT_EMAIL = 'Infoshakthiscaffolding@gmail.com';

// Detect mobile devices (Android, iPhone, iPad, etc.) for native tel: handling
function isMobileDevice() {
  if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
    return navigator.userAgentData.mobile;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '');
}

// Retrieve contact form fields cleanly
function getContactFormFields() {
  return [
    { el: document.getElementById('contactName'), label: 'Name' },
    { el: document.getElementById('contactPhone'), label: 'Phone' },
    { el: document.getElementById('contactProject'), label: 'Project Type & Location' },
    { el: document.getElementById('contactMessage'), label: 'Requirement Details' }
  ];
}

// Display modern validation or success status message below the form
function showFormFeedback(message, type, fallbackLink) {
  const feedback = document.getElementById('formFeedback');
  if (!feedback) return;

  feedback.className = `form-feedback ${type === 'error' ? 'is-error' : 'is-success'}`;
  feedback.textContent = message;

  if (fallbackLink && fallbackLink.href && fallbackLink.text) {
    const anchor = document.createElement('a');
    anchor.href = fallbackLink.href;
    anchor.textContent = fallbackLink.text;
    if (fallbackLink.newTab) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
    feedback.appendChild(anchor);
  }
}

// Validate all required quotation fields before WhatsApp or Email launch
function validateContactForm() {
  const fields = getContactFormFields();
  const missing = [];
  let firstInvalid = null;

  fields.forEach(({ el, label }) => {
    if (!el) return;
    const val = el.value.trim();
    if (!val) {
      el.classList.add('input-error');
      missing.push(label);
      if (!firstInvalid) firstInvalid = el;
    } else {
      el.classList.remove('input-error');
    }
  });

  if (missing.length > 0) {
    showFormFeedback(`Please fill in: ${missing.join(', ')}.`, 'error');
    if (firstInvalid) firstInvalid.focus();
    return null;
  }

  return {
    name: fields[0].el.value.trim(),
    phone: fields[1].el.value.trim(),
    project: fields[2].el.value.trim(),
    message: fields[3].el.value.trim()
  };
}

// Build encoded WhatsApp URL with prefilled quotation template
function buildWhatsAppUrl(values) {
  const text = [
    'Hello Shakthi Scaffolding,',
    '',
    `My Name: ${values.name}`,
    '',
    `Phone: ${values.phone}`,
    '',
    `Project Type & Location: ${values.project}`,
    '',
    'Requirement Details:',
    values.message,
    '',
    'I would like to request a quotation.',
    '',
    'Please contact me.'
  ].join('\n');

  return `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(text)}`;
}

// Toggle to true in the future to validate & prefill form details in the email body
const INCLUDE_FORM_DETAILS_IN_EMAIL = false;
const EMAIL_SUBJECT = 'Quotation Request | Shakthi Scaffolding';

// Optional helper for extending email body with contact form values later
function buildEmailBody(values) {
  if (!values) return '';
  return [
    'Hello Shakthi Scaffolding,',
    '',
    'I would like to request a quotation.',
    '',
    'Name:',
    values.name,
    '',
    'Phone:',
    values.phone,
    '',
    'Project Type & Location:',
    values.project,
    '',
    'Requirement Details:',
    values.message,
    '',
    'Thank you.'
  ].join('\n');
}

// Build cross-browser mailto: URL (subject pre-filled, body empty by default)
function buildMailtoUrl(values = null) {
  const params = [`subject=${encodeURIComponent(EMAIL_SUBJECT)}`];

  if (INCLUDE_FORM_DETAILS_IN_EMAIL && values) {
    params.push(`body=${encodeURIComponent(buildEmailBody(values))}`);
  }

  return `mailto:${CONTACT_EMAIL}?${params.join('&')}`;
}

// Generic modal open/close helpers for Call and Email fallback popups
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function bindModalDismiss(modalId, closeBtnId, okBtnId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const closeBtn = document.getElementById(closeBtnId);
  const okBtn = document.getElementById(okBtnId);
  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modalId));
  if (okBtn) okBtn.addEventListener('click', () => closeModal(modalId));

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal(modalId);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal(modalId);
    }
  });
}

// Handle WhatsApp button click
function handleWhatsAppSubmit() {
  const values = validateContactForm();
  if (!values) return;

  const whatsappUrl = buildWhatsAppUrl(values);
  showFormFeedback('✓ Redirecting to WhatsApp...', 'success', {
    href: whatsappUrl,
    text: 'Open WhatsApp',
    newTab: true
  });

  try {
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = whatsappUrl;
    }
  } catch (err) {
    showFormFeedback('Unable to open WhatsApp automatically.', 'error', {
      href: whatsappUrl,
      text: 'Click here to open WhatsApp',
      newTab: true
    });
  }
}

let emailClientCheckTimer = null;

// Handle Email button click via mailto: with no-client fallback popup
function handleEmailSubmit() {
  let values = null;
  if (INCLUDE_FORM_DETAILS_IN_EMAIL) {
    values = validateContactForm();
    if (!values) return;
  }

  const mailtoUrl = buildMailtoUrl(values);
  showFormFeedback('✓ Opening your email application...', 'success', {
    href: mailtoUrl,
    text: `Email ${CONTACT_EMAIL}`,
    newTab: false
  });

  if (emailClientCheckTimer) {
    clearTimeout(emailClientCheckTimer);
    emailClientCheckTimer = null;
  }

  let handledByOS = false;
  const cleanupListeners = () => {
    window.removeEventListener('blur', markHandled);
    window.removeEventListener('pagehide', markHandled);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  const markHandled = () => {
    handledByOS = true;
    if (emailClientCheckTimer) {
      clearTimeout(emailClientCheckTimer);
      emailClientCheckTimer = null;
    }
    cleanupListeners();
  };
  const onVisibilityChange = () => {
    if (document.hidden) markHandled();
  };

  window.addEventListener('blur', markHandled);
  window.addEventListener('pagehide', markHandled);
  document.addEventListener('visibilitychange', onVisibilityChange);

  try {
    window.location.href = mailtoUrl;
  } catch (err) {
    cleanupListeners();
    showFormFeedback(`Please send your enquiry to ${CONTACT_EMAIL}.`, 'error', {
      href: mailtoUrl,
      text: `Email ${CONTACT_EMAIL}`,
      newTab: false
    });
    openModal('emailModal');
    return;
  }

  // If browser focus/visibility never changed, no default email client handled mailto:
  emailClientCheckTimer = setTimeout(() => {
    cleanupListeners();
    emailClientCheckTimer = null;
    if (!handledByOS && !document.hidden && document.hasFocus()) {
      showFormFeedback(`Please send your enquiry to ${CONTACT_EMAIL}.`, 'error', {
        href: mailtoUrl,
        text: `Email ${CONTACT_EMAIL}`,
        newTab: false
      });
      openModal('emailModal');
    }
  }, 1500);
}

// Handle Call Now action (dialer on mobile, info popup on desktop)
function handleCallAction(event) {
  if (isMobileDevice()) {
    showFormFeedback('✓ Opening phone dialer...', 'success');
    // Allow native <a href="tel:..."> navigation or trigger tel: for <button>
    if (event.currentTarget.tagName !== 'A') {
      window.location.href = `tel:+${CONTACT_PHONE_E164}`;
    }
    return;
  }

  event.preventDefault();
  openModal('callModal');
}

document.addEventListener('DOMContentLoaded', () => {
  // 0. Contact Page Form & Communication Listeners
  const contactForm = document.getElementById('contactForm');
  const whatsappBtn = document.getElementById('whatsappSubmitBtn');
  const emailBtn = document.getElementById('emailSubmitBtn');
  const callActions = document.querySelectorAll('[data-call-action]');

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
    });

    getContactFormFields().forEach(({ el }) => {
      if (!el) return;
      el.addEventListener('input', () => {
        if (el.value.trim()) {
          el.classList.remove('input-error');
        }
      });
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', handleWhatsAppSubmit);
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', handleEmailSubmit);
  }

  callActions.forEach(el => {
    el.addEventListener('click', handleCallAction);
  });

  bindModalDismiss('callModal', 'callModalClose', 'callModalOkBtn');
  bindModalDismiss('emailModal', 'emailModalClose', 'emailModalOkBtn');

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // 2. Theme Toggle (Dark/Light mode)
  const themeToggle = document.getElementById('themeToggle');
  const themeMoon = document.querySelector('.theme-moon');
  const themeSun = document.querySelector('.theme-sun');
  const savedTheme = localStorage.getItem('shakthi_theme');

  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-theme');
      if (themeMoon) themeMoon.style.display = 'none';
      if (themeSun) themeSun.style.display = 'block';
    } else {
      document.body.classList.remove('dark-theme');
      if (themeMoon) themeMoon.style.display = 'block';
      if (themeSun) themeSun.style.display = 'none';
    }
  }

  if (savedTheme === 'dark') {
    applyTheme(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark-theme');
      applyTheme(isDark);
      localStorage.setItem('shakthi_theme', isDark ? 'dark' : 'light');
    });
  }

  // 3. FAQ Accordion Toggle
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (parent) {
        const isOpen = parent.classList.contains('open');
        const p = parent.querySelector('p');
        if (isOpen) {
          parent.classList.remove('open');
          if (p) p.style.display = 'none';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          parent.classList.add('open');
          if (p) p.style.display = 'block';
          btn.setAttribute('aria-expanded', 'true');
        }
      }
    });
  });

  // 4. Project Stories Tabs Switcher on projects.html
  const storyTabs = document.getElementById('projectStoryTabs');
  if (storyTabs) {
    const tabButtons = storyTabs.querySelectorAll('button');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const index = parseInt(btn.getAttribute('data-index'), 10) || 0;
        const data = projectStoriesData[index];
        if (data) {
          const img = document.getElementById('caseStudyImg');
          const type = document.getElementById('caseStudyType');
          const num = document.getElementById('caseStudyNum');
          const title = document.getElementById('caseStudyTitle');
          const result = document.getElementById('caseStudyResult');
          const work = document.getElementById('caseStudyWork');
          const region = document.getElementById('caseStudyRegion');
          const locText = document.getElementById('caseStudyLocText');
          const gridBox = document.getElementById('caseStudyBox');

          if (gridBox) {
            gridBox.style.opacity = '0.4';
            gridBox.style.transform = 'translateY(4px)';
          }

          setTimeout(() => {
            if (img) {
              img.src = data.image;
              img.style.objectPosition = data.position || 'center center';
            }
            if (type) type.textContent = data.type;
            if (num) num.textContent = data.number;
            if (locText) locText.textContent = data.location;
            if (title) title.textContent = data.title;
            if (result) result.textContent = data.result;
            if (work) work.innerHTML = data.work;
            if (region) region.innerHTML = data.region;
            if (gridBox) {
              gridBox.style.opacity = '1';
              gridBox.style.transform = 'translateY(0)';
            }
          }, 120);
        }
      });
    });
  }
});
