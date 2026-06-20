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
              <img src="assets/lova-mark.png" alt="LOVA" width="40" height="40">
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
        <span class="brand" style="gap:10px"><span class="logo-mark"><img src="assets/lova-mark.png" alt="LOVA" width="34" height="34"></span><span class="wordmark" style="font-family:var(--font-display);font-size:1.5rem;font-weight:600;letter-spacing:.08em">LOVA</span></span>
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
