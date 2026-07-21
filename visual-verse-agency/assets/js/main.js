/* Visual Verse Agency — shared site behaviour */
(function () {
  "use strict";

  /* ---------------- Header scroll state + mobile nav ---------------- */
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------- Sticky mobile CTA appears after hero ---------------- */
  const stickyCta = document.querySelector(".sticky-cta");
  if (stickyCta) {
    const trigger = document.querySelector(".hero") || document.body;
    const io = new IntersectionObserver(
      ([entry]) => stickyCta.classList.toggle("is-visible", !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(trigger);
  }

  /* ---------------- Reveal-on-scroll ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealIO.observe(el));
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const answer = item.querySelector(".faq-a");
    if (!btn || !answer) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-a").style.maxHeight = null;
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", (!isOpen).toString());
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
    });
  });

  /* ==================================================================
     PORTFOLIO — rendering, filtering, search, lightbox
     ================================================================== */
  const grid = document.querySelector("[data-portfolio-grid]");
  if (grid && typeof PORTFOLIO_ITEMS !== "undefined") {
    const limit = grid.getAttribute("data-limit");
    const items = limit ? PORTFOLIO_ITEMS.slice(0, Number(limit)) : PORTFOLIO_ITEMS;

    const mediaFor = (item) => {
      if (item.type === "drive-video") {
        return { thumb: vvaDriveImage(item.driveId, 700), kind: "video" };
      }
      if (item.type === "youtube") {
        return { thumb: vvaYoutubeThumb(item.youtubeId), kind: "video" };
      }
      if (item.type === "drive-image") {
        return { thumb: vvaDriveImage(item.driveId, 700), kind: "image" };
      }
      if (item.type === "instagram") {
        return { thumb: null, kind: "external" };
      }
      if (item.type === "drive-folder") {
        return { thumb: null, kind: "external" };
      }
      return { thumb: null, kind: "external" };
    };

    const cardHTML = (item) => {
      const m = mediaFor(item);
      const thumbEl = m.thumb
        ? `<img src="${m.thumb}" alt="${item.title} — ${item.tag} by Visual Verse Agency" width="700" height="440" loading="lazy" decoding="async" onerror="this.style.display='none'">`
        : `<div class="flex items-center" style="height:100%;justify-content:center;color:var(--text-faint);font-family:var(--font-mono);font-size:.75rem;letter-spacing:.05em;">${item.tag.toUpperCase()}</div>`;
      const playIcon = m.kind !== "image"
        ? `<span class="play" aria-hidden="true">▶</span>`
        : "";
      return `
      <article class="reel-card" data-cat="${item.category}" data-title="${item.title.toLowerCase()}">
        <button type="button" class="reel-media" data-open="${item.id}" aria-label="Open ${item.title} preview">
          ${thumbEl}
          ${playIcon}
          <span class="tc">${item.tc || item.category}</span>
        </button>
        <div class="reel-body">
          <span class="tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="reel-links">
            <button type="button" data-open="${item.id}">Preview</button>
            <span aria-hidden="true">·</span>
            <span>${item.category}</span>
          </div>
        </div>
      </article>`;
    };

    grid.innerHTML = items.map(cardHTML).join("");

    // reveal animation for injected cards
    grid.querySelectorAll(".reel-card").forEach((el, i) => {
      el.classList.add("reveal");
      setTimeout(() => el.classList.add("is-visible"), 30 * (i % 9));
    });

    /* ---- filters ---- */
    const chipsWrap = document.querySelector("[data-portfolio-filters]");
    const searchInput = document.querySelector("[data-portfolio-search]");
    const emptyState = document.querySelector(".portfolio-empty");

    if (chipsWrap) {
      const cats = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
      chipsWrap.innerHTML = cats
        .map((c, i) => `<button type="button" class="chip ${i === 0 ? "is-active" : ""}" data-cat="${c}">${c}</button>`)
        .join("");
    }

    const applyFilter = () => {
      const activeChip = chipsWrap ? chipsWrap.querySelector(".chip.is-active") : null;
      const cat = activeChip ? activeChip.getAttribute("data-cat") : "All";
      const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
      let visible = 0;
      grid.querySelectorAll(".reel-card").forEach((card) => {
        const matchesCat = cat === "All" || card.getAttribute("data-cat") === cat;
        const matchesQ = !q || card.getAttribute("data-title").includes(q);
        const show = matchesCat && matchesQ;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (emptyState) emptyState.classList.toggle("is-visible", visible === 0);
    };

    if (chipsWrap) {
      chipsWrap.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;
        chipsWrap.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
        btn.classList.add("is-active");
        applyFilter();
      });
    }
    if (searchInput) searchInput.addEventListener("input", applyFilter);

    /* ---- lightbox ---- */
    const lightbox = document.querySelector(".lightbox");
    if (lightbox) {
      const frame = lightbox.querySelector(".lightbox-frame");
      const titleEl = lightbox.querySelector("[data-lb-title]");
      const linkEl = lightbox.querySelector("[data-lb-link]");
      const closeBtn = lightbox.querySelector(".lightbox-close");

      const openLightbox = (id) => {
        const item = PORTFOLIO_ITEMS.find((p) => p.id === id);
        if (!item) return;

        if (item.type === "instagram" || item.type === "drive-folder") {
          window.open(item.url || vvaDriveView(item.driveId), "_blank", "noopener");
          return;
        }

        let inner = "";
        let href = "#";
        if (item.type === "drive-video") {
          inner = `<iframe src="${vvaDriveEmbed(item.driveId)}" title="${item.title}" allow="autoplay" loading="lazy"></iframe>`;
          href = vvaDriveView(item.driveId);
        } else if (item.type === "youtube") {
          inner = `<iframe src="${vvaYoutubeEmbed(item.youtubeId)}" title="${item.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>`;
          href = `https://www.youtube.com/watch?v=${item.youtubeId}`;
        } else if (item.type === "drive-image") {
          inner = `<img src="${vvaDriveImage(item.driveId, 1400)}" alt="${item.title}" loading="lazy">`;
          href = vvaDriveView(item.driveId);
        }
        frame.innerHTML = inner;
        if (titleEl) titleEl.textContent = `${item.title} — ${item.tag}`;
        if (linkEl) linkEl.href = href;
        lightbox.classList.add("is-open");
        document.body.style.overflow = "hidden";
      };

      grid.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-open]");
        if (!trigger) return;
        openLightbox(trigger.getAttribute("data-open"));
      });

      const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        frame.innerHTML = "";
        document.body.style.overflow = "";
      };
      if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
      });
    }

    applyFilter();
  }

  /* ==================================================================
     CONTACT FORM — client-side validation + demo submit
     ================================================================== */
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const status = form.querySelector(".form-status");

    const validators = {
      name: (v) => v.trim().length >= 2 || "Enter your full name.",
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
      phone: (v) => v.trim().length >= 7 || "Enter a valid phone number.",
      projectType: (v) => v !== "" || "Select a project type.",
      budget: (v) => v !== "" || "Select a budget range.",
      message: (v) => v.trim().length >= 10 || "Tell us a little more about your project.",
    };

    const showError = (field, msg) => {
      const wrap = field.closest(".field");
      if (!wrap) return;
      wrap.classList.toggle("has-error", !!msg);
      const err = wrap.querySelector(".err-msg");
      if (err) err.textContent = msg && msg !== true ? msg : "";
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      Object.entries(validators).forEach(([name, fn]) => {
        const field = form.elements[name];
        if (!field) return;
        const result = fn(field.value);
        if (result !== true) valid = false;
        showError(field, result === true ? "" : result);
      });

      status.className = "form-status";
      if (!valid) {
        status.classList.add("error");
        status.textContent = "Please fix the highlighted fields and try again.";
        status.style.display = "block";
        return;
      }

      // Demo submit — replace with real endpoint / integration.
      status.classList.add("success");
      status.textContent = "Thank you — your project brief has been received. We'll reply within 24 hours.";
      status.style.display = "block";
      form.reset();
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("blur", () => {
        const fn = validators[field.name];
        if (!fn) return;
        const result = fn(field.value);
        showError(field, result === true ? "" : result);
      });
    });
  }

  /* ---------------- Footer year ---------------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
