// IGIT Connect — Global theme manager
(function () {
  // Apply theme from storage immediately to avoid flash
  const stored = localStorage.getItem('igit-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', stored);

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('igit-theme', t);
    window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  }

  function buildToggleBtn() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.title = 'Toggle light / dark mode';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = '<span class="icon-sun">🌙</span><span class="icon-moon">☀️</span>';
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      setTheme(cur === 'light' ? 'dark' : 'light');
    });
    return btn;
  }

  function inject() {
    const topbar = document.querySelector('.topbar');
    const nav = document.querySelector('nav');

    if (topbar && !topbar.querySelector('.theme-toggle')) {
      const back = topbar.querySelector('a.back');
      if (back) {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;align-items:center;gap:6px;';
        back.parentNode.insertBefore(wrap, back);
        wrap.appendChild(back);
        wrap.appendChild(buildToggleBtn());
      } else {
        topbar.appendChild(buildToggleBtn());
      }
    }

    if (nav && !nav.querySelector('.theme-toggle')) {
      const links = nav.querySelector('.nav-links');
      if (links) links.appendChild(buildToggleBtn());
      else nav.appendChild(buildToggleBtn());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  // ---------------------------------------------------------
  // Three.js theme adapter
  // Each page that creates a particle Points or wireframe Mesh
  // can call IGITTheme.bind(object) to get auto-recoloring.
  // ---------------------------------------------------------
  function isLight() {
    return document.documentElement.getAttribute('data-theme') === 'light';
  }

  function recolorPoints(points) {
    const colorAttr = points.geometry && points.geometry.attributes && points.geometry.attributes.color;
    if (!colorAttr) return;
    const arr = colorAttr.array;
    const light = isLight();
    for (let i = 0; i < arr.length; i += 3) {
      const m = Math.random();
      if (light) {
        // Dark indigo / pink particles for white bg
        arr[i]     = 0.20 + m * 0.30;
        arr[i + 1] = 0.15 + m * 0.20;
        arr[i + 2] = 0.55 + m * 0.30;
      } else {
        arr[i]     = 0.4 + m * 0.6;
        arr[i + 1] = 0.5 + m * 0.4;
        arr[i + 2] = 0.9;
      }
    }
    colorAttr.needsUpdate = true;

    // Adjust point material opacity for proper visibility per theme
    if (points.material) {
      points.material.opacity = light ? 0.85 : 0.6;
      points.material.size = light ? 0.05 : 0.04;
      points.material.needsUpdate = true;
    }
  }

  function recolorMesh(mesh) {
    if (!mesh || !mesh.material) return;
    const light = isLight();
    if (mesh.material.color && mesh.userData.themeColors) {
      const c = mesh.userData.themeColors[light ? 'light' : 'dark'];
      if (c !== undefined) mesh.material.color.setHex(c);
    }
    if (mesh.material.opacity !== undefined && mesh.userData.themeOpacity) {
      mesh.material.opacity = mesh.userData.themeOpacity[light ? 'light' : 'dark'];
    }
  }

  window.IGITTheme = {
    isLight,
    bind(obj) {
      if (!obj) return obj;
      if (!window._igitBound) window._igitBound = [];
      window._igitBound.push(obj);
      if (obj.isPoints || (obj.geometry && obj.material && obj.material.vertexColors !== undefined && obj.geometry.attributes.color)) {
        recolorPoints(obj);
      } else {
        recolorMesh(obj);
      }
      return obj;
    },
    bindMesh(mesh, themeColors, themeOpacity) {
      mesh.userData.themeColors = themeColors;
      if (themeOpacity) mesh.userData.themeOpacity = themeOpacity;
      this.bind(mesh);
      return mesh;
    },
    recolorAll() {
      (window._igitBound || []).forEach(o => {
        if (o.isPoints) recolorPoints(o);
        else recolorMesh(o);
      });
    }
  };

  window.addEventListener('themechange', () => window.IGITTheme.recolorAll());
})();
