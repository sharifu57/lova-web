/* ============================================================
   LOVA — shared chrome + interactions
   ============================================================ */
(function () {
  const PAGE = document.body.dataset.page || 'home';

  /* ---- icons ---- */
  const ICON = {
    apple: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.7-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8zM14.3 6.3c.6-.8 1-1.9.9-3-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.3 13.3 12 3.6 21.7c-.3-.2-.5-.6-.5-1.1V3.4c0-.5.2-.9.5-1.1zm11.1 11 2.4 2.4-9 5.1 6.6-7.5zm0-2.6L8.1 3.2l9 5.1-2.4 2.4zm1.4 1.3 3.9-2.2c.7.4.7 1.4 0 1.8l-3.9 2.2-2-2 2-2z"/></svg>',
  };

  const NAV = [
    ['index.html', 'Home', 'home'],
    ['about.html', 'About', 'about'],
    ['track.html', 'Track', 'track'],
    ['learn.html', 'Learn', 'learn'],
    ['unfiltered.html', 'Unfiltered', 'unfiltered'],
    ['care.html', 'Care', 'care'],
    ['partners.html', 'Partners', 'partners'],
  ];
  const NAV_MORE = [
    ['safety.html', 'Safety', 'safety'],
    ['faqs.html', 'FAQs', 'faqs'],
    ['contact.html', 'Contact', 'contact'],
  ];

  const navLinks = (list) => list.map(([h, l, k]) =>
    `<a href="${h}" class="${k === PAGE ? 'active' : ''}" data-i18n="nav.${k}">${l}</a>`).join('');

  const langToggle = `
    <div class="lang-toggle" role="group" aria-label="Language">
      <button type="button" data-lang="en">EN</button>
      <button type="button" data-lang="sw">SW</button>
    </div>`;

  const storeBadges = `
    <a class="store-badge" href="#" aria-label="Download on the App Store">
      ${ICON.apple}<span><span class="sb-top">Download on the</span><br><span class="sb-main">App Store</span></span>
    </a>
    <a class="store-badge" href="#" aria-label="Get it on Google Play">
      ${ICON.play}<span><span class="sb-top">GET IT ON</span><br><span class="sb-main">Google Play</span></span>
    </a>`;

  /* ---- HEADER ---- */
  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `
      <div class="wrap">
        <nav class="nav">
          <a class="brand" href="index.html" aria-label="LOVA home">
            <span class="logo-mark">
              <img src="data:image/png;base64,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" alt="LOVA" width="40" height="40">
            </span>
            <span class="wordmark">LOVA</span>
          </a>
          <div class="nav-links">${navLinks(NAV)}</div>
          <div class="nav-cta">
            ${langToggle}
            <a href="contact.html" class="btn btn-dark hide-sm" style="padding:11px 22px" data-i18n="cta.getapp">Get the App</a>
            <button class="menu-btn" id="menuBtn" aria-label="Open menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
          </div>
        </nav>
      </div>`;
  }

  /* ---- DRAWER ---- */
  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.id = 'drawer';
  drawer.innerHTML = `
    <div class="drawer-scrim" data-close></div>
    <div class="drawer-panel">
      <div class="drawer-head">
        <span class="brand" style="gap:10px"><span class="logo-mark"><img src="data:image/png;base64,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" alt="LOVA" width="34" height="34"></span><span class="wordmark" style="font-family:var(--font-display);font-size:1.5rem;font-weight:600;letter-spacing:.08em">LOVA</span></span>
        <button class="menu-btn" data-close aria-label="Close menu" style="display:flex">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="drawer-links">${navLinks(NAV.concat(NAV_MORE))}</div>
      ${langToggle}
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-dark btn-lg" data-i18n="cta.getapp">Get the App</a>
      </div>
    </div>`;
  document.body.appendChild(drawer);

  const openDrawer = () => drawer.classList.add('open');
  const closeDrawer = () => drawer.classList.remove('open');
  document.getElementById('menuBtn')?.addEventListener('click', openDrawer);
  drawer.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeDrawer));

  /* ---- FOOTER ---- */
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="blob" style="width:420px;height:420px;background:var(--berry);top:-160px;right:-100px"></div>
      <div class="blob" style="width:340px;height:340px;background:var(--plum-soft);bottom:-160px;left:-120px"></div>
      <div class="wrap">
        <div class="footer-news">
          <div class="news-card">
            <div>
              <h4 class="h4" data-i18n="news.h">Stay close to LOVA.</h4>
              <p data-i18n="news.p">Get launch updates, wellness tips, product news, and community stories.</p>
            </div>
            <form class="news-form" data-newsletter>
              <input type="email" placeholder="Your email address" data-i18n-ph="news.email" aria-label="Email address" required>
              <button class="btn btn-light" type="submit" data-i18n="news.join">Join</button>
            </form>
          </div>
        </div>
        <div class="footer-top" style="margin-top:48px">
          <div class="footer-brand">
            <div class="wordmark">Lova</div>
            <p class="footer-tag">Wellness, Simplified.</p>
            <p data-i18n="f.desc">A private SRHR and wellness companion helping adults across Africa learn, track, ask, share, and care with confidence.</p>
            <div class="stores" style="margin-top:22px">${storeBadges}</div>
          </div>
          <div class="footer-col">
            <h5 data-i18n="f.product">Product</h5>
            <a href="track.html" data-i18n="f.track">Track</a>
            <a href="learn.html" data-i18n="f.learn">Learn</a>
            <a href="unfiltered.html" data-i18n="f.unfiltered">Unfiltered</a>
            <a href="care.html" data-i18n="f.care">Care</a>
            <a href="faqs.html" data-i18n="f.faqs">FAQs</a>
          </div>
          <div class="footer-col">
            <h5 data-i18n="f.company">Company</h5>
            <a href="about.html" data-i18n="f.about">About</a>
            <a href="partners.html" data-i18n="f.partners">Partners</a>
            <a href="contact.html" data-i18n="f.contact">Contact</a>
            <a href="contact.html" data-i18n="f.careers">Careers</a>
          </div>
          <div class="footer-col">
            <h5 data-i18n="f.support">Support</h5>
            <a href="safety.html" data-i18n="f.safety">Safety &amp; Privacy</a>
            <a href="unfiltered.html" data-i18n="f.guidelines">Community Guidelines</a>
            <a href="contact.html" data-i18n="f.datadel">Data Deletion</a>
            <a href="contact.html" data-i18n="f.usersupport">User Support</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="disclaimer" data-i18n="f.disclaimer">LOVA provides educational information and wellness support. It does not replace professional medical advice, diagnosis, treatment, counseling, antenatal care, or emergency services.</p>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
            <div style="display:flex;gap:18px;flex-wrap:wrap">
              <a href="safety.html" style="font-size:.85rem" data-i18n="f.terms">Terms of Use</a>
              <a href="safety.html" style="font-size:.85rem" data-i18n="f.privacy">Privacy Policy</a>
              <a href="safety.html" style="font-size:.85rem" data-i18n="f.meddisc">Medical Disclaimer</a>
            </div>
            <span class="copy">© ${new Date().getFullYear()} LOVA Health. Built for Africa.</span>
          </div>
        </div>
      </div>`;
  }

  /* ---- sticky header style ---- */
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- reveal on scroll (with safety fallbacks) ---- */
  const reveals = document.querySelectorAll('.reveal');
  const revealNow = (el) => el.classList.add('in');
  // 1) immediately reveal anything already in (or near) the viewport on load
  const showInView = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach(el => {
      if (el.classList.contains('in')) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) revealNow(el);
    });
  };
  let io = null;
  try {
    io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { revealNow(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } catch (err) { /* no IO support — fallbacks below handle it */ }
  // 2) reveal in-view elements right away and on scroll, regardless of observer
  showInView();
  requestAnimationFrame(showInView);
  window.addEventListener('scroll', showInView, { passive: true });
  window.addEventListener('resize', showInView, { passive: true });
  // 3) catch-all: nothing stays invisible if the observer or a transition stalls.
  //    Force the resting visible state directly (no transition left to freeze on).
  const forceShow = () => document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('in');
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  setTimeout(forceShow, 1200);

  /* ---- app-mockup tab bars ---- */
  (function () {
    const ICONS = {
      home: '<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',
      community: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19a6 6 0 0 1 12 0M15 19a5 5 0 0 1 6.5-4.8"/>',
      cal: '<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M3 9h18M8 2v4M16 2v4"/>',
      care: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>'
    };
    const LABELS = { home: 'Home', community: 'Community', cal: 'Calendar', care: 'Care' };
    document.querySelectorAll('.ax-tabbar').forEach(bar => {
      const active = bar.dataset.active || 'cal';
      bar.style.cssText = 'display:flex;justify-content:space-around;align-items:center;padding:9px 6px 14px;border-top:1px solid var(--line-2);background:var(--paper)';
      bar.innerHTML = ['home', 'community', 'cal', 'care'].map(k => {
        const on = k === active;
        return `<div style="display:flex;flex-direction:column;align-items:center;gap:3px;color:${on ? 'var(--coral-deep)' : 'var(--muted-2)'}">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>
          <span style="font-size:7.5px;font-weight:${on ? 600 : 500}">${LABELS[k]}</span></div>`;
      }).join('');
    });
  })();

  /* ---- i18n + theme init ---- */
  if (window.LOVA) {
    window.LOVA.applyTheme(window.LOVA.getTheme());
    window.LOVA.applyLang(window.LOVA.getLang());
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => window.LOVA.applyLang(btn.dataset.lang));
    });
  }

  /* ---- newsletter / waitlist forms ---- */
  document.querySelectorAll('[data-newsletter]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (!input.value) return;
      form.innerHTML = '<p style="color:var(--peach);font-weight:600;padding:6px 2px">Thank you — you are on the list. ✦</p>';
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('[data-acc]').forEach(item => {
    const btn = item.querySelector('.acc-q');
    btn?.addEventListener('click', () => {
      const open = item.classList.contains('open');
      const group = item.closest('[data-acc-group]');
      if (group) group.querySelectorAll('[data-acc].open').forEach(o => { if (o !== item) o.classList.remove('open'); });
      item.classList.toggle('open', !open);
    });
  });

  /* ---- contact form ---- */
  const cform = document.getElementById('contactForm');
  if (cform) {
    cform.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      cform.querySelectorAll('[required]').forEach(f => {
        const bad = !f.value.trim() || (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) return;
      document.getElementById('formWrap').innerHTML =
        `<div class="card center" style="background:var(--grad-soft);padding:56px 40px">
           <div class="card-icon" style="margin:0 auto 18px;width:64px;height:64px">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
           </div>
           <h3 class="h3">Message received</h3>
           <p class="body" style="margin-top:12px;max-width:42ch;margin-inline:auto">Thank you for contacting LOVA. We have received your message and will respond as soon as possible.</p>
         </div>`;
    });
    cform.querySelectorAll('[required]').forEach(f => {
      f.addEventListener('input', () => f.classList.remove('invalid'));
    });
  }

  /* ---- generic tab groups ---- */
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const btns = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-panel]');
    btns.forEach(btn => btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      btns.forEach(b => b.classList.toggle('on', b === btn));
      panels.forEach(p => p.classList.toggle('show', p.dataset.panel === key));
    }));
  });
})();
