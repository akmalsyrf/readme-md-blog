---
title: 'Metode Statistika: Cheatsheet Komprehensif'
description: 'Panduan lengkap metode statistika dari dasar hingga inferensia, termasuk sebaran normal, pendugaan parameter, uji hipotesis, dan analisis regresi'
pubDate: 2026-01-24
author: 'Akmal'
category: 'Matematika'
tags: ['math', 'statistic', 'probability', 'inference']
---

Cheatsheet lengkap untuk memahami metode statistika dari konsep dasar hingga aplikasi inferensia.

## Prerequisite

### Integral

**Konsep:** Integral digunakan untuk menghitung luas di bawah kurva, yang penting dalam menghitung peluang untuk peubah acak kontinu.

**Rumus Dasar:**

- Integral tak tentu: $\int f(x) dx = F(x) + C$
- Integral tentu: $\int\_a^b f(x) dx = F(b) - F(a)$
- Integral untuk peluang: $P(a \leq X \leq b) = \int\_a^b f(x) dx$ dimana $f(x)$ adalah fungsi kepekatan peluang

**Contoh:**
Untuk menghitung peluang peubah acak kontinu $X$ antara 2 dan 5:
$$P(2 \leq X \leq 5) = \int\_2^5 f(x) dx$$

### Peluang (Probability)

**Konsep:** Peluang mengukur kemungkinan terjadinya suatu kejadian, dengan nilai antara 0 (mustahil) dan 1 (pasti).

**Aksioma Peluang:**

1. $P(A) \geq 0$ untuk setiap kejadian $A$
2. $P(S) = 1$ dimana $S$ adalah ruang contoh
3. Untuk kejadian saling lepas: $P(A \cup B) = P(A) + P(B)$

**Contoh:**
Peluang munculnya angka genap pada pelemparan dadu:
$$P(\text{genap}) = P(2) + P(4) + P(6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$$

### Aturan Sturges (Untuk Penyajian Data Numerik)

**Konsep:** Aturan untuk menentukan banyaknya kelas interval dalam histogram atau tabel distribusi frekuensi.

**Rumus:**
$$k = 1 + 3.322 \log\_{10}(n)$$

dimana:

- $k$ = banyaknya kelas
- $n$ = banyaknya data

**Contoh:**
Jika memiliki 100 data:
$$k = 1 + 3.322 \log\_{10}(100) = 1 + 3.322 \times 2 = 7.644 \approx 8 \text{ kelas}$$

**Panjang Kelas:**
$$\text{Panjang kelas} = \frac{\text{Range}}{k} = \frac{X\_{\max} - X\_{\min}}{k}$$

## Sebaran Normal

### Sebaran Normal Baku (Standard Normal Distribution)

**Konsep:** Sebaran normal dengan rata-rata $\mu = 0$ dan simpangan baku $\sigma = 1$. Dilambangkan dengan $Z \sim N(0, 1)$.

**Fungsi Kepekatan Peluang:**
$$f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$$

**Transformasi ke Normal Baku:**
$$Z = \frac{X - \mu}{\sigma}$$

dimana:

- $X$ = peubah acak normal dengan $\mu$ dan $\sigma$
- $Z$ = peubah acak normal baku

**Contoh:**
Jika $X \sim N(100, 15^2)$, untuk mengubah $X = 115$ ke normal baku:
$$Z = \frac{115 - 100}{15} = \frac{15}{15} = 1$$

### Tabel Normal Baku (Nilai Peluang Z)

**Konsep:** Tabel yang memberikan nilai peluang kumulatif $P(Z \leq z)$ untuk berbagai nilai $z$.

**Cara Membaca:**

- Baris menunjukkan digit pertama dan kedua setelah koma
- Kolom menunjukkan digit ketiga setelah koma
- Nilai di dalam tabel adalah $P(Z \leq z)$

**Contoh:**

- $P(Z \leq 1.96) = 0.9750$ (dari tabel)
- $P(Z \leq -1.96) = 0.0250$ (menggunakan simetri: $1 - 0.9750$)

### Peluang Sebaran Normal

**Konsep:** Menghitung peluang untuk sebaran normal menggunakan integral atau tabel normal baku.

**Rumus Umum:**
$$P(a \leq X \leq b) = P\left(\frac{a-\mu}{\sigma} \leq Z \leq \frac{b-\mu}{\sigma}\right)$$

**Langkah-langkah:**

1. Transformasi: $Z = \frac{X - \mu}{\sigma}$
2. Gunakan tabel normal baku
3. Hitung peluang dengan sifat: $P(a \leq Z \leq b) = P(Z \leq b) - P(Z \leq a)$

**Contoh:**
Jika $X \sim N(50, 10^2)$, hitung $P(45 \leq X \leq 60)$:

1. Transformasi:
   - $Z\_1 = \frac{45-50}{10} = -0.5$
   - $Z\_2 = \frac{60-50}{10} = 1.0$

2. Dari tabel:
   - $P(Z \leq -0.5) = 0.3085$
   - $P(Z \leq 1.0) = 0.8413$

3. Peluang:
   $$P(45 \leq X \leq 60) = P(-0.5 \leq Z \leq 1.0) = 0.8413 - 0.3085 = 0.5328$$

<div class="z-transform-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .z-transform-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .z-transform-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .z-transform-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .z-transform-viz h4 {
          color: #f3f4f6 !important;
        }
        .zt-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        @media (min-width: 640px) {
          .zt-container {
            flex-direction: row;
            justify-content: center;
            gap: 30px;
          }
        }
        .zt-curve {
          text-align: center;
        }
        .zt-curve-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        html.dark .zt-curve-title {
          color: #f3f4f6;
        }
        .zt-arrow {
          font-size: 2rem;
          color: #e74c3c;
          font-weight: bold;
        }
        html.dark .zt-arrow {
          color: #f87171;
        }
        .zt-formula {
          text-align: center;
          padding: 10px 15px;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #2c3e50;
        }
        html.dark .zt-formula {
          background: #111827;
          color: #f3f4f6;
        }
        .zt-svg {
          width: 140px;
          height: 100px;
        }
        .zt-curve-path {
          fill: rgba(52, 152, 219, 0.2);
          stroke: #3498db;
          stroke-width: 2;
        }
        html.dark .zt-curve-path {
          fill: rgba(96, 165, 250, 0.2);
          stroke: #60a5fa;
        }
        .zt-label {
          font-size: 0.65rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .zt-label {
          fill: #f3f4f6;
        }
        @media (min-width: 640px) {
          .z-transform-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Transformasi ke Normal Baku (Z-Score)</h4>

<div class="zt-container">
    <div class="zt-curve">
      <div class="zt-curve-title">X ~ N(μ, σ²)</div>
      <svg class="zt-svg" viewBox="0 0 140 100">
        <path d="M 5 78 C 15 78, 25 76, 35 70 C 45 62, 55 40, 70 20 C 85 40, 95 62, 105 70 C 115 76, 125 78, 135 78 L 135 80 L 5 80 Z" class="zt-curve-path"/>
        <text x="70" y="95" class="zt-label">μ = 50</text>
      </svg>
    </div>
    <div class="zt-arrow">→</div>
    <div class="zt-formula">
      <div><strong>Z = (X - μ) / σ</strong></div>
    </div>
    <div class="zt-arrow">→</div>
    <div class="zt-curve">
      <div class="zt-curve-title">Z ~ N(0, 1)</div>
      <svg class="zt-svg" viewBox="0 0 140 100">
        <path d="M 5 78 C 15 78, 25 76, 35 70 C 45 62, 55 40, 70 20 C 85 40, 95 62, 105 70 C 115 76, 125 78, 135 78 L 135 80 L 5 80 Z" class="zt-curve-path"/>
        <text x="70" y="95" class="zt-label">μ = 0, σ = 1</text>
      </svg>
    </div>
  </div>
</div>

### Nilai Kritis dari Sebaran Normal

**Konsep:** Nilai $z_\alpha$ yang memenuhi $P(Z > z_\alpha) = \alpha$ atau $P(Z \leq z_\alpha) = 1 - \alpha$.

**Notasi:**

- $z_\alpha$ = nilai kritis untuk peluang $\alpha$ di ekor kanan
- $z\_{1-\alpha}$ = nilai kritis untuk peluang $\alpha$ di ekor kiri

**Nilai Kritis Umum:**

- $z\_{0.05} = 1.645$ (untuk $\alpha = 0.05$ ekor kanan)
- $z\_{0.025} = 1.96$ (untuk $\alpha = 0.025$ ekor kanan, atau $\alpha = 0.05$ dua ekor)
- $z\_{0.01} = 2.326$ (untuk $\alpha = 0.01$ ekor kanan)
- $z\_{0.005} = 2.576$ (untuk $\alpha = 0.005$ ekor kanan, atau $\alpha = 0.01$ dua ekor)

**Contoh:**
Untuk uji hipotesis dua ekor dengan $\alpha = 0.05$:

- Daerah penolakan: $Z < -1.96$ atau $Z > 1.96$
- Daerah penerimaan: $-1.96 \leq Z \leq 1.96$

## Pengantar Pendugaan Parameter

### Populasi (p) vs Sampel (p̂)

**Konsep:**

- **Populasi:** Seluruh objek yang menjadi perhatian penelitian. Parameter populasi dilambangkan dengan huruf Yunani (misal: $\mu$, $\sigma$, $p$).
- **Sampel:** Bagian dari populasi yang diambil untuk dianalisis. Statistik sampel dilambangkan dengan huruf Latin (misal: $\bar{x}$, $s$, $\hat{p}$).

**Contoh:**

- Populasi: Semua mahasiswa di universitas (parameter: $\mu$ = rata-rata tinggi badan)
- Sampel: 100 mahasiswa yang diukur (statistik: $\bar{x}$ = rata-rata tinggi badan sampel)

<div class="population-sample-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .population-sample-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .population-sample-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .population-sample-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .population-sample-viz h4 {
          color: #f3f4f6 !important;
        }
        .ps-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 15px;
        }
        @media (min-width: 640px) {
          .ps-container {
            flex-direction: row;
            justify-content: center;
          }
        }
        .ps-box {
          text-align: center;
          padding: 15px;
          border-radius: 12px;
          min-width: 140px;
        }
        .ps-population {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .ps-sample {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
        }
        html.dark .ps-population {
          background: linear-gradient(135deg, #4c5cd4 0%, #5c3d8b 100%);
        }
        html.dark .ps-sample {
          background: linear-gradient(135deg, #0d7d74 0%, #2bc462 100%);
        }
        .ps-icon {
          font-size: 2rem;
          margin-bottom: 8px;
        }
        .ps-title {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 5px;
        }
        .ps-symbol {
          font-size: 0.875rem;
          opacity: 0.9;
        }
        .ps-arrow {
          font-size: 2rem;
          color: #666;
        }
        html.dark .ps-arrow {
          color: #9ca3af;
        }
        .ps-desc {
          font-size: 0.75rem;
          color: #495057;
          text-align: center;
          max-width: 400px;
          margin-top: 15px;
        }
        html.dark .ps-desc {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .population-sample-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Populasi vs Sampel</h4>

<div class="ps-container">
    <div class="ps-box ps-population">
      <div class="ps-icon">👥</div>
      <div class="ps-title">POPULASI</div>
      <div class="ps-symbol">N = seluruh anggota</div>
      <div class="ps-symbol">Parameter: μ, σ², p</div>
    </div>
    <div class="ps-arrow">→</div>
    <div class="ps-box ps-sample">
      <div class="ps-icon">👤</div>
      <div class="ps-title">SAMPEL</div>
      <div class="ps-symbol">n = sebagian anggota</div>
      <div class="ps-symbol">Statistik: x̄, s², p̂</div>
    </div>
  </div>
  
  <div class="ps-desc">
    <strong>Inferensia:</strong> Menggunakan statistik sampel untuk menduga parameter populasi
  </div>
</div>

### Variabel (Peubah) vs Parameter (Penduga) vs Statistik

**Konsep:**

- **Peubah (Variable):** Karakteristik yang diukur dari setiap anggota populasi atau sampel (misal: tinggi badan, berat badan).
- **Parameter:** Nilai numerik yang menggambarkan karakteristik populasi (misal: $\mu$, $\sigma^2$, $p$).
- **Statistik:** Nilai numerik yang dihitung dari sampel untuk menduga parameter (misal: $\bar{x}$, $s^2$, $\hat{p}$).

**Tabel Perbandingan:**

| Konsep         | Populasi               | Sampel                |
| -------------- | ---------------------- | --------------------- |
| Rata-rata      | $\mu$ (parameter)      | $\bar{x}$ (statistik) |
| Ragam          | $\sigma^2$ (parameter) | $s^2$ (statistik)     |
| Proporsi       | $p$ (parameter)        | $\hat{p}$ (statistik) |
| Simpangan Baku | $\sigma$ (parameter)   | $s$ (statistik)       |

### Sifat Penduga Titik

**Konsep:** Karakteristik yang diharapkan dari penduga yang baik.

**1. Tidak Bias (Unbiased)**
Penduga $\hat{\theta}$ dikatakan tidak bias jika:
$$E(\hat{\theta}) = \theta$$

**Contoh:**

- $\bar{X}$ adalah penduga tidak bias untuk $\mu$: $E(\bar{X}) = \mu$
- $S^2$ adalah penduga tidak bias untuk $\sigma^2$: $E(S^2) = \sigma^2$

**2. Efisien**
Penduga dengan ragam terkecil di antara semua penduga tidak bias.

**3. Konsisten**
Penduga yang semakin mendekati parameter sebenarnya ketika ukuran sampel meningkat:
$$\lim\_{n \to \infty} P(|\hat{\theta} - \theta| < \epsilon) = 1$$

**4. Cukup (Sufficient)**
Penduga yang memuat semua informasi tentang parameter dari sampel.

## Penduga Selang

### Penduga Selang (Selang Kepercayaan)

**Konsep:** Interval yang diharapkan memuat parameter populasi dengan tingkat kepercayaan tertentu.

**Rumus Umum:**
$$\text{Penduga titik} \pm \text{Margin of error}$$

**Tingkat Kepercayaan:** Peluang bahwa selang kepercayaan memuat parameter sebenarnya (biasanya 90%, 95%, atau 99%).

**Interpretasi:**
Jika kita membuat 100 selang kepercayaan 95%, maka sekitar 95 di antaranya akan memuat parameter sebenarnya.

<div class="ci-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .ci-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .ci-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .ci-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .ci-viz h4 {
          color: #f3f4f6 !important;
        }
        .ci-svg-container {
          width: 100%;
          height: 180px;
        }
        .ci-svg {
          width: 100%;
          height: 100%;
        }
        .ci-line {
          stroke: #3498db;
          stroke-width: 3;
        }
        .ci-line-miss {
          stroke: #e74c3c;
          stroke-width: 3;
        }
        html.dark .ci-line {
          stroke: #60a5fa;
        }
        html.dark .ci-line-miss {
          stroke: #f87171;
        }
        .ci-dot {
          fill: #2c3e50;
        }
        html.dark .ci-dot {
          fill: #f3f4f6;
        }
        .ci-true-line {
          stroke: #27ae60;
          stroke-width: 2;
          stroke-dasharray: 5,5;
        }
        html.dark .ci-true-line {
          stroke: #4ade80;
        }
        .ci-label {
          font-size: 0.7rem;
          fill: #2c3e50;
        }
        html.dark .ci-label {
          fill: #f3f4f6;
        }
        .ci-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
          font-size: 0.75rem;
        }
        .ci-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .ci-legend-item {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .ci-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Visualisasi Selang Kepercayaan 95%</h4>

<div class="ci-svg-container">
    <svg class="ci-svg" viewBox="0 0 350 180">
      <line x1="175" y1="10" x2="175" y2="170" class="ci-true-line"/>
      <text x="178" y="20" class="ci-label">μ (parameter sebenarnya)</text>
      <line x1="80" y1="30" x2="270" y2="30" class="ci-line"/>
      <circle cx="175" cy="30" r="3" class="ci-dot"/>
      <line x1="100" y1="50" x2="250" y2="50" class="ci-line"/>
      <circle cx="175" cy="50" r="3" class="ci-dot"/>
      <line x1="120" y1="70" x2="280" y2="70" class="ci-line"/>
      <circle cx="200" cy="70" r="3" class="ci-dot"/>
      <line x1="60" y1="90" x2="230" y2="90" class="ci-line"/>
      <circle cx="145" cy="90" r="3" class="ci-dot"/>
      <line x1="190" y1="110" x2="320" y2="110" class="ci-line-miss"/>
      <circle cx="255" cy="110" r="3" class="ci-dot"/>
      <line x1="90" y1="130" x2="260" y2="130" class="ci-line"/>
      <circle cx="175" cy="130" r="3" class="ci-dot"/>
      <line x1="110" y1="150" x2="240" y2="150" class="ci-line"/>
      <circle cx="175" cy="150" r="3" class="ci-dot"/>
      <text x="10" y="35" class="ci-label">Sampel 1</text>
      <text x="10" y="55" class="ci-label">Sampel 2</text>
      <text x="10" y="75" class="ci-label">Sampel 3</text>
      <text x="10" y="95" class="ci-label">Sampel 4</text>
      <text x="10" y="115" class="ci-label" style="fill: #e74c3c;">Sampel 5</text>
      <text x="10" y="135" class="ci-label">Sampel 6</text>
      <text x="10" y="155" class="ci-label">Sampel 7</text>
    </svg>
  </div>
  
  <div class="ci-legend">
    <div class="ci-legend-item">
      <span style="color: #3498db;">━━</span> Selang memuat μ
    </div>
    <div class="ci-legend-item">
      <span style="color: #e74c3c;">━━</span> Selang tidak memuat μ
    </div>
    <div class="ci-legend-item">
      <span style="color: #27ae60;">┆┆</span> Parameter sebenarnya (μ)
    </div>
  </div>
</div>

### Margin of Error

**Konsep:** Setengah dari lebar selang kepercayaan, menunjukkan ketidakpastian dalam pendugaan.

**Rumus:**
$$\text{Margin of error} = z\_{\alpha/2} \times \frac{\sigma}{\sqrt{n}}$$

atau untuk ragam tidak diketahui:
$$\text{Margin of error} = t\_{\alpha/2, n-1} \times \frac{s}{\sqrt{n}}$$

**Faktor yang Mempengaruhi:**

1. Tingkat kepercayaan (semakin tinggi, semakin besar margin of error)
2. Simpangan baku populasi (semakin besar, semakin besar margin of error)
3. Ukuran sampel (semakin besar, semakin kecil margin of error)

**Contoh:**
Untuk $\bar{x} = 50$, $s = 10$, $n = 100$, tingkat kepercayaan 95%:

- $z\_{0.025} = 1.96$
- Margin of error = $1.96 \times \frac{10}{\sqrt{100}} = 1.96 \times 1 = 1.96$
- Selang kepercayaan: $50 \pm 1.96$ atau $(48.04, 51.96)$

### Contoh Kasus Selang Kepercayaan

**Contoh 1: Rata-rata Populasi (Ragam Diketahui)**
Sebuah pabrik ingin menduga rata-rata berat produk. Dari sampel 50 produk, diperoleh $\bar{x} = 250$ gram. Diketahui $\sigma = 20$ gram. Buat selang kepercayaan 95% untuk $\mu$.

**Penyelesaian:**

- $n = 50$, $\bar{x} = 250$, $\sigma = 20$, $\alpha = 0.05$
- $z\_{0.025} = 1.96$
- Margin of error = $1.96 \times \frac{20}{\sqrt{50}} = 1.96 \times 2.828 = 5.54$
- Selang kepercayaan: $250 \pm 5.54$ atau $(244.46, 255.54)$

**Interpretasi:** Dengan tingkat kepercayaan 95%, kita yakin bahwa rata-rata berat produk populasi berada antara 244.46 dan 255.54 gram.

---

## Statistika

### Statistika Deskriptif vs Statistika Inferensia

**Statistika Deskriptif:**

- Menggambarkan dan meringkas data yang dikumpulkan
- Tidak membuat kesimpulan tentang populasi
- Contoh: menghitung rata-rata, median, membuat grafik

**Statistika Inferensia:**

- Menarik kesimpulan tentang populasi berdasarkan sampel
- Melibatkan pendugaan parameter dan uji hipotesis
- Contoh: selang kepercayaan, uji hipotesis, analisis regresi

**Perbandingan:**

| Aspek          | Deskriptif                      | Inferensia                     |
| -------------- | ------------------------------- | ------------------------------ |
| Tujuan         | Menggambarkan data              | Menarik kesimpulan             |
| Cakupan        | Hanya data yang ada             | Populasi yang lebih luas       |
| Metode         | Grafik, tabel, ukuran ringkasan | Pendugaan, uji hipotesis       |
| Ketidakpastian | Tidak ada                       | Ada (margin of error, p-value) |

### Skala Pengukuran Peubah

**Konsep:** Klasifikasi peubah berdasarkan sifat dan operasi matematika yang dapat dilakukan.

**1. Kategorik (Categorical)**

- **Nominal:** Kategori tanpa urutan (contoh: jenis kelamin, warna, agama)
  - Operasi: hanya menghitung frekuensi
  - Contoh: Laki-laki, Perempuan
- **Ordinal:** Kategori dengan urutan (contoh: tingkat pendidikan, rating)
  - Operasi: menghitung frekuensi, median
  - Contoh: SD, SMP, SMA, S1, S2

**2. Numerik (Numerical)**

- **Interval:** Memiliki urutan dan jarak yang sama, tetapi tidak ada nol mutlak (contoh: suhu dalam Celsius)
  - Operasi: penjumlahan, pengurangan, mean
  - Contoh: Suhu 20°C vs 30°C (beda 10°C, tapi 0°C bukan "tidak ada suhu")
- **Rasio:** Memiliki semua sifat interval + ada nol mutlak (contoh: berat, tinggi, pendapatan)
  - Operasi: semua operasi matematika termasuk perkalian dan pembagian
  - Contoh: Berat 0 kg berarti tidak ada berat, berat 100 kg adalah 2× dari 50 kg

<div class="scale-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .scale-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .scale-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .scale-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .scale-viz h4 {
          color: #f3f4f6 !important;
        }
        .scale-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .scale-item {
          padding: 12px;
          border-radius: 8px;
          text-align: center;
        }
        .scale-nominal {
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        }
        .scale-ordinal {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }
        .scale-interval {
          background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
        }
        .scale-rasio {
          background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
        }
        html.dark .scale-nominal {
          background: linear-gradient(135deg, #be123c 0%, #9d174d 100%);
        }
        html.dark .scale-ordinal {
          background: linear-gradient(135deg, #c2410c 0%, #b45309 100%);
        }
        html.dark .scale-interval {
          background: linear-gradient(135deg, #1d4ed8 0%, #0369a1 100%);
        }
        html.dark .scale-rasio {
          background: linear-gradient(135deg, #047857 0%, #0d9488 100%);
        }
        .scale-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        html.dark .scale-title {
          color: #f3f4f6;
        }
        .scale-type {
          font-size: 0.7rem;
          color: #495057;
          font-weight: 600;
          margin-bottom: 3px;
        }
        html.dark .scale-type {
          color: #e5e7eb;
        }
        .scale-example {
          font-size: 0.7rem;
          color: #666;
        }
        html.dark .scale-example {
          color: #d1d5db;
        }
        .scale-category {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: #2c3e50;
          margin-top: 10px;
          padding: 5px;
          background: #f8f9fa;
          border-radius: 4px;
        }
        html.dark .scale-category {
          color: #f3f4f6;
          background: #111827;
        }
        @media (min-width: 640px) {
          .scale-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
          .scale-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Hierarki Skala Pengukuran</h4>

<div class="scale-grid">
    <div class="scale-item scale-nominal">
      <div class="scale-title">NOMINAL</div>
      <div class="scale-type">Kategorik</div>
      <div class="scale-example">Warna, Agama</div>
    </div>
    <div class="scale-item scale-ordinal">
      <div class="scale-title">ORDINAL</div>
      <div class="scale-type">Kategorik</div>
      <div class="scale-example">Rating, Pendidikan</div>
    </div>
    <div class="scale-item scale-interval">
      <div class="scale-title">INTERVAL</div>
      <div class="scale-type">Numerik</div>
      <div class="scale-example">Suhu °C, Tahun</div>
    </div>
    <div class="scale-item scale-rasio">
      <div class="scale-title">RASIO</div>
      <div class="scale-type">Numerik</div>
      <div class="scale-example">Berat, Tinggi</div>
    </div>
  </div>
  
  <div class="scale-category">
    ← Kualitatif | Kuantitatif →
  </div>
</div>

### Peubah vs Data

**Peubah (Variable):** Karakteristik yang diukur dari setiap anggota populasi atau sampel.

**Data:** Hasil pengukuran atau pengamatan dari peubah.

**Contoh:**

- Peubah: Tinggi badan
- Data: 170 cm, 165 cm, 175 cm, 180 cm, ...

### Pengumpulan Data

**1. Eksperimen (Experiment)**

- Peneliti mengontrol kondisi dan memanipulasi variabel
- Dapat menentukan hubungan sebab-akibat
- Contoh: uji coba obat baru dengan kelompok kontrol dan perlakuan

**2. Survei (Survey)**

- Mengumpulkan data dari responden melalui kuesioner atau wawancara
- Tidak memanipulasi variabel
- Contoh: survei kepuasan pelanggan, survei pendapat publik

**3. Administratif (Administrative)**

- Data yang dikumpulkan untuk keperluan administrasi atau operasional
- Bukan untuk tujuan penelitian
- Contoh: data penjualan, data absensi, data transaksi bank

### Big Data

**Konsep:** Data dalam volume besar yang memerlukan teknologi khusus untuk pengolahan.

**3V Big Data:**

1. **Volume:** Jumlah data yang sangat besar
   - Contoh: jutaan transaksi per hari, terabyte hingga petabyte data

2. **Variety:** Beragam jenis dan format data
   - Contoh: teks, gambar, video, audio, data terstruktur dan tidak terstruktur

3. **Velocity:** Kecepatan data masuk dan perlu diproses
   - Contoh: data real-time dari sensor, streaming data, update setiap detik

## Statistika Deskriptif

### Penyajian Data Kategorik

**1. Tabel Frekuensi**

**Tabel Frekuensi Mutlak:**
Menampilkan jumlah kejadian untuk setiap kategori.

| Kategori  | Frekuensi |
| --------- | --------- |
| Laki-laki | 45        |
| Perempuan | 55        |
| **Total** | **100**   |

**Tabel Frekuensi Relatif:**
Menampilkan proporsi atau persentase.

| Kategori  | Frekuensi | Frekuensi Relatif | Persentase |
| --------- | --------- | ----------------- | ---------- |
| Laki-laki | 45        | 0.45              | 45%        |
| Perempuan | 55        | 0.55              | 55%        |
| **Total** | **100**   | **1.00**          | **100%**   |

**2. Grafik**

**Diagram Batang (Bar Chart):**

- Sumbu X: kategori
- Sumbu Y: frekuensi atau persentase
- Cocok untuk membandingkan kategori

**Diagram Lingkaran (Pie Chart):**

- Menampilkan proporsi setiap kategori
- Total = 100%
- Cocok untuk melihat komposisi

**Contoh:**
Data jenis kelamin: Laki-laki (45), Perempuan (55)

- Diagram batang: batang dengan tinggi 45 dan 55
- Diagram lingkaran: sektor 45% dan 55%

### Penyajian Data Numerik

**1. Tabel Distribusi Frekuensi**

**Langkah-langkah:**

1. Tentukan banyak kelas (gunakan Aturan Sturges)
2. Tentukan panjang kelas
3. Tentukan batas kelas
4. Hitung frekuensi setiap kelas

**Contoh:**
Data tinggi badan (cm): 150, 155, 160, 165, 170, 175, 180, 185, 190

- $n = 9$, maka $k = 1 + 3.322 \log\_{10}(9) \approx 4$
- Range = 190 - 150 = 40
- Panjang kelas = 40/4 = 10

| Kelas   | Frekuensi |
| ------- | --------- |
| 150-159 | 2         |
| 160-169 | 2         |
| 170-179 | 3         |
| 180-189 | 2         |

**2. Grafik**

**Histogram:**

- Sumbu X: interval kelas
- Sumbu Y: frekuensi atau kepadatan
- Batang saling menempel (kontinu)

**Poligon Frekuensi:**

- Garis yang menghubungkan titik tengah setiap kelas
- Titik tengah = (batas bawah + batas atas) / 2

**Ogive (Kurva Frekuensi Kumulatif):**

- Menampilkan frekuensi kumulatif
- Sumbu X: batas atas kelas
- Sumbu Y: frekuensi kumulatif

### Ukuran Peringkasan Data

#### Ukuran Pemusatan

**1. Mean (Rata-rata)**

**Populasi ($\mu$):**
$$\mu = \frac{\sum\_{i=1}^{N} x\_i}{N}$$

**Sampel ($\bar{x}$):**
$$\bar{x} = \frac{\sum\_{i=1}^{n} x\_i}{n}$$

**Contoh:**
Data: 10, 20, 30, 40, 50
$$\bar{x} = \frac{10 + 20 + 30 + 40 + 50}{5} = \frac{150}{5} = 30$$

**Mean Tertimbang:**
$$\bar{x}\_w = \frac{\sum w\_i x\_i}{\sum w\_i}$$

**2. Median**

**Konsep:** Nilai tengah setelah data diurutkan.

**Langkah:**

1. Urutkan data dari terkecil ke terbesar
2. Jika $n$ ganjil: median = nilai ke-$\frac{n+1}{2}$
3. Jika $n$ genap: median = rata-rata nilai ke-$\frac{n}{2}$ dan $\frac{n}{2}+1$

**Contoh:**

- Data ganjil: 10, 20, 30, 40, 50 → Median = 30 (nilai ke-3)
- Data genap: 10, 20, 30, 40 → Median = $\frac{20+30}{2} = 25$

**3. Modus**

**Konsep:** Nilai yang paling sering muncul.

**Contoh:**
Data: 5, 7, 7, 9, 10, 10, 10, 12

- Modus = 10 (muncul 3 kali)

**Catatan:** Data bisa memiliki lebih dari satu modus (bimodal, multimodal) atau tidak ada modus.

#### Ukuran Penyebaran

**1. Kisaran (Range)**

**Rumus:**
$$\text{Range} = X\_{\max} - X\_{\min}$$

**Contoh:**
Data: 10, 20, 30, 40, 50

- Range = 50 - 10 = 40

**2. Inter Quartile Range (IQR)**

**Konsep:** Selisih antara kuartil ketiga dan kuartil pertama.

**Rumus:**
$$\text{IQR} = Q\_3 - Q\_1$$

**Contoh:**
Jika $Q\_1 = 25$ dan $Q\_3 = 75$, maka IQR = 75 - 25 = 50

**3. Ragam (Variance) dan Simpangan Baku (Standard Deviation)**

**Ragam Populasi ($\sigma^2$):**
$$\sigma^2 = \frac{\sum\_{i=1}^{N} (x\_i - \mu)^2}{N}$$

**Ragam Sampel ($s^2$):**
$$s^2 = \frac{\sum\_{i=1}^{n} (x\_i - \bar{x})^2}{n-1}$$

**Simpangan Baku:**

- Populasi: $\sigma = \sqrt{\sigma^2}$
- Sampel: $s = \sqrt{s^2}$

**Contoh:**
Data: 10, 20, 30, 40, 50

- $\bar{x} = 30$
- $(10-30)^2 = 400$, $(20-30)^2 = 100$, $(30-30)^2 = 0$, $(40-30)^2 = 100$, $(50-30)^2 = 400$
- $s^2 = \frac{400 + 100 + 0 + 100 + 400}{5-1} = \frac{1000}{4} = 250$
- $s = \sqrt{250} = 15.81$

**Rumus Alternatif (Lebih Mudah Dihitung):**
$$s^2 = \frac{\sum x\_i^2 - n\bar{x}^2}{n-1}$$

### Kuartil

**Konsep:** Nilai yang membagi data menjadi 4 bagian sama besar.

**Kuartil:**

- $Q\_1$ (Kuartil pertama): 25% data di bawahnya
- $Q\_2$ (Kuartil kedua): Sama dengan median, 50% data di bawahnya
- $Q\_3$ (Kuartil ketiga): 75% data di bawahnya

**Cara Menghitung:**

1. Urutkan data
2. Tentukan posisi kuartil:
   - $Q\_1$: posisi = $\frac{n+1}{4}$
   - $Q\_2$: posisi = $\frac{n+1}{2}$ (median)
   - $Q\_3$: posisi = $\frac{3(n+1)}{4}$

**Contoh:**
Data: 10, 20, 30, 40, 50, 60, 70, 80, 90

- $n = 9$
- $Q\_1$: posisi = $\frac{9+1}{4} = 2.5$ → nilai antara data ke-2 dan ke-3 = $\frac{20+30}{2} = 25$
- $Q\_2$: posisi = $\frac{9+1}{2} = 5$ → data ke-5 = 50
- $Q\_3$: posisi = $\frac{3(9+1)}{4} = 7.5$ → nilai antara data ke-7 dan ke-8 = $\frac{70+80}{2} = 75$

### IQR dan Boxplot

**IQR (Inter Quartile Range):**
$$\text{IQR} = Q\_3 - Q\_1$$

**Boxplot (Diagram Kotak-Garis):**
Menampilkan 5 ringkasan data:

1. Minimum ($X\_{\min}$)
2. $Q\_1$
3. Median ($Q\_2$)
4. $Q\_3$
5. Maximum ($X\_{\max}$)

**Komponen Boxplot:**

- **Kotak:** Dari $Q\_1$ sampai $Q\_3$ (mengandung IQR)
- **Garis di dalam kotak:** Median
- **Whisker (kumis):**
  - Bawah: dari $Q\_1$ sampai $X\_{\min}$ (atau $Q\_1 - 1.5 \times \text{IQR}$ jika ada pencilan)
  - Atas: dari $Q\_3$ sampai $X\_{\max}$ (atau $Q\_3 + 1.5 \times \text{IQR}$ jika ada pencilan)
- **Pencilan (Outlier):** Data di luar $Q\_1 - 1.5 \times \text{IQR}$ atau $Q\_3 + 1.5 \times \text{IQR}$

**Contoh:**
Jika $Q\_1 = 25$, $Q\_3 = 75$, maka:

- IQR = 75 - 25 = 50
- Batas bawah pencilan = 25 - 1.5 × 50 = 25 - 75 = -50
- Batas atas pencilan = 75 + 1.5 × 50 = 75 + 75 = 150
- Data di luar (-50, 150) adalah pencilan

<div class="boxplot-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .boxplot-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .boxplot-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .boxplot-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .boxplot-viz h4 {
          color: #f3f4f6 !important;
        }
        .boxplot-container {
          position: relative;
          width: 100%;
          height: 180px;
          margin: 20px 0;
        }
        .boxplot-svg {
          width: 100%;
          height: 100%;
        }
        .box-rect {
          fill: #3498db;
          opacity: 0.3;
          stroke: #2c3e50;
          stroke-width: 2;
        }
        html.dark .box-rect {
          fill: #60a5fa;
          stroke: #f3f4f6;
        }
        .median-line {
          stroke: #e74c3c;
          stroke-width: 2.5;
        }
        html.dark .median-line {
          stroke: #f87171;
        }
        .whisker-line {
          stroke: #2c3e50;
          stroke-width: 2;
        }
        html.dark .whisker-line {
          stroke: #f3f4f6;
        }
        .outlier-dot {
          fill: #e74c3c;
          stroke: #c0392b;
          stroke-width: 1;
        }
        html.dark .outlier-dot {
          fill: #f87171;
          stroke: #dc2626;
        }
        .boxplot-label {
          font-size: 0.75rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .boxplot-label {
          fill: #f3f4f6 !important;
        }
        .boxplot-annotation {
          font-size: 0.7rem;
          fill: #666;
          text-anchor: middle;
        }
        html.dark .boxplot-annotation {
          fill: #9ca3af !important;
        }
        .legend-boxplot {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 15px;
          font-size: 0.75rem;
        }
        .legend-boxplot-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .legend-boxplot-text {
          color: #495057;
        }
        html.dark .legend-boxplot-text {
          color: #d1d5db !important;
        }
        @media (min-width: 640px) {
          .boxplot-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
          .boxplot-container {
            height: 200px;
          }
          .boxplot-label {
            font-size: 0.8125rem;
          }
          .boxplot-annotation {
            font-size: 0.75rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Anatomi Boxplot (Diagram Kotak-Garis)</h4>

<div class="boxplot-container">
    <svg class="boxplot-svg" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
      <line x1="40" y1="90" x2="360" y2="90" stroke="#ccc" stroke-width="1"/>
      <line x1="80" y1="60" x2="80" y2="120" class="whisker-line"/>
      <line x1="80" y1="90" x2="140" y2="90" class="whisker-line"/>
      <rect x="140" y="60" width="120" height="60" class="box-rect"/>
      <line x1="200" y1="60" x2="200" y2="120" class="median-line"/>
      <line x1="260" y1="90" x2="320" y2="90" class="whisker-line"/>
      <line x1="320" y1="60" x2="320" y2="120" class="whisker-line"/>
      <circle cx="50" r="4" cy="90" class="outlier-dot"/>
      <circle cx="350" cy="90" r="4" class="outlier-dot"/>
      <text x="50" y="145" class="boxplot-label">0</text>
      <text x="80" y="145" class="boxplot-label">10</text>
      <text x="140" y="145" class="boxplot-label">25</text>
      <text x="200" y="145" class="boxplot-label">50</text>
      <text x="260" y="145" class="boxplot-label">75</text>
      <text x="320" y="145" class="boxplot-label">90</text>
      <text x="350" y="145" class="boxplot-label">100</text>
      <text x="50" y="30" class="boxplot-annotation">Pencilan</text>
      <text x="80" y="30" class="boxplot-annotation">Min</text>
      <text x="140" y="30" class="boxplot-annotation">Q₁</text>
      <text x="200" y="30" class="boxplot-annotation">Median (Q₂)</text>
      <text x="260" y="30" class="boxplot-annotation">Q₃</text>
      <text x="320" y="30" class="boxplot-annotation">Max</text>
      <text x="350" y="30" class="boxplot-annotation">Pencilan</text>
      <line x1="50" y1="35" x2="50" y2="80" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="80" y1="35" x2="80" y2="55" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="140" y1="35" x2="140" y2="55" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="200" y1="35" x2="200" y2="55" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="260" y1="35" x2="260" y2="55" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="320" y1="35" x2="320" y2="55" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="350" y1="35" x2="350" y2="80" stroke="#999" stroke-width="1" marker-end="url(#arrowhead)"/>
      <line x1="140" y1="165" x2="260" y2="165" stroke="#27ae60" stroke-width="2"/>
      <line x1="140" y1="160" x2="140" y2="170" stroke="#27ae60" stroke-width="2"/>
      <line x1="260" y1="160" x2="260" y2="170" stroke="#27ae60" stroke-width="2"/>
      <text x="200" y="178" class="boxplot-annotation" style="fill: #27ae60; font-weight: 600;">IQR = 50</text>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#999"/>
        </marker>
      </defs>
    </svg>
  </div>
  
  <div class="legend-boxplot">
    <div class="legend-boxplot-item">
      <span class="legend-boxplot-text">📦 <strong>Kotak:</strong> Mengandung 50% data tengah (IQR)</span>
    </div>
    <div class="legend-boxplot-item">
      <span class="legend-boxplot-text" style="color: #e74c3c;">━ <strong>Garis merah:</strong> Median</span>
    </div>
    <div class="legend-boxplot-item">
      <span class="legend-boxplot-text">⟷ <strong>Whisker:</strong> Data dalam rentang normal</span>
    </div>
    <div class="legend-boxplot-item">
      <span class="legend-boxplot-text">● <strong>Titik:</strong> Pencilan (outlier)</span>
    </div>
  </div>
</div>

---

## Peluang

### Deterministik vs Probabilistik

**Deterministik:**

- Hasil pasti dan dapat diprediksi
- Contoh: Hukum gravitasi, $2 + 2 = 4$

**Probabilistik:**

- Hasil tidak pasti, hanya dapat dihitung peluangnya
- Contoh: Hasil pelemparan dadu, cuaca besok

### Peluang = Ruang Kejadian / Ruang Contoh

**Konsep:**

- **Ruang Contoh (Sample Space):** Himpunan semua kemungkinan hasil
- **Ruang Kejadian (Event):** Himpunan hasil yang diinginkan

**Rumus Klasik:**
$$P(A) = \frac{n(A)}{n(S)} = \frac{\text{banyaknya hasil kejadian A}}{\text{banyaknya semua kemungkinan hasil}}$$

**Contoh:**
Pelemparan dadu:

- Ruang contoh $S = \{1, 2, 3, 4, 5, 6\}$, $n(S) = 6$
- Kejadian A: muncul angka genap, $A = \{2, 4, 6\}$, $n(A) = 3$
- $P(A) = \frac{3}{6} = \frac{1}{2}$

### Permutasi vs Kombinasi

**Permutasi (Memerhatikan Urutan):**
Banyaknya cara menyusun $r$ objek dari $n$ objek dengan memerhatikan urutan.

**Rumus:**
$$P(n, r) = \frac{n!}{(n-r)!} = n \times (n-1) \times ... \times (n-r+1)$$

**Contoh:**
Berapa banyak cara menyusun 3 buku dari 5 buku berbeda?
$$P(5, 3) = \frac{5!}{(5-3)!} = \frac{5!}{2!} = 5 \times 4 \times 3 = 60$$

**Kombinasi (Tidak Memerhatikan Urutan):**
Banyaknya cara memilih $r$ objek dari $n$ objek tanpa memerhatikan urutan.

**Rumus:**
$$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

**Contoh:**
Berapa banyak cara memilih 3 buku dari 5 buku (urutan tidak penting)?
$$C(5, 3) = \frac{5!}{3!(5-3)!} = \frac{5!}{3!2!} = \frac{5 \times 4}{2 \times 1} = 10$$

**Perbedaan:**

- Permutasi: ABC ≠ ACB (urutan penting)
- Kombinasi: ABC = ACB (urutan tidak penting)

### Aksioma Peluang

**1. Non-negatif:**
$$P(A) \geq 0 \text{ untuk setiap kejadian } A$$

**2. Normalisasi:**
$$P(S) = 1 \text{ dimana } S \text{ adalah ruang contoh}$$

**3. Aditivitas:**
Untuk kejadian saling lepas (mutually exclusive):
$$P(A \cup B) = P(A) + P(B)$$

**Umum untuk kejadian saling lepas:**
$$P(A\_1 \cup A\_2 \cup ... \cup A\_n) = P(A\_1) + P(A\_2) + ... + P(A\_n)$$

**Contoh:**
Pelemparan dadu:

- $P(\text{genap}) = P(2) + P(4) + P(6) = \frac{1}{6} + \frac{1}{6} + \frac{1}{6} = \frac{1}{2}$

### Peluang Komplemen

**Konsep:** Peluang kejadian tidak terjadi.

**Rumus:**
$$P(A^c) = 1 - P(A)$$

dimana $A^c$ adalah komplemen dari $A$ (kejadian $A$ tidak terjadi).

**Contoh:**
Jika peluang hujan $P(\text{hujan}) = 0.3$, maka:
$$P(\text{tidak hujan}) = 1 - 0.3 = 0.7$$

### Penjumlahan Peluang

**1. Kejadian Saling Lepas (Mutually Exclusive):**
$$P(A \cup B) = P(A) + P(B)$$

**Contoh:**
Peluang muncul angka 1 atau 2 pada dadu:
$$P(1 \text{ atau } 2) = P(1) + P(2) = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$$

**2. Kejadian Tidak Saling Lepas:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Contoh:**
Dari 100 siswa: 60 suka matematika, 40 suka fisika, 30 suka keduanya.

- $P(\text{matematika}) = 0.6$
- $P(\text{fisika}) = 0.4$
- $P(\text{matematika dan fisika}) = 0.3$
- $P(\text{matematika atau fisika}) = 0.6 + 0.4 - 0.3 = 0.7$

### Perkalian Peluang

**1. Kejadian Bebas (Independent):**
$$P(A \cap B) = P(A) \times P(B)$$

**Contoh:**
Pelemparan 2 koin:

- $P(\text{koin 1 kepala}) = \frac{1}{2}$
- $P(\text{koin 2 kepala}) = \frac{1}{2}$
- $P(\text{keduanya kepala}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$

**2. Kejadian Tidak Bebas (Dependent):**
$$P(A \cap B) = P(A) \times P(B|A) = P(B) \times P(A|B)$$

dimana $P(B|A)$ adalah peluang $B$ terjadi jika $A$ sudah terjadi.

**Contoh:**
Dari 10 bola (6 merah, 4 biru), ambil 2 tanpa pengembalian:

- $P(\text{pertama merah}) = \frac{6}{10} = 0.6$
- $P(\text{kedua merah | pertama merah}) = \frac{5}{9}$ (sisa 5 merah dari 9 bola)
- $P(\text{keduanya merah}) = 0.6 \times \frac{5}{9} = \frac{1}{3}$

### Peluang Bersyarat

**Konsep:** Peluang kejadian $A$ terjadi jika kejadian $B$ sudah terjadi.

**Rumus:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Contoh:**
Dari 100 siswa: 60 laki-laki, 40 perempuan. 30 laki-laki suka matematika, 20 perempuan suka matematika.

Peluang suka matematika jika laki-laki:

- $P(\text{matematika | laki-laki}) = \frac{30}{60} = 0.5$

Atau menggunakan rumus:

- $P(\text{matematika} \cap \text{laki-laki}) = \frac{30}{100} = 0.3$
- $P(\text{laki-laki}) = \frac{60}{100} = 0.6$
- $P(\text{matematika | laki-laki}) = \frac{0.3}{0.6} = 0.5$

## Peubah Acak dan Sebaran Peluang

### Fungsi Peluang Acak dan Sebaran Peluang Acak

**Peubah Acak (Random Variable):**
Fungsi yang memetakan setiap hasil eksperimen ke bilangan real.

**Notasi:** $X$ untuk peubah acak, $x$ untuk nilai spesifik.

**Fungsi Peluang:**

- **Diskret:** $f(x) = P(X = x)$ (fungsi massa peluang)
- **Kontinu:** $f(x)$ adalah fungsi kepekatan peluang, dimana $P(a \leq X \leq b) = \int\_a^b f(x) dx$

**Syarat Fungsi Peluang:**

1. $f(x) \geq 0$ untuk semua $x$
2. $\sum\_{x} f(x) = 1$ (diskret) atau $\int\_{-\infty}^{\infty} f(x) dx = 1$ (kontinu)

**Contoh Diskret:**
Pelemparan 2 koin, $X$ = banyaknya kepala:

- $P(X = 0) = P(\text{TT}) = \frac{1}{4}$
- $P(X = 1) = P(\text{HT, TH}) = \frac{2}{4} = \frac{1}{2}$
- $P(X = 2) = P(\text{HH}) = \frac{1}{4}$

**Contoh Kontinu:**
Sebaran normal dengan $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

### Klasifikasi Peubah Acak

**1. Diskret:**

- Nilai yang mungkin adalah bilangan bulat atau dapat dihitung
- Contoh: banyaknya kepala, banyaknya produk cacat, banyaknya kecelakaan

**Sebaran Diskret:**

- Bernoulli
- Binomial
- Poisson
- Hipergeometrik
- Geometrik

**2. Kontinu:**

- Nilai yang mungkin adalah bilangan real pada selang tertentu
- Contoh: tinggi badan, berat badan, waktu, suhu

**Sebaran Kontinu:**

- Normal
- Lognormal
- Eksponensial
- Uniform
- Chi-square
- t-student
- F

### Ukuran Pemusatan dan Penyebaran Peubah Acak

#### Nilai Harapan (Expected Value) - $E(X)$

**Konsep:** Rata-rata tertimbang dari semua nilai yang mungkin, dengan bobot adalah peluangnya.

**Diskret:**
$$E(X) = \mu = \sum\_{x} x \cdot P(X = x) = \sum\_{x} x \cdot f(x)$$

**Kontinu:**
$$E(X) = \mu = \int\_{-\infty}^{\infty} x \cdot f(x) dx$$

**Contoh Diskret:**
Pelemparan dadu, $X$ = nilai yang muncul:
$$E(X) = 1 \times \frac{1}{6} + 2 \times \frac{1}{6} + 3 \times \frac{1}{6} + 4 \times \frac{1}{6} + 5 \times \frac{1}{6} + 6 \times \frac{1}{6} = \frac{21}{6} = 3.5$$

**Sifat Nilai Harapan:**

- $E(a) = a$ (konstanta)
- $E(aX + b) = aE(X) + b$
- $E(X + Y) = E(X) + E(Y)$

#### Ragam (Variance) - $\text{Var}(X)$

**Rumus:**
$$\text{Var}(X) = \sigma^2 = E[(X - \mu)^2] = E(X^2) - [E(X)]^2$$

**Diskret:**
$$\text{Var}(X) = \sum\_{x} (x - \mu)^2 \cdot f(x) = \sum\_{x} x^2 \cdot f(x) - \mu^2$$

**Kontinu:**
$$\text{Var}(X) = \int\_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) dx = \int\_{-\infty}^{\infty} x^2 \cdot f(x) dx - \mu^2$$

**Simpangan Baku:**
$$\sigma = \sqrt{\text{Var}(X)}$$

**Contoh:**
Pelemparan dadu:

- $E(X) = 3.5$
- $E(X^2) = 1^2 \times \frac{1}{6} + 2^2 \times \frac{1}{6} + ... + 6^2 \times \frac{1}{6} = \frac{91}{6}$
- $\text{Var}(X) = \frac{91}{6} - (3.5)^2 = \frac{91}{6} - 12.25 = \frac{35}{12} \approx 2.92$
- $\sigma = \sqrt{2.92} \approx 1.71$

**Sifat Ragam:**

- $\text{Var}(a) = 0$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$
- $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ (jika $X$ dan $Y$ bebas)

---

## Sebaran Peubah Acak Diskret

### Sebaran Bernoulli

**Konsep:** Eksperimen dengan 2 hasil: sukses (1) atau gagal (0).

**Contoh:** Melamar kerja (diterima = 1, ditolak = 0)

**Fungsi Peluang:**

$$
P(X = x) = \begin{cases}
p & \text{jika } x = 1 \\
1-p & \text{jika } x = 0
\end{cases}
$$

atau:
$$P(X = x) = p^x (1-p)^{1-x}, \quad x = 0, 1$$

dimana:

- $p$ = peluang sukses
- $1-p$ = peluang gagal

**Nilai Harapan:**
$$E(X) = p$$

**Ragam:**
$$\text{Var}(X) = p(1-p)$$

**Contoh:**
Peluang diterima kerja = 0.3, maka:

- $P(X = 1) = 0.3$ (diterima)
- $P(X = 0) = 0.7$ (ditolak)
- $E(X) = 0.3$
- $\text{Var}(X) = 0.3 \times 0.7 = 0.21$

### Sebaran Binomial

**Konsep:** Banyaknya sukses dalam $n$ percobaan Bernoulli bebas.

**Contoh:** Melamar ke lebih dari satu tempat kerja, banyaknya yang menerima.

**Fungsi Peluang:**
$$P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}, \quad x = 0, 1, 2, ..., n$$

dimana:

- $n$ = banyaknya percobaan
- $p$ = peluang sukses setiap percobaan
- $x$ = banyaknya sukses

**Syarat:**

1. $n$ percobaan bebas
2. Setiap percobaan hanya 2 hasil (sukses/gagal)
3. Peluang sukses sama untuk setiap percobaan ($p$)

**Nilai Harapan:**
$$E(X) = np$$

**Ragam:**
$$\text{Var}(X) = np(1-p)$$

**Contoh:**
Melamar ke 5 perusahaan, peluang diterima = 0.3. Peluang diterima di 2 perusahaan:
$$P(X = 2) = \binom{5}{2} (0.3)^2 (0.7)^3 = 10 \times 0.09 \times 0.343 = 0.3087$$

- $E(X) = 5 \times 0.3 = 1.5$ (rata-rata diterima di 1.5 perusahaan)
- $\text{Var}(X) = 5 \times 0.3 \times 0.7 = 1.05$

### Sebaran Poisson

**Konsep:** Banyaknya kejadian dalam interval waktu atau ruang tertentu, dimana kejadian terjadi secara acak dan bebas.

**Contoh:** Banyaknya kecelakaan per hari, banyaknya panggilan telepon per jam.

**Fungsi Peluang:**
$$P(X = x) = \frac{\lambda^x e^{-\lambda}}{x!}, \quad x = 0, 1, 2, ...$$

dimana:

- $\lambda$ = rata-rata banyaknya kejadian dalam interval
- $e \approx 2.71828$ (bilangan Euler)

**Syarat:**

1. Kejadian terjadi secara acak dan bebas
2. Rata-rata banyaknya kejadian ($\lambda$) konstan
3. Peluang lebih dari satu kejadian dalam interval sangat kecil mendekati nol

**Nilai Harapan:**
$$E(X) = \lambda$$

**Ragam:**
$$\text{Var}(X) = \lambda$$

**Catatan:** Pada Poisson, nilai harapan = ragam = $\lambda$

**Contoh:**
Rata-rata 3 kecelakaan per hari. Peluang terjadi 2 kecelakaan hari ini:
$$P(X = 2) = \frac{3^2 e^{-3}}{2!} = \frac{9 \times 0.0498}{2} = 0.2241$$

- $E(X) = 3$
- $\text{Var}(X) = 3$

**Pendekatan Binomial ke Poisson:**
Jika $n$ besar dan $p$ kecil, binomial dapat didekati dengan Poisson dengan $\lambda = np$.

**Contoh:**
$n = 1000$, $p = 0.001$, maka $\lambda = 1$:

- Binomial: $P(X = 2) = \binom{1000}{2} (0.001)^2 (0.999)^{998}$
- Poisson: $P(X = 2) = \frac{1^2 e^{-1}}{2!} = \frac{e^{-1}}{2} \approx 0.184$

<div class="discrete-dist-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .discrete-dist-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .discrete-dist-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .discrete-dist-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .discrete-dist-viz h4 {
          color: #f3f4f6 !important;
        }
        .dd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }
        @media (min-width: 640px) {
          .dd-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .dd-item {
          text-align: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        html.dark .dd-item {
          background: #111827;
        }
        .dd-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        html.dark .dd-title {
          color: #f3f4f6;
        }
        .dd-svg {
          width: 100%;
          height: 100px;
        }
        .dd-bar {
          fill: #3498db;
        }
        html.dark .dd-bar {
          fill: #60a5fa;
        }
        .dd-bar-bernoulli-0 { fill: #e74c3c; }
        .dd-bar-bernoulli-1 { fill: #27ae60; }
        html.dark .dd-bar-bernoulli-0 { fill: #f87171; }
        html.dark .dd-bar-bernoulli-1 { fill: #4ade80; }
        .dd-label {
          font-size: 0.6rem;
          fill: #666;
          text-anchor: middle;
        }
        html.dark .dd-label {
          fill: #9ca3af;
        }
        .dd-desc {
          font-size: 0.7rem;
          color: #666;
          margin-top: 8px;
        }
        html.dark .dd-desc {
          color: #9ca3af;
        }
        @media (min-width: 640px) {
          .discrete-dist-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Perbandingan Sebaran Diskret</h4>

<div class="dd-grid">
    <div class="dd-item">
      <div class="dd-title">Bernoulli (p=0.3)</div>
      <svg class="dd-svg" viewBox="0 0 120 100">
        <rect x="25" y="30" width="25" height="60" class="dd-bar-bernoulli-0"/>
        <rect x="70" y="60" width="25" height="30" class="dd-bar-bernoulli-1"/>
        <text x="37" y="98" class="dd-label">0</text>
        <text x="82" y="98" class="dd-label">1</text>
        <text x="37" y="25" class="dd-label">0.7</text>
        <text x="82" y="55" class="dd-label">0.3</text>
      </svg>
      <div class="dd-desc">Sukses (1) atau Gagal (0)</div>
    </div>
    <div class="dd-item">
      <div class="dd-title">Binomial (n=5, p=0.4)</div>
      <svg class="dd-svg" viewBox="0 0 120 100">
        <rect x="10" y="75" width="14" height="15" class="dd-bar"/>
        <rect x="28" y="55" width="14" height="35" class="dd-bar"/>
        <rect x="46" y="35" width="14" height="55" class="dd-bar"/>
        <rect x="64" y="50" width="14" height="40" class="dd-bar"/>
        <rect x="82" y="70" width="14" height="20" class="dd-bar"/>
        <rect x="100" y="82" width="14" height="8" class="dd-bar"/>
        <text x="17" y="98" class="dd-label">0</text>
        <text x="35" y="98" class="dd-label">1</text>
        <text x="53" y="98" class="dd-label">2</text>
        <text x="71" y="98" class="dd-label">3</text>
        <text x="89" y="98" class="dd-label">4</text>
        <text x="107" y="98" class="dd-label">5</text>
      </svg>
      <div class="dd-desc">Banyak sukses dalam n percobaan</div>
    </div>
    <div class="dd-item">
      <div class="dd-title">Poisson (λ=3)</div>
      <svg class="dd-svg" viewBox="0 0 120 100">
        <rect x="5" y="78" width="12" height="12" class="dd-bar"/>
        <rect x="20" y="58" width="12" height="32" class="dd-bar"/>
        <rect x="35" y="38" width="12" height="52" class="dd-bar"/>
        <rect x="50" y="35" width="12" height="55" class="dd-bar"/>
        <rect x="65" y="48" width="12" height="42" class="dd-bar"/>
        <rect x="80" y="62" width="12" height="28" class="dd-bar"/>
        <rect x="95" y="75" width="12" height="15" class="dd-bar"/>
        <text x="11" y="98" class="dd-label">0</text>
        <text x="26" y="98" class="dd-label">1</text>
        <text x="41" y="98" class="dd-label">2</text>
        <text x="56" y="98" class="dd-label">3</text>
        <text x="71" y="98" class="dd-label">4</text>
        <text x="86" y="98" class="dd-label">5</text>
        <text x="101" y="98" class="dd-label">6</text>
      </svg>
      <div class="dd-desc">Kejadian dalam interval waktu</div>
    </div>
  </div>
</div>

## Sebaran Peubah Acak Kontinu

### Sebaran Normal dan Sifatnya

**Konsep:** Sebaran yang paling penting dalam statistika, berbentuk lonceng simetris.

**Notasi:** $X \sim N(\mu, \sigma^2)$

**Sifat-sifat:**

1. **Simetris** terhadap $\mu$ (rata-rata)
2. **Berbentuk lonceng** (bell-shaped)
3. **Asimtotik** terhadap sumbu X (tidak pernah menyentuh sumbu X)
4. **Empirical Rule (68-95-99.7):**
   - 68% data dalam $(\mu - \sigma, \mu + \sigma)$
   - 95% data dalam $(\mu - 2\sigma, \mu + 2\sigma)$
   - 99.7% data dalam $(\mu - 3\sigma, \mu + 3\sigma)$

**Contoh:**
Jika tinggi badan $X \sim N(170, 10^2)$:

- 68% orang memiliki tinggi antara 160-180 cm
- 95% orang memiliki tinggi antara 150-190 cm
- 99.7% orang memiliki tinggi antara 140-200 cm

<div class="normal-distribution-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .normal-distribution-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .normal-distribution-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .normal-distribution-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .normal-distribution-viz h4 {
          color: #f3f4f6 !important;
        }
        .bell-curve-container {
          position: relative;
          width: 100%;
          height: 250px;
          margin: 20px 0;
        }
        .bell-curve-svg {
          width: 100%;
          height: 100%;
        }
        .bell-curve-path {
          fill: none;
          stroke: #3498db;
          stroke-width: 2.5;
        }
        html.dark .bell-curve-path {
          stroke: #60a5fa;
        }
        .area-fill {
          opacity: 0.15;
        }
        .area-68 { fill: #27ae60; }
        .area-95 { fill: #f39c12; }
        .area-997 { fill: #e74c3c; }
        .sigma-line {
          stroke: #95a5a6;
          stroke-width: 1;
          stroke-dasharray: 4,4;
        }
        html.dark .sigma-line {
          stroke: #6b7280;
        }
        .sigma-label {
          font-size: 0.75rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .sigma-label {
          fill: #f3f4f6 !important;
        }
        .percentage-label {
          font-size: 0.8rem;
          font-weight: 600;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .percentage-label {
          fill: #f3f4f6 !important;
        }
        .legend-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
        }
        .legend-color {
          width: 20px;
          height: 12px;
          border-radius: 2px;
        }
        .legend-text {
          color: #495057;
        }
        html.dark .legend-text {
          color: #d1d5db !important;
        }
        @media (min-width: 640px) {
          .normal-distribution-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
          .bell-curve-container {
            height: 280px;
          }
          .sigma-label, .percentage-label {
            font-size: 0.875rem;
          }
          .legend-item {
            font-size: 0.8125rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Empirical Rule: 68-95-99.7 Rule</h4>

<div class="bell-curve-container">
    <svg class="bell-curve-svg" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
      <path d="M 40 200 C 40 200, 50 195, 60 185 C 80 165, 100 100, 130 55 C 160 25, 180 25, 200 25 C 220 25, 240 25, 270 55 C 300 100, 320 165, 340 185 C 350 195, 360 200, 360 200 L 360 200 L 40 200 Z" class="area-fill area-997"/>
      <path d="M 70 200 C 70 200, 80 195, 95 180 C 115 155, 135 95, 155 55 C 175 30, 190 30, 200 30 C 210 30, 225 30, 245 55 C 265 95, 285 155, 305 180 C 320 195, 330 200, 330 200 L 330 200 L 70 200 Z" class="area-fill area-95"/>
      <path d="M 100 200 C 100 200, 110 190, 125 170 C 145 140, 160 85, 175 55 C 185 35, 195 35, 200 35 C 205 35, 215 35, 225 55 C 240 85, 255 140, 275 170 C 290 190, 300 200, 300 200 L 300 200 L 100 200 Z" class="area-fill area-68"/>
      <path d="M 20 200 C 20 200, 35 195, 50 180 C 75 155, 100 90, 130 50 C 160 20, 180 20, 200 20 C 220 20, 240 20, 270 50 C 300 90, 325 155, 350 180 C 365 195, 380 200, 380 200" class="bell-curve-path"/>
      <line x1="100" y1="30" x2="100" y2="205" class="sigma-line"/>
      <line x1="200" y1="30" x2="200" y2="205" class="sigma-line"/>
      <line x1="300" y1="30" x2="300" y2="205" class="sigma-line"/>
      <line x1="40" y1="30" x2="40" y2="205" class="sigma-line"/>
      <line x1="360" y1="30" x2="360" y2="205" class="sigma-line"/>
      <text x="40" y="225" class="sigma-label">-3σ</text>
      <text x="100" y="225" class="sigma-label">-σ</text>
      <text x="200" y="225" class="sigma-label">μ</text>
      <text x="300" y="225" class="sigma-label">+σ</text>
      <text x="360" y="225" class="sigma-label">+3σ</text>
      <text x="200" y="120" class="percentage-label">68%</text>
      <text x="200" y="160" class="percentage-label">95%</text>
      <text x="200" y="195" class="percentage-label">99.7%</text>
    </svg>
  </div>
  
  <div class="legend-container">
    <div class="legend-item">
      <div class="legend-color area-68"></div>
      <span class="legend-text">68% dalam μ ± σ</span>
    </div>
    <div class="legend-item">
      <div class="legend-color area-95"></div>
      <span class="legend-text">95% dalam μ ± 2σ</span>
    </div>
    <div class="legend-item">
      <div class="legend-color area-997"></div>
      <span class="legend-text">99.7% dalam μ ± 3σ</span>
    </div>
  </div>
</div>

### Fungsi Kepekatan Peluang Normal

**Rumus:**
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad -\infty < x < \infty$$

dimana:

- $\mu$ = rata-rata (pusat sebaran)
- $\sigma$ = simpangan baku (menentukan lebar sebaran)
- $\pi \approx 3.14159$
- $e \approx 2.71828$

**Karakteristik Kurva:**

- Puncak di $x = \mu$
- Semakin besar $\sigma$, semakin lebar kurva
- Luas total di bawah kurva = 1

### Peluang Sebaran Normal (dengan Integral)

**Konsep:** Peluang dihitung sebagai luas di bawah kurva fungsi kepekatan.

**Rumus:**
$$P(a \leq X \leq b) = \int\_a^b \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} dx$$

**Kesulitan:** Integral ini tidak dapat diselesaikan secara analitik, sehingga menggunakan:

1. Tabel normal baku (setelah transformasi)
2. Software/kalkulator
3. Pendekatan numerik

**Contoh:**
$X \sim N(50, 10^2)$, hitung $P(45 \leq X \leq 60)$:

1. Transformasi ke normal baku:
   - $Z\_1 = \frac{45-50}{10} = -0.5$
   - $Z\_2 = \frac{60-50}{10} = 1.0$

2. Gunakan tabel atau software:
   $$P(45 \leq X \leq 60) = P(-0.5 \leq Z \leq 1.0) = 0.5328$$

### Sebaran Normal Baku

**Konsep:** Normal dengan $\mu = 0$ dan $\sigma = 1$. Dilambangkan $Z \sim N(0, 1)$.

**Fungsi Kepekatan:**
$$f(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$$

**Transformasi:**
$$Z = \frac{X - \mu}{\sigma}$$

**Kebalikan:**
$$X = \mu + Z\sigma$$

**Keuntungan:**

- Satu tabel untuk semua sebaran normal
- Memudahkan perhitungan peluang

**Contoh:**
$X \sim N(100, 15^2)$, hitung $P(X > 130)$:

1. Transformasi: $Z = \frac{130-100}{15} = 2$
2. $P(X > 130) = P(Z > 2) = 1 - P(Z \leq 2) = 1 - 0.9772 = 0.0228$

---

## Statistika Inferensia

### Pendugaan Parameter

**Konsep:** Menggunakan statistik sampel untuk menduga parameter populasi.

**Jenis Pendugaan:**

1. **Penduga Titik:** Memberikan satu nilai sebagai penduga
   - Contoh: $\bar{x} = 50$ sebagai penduga $\mu$

2. **Penduga Selang:** Memberikan interval yang diharapkan memuat parameter
   - Contoh: $48 \leq \mu \leq 52$ dengan tingkat kepercayaan 95%

**Penduga Tidak Bias:**

- $\bar{X}$ untuk $\mu$
- $S^2$ untuk $\sigma^2$
- $\hat{p} = \frac{X}{n}$ untuk $p$ (proporsi)

### Penduga Selang (Detail)

#### Selang Kepercayaan Rata-rata Populasi

**1. Ragam Populasi Diketahui ($\sigma^2$ diketahui)**

**Rumus:**
$$\bar{x} \pm z\_{\alpha/2} \frac{\sigma}{\sqrt{n}}$$

**Syarat:**

- Populasi normal ATAU $n \geq 30$ (CLT)
- $\sigma$ diketahui

**Contoh:**
$\bar{x} = 50$, $\sigma = 10$, $n = 100$, tingkat kepercayaan 95%:

- $z\_{0.025} = 1.96$
- Selang: $50 \pm 1.96 \times \frac{10}{\sqrt{100}} = 50 \pm 1.96$
- $(48.04, 51.96)$

**2. Ragam Populasi Tidak Diketahui**

**Rumus:**
$$\bar{x} \pm t\_{\alpha/2, n-1} \frac{s}{\sqrt{n}}$$

**Syarat:**

- Populasi normal ATAU $n \geq 30$
- $\sigma$ tidak diketahui, gunakan $s$

**Contoh:**
$\bar{x} = 50$, $s = 10$, $n = 25$, tingkat kepercayaan 95%:

- $t\_{0.025, 24} = 2.064$ (dari tabel t)
- Selang: $50 \pm 2.064 \times \frac{10}{\sqrt{25}} = 50 \pm 4.128$
- $(45.872, 54.128)$

**Catatan:** Jika $n \geq 30$, dapat menggunakan $z$ sebagai pendekatan $t$.

#### Selang Kepercayaan Dua Sampel Bebas

**1. Ragam Populasi Diketahui**

**Rumus:**
$$(\bar{x}\_1 - \bar{x}\_2) \pm z\_{\alpha/2} \sqrt{\frac{\sigma\_1^2}{n\_1} + \frac{\sigma\_2^2}{n\_2}}$$

**Contoh:**
Sampel 1: $\bar{x}\_1 = 50$, $\sigma\_1 = 10$, $n\_1 = 100$
Sampel 2: $\bar{x}\_2 = 45$, $\sigma\_2 = 12$, $n\_2 = 80$
Tingkat kepercayaan 95%:

- Selisih: $50 - 45 = 5$
- Standard error: $\sqrt{\frac{10^2}{100} + \frac{12^2}{80}} = \sqrt{1 + 1.8} = \sqrt{2.8} = 1.673$
- Selang: $5 \pm 1.96 \times 1.673 = 5 \pm 3.28$
- $(1.72, 8.28)$

**2. Ragam Populasi Tidak Diketahui (Asumsi Sama)**

**Rumus:**
$$(\bar{x}\_1 - \bar{x}\_2) \pm t\_{\alpha/2, df} \sqrt{s\_p^2\left(\frac{1}{n\_1} + \frac{1}{n\_2}\right)}$$

dimana:

- $s\_p^2 = \frac{(n\_1-1)s\_1^2 + (n\_2-1)s\_2^2}{n\_1 + n\_2 - 2}$ (pooled variance)
- $df = n\_1 + n\_2 - 2$ (derajat bebas)

**Contoh:**
Sampel 1: $\bar{x}\_1 = 50$, $s\_1 = 10$, $n\_1 = 25$
Sampel 2: $\bar{x}\_2 = 45$, $s\_2 = 12$, $n\_2 = 30$

- $s\_p^2 = \frac{(25-1)10^2 + (30-1)12^2}{25+30-2} = \frac{24 \times 100 + 29 \times 144}{53} = \frac{6576}{53} = 124.08$
- $df = 25 + 30 - 2 = 53$
- $t\_{0.025, 53} \approx 2.006$
- Standard error: $\sqrt{124.08 \times (\frac{1}{25} + \frac{1}{30})} = \sqrt{124.08 \times 0.0733} = 3.01$
- Selang: $5 \pm 2.006 \times 3.01 = 5 \pm 6.04$
- $(-1.04, 11.04)$

**3. Ragam Populasi Tidak Diketahui (Asumsi Berbeda)**

**Rumus:**
$$(\bar{x}\_1 - \bar{x}\_2) \pm t\_{\alpha/2, df} \sqrt{\frac{s\_1^2}{n\_1} + \frac{s\_2^2}{n\_2}}$$

dimana:
$$df = \frac{\left(\frac{s\_1^2}{n\_1} + \frac{s\_2^2}{n\_2}\right)^2}{\frac{(s\_1^2/n\_1)^2}{n\_1-1} + \frac{(s\_2^2/n\_2)^2}{n\_2-1}}$$ (Welch's formula)

#### Selang Kepercayaan Data Berpasangan

**Konsep:** Data yang diukur dua kali pada subjek yang sama (sebelum-sesudah, matched pairs).

**Rumus:**
$$\bar{d} \pm t\_{\alpha/2, n-1} \frac{s\_d}{\sqrt{n}}$$

dimana:

- $d\_i = x\_{i1} - x\_{i2}$ (selisih pasangan ke-$i$)
- $\bar{d} = \frac{\sum d\_i}{n}$ (rata-rata selisih)
- $s\_d = \sqrt{\frac{\sum(d\_i - \bar{d})^2}{n-1}}$ (simpangan baku selisih)

**Contoh:**
Data sebelum dan sesudah program diet (kg):

| Subjek | Sebelum | Sesudah | $d$ |
| ------ | ------- | ------- | --- |
| 1      | 80      | 75      | 5   |
| 2      | 85      | 82      | 3   |
| 3      | 90      | 88      | 2   |
| 4      | 75      | 73      | 2   |
| 5      | 88      | 85      | 3   |

- $\bar{d} = \frac{5+3+2+2+3}{5} = 3$
- $s\_d = 1.225$ (dihitung dari data)
- $n = 5$, $t\_{0.025, 4} = 2.776$
- Selang: $3 \pm 2.776 \times \frac{1.225}{\sqrt{5}} = 3 \pm 1.52$
- $(1.48, 4.52)$

**Interpretasi:** Dengan tingkat kepercayaan 95%, rata-rata penurunan berat badan antara 1.48 dan 4.52 kg.

#### Penduga Titik dan Selang Kepercayaan Proporsi Populasi

**Penduga Titik:**
$$\hat{p} = \frac{X}{n}$$

dimana:

- $X$ = banyaknya sukses dalam sampel
- $n$ = ukuran sampel

**Selang Kepercayaan (Sampel Besar, $n\hat{p} \geq 5$ dan $n(1-\hat{p}) \geq 5$):**
$$\hat{p} \pm z\_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

**Contoh:**
Dari 1000 responden, 600 setuju dengan kebijakan baru:

- $\hat{p} = \frac{600}{1000} = 0.6$
- Tingkat kepercayaan 95%: $z\_{0.025} = 1.96$
- Standard error: $\sqrt{\frac{0.6 \times 0.4}{1000}} = \sqrt{0.00024} = 0.0155$
- Selang: $0.6 \pm 1.96 \times 0.0155 = 0.6 \pm 0.0304$
- $(0.5696, 0.6304)$ atau $(56.96\%, 63.04\%)$

#### Penduga Titik dan Selang Kepercayaan Beda Dua Proporsi

**Penduga Titik:**
$$\hat{p}\_1 - \hat{p}\_2$$

**Selang Kepercayaan:**
$$(\hat{p}\_1 - \hat{p}\_2) \pm z\_{\alpha/2} \sqrt{\frac{\hat{p}\_1(1-\hat{p}\_1)}{n\_1} + \frac{\hat{p}\_2(1-\hat{p}\_2)}{n\_2}}$$

**Contoh:**
Sampel 1: 600 dari 1000 setuju ($\hat{p}\_1 = 0.6$)
Sampel 2: 400 dari 800 setuju ($\hat{p}\_2 = 0.5$)
Tingkat kepercayaan 95%:

- Selisih: $0.6 - 0.5 = 0.1$
- Standard error: $\sqrt{\frac{0.6 \times 0.4}{1000} + \frac{0.5 \times 0.5}{800}} = \sqrt{0.00024 + 0.0003125} = 0.0235$
- Selang: $0.1 \pm 1.96 \times 0.0235 = 0.1 \pm 0.0461$
- $(0.0539, 0.1461)$ atau $(5.39\%, 14.61\%)$

### Uji Hipotesis

**Konsep:** Prosedur statistik untuk menguji klaim tentang parameter populasi.

#### Langkah-langkah Uji Hipotesis

**1. Menulis Hipotesis Statistik**

- **$H\_0$ (Hipotesis Nol):** Klaim yang akan diuji, biasanya mengandung tanda $=$, $\leq$, atau $\geq$
- **$H\_1$ atau $H\_a$ (Hipotesis Alternatif):** Klaim yang ingin dibuktikan, biasanya mengandung tanda $\neq$, $>$, atau $<$

**Jenis Uji:**

- **Dua ekor:** $H\_0: \mu = \mu\_0$ vs $H\_1: \mu \neq \mu\_0$
- **Ekor kanan:** $H\_0: \mu \leq \mu\_0$ vs $H\_1: \mu > \mu\_0$
- **Ekor kiri:** $H\_0: \mu \geq \mu\_0$ vs $H\_1: \mu < \mu\_0$

<div class="hypothesis-test-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .hypothesis-test-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .hypothesis-test-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .hypothesis-test-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .hypothesis-test-viz h4 {
          color: #f3f4f6 !important;
        }
        .test-type-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 15px 0;
        }
        .test-type {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 15px;
          background: #f8f9fa;
        }
        html.dark .test-type {
          border-color: #374151;
          background: #111827;
        }
        .test-type-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 10px;
          text-align: center;
        }
        html.dark .test-type-title {
          color: #f3f4f6 !important;
        }
        .test-curve-container {
          position: relative;
          width: 100%;
          height: 150px;
          margin: 10px 0;
        }
        .test-svg {
          width: 100%;
          height: 100%;
        }
        .curve-path {
          fill: none;
          stroke: #3498db;
          stroke-width: 2;
        }
        html.dark .curve-path {
          stroke: #60a5fa;
        }
        .acceptance-area {
          fill: #27ae60;
          opacity: 0.2;
        }
        .rejection-area {
          fill: #e74c3c;
          opacity: 0.3;
        }
        .critical-line {
          stroke: #e74c3c;
          stroke-width: 2;
          stroke-dasharray: 4,4;
        }
        .test-label {
          font-size: 0.7rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .test-label {
          fill: #f3f4f6 !important;
        }
        .rejection-label {
          font-size: 0.7rem;
          fill: #e74c3c;
          font-weight: 600;
        }
        html.dark .rejection-label {
          fill: #f87171 !important;
        }
        .acceptance-label {
          font-size: 0.7rem;
          fill: #27ae60;
          font-weight: 600;
        }
        html.dark .acceptance-label {
          fill: #4ade80 !important;
        }
        @media (min-width: 640px) {
          .hypothesis-test-viz {
            max-width: 750px;
            padding: 1.5625rem;
          }
          .test-type-container {
            grid-template-columns: repeat(3, 1fr);
          }
          .test-curve-container {
            height: 170px;
          }
          .test-label, .rejection-label, .acceptance-label {
            font-size: 0.75rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Daerah Penolakan dalam Uji Hipotesis (α = 0.05)</h4>

<div class="test-type-container">
    <div class="test-type">
      <div class="test-type-title">Uji Dua Ekor</div>
      <div class="test-curve-container">
        <svg class="test-svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
          <path d="M 10 130 C 10 125, 15 110, 20 95 C 23 85, 25 75, 28 65 L 28 130 Z" class="rejection-area"/>
          <path d="M 172 65 C 175 75, 177 85, 180 95 C 185 110, 190 125, 190 130 L 172 130 Z" class="rejection-area"/>
          <path d="M 28 130 L 28 65 C 35 50, 55 42, 100 38 C 145 42, 165 50, 172 65 L 172 130 Z" class="acceptance-area"/>
          <path d="M 10 130 C 10 125, 15 105, 25 80 C 40 50, 65 40, 100 38 C 135 40, 160 50, 175 80 C 185 105, 190 125, 190 130" class="curve-path"/>
          <line x1="28" y1="40" x2="28" y2="135" class="critical-line"/>
          <line x1="172" y1="40" x2="172" y2="135" class="critical-line"/>
          <text x="100" y="25" class="test-label">H₀: μ = μ₀</text>
          <text x="100" y="100" class="acceptance-label">Terima H₀</text>
          <text x="17" y="145" class="rejection-label">Tolak</text>
          <text x="183" y="145" class="rejection-label">Tolak</text>
          <text x="28" y="145" class="test-label">-1.96</text>
          <text x="172" y="145" class="test-label">+1.96</text>
          <text x="100" y="145" class="test-label">0</text>
        </svg>
      </div>
    </div>
    <div class="test-type">
      <div class="test-type-title">Uji Ekor Kanan</div>
      <div class="test-curve-container">
        <svg class="test-svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
          <path d="M 162 55 C 168 65, 177 85, 183 100 C 188 115, 190 125, 190 130 L 162 130 Z" class="rejection-area"/>
          <path d="M 10 130 C 10 125, 15 105, 25 80 C 40 50, 65 40, 100 38 C 135 40, 155 48, 162 55 L 162 130 Z" class="acceptance-area"/>
          <path d="M 10 130 C 10 125, 15 105, 25 80 C 40 50, 65 40, 100 38 C 135 40, 160 50, 175 80 C 185 105, 190 125, 190 130" class="curve-path"/>
          <line x1="162" y1="40" x2="162" y2="135" class="critical-line"/>
          <text x="100" y="25" class="test-label">H₀: μ ≤ μ₀</text>
          <text x="80" y="100" class="acceptance-label">Terima H₀</text>
          <text x="177" y="100" class="rejection-label">Tolak H₀</text>
          <text x="162" y="145" class="test-label">+1.645</text>
          <text x="100" y="145" class="test-label">0</text>
        </svg>
      </div>
    </div>
    <div class="test-type">
      <div class="test-type-title">Uji Ekor Kiri</div>
      <div class="test-curve-container">
        <svg class="test-svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
          <path d="M 10 130 C 10 125, 12 115, 17 100 C 23 85, 32 65, 38 55 L 38 130 Z" class="rejection-area"/>
          <path d="M 38 55 C 45 48, 65 40, 100 38 C 135 40, 160 50, 175 80 C 185 105, 190 125, 190 130 L 38 130 Z" class="acceptance-area"/>
          <path d="M 10 130 C 10 125, 15 105, 25 80 C 40 50, 65 40, 100 38 C 135 40, 160 50, 175 80 C 185 105, 190 125, 190 130" class="curve-path"/>
          <line x1="38" y1="40" x2="38" y2="135" class="critical-line"/>
          <text x="100" y="25" class="test-label">H₀: μ ≥ μ₀</text>
          <text x="120" y="100" class="acceptance-label">Terima H₀</text>
          <text x="23" y="100" class="rejection-label">Tolak H₀</text>
          <text x="38" y="145" class="test-label">-1.645</text>
          <text x="100" y="145" class="test-label">0</text>
        </svg>
      </div>
    </div>
  </div>
</div>

**2. Menghitung Statistik Uji**

Bergantung pada kasus:

- **Z-test:** Jika $\sigma$ diketahui atau sampel besar
- **t-test:** Jika $\sigma$ tidak diketahui dan sampel kecil

**3. Menentukan Daerah Penolakan/Kriteria Pengujian**

Berdasarkan tingkat signifikansi $\alpha$ (biasanya 0.05, 0.01, atau 0.10):

- **Dua ekor:** Tolak $H\_0$ jika $|Z| > z\_{\alpha/2}$ atau $|t| > t\_{\alpha/2, df}$
- **Ekor kanan:** Tolak $H\_0$ jika $Z > z_\alpha$ atau $t > t\_{\alpha, df}$
- **Ekor kiri:** Tolak $H\_0$ jika $Z < -z_\alpha$ atau $t < -t\_{\alpha, df}$

**4. Mengambil Kesimpulan**

- **Tolak $H\_0$:** Ada bukti cukup untuk mendukung $H\_1$
- **Gagal tolak $H\_0$:** Tidak ada bukti cukup untuk mendukung $H\_1$ (bukan berarti $H\_0$ benar!)

#### Uji Hipotesis Rata-rata Populasi Satu Sampel

**1. Ragam Diketahui (Z-test)**

**Statistik Uji:**
$$Z = \frac{\bar{x} - \mu\_0}{\sigma/\sqrt{n}}$$

**Contoh:**
Klaim: Rata-rata tinggi mahasiswa = 170 cm
Data: $\bar{x} = 172$, $\sigma = 10$, $n = 100$, $\alpha = 0.05$

- $H\_0: \mu = 170$ vs $H\_1: \mu \neq 170$ (dua ekor)
- $Z = \frac{172 - 170}{10/\sqrt{100}} = \frac{2}{1} = 2$
- Daerah penolakan: $|Z| > 1.96$
- Karena $2 > 1.96$, tolak $H\_0$
- **Kesimpulan:** Ada bukti bahwa rata-rata tinggi tidak sama dengan 170 cm

**2. Ragam Tidak Diketahui (t-test)**

**Statistik Uji:**
$$t = \frac{\bar{x} - \mu\_0}{s/\sqrt{n}}$$

**Contoh:**
Klaim: Rata-rata berat = 60 kg
Data: $\bar{x} = 62$, $s = 8$, $n = 25$, $\alpha = 0.05$

- $H\_0: \mu = 60$ vs $H\_1: \mu \neq 60$
- $t = \frac{62 - 60}{8/\sqrt{25}} = \frac{2}{1.6} = 1.25$
- $t\_{0.025, 24} = 2.064$
- Karena $|1.25| < 2.064$, gagal tolak $H\_0$
- **Kesimpulan:** Tidak ada bukti bahwa rata-rata berat berbeda dari 60 kg

#### Uji Hipotesis Beda Dua Rata-rata Populasi (Dua Sampel Bebas)

**1. Ragam Diketahui**

**Statistik Uji:**
$$Z = \frac{(\bar{x}\_1 - \bar{x}\_2) - (\mu\_1 - \mu\_2)\_0}{\sqrt{\frac{\sigma\_1^2}{n\_1} + \frac{\sigma\_2^2}{n\_2}}}$$

**Contoh:**
Uji apakah rata-rata kelompok 1 lebih besar dari kelompok 2:

- Kelompok 1: $\bar{x}\_1 = 50$, $\sigma\_1 = 10$, $n\_1 = 100$
- Kelompok 2: $\bar{x}\_2 = 45$, $\sigma\_2 = 12$, $n\_2 = 80$
- $\alpha = 0.05$

- $H\_0: \mu\_1 \leq \mu\_2$ vs $H\_1: \mu\_1 > \mu\_2$ (ekor kanan)
- $Z = \frac{(50 - 45) - 0}{\sqrt{\frac{10^2}{100} + \frac{12^2}{80}}} = \frac{5}{\sqrt{1 + 1.8}} = \frac{5}{1.673} = 2.99$
- $z\_{0.05} = 1.645$
- Karena $2.99 > 1.645$, tolak $H\_0$
- **Kesimpulan:** Ada bukti bahwa rata-rata kelompok 1 lebih besar

**2. Ragam Tidak Diketahui (Asumsi Sama)**

**Statistik Uji:**
$$t = \frac{(\bar{x}\_1 - \bar{x}\_2) - (\mu\_1 - \mu\_2)\_0}{s\_p \sqrt{\frac{1}{n\_1} + \frac{1}{n\_2}}}$$

dimana $s\_p^2$ adalah pooled variance (lihat bagian selang kepercayaan).

#### Uji Hipotesis Rata-rata Data Berpasangan

**Statistik Uji:**
$$t = \frac{\bar{d} - \mu\_{d0}}{s\_d/\sqrt{n}}$$

dimana $\mu\_{d0}$ adalah nilai hipotesis untuk rata-rata selisih (biasanya 0).

**Contoh:**
Uji apakah program diet efektif (penurunan berat badan > 0):

- Data dari contoh sebelumnya: $\bar{d} = 3$, $s\_d = 1.225$, $n = 5$
- $\alpha = 0.05$

- $H\_0: \mu\_d \leq 0$ vs $H\_1: \mu\_d > 0$ (ekor kanan)
- $t = \frac{3 - 0}{1.225/\sqrt{5}} = \frac{3}{0.548} = 5.47$
- $t\_{0.05, 4} = 2.132$
- Karena $5.47 > 2.132$, tolak $H\_0$
- **Kesimpulan:** Ada bukti bahwa program diet efektif

#### Uji Hipotesis Proporsi Populasi

**Statistik Uji (Sampel Besar):**
$$Z = \frac{\hat{p} - p\_0}{\sqrt{\frac{p\_0(1-p\_0)}{n}}}$$

**Contoh:**
Klaim: Proporsi setuju = 50%
Data: 600 dari 1000 setuju, $\alpha = 0.05$

- $H\_0: p = 0.5$ vs $H\_1: p \neq 0.5$
- $\hat{p} = 0.6$
- $Z = \frac{0.6 - 0.5}{\sqrt{\frac{0.5 \times 0.5}{1000}}} = \frac{0.1}{0.0158} = 6.33$
- Daerah penolakan: $|Z| > 1.96$
- Karena $6.33 > 1.96$, tolak $H\_0$
- **Kesimpulan:** Ada bukti bahwa proporsi setuju tidak sama dengan 50%

#### Uji Hipotesis Beda Dua Proporsi Populasi

**Statistik Uji:**
$$Z = \frac{(\hat{p}\_1 - \hat{p}\_2) - (p\_1 - p\_2)\_0}{\sqrt{\frac{\hat{p}(1-\hat{p})}{n\_1} + \frac{\hat{p}(1-\hat{p})}{n\_2}}}$$

dimana $\hat{p} = \frac{X\_1 + X\_2}{n\_1 + n\_2}$ adalah pooled proportion.

**Contoh:**
Uji apakah proporsi kelompok 1 berbeda dari kelompok 2:

- Kelompok 1: 600 dari 1000 ($\hat{p}\_1 = 0.6$)
- Kelompok 2: 400 dari 800 ($\hat{p}\_2 = 0.5$)
- $\alpha = 0.05$

- $H\_0: p\_1 = p\_2$ vs $H\_1: p\_1 \neq p\_2$
- $\hat{p} = \frac{600 + 400}{1000 + 800} = \frac{1000}{1800} = 0.556$
- $Z = \frac{0.6 - 0.5}{\sqrt{\frac{0.556 \times 0.444}{1000} + \frac{0.556 \times 0.444}{800}}} = \frac{0.1}{0.0235} = 4.26$
- Karena $|4.26| > 1.96$, tolak $H\_0$
- **Kesimpulan:** Ada bukti bahwa proporsi kedua kelompok berbeda

---

## Hubungan Dua Peubah Numerik / Analisis Korelasi

### Scatter Plot

**Konsep:** Grafik yang menampilkan hubungan antara dua peubah numerik.

**Cara Membuat:**

- Sumbu X: peubah bebas (independent variable)
- Sumbu Y: peubah terikat (dependent variable)
- Setiap titik mewakili satu observasi

**Pola Hubungan:**

1. **Positif:** Jika $X$ naik, $Y$ cenderung naik (garis miring ke atas)
2. **Negatif:** Jika $X$ naik, $Y$ cenderung turun (garis miring ke bawah)
3. **Tidak ada hubungan:** Titik-titik tersebar acak
4. **Non-linear:** Pola kurva (bukan garis lurus)

<div class="scatter-plot-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .scatter-plot-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .scatter-plot-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .scatter-plot-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .scatter-plot-viz h4 {
          color: #f3f4f6 !important;
        }
        .scatter-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 15px 0;
        }
        .scatter-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 12px;
          background: #f8f9fa;
        }
        html.dark .scatter-item {
          border-color: #374151;
          background: #111827;
        }
        .scatter-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
          text-align: center;
        }
        html.dark .scatter-title {
          color: #f3f4f6 !important;
        }
        .scatter-svg-container {
          width: 100%;
          height: 120px;
        }
        .scatter-svg {
          width: 100%;
          height: 100%;
        }
        .axis-line {
          stroke: #95a5a6;
          stroke-width: 1.5;
        }
        html.dark .axis-line {
          stroke: #6b7280;
        }
        .grid-line {
          stroke: #e0e0e0;
          stroke-width: 0.5;
        }
        html.dark .grid-line {
          stroke: #374151;
        }
        .scatter-dot {
          fill: #3498db;
          opacity: 0.7;
        }
        html.dark .scatter-dot {
          fill: #60a5fa;
        }
        .trend-line {
          stroke: #e74c3c;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 3,3;
        }
        html.dark .trend-line {
          stroke: #f87171;
        }
        .scatter-axis-label {
          font-size: 0.65rem;
          fill: #666;
        }
        html.dark .scatter-axis-label {
          fill: #9ca3af !important;
        }
        .correlation-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-align: center;
          margin-top: 5px;
          color: #2c3e50;
        }
        html.dark .correlation-label {
          color: #f3f4f6 !important;
        }
        @media (max-width: 639px) {
          .scatter-grid {
            grid-template-columns: 1fr;
          }
          .scatter-svg-container {
            height: 150px;
          }
        }
        @media (min-width: 640px) {
          .scatter-plot-viz {
            max-width: 750px;
            padding: 1.5625rem;
          }
          .scatter-svg-container {
            height: 140px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Pola Hubungan dalam Scatter Plot</h4>

<div class="scatter-grid">
<div class="scatter-item">
<div class="scatter-title">Korelasi Positif Kuat</div>
<div class="scatter-svg-container">
<svg class="scatter-svg" viewBox="0 0 150 120" preserveAspectRatio="xMidYMid meet">
<line x1="20" y1="10" x2="20" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="axis-line"/>
<line x1="20" y1="10" x2="20" y2="100" class="axis-line"/>
<line x1="25" y1="95" x2="135" y2="15" class="trend-line"/>
<circle cx="30" cy="90" r="3" class="scatter-dot"/>
<circle cx="40" cy="82" r="3" class="scatter-dot"/>
<circle cx="50" cy="70" r="3" class="scatter-dot"/>
<circle cx="60" cy="65" r="3" class="scatter-dot"/>
<circle cx="70" cy="55" r="3" class="scatter-dot"/>
<circle cx="80" cy="48" r="3" class="scatter-dot"/>
<circle cx="90" cy="38" r="3" class="scatter-dot"/>
<circle cx="100" cy="32" r="3" class="scatter-dot"/>
<circle cx="110" cy="25" r="3" class="scatter-dot"/>
<circle cx="120" cy="20" r="3" class="scatter-dot"/>
<text x="80" y="115" class="scatter-axis-label">X</text>
<text x="8" y="55" class="scatter-axis-label">Y</text>
</svg>
</div>
<div class="correlation-label">r ≈ +0.95</div>
</div>
<div class="scatter-item">
<div class="scatter-title">Korelasi Negatif Kuat</div>
<div class="scatter-svg-container">
<svg class="scatter-svg" viewBox="0 0 150 120" preserveAspectRatio="xMidYMid meet">
<line x1="20" y1="10" x2="20" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="axis-line"/>
<line x1="20" y1="10" x2="20" y2="100" class="axis-line"/>
<line x1="25" y1="15" x2="135" y2="95" class="trend-line"/>
<circle cx="30" cy="20" r="3" class="scatter-dot"/>
<circle cx="40" cy="25" r="3" class="scatter-dot"/>
<circle cx="50" cy="32" r="3" class="scatter-dot"/>
<circle cx="60" cy="38" r="3" class="scatter-dot"/>
<circle cx="70" cy="48" r="3" class="scatter-dot"/>
<circle cx="80" cy="55" r="3" class="scatter-dot"/>
<circle cx="90" cy="65" r="3" class="scatter-dot"/>
<circle cx="100" cy="70" r="3" class="scatter-dot"/>
<circle cx="110" cy="82" r="3" class="scatter-dot"/>
<circle cx="120" cy="90" r="3" class="scatter-dot"/>
<text x="80" y="115" class="scatter-axis-label">X</text>
<text x="8" y="55" class="scatter-axis-label">Y</text>
</svg>
</div>
<div class="correlation-label">r ≈ -0.95</div>
</div>
<div class="scatter-item">
<div class="scatter-title">Tidak Ada Korelasi</div>
<div class="scatter-svg-container">
<svg class="scatter-svg" viewBox="0 0 150 120" preserveAspectRatio="xMidYMid meet">
<line x1="20" y1="10" x2="20" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="axis-line"/>
<line x1="20" y1="10" x2="20" y2="100" class="axis-line"/>
<circle cx="35" cy="60" r="3" class="scatter-dot"/>
<circle cx="45" cy="35" r="3" class="scatter-dot"/>
<circle cx="55" cy="75" r="3" class="scatter-dot"/>
<circle cx="65" cy="50" r="3" class="scatter-dot"/>
<circle cx="75" cy="25" r="3" class="scatter-dot"/>
<circle cx="85" cy="65" r="3" class="scatter-dot"/>
<circle cx="95" cy="40" r="3" class="scatter-dot"/>
<circle cx="105" cy="80" r="3" class="scatter-dot"/>
<circle cx="115" cy="55" r="3" class="scatter-dot"/>
<circle cx="125" cy="30" r="3" class="scatter-dot"/>
<text x="80" y="115" class="scatter-axis-label">X</text>
<text x="8" y="55" class="scatter-axis-label">Y</text>
</svg>
</div>
<div class="correlation-label">r ≈ 0</div>
</div>
<div class="scatter-item">
<div class="scatter-title">Korelasi Positif Sedang</div>
<div class="scatter-svg-container">
<svg class="scatter-svg" viewBox="0 0 150 120" preserveAspectRatio="xMidYMid meet">
<line x1="20" y1="10" x2="20" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="grid-line"/>
<line x1="20" y1="100" x2="140" y2="100" class="axis-line"/>
<line x1="20" y1="10" x2="20" y2="100" class="axis-line"/>
<line x1="25" y1="85" x2="135" y2="25" class="trend-line"/>
<circle cx="30" cy="80" r="3" class="scatter-dot"/>
<circle cx="40" cy="75" r="3" class="scatter-dot"/>
<circle cx="50" cy="65" r="3" class="scatter-dot"/>
<circle cx="60" cy="70" r="3" class="scatter-dot"/>
<circle cx="70" cy="55" r="3" class="scatter-dot"/>
<circle cx="80" cy="50" r="3" class="scatter-dot"/>
<circle cx="90" cy="45" r="3" class="scatter-dot"/>
<circle cx="100" cy="40" r="3" class="scatter-dot"/>
<circle cx="110" cy="35" r="3" class="scatter-dot"/>
<circle cx="120" cy="30" r="3" class="scatter-dot"/>
<text x="80" y="115" class="scatter-axis-label">X</text>
<text x="8" y="55" class="scatter-axis-label">Y</text>
</svg>
</div>
<div class="correlation-label">r ≈ +0.65</div>
</div>
  </div>
</div>

**Contoh:**
Data tinggi (cm) vs berat (kg):

- Scatter plot menunjukkan pola positif: semakin tinggi, semakin berat
- Titik-titik membentuk pola yang mengarah ke atas kanan

### Koefisien Korelasi

**Konsep:** Ukuran kekuatan dan arah hubungan linear antara dua peubah.

**Koefisien Korelasi Pearson (Populasi):**
$$\rho = \frac{\text{Cov}(X, Y)}{\sigma\_X \sigma\_Y}$$

**Koefisien Korelasi Pearson (Sampel):**
$$r = \frac{\sum (x\_i - \bar{x})(y\_i - \bar{y})}{\sqrt{\sum (x\_i - \bar{x})^2 \sum (y\_i - \bar{y})^2}}$$

**Rumus Alternatif (Lebih Mudah):**
$$r = \frac{n\sum x\_i y\_i - \sum x\_i \sum y\_i}{\sqrt{[n\sum x\_i^2 - (\sum x\_i)^2][n\sum y\_i^2 - (\sum y\_i)^2]}}$$

**Sifat-sifat:**

- $-1 \leq r \leq 1$
- $r = 1$: Korelasi positif sempurna (garis lurus naik)
- $r = -1$: Korelasi negatif sempurna (garis lurus turun)
- $r = 0$: Tidak ada korelasi linear
- $|r|$ mendekati 1: Hubungan linear kuat
- $|r|$ mendekati 0: Hubungan linear lemah

**Interpretasi:**

- $|r| > 0.7$: Kuat
- $0.3 < |r| \leq 0.7$: Sedang
- $|r| \leq 0.3$: Lemah

**Contoh:**
Data tinggi (X) dan berat (Y):

| $x$     | $y$     | $x^2$      | $y^2$     | $xy$      |
| ------- | ------- | ---------- | --------- | --------- |
| 160     | 50      | 25600      | 2500      | 8000      |
| 165     | 55      | 27225      | 3025      | 9075      |
| 170     | 60      | 28900      | 3600      | 10200     |
| 175     | 65      | 30625      | 4225      | 11375     |
| 180     | 70      | 32400      | 4900      | 12600     |
| **850** | **300** | **144750** | **18250** | **51250** |

- $n = 5$
- $\sum x = 850$, $\sum y = 300$
- $\sum x^2 = 144750$, $\sum y^2 = 18250$, $\sum xy = 51250$

$$r = \frac{5 \times 51250 - 850 \times 300}{\sqrt{[5 \times 144750 - 850^2][5 \times 18250 - 300^2]}}$$

$$r = \frac{256250 - 255000}{\sqrt{[723750 - 722500][91250 - 90000]}} = \frac{1250}{\sqrt{1250 \times 1250}} = \frac{1250}{1250} = 1$$

**Interpretasi:** Korelasi positif sempurna (dalam contoh ini karena data dibuat linear sempurna).

**Catatan Penting:**

- Korelasi tidak berarti kausalitas (hubungan sebab-akibat)
- Korelasi hanya mengukur hubungan linear
- Korelasi bisa tinggi meskipun hubungan sebenarnya non-linear

## Analisis Regresi Linear

### Konsep: Mencari Garis Lurus yang Paling Menggambarkan Pola Hubungan

**Tujuan:** Menemukan persamaan garis lurus yang paling baik memprediksi $Y$ berdasarkan $X$.

**Model Regresi Linear Sederhana:**
$$Y = \beta\_0 + \beta\_1 X + \varepsilon$$

dimana:

- $Y$ = peubah terikat (dependent variable)
- $X$ = peubah bebas (independent variable)
- $\beta\_0$ = intercept (titik potong sumbu Y)
- $\beta\_1$ = slope (kemiringan garis)
- $\varepsilon$ = error (selisih antara nilai observasi dan nilai prediksi)

### Menentukan Persamaan Regresi

#### Populasi

**Model:**
$$Y = \beta\_0 + \beta\_1 X + \varepsilon$$

dimana:

- $\beta\_0$ dan $\beta\_1$ adalah parameter populasi (tidak diketahui)
- $\varepsilon \sim N(0, \sigma^2)$ (error berdistribusi normal dengan rata-rata 0)

#### Sampel

**Persamaan Regresi Terduga:**
$$\hat{y} = b\_0 + b\_1 x$$

dimana:

- $\hat{y}$ = nilai prediksi $Y$
- $b\_0$ = penduga $\beta\_0$
- $b\_1$ = penduga $\beta\_1$

**Metode Kuadrat Terkecil (Least Squares Method):**

Mencari $b\_0$ dan $b\_1$ yang meminimumkan:
$$\sum (y\_i - \hat{y}\_i)^2 = \sum (y\_i - b\_0 - b\_1 x\_i)^2$$

**Rumus Koefisien Regresi:**

**Slope:**
$$b\_1 = \frac{\sum (x\_i - \bar{x})(y\_i - \bar{y})}{\sum (x\_i - \bar{x})^2} = \frac{n\sum x\_i y\_i - \sum x\_i \sum y\_i}{n\sum x\_i^2 - (\sum x\_i)^2}$$

**Intercept:**
$$b\_0 = \bar{y} - b\_1 \bar{x}$$

**Contoh:**
Data tinggi (X, cm) dan berat (Y, kg):

| $x$     | $y$     | $x^2$      | $y^2$     | $xy$      |
| ------- | ------- | ---------- | --------- | --------- |
| 160     | 50      | 25600      | 2500      | 8000      |
| 165     | 55      | 27225      | 3025      | 9075      |
| 170     | 60      | 28900      | 3600      | 10200     |
| 175     | 65      | 30625      | 4225      | 11375     |
| 180     | 70      | 32400      | 4900      | 12600     |
| **850** | **300** | **144750** | **18250** | **51250** |

- $n = 5$
- $\bar{x} = \frac{850}{5} = 170$
- $\bar{y} = \frac{300}{5} = 60$

**Menghitung $b\_1$:**
$$b\_1 = \frac{5 \times 51250 - 850 \times 300}{5 \times 144750 - 850^2} = \frac{256250 - 255000}{723750 - 722500} = \frac{1250}{1250} = 1$$

**Menghitung $b\_0$:**
$$b\_0 = 60 - 1 \times 170 = 60 - 170 = -110$$

**Persamaan Regresi:**
$$\hat{y} = -110 + 1 \times x$$

<div class="regression-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .regression-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .regression-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .regression-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .regression-viz h4 {
          color: #f3f4f6 !important;
        }
        .reg-svg-container {
          width: 100%;
          height: 220px;
        }
        .reg-svg {
          width: 100%;
          height: 100%;
        }
        .reg-axis {
          stroke: #95a5a6;
          stroke-width: 1.5;
        }
        html.dark .reg-axis {
          stroke: #6b7280;
        }
        .reg-point {
          fill: #3498db;
        }
        html.dark .reg-point {
          fill: #60a5fa;
        }
        .reg-line {
          stroke: #e74c3c;
          stroke-width: 2.5;
        }
        html.dark .reg-line {
          stroke: #f87171;
        }
        .reg-residual {
          stroke: #95a5a6;
          stroke-width: 1;
          stroke-dasharray: 3,3;
        }
        html.dark .reg-residual {
          stroke: #6b7280;
        }
        .reg-label {
          font-size: 0.7rem;
          fill: #2c3e50;
        }
        html.dark .reg-label {
          fill: #f3f4f6;
        }
        .reg-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
          font-size: 0.75rem;
        }
        .reg-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .reg-legend-item {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .regression-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Garis Regresi: ŷ = -110 + x</h4>

<div class="reg-svg-container">
    <svg class="reg-svg" viewBox="0 0 300 200">
      <line x1="40" y1="180" x2="280" y2="180" class="reg-axis"/>
      <line x1="40" y1="180" x2="40" y2="20" class="reg-axis"/>
      <text x="160" y="198" class="reg-label" text-anchor="middle">Tinggi (cm)</text>
      <text x="15" y="100" class="reg-label" text-anchor="middle" transform="rotate(-90, 15, 100)">Berat (kg)</text>
      <line x1="60" y1="160" x2="260" y2="40" class="reg-line"/>
      <line x1="80" y1="160" x2="80" y2="148" class="reg-residual"/>
      <circle cx="80" cy="148" r="5" class="reg-point"/>
      <line x1="120" y1="140" x2="120" y2="128" class="reg-residual"/>
      <circle cx="120" cy="128" r="5" class="reg-point"/>
      <circle cx="160" cy="100" r="5" class="reg-point"/>
      <line x1="200" y1="80" x2="200" y2="72" class="reg-residual"/>
      <circle cx="200" cy="72" r="5" class="reg-point"/>
      <line x1="240" y1="60" x2="240" y2="52" class="reg-residual"/>
      <circle cx="240" cy="52" r="5" class="reg-point"/>
      <text x="80" y="175" class="reg-label" text-anchor="middle">160</text>
      <text x="120" y="175" class="reg-label" text-anchor="middle">165</text>
      <text x="160" y="175" class="reg-label" text-anchor="middle">170</text>
      <text x="200" y="175" class="reg-label" text-anchor="middle">175</text>
      <text x="240" y="175" class="reg-label" text-anchor="middle">180</text>
      <text x="32" y="165" class="reg-label" text-anchor="middle">50</text>
      <text x="32" y="125" class="reg-label" text-anchor="middle">60</text>
      <text x="32" y="85" class="reg-label" text-anchor="middle">70</text>
      <text x="32" y="45" class="reg-label" text-anchor="middle">80</text>
    </svg>
  </div>
  
  <div class="reg-legend">
    <div class="reg-legend-item">
      <span style="color: #3498db;">●</span> Data observasi
    </div>
    <div class="reg-legend-item">
      <span style="color: #e74c3c;">━</span> Garis regresi
    </div>
    <div class="reg-legend-item">
      <span style="color: #95a5a6;">┆</span> Residual (error)
    </div>
  </div>
</div>

**Interpretasi:**

- $b\_1 = 1$: Setiap kenaikan tinggi 1 cm, berat meningkat 1 kg
- $b\_0 = -110$: Jika tinggi = 0 (tidak masuk akal), berat = -110 kg (hanya untuk perhitungan, tidak untuk interpretasi praktis)

**Prediksi:**
Untuk tinggi 172 cm:
$$\hat{y} = -110 + 1 \times 172 = 62 \text{ kg}$$

### Uji Parameter Regresi

**Uji untuk Slope ($\beta\_1$):**

**Hipotesis:**

- $H\_0: \beta\_1 = 0$ (tidak ada hubungan linear)
- $H\_1: \beta\_1 \neq 0$ (ada hubungan linear)

**Statistik Uji:**
$$t = \frac{b\_1}{SE(b\_1)}$$

dimana:
$$SE(b\_1) = \frac{s\_e}{\sqrt{\sum (x\_i - \bar{x})^2}}$$

dan:
$$s\_e = \sqrt{\frac{\sum (y\_i - \hat{y}\_i)^2}{n-2}} = \sqrt{MSE}$$

**Keputusan:** Tolak $H\_0$ jika $|t| > t\_{\alpha/2, n-2}$

**Uji untuk Intercept ($\beta\_0$):**

**Hipotesis:**

- $H\_0: \beta\_0 = 0$
- $H\_1: \beta\_0 \neq 0$

**Statistik Uji:**
$$t = \frac{b\_0}{SE(b\_0)}$$

dimana:
$$SE(b\_0) = s\_e \sqrt{\frac{1}{n} + \frac{\bar{x}^2}{\sum (x\_i - \bar{x})^2}}$$

### Menilai Kebaikan Model Regresi: Koefisien Determinasi

**Konsep:** Mengukur seberapa baik model regresi menjelaskan variasi dalam data.

**Koefisien Determinasi ($R^2$):**

**Rumus:**
$$R^2 = \frac{SSR}{SST} = 1 - \frac{SSE}{SST}$$

dimana:

- **SST (Total Sum of Squares):** $\sum (y\_i - \bar{y})^2$ (total variasi dalam $Y$)
- **SSR (Regression Sum of Squares):** $\sum (\hat{y}\_i - \bar{y})^2$ (variasi yang dijelaskan oleh regresi)
- **SSE (Error Sum of Squares):** $\sum (y\_i - \hat{y}\_i)^2$ (variasi yang tidak dijelaskan)

**Sifat-sifat:**

- $0 \leq R^2 \leq 1$
- $R^2 = 1$: Model sempurna (semua titik tepat di garis)
- $R^2 = 0$: Model tidak menjelaskan variasi sama sekali
- $R^2$ mendekati 1: Model baik

**Hubungan dengan Korelasi:**
$$R^2 = r^2$$

dimana $r$ adalah koefisien korelasi.

**Contoh:**
Dari data sebelumnya, jika dihitung:

- SST = 250
- SSR = 250
- SSE = 0

Maka:
$$R^2 = \frac{250}{250} = 1$$

**Interpretasi:** Model menjelaskan 100% variasi dalam berat badan (dalam contoh ini karena data dibuat linear sempurna).

**Rumus Alternatif:**
$$R^2 = \frac{[\sum (x\_i - \bar{x})(y\_i - \bar{y})]^2}{\sum (x\_i - \bar{x})^2 \sum (y\_i - \bar{y})^2} = r^2$$

**Koefisien Determinasi Disesuaikan (Adjusted $R^2$):**

Untuk model dengan lebih dari satu peubah bebas:
$$R\_{adj}^2 = 1 - \frac{SSE/(n-k-1)}{SST/(n-1)}$$

dimana $k$ adalah banyaknya peubah bebas.

---

## Ringkasan Rumus Penting

### Statistika Deskriptif

- Mean: $\bar{x} = \frac{\sum x\_i}{n}$
- Ragam sampel: $s^2 = \frac{\sum (x\_i - \bar{x})^2}{n-1}$
- Simpangan baku: $s = \sqrt{s^2}$
- IQR: $Q\_3 - Q\_1$

### Peluang

- Peluang klasik: $P(A) = \frac{n(A)}{n(S)}$
- Peluang komplemen: $P(A^c) = 1 - P(A)$
- Penjumlahan: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- Perkalian: $P(A \cap B) = P(A) \times P(B|A)$
- Peluang bersyarat: $P(A|B) = \frac{P(A \cap B)}{P(B)}$

### Sebaran Normal

- Transformasi: $Z = \frac{X - \mu}{\sigma}$
- Peluang: $P(a \leq X \leq b) = P\left(\frac{a-\mu}{\sigma} \leq Z \leq \frac{b-\mu}{\sigma}\right)$

### Selang Kepercayaan

- Rata-rata ($\sigma$ diketahui): $\bar{x} \pm z\_{\alpha/2} \frac{\sigma}{\sqrt{n}}$
- Rata-rata ($\sigma$ tidak diketahui): $\bar{x} \pm t\_{\alpha/2, n-1} \frac{s}{\sqrt{n}}$
- Proporsi: $\hat{p} \pm z\_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

### Uji Hipotesis

- Z-test: $Z = \frac{\bar{x} - \mu\_0}{\sigma/\sqrt{n}}$
- t-test: $t = \frac{\bar{x} - \mu\_0}{s/\sqrt{n}}$
- Proporsi: $Z = \frac{\hat{p} - p\_0}{\sqrt{\frac{p\_0(1-p\_0)}{n}}}$

### Regresi Linear

- Slope: $b\_1 = \frac{\sum (x\_i - \bar{x})(y\_i - \bar{y})}{\sum (x\_i - \bar{x})^2}$
- Intercept: $b\_0 = \bar{y} - b\_1 \bar{x}$
- Koefisien determinasi: $R^2 = \frac{SSR}{SST} = r^2$

---
