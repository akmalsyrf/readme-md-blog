---
title: 'Tabel Periodik Unsur'
description: 'Panduan lengkap tentang semua 118 unsur kimia dalam tabel periodik: struktur atom, sifat-sifat, kegunaan, dan pola periodik'
pubDate: 2026-01-25
author: 'Akmal'
category: 'Kimia'
tags: ['kimia', 'tabel-periodik', 'unsur-kimia', 'atom']
---

Tabel periodik unsur adalah salah satu pencapaian terbesar dalam ilmu kimia. Cheatsheet ini membahas secara komprehensif **semua 118 unsur kimia** yang dikenal, dari hidrogen hingga oganesson, termasuk struktur atom, sifat-sifat fisik dan kimia, kegunaan praktis, dan pola periodik yang mengatur perilaku mereka.

---

## 1. Pengenalan Tabel Periodik

### 1.1 Sejarah dan Perkembangan

Tabel periodik modern dikembangkan oleh **Dmitri Mendeleev** pada tahun 1869. Mendeleev mengatur unsur berdasarkan massa atom dan sifat kimia, bahkan meramalkan keberadaan unsur yang belum ditemukan.

**Prinsip Organisasi:**

- **Nomor Atom (Z)**: Jumlah proton dalam inti atom
- **Massa Atom**: Rata-rata massa isotop dengan kelimpahan alami
- **Konfigurasi Elektron**: Distribusi elektron dalam orbital
- **Sifat Periodik**: Pola berulang berdasarkan konfigurasi elektron

### 1.2 Struktur Tabel Periodik

Tabel periodik modern diorganisir dalam:

- **7 Periode** (baris horizontal): Berdasarkan tingkat energi utama
- **18 Golongan** (kolom vertikal): Berdasarkan jumlah elektron valensi
- **4 Blok**: s, p, d, f berdasarkan orbital terakhir yang terisi

<div class="periodic-table-structure-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .periodic-table-structure-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .periodic-table-structure-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .pts-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .pts-viz h4 {
          color: #f3f4f6 !important;
        }
        .pts-grid {
          display: grid;
          grid-template-columns: repeat(18, 1fr);
          gap: 2px;
          max-width: 900px;
          margin: 0 auto;
          font-size: 0.65rem;
        }
        .pts-element {
          aspect-ratio: 1;
          border: 1px solid #bdc3c7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2px;
          position: relative;
        }
        html.dark .pts-element {
          border-color: #4b5563;
        }
        .pts-symbol {
          font-weight: bold;
          font-size: 0.7rem;
        }
        .pts-number {
          font-size: 0.5rem;
          position: absolute;
          top: 1px;
          left: 2px;
        }
        .pts-block-s { background: #ff6b6b; }
        .pts-block-p { background: #4ecdc4; }
        .pts-block-d { background: #ffe66d; }
        .pts-block-f { background: #95e1d3; }
        html.dark .pts-block-s { background: #dc2626; }
        html.dark .pts-block-p { background: #0891b2; }
        html.dark .pts-block-d { background: #ca8a04; }
        html.dark .pts-block-f { background: #059669; }
        .pts-legend {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
          flex-wrap: wrap;
        }
        .pts-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
        }
        .pts-legend-box {
          width: 20px;
          height: 20px;
          border: 1px solid #bdc3c7;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Struktur Tabel Periodik: Blok s, p, d, dan f</h4>
  <div class="pts-grid" id="ptsTable"></div>
  <div class="pts-legend">
    <div class="pts-legend-item">
      <div class="pts-legend-box pts-block-s"></div>
      <span>Blok s</span>
    </div>
    <div class="pts-legend-item">
      <div class="pts-legend-box pts-block-p"></div>
      <span>Blok p</span>
    </div>
    <div class="pts-legend-item">
      <div class="pts-legend-box pts-block-d"></div>
      <span>Blok d</span>
    </div>
    <div class="pts-legend-item">
      <div class="pts-legend-box pts-block-f"></div>
      <span>Blok f</span>
    </div>
  </div>
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const elements = [
        {num: 1, sym: 'H', block: 's'}, {num: 2, sym: 'He', block: 's'},
        {num: 3, sym: 'Li', block: 's'}, {num: 4, sym: 'Be', block: 's'},
        {num: 5, sym: 'B', block: 'p'}, {num: 6, sym: 'C', block: 'p'}, {num: 7, sym: 'N', block: 'p'}, {num: 8, sym: 'O', block: 'p'}, {num: 9, sym: 'F', block: 'p'}, {num: 10, sym: 'Ne', block: 'p'},
        {num: 11, sym: 'Na', block: 's'}, {num: 12, sym: 'Mg', block: 's'},
        {num: 13, sym: 'Al', block: 'p'}, {num: 14, sym: 'Si', block: 'p'}, {num: 15, sym: 'P', block: 'p'}, {num: 16, sym: 'S', block: 'p'}, {num: 17, sym: 'Cl', block: 'p'}, {num: 18, sym: 'Ar', block: 'p'},
        {num: 19, sym: 'K', block: 's'}, {num: 20, sym: 'Ca', block: 's'},
        {num: 21, sym: 'Sc', block: 'd'}, {num: 22, sym: 'Ti', block: 'd'}, {num: 23, sym: 'V', block: 'd'}, {num: 24, sym: 'Cr', block: 'd'}, {num: 25, sym: 'Mn', block: 'd'}, {num: 26, sym: 'Fe', block: 'd'}, {num: 27, sym: 'Co', block: 'd'}, {num: 28, sym: 'Ni', block: 'd'}, {num: 29, sym: 'Cu', block: 'd'}, {num: 30, sym: 'Zn', block: 'd'},
        {num: 31, sym: 'Ga', block: 'p'}, {num: 32, sym: 'Ge', block: 'p'}, {num: 33, sym: 'As', block: 'p'}, {num: 34, sym: 'Se', block: 'p'}, {num: 35, sym: 'Br', block: 'p'}, {num: 36, sym: 'Kr', block: 'p'},
        {num: 37, sym: 'Rb', block: 's'}, {num: 38, sym: 'Sr', block: 's'},
        {num: 39, sym: 'Y', block: 'd'}, {num: 40, sym: 'Zr', block: 'd'}, {num: 41, sym: 'Nb', block: 'd'}, {num: 42, sym: 'Mo', block: 'd'}, {num: 43, sym: 'Tc', block: 'd'}, {num: 44, sym: 'Ru', block: 'd'}, {num: 45, sym: 'Rh', block: 'd'}, {num: 46, sym: 'Pd', block: 'd'}, {num: 47, sym: 'Ag', block: 'd'}, {num: 48, sym: 'Cd', block: 'd'},
        {num: 49, sym: 'In', block: 'p'}, {num: 50, sym: 'Sn', block: 'p'}, {num: 51, sym: 'Sb', block: 'p'}, {num: 52, sym: 'Te', block: 'p'}, {num: 53, sym: 'I', block: 'p'}, {num: 54, sym: 'Xe', block: 'p'},
        {num: 55, sym: 'Cs', block: 's'}, {num: 56, sym: 'Ba', block: 's'},
        {num: 57, sym: 'La', block: 'f'}, {num: 72, sym: 'Hf', block: 'd'}, {num: 73, sym: 'Ta', block: 'd'}, {num: 74, sym: 'W', block: 'd'}, {num: 75, sym: 'Re', block: 'd'}, {num: 76, sym: 'Os', block: 'd'}, {num: 77, sym: 'Ir', block: 'd'}, {num: 78, sym: 'Pt', block: 'd'}, {num: 79, sym: 'Au', block: 'd'}, {num: 80, sym: 'Hg', block: 'd'},
        {num: 81, sym: 'Tl', block: 'p'}, {num: 82, sym: 'Pb', block: 'p'}, {num: 83, sym: 'Bi', block: 'p'}, {num: 84, sym: 'Po', block: 'p'}, {num: 85, sym: 'At', block: 'p'}, {num: 86, sym: 'Rn', block: 'p'},
        {num: 87, sym: 'Fr', block: 's'}, {num: 88, sym: 'Ra', block: 's'},
        {num: 89, sym: 'Ac', block: 'f'}, {num: 104, sym: 'Rf', block: 'd'}, {num: 105, sym: 'Db', block: 'd'}, {num: 106, sym: 'Sg', block: 'd'}, {num: 107, sym: 'Bh', block: 'd'}, {num: 108, sym: 'Hs', block: 'd'}, {num: 109, sym: 'Mt', block: 'd'}, {num: 110, sym: 'Ds', block: 'd'}, {num: 111, sym: 'Rg', block: 'd'}, {num: 112, sym: 'Cn', block: 'd'},
        {num: 113, sym: 'Nh', block: 'p'}, {num: 114, sym: 'Fl', block: 'p'}, {num: 115, sym: 'Mc', block: 'p'}, {num: 116, sym: 'Lv', block: 'p'}, {num: 117, sym: 'Ts', block: 'p'}, {num: 118, sym: 'Og', block: 'p'}
      ];
      const lanthanides = [58,59,60,61,62,63,64,65,66,67,68,69,70,71].map(n => ({num: n, sym: ['Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu'][n-58], block: 'f'}));
      const actinides = [90,91,92,93,94,95,96,97,98,99,100,101,102,103].map(n => ({num: n, sym: ['Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'][n-90], block: 'f'}));
      function createCell(el, container) {
        const cell = document.createElement('div');
        cell.className = `pts-element pts-block-${el.block}`;
        cell.innerHTML = `<span class="pts-number">${el.num}</span><span class="pts-symbol">${el.sym}</span>`;
        container.appendChild(cell);
      }
      function createEmpty(container) {
        container.appendChild(document.createElement('div'));
      }
      const container = document.getElementById('ptsTable');
      if (container) {
        // Period 1: H (gol 1), [spacer 16], He (gol 18)
        createCell(elements[0], container); // H
        for (let i = 0; i < 16; i++) createEmpty(container);
        createCell(elements[1], container); // He
        // Period 2: Li-Be (gol 1-2), [spacer 10], B-Ne (gol 13-18)
        createCell(elements[2], container); // Li
        createCell(elements[3], container); // Be
        for (let i = 0; i < 10; i++) createEmpty(container);
        createCell(elements[4], container); // B
        createCell(elements[5], container); // C
        createCell(elements[6], container); // N
        createCell(elements[7], container); // O
        createCell(elements[8], container); // F
        createCell(elements[9], container); // Ne
        // Period 3: Na-Mg (gol 1-2), [spacer 10], Al-Ar (gol 13-18)
        createCell(elements[10], container); // Na
        createCell(elements[11], container); // Mg
        for (let i = 0; i < 10; i++) createEmpty(container);
        createCell(elements[12], container); // Al
        createCell(elements[13], container); // Si
        createCell(elements[14], container); // P
        createCell(elements[15], container); // S
        createCell(elements[16], container); // Cl
        createCell(elements[17], container); // Ar
        // Period 4: K-Ca (gol 1-2), Sc-Zn (gol 3-12), Ga-Kr (gol 13-18)
        createCell(elements[18], container); // K
        createCell(elements[19], container); // Ca
        createCell(elements[20], container); // Sc
        createCell(elements[21], container); // Ti
        createCell(elements[22], container); // V
        createCell(elements[23], container); // Cr
        createCell(elements[24], container); // Mn
        createCell(elements[25], container); // Fe
        createCell(elements[26], container); // Co
        createCell(elements[27], container); // Ni
        createCell(elements[28], container); // Cu
        createCell(elements[29], container); // Zn
        createCell(elements[30], container); // Ga
        createCell(elements[31], container); // Ge
        createCell(elements[32], container); // As
        createCell(elements[33], container); // Se
        createCell(elements[34], container); // Br
        createCell(elements[35], container); // Kr
        // Period 5: Rb-Sr (gol 1-2), Y-Cd (gol 3-12), In-Xe (gol 13-18)
        createCell(elements[36], container); // Rb
        createCell(elements[37], container); // Sr
        createCell(elements[38], container); // Y
        createCell(elements[39], container); // Zr
        createCell(elements[40], container); // Nb
        createCell(elements[41], container); // Mo
        createCell(elements[42], container); // Tc
        createCell(elements[43], container); // Ru
        createCell(elements[44], container); // Rh
        createCell(elements[45], container); // Pd
        createCell(elements[46], container); // Ag
        createCell(elements[47], container); // Cd
        createCell(elements[48], container); // In
        createCell(elements[49], container); // Sn
        createCell(elements[50], container); // Sb
        createCell(elements[51], container); // Te
        createCell(elements[52], container); // I
        createCell(elements[53], container); // Xe
        // Period 6: Cs-Ba (gol 1-2), La (placeholder), Hf-Hg (gol 4-12), Tl-Rn (gol 13-18)
        createCell(elements[54], container); // Cs
        createCell(elements[55], container); // Ba
        createCell(elements[56], container); // La (lantanida dimulai)
        createCell(elements[57], container); // Hf
        createCell(elements[58], container); // Ta
        createCell(elements[59], container); // W
        createCell(elements[60], container); // Re
        createCell(elements[61], container); // Os
        createCell(elements[62], container); // Ir
        createCell(elements[63], container); // Pt
        createCell(elements[64], container); // Au
        createCell(elements[65], container); // Hg
        createCell(elements[66], container); // Tl
        createCell(elements[67], container); // Pb
        createCell(elements[68], container); // Bi
        createCell(elements[69], container); // Po
        createCell(elements[70], container); // At
        createCell(elements[71], container); // Rn
        // Period 7: Fr-Ra (gol 1-2), Ac (placeholder), Rf-Cn (gol 4-12), Nh-Og (gol 13-18)
        createCell(elements[72], container); // Fr
        createCell(elements[73], container); // Ra
        createCell(elements[74], container); // Ac (aktinida dimulai)
        createCell(elements[75], container); // Rf
        createCell(elements[76], container); // Db
        createCell(elements[77], container); // Sg
        createCell(elements[78], container); // Bh
        createCell(elements[79], container); // Hs
        createCell(elements[80], container); // Mt
        createCell(elements[81], container); // Ds
        createCell(elements[82], container); // Rg
        createCell(elements[83], container); // Cn
        createCell(elements[84], container); // Nh
        createCell(elements[85], container); // Fl
        createCell(elements[86], container); // Mc
        createCell(elements[87], container); // Lv
        createCell(elements[88], container); // Ts
        createCell(elements[89], container); // Og
      }
    })();
  </script>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Visualisasi struktur tabel periodik berdasarkan blok orbital</em>
  </p>
</div>

### 1.3 Sifat Periodik

Beberapa sifat penting yang bervariasi secara periodik:

**Jari-jari Atom:**

- Menurun dari kiri ke kanan dalam periode (peningkatan muatan inti efektif)
- Meningkat dari atas ke bawah dalam golongan (penambahan kulit elektron)

**Energi Ionisasi:**

- Meningkat dari kiri ke kanan dalam periode
- Menurun dari atas ke bawah dalam golongan

**Afinitas Elektron:**

- Umumnya meningkat dari kiri ke kanan
- Menurun dari atas ke bawah

**Elektronegativitas:**

- Meningkat dari kiri ke kanan
- Menurun dari atas ke bawah

---

## 2. Golongan (Groups) dalam Tabel Periodik

### 2.1 Golongan 1: Logam Alkali

**Karakteristik:**

- Sangat reaktif
- Satu elektron valensi (ns¹)
- Mudah kehilangan elektron membentuk kation +1
- Densitas rendah
- Titik leleh dan didih rendah

### 2.2 Golongan 2: Logam Alkali Tanah

**Karakteristik:**

- Dua elektron valensi (ns²)
- Lebih keras dan padat daripada logam alkali
- Reaktif, tetapi kurang reaktif daripada golongan 1

### 2.3 Golongan 3-12: Logam Transisi

**Karakteristik:**

- Mengisi orbital d
- Sifat logam yang baik
- Banyak bilangan oksidasi
- Sering membentuk senyawa berwarna
- Sifat magnetik

### 2.4 Golongan 13: Boron Group

**Karakteristik:**

- Tiga elektron valensi
- Bervariasi dari nonlogam (B) hingga logam (Tl)

### 2.5 Golongan 14: Carbon Group

**Karakteristik:**

- Empat elektron valensi
- Mencakup nonlogam (C), metaloid (Si, Ge), dan logam (Sn, Pb)

### 2.6 Golongan 15: Pnictogens (Nitrogen Group)

**Karakteristik:**

- Lima elektron valensi
- Mencakup gas (N, P), metaloid (As, Sb), dan logam (Bi)

### 2.7 Golongan 16: Chalcogens (Oxygen Group)

**Karakteristik:**

- Enam elektron valensi
- Dua elektron kurang dari konfigurasi gas mulia

### 2.8 Golongan 17: Halogen

**Karakteristik:**

- Tujuh elektron valensi
- Sangat reaktif
- Mudah menerima elektron membentuk anion -1
- Nonlogam diatomik

### 2.9 Golongan 18: Gas Mulia

**Karakteristik:**

- Konfigurasi elektron stabil (ns²np⁶, kecuali He: 1s²)
- Sangat tidak reaktif
- Titik didih sangat rendah

---

## 3. Unsur-Unsur: Detail Lengkap

Berikut adalah pembahasan komprehensif untuk setiap unsur:

### 3.1 Periode 1

#### Hidrogen (H) - Nomor Atom 1

**Informasi Dasar:**

- **Simbol**: H
- **Massa Atom**: 1.008 u
- **Konfigurasi Elektron**: 1s¹
- **Golongan**: 1 (nonlogam)
- **Periode**: 1
- **Blok**: s
- **Elektronegativitas**: 2.20 (Pauling)
- **Titik Leleh**: -259.16°C
- **Titik Didih**: -252.87°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Unsur paling melimpah di alam semesta (~75% massa)
- Dapat bertindak sebagai logam (di bawah tekanan tinggi) atau nonlogam
- Membentuk ikatan kovalen dengan sebagian besar unsur
- Dapat kehilangan elektron (H⁺) atau menerima elektron (H⁻)

**Kegunaan:**

- Produksi amonia (proses Haber-Bosch)
- Hidrogenasi minyak nabati
- Bahan bakar roket
- Sel bahan bakar
- Pengelasan dan pemotongan logam

**Isotop Penting:**

- ¹H (Protium): 99.985%, stabil
- ²H (Deuterium): 0.015%, stabil
- ³H (Tritium): Radioaktif, t½ = 12.32 tahun

---

#### Helium (He) - Nomor Atom 2

**Informasi Dasar:**

- **Simbol**: He
- **Massa Atom**: 4.003 u
- **Konfigurasi Elektron**: 1s²
- **Golongan**: 18 (Gas Mulia)
- **Periode**: 1
- **Blok**: s
- **Elektronegativitas**: Tidak ada (gas mulia)
- **Titik Leleh**: -272.20°C (di bawah tekanan)
- **Titik Didih**: -268.93°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Gas mulia pertama
- Sangat tidak reaktif (tidak membentuk senyawa stabil)
- Titik didih terendah dari semua unsur
- Tidak dapat membeku pada tekanan atmosfer

**Kegunaan:**

- Pengisi balon udara
- Pendingin untuk superkonduktor dan MRI
- Gas pelindung dalam pengelasan
- Campuran pernapasan untuk penyelaman dalam
- Deteksi kebocoran

**Isotop:**

- ³He: 0.0001%, stabil
- ⁴He: 99.9999%, stabil (produk peluruhan radioaktif)

---

### 3.2 Periode 2

#### Litium (Li) - Nomor Atom 3

**Informasi Dasar:**

- **Simbol**: Li
- **Massa Atom**: 6.941 u
- **Konfigurasi Elektron**: [He] 2s¹
- **Golongan**: 1 (Logam Alkali)
- **Periode**: 2
- **Blok**: s
- **Elektronegativitas**: 0.98
- **Titik Leleh**: 180.50°C
- **Titik Didih**: 1342°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Logam alkali paling ringan
- Sangat reaktif dengan air dan udara
- Densitas terendah dari semua logam padat
- Potensial reduksi sangat negatif (-3.04 V)

**Kegunaan:**

- Baterai lithium-ion (elektronik, kendaraan listrik)
- Paduan logam (aluminium-lithium untuk pesawat)
- Obat psikiatri (bipolar disorder)
- Pelumas
- Keramik dan gelas

**Isotop:**

- ⁶Li: 7.59%, stabil
- ⁷Li: 92.41%, stabil

---

#### Berilium (Be) - Nomor Atom 4

**Informasi Dasar:**

- **Simbol**: Be
- **Massa Atom**: 9.012 u
- **Konfigurasi Elektron**: [He] 2s²
- **Golongan**: 2 (Logam Alkali Tanah)
- **Periode**: 2
- **Blok**: s
- **Elektronegativitas**: 1.57
- **Titik Leleh**: 1287°C
- **Titik Didih**: 2470°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Logam alkali tanah paling ringan
- Sangat keras dan rapuh
- Beracun (menyebabkan beriliosis)
- Transparan terhadap sinar-X

**Kegunaan:**

- Paduan tembaga-berilium (pegas, kontak listrik)
- Jendela sinar-X
- Komponen nuklir (moderator neutron)
- Cermin teleskop (James Webb Space Telescope)
- Elektronik (heat sink)

**Isotop:**

- ⁹Be: 100%, stabil

---

#### Boron (B) - Nomor Atom 5

**Informasi Dasar:**

- **Simbol**: B
- **Massa Atom**: 10.81 u
- **Konfigurasi Elektron**: [He] 2s² 2p¹
- **Golongan**: 13
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: 2.04
- **Titik Leleh**: 2076°C
- **Titik Didih**: 3927°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Metaloid (sifat antara logam dan nonlogam)
- Sangat keras (9.5 pada skala Mohs)
- Konduktor listrik yang buruk
- Membentuk ikatan kovalen

**Kegunaan:**

- Borosilikat glass (Pyrex)
- Detergen dan pemutih
- Semikonduktor (doping)
- Bahan bakar roket
- Kontrol reaktor nuklir (penyerap neutron)

**Isotop:**

- ¹⁰B: 19.9%, stabil
- ¹¹B: 80.1%, stabil

---

#### Karbon (C) - Nomor Atom 6

**Informasi Dasar:**

- **Simbol**: C
- **Massa Atom**: 12.011 u
- **Konfigurasi Elektron**: [He] 2s² 2p²
- **Golongan**: 14
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: 2.55
- **Titik Leleh**: 3550°C (diamond)
- **Titik Didih**: 4027°C (sublimasi)
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Dasar kehidupan (biokimia)
- Alotrop: grafit, intan, fullerene, graphene, nanotube
- Dapat membentuk 4 ikatan kovalen
- Dasar kimia organik

**Kegunaan:**

- Bahan bakar (batu bara, minyak, gas)
- Grafit (pensil, elektroda)
- Intan (perhiasan, alat potong)
- Karbon aktif (filter)
- Komposit serat karbon
- Graphene (elektronik masa depan)

**Isotop:**

- ¹²C: 98.89%, stabil (standar massa atom)
- ¹³C: 1.11%, stabil (NMR)
- ¹⁴C: Radioaktif, t½ = 5730 tahun (penanggalan karbon)

**Alotrop Karbon:**

<div class="carbon-allotropes-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .carbon-allotropes-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .carbon-allotropes-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .ca-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .ca-viz h4 {
          color: #f3f4f6 !important;
        }
        .ca-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }
        .ca-item {
          text-align: center;
        }
        .ca-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        html.dark .ca-title {
          color: #f3f4f6;
        }
        .ca-svg {
          width: 100%;
          height: 150px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f9fafb;
        }
        html.dark .ca-svg {
          border-color: #4b5563;
          background: #111827;
        }
        .ca-desc {
          font-size: 0.7rem;
          color: #6b7280;
          margin-top: 8px;
        }
        html.dark .ca-desc {
          color: #9ca3af;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Alotrop Karbon: Struktur dan Sifat</h4>
  <div class="ca-grid">
    <div class="ca-item">
      <div class="ca-title">Grafit</div>
      <svg class="ca-svg" viewBox="0 0 200 150">
        <!-- Hexagonal layers -->
        <g transform="translate(100,30)">
          <path d="M-30,0 L-15,-26 L15,-26 L30,0 L15,26 L-15,26 Z" fill="none" stroke="#2c3e50" stroke-width="2"/>
          <path d="M-30,0 L-15,-26 L15,-26 L30,0 L15,26 L-15,26 Z" transform="translate(-20,40)" fill="none" stroke="#2c3e50" stroke-width="2"/>
          <path d="M-30,0 L-15,-26 L15,-26 L30,0 L15,26 L-15,26 Z" transform="translate(20,40)" fill="none" stroke="#2c3e50" stroke-width="2"/>
          <circle cx="0" cy="0" r="3" fill="#2c3e50"/>
          <circle cx="-15" cy="-26" r="3" fill="#2c3e50"/>
          <circle cx="15" cy="-26" r="3" fill="#2c3e50"/>
          <circle cx="30" cy="0" r="3" fill="#2c3e50"/>
          <circle cx="15" cy="26" r="3" fill="#2c3e50"/>
          <circle cx="-15" cy="26" r="3" fill="#2c3e50"/>
        </g>
        <text x="100" y="140" text-anchor="middle" font-size="10" fill="#6b7280">Lapisan heksagonal</text>
      </svg>
      <div class="ca-desc">Konduktor, lembut, hitam</div>
    </div>
    <div class="ca-item">
      <div class="ca-title">Intan</div>
      <svg class="ca-svg" viewBox="0 0 200 150">
        <!-- Tetrahedral structure -->
        <g transform="translate(100,75)">
          <line x1="0" y1="-40" x2="-35" y2="20" stroke="#2c3e50" stroke-width="2"/>
          <line x1="0" y1="-40" x2="35" y2="20" stroke="#2c3e50" stroke-width="2"/>
          <line x1="0" y1="-40" x2="0" y2="30" stroke="#2c3e50" stroke-width="2"/>
          <line x1="-35" y1="20" x2="0" y2="30" stroke="#2c3e50" stroke-width="2"/>
          <line x1="35" y1="20" x2="0" y2="30" stroke="#2c3e50" stroke-width="2"/>
          <line x1="-35" y1="20" x2="35" y2="20" stroke="#2c3e50" stroke-width="2"/>
          <circle cx="0" cy="-40" r="4" fill="#2c3e50"/>
          <circle cx="-35" cy="20" r="4" fill="#2c3e50"/>
          <circle cx="35" cy="20" r="4" fill="#2c3e50"/>
          <circle cx="0" cy="30" r="4" fill="#2c3e50"/>
        </g>
        <text x="100" y="140" text-anchor="middle" font-size="10" fill="#6b7280">Struktur tetrahedral</text>
      </svg>
      <div class="ca-desc">Sangat keras, isolator, transparan</div>
    </div>
    <div class="ca-item">
      <div class="ca-title">Graphene</div>
      <svg class="ca-svg" viewBox="0 0 200 150">
        <!-- Single layer hexagons -->
        <g transform="translate(100,75)">
          <path d="M-40,0 L-20,-35 L20,-35 L40,0 L20,35 L-20,35 Z" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
          <path d="M-40,0 L-20,-35 L20,-35 L40,0 L20,35 L-20,35 Z" transform="translate(60,0)" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
          <path d="M-40,0 L-20,-35 L20,-35 L40,0 L20,35 L-20,35 Z" transform="translate(-60,0)" fill="none" stroke="#2c3e50" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="2.5" fill="#2c3e50"/>
          <circle cx="40" cy="0" r="2.5" fill="#2c3e50"/>
          <circle cx="-40" cy="0" r="2.5" fill="#2c3e50"/>
          <circle cx="20" cy="-35" r="2.5" fill="#2c3e50"/>
          <circle cx="-20" cy="-35" r="2.5" fill="#2c3e50"/>
          <circle cx="20" cy="35" r="2.5" fill="#2c3e50"/>
          <circle cx="-20" cy="35" r="2.5" fill="#2c3e50"/>
        </g>
        <text x="100" y="140" text-anchor="middle" font-size="10" fill="#6b7280">Lapisan tunggal</text>
      </svg>
      <div class="ca-desc">Konduktor super, 2D, sangat kuat</div>
    </div>
    <div class="ca-item">
      <div class="ca-title">Fullerene C₆₀</div>
      <svg class="ca-svg" viewBox="0 0 200 150">
        <!-- Buckyball structure -->
        <g transform="translate(100,75)">
          <circle cx="0" cy="0" r="45" fill="none" stroke="#2c3e50" stroke-width="2"/>
          <circle cx="-20" cy="-15" r="3" fill="#2c3e50"/>
          <circle cx="20" cy="-15" r="3" fill="#2c3e50"/>
          <circle cx="0" cy="15" r="3" fill="#2c3e50"/>
          <circle cx="-30" cy="10" r="3" fill="#2c3e50"/>
          <circle cx="30" cy="10" r="3" fill="#2c3e50"/>
          <text x="0" y="5" text-anchor="middle" font-size="12" fill="#2c3e50">C₆₀</text>
        </g>
        <text x="100" y="140" text-anchor="middle" font-size="10" fill="#6b7280">Bola karbon</text>
      </svg>
      <div class="ca-desc">Bola karbon, nanoteknologi</div>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Berbagai bentuk alotrop karbon dengan struktur dan sifat berbeda</em>
  </p>
</div>

---

#### Nitrogen (N) - Nomor Atom 7

**Informasi Dasar:**

- **Simbol**: N
- **Massa Atom**: 14.007 u
- **Konfigurasi Elektron**: [He] 2s² 2p³
- **Golongan**: 15 (Pnictogens)
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: 3.04
- **Titik Leleh**: -210.00°C
- **Titik Didih**: -195.80°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- 78% volume atmosfer Bumi
- Gas diatomik (N₂) dengan ikatan rangkap tiga yang sangat kuat
- Sangat tidak reaktif pada suhu kamar
- Esensial untuk kehidupan (protein, DNA, RNA)

**Kegunaan:**

- Pupuk (amonia, nitrat)
- Produksi asam nitrat
- Gas inert untuk pengemasan makanan
- Bahan peledak (TNT, dinamit)
- Kriogenik (pendingin)

**Isotop:**

- ¹⁴N: 99.636%, stabil
- ¹⁵N: 0.364%, stabil (NMR)

**Siklus Nitrogen:**

```
Atmosfer (N₂)
    ↓ [Fiksasi: bakteri, petir, industri]
Amonia (NH₃)
    ↓ [Nitrifikasi]
Nitrit (NO₂⁻) → Nitrat (NO₃⁻)
    ↓ [Asimilasi tanaman]
Biomassa organik
    ↓ [Dekomposisi, Denitrifikasi]
Kembali ke atmosfer
```

---

#### Oksigen (O) - Nomor Atom 8

**Informasi Dasar:**

- **Simbol**: O
- **Massa Atom**: 16.00 u
- **Konfigurasi Elektron**: [He] 2s² 2p⁴
- **Golongan**: 16 (Chalcogens)
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: 3.44 (tertinggi kedua setelah F)
- **Titik Leleh**: -218.79°C
- **Titik Didih**: -182.96°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- 21% volume atmosfer
- Gas diatomik (O₂) atau triatomik (O₃, ozon)
- Sangat reaktif (oksidator kuat)
- Esensial untuk respirasi dan pembakaran

**Kegunaan:**

- Respirasi medis
- Pengelasan dan pemotongan logam
- Produksi baja
- Pengolahan air
- Roket (oksidator)

**Alotrop:**

- O₂ (Dioxygen): Gas tidak berwarna, paramagnetik
- O₃ (Ozon): Gas biru, oksidator lebih kuat, pelindung UV

**Isotop:**

- ¹⁶O: 99.757%, stabil
- ¹⁷O: 0.038%, stabil
- ¹⁸O: 0.205%, stabil (penanda isotop)

---

#### Fluorin (F) - Nomor Atom 9

**Informasi Dasar:**

- **Simbol**: F
- **Massa Atom**: 18.998 u
- **Konfigurasi Elektron**: [He] 2s² 2p⁵
- **Golongan**: 17 (Halogen)
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: 3.98 (tertinggi)
- **Titik Leleh**: -219.67°C
- **Titik Didih**: -188.11°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Unsur paling elektronegatif
- Oksidator terkuat
- Sangat reaktif dan beracun
- Gas diatomik kuning pucat
- Dapat bereaksi dengan gas mulia (XeF₂, KrF₂)

**Kegunaan:**

- Pasta gigi (NaF, SnF₂ untuk pencegahan karies)
- Teflon (PTFE)
- Refrigeran (CFC, sekarang dilarang)
- Produksi uranium hexafluoride (Uranium enrichment)
- Obat-obatan (fluoroquinolones)

**Isotop:**

- ¹⁹F: 100%, stabil (NMR aktif)

**Peringatan:** Fluorin sangat beracun dan korosif. Hanya ditangani oleh ahli dengan peralatan khusus.

---

#### Neon (Ne) - Nomor Atom 10

**Informasi Dasar:**

- **Simbol**: Ne
- **Massa Atom**: 20.180 u
- **Konfigurasi Elektron**: [He] 2s² 2p⁶
- **Golongan**: 18 (Gas Mulia)
- **Periode**: 2
- **Blok**: p
- **Elektronegativitas**: Tidak ada
- **Titik Leleh**: -248.59°C
- **Titik Didih**: -246.05°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Gas mulia
- Sangat tidak reaktif
- Tidak membentuk senyawa stabil
- Memancarkan cahaya merah-oranye dalam tabung pelepasan

**Kegunaan:**

- Papan iklan neon (tabung pelepasan)
- Refrigeran kriogenik
- Detektor partikel (detektor Geiger)
- Laser helium-neon
- Gas pelindung

**Isotop:**

- ²⁰Ne: 90.48%, stabil
- ²¹Ne: 0.27%, stabil
- ²²Ne: 9.25%, stabil

---

### 3.3 Periode 3

#### Natrium (Na) - Nomor Atom 11

**Informasi Dasar:**

- **Simbol**: Na (dari Latin: natrium)
- **Massa Atom**: 22.990 u
- **Konfigurasi Elektron**: [Ne] 3s¹
- **Golongan**: 1 (Logam Alkali)
- **Periode**: 3
- **Blok**: s
- **Elektronegativitas**: 0.93
- **Titik Leleh**: 97.72°C
- **Titik Didih**: 882.9°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Sangat reaktif dengan air (menghasilkan H₂ dan NaOH)
- Logam lunak, dapat dipotong dengan pisau
- Warna perak, cepat teroksidasi di udara
- Ion Na⁺ esensial untuk fungsi saraf dan otot

**Kegunaan:**

- Garam dapur (NaCl)
- Soda api (NaOH) untuk sabun dan deterjen
- Natrium karbonat (Na₂CO₃) untuk kaca
- Lampu uap natrium (penerangan jalan)
- Transfer panas dalam reaktor nuklir
- Pengawet makanan (NaNO₂, NaNO₃)

**Isotop:**

- ²³Na: 100%, stabil

---

#### Magnesium (Mg) - Nomor Atom 12

**Informasi Dasar:**

- **Simbol**: Mg
- **Massa Atom**: 24.305 u
- **Konfigurasi Elektron**: [Ne] 3s²
- **Golongan**: 2 (Logam Alkali Tanah)
- **Periode**: 3
- **Blok**: s
- **Elektronegativitas**: 1.31
- **Titik Leleh**: 650°C
- **Titik Didih**: 1090°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Logam ringan dan kuat
- Reaktif, membentuk lapisan oksida pelindung
- Ion Mg²⁺ esensial (klorofil, enzim, tulang)
- Membakar dengan nyala putih terang

**Kegunaan:**

- Paduan ringan (aluminium, seng)
- Obat antasid (Mg(OH)₂)
- Produksi besi dan baja (desulfurisasi)
- Kembang api dan flare
- Konstruksi (paduan ringan)
- Suplemen nutrisi

**Isotop:**

- ²⁴Mg: 78.99%, stabil
- ²⁵Mg: 10.00%, stabil
- ²⁶Mg: 11.01%, stabil

---

#### Aluminium (Al) - Nomor Atom 13

**Informasi Dasar:**

- **Simbol**: Al
- **Massa Atom**: 26.982 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p¹
- **Golongan**: 13
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: 1.61
- **Titik Leleh**: 660.32°C
- **Titik Didih**: 2519°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Logam paling melimpah di kerak Bumi (~8%)
- Ringan, kuat, tahan korosi (lapisan Al₂O₃)
- Konduktor listrik dan panas yang baik
- Sangat reaktif (tetapi dilindungi oleh oksida)

**Kegunaan:**

- Konstruksi (jendela, pintu, atap)
- Transportasi (pesawat, mobil, kereta)
- Kemasan (kaleng, foil)
- Kabel listrik
- Paduan (duralumin untuk pesawat)
- Reflektor (cermin, lampu)

**Isotop:**

- ²⁷Al: 100%, stabil

---

#### Silikon (Si) - Nomor Atom 14

**Informasi Dasar:**

- **Simbol**: Si
- **Massa Atom**: 28.085 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p²
- **Golongan**: 14
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: 1.90
- **Titik Leleh**: 1414°C
- **Titik Didih**: 3265°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Metaloid
- Unsur kedua paling melimpah di kerak Bumi (~27%)
- Semikonduktor intrinsik
- Dasar industri elektronik modern

**Kegunaan:**

- Semikonduktor (chip komputer, transistor, sel surya)
- Silikon dioksida (SiO₂): kaca, kuarsa, pasir
- Silikon karbida (SiC): abrasif, keramik
- Silikon organik: pelumas, sealant, karet silikon
- Paduan (ferrosilikon untuk baja)
- Beton dan semen

**Isotop:**

- ²⁸Si: 92.23%, stabil
- ²⁹Si: 4.67%, stabil (NMR)
- ³⁰Si: 3.10%, stabil

**Silikon dalam Elektronik:**

<div class="silicon-electronics-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .silicon-electronics-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .silicon-electronics-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .se-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .se-viz h4 {
          color: #f3f4f6 !important;
        }
        .se-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 15px;
        }
        .se-item {
          text-align: center;
        }
        .se-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        html.dark .se-title {
          color: #f3f4f6;
        }
        .se-svg {
          width: 100%;
          height: 180px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f9fafb;
        }
        html.dark .se-svg {
          border-color: #4b5563;
          background: #111827;
        }
        .se-desc {
          font-size: 0.7rem;
          color: #6b7280;
          margin-top: 8px;
        }
        html.dark .se-desc {
          color: #9ca3af;
        }
        @media (max-width: 600px) {
          .se-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Silikon: Semikonduktor dan Doping</h4>
  <div class="se-grid">
    <div class="se-item">
      <div class="se-title">Silikon Murni (Intrinsik)</div>
      <svg class="se-svg" viewBox="0 0 300 180">
        <!-- Silicon crystal lattice -->
        <g transform="translate(150,90)">
          <!-- Tetrahedral bonds -->
          <line x1="0" y1="-50" x2="-30" y2="0" stroke="#3498db" stroke-width="2"/>
          <line x1="0" y1="-50" x2="30" y2="0" stroke="#3498db" stroke-width="2"/>
          <line x1="0" y1="-50" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="-30" y1="0" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="30" y1="0" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#3498db" stroke-width="2"/>
          <!-- Atoms -->
          <circle cx="0" cy="-50" r="8" fill="#3498db"/>
          <circle cx="-30" cy="0" r="8" fill="#3498db"/>
          <circle cx="30" cy="0" r="8" fill="#3498db"/>
          <circle cx="0" cy="20" r="8" fill="#3498db"/>
          <text x="0" y="-70" text-anchor="middle" font-size="11" fill="#2c3e50">Si</text>
          <text x="0" y="50" text-anchor="middle" font-size="10" fill="#6b7280">Struktur kristal kovalen</text>
        </g>
      </svg>
      <div class="se-desc">Konduktivitas rendah, struktur tetrahedral</div>
    </div>
    <div class="se-item">
      <div class="se-title">Silikon Terdoping (n-type)</div>
      <svg class="se-svg" viewBox="0 0 300 180">
        <!-- Doped silicon with extra electron -->
        <g transform="translate(150,90)">
          <line x1="0" y1="-50" x2="-30" y2="0" stroke="#3498db" stroke-width="2"/>
          <line x1="0" y1="-50" x2="30" y2="0" stroke="#3498db" stroke-width="2"/>
          <line x1="0" y1="-50" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="-30" y1="0" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="30" y1="0" x2="0" y2="20" stroke="#3498db" stroke-width="2"/>
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#3498db" stroke-width="2"/>
          <!-- Atoms -->
          <circle cx="0" cy="-50" r="8" fill="#e74c3c"/>
          <circle cx="-30" cy="0" r="8" fill="#3498db"/>
          <circle cx="30" cy="0" r="8" fill="#3498db"/>
          <circle cx="0" cy="20" r="8" fill="#3498db"/>
          <!-- Extra electron -->
          <circle cx="20" cy="-30" r="4" fill="#f39c12"/>
          <text x="20" y="-20" text-anchor="middle" font-size="8" fill="#f39c12">e⁻</text>
          <text x="0" y="-70" text-anchor="middle" font-size="11" fill="#e74c3c">P (Fosfor)</text>
          <text x="0" y="50" text-anchor="middle" font-size="10" fill="#6b7280">Doping n-type: elektron bebas</text>
        </g>
      </svg>
      <div class="se-desc">Doping dengan P/As: pembawa muatan negatif</div>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Doping silikon mengubah sifat konduktivitas untuk aplikasi elektronik</em>
  </p>
</div>

---

#### Fosfor (P) - Nomor Atom 15

**Informasi Dasar:**

- **Simbol**: P
- **Massa Atom**: 30.974 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p³
- **Golongan**: 15 (Pnictogens)
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: 2.19
- **Titik Leleh**: 44.15°C (putih)
- **Titik Didih**: 280.5°C (putih)
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Alotrop: putih (P₄, sangat reaktif, beracun), merah (stabil), hitam (mirip grafit)
- Esensial untuk kehidupan (DNA, RNA, ATP, tulang)
- Sangat reaktif dengan oksigen
- Memancarkan cahaya (fosforesensi)

**Kegunaan:**

- Pupuk (fosfat)
- Detergen (tripolifosfat)
- Kembang api dan korek api
- Produksi asam fosfat
- Doping semikonduktor (n-type)
- Obat-obatan

**Alotrop:**

- **Fosfor Putih (P₄)**: Molekul tetrahedral, sangat reaktif, beracun, berpendar
- **Fosfor Merah**: Polimer, stabil, kurang reaktif
- **Fosfor Hitam**: Struktur lapisan, semikonduktor

**Isotop:**

- ³¹P: 100%, stabil (NMR)

---

#### Belerang (S) - Nomor Atom 16

**Informasi Dasar:**

- **Simbol**: S
- **Massa Atom**: 32.065 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p⁴
- **Golongan**: 16 (Chalcogens)
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: 2.58
- **Titik Leleh**: 115.21°C
- **Titik Didih**: 444.6°C
- **Wujud**: Padat (STP)

**Sifat Kimia:**

- Alotrop: S₈ (cincin), S₂ (gas), berbagai bentuk polimer
- Warna kuning
- Esensial untuk kehidupan (asam amino: sistein, metionin)
- Membentuk banyak bilangan oksidasi (-2 hingga +6)

**Kegunaan:**

- Asam sulfat (H₂SO₄): industri kimia terpenting
- Vulkanisasi karet
- Pupuk
- Bahan peledak (bubuk mesiu)
- Fungisida dan pestisida
- Produksi kertas (pemutihan)

**Isotop:**

- ³²S: 94.99%, stabil
- ³³S: 0.75%, stabil
- ³⁴S: 4.25%, stabil
- ³⁶S: 0.01%, stabil

---

#### Klorin (Cl) - Nomor Atom 17

**Informasi Dasar:**

- **Simbol**: Cl
- **Massa Atom**: 35.453 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p⁵
- **Golongan**: 17 (Halogen)
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: 3.16
- **Titik Leleh**: -101.5°C
- **Titik Didih**: -34.04°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Gas diatomik hijau kekuningan, beracun
- Oksidator kuat
- Sangat reaktif
- Ion Cl⁻ esensial (keseimbangan elektrolit)

**Kegunaan:**

- Desinfeksi air (NaClO, Cl₂)
- Produksi PVC (polivinil klorida)
- Pelarut (kloroform, karbon tetraklorida)
- Pemutih (NaClO)
- Produksi HCl
- Obat-obatan

**Isotop:**

- ³⁵Cl: 75.76%, stabil
- ³⁷Cl: 24.24%, stabil (NMR)

---

#### Argon (Ar) - Nomor Atom 18

**Informasi Dasar:**

- **Simbol**: Ar
- **Massa Atom**: 39.948 u
- **Konfigurasi Elektron**: [Ne] 3s² 3p⁶
- **Golongan**: 18 (Gas Mulia)
- **Periode**: 3
- **Blok**: p
- **Elektronegativitas**: Tidak ada
- **Titik Leleh**: -189.34°C
- **Titik Didih**: -185.85°C
- **Wujud**: Gas (STP)

**Sifat Kimia:**

- Gas mulia
- 0.934% volume atmosfer
- Sangat tidak reaktif
- Tidak membentuk senyawa stabil pada kondisi normal

**Kegunaan:**

- Gas pelindung dalam pengelasan
- Pengisi bola lampu (mencegah oksidasi filamen)
- Gas inert untuk pengemasan makanan
- Detektor partikel (detektor Geiger)
- Laser argon-ion

**Isotop:**

- ³⁶Ar: 0.336%, stabil
- ³⁸Ar: 0.063%, stabil
- ⁴⁰Ar: 99.600%, stabil (radiogenik dari ⁴⁰K)

---

### 3.4 Periode 4

#### Kalium (K) - Nomor Atom 19

**Informasi Dasar:**

- **Simbol**: K (dari Latin: kalium)
- **Massa Atom**: 39.098 u
- **Konfigurasi Elektron**: [Ar] 4s¹
- **Golongan**: 1 (Logam Alkali)
- **Periode**: 4
- **Blok**: s
- **Elektronegativitas**: 0.82
- **Titik Leleh**: 63.38°C
- **Titik Didih**: 759°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Ion K⁺ esensial untuk fungsi sel (potensial membran)
- Pupuk (KCl, K₂SO₄)
- Produksi sabun (KOH)
- Paduan natrium-kalium (NaK) untuk transfer panas
- Pengawet makanan (KNO₃)

**Isotop:** ³⁹K (93.26%), ⁴¹K (6.73%), ⁴⁰K (0.012%, radioaktif, t½ = 1.25×10⁹ tahun)

---

#### Kalsium (Ca) - Nomor Atom 20

**Informasi Dasar:**

- **Simbol**: Ca
- **Massa Atom**: 40.078 u
- **Konfigurasi Elektron**: [Ar] 4s²
- **Golongan**: 2 (Logam Alkali Tanah)
- **Periode**: 4
- **Blok**: s
- **Elektronegativitas**: 1.00
- **Titik Leleh**: 842°C
- **Titik Didih**: 1484°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Ion Ca²⁺ esensial (tulang, gigi, kontraksi otot, sinyal sel)
- Semen dan beton (CaO, CaCO₃)
- Produksi besi dan baja (desulfurisasi)
- Suplemen nutrisi
- Kapur (Ca(OH)₂) untuk pertanian

**Isotop:** ⁴⁰Ca (96.941%), ⁴²Ca (0.647%), ⁴³Ca (0.135%), ⁴⁴Ca (2.086%), ⁴⁶Ca (0.004%), ⁴⁸Ca (0.187%)

---

#### Skandium (Sc) - Nomor Atom 21

**Informasi Dasar:**

- **Simbol**: Sc
- **Massa Atom**: 44.956 u
- **Konfigurasi Elektron**: [Ar] 3d¹ 4s²
- **Golongan**: 3 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.36
- **Titik Leleh**: 1541°C
- **Titik Didih**: 2836°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Logam transisi pertama
- Langka dan mahal
- Paduan aluminium-skandium (aerospace, peralatan olahraga)
- Lampu uap skandium (penerangan stadion)

**Isotop:** ⁴⁵Sc (100%, stabil)

---

#### Titanium (Ti) - Nomor Atom 22

**Informasi Dasar:**

- **Simbol**: Ti
- **Massa Atom**: 47.867 u
- **Konfigurasi Elektron**: [Ar] 3d² 4s²
- **Golongan**: 4 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.54
- **Titik Leleh**: 1668°C
- **Titik Didih**: 3287°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Kuat, ringan, tahan korosi
- Paduan untuk aerospace (mesin jet, pesawat)
- Implan medis (kompatibel biologis)
- Pigmen putih (TiO₂) untuk cat, kertas, plastik
- Perhiasan

**Isotop:** ⁴⁶Ti (8.25%), ⁴⁷Ti (7.44%), ⁴⁸Ti (73.72%), ⁴⁹Ti (5.41%), ⁵⁰Ti (5.18%)

---

#### Vanadium (V) - Nomor Atom 23

**Informasi Dasar:**

- **Simbol**: V
- **Massa Atom**: 50.942 u
- **Konfigurasi Elektron**: [Ar] 3d³ 4s²
- **Golongan**: 5 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.63
- **Titik Leleh**: 1910°C
- **Titik Didih**: 3407°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Paduan baja vanadium (kuat, tahan getaran)
- Katalis (produksi asam sulfat)
- Baterai aliran vanadium (redox flow)
- Pigmen (kuning, hijau, biru)

**Isotop:** ⁵⁰V (0.25%, radioaktif, t½ = 1.5×10¹⁷ tahun), ⁵¹V (99.75%, stabil)

---

#### Kromium (Cr) - Nomor Atom 24

**Informasi Dasar:**

- **Simbol**: Cr
- **Massa Atom**: 51.996 u
- **Konfigurasi Elektron**: [Ar] 3d⁵ 4s¹ (anomali)
- **Golongan**: 6 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.66
- **Titik Leleh**: 1907°C
- **Titik Didih**: 2671°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Baja tahan karat (stainless steel, ~10-30% Cr)
- Pelapisan krom (dekoratif, anti korosi)
- Pigmen (kuning, oranye, hijau)
- Katalis
- Esensial untuk metabolisme glukosa (Cr³⁺)

**Isotop:** ⁵⁰Cr (4.345%), ⁵²Cr (83.789%), ⁵³Cr (9.501%), ⁵⁴Cr (2.365%)

---

#### Mangan (Mn) - Nomor Atom 25

**Informasi Dasar:**

- **Simbol**: Mn
- **Massa Atom**: 54.938 u
- **Konfigurasi Elektron**: [Ar] 3d⁵ 4s²
- **Golongan**: 7 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.55
- **Titik Leleh**: 1246°C
- **Titik Didih**: 2061°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Baja mangan (kuat, tahan aus)
- Baterai alkaline (MnO₂)
- Pigmen (ungu, hitam)
- Katalis
- Esensial untuk enzim (superoksida dismutase)

**Isotop:** ⁵⁵Mn (100%, stabil)

---

#### Besi (Fe) - Nomor Atom 26

**Informasi Dasar:**

- **Simbol**: Fe (dari Latin: ferrum)
- **Massa Atom**: 55.845 u
- **Konfigurasi Elektron**: [Ar] 3d⁶ 4s²
- **Golongan**: 8 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.83
- **Titik Leleh**: 1538°C
- **Titik Didih**: 2862°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Unsur paling melimpah di Bumi (inti Bumi: ~85% Fe)
- Baja (paduan Fe-C, konstruksi, transportasi, industri)
- Besi cor
- Magnet (ferromagnetik)
- Hemoglobin (transportasi oksigen)
- Katalis (proses Haber-Bosch)

**Isotop:** ⁵⁴Fe (5.845%), ⁵⁶Fe (91.754%), ⁵⁷Fe (2.119%), ⁵⁸Fe (0.282%)

**Besi dalam Baja:**

<div class="iron-steel-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .iron-steel-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .iron-steel-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .is-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .is-viz h4 {
          color: #f3f4f6 !important;
        }
        .is-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        .is-item {
          text-align: center;
          padding: 10px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f9fafb;
        }
        html.dark .is-item {
          border-color: #4b5563;
          background: #111827;
        }
        .is-title {
          font-weight: 700;
          font-size: 0.8rem;
          color: #2c3e50;
          margin-bottom: 5px;
        }
        html.dark .is-title {
          color: #f3f4f6;
        }
        .is-composition {
          font-size: 0.7rem;
          color: #6b7280;
          margin: 5px 0;
        }
        html.dark .is-composition {
          color: #9ca3af;
        }
        .is-props {
          font-size: 0.65rem;
          color: #6b7280;
          margin-top: 5px;
        }
        html.dark .is-props {
          color: #9ca3af;
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Jenis Baja Berdasarkan Komposisi</h4>
  <div class="is-grid">
    <div class="is-item">
      <div class="is-title">Besi Murni</div>
      <div class="is-composition">Fe: ~99.8%</div>
      <div class="is-props">Lunak, mudah berkarat</div>
    </div>
    <div class="is-item">
      <div class="is-title">Baja Karbon</div>
      <div class="is-composition">Fe + C: 0.1-2%</div>
      <div class="is-props">Kuat, keras, konstruksi</div>
    </div>
    <div class="is-item">
      <div class="is-title">Baja Tahan Karat</div>
      <div class="is-composition">Fe + Cr: 10-30% + Ni</div>
      <div class="is-props">Tahan korosi, peralatan</div>
    </div>
    <div class="is-item">
      <div class="is-title">Baja Mangan</div>
      <div class="is-composition">Fe + Mn: 12-14%</div>
      <div class="is-props">Sangat keras, tahan aus</div>
    </div>
    <div class="is-item">
      <div class="is-title">Baja Vanadium</div>
      <div class="is-composition">Fe + V: 0.1-0.5%</div>
      <div class="is-props">Kuat, tahan getaran</div>
    </div>
    <div class="is-item">
      <div class="is-title">Besi Cor</div>
      <div class="is-composition">Fe + C: 2-4%</div>
      <div class="is-props">Rapuh, murah, casting</div>
    </div>
  </div>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Komposisi dan sifat berbagai jenis paduan besi</em>
  </p>
</div>

---

#### Kobalt (Co) - Nomor Atom 27

**Informasi Dasar:**

- **Simbol**: Co
- **Massa Atom**: 58.933 u
- **Konfigurasi Elektron**: [Ar] 3d⁷ 4s²
- **Golongan**: 9 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.88
- **Titik Leleh**: 1495°C
- **Titik Didih**: 2927°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Ferromagnetik
- Baja super (paduan tahan panas, tahan aus)
- Baterai lithium-ion (LiCoO₂ katoda)
- Pigmen biru (kobalt biru)
- Vitamin B₁₂ (esensial)
- Radioisotop (radioterapi, ⁶⁰Co)

**Isotop:** ⁵⁹Co (100%, stabil)

---

#### Nikel (Ni) - Nomor Atom 28

**Informasi Dasar:**

- **Simbol**: Ni
- **Massa Atom**: 58.693 u
- **Konfigurasi Elektron**: [Ar] 3d⁸ 4s²
- **Golongan**: 10 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.91
- **Titik Leleh**: 1455°C
- **Titik Didih**: 2913°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Baja tahan karat (paduan dengan Cr)
- Baterai nikel-kadmium, nikel-metal hidrida
- Pelapisan nikel (dekoratif, anti korosi)
- Katalis (hidrogenasi)
- Koin (paduan dengan tembaga)

**Isotop:** ⁵⁸Ni (68.077%), ⁶⁰Ni (26.223%), ⁶¹Ni (1.140%), ⁶²Ni (3.634%), ⁶⁴Ni (0.926%)

---

#### Tembaga (Cu) - Nomor Atom 29

**Informasi Dasar:**

- **Simbol**: Cu (dari Latin: cuprum)
- **Massa Atom**: 63.546 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s¹ (anomali)
- **Golongan**: 11 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.90
- **Titik Leleh**: 1085°C
- **Titik Didih**: 2562°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Konduktor listrik dan panas terbaik (setelah perak)
- Kabel listrik dan elektronik
- Paduan: kuningan (Cu-Zn), perunggu (Cu-Sn)
- Pipa dan fitting
- Koin
- Esensial untuk enzim (sitokrom oksidase)

**Isotop:** ⁶³Cu (69.15%), ⁶⁵Cu (30.85%, stabil)

---

#### Seng (Zn) - Nomor Atom 30

**Informasi Dasar:**

- **Simbol**: Zn
- **Massa Atom**: 65.38 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s²
- **Golongan**: 12 (Logam Transisi)
- **Periode**: 4
- **Blok**: d
- **Elektronegativitas**: 1.65
- **Titik Leleh**: 419.53°C
- **Titik Didih**: 907°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Galvanisasi (pelapisan anti karat pada besi)
- Baterai seng-karbon, seng-udara
- Paduan: kuningan (Cu-Zn), seng die-casting
- Suplemen nutrisi (esensial)
- Krim tabir surya (ZnO)

**Isotop:** ⁶⁴Zn (48.63%), ⁶⁶Zn (27.90%), ⁶⁷Zn (4.10%), ⁶⁸Zn (18.75%), ⁷⁰Zn (0.62%)

---

#### Galium (Ga) - Nomor Atom 31

**Informasi Dasar:**

- **Simbol**: Ga
- **Massa Atom**: 69.723 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p¹
- **Golongan**: 13
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: 1.81
- **Titik Leleh**: 29.76°C (meleleh di tangan)
- **Titik Didih**: 2204°C
- **Wujud**: Padat (STP), cair di atas 30°C

**Sifat & Kegunaan:**

- Meleleh di tangan (suhu kamar)
- Semikonduktor (GaAs, GaN untuk LED, laser, sel surya)
- Termometer suhu tinggi
- Cermin (reflektor)

**Isotop:** ⁶⁹Ga (60.108%), ⁷¹Ga (39.892%, stabil)

---

#### Germanium (Ge) - Nomor Atom 32

**Informasi Dasar:**

- **Simbol**: Ge
- **Massa Atom**: 72.630 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p²
- **Golongan**: 14
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: 2.01
- **Titik Leleh**: 938.25°C
- **Titik Didih**: 2833°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Metaloid
- Semikonduktor (transistor awal, detektor inframerah)
- Serat optik (doping untuk meningkatkan indeks bias)
- Paduan dengan silikon

**Isotop:** ⁷⁰Ge (20.84%), ⁷²Ge (27.54%), ⁷³Ge (7.73%), ⁷⁴Ge (36.28%), ⁷⁶Ge (7.61%)

---

#### Arsenik (As) - Nomor Atom 33

**Informasi Dasar:**

- **Simbol**: As
- **Massa Atom**: 74.922 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p³
- **Golongan**: 15 (Pnictogens)
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: 2.18
- **Titik Leleh**: 817°C (sublimasi)
- **Titik Didih**: 614°C (sublimasi)
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Metaloid, sangat beracun
- Doping semikonduktor (n-type)
- Pestisida (sekarang dilarang di banyak negara)
- Paduan dengan timbal (peluru)
- Obat-obatan (arsenik trioksida untuk leukemia)

**Isotop:** ⁷⁵As (100%, stabil)

---

#### Selenium (Se) - Nomor Atom 34

**Informasi Dasar:**

- **Simbol**: Se
- **Massa Atom**: 78.971 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p⁴
- **Golongan**: 16 (Chalcogens)
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: 2.55
- **Titik Leleh**: 221°C
- **Titik Didih**: 685°C
- **Wujud**: Padat (STP)

**Sifat & Kegunaan:**

- Metaloid
- Fotokonduktor (fotokopi, sel surya)
- Suplemen nutrisi (esensial, antioksidan)
- Pigmen merah (kaca, keramik)
- Detektor sinar-X

**Isotop:** ⁷⁴Se (0.89%), ⁷⁶Se (9.37%), ⁷⁷Se (7.63%), ⁷⁸Se (23.77%), ⁸⁰Se (49.61%), ⁸²Se (8.73%)

---

#### Bromin (Br) - Nomor Atom 35

**Informasi Dasar:**

- **Simbol**: Br
- **Massa Atom**: 79.904 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p⁵
- **Golongan**: 17 (Halogen)
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: 2.96
- **Titik Leleh**: -7.2°C
- **Titik Didih**: 58.8°C
- **Wujud**: Cair (STP, satu-satunya unsur nonlogam cair)

**Sifat & Kegunaan:**

- Satu-satunya unsur nonlogam cair pada STP
- Gas diatomik merah-coklat, beracun
- Aditif bensin (1,2-dibromoetana, sekarang dilarang)
- Flame retardant
- Obat-obatan
- Film fotografi (AgBr)

**Isotop:** ⁷⁹Br (50.69%), ⁸¹Br (49.31%, stabil)

---

#### Kripton (Kr) - Nomor Atom 36

**Informasi Dasar:**

- **Simbol**: Kr
- **Massa Atom**: 83.798 u
- **Konfigurasi Elektron**: [Ar] 3d¹⁰ 4s² 4p⁶
- **Golongan**: 18 (Gas Mulia)
- **Periode**: 4
- **Blok**: p
- **Elektronegativitas**: Tidak ada
- **Titik Leleh**: -157.36°C
- **Titik Didih**: -153.22°C
- **Wujud**: Gas (STP)

**Sifat & Kegunaan:**

- Gas mulia
- 1 ppm volume atmosfer
- Lampu pijar (meningkatkan efisiensi)
- Laser kripton
- Standar panjang (definisi meter 1960-1983)

**Isotop:** ⁷⁸Kr (0.35%), ⁸⁰Kr (2.25%), ⁸²Kr (11.6%), ⁸³Kr (11.5%), ⁸⁴Kr (57.0%), ⁸⁶Kr (17.3%)

---

### 3.5 Periode 5

#### Rubidium (Rb) - Nomor Atom 37

- **Simbol**: Rb | **Massa**: 85.468 u | **Konfigurasi**: [Kr] 5s¹
- **Golongan**: 1 | **Blok**: s | **Elektronegativitas**: 0.82
- **Sifat**: Logam alkali, sangat reaktif, titik leleh rendah (39.3°C)
- **Kegunaan**: Detektor vakum, jam atom, penelitian

#### Strontium (Sr) - Nomor Atom 38

- **Simbol**: Sr | **Massa**: 87.62 u | **Konfigurasi**: [Kr] 5s²
- **Golongan**: 2 | **Blok**: s | **Elektronegativitas**: 0.95
- **Sifat**: Logam alkali tanah, radioaktif ⁹⁰Sr (fallout nuklir)
- **Kegunaan**: Kembang api (warna merah), paduan aluminium, penelitian

#### Yttrium (Y) - Nomor Atom 39

- **Simbol**: Y | **Massa**: 88.906 u | **Konfigurasi**: [Kr] 4d¹ 5s²
- **Golongan**: 3 | **Blok**: d | **Elektronegativitas**: 1.22
- **Sifat**: Logam transisi, mirip lantanida
- **Kegunaan**: Superkonduktor (YBCO), LED merah, laser, paduan aluminium

#### Zirkonium (Zr) - Nomor Atom 40

- **Simbol**: Zr | **Massa**: 91.224 u | **Konfigurasi**: [Kr] 4d² 5s²
- **Golongan**: 4 | **Blok**: d | **Elektronegativitas**: 1.33
- **Sifat**: Tahan korosi, transparan terhadap neutron
- **Kegunaan**: Reaktor nuklir (cladding bahan bakar), paduan, batu permata (zirkon)

#### Niobium (Nb) - Nomor Atom 41

- **Simbol**: Nb | **Massa**: 92.906 u | **Konfigurasi**: [Kr] 4d⁴ 5s¹
- **Golongan**: 5 | **Blok**: d | **Elektronegativitas**: 1.6
- **Sifat**: Superkonduktor pada suhu rendah
- **Kegunaan**: Superkonduktor (Nb₃Sn, NbTi), paduan baja, magnet superkonduktor (MRI)

#### Molibdenum (Mo) - Nomor Atom 42

- **Simbol**: Mo | **Massa**: 95.96 u | **Konfigurasi**: [Kr] 4d⁵ 5s¹
- **Golongan**: 6 | **Blok**: d | **Elektronegativitas**: 2.16
- **Sifat**: Titik leleh tinggi (2623°C), esensial untuk enzim
- **Kegunaan**: Paduan baja (kekuatan tinggi), katalis, enzim (nitrogenase), pelumas

#### Teknesium (Tc) - Nomor Atom 43

- **Simbol**: Tc | **Massa**: [98] u | **Konfigurasi**: [Kr] 4d⁵ 5s²
- **Golongan**: 7 | **Blok**: d | **Elektronegativitas**: 1.9
- **Sifat**: Unsur pertama yang dibuat secara sintetis (1937), semua isotop radioaktif
- **Kegunaan**: Pencitraan medis (⁹⁹ᵐTc), perawatan kanker

#### Rutenium (Ru) - Nomor Atom 44

- **Simbol**: Ru | **Massa**: 101.07 u | **Konfigurasi**: [Kr] 4d⁷ 5s¹
- **Golongan**: 8 | **Blok**: d | **Elektronegativitas**: 2.2
- **Sifat**: Logam mulia, tahan korosi
- **Kegunaan**: Katalis (hidrogenasi), paduan keras, kontak listrik, sel surya

#### Rodium (Rh) - Nomor Atom 45

- **Simbol**: Rh | **Massa**: 102.906 u | **Konfigurasi**: [Kr] 4d⁸ 5s¹
- **Golongan**: 9 | **Blok**: d | **Elektronegativitas**: 2.28
- **Sifat**: Logam mulia, reflektif tinggi
- **Kegunaan**: Katalis (konverter katalitik, hidrogenasi), cermin, kontak listrik

#### Paladium (Pd) - Nomor Atom 46

- **Simbol**: Pd | **Massa**: 106.42 u | **Konfigurasi**: [Kr] 4d¹⁰
- **Golongan**: 10 | **Blok**: d | **Elektronegativitas**: 2.20
- **Sifat**: Logam mulia, menyerap H₂ (900x volume)
- **Kegunaan**: Katalis (konverter katalitik, reaksi organik), perhiasan, elektronik

#### Perak (Ag) - Nomor Atom 47

- **Simbol**: Ag (dari Latin: argentum) | **Massa**: 107.868 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s¹
- **Golongan**: 11 | **Blok**: d | **Elektronegativitas**: 1.93
- **Sifat**: Konduktor listrik dan panas terbaik, reflektif
- **Kegunaan**: Perhiasan, koin, elektronik, fotografi (AgBr), peralatan medis

#### Kadmium (Cd) - Nomor Atom 48

- **Simbol**: Cd | **Massa**: 112.411 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s²
- **Golongan**: 12 | **Blok**: d | **Elektronegativitas**: 1.69
- **Sifat**: Beracun, titik leleh rendah (321°C)
- **Kegunaan**: Baterai nikel-kadmium, pelapis anti korosi, pigmen (kuning), kontrol reaktor nuklir

#### Indium (In) - Nomor Atom 49

- **Simbol**: In | **Massa**: 114.818 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p¹
- **Golongan**: 13 | **Blok**: p | **Elektronegativitas**: 1.78
- **Sifat**: Meleleh di tangan (156.6°C), langka
- **Kegunaan**: ITO (indium tin oxide) untuk layar sentuh, LED, sel surya, paduan suhu rendah

#### Timah (Sn) - Nomor Atom 50

- **Simbol**: Sn (dari Latin: stannum) | **Massa**: 118.710 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p²
- **Golongan**: 14 | **Blok**: p | **Elektronegativitas**: 1.96
- **Sifat**: Alotrop: timah putih (β-Sn) dan timah abu-abu (α-Sn)
- **Kegunaan**: Pelapis baja (kaleng), paduan: perunggu (Cu-Sn), solder, kaca (SnO₂)

#### Antimon (Sb) - Nomor Atom 51

- **Simbol**: Sb (dari Latin: stibium) | **Massa**: 121.760 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p³
- **Golongan**: 15 | **Blok**: p | **Elektronegativitas**: 2.05
- **Sifat**: Metaloid, rapuh
- **Kegunaan**: Paduan timbal (baterai, peluru), flame retardant, semikonduktor

#### Telurium (Te) - Nomor Atom 52

- **Simbol**: Te | **Massa**: 127.60 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p⁴
- **Golongan**: 16 | **Blok**: p | **Elektronegativitas**: 2.1
- **Sifat**: Metaloid, rapuh
- **Kegunaan**: Paduan (timah, tembaga, besi), sel surya, semikonduktor, kaca

#### Iodin (I) - Nomor Atom 53

- **Simbol**: I | **Massa**: 126.904 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p⁵
- **Golongan**: 17 | **Blok**: p | **Elektronegativitas**: 2.66
- **Sifat**: Padat hitam mengkilap, menyublim menjadi uap ungu
- **Kegunaan**: Desinfeksi (iodin), kontras sinar-X, esensial (hormon tiroid), fotografi

#### Xenon (Xe) - Nomor Atom 54

- **Simbol**: Xe | **Massa**: 131.293 u | **Konfigurasi**: [Kr] 4d¹⁰ 5s² 5p⁶
- **Golongan**: 18 | **Blok**: p | **Elektronegativitas**: Tidak ada
- **Sifat**: Gas mulia, dapat membentuk senyawa (XeF₂, XeF₄, XeO₃)
- **Kegunaan**: Lampu (xenon arc), anestesi, propelan ion, detektor partikel

---

### 3.6 Periode 6

#### Cesium (Cs) - Nomor Atom 55

- **Simbol**: Cs | **Massa**: 132.905 u | **Konfigurasi**: [Xe] 6s¹
- **Golongan**: 1 | **Blok**: s | **Elektronegativitas**: 0.79
- **Sifat**: Logam alkali paling reaktif, titik leleh terendah (28.5°C)
- **Kegunaan**: Jam atom (standar waktu), detektor vakum, penelitian

#### Barium (Ba) - Nomor Atom 56

- **Simbol**: Ba | **Massa**: 137.327 u | **Konfigurasi**: [Xe] 6s²
- **Golongan**: 2 | **Blok**: s | **Elektronegativitas**: 0.89
- **Sifat**: Logam alkali tanah, reaktif dengan air
- **Kegunaan**: Kontras sinar-X (BaSO₄), kembang api (warna hijau), getter dalam tabung vakum

#### Lantanum (La) - Nomor Atom 57

- **Simbol**: La | **Massa**: 138.905 u | **Konfigurasi**: [Xe] 5d¹ 6s²
- **Golongan**: 3 | **Blok**: f | **Elektronegativitas**: 1.10
- **Sifat**: Logam lantanida pertama, reaktif
- **Kegunaan**: Paduan (baterai nikel-metal hidrida), kaca optik, katalis

#### Hafnium (Hf) - Nomor Atom 72

- **Simbol**: Hf | **Massa**: 178.49 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d² 6s²
- **Golongan**: 4 | **Blok**: d | **Elektronegativitas**: 1.3
- **Sifat**: Mirip zirkonium, penyerap neutron kuat
- **Kegunaan**: Kontrol reaktor nuklir, paduan super, elektronik

#### Tantalum (Ta) - Nomor Atom 73

- **Simbol**: Ta | **Massa**: 180.948 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d³ 6s²
- **Golongan**: 5 | **Blok**: d | **Elektronegativitas**: 1.5
- **Sifat**: Sangat tahan korosi, titik leleh tinggi (3017°C)
- **Kegunaan**: Kapasitor tantalum (elektronik), paduan super, implan medis

#### Wolfram/Tungsten (W) - Nomor Atom 74

- **Simbol**: W (dari Jerman: wolfram) | **Massa**: 183.84 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d⁴ 6s²
- **Golongan**: 6 | **Blok**: d | **Elektronegativitas**: 2.36
- **Sifat**: Titik leleh tertinggi (3414°C), sangat padat
- **Kegunaan**: Filamen lampu, paduan baja (peralatan potong), elektronik, radiasi perisai

#### Renium (Re) - Nomor Atom 75

- **Simbol**: Re | **Massa**: 186.207 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d⁵ 6s²
- **Golongan**: 7 | **Blok**: d | **Elektronegativitas**: 1.9
- **Sifat**: Titik didih tertinggi (5596°C), langka
- **Kegunaan**: Paduan super (mesin jet), katalis, filamen spektrometer massa

#### Osmium (Os) - Nomor Atom 76

- **Simbol**: Os | **Massa**: 190.23 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d⁶ 6s²
- **Golongan**: 8 | **Blok**: d | **Elektronegativitas**: 2.2
- **Sifat**: Unsur terpadat (22.59 g/cm³), sangat keras
- **Kegunaan**: Paduan keras (ujung pena, kontak listrik), katalis

#### Iridium (Ir) - Nomor Atom 77

- **Simbol**: Ir | **Massa**: 192.217 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d⁷ 6s²
- **Golongan**: 9 | **Blok**: d | **Elektronegativitas**: 2.20
- **Sifat**: Unsur terpadat kedua, tahan korosi ekstrem
- **Kegunaan**: Standar meter (paduan Pt-Ir), kontak listrik, katalis, penanda K-T boundary

#### Platina (Pt) - Nomor Atom 78

- **Simbol**: Pt | **Massa**: 195.084 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d⁹ 6s¹
- **Golongan**: 10 | **Blok**: d | **Elektronegativitas**: 2.28
- **Sifat**: Logam mulia, tahan korosi, katalis aktif
- **Kegunaan**: Katalis (konverter katalitik, industri kimia), perhiasan, peralatan laboratorium

#### Emas (Au) - Nomor Atom 79

- **Simbol**: Au (dari Latin: aurum) | **Massa**: 196.967 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s¹
- **Golongan**: 11 | **Blok**: d | **Elektronegativitas**: 2.54
- **Sifat**: Logam mulia, sangat tidak reaktif, konduktor baik, mudah dibentuk
- **Kegunaan**: Perhiasan, koin, elektronik (kontak), kedokteran gigi, investasi, nanoteknologi

#### Raksa (Hg) - Nomor Atom 80

- **Simbol**: Hg (dari Latin: hydrargyrum) | **Massa**: 200.59 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s²
- **Golongan**: 12 | **Blok**: d | **Elektronegativitas**: 2.00
- **Sifat**: Satu-satunya logam cair pada STP (-38.8°C), beracun
- **Kegunaan**: Termometer (sekarang dilarang), lampu fluoresen, tambal gigi (amalgam), pertambangan emas

#### Talium (Tl) - Nomor Atom 81

- **Simbol**: Tl | **Massa**: 204.383 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹
- **Golongan**: 13 | **Blok**: p | **Elektronegativitas**: 1.62
- **Sifat**: Sangat beracun, titik leleh rendah (304°C)
- **Kegunaan**: Detektor inframerah, paduan suhu rendah, racun (sekarang dilarang)

#### Timbal (Pb) - Nomor Atom 82

- **Simbol**: Pb (dari Latin: plumbum) | **Massa**: 207.2 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²
- **Golongan**: 14 | **Blok**: p | **Elektronegativitas**: 1.87
- **Sifat**: Padat, lunak, beracun, tahan korosi
- **Kegunaan**: Baterai timbal-asam, pelindung radiasi, solder, pipa (sekarang dilarang)

#### Bismut (Bi) - Nomor Atom 83

- **Simbol**: Bi | **Massa**: 208.980 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³
- **Golongan**: 15 | **Blok**: p | **Elektronegativitas**: 2.02
- **Sifat**: Logam terberat yang stabil, sedikit radioaktif (t½ = 2×10¹⁹ tahun)
- **Kegunaan**: Obat (Pepto-Bismol), paduan suhu rendah, kosmetik

#### Polonium (Po) - Nomor Atom 84

- **Simbol**: Po | **Massa**: [209] u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴
- **Golongan**: 16 | **Blok**: p | **Elektronegativitas**: 2.0
- **Sifat**: Radioaktif, ditemukan oleh Marie Curie, sangat beracun
- **Kegunaan**: Sumber neutron, antistatik, penelitian (ditemukan 1898)

#### Astatin (At) - Nomor Atom 85

- **Simbol**: At | **Massa**: [210] u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵
- **Golongan**: 17 | **Blok**: p | **Elektronegativitas**: 2.2
- **Sifat**: Radioaktif, semua isotop tidak stabil, sangat langka
- **Kegunaan**: Penelitian, terapi kanker (²¹¹At)

#### Radon (Rn) - Nomor Atom 86

- **Simbol**: Rn | **Massa**: [222] u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶
- **Golongan**: 18 | **Blok**: p | **Elektronegativitas**: Tidak ada
- **Sifat**: Gas mulia radioaktif, produk peluruhan radium, berbahaya jika terhirup
- **Kegunaan**: Terapi kanker (radon seed), penelitian

---

### 3.7 Lantanida (Lanthanides) - Nomor Atom 57-71

**Karakteristik Umum:**

- Mengisi orbital 4f
- Sifat kimia sangat mirip
- Logam lunak, reaktif
- Banyak digunakan dalam magnet, laser, dan elektronik

#### Serium (Ce) - Nomor Atom 58

- **Simbol**: Ce | **Massa**: 140.116 u | **Konfigurasi**: [Xe] 4f¹ 5d¹ 6s²
- **Sifat**: Lantanida paling melimpah, mudah teroksidasi
- **Kegunaan**: Katalis konverter katalitik, paduan besi, kaca optik, batu pemantik

#### Praseodimium (Pr) - Nomor Atom 59

- **Simbol**: Pr | **Massa**: 140.908 u | **Konfigurasi**: [Xe] 4f³ 6s²
- **Sifat**: Logam perak, reaktif
- **Kegunaan**: Magnet (NdFeB), paduan logam, kaca kuning, korek api

#### Neodimium (Nd) - Nomor Atom 60

- **Simbol**: Nd | **Massa**: 144.242 u | **Konfigurasi**: [Xe] 4f⁴ 6s²
- **Sifat**: Magnet kuat, warna ungu
- **Kegunaan**: Magnet neodimium (NdFeB, terkuat), laser, kaca ungu, katalis

#### Prometium (Pm) - Nomor Atom 61

- **Simbol**: Pm | **Massa**: [145] u | **Konfigurasi**: [Xe] 4f⁵ 6s²
- **Sifat**: Semua isotop radioaktif, tidak ada di alam
- **Kegunaan**: Baterai nuklir, penelitian

#### Samarium (Sm) - Nomor Atom 62

- **Simbol**: Sm | **Massa**: 150.36 u | **Konfigurasi**: [Xe] 4f⁶ 6s²
- **Sifat**: Magnet permanen
- **Kegunaan**: Magnet samarium-kobalt, kontrol reaktor nuklir, laser

#### Europium (Eu) - Nomor Atom 63

- **Simbol**: Eu | **Massa**: 151.964 u | **Konfigurasi**: [Xe] 4f⁷ 6s²
- **Sifat**: Paling reaktif di antara lantanida
- **Kegunaan**: Fosfor merah (TV, lampu), uang kertas anti pemalsu, laser

#### Gadolinium (Gd) - Nomor Atom 64

- **Simbol**: Gd | **Massa**: 157.25 u | **Konfigurasi**: [Xe] 4f⁷ 5d¹ 6s²
- **Sifat**: Ferromagnetik pada suhu rendah
- **Kegunaan**: Kontras MRI (Gd-DTPA), memori komputer, kontrol reaktor nuklir

#### Terbium (Tb) - Nomor Atom 65

- **Simbol**: Tb | **Massa**: 158.925 u | **Konfigurasi**: [Xe] 4f⁹ 6s²
- **Sifat**: Magnetostriksi tinggi
- **Kegunaan**: Fosfor hijau (TV, lampu), paduan magnetostriktif, laser

#### Disprosium (Dy) - Nomor Atom 66

- **Simbol**: Dy | **Massa**: 162.500 u | **Konfigurasi**: [Xe] 4f¹⁰ 6s²
- **Sifat**: Magnet kuat pada suhu rendah
- **Kegunaan**: Magnet neodimium (doping), data storage, laser

#### Holmium (Ho) - Nomor Atom 67

- **Simbol**: Ho | **Massa**: 164.930 u | **Konfigurasi**: [Xe] 4f¹¹ 6s²
- **Sifat**: Magnet terkuat per satuan massa
- **Kegunaan**: Magnet, laser, penelitian

#### Erbium (Er) - Nomor Atom 68

- **Simbol**: Er | **Massa**: 167.259 u | **Konfigurasi**: [Xe] 4f¹² 6s²
- **Sifat**: Warna merah muda
- **Kegunaan**: Serat optik (amplifier), laser medis, paduan nuklir

#### Tulium (Tm) - Nomor Atom 69

- **Simbol**: Tm | **Massa**: 168.934 u | **Konfigurasi**: [Xe] 4f¹³ 6s²
- **Sifat**: Lantanida paling langka
- **Kegunaan**: Sinar-X portabel, laser, penelitian

#### Iterbium (Yb) - Nomor Atom 70

- **Simbol**: Yb | **Massa**: 173.054 u | **Konfigurasi**: [Xe] 4f¹⁴ 6s²
- **Sifat**: Titik leleh rendah (824°C)
- **Kegunaan**: Jam atom, laser, paduan baja, penelitian

#### Lutesium (Lu) - Nomor Atom 71

- **Simbol**: Lu | **Massa**: 174.967 u | **Konfigurasi**: [Xe] 4f¹⁴ 5d¹ 6s²
- **Sifat**: Lantanida terakhir, paling keras dan padat
- **Kegunaan**: Detektor PET scan, katalis, penelitian

---

### 3.8 Periode 7

#### Fransium (Fr) - Nomor Atom 87

- **Simbol**: Fr | **Massa**: [223] u | **Konfigurasi**: [Rn] 7s¹
- **Golongan**: 1 | **Blok**: s
- **Sifat**: Logam alkali, semua isotop radioaktif, sangat langka (t½ maks 22 menit)
- **Kegunaan**: Penelitian saja

#### Radium (Ra) - Nomor Atom 88

- **Simbol**: Ra | **Massa**: [226] u | **Konfigurasi**: [Rn] 7s²
- **Golongan**: 2 | **Blok**: s
- **Sifat**: Radioaktif, ditemukan oleh Marie Curie, berbahaya
- **Kegunaan**: Terapi kanker (sekarang jarang), penelitian

#### Aktinium (Ac) - Nomor Atom 89

- **Simbol**: Ac | **Massa**: [227] u | **Konfigurasi**: [Rn] 6d¹ 7s²
- **Golongan**: 3 | **Blok**: f
- **Sifat**: Radioaktif, semua isotop tidak stabil
- **Kegunaan**: Generator neutron, penelitian

#### Rutherfordium (Rf) - Nomor Atom 104

- **Simbol**: Rf | **Massa**: [267] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d² 7s²
- **Golongan**: 4 | **Blok**: d
- **Sifat**: Unsur transaktinida, sintetis, radioaktif
- **Kegunaan**: Penelitian saja

#### Dubnium (Db) - Nomor Atom 105

- **Simbol**: Db | **Massa**: [268] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d³ 7s²
- **Golongan**: 5 | **Blok**: d
- **Sifat**: Unsur transaktinida, sintetis, radioaktif
- **Kegunaan**: Penelitian saja

#### Seaborgium (Sg) - Nomor Atom 106

- **Simbol**: Sg | **Massa**: [269] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d⁴ 7s²
- **Golongan**: 6 | **Blok**: d
- **Sifat**: Dinamai setelah Glenn Seaborg, sintetis
- **Kegunaan**: Penelitian saja

#### Bohrium (Bh) - Nomor Atom 107

- **Simbol**: Bh | **Massa**: [270] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d⁵ 7s²
- **Golongan**: 7 | **Blok**: d
- **Sifat**: Dinamai setelah Niels Bohr, sintetis
- **Kegunaan**: Penelitian saja

#### Hassium (Hs) - Nomor Atom 108

- **Simbol**: Hs | **Massa**: [269] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d⁶ 7s²
- **Golongan**: 8 | **Blok**: d
- **Sifat**: Dinamai setelah Hesse (Jerman), sintetis
- **Kegunaan**: Penelitian saja

#### Meitnerium (Mt) - Nomor Atom 109

- **Simbol**: Mt | **Massa**: [278] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d⁷ 7s²
- **Golongan**: 9 | **Blok**: d
- **Sifat**: Dinamai setelah Lise Meitner, sintetis
- **Kegunaan**: Penelitian saja

#### Darmstadtium (Ds) - Nomor Atom 110

- **Simbol**: Ds | **Massa**: [281] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d⁸ 7s²
- **Golongan**: 10 | **Blok**: d
- **Sifat**: Dinamai setelah Darmstadt (Jerman), sintetis
- **Kegunaan**: Penelitian saja

#### Roentgenium (Rg) - Nomor Atom 111

- **Simbol**: Rg | **Massa**: [282] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s¹
- **Golongan**: 11 | **Blok**: d
- **Sifat**: Dinamai setelah Wilhelm Röntgen, sintetis
- **Kegunaan**: Penelitian saja

#### Kopernisium (Cn) - Nomor Atom 112

- **Simbol**: Cn | **Massa**: [285] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s²
- **Golongan**: 12 | **Blok**: d
- **Sifat**: Dinamai setelah Nicolaus Copernicus, sintetis
- **Kegunaan**: Penelitian saja

#### Nihonium (Nh) - Nomor Atom 113

- **Simbol**: Nh | **Massa**: [286] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹
- **Golongan**: 13 | **Blok**: p
- **Sifat**: Dinamai setelah Jepang (Nihon), sintetis
- **Kegunaan**: Penelitian saja

#### Flerovium (Fl) - Nomor Atom 114

- **Simbol**: Fl | **Massa**: [289] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²
- **Golongan**: 14 | **Blok**: p
- **Sifat**: Dinamai setelah Georgy Flyorov, sintetis
- **Kegunaan**: Penelitian saja

#### Moscovium (Mc) - Nomor Atom 115

- **Simbol**: Mc | **Massa**: [290] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³
- **Golongan**: 15 | **Blok**: p
- **Sifat**: Dinamai setelah Moskow, sintetis
- **Kegunaan**: Penelitian saja

#### Livermorium (Lv) - Nomor Atom 116

- **Simbol**: Lv | **Massa**: [293] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴
- **Golongan**: 16 | **Blok**: p
- **Sifat**: Dinamai setelah Lawrence Livermore National Laboratory, sintetis
- **Kegunaan**: Penelitian saja

#### Tennessine (Ts) - Nomor Atom 117

- **Simbol**: Ts | **Massa**: [294] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵
- **Golongan**: 17 | **Blok**: p
- **Sifat**: Dinamai setelah Tennessee, sintetis
- **Kegunaan**: Penelitian saja

#### Oganesson (Og) - Nomor Atom 118

- **Simbol**: Og | **Massa**: [294] u | **Konfigurasi**: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶
- **Golongan**: 18 | **Blok**: p
- **Sifat**: Unsur terakhir yang ditemukan (2016), dinamai setelah Yuri Oganessian, sintetis
- **Kegunaan**: Penelitian saja

---

### 3.9 Aktinida (Actinides) - Nomor Atom 89-103

**Karakteristik Umum:**

- Mengisi orbital 5f
- Semua radioaktif
- Banyak digunakan dalam energi nuklir dan senjata

#### Torium (Th) - Nomor Atom 90

- **Simbol**: Th | **Massa**: 232.038 u | **Konfigurasi**: [Rn] 6d² 7s²
- **Sifat**: Radioaktif, t½ = 1.4×10¹⁰ tahun
- **Kegunaan**: Mantel gas (ThO₂), energi nuklir (reaktor torium)

#### Protaktinium (Pa) - Nomor Atom 91

- **Simbol**: Pa | **Massa**: 231.036 u | **Konfigurasi**: [Rn] 5f² 6d¹ 7s²
- **Sifat**: Radioaktif, sangat langka
- **Kegunaan**: Penelitian

#### Uranium (U) - Nomor Atom 92

- **Simbol**: U | **Massa**: 238.029 u | **Konfigurasi**: [Rn] 5f³ 6d¹ 7s²
- **Sifat**: Radioaktif, ²³⁵U dapat mengalami fisi
- **Kegunaan**: Bahan bakar nuklir, senjata nuklir, pewarna kaca (kuning), penanggalan geologi

#### Neptunium (Np) - Nomor Atom 93

- **Simbol**: Np | **Massa**: 237.048 u | **Konfigurasi**: [Rn] 5f⁴ 6d¹ 7s²
- **Sifat**: Unsur transuranium pertama, sintetis
- **Kegunaan**: Detektor neutron, penelitian

#### Plutonium (Pu) - Nomor Atom 94

- **Simbol**: Pu | **Massa**: [244] u | **Konfigurasi**: [Rn] 5f⁶ 7s²
- **Sifat**: Dapat mengalami fisi, sangat beracun
- **Kegunaan**: Bahan bakar nuklir, senjata nuklir, generator termoelektrik radioisotop (RTG)

#### Amerisium (Am) - Nomor Atom 95

- **Simbol**: Am | **Massa**: [243] u | **Konfigurasi**: [Rn] 5f⁷ 7s²
- **Sifat**: Dinamai setelah Amerika, sintetis
- **Kegunaan**: Detektor asap (²⁴¹Am), sumber neutron, penelitian

#### Kurium (Cm) - Nomor Atom 96

- **Simbol**: Cm | **Massa**: [247] u | **Konfigurasi**: [Rn] 5f⁷ 6d¹ 7s²
- **Sifat**: Dinamai setelah Marie dan Pierre Curie, sintetis
- **Kegunaan**: Generator termoelektrik radioisotop, penelitian

#### Berkelium (Bk) - Nomor Atom 97

- **Simbol**: Bk | **Massa**: [247] u | **Konfigurasi**: [Rn] 5f⁹ 7s²
- **Sifat**: Dinamai setelah Berkeley, sintetis
- **Kegunaan**: Penelitian

#### Kalifornium (Cf) - Nomor Atom 98

- **Simbol**: Cf | **Massa**: [251] u | **Konfigurasi**: [Rn] 5f¹⁰ 7s²
- **Sifat**: Dinamai setelah California, sintetis
- **Kegunaan**: Sumber neutron (²⁵²Cf), detektor logam, penelitian

#### Einsteinium (Es) - Nomor Atom 99

- **Simbol**: Es | **Massa**: [252] u | **Konfigurasi**: [Rn] 5f¹¹ 7s²
- **Sifat**: Dinamai setelah Albert Einstein, sintetis
- **Kegunaan**: Penelitian

#### Fermium (Fm) - Nomor Atom 100

- **Simbol**: Fm | **Massa**: [257] u | **Konfigurasi**: [Rn] 5f¹² 7s²
- **Sifat**: Dinamai setelah Enrico Fermi, sintetis
- **Kegunaan**: Penelitian

#### Mendelevium (Md) - Nomor Atom 101

- **Simbol**: Md | **Massa**: [258] u | **Konfigurasi**: [Rn] 5f¹³ 7s²
- **Sifat**: Dinamai setelah Dmitri Mendeleev, sintetis
- **Kegunaan**: Penelitian

#### Nobelium (No) - Nomor Atom 102

- **Simbol**: No | **Massa**: [259] u | **Konfigurasi**: [Rn] 5f¹⁴ 7s²
- **Sifat**: Dinamai setelah Alfred Nobel, sintetis
- **Kegunaan**: Penelitian

#### Lawrensium (Lr) - Nomor Atom 103

- **Simbol**: Lr | **Massa**: [266] u | **Konfigurasi**: [Rn] 5f¹⁴ 7s² 7p¹
- **Sifat**: Dinamai setelah Ernest Lawrence, sintetis, aktinida terakhir
- **Kegunaan**: Penelitian

---

## 4. Tabel Ringkasan: Semua 118 Unsur

Berikut adalah tabel ringkasan untuk referensi cepat semua unsur:

| No  | Simbol | Nama     | Golongan | Periode | Blok | Massa (u) | Titik Leleh (°C) | Titik Didih (°C) |
| --- | ------ | -------- | -------- | ------- | ---- | --------- | ---------------- | ---------------- |
| 1   | H      | Hidrogen | 1        | 1       | s    | 1.008     | -259.16          | -252.87          |
| 2   | He     | Helium   | 18       | 1       | s    | 4.003     | -272.20          | -268.93          |
| 3   | Li     | Litium   | 1        | 2       | s    | 6.941     | 180.50           | 1342             |
| 4   | Be     | Berilium | 2        | 2       | s    | 9.012     | 1287             | 2470             |
| 5   | B      | Boron    | 13       | 2       | p    | 10.81     | 2076             | 3927             |
| 6   | C      | Karbon   | 14       | 2       | p    | 12.011    | 3550             | 4027             |
| 7   | N      | Nitrogen | 15       | 2       | p    | 14.007    | -210.00          | -195.80          |
| 8   | O      | Oksigen  | 16       | 2       | p    | 16.00     | -218.79          | -182.96          |
| 9   | F      | Fluorin  | 17       | 2       | p    | 18.998    | -219.67          | -188.11          |
| 10  | Ne     | Neon     | 18       | 2       | p    | 20.180    | -248.59          | -246.05          |
| ... | ...    | ...      | ...      | ...     | ...  | ...       | ...              | ...              |

_Catatan: Tabel lengkap dengan semua 118 unsur tersedia dalam format yang lebih detail di bagian sebelumnya._

---

## 5. Pola dan Tren dalam Tabel Periodik

### 5.1 Tren Jari-jari Atom

**Dalam Periode (kiri → kanan):**

- Jari-jari menurun karena peningkatan muatan inti efektif
- Elektron valensi tertarik lebih kuat ke inti

**Dalam Golongan (atas → bawah):**

- Jari-jari meningkat karena penambahan kulit elektron
- Kulit elektron tambahan meningkatkan ukuran atom

### 5.2 Tren Energi Ionisasi

**Dalam Periode (kiri → kanan):**

- Energi ionisasi meningkat
- Lebih sulit melepaskan elektron karena muatan inti efektif lebih besar

**Dalam Golongan (atas → bawah):**

- Energi ionisasi menurun
- Elektron valensi lebih jauh dari inti, lebih mudah dilepaskan

### 5.3 Tren Elektronegativitas

**Dalam Periode (kiri → kanan):**

- Elektronegativitas meningkat
- Atom lebih kecil, lebih mudah menarik elektron

**Dalam Golongan (atas → bawah):**

- Elektronegativitas menurun
- Atom lebih besar, kurang efektif menarik elektron

### 5.4 Tren Sifat Logam

**Dalam Periode (kiri → kanan):**

- Sifat logam menurun
- Nonlogam meningkat

**Dalam Golongan (atas → bawah):**

- Sifat logam meningkat
- Nonlogam menurun

---

## 6. Aplikasi Praktis Tabel Periodik

### 6.1 Prediksi Sifat Kimia

Dengan memahami posisi unsur dalam tabel periodik, kita dapat memprediksi:

- Bilangan oksidasi yang mungkin
- Jenis ikatan yang terbentuk
- Reaktivitas
- Sifat fisik umum

### 6.2 Desain Material

Tabel periodik membantu dalam:

- Pemilihan paduan logam
- Desain semikonduktor
- Pengembangan katalis
- Penemuan material baru

### 6.3 Kimia Organik

Pemahaman tabel periodik penting untuk:

- Prediksi reaktivitas senyawa organik
- Desain obat-obatan
- Sintesis material organik

---

## 7. Kesimpulan

Tabel periodik unsur adalah fondasi kimia modern. Dengan memahami struktur dan pola dalam tabel periodik, kita dapat:

1. **Memahami sifat unsur** berdasarkan posisinya
2. **Memprediksi reaktivitas** dan jenis ikatan
3. **Mendesain material baru** dengan sifat yang diinginkan
4. **Mengembangkan teknologi** dari elektronik hingga energi

Dari hidrogen yang sederhana hingga oganesson yang kompleks, setiap unsur memiliki peran unik dalam alam semesta dan kehidupan kita.

---

_Cheatsheet ini mencakup semua 118 unsur kimia yang dikenal, dengan informasi dasar, sifat, dan kegunaan praktis. Untuk informasi lebih detail tentang unsur tertentu, silakan merujuk ke bagian yang relevan di atas._
