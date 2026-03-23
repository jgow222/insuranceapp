/* =============================================
   ClaimMax — Payment Page JS
   ============================================= */

// Populate summary dates
(function () {
  const now = new Date();
  const due = new Date(now);
  due.setDate(due.getDate() + 30);

  const fmt = d => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const sumDate = document.getElementById('summary-date');
  const sumDeadline = document.getElementById('sum-deadline');

  if (sumDate) sumDate.textContent = fmt(now);
  if (sumDeadline) sumDeadline.textContent = fmt(due);
})();

// Fee calculator
function recalcFee() {
  const offer = parseFloat(document.getElementById('final-offer')?.value) || 0;
  const settlement = parseFloat(document.getElementById('final-settlement')?.value) || 0;

  if (!offer || !settlement || settlement <= offer) {
    document.getElementById('fee-preview').style.display = 'none';
    return;
  }

  const delta = settlement - offer;
  const fee = Math.round(delta * 0.12);
  const keep = settlement - fee;

  document.getElementById('fee-delta').textContent = '$' + delta.toLocaleString();
  document.getElementById('fee-amount').textContent = '$' + fee.toLocaleString();
  document.getElementById('fee-keep').textContent = '$' + keep.toLocaleString();
  document.getElementById('fee-preview').style.display = 'block';

  // Update modal recovery
  const modalRec = document.getElementById('modal-recovery');
  if (modalRec) modalRec.textContent = '+$' + delta.toLocaleString();
}

// Enable/disable submit button
function toggleSubmit() {
  const agreed = document.getElementById('agree-terms')?.checked;
  const btn = document.getElementById('stripe-btn');
  if (btn) btn.disabled = !agreed;
}

// Submit handler (Stripe Connect mock)
function handlePaymentSubmit() {
  const name = document.getElementById('final-name')?.value?.trim();
  const email = document.getElementById('final-email')?.value?.trim();

  if (!name || !email) {
    alert('Please enter your name and email to continue.');
    return;
  }

  // In production: initialize Stripe Connect onboarding here
  // stripe.redirectToCheckout({ ... }) or Stripe Connect setup

  // Show success modal
  document.getElementById('success-modal').style.display = 'flex';
}
