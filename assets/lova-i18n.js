/* ============================================================
   LOVA — bilingual (EN / SW) + theme persistence
   Kiswahili microcopy & brand lines from the brand content doc.
   ============================================================ */
(function () {
  const DICT = {
    /* ---- nav ---- */
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu',
    'nav.track': 'Fuatilia',
    'nav.learn': 'Jifunze',
    'nav.unfiltered': 'Unfiltered',
    'nav.care': 'Huduma',
    'nav.partners': 'Washirika',
    'nav.safety': 'Usalama',
    'nav.faqs': 'Maswali',
    'nav.contact': 'Wasiliana',

    /* ---- shared CTAs / microcopy ---- */
    'cta.getapp': 'Pakua App',
    'cta.explore': 'Gundua LOVA',
    'cta.startlearning': 'Jifunze Zaidi',
    'cta.starttracking': 'Anza Kufuatilia',
    'cta.exploretracking': 'Gundua Ufuatiliaji',
    'cta.joinunfiltered': 'Jiunge na Unfiltered',
    'cta.explorecare': 'Gundua Huduma',
    'cta.partner': 'Shirikiana na LOVA',
    'cta.contact': 'Wasiliana na LOVA',
    'cta.contactsupport': 'Wasiliana na Usaidizi',
    'cta.sendmsg': 'Tuma Ujumbe',

    /* ---- footer ---- */
    'f.desc': 'Mwenzako wa faragha wa SRHR na afya, anayesaidia watu wazima kote Afrika kujifunze, kufuatilia, kuuliza, kushiriki, na kujali kwa kujiamini.',
    'f.product': 'Bidhaa',
    'f.company': 'Kampuni',
    'f.support': 'Usaidizi',
    'f.track': 'Fuatilia',
    'f.learn': 'Jifunze',
    'f.unfiltered': 'Unfiltered',
    'f.care': 'Huduma',
    'f.faqs': 'Maswali',
    'f.about': 'Kuhusu',
    'f.partners': 'Washirika',
    'f.contact': 'Wasiliana',
    'f.careers': 'Kazi',
    'f.safety': 'Usalama na Faragha',
    'f.guidelines': 'Miongozo ya Jamii',
    'f.datadel': 'Kufuta Data',
    'f.usersupport': 'Usaidizi kwa Mtumiaji',
    'f.terms': 'Masharti ya Matumizi',
    'f.privacy': 'Sera ya Faragha',
    'f.meddisc': 'Kanusho la Matibabu',
    'f.disclaimer': 'LOVA hutoa taarifa za kielimu na msaada wa afya. Haibadilishi ushauri wa kitaalamu wa matibabu, uchunguzi, matibabu, ushauri nasaha, huduma ya ujauzito, au huduma za dharura.',
    'news.h': 'Karibu na LOVA.',
    'news.p': 'Pata taarifa za uzinduzi, vidokezo vya afya, habari za bidhaa, na hadithi za jamii.',
    'news.join': 'Jiunge',
    'news.email': 'Barua pepe yako',

    /* ---- home ---- */
    'home.eyebrow': 'Msaada wa faragha wa SRHR na afya',
    'home.h1': 'Mwili wako.<br>Maswali yako.<br><em>Nafasi yako salama.</em>',
    'home.lead': 'LOVA hukusaidia kujifunze, kufuatilia, kuuliza, kushiriki, na kujali afya yako ya kijinsia, uzazi, na maisha ya kila siku — kwa faragha, kujiamini, na heshima.',
    'home.micro': 'Imetengenezwa kwa watu wazima 18+. Faragha kwa muundo. Heshima kwa kawaida.',
    'home.intro': 'Msaada wa afya unapaswa kuhisi <em>salama</em>, si wa kutisha.',
    'home.final': 'Jifunze, fuatilia, uliza, shiriki,<br>na <em>jali</em> — kwa kujiamini.',
    'home.finallead': 'LOVA hukusaidia kutunza afya yako kwa faragha, heshima, na kujiamini — ikiwa na mizizi katika uhalisia wa Kiafrika.',
    'kiband.h': 'Kwa lugha rahisi.',

    /* ---- about ---- */
    'about.eyebrow': 'Kuhusu LOVA',
    'about.h1': 'Msaada unaohisi<br>faragha, wa kibinadamu,<br>na <em>unaojulikana</em>.',
    'about.lead': 'LOVA ni mwenzako wa faragha wa SRHR na afya kwa watu wazima kote Afrika — anayesaidia kujifunze, kufuatilia, kuuliza, kushiriki, na kujali kwa kujiamini.',

    /* ---- track ---- */
    'track.eyebrow': 'Fuatilia',
    'track.h1': 'Mwili wako una<br>mifumo. Tunakusaidia<br><em>kuielewa</em>.',
    'track.lead': 'Fuatilia hedhi yako, safari ya ujauzito, dalili, hisia, nishati, mabadiliko ya mwili, na vikumbusho — katika nafasi moja tulivu na ya faragha.',

    /* ---- learn ---- */
    'learn.eyebrow': 'Jifunze',
    'learn.h1': 'Majibu yanayokufikia<br><em>ulipo</em>.',
    'learn.lead': 'Elimu ya SRHR iliyo wazi, ya kuaminika, na inayohusiana na maisha halisi — elewa mwili wako, chaguo zako, mahusiano yako, na afya yako bila aibu, hofu, au lugha ngumu.',

    /* ---- unfiltered ---- */
    'unf.eyebrow': 'Unfiltered',
    'unf.h1': 'Maswali halisi.<br>Hadithi halisi.<br>Msaada <em>bila kujulikana</em>.',
    'unf.lead': 'Unfiltered ni nafasi ya jamii ya LOVA isiyojulikana kwa mazungumzo ya kweli kuhusu SRHR na afya — shiriki uzoefu, uliza maswali, jibu kura, na ujifunze kutoka kwa wengine bila kufichua utambulisho wako.',

    /* ---- care ---- */
    'care.eyebrow': 'LOVA Care',
    'care.h1': 'Huduma inayokufikia<br><em>ulipo</em>.',
    'care.lead': 'Bidhaa za huduma kwa kujiamini, faraja, maandalizi, kinga, ujauzito, na afya ya kila siku — zinazopatikana kwa njia ya faragha na ya kuunga mkono.',

    /* ---- partners ---- */
    'part.eyebrow': 'Shirikiana na LOVA',
    'part.h1': 'Tunajenga mazungumzo<br>bora ya afya kote <em>Afrika</em>.',
    'part.lead': 'LOVA hushirikiana na washirika wanaoamini watu wazima na vijana wanastahili upatikanaji bora wa taarifa za SRHR zinazoaminika na zisizo na unyanyapaa, zana za afya, bidhaa za huduma, na msaada.',

    /* ---- safety ---- */
    'saf.eyebrow': 'Usalama na Faragha',
    'saf.h1': 'Safari yako ya afya<br>inastahili <em>heshima</em>.',
    'saf.lead': 'LOVA imejengwa kwa mazungumzo nyeti na safari za afya za kibinafsi. Hiyo ina maana usalama, faragha, heshima, na udhibiti wa mtumiaji ni muhimu sana kwetu.',

    /* ---- faqs ---- */
    'faq.eyebrow': 'Maswali',
    'faq.h1': 'Maswali mazuri yanastahili<br><em>majibu yaliyo wazi</em>.',
    'faq.lead': 'Hapa kuna baadhi ya mambo ambayo watu huuliza mara nyingi kuhusu LOVA.',

    /* ---- contact ---- */
    'con.eyebrow': 'Wasiliana na LOVA',
    'con.h1': 'Tungependa<br><em>kusikia kutoka kwako</em>.',
    'con.lead': 'Una swali, wasiwasi, wazo la ushirikiano, au ombi la usaidizi? Fikia timu sahihi hapa chini — au tutumie ujumbe.',
  };

  const LS_LANG = 'lova-lang', LS_THEME = 'lova-theme';
  const getLang = () => { try { return localStorage.getItem(LS_LANG) || 'en'; } catch (e) { return 'en'; } };
  const getTheme = () => { try { return localStorage.getItem(LS_THEME) || 'soft'; } catch (e) { return 'soft'; } };

  function applyLang(lang) {
    lang = lang === 'sw' ? 'sw' : 'en';
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.dataset.en == null) el.dataset.en = el.innerHTML;
      el.innerHTML = (lang === 'sw' && DICT[key] != null) ? DICT[key] : el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (el.dataset.enPh == null) el.dataset.enPh = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', (lang === 'sw' && DICT[key] != null) ? DICT[key] : el.dataset.enPh);
    });
    document.querySelectorAll('.lang-toggle').forEach(t =>
      t.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang)));
    try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
  }

  function applyTheme(theme) {
    theme = theme === 'bright' ? 'bright' : 'soft';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(LS_THEME, theme); } catch (e) {}
    document.querySelectorAll('[data-theme-toggle] button').forEach(b => b.classList.toggle('on', b.dataset.theme === theme));
  }

  window.LOVA = { DICT, applyLang, applyTheme, getLang, getTheme };
})();
