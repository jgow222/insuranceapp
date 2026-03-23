/* =============================================
   ClaimMax — Exit Intent & Back Button Warning
   ============================================= */

(function () {
  let exitShown = false;

  // ── Desktop: mouse leaves toward top of viewport ──
  document.addEventListener('mouseleave', function (e) {
    if (e.clientY <= 10 && !exitShown) {
      showExitModal();
    }
  });

  // ── Mobile / all: beforeunload on links leaving the site ──
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Only intercept external links or back-to-home from inner pages
    if (href && (href.startsWith('http') || href === '../index.html')) return;
  });

  // ── Back button hover warning on claim/payment pages ──
  // Attaches to any element with data-exit-warn attribute
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-exit-warn]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.setAttribute('data-tooltip-visible', 'true');
      });
      el.addEventListener('mouseleave', () => {
        el.setAttribute('data-tooltip-visible', 'false');
      });
    });

    // Close modal handlers
    document.getElementById('exit-modal-overlay')?.addEventListener('click', function (e) {
      if (e.target === this) hideExitModal();
    });
    document.getElementById('exit-dismiss-btn')?.addEventListener('click', hideExitModal);
    document.getElementById('exit-cta-btn')?.addEventListener('click', () => {
      hideExitModal();
      // Navigate to claim page if not already there
      if (!window.location.pathname.includes('claim')) {
        window.location.href = window.location.pathname.includes('pages') ? 'claim.html' : 'pages/claim.html';
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') hideExitModal();
    });
  });

  function showExitModal() {
    exitShown = true;
    const modal = document.getElementById('exit-modal-overlay');
    if (modal) {
      modal.style.display = 'flex';
      requestAnimationFrame(() => modal.classList.add('visible'));
    }
  }

  function hideExitModal() {
    const modal = document.getElementById('exit-modal-overlay');
    if (modal) {
      modal.classList.remove('visible');
      setTimeout(() => { modal.style.display = 'none'; }, 250);
    }
  }
})();
