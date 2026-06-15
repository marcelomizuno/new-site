/* ═══════════════════════════════════════════
   MAIN.JS — Homepage Scripts
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══ Initialize Lucide Icons ═══
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ═══ WebGL Mesh Gradient ═══
  (function() {
    const canvas = document.getElementById('mesh-gradient');
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      canvas.style.display = 'none';
      document.body.classList.add('no-webgl');
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    const vertSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragSrc = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      vec3 palette(float t) {
        vec3 a = vec3(0.486, 0.227, 0.929);
        vec3 b = vec3(0.388, 0.400, 0.945);
        vec3 c = vec3(0.024, 0.714, 0.831);
        vec3 d = vec3(0.298, 0.114, 0.584);
        vec3 e = vec3(0.545, 0.361, 0.965);

        if (t < 0.25) return mix(a, b, t * 4.0);
        if (t < 0.5) return mix(b, c, (t - 0.25) * 4.0);
        if (t < 0.75) return mix(c, d, (t - 0.5) * 4.0);
        return mix(d, e, (t - 0.75) * 4.0);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        float t = u_time * 0.02;

        float d1 = length(uv - vec2(0.3 + 0.2 * sin(t), 0.4 + 0.2 * cos(t * 0.7)));
        float d2 = length(uv - vec2(0.7 + 0.2 * cos(t * 0.8), 0.6 + 0.2 * sin(t * 0.6)));
        float d3 = length(uv - vec2(0.5 + 0.3 * sin(t * 0.5), 0.3 + 0.3 * cos(t * 0.9)));
        float d4 = length(uv - vec2(0.2 + 0.2 * cos(t * 0.4), 0.7 + 0.2 * sin(t * 1.1)));
        float d5 = length(uv - vec2(0.8 + 0.15 * sin(t * 0.3), 0.2 + 0.15 * cos(t * 0.7)));

        float w1 = 1.0 / (d1 * d1 + 0.1);
        float w2 = 1.0 / (d2 * d2 + 0.1);
        float w3 = 1.0 / (d3 * d3 + 0.1);
        float w4 = 1.0 / (d4 * d4 + 0.1);
        float w5 = 1.0 / (d5 * d5 + 0.1);

        float total = w1 + w2 + w3 + w4 + w5;
        float idx = (w1 * 0.0 + w2 * 0.25 + w3 * 0.5 + w4 * 0.75 + w5 * 1.0) / total;

        vec3 color = palette(idx);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vert = createShader(gl.VERTEX_SHADER, vertSrc);
    const frag = createShader(gl.FRAGMENT_SHADER, fragSrc);

    if (!vert || !frag) {
      canvas.style.display = 'none';
      document.body.classList.add('no-webgl');
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');

    let startTime = performance.now();

    function render() {
      if (prefersReducedMotion) {
        gl.uniform1f(uTime, 0);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        return;
      }

      const elapsed = (performance.now() - startTime) / 1000;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }

    render();
  })();

  // ═══ Scroll Animations (IntersectionObserver) ═══
  (function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animElements = document.querySelectorAll('.fade-up, .scale-reveal, .stagger-children');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animElements.forEach(el => observer.observe(el));
  })();

  // ═══ Metric Counter Animation ═══
  (function() {
    const counters = document.querySelectorAll('[data-counter]');

    function animateCounter(el) {
      const target = parseInt(el.dataset.counter);
      const suffix = el.textContent.replace(/[0-9]/g, '');
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = value + suffix;

        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  })();

  // ═══ Mobile Menu Toggle ═══
  (function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar-nav');

    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
        const isOpen = nav.classList.contains('mobile-open');
        menuBtn.setAttribute('aria-expanded', isOpen);
      });
    }
  })();

  // ═══ Smooth Scroll for Anchor Links ═══
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const nav = document.querySelector('.navbar-nav');
        if (nav) nav.classList.remove('mobile-open');
      }
    });
  });

  // ═══ Navbar Scroll Effect ═══
  (function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
      } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.7)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  })();

});
