/* ===== JP-FLIGHT script.js — shared across all pages ===== */

// ── Detect current page ───────────────────────────────
const IS_HOME        = document.getElementById('heroScroll') !== null;
const IS_TRAVEL_PAGE = document.body.classList.contains('page-travel');

// ── Navbar scroll shadow ──────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile hamburger ──────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Hero scroll hint (home only) ──────────────────────
if (IS_HOME) {
  const heroScroll = document.getElementById('heroScroll');
  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ── Modal ─────────────────────────────────────────────
const overlay    = document.getElementById('modalOverlay');
const modalBody  = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(html) {
  if (!overlay || !modalBody) return;
  modalBody.innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (overlay)    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// ── Destination data ──────────────────────────────────
const DESTINATIONS = {
  'โตเกียว': {
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    desc: 'เมืองหลวงที่เต็มไปด้วยแหล่งช้อปปิ้ง วัดธรรมปีอป และเทคโนโลยีล้ำสมัย',
    descFull: 'เมืองหลวงที่ผสมผสานความทันสมัยและวัฒนธรรมดั้งเดิมได้อย่างลงตัว ตั้งแต่ตึกระฟ้าแห่ง Shinjuku ไปจนถึงย่านเก่าของ Asakusa',
    routes: [
      '✈ เส้นทางที่ 1: BKK → NRT → นั่ง Narita Express เข้าเมือง Tokyo Station ~60 นาที',
      '✈ เส้นทางที่ 2: BKK → HND → นั่ง Keikyu หรือ Monorail เข้าเมือง ~30 นาที',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ประมาณ 5.5–6 ชั่วโมง | รวมเวลาเข้าเมืองทั้งหมดประมาณ 7–8 ชั่วโมง',
    flights: [
      { airline: 'Thai Airways TG676', route: 'BKK → NRT', time: '07:30 → 15:45', duration: '6 ชม.', price: '฿12,500' },
      { airline: 'ANA NH848', route: 'BKK → HND', time: '00:05 → 08:10', duration: '6 ชม.', price: '฿14,200' },
    ],
  },
  'โอซาก้า': {
    img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80',
    desc: 'เมืองแห่งอาหารการกินชั้นยอด สัมผัส Street Food ย่าน Dotonbori',
    descFull: 'เมืองแห่งอาหารและความสนุกสนาน ศูนย์กลางการค้าทางตะวันตกของญี่ปุ่น ชื่อดังด้านอาหาร Takoyaki, Okonomiyaki และตลาดสด Kuromon',
    routes: [
      '✈ เส้นทางที่ 1: BKK → KIX → นั่ง Haruka Express เข้า Osaka/Kyoto ~75 นาที',
      '✈ เส้นทางที่ 2: BKK → ITM (สนามบินอิตามิ) → แท็กซี่หรือรถบัสเข้าเมือง ~30 นาที',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ประมาณ 5.5 ชั่วโมง | รวมเวลาเข้าเมืองทั้งหมดประมาณ 7 ชั่วโมง',
    flights: [
      { airline: 'AirAsia XJ610', route: 'BKK → KIX', time: '23:55 → 07:15+1', duration: '5.5 ชม.', price: '฿8,900' },
      { airline: 'Japan Airlines JL717', route: 'BKK → KIX', time: '09:00 → 16:55', duration: '5.5 ชม.', price: '฿13,800' },
    ],
  },
  'เกียวโต': {
    img: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
    desc: 'เมืองเก่าแห่งวัดและศาลเจ้า วัดธรรมดั้งเดิมทั้งงดงาม',
    descFull: 'เมืองเก่าแก่ที่เต็มไปด้วยวัดวาอาราม ทะเลโทริอิ และสวนญี่ปุ่น อดีตราชธานีที่สงวนรักษามรดกทางวัฒนธรรมไว้ได้อย่างงดงาม',
    routes: [
      '✈ เส้นทางที่ 1: BKK → KIX → นั่ง Haruka Express ถึง Kyoto Station ~75 นาที',
      '✈ เส้นทางที่ 2: BKK → NRT → ต่อรถไฟ Shinkansen Nozomi ถึงเกียวโต ~2.5 ชม.',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ถึงโอซาก้า ~5.5 ชม. | รวมรถไฟเข้าเกียวโตประมาณ 7.5–8 ชั่วโมง',
    flights: [
      { airline: 'AirAsia XJ610', route: 'BKK → KIX', time: '23:55 → 07:15+1', duration: '5.5 ชม.', price: '฿8,900' },
      { airline: 'Thai Airways TG622', route: 'BKK → KIX', time: '09:30 → 17:15', duration: '5.5 ชม.', price: '฿11,500' },
    ],
  },
  'ฮอกไกโด': {
    img: 'https://dappermagazine.mx/wp-content/uploads/2023/12/hokkaido2-800x500.jpg',
    thumb: 'https://dappermagazine.mx/wp-content/uploads/2023/12/hokkaido2-800x500.jpg',
    desc: 'ดินแดนธรรมชาติ ทุ่งลาเวนเดอร์ ออนเซ็น และอาหารทะเลสด',
    descFull: 'เกาะทางเหนือสุดที่มีทิวทัศน์ธรรมชาติสวยงาม ทุ่งลาเวนเดอร์สีม่วง สกีรีสอร์ทชั้นนำ และอาหารทะเลสดชั้นเลิศ',
    routes: [
      '✈ เส้นทางที่ 1: BKK → CTS (Chitose) → รถบัสหรือรถไฟ JR Airport Express เข้า Sapporo ~40 นาที',
      '✈ เส้นทางที่ 2: BKK → NRT → ต่อเครื่อง Domestic ถึง CTS ~1.5 ชม.',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ถึงซัปโปโร ~7 ชั่วโมง | หรือแวะพัก NRT รวมประมาณ 10–11 ชั่วโมง',
    flights: [
      { airline: 'Thai Airways TG676+ANA', route: 'BKK → NRT → CTS', time: '07:30 → 18:00', duration: '~10 ชม.', price: '฿18,500' },
      { airline: 'AirAsia + Peach', route: 'BKK → KIX → CTS', time: '23:55 → 14:00+1', duration: '~11 ชม.', price: '฿12,000' },
    ],
  },
  'นารา': {
    img: 'https://kyotocitytours.com/wp-content/uploads/2024/01/soutehrn-round-hall-kofukuji-nara-800.webp',
    thumb: 'https://kyotocitytours.com/wp-content/uploads/2024/01/soutehrn-round-hall-kofukuji-nara-800.webp',
    desc: 'เมืองแห่งกวางเดินอิสระ วัดโทไดจิและสวนสาธารณะอันเงียบสงบ',
    descFull: 'เมืองแห่งกวางเดินเล่นอิสระ บ้านเกิดของวัดโทไดจิขนาดยักษ์ สัมผัสบรรยากาศสงบร่มเย็นท่ามกลางธรรมชาติและสถาปัตยกรรมเก่าแก่',
    routes: [
      '✈ เส้นทางที่ 1: BKK → KIX → รถไฟ Kintetsu Nara Line ถึง Nara ~40 นาที',
      '✈ เส้นทางที่ 2: BKK → KIX → รถไฟ JR Yamatoji Line ถึง Nara ~1 ชม.',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ถึงโอซาก้า ~5.5 ชม. | รวมรถไฟเข้านาราประมาณ 7–7.5 ชั่วโมง',
    flights: [
      { airline: 'AirAsia XJ610', route: 'BKK → KIX', time: '23:55 → 07:15+1', duration: '5.5 ชม.', price: '฿8,900' },
      { airline: 'Jetstar GK', route: 'BKK → KIX', time: '06:30 → 14:10', duration: '5.5 ชม.', price: '฿9,400' },
    ],
  },
  'ฮิโรชิม่า': {
    img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
    desc: 'เมืองแห่งสันติภาพ โทริอิลอยน้ำ และประวัติศาสตร์อันน่าจดจำ',
    descFull: 'เมืองแห่งสันติภาพ มีโทริอิอิตสึกุชิมาลอยน้ำอันเลื่องชื่อบนเกาะมิยาจิมา พร้อมอนุสรณ์สถานสันติภาพที่สะเทือนอารมณ์',
    routes: [
      '✈ เส้นทางที่ 1: BKK → KIX → Shinkansen Nozomi ถึงฮิโรชิม่า ~1.5 ชม.',
      '✈ เส้นทางที่ 2: BKK → HIJ (Hiroshima Airport) → รถบัสเข้าเมือง ~45 นาที',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ~5.5 ชม. + รถไฟหรือรถบัส | รวมประมาณ 8–9 ชั่วโมง',
    flights: [
      { airline: 'AirAsia XJ610', route: 'BKK → KIX → HIR (ต่อรถไฟ)', time: '23:55 → 07:15+1', duration: '~8.5 ชม.', price: '฿10,200' },
      { airline: 'Thai Airways TG622', route: 'BKK → KIX → HIR (ต่อรถไฟ)', time: '09:30 → 19:00', duration: '~8.5 ชม.', price: '฿13,500' },
    ],
  },
  'ฟุกุโอกะ': {
    img: 'https://tse2.mm.bing.net/th/id/OIP.rH2-8SyJhkagDRemVARNXAHaFj?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
    thumb: 'https://tse2.mm.bing.net/th/id/OIP.rH2-8SyJhkagDRemVARNXAHaFj?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: 'ประตูสู่ภาคตะวันตกญี่ปุ่น ราเมนชื่อดังและตลาดอาหารทะเลสด',
    descFull: 'เมืองประตูสู่ภาคตะวันตกของญี่ปุ่น โด่งดังด้านราเมนHakata และตลาดอาหารทะเล Yanagibashi สนามบินอยู่ใกล้ตัวเมืองมากที่สุดในญี่ปุ่น',
    routes: [
      '✈ เส้นทางที่ 1: BKK → FUK (Fukuoka Airport) → รถไฟ Subway ถึงตัวเมือง ~5 นาที',
      '✈ เส้นทางที่ 2: BKK → KIX → Shinkansen Sakura ถึงฟุกุโอกะ ~2.5 ชม.',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ถึงฟุกุโอกะ ~5.5 ชม. | สนามบินใกล้เมืองมากที่สุดในญี่ปุ่น',
    flights: [
      { airline: 'VietJet VZ802', route: 'BKK → FUK', time: '01:30 → 09:00', duration: '5.5 ชม.', price: '฿7,500' },
      { airline: 'Thai AirAsia FD238', route: 'BKK → FUK', time: '08:00 → 15:45', duration: '5.5 ชม.', price: '฿8,200' },
    ],
  },
  'โอกินาว่า': {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    desc: 'หมู่เกาะเขตร้อน ทะเลสีฟ้าใสและวัฒนธรรมริวกิวเป็นเอกลักษณ์',
    descFull: 'หมู่เกาะเขตร้อนของญี่ปุ่น ทะเลสีฟ้าใสและวัฒนธรรมริวกิวที่เป็นเอกลักษณ์ มีชายหาดสวยงาม ปราสาทชูริ และอาหารท้องถิ่นที่ไม่เหมือนใคร',
    routes: [
      '✈ เส้นทางที่ 1: BKK → OKA (Naha Airport) → Monorail Yui Rail เข้าตัวเมือง ~10 นาที',
      '✈ เส้นทางที่ 2: BKK → NRT → ต่อเครื่อง ANA/JAL ถึง Naha ~2.5 ชม.',
    ],
    travelTime: 'บินตรงจากกรุงเทพฯ ถึงโอกินาว่า ~4.5–5 ชั่วโมง | เป็นเส้นทางที่ใกล้ที่สุดในญี่ปุ่น',
    flights: [
      { airline: 'Thai AirAsia FD', route: 'BKK → OKA', time: '10:00 → 14:30', duration: '4.5 ชม.', price: '฿7,200' },
      { airline: 'Peach MM', route: 'BKK → OKA', time: '06:30 → 11:00', duration: '4.5 ชม.', price: '฿6,800' },
    ],
  },
};

// ── Shared: open destination popup ───────────────────
function openDestModal(city) {
  const d = DESTINATIONS[city];
  if (!d) return;

  const flightRows = d.flights.map(f => `
    <div class="dp-flight-row">
      <div class="dp-flight-left">
        <span class="dp-flight-icon">✈</span>
        <div>
          <p class="dp-flight-route">${f.route}</p>
          <p class="dp-flight-detail">${f.airline} | ${f.time} | ${f.duration}</p>
        </div>
      </div>
      <span class="dp-flight-price">${f.price}</span>
    </div>
  `).join('');

  const routeItems = d.routes.map(r => `<p class="dp-route-item">${r}</p>`).join('');

  openModal(`
    <div class="dp-hero-img">
      <img src="${d.img}" alt="${city}" />
      <div class="dp-hero-title-wrap">
        <h2 class="dp-city-title">${city}</h2>
      </div>
    </div>
    <div class="dp-content">
      <button class="dp-back" onclick="closeModal()">← กลับ</button>
      <div class="dp-section-card">
        <h4 class="dp-card-title">🗺 เส้นทางการเดินทาง</h4>
        ${routeItems}
      </div>
      <div class="dp-section-card">
        <h4 class="dp-card-title">⏱ ระยะเวลาการเดินทาง</h4>
        <p class="dp-time-text">${d.travelTime}</p>
      </div>
      <div class="dp-section-card">
        <h4 class="dp-card-title">🎫 ตั๋วเที่ยวบินแนะนำ</h4>
        ${flightRows}
      </div>
    </div>
  `);
}

// ── Destination cards (home & travel page) ────────────
document.querySelectorAll('.dest-card').forEach(card => {
  card.addEventListener('click', () => openDestModal(card.dataset.city));
});

// ── Travel page: render cards dynamically ─────────────
const travelGrid = document.getElementById('travelGrid');
if (travelGrid) {
  Object.entries(DESTINATIONS).forEach(([city, d]) => {
    const card = document.createElement('div');
    card.className = 'tp-card reveal';
    card.dataset.city = city;
    card.innerHTML = `
      <div class="tp-img-wrap">
        <img src="${d.thumb}" alt="${city}" loading="lazy" />
        <div class="tp-overlay"><button class="dest-btn">สำรวจ →</button></div>
      </div>
      <div class="tp-info">
        <p class="tp-name">${city}</p>
        <p class="tp-desc">${d.desc}</p>
      </div>
    `;
    card.addEventListener('click', () => openDestModal(city));
    travelGrid.appendChild(card);
  });

  // Reveal animation for dynamically added cards
  const tpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        tpObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  travelGrid.querySelectorAll('.tp-card').forEach(el => tpObserver.observe(el));
}

// ── Toast notification ────────────────────────────────
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Book flight (home page flights section) ───────────
function bookFlight(btn) {
  const card    = btn.closest('.flight-card');
  const route   = card.dataset.route;
  const airline = card.dataset.airline;
  const price   = card.dataset.price;

  openModal(`
    <div style="padding:36px 28px 28px;">
      <h3>✈ ${route}</h3><br>
      <p><strong>สายการบิน:</strong> ${airline}</p>
      <p><strong>เวลาออก:</strong> ${card.dataset.time}</p>
      <p><strong>ระยะเวลา:</strong> ${card.dataset.duration}</p>
      <p><strong>ราคาเริ่มต้น:</strong> ฿${price}</p><br>
      <p style="color:#6b7280;font-size:0.88rem;">ระบบจะพาไปยังช่องทางจองตั๋วจริงของสายการบิน</p><br>
      <button onclick="confirmBook('${route}','${airline}'); closeModal();" style="
        background:#1a3fcc;color:#fff;border:none;
        padding:12px 28px;border-radius:50px;
        font-weight:700;font-size:0.95rem;cursor:pointer;width:100%;
        font-family:'Noto Sans Thai','Poppins',sans-serif;
      ">ยืนยันการจอง</button>
    </div>
  `);
}

function confirmBook(route, airline) {
  showToast(`✅ จองเที่ยวบิน ${route} (${airline}) เรียบร้อย!`);
}

// ── Guide popup ───────────────────────────────────────
const guideOverlay = document.getElementById('guideOverlay');
const guideBody    = document.getElementById('guideBody');
const guideClose   = document.getElementById('guideClose');

const GUIDES = {
  takeshi: {
    seed: 'takeshi', bg: 'b6e3f4',
    name: 'คุณทาเคชิ ยามาโมโตะ', spec: 'เชี่ยวชาญ: โตเกียว & โยโกฮาม่า', stars: '★★★★★',
    desc: 'ไกด์อาวุโสประสบการณ์ 15 ปี พูดได้ 3 ภาษา (ไทย-อังกฤษ-ญี่ปุ่น) เชี่ยวชาญวัฒนธรรมญี่ปุ่นดั้งเดิม พาเที่ยวย่าน Asakusa, Akihabara, Shibuya และ Yokohama Chinatown',
    duration: 'Full-day (8 ชั่วโมง) หรือ Half-day (4 ชั่วโมง)',
    prices: ['Half-day: <strong>฿1,800 / คน</strong>', 'Full-day: <strong>฿3,200 / คน</strong>', 'กลุ่ม 5 คนขึ้นไป ลด 10%'],
    contacts: [['📱','LINE','@takeshi_jpflight'],['✉️','Email','takeshi@jpflight.com'],['📲','Tel','+81-90-1234-5678']],
  },
  yuki: {
    seed: 'yuki', bg: 'ffdfbf',
    name: 'คุณยูกิ ทานากะ', spec: 'เชี่ยวชาญ: เกียวโต & นารา', stars: '★★★★★',
    desc: 'ไกด์หญิงผู้เชี่ยวชาญด้านวัฒนธรรมและประวัติศาสตร์ญี่ปุ่น ประสบการณ์ 10 ปี จบการศึกษาด้านประวัติศาสตร์จากมหาวิทยาลัยเกียวโต พาเที่ยววัด Fushimi Inari, Kinkaku-ji, Arashiyama และสวนกวางนารา',
    duration: 'Half-day (4 ชั่วโมง), Full-day (8 ชั่วโมง) หรือ 2 วัน (เกียวโต + นารา)',
    prices: ['Half-day: <strong>฿1,500 / คน</strong>', 'Full-day: <strong>฿2,800 / คน</strong>', 'แพ็กเกจ 2 วัน: <strong>฿4,500 / คน</strong>', 'เด็กอายุต่ำกว่า 12 ปี ลด 20%'],
    contacts: [['📱','LINE','@yuki_jpflight'],['✉️','Email','yuki@jpflight.com'],['📲','Tel','+81-90-2345-6789']],
  },
  kenji: {
    seed: 'kenji', bg: 'c0aede',
    name: 'คุณเคนจิ ซาโต้', spec: 'เชี่ยวชาญ: โอซาก้า & โกเบ', stars: '★★★★☆',
    desc: 'ไกด์หนุ่มพลังสูง ประสบการณ์ 7 ปี เชี่ยวชาญด้านอาหารและวัฒนธรรมสตรีทของโอซาก้า พาทัวร์ชิมอาหารย่าน Dotonbori, Kuromon Ichiba รวมถึงเที่ยวท่าเรือ Kobe Harborland',
    duration: 'Half-day (4 ชั่วโมง) หรือ Full-day (9 ชั่วโมง รวมมื้อกลางวัน)',
    prices: ['Half-day: <strong>฿1,600 / คน</strong>', 'Full-day (รวมอาหาร): <strong>฿3,500 / คน</strong>', 'Food Tour เฉพาะ: <strong>฿1,200 / คน</strong>', 'กลุ่ม 4 คนขึ้นไป ลด 15%'],
    contacts: [['📱','LINE','@kenji_jpflight'],['✉️','Email','kenji@jpflight.com'],['📲','Tel','+81-90-3456-7890']],
  },
};

function openGuide(id) {
  if (!guideOverlay || !guideBody) return;
  const g = GUIDES[id];
  guideBody.innerHTML = `
    <div class="gp-header">
      <div class="gp-avatar-popup">
        <img src="https://api.dicebear.com/7.x/personas/svg?seed=${g.seed}&backgroundColor=${g.bg}" alt="${g.name}" />
      </div>
      <h2 class="gp-popup-name">${g.name}</h2>
      <p class="gp-popup-spec">${g.spec}</p>
      <div class="gp-popup-stars">${g.stars}</div>
    </div>
    <div class="gp-detail-card"><h3 class="gp-detail-title">📋 คำอธิบาย</h3><p>${g.desc}</p></div>
    <div class="gp-detail-card"><h3 class="gp-detail-title">⏱ ระยะเวลาการไกด์</h3><p>${g.duration}</p></div>
    <div class="gp-detail-card">
      <h3 class="gp-detail-title">💰 ราคา</h3>
      <ul class="gp-list">${g.prices.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
    <div class="gp-detail-card">
      <h3 class="gp-detail-title">📞 ช่องทางติดต่อ</h3>
      <ul class="gp-contact-list">
        ${g.contacts.map(([icon,label,val]) => `<li><span>${icon}</span> ${label}: <strong>${val}</strong></li>`).join('')}
      </ul>
    </div>
    <button class="btn-contact-popup" onclick="contactGuide('${g.name}')">ติดต่อไกด์</button>
  `;
  guideOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGuide() {
  if (!guideOverlay) return;
  guideOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (guideClose) guideClose.addEventListener('click', closeGuide);
if (guideOverlay) guideOverlay.addEventListener('click', e => { if (e.target === guideOverlay) closeGuide(); });

function contactGuide(name) {
  closeGuide();
  showToast(`📩 ส่งข้อความหา ${name} แล้ว!`);
}

// ── Escape key closes all modals ──────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeGuide(); }
});

// ── Scroll reveal (static elements) ──────────────────
const revealEls = document.querySelectorAll(
  '.dest-card, .flight-card, .guide-card, .fl-card, .section-title, .tp-section-title'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Active nav highlight (home only) ─────────────────
if (IS_HOME) {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--blue)' : '';
    });
  });
}