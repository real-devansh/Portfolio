/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
   DEVAN PORTFOLIO Ã¢â‚¬â€ main.js
   Particle Engine Ã¢â‚¬Â¢ Carousels Ã¢â‚¬Â¢ Scroll FX
Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */

'use strict';

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Custom Cursor Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initCustomCursor() {
  // Guard: skip on touch-only devices
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const ring = document.getElementById('cursor-ring');
  const dot  = document.getElementById('cursor-dot');
  if (!ring || !dot) return;

  // Current real mouse position (snaps instantly)
  let mx = -200, my = -200;
  // Lagging ring position (lerp target)
  let rx = -200, ry = -200;
  let isVisible   = false;
  let isHovering  = false;
  let rafId       = null;

  // Ã¢â€â‚¬Ã¢â€â‚¬ Selectors that trigger hover state Ã¢â€â‚¬Ã¢â€â‚¬
  const HOVER_SEL = [
    'a', 'button',
    '.skill-card', '.project-card',
    '.carousel-btn', '.icon-link',
    '.btn', '.nav-link', '.nav-logo',
    '[tabindex="0"]',
  ].join(', ');

  // Ã¢â€â‚¬Ã¢â€â‚¬ Lerp helper Ã¢â€â‚¬Ã¢â€â‚¬
  function lerp(a, b, t) { return a + (b - a) * t; }

  // Ã¢â€â‚¬Ã¢â€â‚¬ rAF loop Ã¢â€â‚¬Ã¢â€â‚¬
  function tick() {
    // Smoothly chase real mouse position (ring lags, dot snaps)
    rx = lerp(rx, mx, 0.14);
    ry = lerp(ry, my, 0.14);

    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';

    rafId = requestAnimationFrame(tick);
  }

  // Ã¢â€â‚¬Ã¢â€â‚¬ Mouse enter viewport Ã¢â€â‚¬Ã¢â€â‚¬
  document.addEventListener('mousemove', function onFirstMove(e) {
    mx = e.clientX;
    my = e.clientY;
    rx = mx; ry = my; // jump ring to cursor on first move (no slide-in)

    if (!isVisible) {
      isVisible = true;
      ring.classList.add('cursor-visible');
      dot.classList.add('cursor-visible');
    }
  });

  // Ã¢â€â‚¬Ã¢â€â‚¬ Track position Ã¢â€â‚¬Ã¢â€â‚¬
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Ã¢â€â‚¬Ã¢â€â‚¬ Hover state via pointer-over Ã¢â€â‚¬Ã¢â€â‚¬
  document.addEventListener('pointerover', e => {
    if (e.target.closest(HOVER_SEL)) {
      if (!isHovering) {
        isHovering = true;
        ring.classList.add('cursor-hover');
      }
    } else {
      if (isHovering) {
        isHovering = false;
        ring.classList.remove('cursor-hover');
      }
    }
  });

  // Ã¢â€â‚¬Ã¢â€â‚¬ Fade out when mouse leaves window Ã¢â€â‚¬Ã¢â€â‚¬
  document.addEventListener('mouseleave', () => {
    ring.classList.remove('cursor-visible');
    dot.classList.remove('cursor-visible');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    ring.classList.add('cursor-visible');
    dot.classList.add('cursor-visible');
    isVisible = true;
  });

  // Ã¢â€â‚¬Ã¢â€â‚¬ Start loop Ã¢â€â‚¬Ã¢â€â‚¬
  rafId = requestAnimationFrame(tick);
})();

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Particle Canvas Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles, mouse = { x: -9999, y: -9999 };
  const COUNT      = 80;
  const LINK_DIST  = 130;
  const MOUSE_DIST = 160;
  const SPEED      = 0.4;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    const side = Math.random();
    let x, y;
    if (side < 0.5) {
      // right half primarily
      x = W * 0.45 + Math.random() * W * 0.55;
      y = Math.random() * H;
    } else {
      x = Math.random() * W;
      y = Math.random() * H;
    }
    return {
      x, y,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.6 + 0.2,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Subtle vignette
    const grad = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, H * 0.7);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, 'rgba(7,7,15,.55)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.8;
        p.vx += (dx / dist) * force * 0.12;
        p.vy += (dy / dist) * force * 0.12;
      }

      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x  += p.vx;
      p.y  += p.vy;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96,165,250,${p.alpha})`;
      ctx.fill();

      // Draw links
      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const lx = p.x - q.x;
        const ly = p.y - q.y;
        const ld = Math.sqrt(lx * lx + ly * ly);
        if (ld < LINK_DIST) {
          const opacity = (1 - ld / LINK_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(59,130,246,${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();

  window.addEventListener('resize', () => { resize(); });
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
})();


// ═══════════════════════════════════════════════════════════════════
//  CSS MARQUEE — Seamless infinite carousel
//  Strategy:
//   1. JS wraps all cards into .marquee-group, clones it (aria-hidden)
//   2. CSS @keyframes marquee animates translateX(0 → -50%)
//      → -50% = exactly one group width → perfect seamless loop
//   3. animation-duration set dynamically from real content width
//   4. Wheel: seeks position via animation-delay (no snap/jump)
//   5. Hover: pauses; mouse-leave: resumes
// ═══════════════════════════════════════════════════════════════════

function setupMarquee(outerId, trackId, pxPerSecond) {
  const outer = document.getElementById(outerId);
  const track = document.getElementById(trackId);
  if (!outer || !track) return;

  const speed = pxPerSecond || 40;

  // ── 1. Build two marquee groups ────────────────────────────────
  const origCards = Array.from(track.children);

  const g1 = document.createElement('div');
  g1.className = 'marquee-group';
  origCards.forEach(c => g1.appendChild(c));

  const g2 = document.createElement('div');
  g2.className = 'marquee-group';
  g2.setAttribute('aria-hidden', 'true');
  origCards.forEach(c => g2.appendChild(c.cloneNode(true)));

  track.innerHTML = '';
  track.appendChild(g1);
  track.appendChild(g2);

  // Re-draw canvases in cloned group
  g2.querySelectorAll('.project-thumb').forEach(thumb => {
    const canvas = thumb.querySelector('.project-canvas');
    if (!canvas) return;
    const hue = parseInt(thumb.dataset.hue) || 220;
    drawProjectThumb(canvas, hue);
  });

  // ── 2. Set animation-duration from real width ──────────────────
  let groupW = 0;

  function updateDuration() {
    groupW = g1.offsetWidth + 20; // +gap
    if (groupW > 20) {
      track.style.animationDuration = (groupW / speed).toFixed(2) + 's';
    }
  }

  requestAnimationFrame(() => {
    updateDuration();
    window.addEventListener('resize', updateDuration);
  });


  // ── 3 & 4. Wheel (one card/tick, 400ms lock) + Hover ──────────
  // Strategy: pause CSS animation, switch to manual translateX,
  // re-sync animation-delay on resume so there's zero snap/jump.
  let wheelLocked  = false;
  let resumeTimer  = null;
  let manualOffset = null;   // null = CSS is driving; number = we are

  function getComputedOffset() {
    const mat = new DOMMatrix(window.getComputedStyle(track).transform);
    return (((-mat.m41) % groupW) + groupW) % groupW;
  }

  function pauseAtCurrent() {
    if (manualOffset === null) {
      manualOffset = getComputedOffset();
      track.style.animationPlayState = 'paused';
      track.style.transform = 'translateX(-' + manualOffset.toFixed(2) + 'px)';
      // Remove CSS animation so our inline transform takes full control
      track.style.animation = 'none';
    }
  }

  function scheduleResume(dur) {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function() {
      if (manualOffset === null) return;
      const px  = ((manualOffset % groupW) + groupW) % groupW;
      const d   = -((px / groupW) * dur);
      track.style.animation      = '';           // restore CSS animation
      track.style.transform      = '';
      track.style.animationDelay = d.toFixed(3) + 's';
      track.style.animationPlayState = 'running';
      manualOffset = null;
      resumeTimer  = null;
    }, 1600);
  }

  outer.addEventListener('wheel', function(e) {
    if (!outer.matches(':hover')) return;
    e.preventDefault();
    if (wheelLocked || !groupW) return;

    // 400ms lock — swallows all inertia/momentum follow-up events
    wheelLocked = true;
    setTimeout(function() { wheelLocked = false; }, 400);

    const firstCard = g1.querySelector('.skill-card, .project-card');
    const cardW     = firstCard ? firstCard.offsetWidth + 20 : 220;
    const dur       = groupW / speed;

    pauseAtCurrent();

    // Step exactly one card
    const dir = e.deltaY > 0 ? 1 : -1;
    manualOffset = (manualOffset + cardW * dir + groupW) % groupW;
    track.style.transform = 'translateX(-' + manualOffset.toFixed(2) + 'px)';

    scheduleResume(dur);
  }, { passive: false });

  outer.addEventListener('mouseenter', function() {
    if (manualOffset !== null) return;  // wheel already paused
    track.style.animationPlayState = 'paused';
  });

  outer.addEventListener('mouseleave', function() {
    if (manualOffset !== null) return;  // let wheel resume timer handle it
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = null;
    track.style.animationPlayState = 'running';
  });

}

// ── Draw helper (used by original + clones) ───────────────────────
function drawProjectThumb(canvas, hue) {
  if (!canvas || canvas.dataset.drawn) return;
  canvas.dataset.drawn = '1';
  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;

  function resize() {
    canvas.width  = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }

  function paint() {
    const W = canvas.width, H = canvas.height;
    if (!W || !H) return;
    ctx.clearRect(0, 0, W, H);
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, `hsl(${hue},60%,6%)`);
    bg.addColorStop(1, `hsl(${hue+30},40%,4%)`);
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    const rad = Math.min(W,H)*0.55;
    const orb = ctx.createRadialGradient(W*.6,H*.4,0,W*.6,H*.4,rad);
    orb.addColorStop(0,`hsla(${hue},90%,55%,.18)`);
    orb.addColorStop(.5,`hsla(${hue},80%,45%,.07)`);
    orb.addColorStop(1,'transparent');
    ctx.fillStyle = orb; ctx.fillRect(0, 0, W, H);
    const cx=W*.55, cy=H*.45, sides=6;
    const r0=Math.min(W,H)*.28, r1=r0*.5;
    [[r0,.3,60,1],[r1,.5,65,1.2]].forEach(([r,a,l,lw]) => {
      ctx.beginPath();
      for(let k=0;k<sides;k++){
        const ang=(k/sides)*Math.PI*2-Math.PI/6;
        k===0?ctx.moveTo(cx+Math.cos(ang)*r,cy+Math.sin(ang)*r)
             :ctx.lineTo(cx+Math.cos(ang)*r,cy+Math.sin(ang)*r);
      }
      ctx.closePath();
      ctx.strokeStyle=`hsla(${hue},80%,${l}%,${a})`;
      ctx.lineWidth=lw; ctx.stroke();
    });
    for(let k=0;k<sides;k++){
      const ang=(k/sides)*Math.PI*2-Math.PI/6;
      ctx.beginPath();
      ctx.moveTo(cx+Math.cos(ang)*r1,cy+Math.sin(ang)*r1);
      ctx.lineTo(cx+Math.cos(ang)*r0,cy+Math.sin(ang)*r0);
      ctx.strokeStyle=`hsla(${hue},80%,60%,.2)`;
      ctx.lineWidth=.8; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(cx,cy,3,0,Math.PI*2);
    ctx.fillStyle=`hsl(${hue},90%,70%)`;
    ctx.shadowColor=`hsl(${hue},90%,60%)`; ctx.shadowBlur=12;
    ctx.fill(); ctx.shadowBlur=0;
    for(let k=0;k<18;k++){
      const fx=W*(0.05+Math.sin(k*1.3+hue)*0.45+0.45);
      const fy=H*(0.05+Math.cos(k*1.7+hue)*0.45+0.45);
      ctx.beginPath();
      ctx.arc(fx,fy,0.8+Math.sin(k)*0.5,0,Math.PI*2);
      ctx.fillStyle=`hsla(${hue},80%,65%,${0.15+0.1*Math.sin(k)})`;
      ctx.fill();
    }
  }
  resize(); paint();
  new ResizeObserver(()=>{ resize(); paint(); }).observe(parent);
}

// Init original canvases first
document.querySelectorAll('.project-thumb').forEach(thumb => {
  const c = thumb.querySelector('.project-canvas');
  if (c) drawProjectThumb(c, parseInt(thumb.dataset.hue)||220);
});

// Launch carousels
setupMarquee('skills-outer', 'skills-track', 42);
setupMarquee('work-outer',   'work-track',   30);




// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Navbar scroll state Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
})();


// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Active nav link on scroll Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => io.observe(s));
})();


// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Reveal on scroll Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initReveal() {
  const targets = document.querySelectorAll('.section-header, .skill-card, .project-card, .contact-headline, .contact-sub, .contact-eyebrow, .btn');
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => io.observe(el));
})();


// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Skill bar animation on scroll Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
(function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => io.observe(f));
})();

// Featured grid canvas tiles — draw animated bg on each .feat-canvas
(function initFeaturedCanvases() {
  document.querySelectorAll('.feat-canvas').forEach(function(canvas) {
    const hue = parseInt(canvas.dataset.hue) || 200;
    const parent = canvas.parentElement;

    function resize() {
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }

    function paint() {
      const W = canvas.width, H = canvas.height;
      if (!W || !H) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, W, H);

      // Dark background
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, 'hsl(' + hue + ',55%,5%)');
      bg.addColorStop(1, 'hsl(' + (hue+30) + ',35%,3%)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Radial orb
      const rad = Math.min(W, H) * 0.65;
      const orb = ctx.createRadialGradient(W*0.65, H*0.4, 0, W*0.65, H*0.4, rad);
      orb.addColorStop(0, 'hsla(' + hue + ',85%,55%,.15)');
      orb.addColorStop(0.5, 'hsla(' + hue + ',70%,45%,.06)');
      orb.addColorStop(1, 'transparent');
      ctx.fillStyle = orb;
      ctx.fillRect(0, 0, W, H);

      // Hexagon outline
      const cx = W * 0.62, cy = H * 0.42;
      const r0 = Math.min(W, H) * 0.3, r1 = r0 * 0.5;
      const sides = 6;
      [[r0, 0.28, 55, 1.2], [r1, 0.45, 60, 1]].forEach(function(p) {
        var r=p[0], a=p[1], l=p[2], lw=p[3];
        ctx.beginPath();
        for (var k = 0; k < sides; k++) {
          var ang = (k / sides) * Math.PI * 2 - Math.PI / 6;
          if (k === 0) ctx.moveTo(cx + Math.cos(ang)*r, cy + Math.sin(ang)*r);
          else         ctx.lineTo(cx + Math.cos(ang)*r, cy + Math.sin(ang)*r);
        }
        ctx.closePath();
        ctx.strokeStyle = 'hsla(' + hue + ',75%,' + l + '%,' + a + ')';
        ctx.lineWidth = lw; ctx.stroke();
      });

      // Spoke lines
      for (var k = 0; k < sides; k++) {
        var ang = (k / sides) * Math.PI * 2 - Math.PI / 6;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang)*r1, cy + Math.sin(ang)*r1);
        ctx.lineTo(cx + Math.cos(ang)*r0, cy + Math.sin(ang)*r0);
        ctx.strokeStyle = 'hsla(' + hue + ',80%,60%,.15)';
        ctx.lineWidth = 0.8; ctx.stroke();
      }

      // Center dot glow
      ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI*2);
      ctx.fillStyle = 'hsl(' + hue + ',90%,70%)';
      ctx.shadowColor = 'hsl(' + hue + ',90%,60%)';
      ctx.shadowBlur = 14; ctx.fill(); ctx.shadowBlur = 0;

      // Scattered micro particles
      for (var k = 0; k < 18; k++) {
        var fx = W * (0.05 + Math.sin(k*1.3+hue)*0.45 + 0.45);
        var fy = H * (0.05 + Math.cos(k*1.7+hue)*0.45 + 0.45);
        ctx.beginPath(); ctx.arc(fx, fy, 0.9+Math.sin(k)*0.5, 0, Math.PI*2);
        ctx.fillStyle = 'hsla(' + hue + ',80%,65%,' + (0.12+0.1*Math.sin(k)) + ')';
        ctx.fill();
      }
    }

    resize(); paint();
    new ResizeObserver(function() { resize(); paint(); }).observe(parent);
  });
})();
