/**
 * Vinhomes Grand Park - Landing Page JavaScript
 * Clean Vanilla JavaScript (No Frameworks, No Backend)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileNavClose();
  initSmoothScroll();
  initScrollSpy();
  initConsultationForm();
  initBackToTop();
  initScrollAnimations();
});

/**
 * 1. Navbar Scroll Effect:
 * Add shadow and solid background on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Nav Close:
 * Automatically close mobile collapse menu when clicking on a link
 */
function initMobileNavClose() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-cta-btn');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (!navbarCollapse) return;

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * 3. Smooth Scrolling for Internal Anchor Links
 */
function initSmoothScroll() {
  const scrollTriggers = document.querySelectorAll('a[href^="#"]:not([href="#"]):not([data-bs-toggle])');

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar-custom')?.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight + 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 4. Active Nav Item Highlighting (ScrollSpy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * 5. Consultation Form Frontend Validation & Feedback
 */
function initConsultationForm() {
  const forms = [
    document.getElementById('consultationForm'),
    document.getElementById('modalConsultationForm')
  ].filter(Boolean);

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = this.querySelector('input[name="fullname"]');
      const phoneInput = this.querySelector('input[name="phone"]');
      const feedbackBox = this.querySelector('.form-feedback-alert');
      const submitBtn = this.querySelector('button[type="submit"]');

      // Simple phone validation: Vietnam phone format (10 digits starting with 0)
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      const phoneVal = phoneInput ? phoneInput.value.trim().replace(/\s+/g, '') : '';

      if (phoneInput && !phoneRegex.test(phoneVal)) {
        showFeedback(
          feedbackBox,
          'danger',
          'Vui lòng nhập số điện thoại hợp lệ (10 số, ví dụ: 0912345678).'
        );
        phoneInput.focus();
        return;
      }

      if (nameInput && nameInput.value.trim().length < 2) {
        showFeedback(
          feedbackBox,
          'danger',
          'Vui lòng nhập họ và tên của quý khách.'
        );
        nameInput.focus();
        return;
      }

      // Visual feedback: Simulate successful submission
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Đang gửi yêu cầu...
        `;
      }

      setTimeout(() => {
        // Clear any previous error feedback
        if (feedbackBox) {
          feedbackBox.style.display = 'none';
        }

        // Reset the form fields
        form.reset();

        // Restore submit button state
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // Hide consultation modal if it was open
        const consultModalEl = document.getElementById('consultationModal');
        if (consultModalEl) {
          const bsConsultModal = bootstrap.Modal.getInstance(consultModalEl);
          if (bsConsultModal) {
            bsConsultModal.hide();
          }
        }

        // Show the Success Popup Modal with LIKE thumbs-up icon
        const successModalEl = document.getElementById('successModal');
        if (successModalEl) {
          const successModal = bootstrap.Modal.getOrCreateInstance(successModalEl);
          successModal.show();
        }
      }, 450);
    });
  });

  function showFeedback(box, type, message) {
    if (!box) return;
    box.className = `alert alert-${type} form-feedback-alert mb-3`;
    box.innerHTML = message;
    box.style.display = 'block';
  }
}

/**
 * 6. Back-to-Top Floating Button
 */
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 7. Scroll Reveal Animations (Subtle & Elegant)
 */
function initScrollAnimations() {
  // Elements with .fade-in-up class
  const revealElements = document.querySelectorAll('.fade-in-up');
  if (revealElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
}
