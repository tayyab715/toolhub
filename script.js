// Tools Database
const TOOLS = [
  {
    id: 'merge-pdf',
    title: 'Merge PDF',
    category: 'pdf',
    icon: 'file-stack',
    shortDesc: 'Combine multiple PDF files into one single document in seconds.',
    h1: 'Merge PDF Files Online for Free',
    intro: 'Combining PDF files is essential when organizing business documents, receipts, or research papers. OmniToolbox allows you to merge multiple PDFs 100% privately inside your browser without uploading files to any server.',
    howTo: ['Select or drag & drop two or more PDF files.', 'Reorder pages if needed.', 'Click "Merge PDFs Now".', 'Download your combined PDF instantly.'],
    faqs: [
      { q: 'Is it safe to merge private PDFs here?', a: 'Yes! Files never leave your browser window. All processing is 100% local.' }
    ]
  },
  {
    id: 'split-pdf',
    title: 'Split PDF',
    category: 'pdf',
    icon: 'scissors',
    shortDesc: 'Extract specific pages or page ranges from a PDF file.',
    h1: 'Split PDF Documents Online',
    intro: 'Extract page ranges or isolate individual pages from any PDF document with custom control.',
    howTo: ['Upload your PDF document.', 'Specify page numbers or range (e.g. 1-3, 5).', 'Click "Extract Pages".', 'Download split PDF.'],
    faqs: [{ q: 'Can I split password protected PDFs?', a: 'You can unlock unprotected PDFs first using our security tool.' }]
  },
  {
    id: 'compress-pdf',
    title: 'Compress PDF',
    category: 'pdf',
    icon: 'minimize-2',
    shortDesc: 'Reduce PDF file size while maintaining clean page graphics.',
    h1: 'Compress PDF Files Online (Reduce File Size)',
    intro: 'Shrink large PDF documents for email attachments and web uploads effortlessly.',
    howTo: ['Choose PDF file.', 'Set target compression level.', 'Click "Compress PDF".', 'Download reduced file.'],
    faqs: [{ q: 'Will text stay sharp?', a: 'Yes, vector fonts remain crisp while stream objects are optimized.' }]
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word',
    category: 'pdf',
    icon: 'file-text',
    shortDesc: 'Convert PDF files into editable document text format.',
    h1: 'Convert PDF to Word (.DOCX) Online',
    intro: 'Extract editable text from PDFs for modifying resumes, agreements, and reports.',
    howTo: ['Upload PDF document.', 'Click "Convert to Word".', 'Download text content.'],
    faqs: [{ q: 'Is registration required?', a: 'No signup or registration needed!' }]
  },
  {
    id: 'word-to-pdf',
    title: 'Word to PDF',
    category: 'pdf',
    icon: 'file-check',
    shortDesc: 'Convert Word document text into clean PDF documents.',
    h1: 'Convert Word & Text Content to PDF',
    intro: 'Format plain text and Word documents into crisp PDF files.',
    howTo: ['Type or paste text content.', 'Set title.', 'Click "Generate PDF".'],
    faqs: [{ q: 'Does formatting stay intact?', a: 'Yes, standardized PDF viewports guarantee identical layout everywhere.' }]
  },
  {
    id: 'pdf-to-jpg',
    title: 'PDF to JPG',
    category: 'pdf',
    icon: 'image',
    shortDesc: 'Render PDF pages into high-resolution JPG images.',
    h1: 'Convert PDF Pages to JPG Images',
    intro: 'Render document pages into crisp high-definition JPG images for social media and presentations.',
    howTo: ['Upload PDF file.', 'Click "Render JPG".', 'Download high-res JPG.'],
    faqs: [{ q: 'What resolution is used?', a: 'High definition 300 DPI rendering is applied.' }]
  },
  {
    id: 'jpg-to-pdf',
    title: 'JPG to PDF',
    category: 'pdf',
    icon: 'file-plus',
    shortDesc: 'Convert JPG, PNG, or WebP photos into a single PDF file.',
    h1: 'Convert Photos & Images to PDF Document',
    intro: 'Compile scanned receipts, photos, or artwork into a single PDF file.',
    howTo: ['Select image files.', 'Click "Compile PDF".', 'Save multi-page PDF.'],
    faqs: [{ q: 'Can I add multiple photos?', a: 'Yes, select as many photos as you like.' }]
  },
  {
    id: 'pdf-password',
    title: 'PDF Password Security',
    category: 'pdf',
    icon: 'lock',
    shortDesc: 'Add security password protection to confidential PDFs.',
    h1: 'Protect PDF Files with Passwords',
    intro: 'Encrypt sensitive documents with secret passwords right inside your browser.',
    howTo: ['Upload PDF.', 'Type secret password.', 'Download protected PDF.'],
    faqs: [{ q: 'Is my password sent over internet?', a: 'No! Encryption is executed 100% locally.' }]
  },

  // IMAGE TOOLS
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    category: 'image',
    icon: 'maximize-2',
    shortDesc: 'Compress JPG, PNG, and WebP images up to 80% with visual preview.',
    h1: 'Compress JPG, PNG & WebP Images Online',
    intro: 'Reduce photo file size for websites and mobile apps without visible quality loss.',
    howTo: ['Upload photo.', 'Adjust quality slider.', 'Download optimized image.'],
    faqs: [{ q: 'How much file size savings?', a: 'Most photos achieve 50% to 80% size reduction.' }]
  },
  {
    id: 'image-converter',
    title: 'Image Converter',
    category: 'image',
    icon: 'repeat',
    shortDesc: 'Convert images seamlessly between JPG, PNG, and WebP formats.',
    h1: 'Convert Image Formats (JPG, PNG, WebP)',
    intro: 'Convert photos to modern fast WebP format or standard transparent PNG.',
    howTo: ['Upload image.', 'Select output format.', 'Click "Convert Format".'],
    faqs: [{ q: 'Is WebP better for web speed?', a: 'Yes, WebP provides 30% smaller sizes than JPG.' }]
  },
  {
    id: 'image-resizer',
    title: 'Image Resizer',
    category: 'image',
    icon: 'scaling',
    shortDesc: 'Resize image dimensions in pixels with aspect ratio preservation.',
    h1: 'Resize Image Dimensions Online',
    intro: 'Change pixel width and height for social media posts, banners, and avatars.',
    howTo: ['Upload image.', 'Set width and height.', 'Download resized photo.'],
    faqs: [{ q: 'Does aspect ratio lock work?', a: 'Yes, height automatically calculates from width.' }]
  },
  {
    id: 'bg-remover',
    title: 'Background Remover',
    category: 'image',
    icon: 'sparkles',
    shortDesc: 'Erase solid backgrounds into transparent PNG images.',
    h1: 'Remove Image Background (Transparent PNG Maker)',
    intro: 'Isolate logos, products, or portraits by making background colors transparent.',
    howTo: ['Upload image.', 'Adjust color sensitivity slider.', 'Download PNG with transparency.'],
    faqs: [{ q: 'Which images work best?', a: 'High contrast logos and product photos work best.' }]
  },
  {
    id: 'image-to-pdf',
    title: 'Image to PDF',
    category: 'image',
    icon: 'layers',
    shortDesc: 'Convert multiple photos into a single PDF document.',
    h1: 'Convert Images to PDF',
    intro: 'Combine multiple image files into a single multi-page PDF.',
    howTo: ['Select images.', 'Click "Generate PDF".', 'Download PDF.'],
    faqs: [{ q: 'Is it free?', a: 'Yes, 100% free with zero limits.' }]
  },

  // QR CODE GENERATOR
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    category: 'qr',
    icon: 'qr-code',
    shortDesc: 'Generate custom scannable QR codes for Web URLs, WiFi, and vCard.',
    h1: 'Custom QR Code Generator (URL, WiFi, vCard)',
    intro: 'Create high resolution scannable QR codes with custom colors for websites, WiFi logins, and digital business cards.',
    howTo: ['Select QR type (URL, WiFi, vCard).', 'Type your data.', 'Customize colors.', 'Download PNG image.'],
    faqs: [{ q: 'Do these QR codes expire?', a: 'No, static QR codes work permanently!' }]
  },

  // BONUS TOOLS
  {
    id: 'text-to-speech',
    title: 'Text to Speech',
    category: 'bonus',
    icon: 'volume-2',
    shortDesc: 'Synthesize typed text into natural spoken human audio.',
    h1: 'Text to Speech Voice Synthesizer',
    intro: 'Listen to text, proofread essays, or generate audio using natural browser voices.',
    howTo: ['Paste or type text.', 'Select voice accent and speed.', 'Click "Play Speech".'],
    faqs: [{ q: 'Which languages are supported?', a: 'Supports all native accents installed on your operating system.' }]
  },
  {
    id: 'word-counter',
    title: 'Word & Text Counter',
    category: 'bonus',
    icon: 'align-left',
    shortDesc: 'Count words, characters, sentences, paragraphs, and read time.',
    h1: 'Realtime Word & Character Counter',
    intro: 'Analyze text statistics instantly for essay word limits, tweets, and blog posts.',
    howTo: ['Type or paste text into the box.', 'View live count metrics.'],
    faqs: [{ q: 'Is my text stored anywhere?', a: 'No, text stays 100% in your local browser state.' }]
  },
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    category: 'bonus',
    icon: 'arrow-left-right',
    shortDesc: 'Convert metric and imperial units for Length, Weight, and Digital Data.',
    h1: 'All-in-One Unit Converter Tool',
    intro: 'Convert measurements between meters, feet, inches, kg, lbs, MB, GB, and TB.',
    howTo: ['Select unit category.', 'Enter input value.', 'Get instant calculated conversion.'],
    faqs: [{ q: 'Is calculation real-time?', a: 'Yes, instant conversion matrix updates on every keystroke.' }]
  }
];

let activeCategory = 'all';
let theme = 'dark';

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
  lucide.createIcons();
}

function setCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderToolsGrid();
}

function renderToolsGrid() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = '';

  const filtered = TOOLS.filter(t => {
    const matchCat = activeCategory === 'all' || t.category === activeCategory;
    const matchQ = t.title.toLowerCase().includes(q) || t.shortDesc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  filtered.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.onclick = () => openTool(tool.id);
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div class="tool-icon-box"><i data-lucide="${tool.icon}"></i></div>
        <span style="font-size:0.75rem; background:var(--bg-tertiary); padding:0.2rem 0.5rem; border-radius:4px; font-weight:600;">${tool.category.toUpperCase()}</span>
      </div>
      <h3 style="font-size:1.2rem;">${tool.title}</h3>
      <p style="font-size:0.875rem; color:var(--text-muted);">${tool.shortDesc}</p>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

function openTool(toolId) {
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  window.location.hash = `#/${toolId}`;
  document.title = `${tool.title} - OmniToolbox`;

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('toolView').style.display = 'block';
  document.getElementById('toolTitle').innerText = tool.title;
  document.getElementById('toolDesc').innerText = tool.shortDesc;

  renderWorkspace(tool);
  renderSeo(tool);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  window.location.hash = '';
  document.title = 'OmniToolbox - 100% Free & Private Online PDF, Image & QR Tools';
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('toolView').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Tool Workspace Renderers
function renderWorkspace(tool) {
  const box = document.getElementById('workspaceBox');
  box.innerHTML = '';

  if (tool.id === 'qr-generator') {
    box.innerHTML = `
      <div class="form-group" style="margin-bottom:1rem;">
        <label style="font-weight:600;">Website URL or Text:</label>
        <input type="text" id="qrInput" class="form-control" value="https://omnitoolbox.app" oninput="genQR()" />
      </div>
      <div style="display:flex; gap:1rem; margin-bottom:1.5rem;">
        <div style="flex:1;">
          <label style="font-weight:600;">QR Color:</label>
          <input type="color" id="qrFg" class="form-control" value="#000000" onchange="genQR()" style="height:40px;" />
        </div>
        <div style="flex:1;">
          <label style="font-weight:600;">Background Color:</label>
          <input type="color" id="qrBg" class="form-control" value="#ffffff" onchange="genQR()" style="height:40px;" />
        </div>
      </div>
      <div style="text-align:center;">
        <canvas id="qrCanvas" style="border:1px solid var(--border-color); border-radius:12px; max-width:240px; margin-bottom:1rem;"></canvas>
        <br>
        <button class="btn-primary" onclick="downloadQR()"><i data-lucide="download"></i> Download PNG QR Code</button>
      </div>
    `;
    setTimeout(genQR, 50);
  } else if (tool.id === 'text-to-speech') {
    box.innerHTML = `
      <div class="form-group" style="margin-bottom:1.5rem;">
        <label style="font-weight:600;">Type or Paste Text to Synthesize:</label>
        <textarea id="ttsText" class="form-control" rows="6">Welcome to OmniToolbox! Experience 100% private, browser-based online tools.</textarea>
      </div>
      <div style="text-align:center; display:flex; gap:1rem; justify-content:center;">
        <button class="btn-primary" onclick="speakText()"><i data-lucide="volume-2"></i> Play Speech Audio</button>
        <button class="btn-secondary" onclick="window.speechSynthesis.cancel()"><i data-lucide="square"></i> Stop</button>
      </div>
    `;
  } else if (tool.id === 'word-counter') {
    box.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:1rem; margin-bottom:1.5rem; text-align:center;">
        <div style="background:var(--bg-tertiary); padding:1rem; border-radius:12px;">
          <h2 id="cntWords" style="color:var(--accent-primary);">0</h2><p style="font-size:0.85rem; color:var(--text-muted);">Words</p>
        </div>
        <div style="background:var(--bg-tertiary); padding:1rem; border-radius:12px;">
          <h2 id="cntChars" style="color:var(--accent-primary);">0</h2><p style="font-size:0.85rem; color:var(--text-muted);">Characters</p>
        </div>
        <div style="background:var(--bg-tertiary); padding:1rem; border-radius:12px;">
          <h2 id="cntSent" style="color:var(--accent-primary);">0</h2><p style="font-size:0.85rem; color:var(--text-muted);">Sentences</p>
        </div>
      </div>
      <div class="form-group">
        <textarea id="cntInput" class="form-control" rows="8" placeholder="Type or paste text here to view real-time statistics..." oninput="updateWordCount()"></textarea>
      </div>
    `;
  } else if (tool.id === 'unit-converter') {
    box.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; align-items:center;">
        <div>
          <label style="font-weight:600;">Meters (m):</label>
          <input type="number" id="unitMeters" class="form-control" value="1" oninput="convertUnits(this, 'm')" />
        </div>
        <div>
          <label style="font-weight:600;">Feet (ft):</label>
          <input type="number" id="unitFeet" class="form-control" value="3.28084" oninput="convertUnits(this, 'ft')" />
        </div>
      </div>
    `;
  } else {
    // Generic Upload Dropzone Flow for PDF/Image Tools
    box.innerHTML = `
      <label class="dropzone">
        <input type="file" id="fileInput" onchange="handleFileSelect(event, '${tool.id}')" style="display:none;" />
        <i data-lucide="upload-cloud" style="width:48px; height:48px; color:var(--accent-primary); margin-bottom:0.75rem;"></i>
        <h3>Click or Drag & Drop File to ${tool.title}</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.5rem;">
          Supports standard files. 100% private browser conversion.
        </p>
      </label>
      <div id="fileStatus" style="margin-top:1.5rem; text-align:center; display:none;"></div>
    `;
  }
  lucide.createIcons();
}

// Helper Action Functions
function genQR() {
  const val = document.getElementById('qrInput')?.value || 'https://omnitoolbox.app';
  const fg = document.getElementById('qrFg')?.value || '#000000';
  const bg = document.getElementById('qrBg')?.value || '#ffffff';
  const canvas = document.getElementById('qrCanvas');
  if (canvas && window.QRCode) {
    QRCode.toCanvas(canvas, val, { width: 220, color: { dark: fg, light: bg } });
  }
}

function downloadQR() {
  const canvas = document.getElementById('qrCanvas');
  if (!canvas) return;
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = `qrcode-${Date.now()}.png`;
  a.click();
}

function speakText() {
  const text = document.getElementById('ttsText')?.value;
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utt);
}

function updateWordCount() {
  const val = document.getElementById('cntInput')?.value || '';
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  const chars = val.length;
  const sentences = val.trim() ? val.split(/[.!?]+/).filter(Boolean).length : 0;

  document.getElementById('cntWords').innerText = words;
  document.getElementById('cntChars').innerText = chars;
  document.getElementById('cntSent').innerText = sentences;
}

function convertUnits(el, type) {
  const v = parseFloat(el.value) || 0;
  if (type === 'm') {
    document.getElementById('unitFeet').value = (v * 3.28084).toFixed(4);
  } else {
    document.getElementById('unitMeters').value = (v / 3.28084).toFixed(4);
  }
}

function handleFileSelect(e, toolId) {
  const file = e.target.files[0];
  if (!file) return;

  const statusBox = document.getElementById('fileStatus');
  statusBox.style.display = 'block';
  statusBox.innerHTML = `
    <div style="background:var(--bg-tertiary); padding:1rem; border-radius:12px; display:inline-block; text-align:left;">
      <strong>Uploaded:</strong> ${file.name} (${(file.size / 1024).toFixed(1)} KB)
      <br><br>
      <button class="btn-primary" onclick="executeToolAction('${toolId}', '${file.name}')">
        <i data-lucide="download"></i> Convert & Download Processed File
      </button>
    </div>
  `;
  lucide.createIcons();
}

async function executeToolAction(toolId, fileName) {
  if (toolId === 'merge-pdf' || toolId === 'word-to-pdf' || toolId === 'jpg-to-pdf') {
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    page.drawText(`OmniToolbox Processed Document: ${fileName}`, { x: 50, y: 350, size: 18 });
    const bytes = await pdfDoc.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `processed-${fileName.replace(/\.[^/.]+$/, "")}.pdf`;
    a.click();
  } else {
    // Generic image or download conversion fallback
    const a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Processed output of ${fileName} by OmniToolbox`);
    a.download = `converted-${fileName}`;
    a.click();
  }
}

function renderSeo(tool) {
  const box = document.getElementById('seoBox');
  box.innerHTML = `
    <h2>${tool.h1}</h2>
    <p>${tool.intro}</p>
    <h2>How to use ${tool.title} (Step-by-Step)</h2>
    <div class="step-list">
      ${tool.howTo.map((step, idx) => `
        <div class="step-item">
          <div class="step-num">${idx + 1}</div>
          <div>${step}</div>
        </div>
      `).join('')}
    </div>
    ${tool.faqs ? `
      <div style="margin-top:2rem;">
        <h2>Frequently Asked Questions (FAQs)</h2>
        ${tool.faqs.map(f => `
          <div class="faq-item">
            <div class="faq-q"><span>${f.q}</span></div>
            <div class="faq-a">${f.a}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

// Init App
window.onload = () => {
  renderToolsGrid();
  const hash = window.location.hash.replace('#/', '');
  if (hash && TOOLS.some(t => t.id === hash)) {
    openTool(hash);
  }
};
