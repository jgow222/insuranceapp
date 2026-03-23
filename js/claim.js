/* =============================================
   ClaimMax — Claim Flow JS
   ============================================= */

let currentStep = 1;
const totalSteps = 4;

// ── Step navigation ───────────────────────────
function goToStep(step) {
  if (step < 1 || step > totalSteps) return;

  // Hide current panel
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`panel-${step}`).classList.add('active');

  // Update step indicators
  document.querySelectorAll('.step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (n === step) s.classList.add('active');
    if (n < step) s.classList.add('done');
  });

  // Update connectors
  for (let i = 1; i < totalSteps; i++) {
    const conn = document.getElementById(`conn-${i}-${i+1}`);
    if (conn) conn.classList.toggle('done', i < step);
  }

  currentStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Step-specific setup
  if (step === 3) startAnalysis();
  if (step === 4) setupLetter();
}

// ── Policy upload ─────────────────────────────
const policyZone = document.getElementById('policy-upload-zone');
const policyInput = document.getElementById('policy-file');
const policyPreview = document.getElementById('policy-preview');
const policyFilename = document.getElementById('policy-filename');

if (policyZone) {
  policyZone.addEventListener('click', () => policyInput.click());
  policyZone.addEventListener('keydown', e => e.key === 'Enter' && policyInput.click());
  policyZone.addEventListener('dragover', e => { e.preventDefault(); policyZone.classList.add('dragover'); });
  policyZone.addEventListener('dragleave', () => policyZone.classList.remove('dragover'));
  policyZone.addEventListener('drop', e => {
    e.preventDefault();
    policyZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file) handlePolicyFile(file);
  });
  policyInput.addEventListener('change', () => {
    if (policyInput.files[0]) handlePolicyFile(policyInput.files[0]);
  });
}

function handlePolicyFile(file) {
  policyFilename.textContent = file.name;
  policyPreview.style.display = 'flex';
  policyZone.style.display = 'none';
}

// ── Photo uploads ─────────────────────────────
const photoZone = document.getElementById('photo-upload-zone');
const photoInput = document.getElementById('photo-files');
const photoGrid = document.getElementById('photo-grid');

if (photoZone) {
  photoZone.addEventListener('click', () => photoInput.click());
  photoZone.addEventListener('keydown', e => e.key === 'Enter' && photoInput.click());
  photoZone.addEventListener('dragover', e => { e.preventDefault(); photoZone.classList.add('dragover'); });
  photoZone.addEventListener('dragleave', () => photoZone.classList.remove('dragover'));
  photoZone.addEventListener('drop', e => {
    e.preventDefault();
    photoZone.classList.remove('dragover');
    addPhotos(Array.from(e.dataTransfer.files));
  });
  photoInput.addEventListener('change', () => addPhotos(Array.from(photoInput.files)));
}

function addPhotos(files) {
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      const thumb = document.createElement('div');
      thumb.className = 'photo-thumb';
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name;
      thumb.appendChild(img);
      photoGrid.appendChild(thumb);
    };
    reader.readAsDataURL(file);
  });
}

// ── Checklist ─────────────────────────────────
function updateChecklist() {
  const checks = document.querySelectorAll('.checklist-check');
  const done = Array.from(checks).filter(c => c.checked).length;
  const scoreEl = document.getElementById('checklist-score');
  const warningEl = document.getElementById('evidence-warning');
  if (scoreEl) scoreEl.textContent = `${done} / ${checks.length}`;
  if (warningEl) warningEl.style.display = done >= 3 ? 'none' : 'flex';
  // badge color
  if (scoreEl) {
    scoreEl.className = done >= 3 ? 'badge badge-green' : 'badge badge-neutral';
  }
}

// ── Analysis ──────────────────────────────────
const analysisSteps = [
  'Reading policy terms…',
  'Extracting coverage limits and endorsements…',
  'Comparing with comparable settlements…',
  'Analyzing market repair costs…',
  'Scoring your claim…'
];

function startAnalysis() {
  const analyzing = document.getElementById('score-analyzing');
  const result = document.getElementById('score-result');
  const bar = document.getElementById('analysis-progress');
  const label = document.getElementById('progress-label');

  if (!analyzing) return;

  analyzing.style.display = 'block';
  result.style.display = 'none';

  let pct = 0;
  let stepIdx = 0;

  const interval = setInterval(() => {
    pct += Math.random() * 18 + 8;
    if (pct > 100) pct = 100;
    bar.style.width = pct + '%';

    const idx = Math.floor((pct / 100) * analysisSteps.length);
    if (idx !== stepIdx && idx < analysisSteps.length) {
      stepIdx = idx;
      label.textContent = analysisSteps[stepIdx];
    }

    if (pct >= 100) {
      clearInterval(interval);
      setTimeout(showScore, 400);
    }
  }, 280);
}

function showScore() {
  const analyzing = document.getElementById('score-analyzing');
  const result = document.getElementById('score-result');
  if (!analyzing || !result) return;

  analyzing.style.display = 'none';
  result.style.display = 'block';

  // Populate values
  const offer = parseFloat(document.getElementById('insurer-offer')?.value) || 4200;
  const repair = parseFloat(document.getElementById('repair-estimate')?.value) || offer * 1.93;
  const delta = Math.round(repair - offer);

  document.getElementById('bd-offer').textContent = '$' + offer.toLocaleString();
  document.getElementById('bd-entitlement').textContent = '$' + Math.round(repair).toLocaleString();
  document.getElementById('bd-delta').textContent = '+$' + delta.toLocaleString();

  // Score 0–100
  const score = Math.min(Math.round((delta / offer) * 100 * 1.8), 94);
  animateScore(score);
}

function animateScore(score) {
  const arc = document.getElementById('score-arc');
  const val = document.getElementById('score-value');
  if (!arc || !val) return;

  const circumference = 364.4;
  const offset = circumference - (score / 100) * circumference;

  requestAnimationFrame(() => {
    arc.style.strokeDashoffset = offset;
    // Animate counter
    let current = 0;
    const step = Math.ceil(score / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, score);
      val.textContent = current;
      if (current >= score) clearInterval(timer);
    }, 30);
  });
}

// ── Letter setup ──────────────────────────────
function setupLetter() {
  const offer = parseFloat(document.getElementById('insurer-offer')?.value) || 4200;
  const repair = parseFloat(document.getElementById('repair-estimate')?.value) || offer * 1.93;
  const delta = Math.round(repair - offer);

  const offerEl = document.getElementById('letter-offer');
  const totalEl = document.getElementById('letter-total');
  const deltaEl = document.getElementById('letter-delta');
  if (offerEl) offerEl.textContent = '$' + offer.toLocaleString();
  if (totalEl) totalEl.textContent = '$' + Math.round(repair).toLocaleString();
  if (deltaEl) deltaEl.textContent = '$' + delta.toLocaleString();

  // Dates
  const now = new Date();
  const due = new Date(now);
  due.setDate(due.getDate() + 30);

  const dateEl = document.getElementById('letter-date');
  const sentEl = document.getElementById('deadline-sent');
  const dueEl = document.getElementById('deadline-due');
  const remEl = document.getElementById('deadline-remaining');

  const fmt = d => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  if (dateEl) dateEl.textContent = fmt(now);
  if (sentEl) sentEl.textContent = fmt(now);
  if (dueEl) dueEl.textContent = fmt(due);
  if (remEl) remEl.textContent = '30 days';
}
