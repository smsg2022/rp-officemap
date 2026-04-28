// Office Data
let offices = [
  { key:'baraboo', name:'Baraboo', code:'MAXGRAN', team:'', staffAvailable:true, address:'144 4th Ave, Suite 3, Baraboo, WI 53913', phone:'(O) 608-356-4100', wireless:'CaflischRealEstate\n5g: RE/MAX 5\nGuest Pass: 4100', access:'Supra', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1TaWW_fElPzHbMWOCtxFlJmeFRs0q8ycX&sz=w400', mapUrl:'https://maps.google.com/?q=144+4th+Ave+Suite+3+Baraboo+WI+53913', lat:43.4711, lng:-89.7443 },
  { key:'wisdells', name:'Wisconsin Dells', code:'REMX14', team:'Waterman Group', address:'1010 Wisconsin Dells Pkwy, Suite 11, Wisconsin Dells, WI 53965', phone:'(O) 608-408-6948', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1JSpVfoiFXkpfUYGNbUGqnydBEcLBBTm6&sz=w400', mapUrl:'https://maps.google.com/?q=1010+Wisconsin+Dells+Pkwy+Wisconsin+Dells+WI', lat:43.6247, lng:-89.7829 },
  { key:'lavalle', name:'La Valle', code:'REMX18', team:'Julie Sells Team!', address:'100 E. Main St, P.O. Box 56, La Valle, WI 53941', phone:'(O) 608-985-8484\n(F) 678-562-1394', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1pQtm9VDZZ5flyYxALq8FWvsl5P7R2Tm5&sz=w400', mapUrl:'https://maps.google.com/?q=100+E+Main+St+La+Valle+WI+53941', lat:43.5858, lng:-90.1345 },
  { key:'reedsburg', name:'Reedsburg', code:'MAXGRAN3', team:'', address:'335 E. Main St, Reedsburg, WI 53959', phone:'(O) 608-786-4100', wireless:'ReedsburgRealEstate\nPass: 4100', access:'Supra', combo:'', door:'', staff:'', guest:'beourguest', photo:'https://drive.google.com/thumbnail?id=1soOSJ2M53sinbZyZJ88-0YnD6NjSrB8j&sz=w400', mapUrl:'https://maps.google.com/?q=335+E+Main+St+Reedsburg+WI+53959', lat:43.5325, lng:-90.0026 },
  { key:'richland', name:'Richland Center', code:'REMX30', team:'Driftless Acres Team', address:'194 N Main St Suite 2, Richland Center, WI 53581', phone:'(608) 514-7053', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', photo:'', mapUrl:'https://maps.google.com/?q=194+N+Main+St+Richland+Center+WI+53581', lat:43.3344, lng:-90.3868 },
  { key:'poynette', name:'Poynette', code:'REMX21', team:'Hometown Lake WI Group', address:'N3485 County Rd V, Poynette, WI 53955', phone:'(O) 608-635-4610', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1w43hgCsF212weLzCrIYPd_86MJ8hloY1&sz=w400', mapUrl:'https://maps.google.com/?q=N3485+County+Rd+V+Poynette+WI+53955', lat:43.3897, lng:-89.4019 },
  { key:'saukcity', name:'Sauk City', code:'MAXGRAN2', team:'', staffAvailable:true, address:'708 Water St, Sauk City, WI 53583', phone:'(O) 608-460-7030', wireless:'perfectnest335', access:'Supra', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1alPNhDmqQvgXd7P1fOdkw3ST7OVM5bXM&sz=w400', mapUrl:'https://maps.google.com/?q=708+Water+St+Sauk+City+WI+53583', lat:43.2700, lng:-89.7200 },
  { key:'waunakee', name:'Waunakee', code:'REMX02', team:'', address:'102 N. Holiday Dr, Waunakee, WI 53597', phone:'(O) 608-849-4663\n1-800-360-5731', wireless:'Matrix-Waunakee\nPass: remaxone1', access:'', combo:'4364', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1sPnqVQKFwoS5lVBLc-llr6yIy8FRVaF1&sz=w400', mapUrl:'https://maps.google.com/?q=102+N+Holiday+Dr+Waunakee+WI+53597', lat:43.1919, lng:-89.4556 },
  { key:'sunprairie', name:'Sun Prairie', code:'REMX17', team:'', address:'1500 W. Main St, Sun Prairie, WI 53590', phone:'(O) 608-837-6800', wireless:'remaxsp\nPass: Remaxone1', access:'', combo:'4364', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1Kh_y7vZm8wD3wAtL1hZFkeQgUnlFfmJt&sz=w400', mapUrl:'https://maps.google.com/?q=1500+W+Main+St+Sun+Prairie+WI+53590', lat:43.1836, lng:-89.2137 },
  { key:'monona', name:'Monona', code:'REMX13', team:'', staffAvailable:true, address:'5320 Monona Dr, Monona, WI 53716', phone:'(O) 608-276-8110\n1-800-236-4411', wireless:'Remax Monona\nPass: remaxone1', access:'', combo:'', door:'6284', staff:'1739', guest:'', photo:'https://drive.google.com/thumbnail?id=1zcKPkLJ5Ql9l5eNHQ1snwaoTVvJIy7Tg&sz=w400', mapUrl:'https://maps.google.com/?q=5320+Monona+Dr+Monona+WI+53716', lat:43.0553, lng:-89.3375 },
  { key:'mineralpoint', name:'Mineral Point', code:'REMX29', team:'True Action Realty Team', address:'229 High St, Mineral Point, WI 53565', phone:'(O) 608-574-9145', wireless:'', access:'', combo:'', door:'', staff:'', guest:'', photo:'https://drive.google.com/thumbnail?id=1tkQEIs6tJH_12PYc7WxQ_k-6fvI9IhKN&sz=w400', mapUrl:'https://maps.google.com/?q=229+High+St+Mineral+Point+WI+53565', lat:42.8603, lng:-90.1798 },
  { key:'oregon', name:'Oregon', code:'REMX06', team:'', address:'126 Braun Rd, Oregon, WI 53575', phone:'(O) 608-835-9989', wireless:'931D REMAX MESH\nPass: remaxone1', access:'Assa', combo:'', door:'', staff:'', guest:'remaxguest1', photo:'https://drive.google.com/thumbnail?id=1WA_g6E0qUZ_11L5CpCQPq-W5MpNJ2HOY&sz=w400', mapUrl:'https://maps.google.com/?q=126+Braun+Rd+Oregon+WI+53575', lat:42.9261, lng:-89.3845 },
  { key:'johnsoncreek', name:'Johnson Creek', code:'REMX26', team:'', address:'545 Village Walk Ln, Suite B, P.O. Box 298, Johnson Creek, WI 53038', phone:'(O) 920-699-9210', wireless:'remax\nPass: remaxone1', access:'', combo:'1356 / 1984', door:'', staff:'', guest:'', photo:'', mapUrl:'https://maps.google.com/?q=545+Village+Walk+Ln+Johnson+Creek+WI+53038', lat:43.0767, lng:-88.7741 },
];

const STORAGE_KEY = 'remaxDirectoryOfficesV3';
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
let adminPassword = '';

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

function applyState(state) {
  if (!state || typeof state !== 'object') return false;
  if (Array.isArray(state.offices) && state.offices.length) offices = state.offices;
  if (state.footer && Array.isArray(state.footer.contacts) && Array.isArray(state.footer.links)) {
    footer = state.footer;
  }
  return true;
}

async function loadSharedState() {
  try {
    const response = await fetch('/api/directory', { cache: 'no-store' });
    if (!response.ok) return;
    const state = await response.json();
    if (!applyState(state)) return;
    persistState();
    renderSidebar();
    renderFooter();
    syncMarkers();
    updateOfficeCount();
  } catch (error) {
    console.info('Using bundled/local directory data.', error);
  }
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

// ─── Hover Preview Card ────────────────────────────────────────────────────────
let hoverCardEl = null;

function getOrCreateHoverCard() {
  if (!hoverCardEl) {
    hoverCardEl = document.createElement('div');
    hoverCardEl.className = 'map-hover-card';
    hoverCardEl.innerHTML = `
      <div class="mhc-top">
        <div class="mhc-brand">
          <span class="mhc-chevrons">&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;</span>
          <span class="mhc-remax">RE/MAX</span>
          <span class="mhc-sub">Preferred</span>
        </div>
        <div class="mhc-title" id="mhcTitle"></div>
      </div>
      <div class="mhc-photo-wrap">
        <div class="mhc-photo" id="mhcPhoto">
          <div class="mhc-photo-placeholder" id="mhcPhotoPlaceholder">
            <div class="mhc-placeholder-icon">&#127968;</div>
            <div class="mhc-placeholder-label">No photo set</div>
          </div>
        </div>
      </div>
      <div class="mhc-footer">
        <div class="mhc-addr" id="mhcAddr"></div>
      </div>
    `;
    document.body.appendChild(hoverCardEl);
  }
  return hoverCardEl;
}

function positionHoverCard(clientX, clientY) {
  if (!hoverCardEl) return;
  const CARD_W = 260;
  const CARD_H = hoverCardEl.offsetHeight || 230;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let left = clientX + 18;
  let top  = clientY - 20;
  if (left + CARD_W > vw - 10) left = clientX - CARD_W - 14;
  if (top  + CARD_H > vh - 10) top  = vh - CARD_H - 10;
  if (top < 10) top = 10;
  hoverCardEl.style.left = `${left}px`;
  hoverCardEl.style.top  = `${top}px`;
}

function showHoverCard(office, clientX, clientY) {
  const card = getOrCreateHoverCard();
  document.getElementById('mhcTitle').textContent = office.name.toUpperCase();
  document.getElementById('mhcAddr').textContent  = office.address;

  const photoEl       = document.getElementById('mhcPhoto');
  const placeholderEl = document.getElementById('mhcPhotoPlaceholder');

  if (office.photo) {
    photoEl.style.backgroundImage = `url("${office.photo.replace(/"/g, '%22')}")`;
    if (placeholderEl) placeholderEl.style.display = 'none';
  } else {
    photoEl.style.backgroundImage = '';
    if (placeholderEl) placeholderEl.style.display = 'flex';
  }

  card.style.display = 'block';
  positionHoverCard(clientX, clientY);
}

function hideHoverCard() {
  if (hoverCardEl) hoverCardEl.style.display = 'none';
}

// ─── Leaflet Map ───────────────────────────────────────────────────────────────
let leafletMap, markers = {};

function createBalloonIcon() {
  return L.icon({
    className: 'balloon-marker',
    iconUrl: 'New_RMX_Balloon.png',
    iconSize: [32, 36],
    iconAnchor: [16, 36],
    popupAnchor: [0, -36]
  });
}

function addMarkerForOffice(office) {
  const marker = L.marker([office.lat, office.lng], { icon: createBalloonIcon() })
    .addTo(leafletMap)
    .on('click', () => showOffice(office.key))
    .on('mouseover', (e) => {
      e.target.getElement()?.classList.add('hovered');
      const o = offices.find(x => x.key === office.key) || office;
      showHoverCard(o, e.originalEvent.clientX, e.originalEvent.clientY);
    })
    .on('mousemove', (e) => {
      positionHoverCard(e.originalEvent.clientX, e.originalEvent.clientY);
    })
    .on('mouseout', (e) => {
      e.target.getElement()?.classList.remove('hovered');
      hideHoverCard();
    });
  markers[office.key] = marker;
  return marker;
}

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

  offices.forEach(o => addMarkerForOffice(o));

  // Hide hover card when map is dragged
  leafletMap.on('dragstart', hideHoverCard);

  // Fix map sizing issues on load
  setTimeout(() => leafletMap.invalidateSize(), 200);
}

function syncMarkers() {
  if (!leafletMap) return;
  Object.values(markers).forEach(marker => marker.remove());
  markers = {};
  offices.forEach(o => addMarkerForOffice(o));
}

// ─── Office Count ──────────────────────────────────────────────────────────────
function updateOfficeCount() {
  const el = document.getElementById('officeCountText');
  if (el) el.textContent = `${offices.length} Offices and Growing`;
}

// ─── Sidebar ───────────────────────────────────────────────────────────────────
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
  const bottomBar   = document.getElementById('bottomBar');
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
  `).join('') + `<button class="biz-info-btn" onclick="showBizInfo()">&#9432; Business Info</button>`;
}

// ─── Phone Menu ────────────────────────────────────────────────────────────────
let _phoneMenuEl = null;

function makePhoneRowHtml(line) {
  const raw = line.trim();
  if (!raw) return '';
  const isFax = /^\(F\)/i.test(raw) || /^fax/i.test(raw);
  const icon  = isFax ? '&#128224;' : '&#128222;';
  const digits = raw.replace(/\D/g, '');
  let e164 = '';
  if (digits.length === 10) e164 = `+1${digits}`;
  else if (digits.length === 11 && digits[0] === '1') e164 = `+${digits}`;
  if (e164) {
    return `<div class="info-row">
      <span class="info-icon">${icon}</span>
      <span class="phone-num" data-e164="${e164}" data-display="${escapeHtml(raw)}" onclick="showPhoneMenu(event,this)">${escapeHtml(raw)}</span>
    </div>`;
  }
  return `<div class="info-row"><span class="info-icon">${icon}</span><span>${escapeHtml(raw)}</span></div>`;
}

function showPhoneMenu(e, el) {
  e.stopPropagation();
  closePhoneMenu();
  const e164    = el.dataset.e164;
  const display = el.dataset.display;
  const gvUrl   = `https://voice.google.com/calls?a=nc,${encodeURIComponent(e164)}`;
  const menu = document.createElement('div');
  menu.className = 'phone-menu';
  menu.innerHTML = `
    <div class="phone-menu-title">${escapeHtml(display)}</div>
    <a href="tel:${e164}" class="phone-menu-item">&#128222; Call</a>
    <a href="${gvUrl}" target="_blank" rel="noopener" class="phone-menu-item">&#128264; Google Voice</a>
    <button class="phone-menu-item" onclick="copyPhoneNumber('${escapeHtml(display)}');event.stopPropagation()">&#128203; Copy Number</button>
  `;
  document.body.appendChild(menu);
  _phoneMenuEl = menu;
  const rect = el.getBoundingClientRect();
  const mw = 210;
  let left = rect.left;
  let top  = rect.bottom + 6;
  if (left + mw > window.innerWidth - 10) left = window.innerWidth - mw - 10;
  if (top + 140 > window.innerHeight) top = rect.top - 146;
  menu.style.left = `${Math.max(8, left)}px`;
  menu.style.top  = `${Math.max(8, top)}px`;
  setTimeout(() => document.addEventListener('click', closePhoneMenu, { once: true }), 10);
}

function closePhoneMenu() {
  _phoneMenuEl?.remove();
  _phoneMenuEl = null;
}

function copyPhoneNumber(display) {
  const clean = display.replace(/\D/g, '');
  navigator.clipboard?.writeText(clean).catch(() => {});
  closePhoneMenu();
  showToast('📋 Number copied!');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('toast-show'), 10);
  setTimeout(() => { t.classList.remove('toast-show'); setTimeout(() => t.remove(), 300); }, 2200);
}

// ─── Business Info Modal ───────────────────────────────────────────────────────
function showBizInfo() {
  document.getElementById('bizInfoOverlay').classList.add('show');
}
function closeBizInfo(e) {
  if (!e || e.target === document.getElementById('bizInfoOverlay')) {
    document.getElementById('bizInfoOverlay').classList.remove('show');
  }
}

// ─── Credential card helper ────────────────────────────────────────────────────
function makeCredCard(icon, label, value, wide) {
  return `<div class="cred-card${wide ? ' cred-wide' : ''}">
    <div class="cred-top"><span class="cred-icon">${icon}</span><span class="cred-label">${label}</span></div>
    <div class="cred-val">${escapeHtml(value)}</div>
  </div>`;
}

// ─── Show Office Popup ─────────────────────────────────────────────────────────
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
  document.getElementById('popupCode').textContent   = o.code;
  document.getElementById('popupTeam').textContent   = o.team || '';

  // Staff badge
  const staffBadge = document.getElementById('popupStaffBadge');
  if (staffBadge) staffBadge.style.display = o.staffAvailable ? 'inline-flex' : 'none';

  // Phone rows
  const phoneHtml = o.phone.split('\n').filter(Boolean).map(makePhoneRowHtml).join('');

  // Contact section
  let body = `<div class="info-section">
    <div class="info-section-title">&#128205; Contact &amp; Location</div>
    <div class="info-row">
      <span class="info-icon">&#128205;</span>
      <span>${escapeHtml(o.address)}</span>
    </div>
    ${phoneHtml}
    <a class="map-link-btn" href="${safeMapUrl(o.mapUrl)}" target="_blank" rel="noopener">Open in Google Maps &#8599;</a>
  </div>`;

  // Credentials section
  const credCards = [];

  if (o.wireless) {
    const wLines = o.wireless.split('\n');
    const ssid   = wLines[0] || '';
    const rest   = wLines.slice(1).join('\n');
    credCards.push(`<div class="cred-card cred-wide">
      <div class="cred-top"><span class="cred-icon">&#128246;</span><span class="cred-label">WiFi Network</span></div>
      <div class="cred-val">${escapeHtml(ssid)}</div>
      ${rest ? `<div class="cred-sub">${escapeHtml(rest)}</div>` : ''}
    </div>`);
  }
  if (o.access) credCards.push(makeCredCard('&#128274;', 'Office Access', o.access));
  if (o.combo)  credCards.push(makeCredCard('&#128290;', 'Combo Lock',    o.combo));
  if (o.door)   credCards.push(makeCredCard('&#128682;', 'Door Code',     o.door));
  if (o.staff)  credCards.push(makeCredCard('&#129514;', 'Staff Code',    o.staff));
  if (o.guest)  credCards.push(makeCredCard('&#128101;', 'Guest Account', o.guest));

  if (credCards.length) {
    body += `<div class="info-section">
      <div class="info-section-title">&#128273; Access &amp; Credentials</div>
      <div class="cred-grid">${credCards.join('')}</div>
    </div>`;
  }

  document.getElementById('popupBody').innerHTML = body;
  document.getElementById('popupOverlay').classList.add('show');
}

function closePopup(e) { if (e.target === document.getElementById('popupOverlay')) closePopupDirect(); }
function closePopupDirect() {
  document.getElementById('popupOverlay').classList.remove('show');
  document.querySelectorAll('.office-card').forEach(c => c.classList.remove('active'));
  closePhoneMenu();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closePopupDirect(); closeBizInfo(); }
});

// ─── Edit Mode ─────────────────────────────────────────────────────────────────
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
    logoTapTimer = setTimeout(() => { logoTapTimer = null; }, 360);
  });
}
function checkPassword() {
  const value = document.getElementById('pwInput').value.trim();
  if (value) {
    adminPassword = value;
    closePwModal();
    enableEditMode();
  } else {
    document.getElementById('pwError').style.display = 'block';
    document.getElementById('pwInput').value = '';
  }
}
function closePwModal() {
  document.getElementById('pwOverlay').classList.remove('show');
  document.getElementById('pwInput').value  = '';
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
    <p style="font-size:0.68rem;color:#888;margin-bottom:10px;line-height:1.5">Select an office to edit. Changes save in this browser and can be published.</p>
    <button class="btn-add-office" onclick="addNewOffice()">+ Add New Office</button>
    <div class="office-card edit-section-card" onclick="openFooterEditForm()">
      <div class="office-card-name">Bottom Strip Details</div>
      <div class="office-card-code">Contacts, emails, phone numbers, labels</div>
      <div style="font-size:0.68rem;color:#e31837;font-weight:700;margin-top:3px">Edit</div>
    </div>
    ${offices.map(o => `
      <div class="office-card" id="card-${o.key}">
        <div class="office-card-name">${escapeHtml(o.name)}</div>
        <div class="office-card-code">${escapeHtml(o.code)}</div>
        <div style="display:flex;gap:10px;margin-top:4px;align-items:center">
          <span class="edit-action-link" onclick="openOfficeEditForm('${o.key}')">Edit</span>
          <span class="edit-remove-link" onclick="deleteOffice('${o.key}')">Remove</span>
        </div>
      </div>
    `).join('')}
  </div>`;
}

// ─── Add / Delete Offices ──────────────────────────────────────────────────────
function addNewOffice() {
  const key = 'office_' + Date.now();
  const newOffice = {
    key,
    name: 'New Office',
    code: '',
    team: '',
    address: '',
    phone: '',
    wireless: '',
    access: '',
    combo: '',
    door: '',
    staff: '',
    guest: '',
    photo: '',
    mapUrl: '',
    lat: 43.25,
    lng: -89.65
  };
  offices.push(newOffice);
  addMarkerForOffice(newOffice);
  persistState();
  updateOfficeCount();
  openOfficeEditForm(key);
}

function deleteOffice(key) {
  const o = offices.find(x => x.key === key);
  if (!o) return;
  if (!confirm(`Remove "${o.name}" from the directory?`)) return;
  offices = offices.filter(x => x.key !== key);
  if (markers[key]) {
    markers[key].remove();
    delete markers[key];
  }
  persistState();
  updateOfficeCount();
  showOfficeEditorInSidebar();
}

// ─── Footer Edit Form ──────────────────────────────────────────────────────────
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
    name:  document.getElementById(`footer-contact-${index}-name`)?.value  ?? contact.name,
    phone: document.getElementById(`footer-contact-${index}-phone`)?.value ?? contact.phone,
    email: document.getElementById(`footer-contact-${index}-email`)?.value ?? contact.email,
  }));
  footer.links = footer.links.map((item, index) => ({
    label: document.getElementById(`footer-link-${index}-label`)?.value ?? item.label,
    value: document.getElementById(`footer-link-${index}-value`)?.value ?? item.value,
    href:  document.getElementById(`footer-link-${index}-href`)?.value  ?? item.href,
  }));
  persistState();
  renderFooter();
  showOfficeEditorInSidebar();
  alert('Bottom strip details updated!');
}

// ─── Office Edit Form ──────────────────────────────────────────────────────────
function openOfficeEditForm(key) {
  const o = offices.find(x => x.key === key);
  const fields = [
    { label:'Name',                                           f:'name'     },
    { label:'Code',                                           f:'code'     },
    { label:'Team',                                           f:'team'     },
    { label:'Address',                                        f:'address'  },
    { label:'Phone',                                          f:'phone'    },
    { label:'WiFi / Pass',                                    f:'wireless' },
    { label:'Office Access',                                  f:'access'   },
    { label:'Combo',                                          f:'combo'    },
    { label:'Door Code',                                      f:'door'     },
    { label:'Staff Code',                                     f:'staff'    },
    { label:'Guest Acct',                                     f:'guest'    },
    { label:'Photo URL  (paste link — shows on pin hover)',   f:'photo'    },
    { label:'Maps URL',                                       f:'mapUrl'   },
    { label:'Latitude',                                       f:'lat'      },
    { label:'Longitude',                                      f:'lng'      },
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
  ['name','code','team','address','phone','wireless','access','combo','door','staff','guest','photo','mapUrl','lat','lng'].forEach(f => {
    const el = document.getElementById(`ef-${key}-${f}`);
    if (el) {
      const val = el.value;
      o[f] = (f === 'lat' || f === 'lng') ? parseFloat(val) || o[f] : val;
    }
  });
  // Update marker position if lat/lng changed
  if (markers[key]) {
    markers[key].setLatLng([o.lat, o.lng]);
  }
  persistState();
  renderSidebar();
  showOfficeEditorInSidebar();
  alert(`${o.name} updated!`);
}

// ─── Save / Publish ────────────────────────────────────────────────────────────
async function saveEdits() {
  persistState();
  try {
    const response = await fetch('/api/directory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Password': adminPassword
      },
      body: JSON.stringify(getState())
    });
    if (response.status === 401 || response.status === 403) {
      alert('That admin password was rejected. Nothing was published.');
      return;
    }
    if (!response.ok) throw new Error(`Save failed with HTTP ${response.status}`);
    cancelEditMode();
    alert('Saved live. Everyone will see the update after refresh.');
  } catch (error) {
    const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'remax_directory_updated.json'; a.click();
    URL.revokeObjectURL(url);
    cancelEditMode();
    alert('Saved in this browser. Live saving will work after the Cloudflare API is deployed; for now, a JSON backup was downloaded.');
  }
}

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderFooter();
  updateOfficeCount();
  initMap();
  loadSharedState();
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
