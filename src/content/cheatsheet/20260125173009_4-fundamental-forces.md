---
title: '4 Gaya Fundamental dalam Fisika'
description: 'Panduan komprehensif tentang empat gaya fundamental: gravitasi (Newton hingga Einstein), elektromagnetik, nuklir kuat, dan nuklir lemah'
pubDate: 2026-01-25
author: 'Akmal'
category: 'Fisika'
tags: ['physics', 'fundamental-forces']
---

Dalam fisika modern, semua interaksi di alam semesta dapat dijelaskan melalui **empat gaya fundamental**: gravitasi, elektromagnetik, nuklir kuat, dan nuklir lemah. Cheatsheet ini membahas secara komprehensif setiap gaya, dari konsep klasik hingga teori modern.

---

## 1. Gravitasi (Gravitational Force)

Gravitasi adalah gaya fundamental yang paling lemah namun memiliki jangkauan tak terbatas. Gaya ini bertanggung jawab atas pergerakan planet, bintang, dan struktur skala besar alam semesta.

### 1.1 Gravitasi Newtonian

**Hukum Gravitasi Universal Newton (1687):**

Dua benda bermassa saling menarik dengan gaya yang sebanding dengan hasil kali massanya dan berbanding terbalik dengan kuadrat jaraknya.

$$F_g = G \frac{m_1 m_2}{r^2}$$

di mana:

- $F_g$ = gaya gravitasi (N)
- $G$ = konstanta gravitasi universal = $6.67430 \times 10^{-11} \text{ m}^3 \text{ kg}^{-1} \text{ s}^{-2}$
- $m_1, m_2$ = massa kedua benda (kg)
- $r$ = jarak antara pusat massa kedua benda (m)

**Medan Gravitasi:**

Medan gravitasi di sekitar massa $M$ pada jarak $r$:

$$g = \frac{GM}{r^2}$$

**Energi Potensial Gravitasi:**

$$U = -G \frac{m_1 m_2}{r}$$

Tanda negatif menunjukkan bahwa energi potensial meningkat (menjadi kurang negatif) saat benda menjauh.

<div class="gravity-newton-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .gravity-newton-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .gravity-newton-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .gravity-newton-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .gravity-newton-viz h4 {
          color: #f3f4f6 !important;
        }
        .gn-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .gn-svg {
          max-width: 500px;
          height: auto;
        }
        .gn-mass {
          fill: #3498db;
        }
        html.dark .gn-mass {
          fill: #60a5fa;
        }
        .gn-force {
          stroke: #e74c3c;
          stroke-width: 2.5;
          fill: none;
          marker-end: url(#arrow-red);
        }
        html.dark .gn-force {
          stroke: #f87171;
        }
        .gn-distance {
          stroke: #27ae60;
          stroke-width: 1.5;
          stroke-dasharray: 5,5;
        }
        html.dark .gn-distance {
          stroke: #4ade80;
        }
        .gn-label {
          font-size: 12px;
          fill: #2c3e50;
        }
        html.dark .gn-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Hukum Gravitasi Universal Newton</h4>
  <div class="gn-svg-container">
    <svg class="gn-svg" viewBox="0 0 500 300">
      <defs>
        <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#e74c3c"/>
        </marker>
      </defs>
      <!-- Mass 1 -->
      <circle cx="100" cy="150" r="25" class="gn-mass"/>
      <text x="100" y="155" text-anchor="middle" class="gn-label" font-weight="bold">m₁</text>
      <!-- Mass 2 -->
      <circle cx="400" cy="150" r="25" class="gn-mass"/>
      <text x="400" y="155" text-anchor="middle" class="gn-label" font-weight="bold">m₂</text>
      <!-- Distance line -->
      <line x1="125" y1="150" x2="375" y2="150" class="gn-distance"/>
      <text x="250" y="140" text-anchor="middle" class="gn-label">r (jarak)</text>
      <!-- Force vectors -->
      <line x1="100" y1="150" x2="150" y2="150" class="gn-force"/>
      <text x="125" y="135" text-anchor="middle" class="gn-label">F₁₂</text>
      <line x1="400" y1="150" x2="350" y2="150" class="gn-force"/>
      <text x="375" y="135" text-anchor="middle" class="gn-label">F₂₁</text>
      <!-- Formula -->
      <text x="250" y="200" text-anchor="middle" class="gn-label" font-size="14" font-weight="bold">
        F = G(m₁m₂)/r²
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Gaya gravitasi antara dua massa: F₁₂ = -F₂₁ (hukum aksi-reaksi)</em>
  </p>
</div>

**Kecepatan Lepas (Escape Velocity):**

Kecepatan minimum yang diperlukan untuk lepas dari medan gravitasi:

$$v_{esc} = \sqrt{\frac{2GM}{r}}$$

**Penjelasan:** Diperoleh dengan menyamakan energi kinetik dengan energi potensial gravitasi: $\frac{1}{2}mv_{esc}^2 = G\frac{Mm}{r}$. Pada kecepatan ini, benda memiliki cukup energi untuk mencapai jarak tak hingga dengan kecepatan nol. Untuk Bumi, $v_{esc} \approx 11.2 \text{ km/s}$.

**Kecepatan Orbit:**

Kecepatan yang diperlukan untuk mempertahankan orbit melingkar:

$$v_{orbit} = \sqrt{\frac{GM}{r}}$$

**Penjelasan:** Diperoleh dengan menyamakan gaya sentripetal dengan gaya gravitasi: $\frac{mv^2}{r} = G\frac{Mm}{r^2}$. Perhatikan bahwa $v_{orbit} = \frac{v_{esc}}{\sqrt{2}}$, artinya kecepatan orbit adalah $\frac{1}{\sqrt{2}}$ kali kecepatan lepas. Untuk orbit Bumi rendah, $v_{orbit} \approx 7.9 \text{ km/s}$.

<div class="velocity-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .velocity-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .velocity-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .velocity-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .velocity-viz h4 {
          color: #f3f4f6 !important;
        }
        .vel-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .vel-svg {
          max-width: 600px;
          height: auto;
        }
        .vel-planet {
          fill: #3498db;
        }
        html.dark .vel-planet {
          fill: #60a5fa;
        }
        .vel-orbit {
          fill: none;
          stroke: #27ae60;
          stroke-width: 2;
          stroke-dasharray: 5,5;
        }
        html.dark .vel-orbit {
          stroke: #4ade80;
        }
        .vel-escape {
          fill: none;
          stroke: #e74c3c;
          stroke-width: 2;
        }
        html.dark .vel-escape {
          stroke: #f87171;
        }
        .vel-fallback {
          fill: none;
          stroke: #f39c12;
          stroke-width: 2;
          stroke-dasharray: 3,3;
        }
        html.dark .vel-fallback {
          stroke: #fbbf24;
        }
        .vel-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .vel-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Kecepatan Lepas vs Kecepatan Orbit</h4>
  <div class="vel-svg-container">
    <svg class="vel-svg" viewBox="0 0 600 400">
      <!-- Planet -->
      <circle cx="300" cy="200" r="30" class="vel-planet"/>
      <text x="300" y="205" text-anchor="middle" class="vel-label" fill="white" font-weight="bold">M</text>
      <!-- Circular orbit -->
      <circle cx="300" cy="200" r="100" class="vel-orbit"/>
      <circle cx="400" cy="200" r="5" fill="#27ae60"/>
      <text x="410" y="195" class="vel-label" font-size="10">v = v_orbit</text>
      <text x="410" y="210" class="vel-label" font-size="10">(Orbit stabil)</text>
      <!-- Escape trajectory -->
      <path d="M 300 100 Q 400 150 500 200" class="vel-escape"/>
      <circle cx="500" cy="200" r="5" fill="#e74c3c"/>
      <text x="510" y="195" class="vel-label" font-size="10">v = v_esc</text>
      <text x="510" y="210" class="vel-label" font-size="10">(Lepas)</text>
      <!-- Fallback trajectory -->
      <path d="M 300 100 Q 200 150 100 200" class="vel-fallback"/>
      <circle cx="100" cy="200" r="5" fill="#f39c12"/>
      <text x="50" y="195" text-anchor="middle" class="vel-label" font-size="10">v < v_esc</text>
      <text x="50" y="210" text-anchor="middle" class="vel-label" font-size="10">(Jatuh kembali)</text>
      <!-- Launch point -->
      <circle cx="300" cy="100" r="8" fill="#2c3e50"/>
      <text x="300" y="85" text-anchor="middle" class="vel-label" font-weight="bold">Titik Peluncuran</text>
      <!-- Legend -->
      <line x1="50" y1="320" x2="80" y2="320" class="vel-orbit"/>
      <text x="90" y="325" class="vel-label" font-size="11">Orbit melingkar (v = √(GM/r))</text>
      <line x1="50" y1="340" x2="80" y2="340" class="vel-escape"/>
      <text x="90" y="345" class="vel-label" font-size="11">Trajektori lepas (v = √(2GM/r))</text>
      <line x1="50" y1="360" x2="80" y2="360" class="vel-fallback"/>
      <text x="90" y="365" class="vel-label" font-size="11">Jatuh kembali (v < v_esc)</text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Perbandingan trajektori berdasarkan kecepatan awal</em>
  </p>
</div>

### 1.2 Gravitasi Einstein: Relativitas Umum

Teori Relativitas Umum Einstein (1915) merevisi pemahaman gravitasi dari "gaya" menjadi **kelengkungan ruang-waktu**.

**Prinsip Dasar:**

1. **Ekuivalensi:** Efek gravitasi tidak dapat dibedakan dari percepatan
2. **Kelengkungan:** Massa dan energi melengkungkan ruang-waktu
3. **Geodesik:** Benda bergerak mengikuti jalur terpendek dalam ruang-waktu melengkung

**Persamaan Medan Einstein:**

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

**Penjelasan:** Persamaan fundamental relativitas umum yang menghubungkan geometri ruang-waktu (sisi kiri) dengan distribusi materi dan energi (sisi kanan). Tensor Einstein $G_{\mu\nu}$ menggambarkan kelengkungan ruang-waktu, sementara tensor energi-momentum $T_{\mu\nu}$ menggambarkan materi dan energi. Faktor $\frac{8\pi G}{c^4}$ memastikan konsistensi dengan limit Newtonian. Konstanta kosmologis $\Lambda$ menjelaskan energi gelap (dark energy).

di mana:

- $G_{\mu\nu}$ = tensor Einstein (kelengkungan ruang-waktu)
- $g_{\mu\nu}$ = tensor metrik (geometri ruang-waktu)
- $T_{\mu\nu}$ = tensor energi-momentum (materi dan energi)
- $\Lambda$ = konstanta kosmologis
- $c$ = kecepatan cahaya
- $G$ = konstanta gravitasi

**Schwarzschild Metric (Solusi untuk Benda Bulat):**

$$ds^2 = -\left(1 - \frac{2GM}{c^2 r}\right) c^2 dt^2 + \frac{dr^2}{1 - \frac{2GM}{c^2 r}} + r^2(d\theta^2 + \sin^2\theta d\phi^2)$$

**Penjelasan:** Metrik yang menggambarkan geometri ruang-waktu di sekitar massa bulat non-rotating. Suku pertama (dengan $dt^2$) menggambarkan dilatasi waktu gravitasi, suku kedua (dengan $dr^2$) menunjukkan kontraksi radial, dan suku ketiga adalah geometri sudut. Faktor $\left(1 - \frac{2GM}{c^2 r}\right)$ menjadi nol di radius Schwarzschild, menandai horizon event.

**Radius Schwarzschild (Horizon Lubang Hitam):**

$$r_s = \frac{2GM}{c^2}$$

**Penjelasan:** Radius kritis di mana kecepatan lepas sama dengan kecepatan cahaya. Benda yang lebih kecil dari radius ini akan menjadi lubang hitam. Untuk massa Bumi, $r_s \approx 9 \text{ mm}$; untuk Matahari, $r_s \approx 3 \text{ km}$.

<div class="gravity-einstein-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .gravity-einstein-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .gravity-einstein-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .gravity-einstein-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .gravity-einstein-viz h4 {
          color: #f3f4f6 !important;
        }
        .ge-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .ge-svg {
          max-width: 600px;
          height: auto;
        }
        .ge-grid {
          fill: none;
          stroke: #95a5a6;
          stroke-width: 0.5;
          opacity: 0.3;
        }
        html.dark .ge-grid {
          stroke: #6b7280;
        }
        .ge-curved {
          fill: none;
          stroke: #e74c3c;
          stroke-width: 2.5;
        }
        html.dark .ge-curved {
          stroke: #f87171;
        }
        .ge-mass {
          fill: #2c3e50;
        }
        html.dark .ge-mass {
          fill: #f3f4f6;
        }
        .ge-orbit {
          fill: none;
          stroke: #3498db;
          stroke-width: 2;
          stroke-dasharray: 5,5;
        }
        html.dark .ge-orbit {
          stroke: #60a5fa;
        }
        .ge-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .ge-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Kelengkungan Ruang-Waktu dalam Relativitas Umum</h4>
  <div class="ge-svg-container">
    <svg class="ge-svg" viewBox="0 0 600 400">
      <!-- Grid (flat space-time) -->
      <g class="ge-grid">
        <line x1="0" y1="100" x2="600" y2="100"/>
        <line x1="0" y1="200" x2="600" y2="200"/>
        <line x1="0" y1="300" x2="600" y2="300"/>
        <line x1="100" y1="0" x2="100" y2="400"/>
        <line x1="300" y1="0" x2="300" y2="400"/>
        <line x1="500" y1="0" x2="500" y2="400"/>
      </g>
      <!-- Curved space-time -->
      <path d="M 50 200 Q 150 150 250 200 T 450 200" class="ge-curved"/>
      <path d="M 50 250 Q 150 200 250 250 T 450 250" class="ge-curved"/>
      <path d="M 50 300 Q 150 250 250 300 T 450 300" class="ge-curved"/>
      <!-- Mass causing curvature -->
      <circle cx="300" cy="200" r="20" class="ge-mass"/>
      <text x="300" y="205" text-anchor="middle" class="ge-label" fill="white" font-weight="bold">M</text>
      <!-- Orbiting body -->
      <circle cx="400" cy="200" r="8" fill="#3498db"/>
      <path d="M 400 200 A 100 100 0 1 1 400 200" class="ge-orbit"/>
      <text x="420" y="195" class="ge-label">Planet</text>
      <!-- Labels -->
      <text x="50" y="180" class="ge-label">Ruang-Waktu Datar</text>
      <text x="300" y="170" class="ge-label" font-weight="bold">Ruang-Waktu Melengkung</text>
      <text x="300" y="350" class="ge-label" font-size="12">
        Massa melengkungkan ruang-waktu, menyebabkan benda bergerak mengikuti geodesik
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Visualisasi 2D: Massa melengkungkan "lembaran" ruang-waktu</em>
  </p>
</div>

**Prediksi Relativitas Umum:**

1. **Pembelokan Cahaya:** Cahaya membelok saat melewati medan gravitasi kuat
2. **Perihelion Merkurius:** Presesi orbit yang tidak dapat dijelaskan mekanika Newton
3. **Dilatasi Waktu Gravitasi:** Waktu berjalan lebih lambat di medan gravitasi kuat
4. **Gelombang Gravitasi:** Ripples dalam ruang-waktu (terdeteksi 2015)

**Dilatasi Waktu Gravitasi:**

$$\Delta t = \Delta t_0 \sqrt{1 - \frac{2GM}{c^2 r}}$$

**Penjelasan:** Waktu berjalan lebih lambat di medan gravitasi kuat. Faktor $\sqrt{1 - \frac{2GM}{c^2 r}} = \sqrt{1 - \frac{r_s}{r}}$ menunjukkan bahwa semakin dekat ke horizon event ($r \to r_s$), waktu semakin melambat. Di horizon, waktu berhenti ($\Delta t \to 0$). Efek ini telah dikonfirmasi eksperimen dan penting untuk akurasi GPS.

di mana $\Delta t_0$ adalah waktu yang diukur di lokasi tanpa medan gravitasi, dan $\Delta t$ adalah waktu yang diukur di lokasi dengan medan gravitasi.

### 1.3 Perbandingan Newton vs Einstein

| Aspek         | Gravitasi Newton              | Relativitas Umum Einstein         |
| ------------- | ----------------------------- | --------------------------------- |
| **Konsep**    | Gaya jarak jauh               | Kelengkungan ruang-waktu          |
| **Kecepatan** | Aksi instan                   | Propagasi dengan kecepatan cahaya |
| **Aplikasi**  | Skala kecil-menengah          | Semua skala, terutama medan kuat  |
| **Akurasi**   | Sangat baik untuk medan lemah | Akurat untuk semua kondisi        |
| **Prediksi**  | Orbit planet                  | Lubang hitam, gelombang gravitasi |

**Limit Newtonian:**

Gravitasi Newton adalah pendekatan yang sangat baik ketika:

- Medan gravitasi lemah: $\frac{GM}{c^2 r} \ll 1$
- Kecepatan rendah: $v \ll c$
- Skala kecil-menengah (sistem tata surya)

---

## 2. Gaya Elektromagnetik (Electromagnetic Force)

Gaya elektromagnetik adalah interaksi antara partikel bermuatan listrik. Gaya ini memiliki jangkauan tak terbatas dan ~10³⁶ kali lebih kuat dari gravitasi.

### 2.1 Hukum Coulomb

**Gaya Elektrostatik:**

$$F_e = k_e \frac{q_1 q_2}{r^2}$$

di mana:

- $F_e$ = gaya elektrostatik (N)
- $k_e$ = konstanta Coulomb = $\frac{1}{4\pi\epsilon_0} = 8.99 \times 10^9 \text{ N⋅m²/C²}$
- $q_1, q_2$ = muatan listrik (C)
- $r$ = jarak antara muatan (m)
- $\epsilon_0$ = permitivitas ruang hampa = $8.85 \times 10^{-12} \text{ C²/N⋅m²}$

**Medan Listrik:**

$$E = \frac{F}{q} = k_e \frac{Q}{r^2}$$

**Energi Potensial Listrik:**

$$U = k_e \frac{q_1 q_2}{r}$$

<div class="electromagnetic-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .electromagnetic-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .electromagnetic-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .electromagnetic-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .electromagnetic-viz h4 {
          color: #f3f4f6 !important;
        }
        .em-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .em-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .em-svg {
          max-width: 280px;
          height: auto;
        }
        .em-positive {
          fill: #e74c3c;
        }
        .em-negative {
          fill: #3498db;
        }
        .em-field-line {
          fill: none;
          stroke: #27ae60;
          stroke-width: 1.5;
        }
        html.dark .em-field-line {
          stroke: #4ade80;
        }
        .em-force {
          stroke: #e74c3c;
          stroke-width: 2.5;
          fill: none;
          marker-end: url(#arrow-em);
        }
        .em-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .em-label {
          fill: #f3f4f6;
        }
        @media (max-width: 600px) {
          .em-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Gaya Elektromagnetik</h4>
  <div class="em-grid">
    <div class="em-svg-container">
      <svg class="em-svg" viewBox="0 0 280 280">
        <defs>
          <marker id="arrow-em" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#e74c3c"/>
          </marker>
        </defs>
        <!-- Like charges (repulsion) -->
        <circle cx="100" cy="140" r="15" class="em-positive"/>
        <text x="100" y="145" text-anchor="middle" class="em-label" fill="white" font-weight="bold">+</text>
        <circle cx="180" cy="140" r="15" class="em-positive"/>
        <text x="180" y="145" text-anchor="middle" class="em-label" fill="white" font-weight="bold">+</text>
        <line x1="115" y1="140" x2="165" y2="140" class="em-force"/>
        <line x1="165" y1="140" x2="115" y2="140" class="em-force"/>
        <text x="140" y="120" text-anchor="middle" class="em-label" font-size="12">Tolak-menolak</text>
      </svg>
    </div>
    <div class="em-svg-container">
      <svg class="em-svg" viewBox="0 0 280 280">
        <!-- Opposite charges (attraction) -->
        <circle cx="100" cy="140" r="15" class="em-positive"/>
        <text x="100" y="145" text-anchor="middle" class="em-label" fill="white" font-weight="bold">+</text>
        <circle cx="180" cy="140" r="15" class="em-negative"/>
        <text x="180" y="145" text-anchor="middle" class="em-label" fill="white" font-weight="bold">-</text>
        <line x1="115" y1="140" x2="165" y2="140" class="em-force"/>
        <text x="140" y="120" text-anchor="middle" class="em-label" font-size="12">Tarik-menarik</text>
      </svg>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Gaya Coulomb: muatan sejenis tolak-menolak, muatan berbeda tarik-menarik</em>
  </p>
</div>

### 2.2 Medan Magnetik

**Hukum Biot-Savart:**

Medan magnetik dari arus listrik:

$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \hat{r}}{r^2}$$

**Penjelasan:** Menghitung kontribusi medan magnetik dari elemen arus $I d\vec{l}$. Cross product $d\vec{l} \times \hat{r}$ menunjukkan bahwa medan magnetik tegak lurus dengan arah arus dan arah radial. Untuk mendapatkan medan total, integrasikan semua elemen arus.

**Hukum Ampere:**

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc}$$

**Penjelasan:** Integral garis medan magnetik mengelilingi loop tertutup sama dengan $\mu_0$ dikalikan arus total yang dilingkupi loop. Ini analog dengan hukum Gauss untuk listrik, namun untuk medan magnetik. Hukum ini berguna untuk menghitung medan magnetik dengan simetri tinggi.

**Gaya Lorentz:**

Gaya pada partikel bermuatan dalam medan elektromagnetik:

$$\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$$

**Penjelasan:** Gaya total pada partikel bermuatan terdiri dari dua komponen: (1) gaya listrik $q\vec{E}$ yang sejajar dengan medan listrik, dan (2) gaya magnetik $q(\vec{v} \times \vec{B})$ yang tegak lurus dengan kecepatan dan medan magnetik. Cross product menunjukkan bahwa gaya magnetik tidak melakukan kerja (selalu tegak lurus kecepatan).

di mana:

- $\vec{E}$ = medan listrik
- $\vec{B}$ = medan magnetik
- $\vec{v}$ = kecepatan partikel
- $\mu_0$ = permeabilitas ruang hampa = $4\pi \times 10^{-7} \text{ T⋅m/A}$

### 2.3 Persamaan Maxwell

Empat persamaan fundamental elektromagnetisme:

**1. Hukum Gauss (Listrik):**
$$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$$

**Penjelasan:** Divergensi medan listrik sebanding dengan rapat muatan. Ini berarti muatan listrik adalah sumber medan listrik. Muatan positif menghasilkan medan yang keluar (divergensi positif), muatan negatif menghasilkan medan yang masuk (divergensi negatif).

**2. Hukum Gauss (Magnetik):**
$$\nabla \cdot \vec{B} = 0$$

**Penjelasan:** Divergensi medan magnetik selalu nol, artinya tidak ada muatan magnetik (monopole magnetik). Semua garis medan magnetik membentuk loop tertutup - tidak ada titik awal atau akhir.

**3. Hukum Faraday:**
$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$

**Penjelasan:** Curl medan listrik sama dengan negatif laju perubahan medan magnetik. Ini berarti perubahan medan magnetik menghasilkan medan listrik (induksi elektromagnetik). Tanda negatif menunjukkan arah medan listrik yang diinduksi menentang perubahan medan magnetik (hukum Lenz).

**4. Hukum Ampere-Maxwell:**
$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

**Penjelasan:** Curl medan magnetik disebabkan oleh dua sumber: (1) rapat arus $\vec{J}$ (hukum Ampere asli), dan (2) perubahan medan listrik $\frac{\partial \vec{E}}{\partial t}$ (suku Maxwell). Suku kedua ini penting untuk menjelaskan gelombang elektromagnetik dan konservasi muatan.

**Gelombang Elektromagnetik:**

Dari persamaan Maxwell, kecepatan gelombang EM:

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = 2.998 \times 10^8 \text{ m/s}$$

**Penjelasan:** Kecepatan cahaya muncul secara alami dari persamaan Maxwell. Ini menunjukkan bahwa cahaya adalah gelombang elektromagnetik yang merambat dengan kecepatan yang ditentukan oleh sifat-sifat ruang hampa. Persamaan ini adalah salah satu pencapaian terbesar fisika - menyatukan listrik, magnet, dan optik.

**Energi Gelombang EM:**

$$u = \frac{1}{2}\epsilon_0 E^2 + \frac{1}{2\mu_0} B^2$$

**Penjelasan:** Rapat energi gelombang elektromagnetik adalah jumlah rapat energi listrik dan magnetik. Dalam gelombang EM, $E = cB$, sehingga kedua suku memberikan kontribusi yang sama. Total energi gelombang EM sebanding dengan kuadrat amplitudo medan.

<div class="em-wave-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .em-wave-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .em-wave-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .em-wave-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .em-wave-viz h4 {
          color: #f3f4f6 !important;
        }
        .emw-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .emw-svg {
          max-width: 600px;
          height: auto;
        }
        .emw-e-field {
          fill: none;
          stroke: #e74c3c;
          stroke-width: 2.5;
        }
        html.dark .emw-e-field {
          stroke: #f87171;
        }
        .emw-b-field {
          fill: none;
          stroke: #3498db;
          stroke-width: 2.5;
        }
        html.dark .emw-b-field {
          stroke: #60a5fa;
        }
        .emw-axis {
          stroke: #95a5a6;
          stroke-width: 1;
        }
        html.dark .emw-axis {
          stroke: #6b7280;
        }
        .emw-arrow {
          fill: #2c3e50;
        }
        html.dark .emw-arrow {
          fill: #f3f4f6;
        }
        .emw-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .emw-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Gelombang Elektromagnetik</h4>
  <div class="emw-svg-container">
    <svg class="emw-svg" viewBox="0 0 600 400">
      <defs>
        <marker id="arrow-emw" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#2c3e50"/>
        </marker>
      </defs>
      <!-- E field wave -->
      <path d="M 50 100 Q 150 50 250 100 T 450 100 T 550 100" class="emw-e-field"/>
      <text x="300" y="85" text-anchor="middle" class="emw-label" font-weight="bold" fill="#e74c3c">Medan Listrik (E)</text>
      <!-- B field wave (perpendicular) -->
      <path d="M 50 200 Q 150 250 250 200 T 450 200 T 550 200" class="emw-b-field"/>
      <text x="300" y="215" text-anchor="middle" class="emw-label" font-weight="bold" fill="#3498db">Medan Magnetik (B)</text>
      <!-- Direction arrow -->
      <line x1="550" y1="150" x2="570" y2="150" class="emw-axis" marker-end="url(#arrow-emw)"/>
      <text x="560" y="140" text-anchor="middle" class="emw-label" font-size="10">Arah rambat (c)</text>
      <!-- Perpendicular indicators -->
      <line x1="300" y1="100" x2="300" y2="200" class="emw-axis" stroke-dasharray="3,3"/>
      <text x="310" y="150" class="emw-label" font-size="10">E ⊥ B</text>
      <!-- Wavelength markers -->
      <line x1="50" y1="70" x2="50" y2="90" class="emw-axis"/>
      <line x1="250" y1="70" x2="250" y2="90" class="emw-axis"/>
      <line x1="50" y1="75" x2="250" y2="75" class="emw-axis" stroke-dasharray="2,2"/>
      <text x="150" y="70" text-anchor="middle" class="emw-label" font-size="10">λ (panjang gelombang)</text>
      <!-- Properties -->
      <text x="300" y="280" text-anchor="middle" class="emw-label" font-size="12" font-weight="bold">
        E ⊥ B ⊥ Arah Rambat
      </text>
      <text x="300" y="300" text-anchor="middle" class="emw-label" font-size="11">
        E dan B berosilasi dalam fase, tegak lurus satu sama lain
      </text>
      <text x="300" y="320" text-anchor="middle" class="emw-label" font-size="11">
        Kecepatan: c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Gelombang EM: medan listrik dan magnetik saling tegak lurus dan tegak lurus arah rambat</em>
  </p>
</div>

<div class="em-field-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .em-field-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .em-field-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .em-field-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .em-field-viz h4 {
          color: #f3f4f6 !important;
        }
        .emf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .emf-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .emf-svg {
          max-width: 280px;
          height: auto;
        }
        .emf-charge {
          fill: #e74c3c;
        }
        .emf-field-line {
          fill: none;
          stroke: #3498db;
          stroke-width: 1.5;
          opacity: 0.6;
        }
        html.dark .emf-field-line {
          stroke: #60a5fa;
        }
        .emf-label {
          font-size: 10px;
          fill: #2c3e50;
        }
        html.dark .emf-label {
          fill: #f3f4f6;
        }
        @media (max-width: 600px) {
          .emf-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Garis Medan Listrik dan Magnetik</h4>
  <div class="emf-grid">
    <div class="emf-svg-container">
      <svg class="emf-svg" viewBox="0 0 280 280">
        <!-- Positive charge -->
        <circle cx="140" cy="140" r="20" class="emf-charge"/>
        <text x="140" y="147" text-anchor="middle" class="emf-label" fill="white" font-weight="bold">+</text>
        <!-- Electric field lines (radial outward) -->
        <line x1="140" y1="120" x2="140" y2="60" class="emf-field-line"/>
        <line x1="140" y1="160" x2="140" y2="220" class="emf-field-line"/>
        <line x1="120" y1="140" x2="60" y2="140" class="emf-field-line"/>
        <line x1="160" y1="140" x2="220" y2="140" class="emf-field-line"/>
        <line x1="125" y1="125" x2="80" y2="80" class="emf-field-line"/>
        <line x1="155" y1="155" x2="200" y2="200" class="emf-field-line"/>
        <line x1="155" y1="125" x2="200" y2="80" class="emf-field-line"/>
        <line x1="125" y1="155" x2="80" y2="200" class="emf-field-line"/>
        <text x="140" y="250" text-anchor="middle" class="emf-label" font-size="12" font-weight="bold">Medan Listrik</text>
        <text x="140" y="265" text-anchor="middle" class="emf-label" font-size="10">(Radial, keluar dari muatan +)</text>
      </svg>
    </div>
    <div class="emf-svg-container">
      <svg class="emf-svg" viewBox="0 0 280 280">
        <!-- Bar magnet -->
        <rect x="100" y="100" width="80" height="80" fill="#95a5a6" opacity="0.5"/>
        <text x="140" y="130" text-anchor="middle" class="emf-label" font-weight="bold">N</text>
        <text x="140" y="170" text-anchor="middle" class="emf-label" font-weight="bold">S</text>
        <!-- Magnetic field lines (closed loops) -->
        <path d="M 140 60 Q 200 100 140 140 Q 80 100 140 60" class="emf-field-line"/>
        <path d="M 140 80 Q 180 110 140 140 Q 100 110 140 80" class="emf-field-line"/>
        <path d="M 140 140 Q 200 180 140 220 Q 80 180 140 140" class="emf-field-line"/>
        <path d="M 140 160 Q 180 190 140 220 Q 100 190 140 160" class="emf-field-line"/>
        <text x="140" y="250" text-anchor="middle" class="emf-label" font-size="12" font-weight="bold">Medan Magnetik</text>
        <text x="140" y="265" text-anchor="middle" class="emf-label" font-size="10">(Loop tertutup, tidak ada monopole)</text>
      </svg>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Perbedaan fundamental: medan listrik memiliki sumber (muatan), medan magnetik selalu loop tertutup</em>
  </p>
</div>

---

## 3. Gaya Nuklir Kuat (Strong Nuclear Force)

Gaya nuklir kuat adalah gaya terkuat di antara empat gaya fundamental. Gaya ini mengikat quark dalam proton dan neutron, serta mengikat nukleon dalam inti atom.

### 3.1 Sifat Dasar

**Karakteristik:**

- **Kekuatan relatif:** ~10³⁸ kali gravitasi
- **Jangkauan:** ~10⁻¹⁵ m (1 femtometer)
- **Partikel pembawa:** Gluon (8 jenis)
- **Muatan:** Warna (color charge): merah, hijau, biru

**Konstanta Koppel:**

$$\alpha_s \approx 1 \text{ (pada jarak pendek)}$$

**Penjelasan:** Konstanta koppel kuat $\alpha_s$ adalah ukuran kekuatan interaksi kuat. Berbeda dengan elektromagnetik ($\alpha_{EM} \approx 1/137$), konstanta koppel kuat **meningkat** dengan jarak (asymptotic freedom). Pada jarak sangat pendek (~$10^{-18}$ m), quark hampir bebas ($\alpha_s \to 0$), tetapi pada jarak lebih besar, gaya menjadi sangat kuat, mengakibatkan confinement quark.

### 3.2 Quantum Chromodynamics (QCD)

**Prinsip Dasar:**

1. **Confinement:** Quark tidak dapat eksis bebas (selalu dalam hadron)
2. **Asymptotic Freedom:** Pada jarak sangat pendek, quark hampir bebas
3. **Color Charge:** Quark memiliki muatan "warna" (bukan warna visual)

**Medan Kuat (Field Strength Tensor):**

$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + g_s f^{abc} A_\mu^b A_\nu^c$$

**Penjelasan:** Tensor medan kuat untuk QCD. Dua suku pertama ($\partial_\mu A_\nu^a - \partial_\nu A_\mu^a$) mirip dengan elektromagnetik, tetapi suku ketiga ($g_s f^{abc} A_\mu^b A_\nu^c$) adalah **self-interaction** gluon yang unik. Suku ini muncul karena gluon membawa muatan warna, berbeda dengan foton yang tidak bermuatan. Self-interaction ini menyebabkan confinement dan asymptotic freedom.

di mana:

- $A_\mu^a$ = potensial medan gluon (8 komponen untuk 8 gluon)
- $g_s$ = konstanta koppel kuat
- $f^{abc}$ = konstanta struktur SU(3) (menentukan interaksi antara gluon)

<div class="strong-force-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .strong-force-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .strong-force-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .strong-force-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .strong-force-viz h4 {
          color: #f3f4f6 !important;
        }
        .sf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .sf-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .sf-svg {
          max-width: 300px;
          height: auto;
        }
        .sf-quark {
          fill: #e74c3c;
        }
        .sf-gluon {
          stroke: #27ae60;
          stroke-width: 2;
          fill: none;
        }
        .sf-nucleus {
          fill: #3498db;
          opacity: 0.3;
        }
        html.dark .sf-nucleus {
          fill: #60a5fa;
        }
        .sf-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .sf-label {
          fill: #f3f4f6;
        }
        @media (max-width: 600px) {
          .sf-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Gaya Nuklir Kuat</h4>
  <div class="sf-grid">
    <div class="sf-svg-container">
      <svg class="sf-svg" viewBox="0 0 300 300">
        <!-- Quarks in proton -->
        <circle cx="150" cy="150" r="60" class="sf-nucleus"/>
        <text x="150" y="155" text-anchor="middle" class="sf-label" font-weight="bold" font-size="14">Proton</text>
        <circle cx="130" cy="130" r="8" class="sf-quark"/>
        <text x="130" y="135" text-anchor="middle" class="sf-label" fill="white" font-size="10">u</text>
        <circle cx="170" cy="130" r="8" class="sf-quark"/>
        <text x="170" y="135" text-anchor="middle" class="sf-label" fill="white" font-size="10">u</text>
        <circle cx="150" cy="170" r="8" class="sf-quark"/>
        <text x="150" y="175" text-anchor="middle" class="sf-label" fill="white" font-size="10">d</text>
        <!-- Gluon exchange -->
        <path d="M 130 130 Q 150 140 170 130" class="sf-gluon"/>
        <path d="M 170 130 Q 150 150 150 170" class="sf-gluon"/>
        <path d="M 150 170 Q 140 150 130 130" class="sf-gluon"/>
        <text x="150" y="240" text-anchor="middle" class="sf-label" font-size="12">3 Quark + Gluon</text>
      </svg>
    </div>
    <div class="sf-svg-container">
      <svg class="sf-svg" viewBox="0 0 300 300">
        <!-- Nucleus -->
        <circle cx="150" cy="150" r="80" class="sf-nucleus"/>
        <text x="150" y="155" text-anchor="middle" class="sf-label" font-weight="bold" font-size="14">Inti Atom</text>
        <!-- Protons and neutrons -->
        <circle cx="120" cy="120" r="12" fill="#e74c3c"/>
        <text x="120" y="125" text-anchor="middle" class="sf-label" fill="white" font-size="10">p</text>
        <circle cx="180" cy="120" r="12" fill="#95a5a6"/>
        <text x="180" y="125" text-anchor="middle" class="sf-label" fill="white" font-size="10">n</text>
        <circle cx="120" cy="180" r="12" fill="#95a5a6"/>
        <text x="120" y="185" text-anchor="middle" class="sf-label" fill="white" font-size="10">n</text>
        <circle cx="180" cy="180" r="12" fill="#e74c3c"/>
        <text x="180" y="185" text-anchor="middle" class="sf-label" fill="white" font-size="10">p</text>
        <text x="150" y="240" text-anchor="middle" class="sf-label" font-size="12">Nukleon terikat</text>
      </svg>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Gaya kuat mengikat quark dalam hadron dan nukleon dalam inti</em>
  </p>
</div>

### 3.3 Potensial Nuklir Kuat

**Potensial Yukawa:**

$$V(r) = -g^2 \frac{e^{-mr}}{r}$$

di mana $m$ adalah massa partikel pembawa (pion untuk gaya nuklir residual).

**Energi Ikat Nuklir:**

Energi yang diperlukan untuk memisahkan nukleon dari inti:

$$E_{bind} = \Delta m c^2 = (Zm_p + Nm_n - m_{nucleus})c^2$$

**Penjelasan:** Energi ikat dihitung dari defek massa (mass defect) $\Delta m$ dikalikan $c^2$. Defek massa adalah selisih antara massa total nukleon bebas dengan massa inti aktual. Semakin besar defek massa, semakin stabil inti tersebut karena lebih banyak energi yang diperlukan untuk memecahnya.

di mana:

- $Z$ = jumlah proton
- $N$ = jumlah neutron
- $m_p, m_n$ = massa proton/neutron
- $m_{nucleus}$ = massa inti

<div class="binding-energy-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .binding-energy-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .binding-energy-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .binding-energy-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .binding-energy-viz h4 {
          color: #f3f4f6 !important;
        }
        .be-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .be-svg {
          max-width: 600px;
          height: auto;
        }
        .be-nucleon {
          fill: #3498db;
        }
        .be-nucleus {
          fill: #e74c3c;
          opacity: 0.3;
        }
        html.dark .be-nucleus {
          fill: #f87171;
        }
        .be-arrow {
          stroke: #27ae60;
          stroke-width: 2;
          fill: none;
          marker-end: url(#arrow-be);
        }
        html.dark .be-arrow {
          stroke: #4ade80;
        }
        .be-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .be-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Energi Ikat Nuklir: Defek Massa</h4>
  <div class="be-svg-container">
    <svg class="be-svg" viewBox="0 0 600 350">
      <defs>
        <marker id="arrow-be" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#27ae60"/>
        </marker>
      </defs>
      <!-- Separated nucleons -->
      <text x="300" y="30" text-anchor="middle" class="be-label" font-weight="bold" font-size="14">Nukleon Terpisah</text>
      <circle cx="150" cy="80" r="15" class="be-nucleon"/>
      <text x="150" y="86" text-anchor="middle" class="be-label" fill="white" font-weight="bold">p</text>
      <circle cx="250" cy="80" r="15" class="be-nucleon"/>
      <text x="250" y="86" text-anchor="middle" class="be-label" fill="white" font-weight="bold">n</text>
      <circle cx="350" cy="80" r="15" class="be-nucleon"/>
      <text x="350" y="86" text-anchor="middle" class="be-label" fill="white" font-weight="bold">p</text>
      <circle cx="450" cy="80" r="15" class="be-nucleon"/>
      <text x="450" y="86" text-anchor="middle" class="be-label" fill="white" font-weight="bold">n</text>
      <text x="300" y="110" text-anchor="middle" class="be-label" font-size="12">
        Massa total = Zmₚ + Nmₙ
      </text>
      <!-- Arrow down -->
      <line x1="300" y1="130" x2="300" y2="180" class="be-arrow"/>
      <text x="310" y="155" class="be-label" font-size="11">Gaya kuat mengikat</text>
      <!-- Nucleus -->
      <text x="300" y="210" text-anchor="middle" class="be-label" font-weight="bold" font-size="14">Inti Atom (Terikat)</text>
      <circle cx="300" cy="250" r="50" class="be-nucleus"/>
      <circle cx="280" cy="240" r="8" class="be-nucleon"/>
      <circle cx="320" cy="240" r="8" class="be-nucleon"/>
      <circle cx="280" cy="260" r="8" class="be-nucleon"/>
      <circle cx="320" cy="260" r="8" class="be-nucleon"/>
      <text x="300" y="320" text-anchor="middle" class="be-label" font-size="12">
        Massa inti = m_nucleus < Zmₚ + Nmₙ
      </text>
      <!-- Energy difference -->
      <text x="300" y="340" text-anchor="middle" class="be-label" font-size="11" font-weight="bold">
        E_bind = (Zmₚ + Nmₙ - m_nucleus) × c²
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Defek massa menunjukkan energi yang dilepaskan saat nukleon terikat (atau diperlukan untuk memisahkannya)</em>
  </p>
</div>

---

## 4. Gaya Nuklir Lemah (Weak Nuclear Force)

Gaya nuklir lemah bertanggung jawab atas peluruhan radioaktif dan transformasi partikel elementer. Gaya ini memungkinkan perubahan flavor quark dan lepton.

### 4.1 Sifat Dasar

**Karakteristik:**

- **Kekuatan relatif:** ~10²⁵ kali gravitasi
- **Jangkauan:** ~10⁻¹⁸ m (0.001 femtometer)
- **Partikel pembawa:** W⁺, W⁻, Z⁰ boson
- **Massa boson:** $m_W \approx 80.4 \text{ GeV/c²}$, $m_Z \approx 91.2 \text{ GeV/c²}$

**Konstanta Koppel:**

$$\alpha_W \approx \frac{1}{30}$$

### 4.2 Peluruhan Beta

**Peluruhan Beta Minus (β⁻):**

$$n \to p + e^- + \bar{\nu}_e$$

**Peluruhan Beta Plus (β⁺):**

$$p \to n + e^+ + \nu_e$$

**Peluruhan Elektron Capture:**

$$p + e^- \to n + \nu_e$$

<div class="atom-structure-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .atom-structure-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .atom-structure-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .atom-structure-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .atom-structure-viz h4 {
          color: #f3f4f6 !important;
        }
        .as-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .as-svg {
          max-width: 500px;
          height: auto;
        }
        .as-nucleus {
          fill: #e74c3c;
          opacity: 0.8;
        }
        html.dark .as-nucleus {
          fill: #f87171;
        }
        .as-electron {
          fill: #3498db;
        }
        html.dark .as-electron {
          fill: #60a5fa;
        }
        .as-orbit {
          fill: none;
          stroke: #95a5a6;
          stroke-width: 1;
          stroke-dasharray: 3,3;
          opacity: 0.5;
        }
        html.dark .as-orbit {
          stroke: #6b7280;
        }
        .as-label {
          font-size: 10px;
          fill: #2c3e50;
        }
        html.dark .as-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Struktur Atom: Skala dan Gaya</h4>
  <div class="as-svg-container">
    <svg class="as-svg" viewBox="0 0 500 400">
      <!-- Atom -->
      <text x="250" y="30" text-anchor="middle" class="as-label" font-size="14" font-weight="bold">Atom (Skala ~10⁻¹⁰ m)</text>
      <!-- Electron orbits -->
      <circle cx="250" cy="200" r="120" class="as-orbit"/>
      <circle cx="250" cy="200" r="80" class="as-orbit"/>
      <circle cx="250" cy="200" r="40" class="as-orbit"/>
      <!-- Electrons -->
      <circle cx="370" cy="200" r="8" class="as-electron"/>
      <text x="370" y="195" text-anchor="middle" class="as-label" font-size="9" fill="white">e⁻</text>
      <circle cx="250" cy="80" r="8" class="as-electron"/>
      <text x="250" y="75" text-anchor="middle" class="as-label" font-size="9" fill="white">e⁻</text>
      <circle cx="130" cy="200" r="8" class="as-electron"/>
      <text x="130" y="195" text-anchor="middle" class="as-label" font-size="9" fill="white">e⁻</text>
      <circle cx="290" cy="200" r="8" class="as-electron"/>
      <text x="290" y="195" text-anchor="middle" class="as-label" font-size="9" fill="white">e⁻</text>
      <!-- Nucleus (very small) -->
      <circle cx="250" cy="200" r="5" class="as-nucleus"/>
      <text x="250" y="203" text-anchor="middle" class="as-label" font-size="8" fill="white">Inti</text>
      <!-- Labels -->
      <text x="250" y="250" text-anchor="middle" class="as-label" font-size="11">
        Elektron terikat oleh gaya EM
      </text>
      <text x="250" y="270" text-anchor="middle" class="as-label" font-size="10" font-style="italic">
        Inti ~10⁻¹⁵ m (gaya kuat mengikat nukleon)
      </text>
      <!-- Scale comparison -->
      <line x1="50" y1="320" x2="450" y2="320" stroke="#95a5a6" stroke-width="1"/>
      <text x="50" y="315" class="as-label" font-size="9">10⁻¹⁵ m</text>
      <text x="250" y="315" text-anchor="middle" class="as-label" font-size="9">10⁻¹⁰ m</text>
      <text x="450" y="315" text-anchor="end" class="as-label" font-size="9">10⁻⁵ m</text>
      <rect x="50" y="325" width="20" height="10" fill="#e74c3c" opacity="0.6"/>
      <text x="75" y="333" class="as-label" font-size="9">Inti</text>
      <rect x="200" y="325" width="100" height="10" fill="#3498db" opacity="0.6"/>
      <text x="310" y="333" class="as-label" font-size="9">Atom</text>
      <text x="250" y="360" text-anchor="middle" class="as-label" font-size="10">
        Inti 100,000× lebih kecil dari atom, tetapi mengandung 99.9% massa
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Perbandingan skala: inti sangat kecil dibandingkan atom, tetapi gaya kuat mengikat nukleon dengan sangat kuat</em>
  </p>
</div>

<div class="weak-force-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .weak-force-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .weak-force-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .weak-force-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .weak-force-viz h4 {
          color: #f3f4f6 !important;
        }
        .wf-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .wf-svg {
          max-width: 500px;
          height: auto;
        }
        .wf-particle {
          fill: #3498db;
        }
        .wf-arrow {
          stroke: #e74c3c;
          stroke-width: 2.5;
          fill: none;
          marker-end: url(#arrow-wf);
        }
        .wf-boson {
          stroke: #27ae60;
          stroke-width: 2;
          stroke-dasharray: 5,5;
        }
        .wf-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .wf-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Peluruhan Beta melalui Gaya Lemah</h4>
  <div class="wf-svg-container">
    <svg class="wf-svg" viewBox="0 0 500 300">
      <defs>
        <marker id="arrow-wf" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#e74c3c"/>
        </marker>
      </defs>
      <!-- Initial state -->
      <circle cx="100" cy="150" r="20" class="wf-particle"/>
      <text x="100" y="155" text-anchor="middle" class="wf-label" fill="white" font-weight="bold">n</text>
      <text x="100" y="190" text-anchor="middle" class="wf-label" font-size="12">Neutron</text>
      <!-- Arrow -->
      <line x1="130" y1="150" x2="200" y2="150" class="wf-arrow"/>
      <!-- W boson exchange -->
      <line x1="200" y1="150" x2="300" y2="100" class="wf-boson"/>
      <text x="250" y="115" text-anchor="middle" class="wf-label" font-size="10">W⁻</text>
      <!-- Final states -->
      <circle cx="350" cy="80" r="15" class="wf-particle"/>
      <text x="350" y="85" text-anchor="middle" class="wf-label" fill="white" font-weight="bold">p</text>
      <text x="350" y="105" text-anchor="middle" class="wf-label" font-size="10">Proton</text>
      <circle cx="350" cy="150" r="12" fill="#e74c3c"/>
      <text x="350" y="155" text-anchor="middle" class="wf-label" fill="white" font-weight="bold">e⁻</text>
      <text x="350" y="170" text-anchor="middle" class="wf-label" font-size="10">Elektron</text>
      <circle cx="350" cy="220" r="12" fill="#f39c12"/>
      <text x="350" y="225" text-anchor="middle" class="wf-label" fill="white" font-weight="bold">ν̄</text>
      <text x="350" y="240" text-anchor="middle" class="wf-label" font-size="10">Antineutrino</text>
      <!-- Equation -->
      <text x="250" y="280" text-anchor="middle" class="wf-label" font-size="14" font-weight="bold">
        n → p + e⁻ + ν̄ₑ
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Peluruhan beta: neutron berubah menjadi proton melalui pertukaran W⁻ boson</em>
  </p>
</div>

<div class="feynman-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .feynman-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .feynman-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .feynman-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .feynman-viz h4 {
          color: #f3f4f6 !important;
        }
        .feyn-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .feyn-svg {
          max-width: 500px;
          height: auto;
        }
        .feyn-particle {
          stroke: #2c3e50;
          stroke-width: 2;
          fill: none;
        }
        html.dark .feyn-particle {
          stroke: #f3f4f6;
        }
        .feyn-boson {
          stroke: #27ae60;
          stroke-width: 2;
          stroke-dasharray: 5,5;
        }
        html.dark .feyn-boson {
          stroke: #4ade80;
        }
        .feyn-arrow {
          fill: #2c3e50;
        }
        html.dark .feyn-arrow {
          fill: #f3f4f6;
        }
        .feyn-label {
          font-size: 10px;
          fill: #2c3e50;
        }
        html.dark .feyn-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Diagram Feynman: Peluruhan Beta</h4>
  <div class="feyn-svg-container">
    <svg class="feyn-svg" viewBox="0 0 500 350">
      <defs>
        <marker id="arrow-feyn" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#2c3e50"/>
        </marker>
      </defs>
      <!-- Time axis -->
      <line x1="50" y1="300" x2="450" y2="300" stroke="#95a5a6" stroke-width="1"/>
      <text x="250" y="320" text-anchor="middle" class="feyn-label" font-size="10">Waktu →</text>
      <!-- Initial: neutron (d quark) -->
      <line x1="100" y1="50" x2="200" y2="150" class="feyn-particle" marker-end="url(#arrow-feyn)"/>
      <text x="80" y="40" class="feyn-label" font-weight="bold">d (down quark)</text>
      <text x="80" y="55" class="feyn-label" font-size="9">dalam neutron</text>
      <!-- W boson (virtual) -->
      <line x1="200" y1="150" x2="300" y2="150" class="feyn-boson"/>
      <text x="250" y="140" text-anchor="middle" class="feyn-label" font-weight="bold" fill="#27ae60">W⁻</text>
      <text x="250" y="165" text-anchor="middle" class="feyn-label" font-size="9">(boson virtual)</text>
      <!-- Final: proton (u quark) -->
      <line x1="300" y1="150" x2="400" y2="50" class="feyn-particle" marker-end="url(#arrow-feyn)"/>
      <text x="420" y="40" class="feyn-label" font-weight="bold">u (up quark)</text>
      <text x="420" y="55" class="feyn-label" font-size="9">dalam proton</text>
      <!-- Electron -->
      <line x1="200" y1="150" x2="250" y2="250" class="feyn-particle" marker-end="url(#arrow-feyn)"/>
      <text x="180" y="200" text-anchor="middle" class="feyn-label" font-weight="bold">e⁻</text>
      <!-- Antineutrino -->
      <line x1="300" y1="150" x2="350" y2="250" class="feyn-particle" marker-end="url(#arrow-feyn)"/>
      <text x="360" y="200" text-anchor="middle" class="feyn-label" font-weight="bold">ν̄ₑ</text>
      <!-- Vertex labels -->
      <circle cx="200" cy="150" r="5" fill="#e74c3c"/>
      <text x="200" y="175" text-anchor="middle" class="feyn-label" font-size="9">Vertex 1</text>
      <circle cx="300" cy="150" r="5" fill="#e74c3c"/>
      <text x="300" y="175" text-anchor="middle" class="feyn-label" font-size="9">Vertex 2</text>
      <!-- Process label -->
      <text x="250" y="280" text-anchor="middle" class="feyn-label" font-size="12" font-weight="bold">
        d → u + W⁻ → u + e⁻ + ν̄ₑ
      </text>
      <text x="250" y="295" text-anchor="middle" class="feyn-label" font-size="10">
        (Peluruhan beta: perubahan flavor quark)
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Diagram Feynman menunjukkan pertukaran W⁻ boson dalam peluruhan beta</em>
  </p>
</div>

### 4.3 Teori Elektrolemah

**Unifikasi Elektromagnetik dan Gaya Lemah:**

Pada energi tinggi (~100 GeV), gaya elektromagnetik dan lemah menyatu menjadi **gaya elektrolemah**.

**Simetri Gauge:**

$$SU(2)_L \times U(1)_Y \to U(1)_{\text{EM}}$$

**Penjelasan:** Persamaan ini menggambarkan bagaimana simetri gauge elektrolemah $SU(2)_L \times U(1)_Y$ terpecah (breaking) menjadi simetri elektromagnetik $U(1)_{\text{EM}}$ pada energi rendah melalui mekanisme Higgs. $SU(2)_L$ adalah grup simetri untuk interaksi lemah dengan left-handed fermion, $U(1)_Y$ adalah grup hypercharge, dan $U(1)_{\text{EM}}$ adalah grup elektromagnetik yang tersisa setelah symmetry breaking.

**Mekanisme Higgs:**

Boson Higgs memberikan massa pada partikel melalui **spontaneous symmetry breaking**.

**Massa Boson:**

$$m_W = \frac{1}{2} g v$$

**Penjelasan:** Massa boson W diperoleh dari konstanta koppel $g$ (weak coupling constant) dikalikan dengan vacuum expectation value $v$ dari medan Higgs. Faktor $\frac{1}{2}$ muncul dari normalisasi grup $SU(2)$.

$$m_Z = \frac{1}{2} \sqrt{g^2 + g'^2} v$$

**Penjelasan:** Massa boson Z lebih kompleks karena merupakan kombinasi dari boson $W^3$ dan $B$ (dari $SU(2)_L$ dan $U(1)_Y$). Akar kuadrat $\sqrt{g^2 + g'^2}$ menggambarkan mixing angle Weinberg yang menghubungkan konstanta koppel $g$ (weak) dan $g'$ (hypercharge).

di mana $v = 246 \text{ GeV}$ adalah vacuum expectation value dari medan Higgs, yang menentukan skala massa partikel elementer.

---

## 5. Perbandingan 4 Gaya Fundamental

### 5.1 Tabel Perbandingan

| Gaya                | Kekuatan Relatif | Jangkauan | Partikel Pembawa     | Muatan         |
| ------------------- | ---------------- | --------- | -------------------- | -------------- |
| **Gravitasi**       | 1                | ∞         | Graviton (hipotetis) | Massa          |
| **Elektromagnetik** | 10³⁶             | ∞         | Foton                | Muatan listrik |
| **Nuklir Kuat**     | 10³⁸             | ~10⁻¹⁵ m  | Gluon (8)            | Warna          |
| **Nuklir Lemah**    | 10²⁵             | ~10⁻¹⁸ m  | W⁺, W⁻, Z⁰           | Weak isospin   |

### 5.2 Skala Energi dan Jangkauan

<div class="range-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .range-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .range-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .range-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .range-viz h4 {
          color: #f3f4f6 !important;
        }
        .rv-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .rv-svg {
          max-width: 700px;
          height: auto;
        }
        .rv-scale {
          stroke: #95a5a6;
          stroke-width: 1;
        }
        html.dark .rv-scale {
          stroke: #6b7280;
        }
        .rv-gravity {
          fill: #95a5a6;
          opacity: 0.6;
        }
        .rv-em {
          fill: #3498db;
          opacity: 0.6;
        }
        html.dark .rv-em {
          fill: #60a5fa;
        }
        .rv-weak {
          fill: #f39c12;
          opacity: 0.6;
        }
        html.dark .rv-weak {
          fill: #fbbf24;
        }
        .rv-strong {
          fill: #e74c3c;
          opacity: 0.6;
        }
        html.dark .rv-strong {
          fill: #f87171;
        }
        .rv-label {
          font-size: 10px;
          fill: #2c3e50;
        }
        html.dark .rv-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Jangkauan 4 Gaya Fundamental</h4>
  <div class="rv-svg-container">
    <svg class="rv-svg" viewBox="0 0 700 300">
      <!-- Logarithmic scale -->
      <line x1="50" y1="250" x2="650" y2="250" class="rv-scale"/>
      <!-- Markers -->
      <line x1="100" y1="245" x2="100" y2="255" class="rv-scale"/>
      <text x="100" y="270" text-anchor="middle" class="rv-label" font-size="9">10⁻¹⁸ m</text>
      <line x1="200" y1="245" x2="200" y2="255" class="rv-scale"/>
      <text x="200" y="270" text-anchor="middle" class="rv-label" font-size="9">10⁻¹⁵ m</text>
      <line x1="350" y1="245" x2="350" y2="255" class="rv-scale"/>
      <text x="350" y="270" text-anchor="middle" class="rv-label" font-size="9">10⁻¹² m</text>
      <line x1="500" y1="245" x2="500" y2="255" class="rv-scale"/>
      <text x="500" y="270" text-anchor="middle" class="rv-label" font-size="9">10⁻⁹ m</text>
      <line x1="650" y1="245" x2="650" y2="255" class="rv-scale"/>
      <text x="650" y="270" text-anchor="middle" class="rv-label" font-size="9">∞</text>
      <!-- Weak force (very short) -->
      <rect x="50" y="200" width="50" height="30" class="rv-weak"/>
      <text x="75" y="217" text-anchor="middle" class="rv-label" fill="white" font-weight="bold" font-size="10">Lemah</text>
      <text x="75" y="195" text-anchor="middle" class="rv-label" font-size="9">~10⁻¹⁸ m</text>
      <!-- Strong force (short) -->
      <rect x="100" y="180" width="100" height="30" class="rv-strong"/>
      <text x="150" y="197" text-anchor="middle" class="rv-label" fill="white" font-weight="bold" font-size="10">Kuat</text>
      <text x="150" y="175" text-anchor="middle" class="rv-label" font-size="9">~10⁻¹⁵ m</text>
      <!-- EM and Gravity (infinite) -->
      <rect x="200" y="100" width="450" height="30" class="rv-em"/>
      <text x="425" y="117" text-anchor="middle" class="rv-label" fill="white" font-weight="bold" font-size="10">Elektromagnetik</text>
      <text x="425" y="95" text-anchor="middle" class="rv-label" font-size="9">∞ (tak terbatas)</text>
      <rect x="200" y="140" width="450" height="30" class="rv-gravity"/>
      <text x="425" y="157" text-anchor="middle" class="rv-label" fill="white" font-weight="bold" font-size="10">Gravitasi</text>
      <text x="425" y="135" text-anchor="middle" class="rv-label" font-size="9">∞ (tak terbatas)</text>
      <!-- Examples -->
      <text x="350" y="50" text-anchor="middle" class="rv-label" font-size="12" font-weight="bold">
        Contoh Skala: Atom ~10⁻¹⁰ m, Inti ~10⁻¹⁵ m
      </text>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Gaya nuklir memiliki jangkauan sangat pendek, sementara EM dan gravitasi memiliki jangkauan tak terbatas</em>
  </p>
</div>

<div class="forces-scale-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .forces-scale-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .forces-scale-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .forces-scale-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .forces-scale-viz h4 {
          color: #f3f4f6 !important;
        }
        .fs-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .fs-svg {
          max-width: 600px;
          height: auto;
        }
        .fs-bar {
          stroke-width: 30;
          fill: none;
          stroke-linecap: round;
        }
        .fs-gravity {
          stroke: #95a5a6;
        }
        html.dark .fs-gravity {
          stroke: #6b7280;
        }
        .fs-weak {
          stroke: #f39c12;
        }
        html.dark .fs-weak {
          stroke: #fbbf24;
        }
        .fs-em {
          stroke: #3498db;
        }
        html.dark .fs-em {
          stroke: #60a5fa;
        }
        .fs-strong {
          stroke: #e74c3c;
        }
        html.dark .fs-strong {
          stroke: #f87171;
        }
        .fs-label {
          font-size: 11px;
          fill: #2c3e50;
        }
        html.dark .fs-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Kekuatan Relatif 4 Gaya Fundamental</h4>
  <div class="fs-svg-container">
    <svg class="fs-svg" viewBox="0 0 600 250">
      <!-- Scale: logarithmic representation -->
      <line x1="50" y1="50" x2="550" y2="50" class="fs-bar fs-gravity"/>
      <text x="300" y="45" text-anchor="middle" class="fs-label" font-size="12" font-weight="bold">Gravitasi (1)</text>
      <line x1="50" y1="90" x2="200" y2="90" class="fs-bar fs-weak"/>
      <text x="125" y="85" text-anchor="middle" class="fs-label" font-size="12" font-weight="bold">Lemah (10²⁵)</text>
      <line x1="50" y1="130" x2="400" y2="130" class="fs-bar fs-em"/>
      <text x="225" y="125" text-anchor="middle" class="fs-label" font-size="12" font-weight="bold">Elektromagnetik (10³⁶)</text>
      <line x1="50" y1="170" x2="550" y2="170" class="fs-bar fs-strong"/>
      <text x="300" y="165" text-anchor="middle" class="fs-label" font-size="12" font-weight="bold">Kuat (10³⁸)</text>
      <!-- Note -->
      <text x="300" y="210" text-anchor="middle" class="fs-label" font-size="11" font-style="italic">
        Skala logaritmik: panjang bar menunjukkan orde magnitudo relatif
      </text>
    </svg>
  </div>
</div>

### 5.3 Unifikasi Gaya

**Grand Unified Theory (GUT):**

Teori yang mencoba menyatukan gaya elektromagnetik, kuat, dan lemah pada energi ~10¹⁶ GeV.

**Theory of Everything (TOE):**

Teori yang mencoba menyatukan semua 4 gaya fundamental, termasuk gravitasi. String theory dan loop quantum gravity adalah kandidat utama.

**Energi Unifikasi:**

- **Elektrolemah:** ~100 GeV (terbukti)
- **GUT:** ~10¹⁶ GeV (hipotetis)
- **Planck Scale:** ~10¹⁹ GeV (gravitasi kuantum)

<div class="unification-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .unification-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .unification-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .unification-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .unification-viz h4 {
          color: #f3f4f6 !important;
        }
        .unif-svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .unif-svg {
          max-width: 600px;
          height: auto;
        }
        .unif-energy {
          stroke: #95a5a6;
          stroke-width: 1;
        }
        html.dark .unif-energy {
          stroke: #6b7280;
        }
        .unif-weak {
          fill: #f39c12;
          opacity: 0.3;
        }
        .unif-em {
          fill: #3498db;
          opacity: 0.3;
        }
        html.dark .unif-em {
          fill: #60a5fa;
        }
        .unif-strong {
          fill: #e74c3c;
          opacity: 0.3;
        }
        html.dark .unif-strong {
          fill: #f87171;
        }
        .unif-gravity {
          fill: #95a5a6;
          opacity: 0.3;
        }
        .unif-unified {
          fill: #27ae60;
          opacity: 0.4;
        }
        html.dark .unif-unified {
          fill: #4ade80;
        }
        .unif-label {
          font-size: 10px;
          fill: #2c3e50;
        }
        html.dark .unif-label {
          fill: #f3f4f6;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Unifikasi Gaya: Timeline Energi</h4>
  <div class="unif-svg-container">
    <svg class="unif-svg" viewBox="0 0 600 400">
      <!-- Energy scale (logarithmic) -->
      <line x1="50" y1="350" x2="550" y2="350" class="unif-energy"/>
      <!-- Energy markers -->
      <line x1="100" y1="345" x2="100" y2="355" class="unif-energy"/>
      <text x="100" y="370" text-anchor="middle" class="unif-label" font-size="9">100 GeV</text>
      <text x="100" y="385" text-anchor="middle" class="unif-label" font-size="8" font-weight="bold">Elektrolemah</text>
      <line x1="300" y1="345" x2="300" y2="355" class="unif-energy"/>
      <text x="300" y="370" text-anchor="middle" class="unif-label" font-size="9">10¹⁶ GeV</text>
      <text x="300" y="385" text-anchor="middle" class="unif-label" font-size="8" font-weight="bold">GUT</text>
      <line x1="450" y1="345" x2="450" y2="355" class="unif-energy"/>
      <text x="450" y="370" text-anchor="middle" class="unif-label" font-size="9">10¹⁹ GeV</text>
      <text x="450" y="385" text-anchor="middle" class="unif-label" font-size="8" font-weight="bold">Planck</text>
      <!-- Low energy: 4 separate forces -->
      <text x="300" y="30" text-anchor="middle" class="unif-label" font-size="12" font-weight="bold">Energi Rendah: 4 Gaya Terpisah</text>
      <rect x="50" y="50" width="100" height="40" class="unif-gravity"/>
      <text x="100" y="75" text-anchor="middle" class="unif-label" font-size="10" font-weight="bold">Gravitasi</text>
      <rect x="150" y="50" width="100" height="40" class="unif-weak"/>
      <text x="200" y="75" text-anchor="middle" class="unif-label" font-size="10" font-weight="bold">Lemah</text>
      <rect x="250" y="50" width="100" height="40" class="unif-em"/>
      <text x="300" y="75" text-anchor="middle" class="unif-label" font-size="10" font-weight="bold">EM</text>
      <rect x="350" y="50" width="100" height="40" class="unif-strong"/>
      <text x="400" y="75" text-anchor="middle" class="unif-label" font-size="10" font-weight="bold">Kuat</text>
      <!-- Arrow down -->
      <line x1="300" y1="100" x2="300" y2="150" class="unif-energy" stroke-width="2" marker-end="url(#arrow-unif)"/>
      <!-- Electroweak unification -->
      <text x="100" y="170" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">~100 GeV</text>
      <rect x="50" y="180" width="200" height="50" class="unif-unified"/>
      <text x="150" y="205" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">Elektrolemah</text>
      <text x="150" y="220" text-anchor="middle" class="unif-label" font-size="9">(Terbukti)</text>
      <rect x="250" y="180" width="100" height="50" class="unif-strong"/>
      <text x="300" y="205" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">Kuat</text>
      <rect x="350" y="180" width="100" height="50" class="unif-gravity"/>
      <text x="400" y="205" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">Gravitasi</text>
      <!-- Arrow down -->
      <line x1="300" y1="240" x2="300" y2="280" class="unif-energy" stroke-width="2" marker-end="url(#arrow-unif)"/>
      <!-- GUT -->
      <text x="300" y="300" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">~10¹⁶ GeV (GUT)</text>
      <rect x="50" y="310" width="500" height="30" class="unif-unified"/>
      <text x="300" y="330" text-anchor="middle" class="unif-label" font-size="11" font-weight="bold">GUT: EM + Lemah + Kuat</text>
      <text x="300" y="345" text-anchor="middle" class="unif-label" font-size="9">(Hipotetis)</text>
      <defs>
        <marker id="arrow-unif" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#95a5a6"/>
        </marker>
      </defs>
    </svg>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Pada energi tinggi, gaya-gaya fundamental menyatu menjadi satu gaya</em>
  </p>
</div>

---

## 6. Aplikasi dan Fenomena

### 6.1 Gravitasi

- **Astronomi:** Orbit planet, gerak bintang, struktur galaksi
- **Kosmologi:** Ekspansi alam semesta, Big Bang
- **Teknologi:** GPS (memerlukan koreksi relativitas), detektor gelombang gravitasi

<div class="applications-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .applications-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .applications-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .applications-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .applications-viz h4 {
          color: #f3f4f6 !important;
        }
        .app-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .app-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 10px;
          background: #f9fafb;
        }
        html.dark .app-item {
          border-color: #374151;
          background: #1f2937;
        }
        .app-title {
          font-weight: bold;
          font-size: 12px;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        html.dark .app-title {
          color: #f3f4f6;
        }
        .app-desc {
          font-size: 10px;
          color: #6b7280;
        }
        html.dark .app-desc {
          color: #9ca3af;
        }
        @media (max-width: 600px) {
          .app-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Aplikasi Praktis 4 Gaya Fundamental</h4>
  <div class="app-grid">
    <div class="app-item">
      <div class="app-title">🌍 Gravitasi</div>
      <div class="app-desc">• Orbit satelit & GPS<br>• Navigasi ruang angkasa<br>• Detektor gelombang gravitasi<br>• Prediksi pasang surut</div>
    </div>
    <div class="app-item">
      <div class="app-title">⚡ Elektromagnetik</div>
      <div class="app-desc">• Listrik & elektronik<br>• Komunikasi (WiFi, radio)<br>• Laser & optik<br>• MRI & medical imaging</div>
    </div>
    <div class="app-item">
      <div class="app-title">💥 Nuklir Kuat</div>
      <div class="app-desc">• Reaktor nuklir (fisi)<br>• Fusi nuklir (bintang)<br>• Accelerator partikel<br>• Radioterapi kanker</div>
    </div>
    <div class="app-item">
      <div class="app-title">🔬 Nuklir Lemah</div>
      <div class="app-desc">• Carbon dating<br>• Medical imaging (PET scan)<br>• Detektor neutrino<br>• Reaktor nuklir</div>
    </div>
  </div>
</div>

### 6.2 Elektromagnetik

- **Listrik:** Generator, motor, sirkuit elektronik
- **Optik:** Laser, fiber optic, spektroskopi
- **Komunikasi:** Radio, TV, WiFi, Bluetooth

### 6.3 Nuklir Kuat

- **Energi Nuklir:** Fisi dan fusi nuklir
- **Fisika Partikel:** Accelerator, detektor partikel
- **Astrofisika:** Reaksi nuklir di bintang

### 6.4 Nuklir Lemah

- **Peluruhan Radioaktif:** Carbon dating, medical imaging
- **Fisi Nuklir:** Reaktor nuklir
- **Astrofisika:** Proses di bintang, supernova

---

## 7. Rumus-Rumus Penting

### 7.1 Gravitasi

**Hukum Gravitasi Universal Newton:**
$$F_g = G \frac{m_1 m_2}{r^2}$$

**Penjelasan:** Gaya gravitasi antara dua benda sebanding dengan hasil kali massanya dan berbanding terbalik dengan kuadrat jaraknya. Ini adalah hukum invers square yang fundamental dalam fisika.

**Medan Gravitasi:**
$$g = \frac{GM}{r^2}$$

**Penjelasan:** Medan gravitasi pada suatu titik adalah gaya per satuan massa. Untuk benda bulat, medan ini setara dengan percepatan gravitasi di permukaan atau pada jarak tertentu.

**Kecepatan Lepas:**
$$v_{esc} = \sqrt{\frac{2GM}{r}}$$

**Penjelasan:** Kecepatan minimum yang diperlukan untuk lepas dari medan gravitasi. Diperoleh dengan menyamakan energi kinetik dengan energi potensial gravitasi: $\frac{1}{2}mv^2 = G\frac{Mm}{r}$.

**Radius Schwarzschild:**
$$r_s = \frac{2GM}{c^2}$$

**Penjelasan:** Radius horizon event dari lubang hitam non-rotating. Pada radius ini, kecepatan lepas sama dengan kecepatan cahaya. Benda yang lebih kecil dari radius ini akan menjadi lubang hitam.

**Dilatasi Waktu Gravitasi:**
$$\Delta t = \Delta t_0 \sqrt{1 - \frac{r_s}{r}}$$

**Penjelasan:** Waktu berjalan lebih lambat di medan gravitasi kuat. Faktor $\sqrt{1 - r_s/r}$ menunjukkan bahwa semakin dekat ke horizon event ($r \to r_s$), waktu semakin melambat. Di horizon, waktu berhenti ($\Delta t \to 0$).

### 7.2 Elektromagnetik

**Hukum Coulomb:**
$$F_e = k_e \frac{q_1 q_2}{r^2}$$

**Penjelasan:** Gaya elektrostatik antara dua muatan mengikuti hukum invers square yang sama dengan gravitasi, namun dapat tarik-menarik (muatan berbeda) atau tolak-menolak (muatan sama).

**Medan Listrik:**
$$E = k_e \frac{Q}{r^2}$$

**Penjelasan:** Medan listrik adalah gaya per satuan muatan. Medan ini menunjukkan arah dan besar gaya yang akan dialami muatan uji positif di titik tersebut.

**Energi Potensial Listrik:**
$$U = k_e \frac{q_1 q_2}{r}$$

**Penjelasan:** Energi potensial listrik adalah energi yang tersimpan dalam konfigurasi muatan. Untuk muatan berbeda tanda, energi negatif (sistem terikat). Untuk muatan sama, energi positif (sistem tidak terikat).

**Gaya Lorentz:**
$$\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$$

**Penjelasan:** Gaya total pada partikel bermuatan dalam medan elektromagnetik. Suku pertama adalah gaya listrik (sejajar dengan medan), suku kedua adalah gaya magnetik (tegak lurus dengan kecepatan dan medan magnet). Cross product $\vec{v} \times \vec{B}$ menunjukkan bahwa gaya magnetik tidak melakukan kerja (selalu tegak lurus kecepatan).

**Kecepatan Gelombang Elektromagnetik:**
$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$

**Penjelasan:** Kecepatan cahaya dalam vakum diturunkan dari persamaan Maxwell. Hubungan ini menunjukkan bahwa cahaya adalah gelombang elektromagnetik yang merambat dengan kecepatan yang ditentukan oleh sifat-sifat ruang hampa ($\mu_0$ dan $\epsilon_0$).

### 7.3 Nuklir Kuat

**Energi Ikat Nuklir:**
$$E_{bind} = \Delta m c^2 = (Zm_p + Nm_n - m_{nucleus})c^2$$

**Penjelasan:** Energi ikat adalah energi yang diperlukan untuk memisahkan nukleon dari inti. Dihitung dari defek massa (mass defect) $\Delta m$ dikalikan $c^2$ (relasi Einstein). Defek massa adalah selisih antara massa total nukleon bebas ($Zm_p + Nm_n$) dengan massa inti aktual. Semakin besar defek massa, semakin stabil inti tersebut.

**Potensial Yukawa:**
$$V(r) = -g^2 \frac{e^{-mr}}{r}$$

**Penjelasan:** Potensial untuk gaya nuklir yang memiliki jangkauan terbatas. Faktor $e^{-mr}$ (exponential decay) menunjukkan bahwa gaya ini menurun sangat cepat dengan jarak, berbeda dengan gaya elektromagnetik atau gravitasi yang mengikuti $1/r$. Parameter $m$ terkait dengan massa partikel pembawa (pion untuk gaya nuklir residual). Faktor $-g^2$ menunjukkan gaya tarik-menarik.

### 7.4 Nuklir Lemah

**Massa Boson W:**
$$m_W = \frac{1}{2} g v$$

**Penjelasan:** Massa boson W diperoleh dari mekanisme Higgs. Konstanta koppel $g$ adalah konstanta koppel weak interaction, dan $v$ adalah vacuum expectation value dari medan Higgs. Faktor $\frac{1}{2}$ muncul dari normalisasi grup $SU(2)_L$.

**Massa Boson Z:**
$$m_Z = \frac{1}{2} \sqrt{g^2 + g'^2} v$$

**Penjelasan:** Massa boson Z lebih kompleks karena merupakan mixing dari boson $W^3$ dan $B$ melalui mekanisme Higgs. Akar kuadrat $\sqrt{g^2 + g'^2}$ menggambarkan mixing angle Weinberg $\theta_W$ yang menghubungkan konstanta koppel weak ($g$) dan hypercharge ($g'$). Hubungan: $\tan \theta_W = g'/g$.

**Vacuum Expectation Value Higgs:**
$$v = 246 \text{ GeV}$$

**Penjelasan:** Nilai ekspektasi vakum dari medan Higgs menentukan skala massa semua partikel elementer (kecuali foton dan gluon yang tidak bermassa). Semakin besar $v$, semakin besar massa partikel yang diperoleh melalui mekanisme Higgs.

---

## 8. Konstanta Fundamental

| Konstanta           | Simbol       | Nilai                   | Satuan     |
| ------------------- | ------------ | ----------------------- | ---------- |
| Kecepatan cahaya    | $c$          | $2.998 \times 10^8$     | m/s        |
| Konstanta gravitasi | $G$          | $6.674 \times 10^{-11}$ | m³/(kg·s²) |
| Konstanta Planck    | $h$          | $6.626 \times 10^{-34}$ | J·s        |
| Muatan elementer    | $e$          | $1.602 \times 10^{-19}$ | C          |
| Permitivitas vakum  | $\epsilon_0$ | $8.854 \times 10^{-12}$ | C²/(N·m²)  |
| Permeabilitas vakum | $\mu_0$      | $4\pi \times 10^{-7}$   | T·m/A      |
| Massa proton        | $m_p$        | $1.673 \times 10^{-27}$ | kg         |
| Massa neutron       | $m_n$        | $1.675 \times 10^{-27}$ | kg         |
| Massa elektron      | $m_e$        | $9.109 \times 10^{-31}$ | kg         |

---

## Referensi dan Bacaan Lanjutan

1. **Gravitasi:**
   - "The Principia" - Isaac Newton
   - "Relativity: The Special and General Theory" - Albert Einstein
   - "A Brief History of Time" - Stephen Hawking

2. **Elektromagnetik:**
   - "Introduction to Electrodynamics" - David J. Griffiths
   - "Classical Electrodynamics" - John David Jackson

3. **Fisika Partikel:**
   - "Introduction to Elementary Particles" - David Griffiths
   - "Quantum Field Theory" - Mark Srednicki

4. **Unifikasi:**
   - "The Elegant Universe" - Brian Greene
   - "The Road to Reality" - Roger Penrose
