// Office Data
let offices = [
  { key:'baraboo', name:'Baraboo', code:'MAXGRAN', team:'', address:'144 4th Ave, Suite 3, Baraboo, WI 53913', phone:'(O) 608-356-4100', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=144+4th+Ave+Suite+3+Baraboo+WI+53913', lat:43.4711, lng:-89.7443 },
  { key:'wisdells', name:'Wisconsin Dells', code:'REMX14', team:'Waterman Group', address:'1010 Wisconsin Dells Pkwy, Suite 11, Wisconsin Dells, WI 53965', phone:'(O) 608-408-6948', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=1010+Wisconsin+Dells+Pkwy+Wisconsin+Dells+WI', lat:43.6247, lng:-89.7829 },
  { key:'lavalle', name:'La Valle', code:'REMX18', team:'Julie Sells Team!', address:'100 E. Main St, P.O. Box 56, La Valle, WI 53941', phone:'(O) 608-985-8484\n(F) 678-562-1394', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=100+E+Main+St+La+Valle+WI+53941', lat:43.5858, lng:-90.1345 },
  { key:'reedsburg', name:'Reedsburg', code:'MAXGRAN3', team:'', address:'335 E. Main St, Reedsburg, WI 53959', phone:'(O) 608-786-4100', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=335+E+Main+St+Reedsburg+WI+53959', lat:43.5325, lng:-90.0026 },
  { key:'richland', name:'Richland Center', code:'REMX30', team:'Driftless Acres Team', address:'194 N Main St Suite 2, Richland Center, WI 53581', phone:'(608) 514-7053', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=194+N+Main+St+Richland+Center+WI+53581', lat:43.3344, lng:-90.3868 },
  { key:'poynette', name:'Poynette', code:'REMX21', team:'Hometown Lake WI Group', address:'N3485 County Rd V, Poynette, WI 53955', phone:'(O) 608-635-4610', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=N3485+County+Rd+V+Poynette+WI+53955', lat:43.3897, lng:-89.4019 },
  { key:'saukcity', name:'Sauk City', code:'MAXGRAN2', team:'', address:'708 Water St, Sauk City, WI 53583', phone:'(O) 608-460-7030', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=708+Water+St+Sauk+City+WI+53583', lat:43.2700, lng:-89.7200 },
  { key:'waunakee', name:'Waunakee', code:'REMX02', team:'', address:'102 N. Holiday Dr, Waunakee, WI 53597', phone:'(O) 608-849-4663\n1-800-360-5731', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=102+N+Holiday+Dr+Waunakee+WI+53597', lat:43.1919, lng:-89.4556 },
  { key:'sunprairie', name:'Sun Prairie', code:'REMX17', team:'', address:'1500 W. Main St, Sun Prairie, WI 53590', phone:'(O) 608-837-6800', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=1500+W+Main+St+Sun+Prairie+WI+53590', lat:43.1836, lng:-89.2137 },
  { key:'monona', name:'Monona', code:'REMX13', team:'', address:'5320 Monona Dr, Monona, WI 53716', phone:'(O) 608-276-8110\n1-800-236-4411', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=5320+Monona+Dr+Monona+WI+53716', lat:43.0553, lng:-89.3375 },
  { key:'mineralpoint', name:'Mineral Point', code:'REMX29', team:'True Action Realty Team', address:'229 High St, Mineral Point, WI 53565', phone:'(O) 608-574-9145', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=229+High+St+Mineral+Point+WI+53565', lat:42.8603, lng:-90.1798 },
  { key:'oregon', name:'Oregon', code:'REMX06', team:'', address:'126 Braun Rd, Oregon, WI 53575', phone:'(O) 608-835-9989', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=126+Braun+Rd+Oregon+WI+53575', lat:42.9261, lng:-89.3845 },
  { key:'johnsoncreek', name:'Johnson Creek', code:'REMX26', team:'', address:'545 Village Walk Ln, Suite B, P.O. Box 298, Johnson Creek, WI 53038', phone:'(O) 920-699-9210', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', mapUrl:'https://maps.google.com/?q=545+Village+Walk+Ln+Johnson+Creek+WI+53038', lat:43.0767, lng:-88.7741 },
];

const STORAGE_KEY = 'remaxDirectoryOfficesV2';
const defaultFooter = {
  contacts: [
    { name:'Tim Krueger', phone:'608-206-5850', email:'Tim@kreexperts.com' },
    { name:'Dan Bertelson', phone:'608-212-1407', email:'Dan@greatmadisonrealty.com' },
    { name:'Nanci Jenks', phone:'608-393-3330', email:'Nancijanks@gmail.com' },
    { name:'Raegen Trimmer', phone:'608-393-7254', email:'Raegen@preferredsuccess.com' },
  ],
  links: [
    { label:'Accounting', value:'accounting@remaxwisconsin.com', href:'mailto:accounting@remaxwisconsin.com' },
    { label:'Tech / Support', value:'services@remaxwisconsin.com', href:'mailto:services@remaxwisconsin.com' },
    { label:'Marketing', value:'Marketing@preferredsuccess.com', href:'mailto:Marketing@preferredsuccess.com' },
    { label:'Showing Time', value:'608-277-2777 - 1-866-877-0775', href:'' },
    { label:'Brokerage License', value:'937003-91', href:'' },
  ]
};
let footer = JSON.parse(JSON.stringify(defaultFooter));
let logoTapTimer = null;

try {
  const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  if (Array.isArray(savedState) && savedState.length) {
    offices = savedState;
  } else if (savedState && typeof savedState === 'object') {
    if (Array.isArray(savedState.offices) && savedState.offices.length) offices = savedState.offices;
    if (savedState.footer) footer = savedState.footer;
  }
} catch (error) {
  console.warn('Could not load saved directory edits.', error);
}

function getState() {
  return { offices, footer };
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getState()));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function safeMapUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch {
    return '#';
  }
}

function safeHref(value) {
  try {
    const url = new URL(value, window.location.href);
    return ['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol) ? url.href : '#';
  } catch {
    return '#';
  }
}

// Leaflet Map
let leafletMap, markers = {};

function initMap() {
  leafletMap = L.map('map', {
    center: [43.25, -89.65],
    zoom: 9,
    zoomControl: true,
    scrollWheelZoom: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    maxZoom: 18
  }).addTo(leafletMap);

  const balloonIcon = L.icon({
    className: 'balloon-marker',
    iconUrl: 'New_RMX_Balloon.png',
    iconSize: [32, 36],
    iconAnchor: [16, 36],
    popupAnchor: [0, -36]
  });

  offices.forEach(o => {
    const marker = L.marker([o.lat, o.lng], { icon: balloonIcon })
      .addTo(leafletMap)
      .on('click', () => showOffice(o.key));
    markers[o.key] = marker;
  });

  // Fix map sizing issues on load
  setTimeout(() => leafletMap.invalidateSize(), 200);
}

// Sidebar
let sidebarOpen = false;
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('open', sidebarOpen);
  document.getElementById('seeAllBtn').textContent = sidebarOpen ? 'Hide Panel' : 'See All Offices';
  setTimeout(() => leafletMap?.invalidateSize(), 320);
}

function renderSidebar() {
  const list = document.getElementById('officeList');
  list.innerHTML = '';
  offices.forEach(o => {
    const card = document.createElement('div');
    card.className = 'office-card';
    card.id = `card-${o.key}`;
    card.innerHTML = `
      <div class="office-card-name">${escapeHtml(o.name)}</div>
      <div class="office-card-code">${escapeHtml(o.code)}${o.team ? ' - ' + escapeHtml(o.team) : ''}</div>
      <div class="office-card-address">${escapeHtml(o.address)}</div>
      <div class="office-card-phone">${escapeHtml(o.phone.split('\n')[0])}</div>
    `;
    card.onclick = () => showOffice(o.key);
    list.appendChild(card);
  });
}

function renderFooter() {
  const contactsBar = document.getElementById('contactsBar');
  const bottomBar = document.getElementById('bottomBar');
  contactsBar.innerHTML = footer.contacts.map(contact => `
    <div class="contact-item">
      <span class="contact-name">${escapeHtml(contact.name)}</span>
      <span class="contact-phone">${escapeHtml(contact.phone)}</span>
      <span class="contact-email"><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></span>
    </div>
  `).join('');
  bottomBar.innerHTML = footer.links.map(item => `
    <div class="bottom-bar-item">
      <span class="bottom-bar-label">${escapeHtml(item.label)}</span>
      ${item.href ? `<a href="${safeHref(item.href)}">${escapeHtml(item.value)}</a>` : `<span>${escapeHtml(item.value)}</span>`}
    </div>
  `).join('');
}

// Show Office Popup
function showOffice(key) {
  const o = offices.find(x => x.key === key);
  if (!o) return;

  // Highlight card + marker
  document.querySelectorAll('.office-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.balloon-marker').forEach(m => m.classList.remove('active'));
  document.getElementById(`card-${key}`)?.classList.add('active');
  document.getElementById(`card-${key}`)?.scrollIntoView({ behavior:'smooth', block:'nearest' });

  // Pan map to office
  if (leafletMap && markers[key]) {
    leafletMap.flyTo([o.lat, o.lng], 12, { duration: 0.8 });
    markers[key].getElement()?.classList.add('active');
  }

  document.getElementById('popupTitle').textContent = o.name.toUpperCase();
  document.getElementById('popupCode').textContent = o.code;
  document.getElementById('popupTeam').textContent = o.team || '';

  let body = `<div class="info-section">
    <div class="info-section-title">Contact & Location</div>
    <div class="info-row"><span class="info-icon">Map</span><span>${escapeHtml(o.address)}</span></div>
    ${o.phone.split('\n').map(p => `<div class="info-row"><span class="info-icon">Tel</span><span>${escapeHtml(p)}</span></div>`).join('')}
    <a class="map-link-btn" href="${safeMapUrl(o.mapUrl)}" target="_blank" rel="noopener">Open in Google Maps</a>
  </div>`;

  if (o.wireless || o.door || o.staff || o.access || o.combo || o.guest) {
    body += `<div class="info-section"><div class="info-section-title">Access & Credentials</div><div class="tag-grid">`;
    if (o.wireless) body += `<div class="tag-item"><div class="tag-label">WiFi</div><div class="tag-value">${escapeHtml(o.wireless)}</div></div>`;
    if (o.access) body += `<div class="tag-item"><div class="tag-label">Office Access</div><div class="tag-value">${escapeHtml(o.access)}</div></div>`;
    if (o.combo) body += `<div class="tag-item"><div class="tag-label">Combo</div><div class="tag-value">${escapeHtml(o.combo)}</div></div>`;
    if (o.door) body += `<div class="tag-item"><div class="tag-label">Door Code</div><div class="tag-value">${escapeHtml(o.door)}</div></div>`;
    if (o.staff) body += `<div class="tag-item"><div class="tag-label">Staff Code</div><div class="tag-value">${escapeHtml(o.staff)}</div></div>`;
    if (o.guest) body += `<div class="tag-item"><div class="tag-label">Guest Acct</div><div class="tag-value">${escapeHtml(o.guest)}</div></div>`;
    body += `</div></div>`;
  }

  document.getElementById('popupBody').innerHTML = body;
  document.getElementById('popupOverlay').classList.add('show');
}

function closePopup(e) { if (e.target === document.getElementById('popupOverlay')) closePopupDirect(); }
function closePopupDirect() {
  document.getElementById('popupOverlay').classList.remove('show');
  document.querySelectorAll('.office-card').forEach(c => c.classList.remove('active'));
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopupDirect(); });

// Edit Mode
function triggerEditMode() {
  if (document.getElementById('pwOverlay').classList.contains('show')) return;
  if (document.getElementById('editBadge').classList.contains('show')) return;
  document.getElementById('pwOverlay').classList.add('show');
  setTimeout(() => document.getElementById('pwInput').focus(), 100);
}
function bindLogoDoubleTap() {
  const logo = document.getElementById('remaxLogo');
  logo.addEventListener('click', event => {
    if (!event.pointerType && event.detail >= 2) return;
    if (logoTapTimer) {
      clearTimeout(logoTapTimer);
      logoTapTimer = null;
      triggerEditMode();
      return;
    }
    logoTapTimer = setTimeout(() => {
      logoTapTimer = null;
    }, 360);
  });
}
function checkPassword() {
  if (document.getElementById('pwInput').value === 'rpadmin') {
    alert('Heads up: this is a convenience lock only. On a public static site, the password and directory data are visible in the page source.');
    closePwModal(); enableEditMode();
  } else {
    document.getElementById('pwError').style.display = 'block';
    document.getElementById('pwInput').value = '';
  }
}
function closePwModal() {
  document.getElementById('pwOverlay').classList.remove('show');
  document.getElementById('pwInput').value = '';
  document.getElementById('pwError').style.display = 'none';
}
function enableEditMode() {
  document.getElementById('editBadge').classList.add('show');
  document.getElementById('editActions').classList.add('show');
  if (!sidebarOpen) toggleSidebar();
  showOfficeEditorInSidebar();
}
function cancelEditMode() {
  document.getElementById('editBadge').classList.remove('show');
  document.getElementById('editActions').classList.remove('show');
  if (sidebarOpen) toggleSidebar();
  renderSidebar();
}
function showOfficeEditorInSidebar() {
  document.getElementById('officeList').innerHTML = `<div style="padding:6px 4px">
    <p style="font-size:0.68rem;color:#888;margin-bottom:10px;line-height:1.5">Select an office to edit. Changes save in this browser and can be exported for republishing.</p>
    <div class="office-card edit-section-card" onclick="openFooterEditForm()">
      <div class="office-card-name">Bottom Strip Details</div>
      <div class="office-card-code">Contacts, emails, phone numbers, labels</div>
      <div style="font-size:0.68rem;color:#e31837;font-weight:700;margin-top:3px">Edit</div>
    </div>
    ${offices.map(o => `
      <div class="office-card" onclick="openOfficeEditForm('${o.key}')" id="card-${o.key}">
        <div class="office-card-name">${escapeHtml(o.name)}</div>
        <div class="office-card-code">${escapeHtml(o.code)}</div>
        <div style="font-size:0.68rem;color:#e31837;font-weight:700;margin-top:3px">Edit</div>
      </div>
    `).join('')}
  </div>`;
}
function openFooterEditForm() {
  const contactFields = footer.contacts.map((contact, index) => `
    <div class="edit-group-title">Contact ${index + 1}</div>
    <div class="edit-field-label">Name</div>
    <textarea id="footer-contact-${index}-name" class="edit-field-input">${escapeHtml(contact.name)}</textarea>
    <div class="edit-field-label">Phone</div>
    <textarea id="footer-contact-${index}-phone" class="edit-field-input">${escapeHtml(contact.phone)}</textarea>
    <div class="edit-field-label">Email</div>
    <textarea id="footer-contact-${index}-email" class="edit-field-input">${escapeHtml(contact.email)}</textarea>
  `).join('');
  const linkFields = footer.links.map((item, index) => `
    <div class="edit-group-title">Bottom Item ${index + 1}</div>
    <div class="edit-field-label">Label</div>
    <textarea id="footer-link-${index}-label" class="edit-field-input">${escapeHtml(item.label)}</textarea>
    <div class="edit-field-label">Display Text</div>
    <textarea id="footer-link-${index}-value" class="edit-field-input">${escapeHtml(item.value)}</textarea>
    <div class="edit-field-label">Link / Mailto / Tel (optional)</div>
    <textarea id="footer-link-${index}-href" class="edit-field-input">${escapeHtml(item.href)}</textarea>
  `).join('');
  document.getElementById('officeList').innerHTML = `<div style="padding:6px 4px">
    <button class="btn-secondary" style="margin-bottom:11px" onclick="showOfficeEditorInSidebar()">Back</button>
    <div style="font-size:0.9rem;font-weight:800;color:#003087;margin-bottom:11px">Bottom Strip Details</div>
    ${contactFields}
    ${linkFields}
    <button class="btn-primary" onclick="applyFooterEdits()">Apply Changes</button>
    <button class="btn-secondary" style="margin-top:5px" onclick="showOfficeEditorInSidebar()">Cancel</button>
  </div>`;
}
function applyFooterEdits() {
  footer.contacts = footer.contacts.map((contact, index) => ({
    name: document.getElementById(`footer-contact-${index}-name`)?.value ?? contact.name,
    phone: document.getElementById(`footer-contact-${index}-phone`)?.value ?? contact.phone,
    email: document.getElementById(`footer-contact-${index}-email`)?.value ?? contact.email,
  }));
  footer.links = footer.links.map((item, index) => ({
    label: document.getElementById(`footer-link-${index}-label`)?.value ?? item.label,
    value: document.getElementById(`footer-link-${index}-value`)?.value ?? item.value,
    href: document.getElementById(`footer-link-${index}-href`)?.value ?? item.href,
  }));
  persistState();
  renderFooter();
  showOfficeEditorInSidebar();
  alert('Bottom strip details updated!');
}
function openOfficeEditForm(key) {
  const o = offices.find(x => x.key === key);
  const fields = [
    {label:'Name',f:'name'},{label:'Code',f:'code'},{label:'Team',f:'team'},
    {label:'Address',f:'address'},{label:'Phone',f:'phone'},{label:'WiFi / Pass',f:'wireless'},
    {label:'Office Access',f:'access'},{label:'Combo',f:'combo'},{label:'Door Code',f:'door'},
    {label:'Staff Code',f:'staff'},{label:'Guest Acct',f:'guest'},{label:'Maps URL',f:'mapUrl'},
    {label:'Latitude',f:'lat'},{label:'Longitude',f:'lng'},
  ];
  document.getElementById('officeList').innerHTML = `<div style="padding:6px 4px">
    <button class="btn-secondary" style="margin-bottom:11px" onclick="showOfficeEditorInSidebar()">Back</button>
    <div style="font-size:0.9rem;font-weight:800;color:#003087;margin-bottom:11px">${escapeHtml(o.name)}</div>
    ${fields.map(({label, f}) => `
      <div class="edit-field-label">${label}</div>
      <textarea id="ef-${key}-${f}" class="edit-field-input">${escapeHtml(o[f] || '')}</textarea>
    `).join('')}
    <button class="btn-primary" onclick="applyOfficeEdits('${key}')">Apply Changes</button>
    <button class="btn-secondary" style="margin-top:5px" onclick="showOfficeEditorInSidebar()">Cancel</button>
  </div>`;
}
function applyOfficeEdits(key) {
  const o = offices.find(x => x.key === key);
  ['name','code','team','address','phone','wireless','access','combo','door','staff','guest','mapUrl','lat','lng'].forEach(f => {
    const el = document.getElementById(`ef-${key}-${f}`);
    if (el) {
      const val = el.value;
      o[f] = (f === 'lat' || f === 'lng') ? parseFloat(val) || o[f] : val;
    }
  });
  // Update marker position
  if (markers[key]) {
    markers[key].setLatLng([o.lat, o.lng]);
  }
  persistState();
  renderSidebar();
  showOfficeEditorInSidebar();
  alert(`${o.name} updated!`);
}
function saveEdits() {
  persistState();
  const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'remax_directory_updated.json'; a.click();
  URL.revokeObjectURL(url);
  cancelEditMode();
  alert('Saved in this browser and downloaded JSON for republishing.');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderFooter();
  initMap();
  bindLogoDoubleTap();
  if ('ResizeObserver' in window) {
    const mapArea = document.querySelector('.map-area');
    const observer = new ResizeObserver(() => leafletMap?.invalidateSize());
    observer.observe(mapArea);
  }
  window.addEventListener('orientationchange', () => {
    setTimeout(() => leafletMap?.invalidateSize(), 350);
  });
});

