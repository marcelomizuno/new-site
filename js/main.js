(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');
    var header = document.querySelector('header');
    var whatsapp = document.querySelector('.whatsapp-float');

    function setMobileMenu(open) {
      if (!hamburger || !mobileNav) {
        return;
      }

      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', String(open));
      mobileNav.classList.toggle('open', open);
      mobileNav.hidden = !open;
    }

    function updateHeaderState() {
      if (!header) {
        return;
      }

      header.classList.toggle('scrolled', window.scrollY > 50);
    }

    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.addEventListener('click', function () {
        setMobileMenu(!hamburger.classList.contains('active'));
      });
    }

    if (mobileNav) {
      mobileNav.hidden = true;
    }

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href^="#"]');

      if (!link) {
        return;
      }

      var targetId = link.getAttribute('href');

      if (!targetId || targetId === '#') {
        return;
      }

      var target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      setMobileMenu(false);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();

    /* ══════════════════════════════════════════════════════════
       Reveal-on-scroll
       - `[data-animate]`        → legacy sections, get `.animate-in`
       - `data-animation="..."`  → add a named reveal class
                                  (fade-in | slide-in-left | slide-in-right | scale-in)
       - `data-delay="<ms>"`     → set transition-delay on reveal
       - `data-stagger-children` → auto-apply `.stagger-N` to direct children
       ══════════════════════════════════════════════════════════ */

    var REVEAL_CLASSES = {
      'fade-in': 'fade-in',
      'fade': 'fade-in',
      'slide-in-left': 'slide-in-left',
      'slide-left': 'slide-in-left',
      'slide-in-right': 'slide-in-right',
      'slide-right': 'slide-in-right',
      'scale-in': 'scale-in',
      'scale': 'scale-in'
    };

    var MAX_STAGGER = 4;

    function applyRevealAttrs(root) {
      var scope = root || document;

      // 1. data-animation → add matching reveal class + data-animate-style
      var custom = scope.querySelectorAll('[data-animation]');
      custom.forEach(function (el) {
        var key = (el.getAttribute('data-animation') || '').toLowerCase();
        var cls = REVEAL_CLASSES[key];
        if (!cls) {
          return;
        }
        if (el.classList) {
          el.classList.add(cls);
        }
      });

      // 2. data-delay → inline transition-delay (number → ms)
      var delayed = scope.querySelectorAll('[data-delay]');
      delayed.forEach(function (el) {
        var raw = parseFloat(el.getAttribute('data-delay'));
        if (isNaN(raw)) {
          return;
        }
        var ms = raw > 10 ? raw : raw * 1000; // accept "300" or "0.3"
        el.style.transitionDelay = ms + 'ms';
      });

      // 3. data-stagger-children → stagger up to MAX_STAGGER direct children
      var staggerGroups = scope.querySelectorAll('[data-stagger-children]');
      staggerGroups.forEach(function (group) {
        var children = Array.prototype.slice.call(group.children);
        var limit = parseInt(group.getAttribute('data-stagger-children'), 10);
        if (isNaN(limit) || limit <= 0) {
          limit = MAX_STAGGER;
        }
        var max = Math.min(limit, MAX_STAGGER, children.length);
        for (var i = 0; i < max; i++) {
          children[i].classList.add('stagger-' + (i + 1));
        }
      });
    }

    applyRevealAttrs();

    function reveal(target) {
      if (!target || target.classList.contains('in-view') || target.classList.contains('animate-in')) {
        return;
      }
      target.classList.add('in-view');
      target.classList.add('animate-in');
    }

    function watchReveal() {
      var candidates = document.querySelectorAll(
        '[data-animate], .fade-in, .slide-in-left, .slide-in-right, .scale-in'
      );

      if (!('IntersectionObserver' in window)) {
        candidates.forEach(reveal);
        return;
      }

      var observer = new IntersectionObserver(function (entries, instance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            instance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      candidates.forEach(function (item) {
        observer.observe(item);
      });
    }

    watchReveal();

    /* ══════════════════════════════════════════════════════════
       Micro-interaction wiring
       Apply enhancement classes to existing components so authors
       can opt in by markup (`.card`, `.btn-primary`, nav links)
       without re-templating pages.
       ══════════════════════════════════════════════════════════ */

    function applyMicroInteractions() {
      // Cards: enhanced hover lift (translateY -4px + glow)
      var cards = document.querySelectorAll('.card');
      cards.forEach(function (card) {
        card.classList.add('card--interactive');
      });

      // Primary CTAs: scale + soft glow pulse on hover
      var primaryButtons = document.querySelectorAll('.btn-primary');
      primaryButtons.forEach(function (btn) {
        btn.classList.add('btn--glow');
      });

      // Nav links (header + footer) + inline content links → slide-in underline
      var linkSelectors = [
        '.main-nav__list a',
        '.footer-col a',
        '.mobile-nav__list a'
      ].join(', ');
      var navLinks = document.querySelectorAll(linkSelectors);
      navLinks.forEach(function (link) {
        link.classList.add('link-underline');
      });
    }

    applyMicroInteractions();

    if (whatsapp) {
      whatsapp.style.position = 'fixed';
      whatsapp.style.right = '24px';
      whatsapp.style.bottom = '24px';
      whatsapp.style.zIndex = '999';
    }
  });
}());
