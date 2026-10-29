/* Renders content from window.PORTFOLIO and wires up interactions. No dependencies besides Lucide. */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var isPlaceholder = function (u) { return !u || u === "#"; };

  /* ---------- Render ---------- */
  function socialButtons(extra) {
    return D.socials.map(function (s) {
      return '<a class="icon-btn' + (extra || "") + '" href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.label) + '"><i data-lucide="' + esc(s.icon) + '" class="h-4 w-4"></i></a>';
    }).join("") + '<a class="icon-btn" href="mailto:' + esc(D.email) + '" aria-label="Email"><i data-lucide="mail" class="h-4 w-4"></i></a>';
  }

  function renderHero() {
    $("#hero-name").textContent = D.name;
    $("#hero-status").textContent = D.status;
    $("#hero-headline").textContent = D.headline;
    $("#hero-bio").textContent = D.bio;
    $("#resume-link").setAttribute("href", D.resume);
    $("#hero-socials").innerHTML = socialButtons();
  }

  function renderHighlights() {
    var h = D.highlight;
    $("#highlight-banner").innerHTML =
      '<div class="flex flex-col gap-5 sm:flex-row sm:items-start">' +
        '<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-500"><i data-lucide="award" class="h-6 w-6"></i></div>' +
        '<div>' +
          '<span class="inline-flex items-center gap-1 rounded-full bg-indigo-500 px-2.5 py-0.5 font-mono text-[11px] font-medium text-white"><i data-lucide="badge-check" class="h-3 w-3"></i>' + esc(h.badge) + '</span>' +
          '<h2 class="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">' + esc(h.title) + '</h2>' +
          '<p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">' + esc(h.text) + '</p>' +
          '<div class="mt-4 flex flex-wrap gap-2">' + h.points.map(function (p) { return '<span class="tag">' + esc(p) + '</span>'; }).join("") + '</div>' +
        '</div>' +
      '</div>';

    $("#stat-grid").innerHTML = D.stats.map(function (s) {
      return '<div class="reveal spotlight card">' +
        '<i data-lucide="' + esc(s.icon) + '" class="h-5 w-5 text-indigo-500"></i>' +
        '<p class="mt-3 font-mono text-xs uppercase tracking-wider text-slate-500">' + esc(s.label) + '</p>' +
        '<p class="mt-1 font-semibold text-slate-900 dark:text-white">' + esc(s.value) + '</p></div>';
    }).join("");
  }

  function renderExperience() {
    $("#experience-list").innerHTML = D.experience.map(function (e) {
      return '<li class="reveal relative">' +
        '<span class="timeline-dot' + (e.current ? " current" : "") + '"></span>' +
        '<div class="flex flex-wrap items-baseline justify-between gap-x-4">' +
          '<h3 class="text-lg font-semibold text-slate-900 dark:text-white">' + esc(e.role) + ' <span class="text-indigo-500">@ ' + esc(e.org) + '</span></h3>' +
          '<span class="font-mono text-xs text-slate-500">' + esc(e.duration) + '</span>' +
        '</div>' +
        '<ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 marker:text-indigo-400 dark:text-slate-400">' +
          e.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
        '</ul>' +
        '<div class="mt-3 flex flex-wrap gap-2">' + e.stack.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
      '</li>';
    }).join("");
  }

  function linkOrDisabled(url, icon, label) {
    if (isPlaceholder(url)) {
      return '<span class="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-slate-400" title="Link coming soon"><i data-lucide="' + icon + '" class="h-4 w-4"></i>' + label + '</span>';
    }
    return '<a class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-300" href="' + esc(url) + '" target="_blank" rel="noopener"><i data-lucide="' + icon + '" class="h-4 w-4"></i>' + label + '</a>';
  }

  function renderProjects() {
    $("#project-grid").innerHTML = D.projects.map(function (p) {
      return '<article class="reveal spotlight card flex flex-col">' +
        '<div class="flex items-center justify-between"><i data-lucide="folder-code" class="h-6 w-6 text-indigo-500"></i></div>' +
        '<h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">' + esc(p.title) + '</h3>' +
        '<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">' + esc(p.description) + '</p>' +
        '<div class="mt-4 flex flex-wrap gap-2">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>' +
        '<div class="mt-5 flex items-center gap-5 border-t border-slate-200 pt-4 dark:border-white/10">' +
          linkOrDisabled(p.demo, "external-link", "Live Demo") +
          linkOrDisabled(p.repo, "github", "GitHub") +
        '</div></article>';
    }).join("");
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = D.skills.map(function (g) {
      return '<div class="reveal spotlight card">' +
        '<div class="flex items-center gap-2"><i data-lucide="' + esc(g.icon) + '" class="h-5 w-5 text-indigo-500"></i>' +
        '<h3 class="font-semibold text-slate-900 dark:text-white">' + esc(g.title) + '</h3></div>' +
        '<div class="mt-4 flex flex-wrap gap-2">' + g.items.map(function (i) { return '<span class="skill-badge">' + esc(i) + '</span>'; }).join("") + '</div></div>';
    }).join("");
  }

  function renderEducation() {
    var e = D.education;
    $("#education-card").innerHTML =
      '<div class="flex items-center gap-2"><i data-lucide="graduation-cap" class="h-5 w-5 text-indigo-500"></i><h3 class="font-semibold text-slate-900 dark:text-white">Education</h3></div>' +
      '<p class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">' + esc(e.degree) + '</p>' +
      '<p class="text-sm text-slate-600 dark:text-slate-400">' + esc(e.school) + ' &middot; ' + esc(e.duration) + '</p>' +
      '<p class="mt-1 font-mono text-xs text-indigo-600 dark:text-indigo-300">' + esc(e.grade) + '</p>' +
      '<p class="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">Relevant modules</p>' +
      '<div class="mt-2 flex flex-wrap gap-2">' + e.modules.map(function (m) { return '<span class="tag">' + esc(m) + '</span>'; }).join("") + '</div>';

    $("#cert-card").innerHTML =
      '<div class="flex items-center gap-2"><i data-lucide="trophy" class="h-5 w-5 text-indigo-500"></i><h3 class="font-semibold text-slate-900 dark:text-white">Certifications &amp; Wins</h3></div>' +
      '<ul class="mt-4 space-y-3">' + D.certifications.map(function (c) {
        return '<li class="flex items-start justify-between gap-3"><div><p class="text-sm font-medium text-slate-900 dark:text-white">' + esc(c.title) + '</p>' +
          '<p class="text-xs text-slate-500">' + esc(c.issuer) + '</p></div><span class="font-mono text-xs text-slate-500">' + esc(c.year) + '</span></li>';
      }).join("") + '</ul>';
  }

  function renderContact() {
    $("#email-card").setAttribute("href", "mailto:" + D.email);
    $("#email-text").textContent = D.email;
    $("#contact-socials").innerHTML = socialButtons();
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Interactions ---------- */
  function setupTheme() {
    $("#theme-toggle").addEventListener("click", function () {
      var dark = document.documentElement.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }

  function setupMenu() {
    var btn = $("#menu-btn"), menu = $("#mobile-menu");
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("hidden") === false;
      btn.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { menu.classList.add("hidden"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  function setupScroll() {
    var nav = $("#nav"), bar = $("#progress"), top = $("#to-top");
    function onScroll() {
      var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
      nav.classList.toggle("scrolled", y > 10);
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      top.classList.toggle("hidden", y < 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    // Active nav link
    var links = document.querySelectorAll("#nav .nav-link");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }

  function setupReveal() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
      io.observe(el);
    });
  }

  function setupSpotlight() {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".spotlight");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  }

  function setupForm() {
    var form = $("#contact-form"), status = $("#form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("input, textarea").forEach(function (f) {
        var bad = !f.value.trim() || (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
        f.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) { status.textContent = "Please fill in all fields correctly."; status.className = "text-sm text-red-500"; return; }

      // No backend: open the visitor's mail client with the message prefilled.
      // To use a form service instead (Formspree, Web3Forms...), POST FormData(form) here.
      var d = new FormData(form);
      var body = d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")";
      window.location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent("Portfolio inquiry from " + d.get("name")) + "&body=" + encodeURIComponent(body);
      status.textContent = "Opening your email app...";
      status.className = "text-sm text-emerald-500";
      form.reset();
    });
  }

  /* ---------- Init ---------- */
  renderHero(); renderHighlights(); renderExperience(); renderProjects();
  renderSkills(); renderEducation(); renderContact();
  setupTheme(); setupMenu(); setupScroll(); setupReveal(); setupSpotlight(); setupForm();
  if (window.lucide) window.lucide.createIcons();
})();
