/**
 * PORTFOLIO_ITEMS
 * Single source of truth for the portfolio grid on portfolio.html and the
 * featured strip on index.html. Add an object to this array and a project
 * card is generated automatically by assets/js/main.js — no HTML edits needed.
 *
 * type: "drive-video" | "youtube" | "drive-image" | "instagram" | "drive-folder"
 */
const PORTFOLIO_ITEMS = [
  // ---------------------------- AI Ads ----------------------------
  { id: "white-pants", title: "White Pants — AI Product Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "AI-generated product spot built to sell fashion in seconds, not minutes.",
    type: "drive-video", driveId: "1XMaWr6n6P0vLO7g-aveAKGv7g7NBaAOB", tc: "00:00:14:02" },
  { id: "shoes", title: "Shoes — AI Product Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "Kinetic AI ad campaign for footwear, optimised for vertical feeds.",
    type: "drive-video", driveId: "118dyUW282I4rUA8cUBE4Ti5FlKZAmdbL", tc: "00:00:11:19" },
  { id: "renovation-01", title: "Renovation 01 — Home Services Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "Before/after renovation storytelling for a home-improvement brand.",
    type: "drive-video", driveId: "13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX", tc: "00:00:16:08" },
  { id: "renovation-02", title: "Renovation 02 — Home Services Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "A second cut exploring a different hook for the renovation campaign.",
    type: "drive-video", driveId: "13-p5ERrSyE8Dh9TAGBL_duPpU94rbWvX", tc: "00:00:15:11" },
  { id: "lawyer", title: "Lawyer — Professional Services Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "Trust-building AI ad for a legal practice, built for local reach.",
    type: "drive-video", driveId: "1KW9naPm5z5URXaYaGrrhVqv08XL6UQ1v", tc: "00:00:12:24" },
  { id: "jeans", title: "Jeans — AI Product Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "Denim campaign with AI-generated models across multiple looks.",
    type: "drive-video", driveId: "1hEgrrdo9NG3dVU5gaUzC1oIEJFv3L_Vk", tc: "00:00:13:06" },
  { id: "cycling-at-home", title: "Cycling At Home — Fitness Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "Home-fitness equipment ad built around an energetic AI narrative.",
    type: "drive-video", driveId: "1MnVkoi1lqL_Tp_RzgIn3VKk5RDTZdWbn", tc: "00:00:17:00" },
  { id: "big-guy", title: "Big Guy — Character-Led Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "A character-driven AI spot with comedic timing and a strong hook.",
    type: "drive-video", driveId: "1m0Wlv6zqBNvRPaV7ir55S_1xnpyFrOBm", tc: "00:00:10:15" },
  { id: "no-more-generic-adds", title: "No More Generic Ads", category: "AI Ads", tag: "AI Video Ad",
    desc: "A manifesto-style spot making the case against cookie-cutter advertising.",
    type: "drive-video", driveId: "1RcwgZnhAUwKr_osM4rNYmfbv7FxB3s93", tc: "00:00:19:03" },
  { id: "devify-thought", title: "Devify Thought — Brand Film", category: "AI Ads", tag: "AI Video Ad",
    desc: "Concept-driven brand film for a technology product launch.",
    type: "drive-video", driveId: "1_XhxuotjIJ_PGRuyfiWzdvmGw2Ew8p5I", tc: "00:00:21:07" },
  { id: "ai-bundle", title: "AI Bundle — Product Showcase", category: "AI Ads", tag: "AI Video Ad",
    desc: "Multi-product showcase reel built entirely with AI video tooling.",
    type: "drive-video", driveId: "1GyuasqMyKiRMs1iCpy_f5e8a07rkjoEB", tc: "00:00:18:12" },
  { id: "apex-01", title: "Apex 01 — Performance Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "High-energy performance-brand spot, cut 1.",
    type: "drive-video", driveId: "1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46", tc: "00:00:14:20" },
  { id: "apex-02", title: "Apex 02 — Performance Ad", category: "AI Ads", tag: "AI Video Ad",
    desc: "High-energy performance-brand spot, alternate edit.",
    type: "drive-video", driveId: "1h7V1K3WdODVsHbDlwZxrLFaA236bOL8j", tc: "00:00:14:02" },

  // ------------------------ AI Documentaries ------------------------
  { id: "the-last-reserve", title: "The Last Reserve", category: "Documentaries", tag: "AI Documentary",
    desc: "A long-form AI documentary exploring a world running out of resources.",
    type: "drive-video", driveId: "1NLWqV7fKN4449-NmM6KVp0DZhxmbljnR", tc: "00:07:42:00" },
  { id: "hezbollah-doc-project", title: "Hezbollah Documentary — Research Project", category: "Documentaries", tag: "Research & Production",
    desc: "A full research-to-production archive for a long-form documentary investigation.",
    type: "drive-folder", driveId: "1ckKuANbx8oh1cfHyH32vxrr4jpTayqkc", tc: "ARCHIVE" },
  { id: "sense-and-sensibility", title: "Sense and Sensibility", category: "Documentaries", tag: "AI Literary Film",
    desc: "A classic-literature adaptation reimagined through AI filmmaking.",
    type: "drive-video", driveId: "1B1UnAXpef4wJlbsyjFcP0eVbnZHiGbtY", tc: "00:05:10:00" },
  { id: "wuthering-heights", title: "Wuthering Heights", category: "Documentaries", tag: "AI Literary Film",
    desc: "Gothic romance retold as an atmospheric AI-produced film.",
    type: "drive-video", driveId: "1SSxALZgZvJ8-Q8ISlPALjl0_-COv4TA8", tc: "00:04:58:00" },
  { id: "pride-and-prejudice", title: "Pride and Prejudice", category: "Documentaries", tag: "AI Literary Film",
    desc: "A period drama brought to the screen with AI-driven visual storytelling.",
    type: "drive-video", driveId: "1lN80IWnO4Sbbpb5fziREHjH370ttUA3x", tc: "00:06:22:00" },

  // ---------------------------- Educational ----------------------------
  { id: "chinese-language-edu", title: "Chinese Language — Educational Video", category: "Educational", tag: "Language Learning",
    desc: "Structured, subtitled educational content for Chinese-language learners.",
    type: "drive-video", driveId: "1D9xxe2hl7xOVN4snVM6NPwmqd3RQXAu4", tc: "00:03:15:00" },
  { id: "ai-tutorial-01", title: "AI Tutorial 01 — Long Form", category: "Educational", tag: "AI Tutorial",
    desc: "Step-by-step, long-form walkthrough teaching a practical AI workflow.",
    type: "youtube", youtubeId: "7E1H3yjB_qA" },
  { id: "ai-tutorial-02", title: "AI Tutorial 02 — Long Form", category: "Educational", tag: "AI Tutorial",
    desc: "In-depth explainer breaking down an AI tool for real-world use.",
    type: "youtube", youtubeId: "r0LnqQmOqOM" },
  { id: "ai-tutorial-03", title: "AI Tutorial 03 — Long Form", category: "Educational", tag: "AI Tutorial",
    desc: "A guided tutorial designed to take beginners to confident users.",
    type: "youtube", youtubeId: "gpmIVAWNk80" },
  { id: "ai-tutorial-04", title: "AI Tutorial 04 — Long Form", category: "Educational", tag: "AI Tutorial",
    desc: "Practical, no-fluff tutorial format built for retention.",
    type: "youtube", youtubeId: "EUbPEv_Mgug" },
  { id: "ai-tutorial-05", title: "AI Tutorial 05 — Long Form", category: "Educational", tag: "AI Tutorial",
    desc: "Advanced walkthrough rounding out the long-form tutorial series.",
    type: "youtube", youtubeId: "JyWOXoma88E" },
  { id: "ai-tutorial-short-01", title: "AI Tutorial — Short 01", category: "Educational", tag: "AI Short",
    desc: "Fast, punchy short-form tutorial built for social discovery.",
    type: "youtube", youtubeId: "kMipARQ-zp8" },
  { id: "ai-tutorial-short-03", title: "AI Tutorial — Short 03", category: "Educational", tag: "AI Short",
    desc: "A single-tip short designed to hook viewers in the first second.",
    type: "youtube", youtubeId: "gs7A0uXekq0" },
  { id: "ai-tutorial-short-04", title: "AI Tutorial — Short 04", category: "Educational", tag: "AI Short",
    desc: "Vertical short-form lesson optimised for completion rate.",
    type: "youtube", youtubeId: "VhVfDWlRNDo" },
  { id: "ai-tutorial-short-05", title: "AI Tutorial — Short 05", category: "Educational", tag: "AI Short",
    desc: "Closing short in the tutorial series, built for shareability.",
    type: "youtube", youtubeId: "eT1qFIyyD2w" },
  { id: "kids-tutorial", title: "Kids Tutorial Video", category: "Educational", tag: "Kids Content",
    desc: "Friendly, simplified educational content produced for a younger audience.",
    type: "drive-video", driveId: "1aJQk9We5LeL5Jo4ewL6pFkjHWyehxhPp", tc: "00:02:40:00" },

  // ------------------------------- UGC -------------------------------
  { id: "ugc-01", title: "UGC Advertisement 01", category: "UGC", tag: "UGC Ad",
    desc: "Authentic, creator-style ad built to feel native to the feed.",
    type: "instagram", url: "https://www.instagram.com/reel/DTkV2bJDGoY/", tc: "REEL" },
  { id: "ugc-02", title: "UGC Advertisement 02", category: "UGC", tag: "UGC Ad",
    desc: "A second UGC-style spot, testing a different opening hook.",
    type: "instagram", url: "https://www.instagram.com/reel/DTkUSIPDPCR/", tc: "REEL" },
  { id: "ugc-03", title: "UGC Advertisement 03", category: "UGC", tag: "UGC Ad",
    desc: "Product-review-style UGC ad built for trust and conversion.",
    type: "instagram", url: "https://www.instagram.com/reel/DTcpOR8jGbF/", tc: "REEL" },
  { id: "ugc-04", title: "UGC Advertisement 04", category: "UGC", tag: "UGC Ad",
    desc: "Testimonial-driven UGC ad edited for paid social distribution.",
    type: "drive-video", driveId: "1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46", tc: "00:00:16:00" },

  // --------------------------- Client Work ---------------------------
  { id: "custom-video-editing", title: "Custom Video Editing Project", category: "Client Work", tag: "Client Project",
    desc: "Bespoke edit delivered for a client brief outside our template formats.",
    type: "drive-video", driveId: "1T7sRgnnvJ2F-hyKmwd6ukKUDCYUtPBSs", tc: "00:04:05:00" },

  // --------------------------- Logo Design ---------------------------
  { id: "logo-concept-01", title: "Logo Design — Concept 01", category: "Logo Design", tag: "Logo Design",
    desc: "Primary identity concept built around balance and legibility at scale.",
    type: "drive-image", driveId: "1g4MwFHm37gU0orB06o-RY3ziGG45_mII" },
  { id: "logo-concept-02", title: "Logo Design — Concept 02", category: "Logo Design", tag: "Logo Design",
    desc: "Alternate direction exploring a bolder monogram treatment.",
    type: "drive-image", driveId: "195nqaUSSvfRX27Z7fLxCU3nuXzOiJFnG" },
  { id: "logo-concept-03", title: "Logo Design — Concept 03", category: "Logo Design", tag: "Logo Design",
    desc: "A refined wordmark variant designed for print and merchandise.",
    type: "drive-image", driveId: "1u30qGh--D15zv0k0Su0BFNwuvxUwuFu0" },
  { id: "logo-concept-04", title: "Logo Design — Concept 04", category: "Logo Design", tag: "Logo Design",
    desc: "Emblem-style concept built for a strong app-icon presence.",
    type: "drive-image", driveId: "16goMwzOYhTjx7Axr-aM76m1vP7OWLdly" },
  { id: "logo-concept-05", title: "Logo Design — Concept 05", category: "Logo Design", tag: "Logo Design",
    desc: "Final refined concept balancing all prior explorations.",
    type: "drive-image", driveId: "1XuFtm27m4UNLUYDjMao0_rxFZAjFBFtA" },

  // ------------------------- Thumbnail Design -------------------------
  { id: "thumb-01", title: "YouTube Thumbnail 01", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "High-contrast thumbnail designed to lift click-through rate.",
    type: "drive-image", driveId: "1GDby3H3ngNuyS9aVco9Q1ZswJCL0LMbP" },
  { id: "thumb-02", title: "YouTube Thumbnail 02", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Bold typography paired with a clear focal subject.",
    type: "drive-image", driveId: "1VJ1HKi5f-O_Bje6oDZ6k0WPwCqvRUKJD" },
  { id: "thumb-03", title: "YouTube Thumbnail 03", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Curiosity-driven composition built for a tutorial series.",
    type: "drive-image", driveId: "1_D9kBZWak2btt0PVkAJI3vjyilUTfWgE" },
  { id: "thumb-04", title: "YouTube Thumbnail 04", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Brand-consistent thumbnail set piece for a channel refresh.",
    type: "drive-image", driveId: "1tGSdLvCXXjxyBn3j4DwWMrajfToa1P82" },
  { id: "thumb-05", title: "YouTube Thumbnail 05", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Minimal composition designed to stand out in a busy feed.",
    type: "drive-image", driveId: "1-woPHTkXxV-piMdjqbk6Cg2CqMOoBKaD" },
  { id: "thumb-06", title: "YouTube Thumbnail 06", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Reaction-style thumbnail built for maximum emotional pull.",
    type: "drive-image", driveId: "1AhnanVkFgup9_2NK3YTBL3maRQb8oYpk" },
  { id: "thumb-07", title: "YouTube Thumbnail 07", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Split-composition thumbnail built around a before/after story.",
    type: "drive-image", driveId: "1yM_ApIqcJLvo7wiYnZu0njBN_1VRRp6H" },
  { id: "thumb-08", title: "YouTube Thumbnail 08", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Numbers-driven thumbnail built for a listicle-style video.",
    type: "drive-image", driveId: "1FnETMG5ph1NeD_qQU_9vOYOXy2JSdmOj" },
  { id: "thumb-09", title: "YouTube Thumbnail 09", category: "Thumbnail Design", tag: "Thumbnail",
    desc: "Closing thumbnail in the set, tuned for a finale episode.",
    type: "drive-image", driveId: "1YMmqRVG5wmQnP2zjnU37cDd3c_ZBTXu-" },
];

// ---- helpers used across pages ----
function vvaDriveImage(id, w) { return `https://drive.google.com/thumbnail?id=${id}&sz=w${w || 800}`; }
function vvaDriveEmbed(id) { return `https://drive.google.com/file/d/${id}/preview`; }
function vvaDriveView(id) { return `https://drive.google.com/file/d/${id}/view`; }
function vvaYoutubeThumb(id) { return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }
function vvaYoutubeEmbed(id) { return `https://www.youtube.com/embed/${id}`; }
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
