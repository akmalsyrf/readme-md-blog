export default {
  site: {
    title: 'Readme.md',
    description: 'Selamat datang di catatan saya',
    intro: 'Selamat datang',
    subtitle:
      'Saya menulis tentang teknologi, pengembangan perangkat lunak, dan hal-hal menarik lainnya.',
    latestPosts: 'Catatan Terbaru',
    viewAll: 'Lihat Semua',
    welcome: {
      greeting: 'Selamat datang di Readme.md',
      description: 'Catatan oleh',
      name: 'Akmal',
      intro:
        'Selamat datang di ruang kecil saya di internet. Di sini, saya berbagi pemikiran tentang apapun yang saya ingin bagikan. Terkadang mengenai software development, tapi kadang juga tidak. Kadang tentang pengetahuan yang tidak populer, kadang yang populer saja.',
      message:
        'Saya percaya bahwa berbagi pemikiran adalah cara terbaik untuk tumbuh bersama. Setiap artikel yang saya tulis adalah hasil dari pengalaman, lamunan, eksperimen, bacaan, juga refleksi pribadi.',
      closing:
        'Terima kasih telah mampir. Saya harap Anda menemukan sesuatu yang bermanfaat di sini.',
    },
  },
  nav: {
    home: 'Beranda',
    notes: 'Catatan',
    archive: 'Arsip',
    search: 'Cari',
    tags: 'Tag',
    others: 'Lainnya',
  },
  notes: {
    title: 'Catatan',
    readMore: 'Baca selengkapnya',
    backToNotes: 'Kembali ke Catatan',
    publishedOn: 'Dipublikasikan pada',
    readingTime: 'menit membaca',
    minRead: 'menit',
    underOneMinute: 'dibawah satu menit',
  },
  cheatsheet: {
    title: 'Cheatsheet',
    readMore: 'Baca selengkapnya',
    backToCheatsheet: 'Kembali ke Cheatsheet',
    publishedOn: 'Dipublikasikan pada',
    noCheatsheets: 'Belum ada cheatsheet.',
  },
  pagination: {
    previous: 'Sebelumnya',
    next: 'Selanjutnya',
    page: 'Halaman',
    of: 'dari',
  },
  navigation: {
    previousPost: 'Catatan Sebelumnya',
    nextPost: 'Catatan Selanjutnya',
    noPrevious: 'Tidak ada catatan sebelumnya',
    noNext: 'Tidak ada catatan selanjutnya',
  },
  archive: {
    title: 'Arsip',
    description: 'Semua catatan diurutkan berdasarkan tanggal',
    noPosts: 'Tidak ada catatan',
  },
  search: {
    title: 'Cari',
    placeholder: 'Cari catatan...',
    noResults: 'Tidak ada hasil ditemukan',
    results: 'hasil ditemukan',
  },
  tags: {
    title: 'Tag',
    description: 'Semua tag',
    postsCount: 'catatan',
    noTags: 'Tidak ada tag',
    backToTags: 'Kembali ke Tag',
    noPosts: 'Tidak ada catatan dengan tag ini',
  },
  others: {
    title: 'Lainnya',
    description: 'Halaman lainnya',
    experimental: 'Eksperimental',
    tryNow: 'Coba sekarang',
    menuItems: {
      deepResearchChatbot: {
        title: 'Deep Research Chatbot',
        description: 'Chatbot untuk melakukan penelitian mendalam dengan AI',
      },
      bahlilfication: {
        title: 'Bahlilfication',
        description: 'Ubah gambar atau gambar tangan apa pun menjadi "Bahlil"',
      },
      spineldb: {
        title: 'SpinelDB',
        description: 'Database In-Memory Modern yang Kompatibel dengan Redis dalam Rust',
      },
      cheatSheet: {
        title: 'Cheat Sheet',
        description:
          'Cheat sheet saya untuk berbagai topik (hanya tersedia dalam bahasa Indonesia)',
      },
      tensesDetector: {
        title: 'Tenses Detector',
        description: 'Deteksi dan tandai 16 tenses bahasa Inggris dalam teks',
      },
      compoundInterestCalculator: {
        title: 'Compound Interest Calculator',
        description: 'Hitung estimasi hasil bunga berbunga dari tabungan/investasi Anda',
      },
      portfolioBalancer: {
        title: 'Portfolio Balancer',
        description: 'Seimbangkan portfolio investasi Anda sesuai target alokasi',
      },
      hppCalculator: {
        title: 'Kalkulator HPP',
        description:
          'Hitung Harga Pokok Penjualan produk dengan akurat dan dapatkan saran harga jual',
      },
      pph21Calculator: {
        title: 'Kalkulator PPh 21',
        description: 'Hitung pajak penghasilan PPh 21 (Gross–Net, Net–Gross, Tax–Gross)',
      },
      mdToDocxConverter: {
        title: 'Konverter MD ke DOCX',
        description: 'Konversi teks Markdown ke DOCX dengan font, ukuran font, dan LaTeX/KaTeX',
      },
    },
  },
  pph21Calculator: {
    title: 'Kalkulator PPh 21',
    description:
      'Hitung Pajak Penghasilan Pasal 21: dari gaji kotor ke bersih, dari bersih ke kotor, atau dari pajak ke gaji kotor',
    modeLabel: 'Mode perhitungan',
    modeGrossToNet: 'Gross → Net (Take Home)',
    modeNetToGross: 'Net → Gross (Beban Riil)',
    modeTaxToGross: 'Tax → Gross (Reverse)',
    monthlyGrossLabel: 'Gaji Kotor Bulanan',
    monthlyNetLabel: 'Gaji Bersih Bulanan',
    thrLabel: 'THR (Tunjangan Hari Raya)',
    yearlyBonusLabel: 'Bonus Tahunan (Opsional)',
    maritalStatusLabel: 'Status PTKP',
    applyBiayaJabatanLabel: 'Gunakan biaya jabatan',
    applyBiayaJabatanTooltip: {
      title: 'Siapa yang kena biaya jabatan?',
      description:
        'Biaya jabatan (5% bruto, max Rp 6 jt/tahun) hanya untuk subjek tertentu. Pensiunan memakai biaya pensiun; freelancer/penghasilan final tidak.',
      formula:
        'Pegawai tetap: Ya | Pegawai tidak tetap: Ya | Pensiunan: Tidak (biaya pensiun) | Freelancer/tenaga ahli: Tidak | PPh final: Tidak',
      explanation:
        'Centang jika Anda pegawai tetap/tidak tetap. Kosongkan jika pensiunan, freelancer, atau penghasilan kena PPh final.',
    },
    taxTierDetailTitle: 'Detail PPh Tahunan (per lapisan)',
    taxTierLabel: 'Lapisan {tier} ({rate}% × Rp {amount})',
    totalAnnualTax: 'Total PPh 21 Tahunan',
    maritalStatusOptions: {
      TK0: 'TK/0 (Single, 0 Tanggungan)',
      TK1: 'TK/1 (Single, 1 Tanggungan)',
      TK2: 'TK/2 (Single, 2 Tanggungan)',
      TK3: 'TK/3 (Single, 3 Tanggungan)',
      K0: 'K/0 (Menikah, 0 Tanggungan)',
      K1: 'K/1 (Menikah, 1 Tanggungan)',
      K2: 'K/2 (Menikah, 2 Tanggungan)',
      K3: 'K/3 (Menikah, 3 Tanggungan)',
    },
    calculateButton: 'Hitung',
    resetButton: 'Reset',
    inputTitle: 'Input',
    resultsTitle: 'Hasil Perhitungan',
    yearlyGross: 'Penghasilan Bruto Tahunan',
    biayaJabatan: 'Biaya Jabatan (5%, max Rp 6jt/tahun)',
    ptkp: 'PTKP',
    pkp: 'Penghasilan Kena Pajak (PKP)',
    pphYearly: 'PPh 21 Tahunan',
    pphMonthly: 'PPh 21 Bulanan (rata-rata)',
    takeHomeMonthly: 'Take Home Bulanan',
    takeHomeYearly: 'Take Home Tahunan',
    requiredGrossMonthly: 'Gaji Kotor Bulanan yang Diperlukan',
    requiredGrossYearly: 'Gaji Kotor Tahunan yang Diperlukan',
    invalidInput: 'Masukkan nilai yang valid (angka ≥ 0).',
    tooltips: {
      yearlyGross: {
        title: 'Penghasilan Bruto Tahunan',
        description: 'Total penghasilan kotor dalam setahun sebelum potongan apa pun.',
        formula: 'Gaji bulanan × 12 + THR + Bonus tahunan',
        explanation: 'Dasar perhitungan PPh 21 dan pengurang (biaya jabatan, PTKP).',
      },
      biayaJabatan: {
        title: 'Biaya Jabatan',
        description:
          'Pengurang dari bruto untuk pegawai tetap; maksimal 5% bruto atau Rp 6 juta/tahun.',
        formula: 'min(5% × Bruto tahunan, Rp 6.000.000)',
        explanation: 'Diatur PMK; mengurangi Penghasilan Kena Pajak.',
      },
      ptkp: {
        title: 'PTKP',
        description: 'Penghasilan Tidak Kena Pajak menurut status (TK/K dan jumlah tanggungan).',
        formula: 'Sesuai status (TK/0–K/3)',
        explanation: 'Nilai per tahun; di bawah ini tidak kena pajak.',
      },
      pkp: {
        title: 'Penghasilan Kena Pajak (PKP)',
        description: 'Dasar pengenaan pajak setelah dikurangi biaya jabatan dan PTKP.',
        formula: 'Bruto tahunan − Biaya jabatan − PTKP (min 0)',
        explanation: 'PKP dikenai tarif progresif Pasal 17.',
      },
      pphYearly: {
        title: 'PPh 21 Tahunan',
        description: 'Total pajak penghasilan yang terutang dalam setahun.',
        formula: 'Tarif progresif 5%–35% × lapisan PKP',
        explanation: 'Dipotong pemberi kerja atau dibayar sendiri (sesuai aturan).',
      },
      pphMonthly: {
        title: 'PPh 21 Bulanan (rata-rata)',
        description: 'Pajak tahunan dibagi 12 untuk perkiraan potongan per bulan.',
        formula: 'PPh 21 tahunan ÷ 12',
        explanation: 'Perhitungan disederhanakan; pemotongan aktual bisa beda per bulan.',
      },
      takeHomeMonthly: {
        title: 'Take Home Bulanan',
        description: 'Penghasilan bersih per bulan setelah PPh 21.',
        formula: '(Bruto tahunan − PPh 21 tahunan) ÷ 12',
        explanation: 'Estimasi; belum termasuk potongan lain (BPJS, pensiun, dll).',
      },
      requiredGrossMonthly: {
        title: 'Gaji Kotor Bulanan yang Diperlukan',
        description: 'Perkiraan gaji kotor bulanan (tanpa THR/bonus) agar bersih = target net.',
        formula: '(Total bruto tahunan − THR − Bonus) ÷ 12',
        explanation: 'Dihitung dari mode Net→Gross agar take home = net yang diinginkan.',
      },
    },
  },
  hppCalculator: {
    title: 'Kalkulator HPP',
    description:
      'Hitung Harga Pokok Penjualan (HPP) produk dengan akurat dan dapatkan saran harga jual yang menguntungkan',
    productNameLabel: 'Nama Produk',
    productNamePlaceholder: 'Contoh: Es Teh Manis',
    materialsTitle: 'Bahan yang Dibeli',
    materialNameLabel: 'Nama Bahan',
    materialNamePlaceholder: 'Contoh: Gula',
    materialUnitLabel: 'Satuan',
    materialUnitPlaceholder: 'Contoh: kg',
    materialPriceLabel: 'Harga Beli di Toko',
    addMaterialButton: 'Tambah Bahan',
    totalMaterialsLabel: 'Total Pembelian Bahan',
    operationalCostsTitle: 'Biaya Operasional',
    laborCostLabel: 'Biaya Tenaga Kerja per Unit (Rp)',
    laborCostHint:
      'Cara hitung: Gaji per hari ÷ jumlah produk per hari. Contoh: Rp 100.000 ÷ 500 = Rp 200',
    overheadCostLabel: 'Biaya Overhead per Unit (Rp)',
    overheadCostHint:
      'Cara hitung: Total biaya bulanan (listrik, sewa, dll) ÷ jumlah produksi. Contoh: Rp 2.000.000 ÷ 10.000 = Rp 200',
    productQuantityLabel: 'Jumlah Produk yang Dihasilkan',
    productQuantityPlaceholder: 'Contoh: 100',
    productQuantityHint: 'Contoh: Dari bahan yang dibeli bisa menghasilkan 100 gelas es teh',
    calculateButton: 'Hitung HPP',
    resetButton: 'Reset',
    exampleButton: 'Contoh',
    resultsTitle: 'Hasil Perhitungan',
    hppPerUnit: 'HPP per Unit',
    totalCost: 'Total Biaya',
    totalMaterials: 'Total Bahan',
    totalOperational: 'Total Operasional',
    suggestedPricesTitle: 'Pilih Margin Keuntungan',
    margin25: '25%',
    margin35: '35%',
    margin50: '50%',
    sellingPrice: 'Harga jual',
    profit: 'Untung',
    invalidInput: 'Input tidak valid. Pastikan semua angka ≥ 0 dan jumlah produk > 0.',
    emptyFormMessage: 'Lengkapi form untuk melihat hasil perhitungan HPP',
    removeMaterial: 'Hapus',
    exportToExcelButton: 'Ekspor ke Excel',
    exportSuccess: 'File Excel berhasil diunduh',
    exportError: 'Gagal mengekspor ke Excel',
    creditText: 'Terinspirasi dari',
    creditLink: 'https://hitunghpp.com/kalkulator-hpp',
    creditLinkText: 'hitunghpp.com',
    tooltips: {
      margin25: {
        title: 'Margin 25%',
        description: 'Margin keuntungan ideal untuk mempertahankan bisnis',
        formula: 'Harga Jual = HPP × 1.25',
        explanation:
          'Margin 25-30% cocok untuk mempertahankan bisnis. Margin ini tergantung pada jenis produk, kompetisi pasar, dan positioning brand.',
      },
      margin35: {
        title: 'Margin 35%',
        description: 'Margin keuntungan ideal untuk pengembangan bisnis',
        formula: 'Harga Jual = HPP × 1.35',
        explanation:
          'Margin 35-45% cocok untuk pengembangan bisnis. Margin ini tergantung pada jenis produk, kompetisi pasar, dan positioning brand.',
      },
      margin50: {
        title: 'Margin 50%',
        description: 'Margin keuntungan ideal untuk produk premium/unik',
        formula: 'Harga Jual = HPP × 1.50',
        explanation:
          'Margin 50%+ cocok untuk produk premium/unik. Margin ini tergantung pada jenis produk, kompetisi pasar, dan positioning brand.',
      },
    },
  },
  compoundInterestCalculator: {
    title: 'Compound Interest Calculator',
    description:
      'Kalkulator sederhana untuk menghitung estimasi nilai masa depan dengan bunga berbunga dan setoran bulanan.',
    currencyLabel: 'Mata uang',
    principalLabel: 'Modal awal',
    monthlyContributionLabel: 'Setoran bulanan',
    depositIncreaseLabel: 'Kenaikan setoran per tahun',
    depositIncreaseHint: 'Kenaikan setoran bulanan tiap tahun (dari nilai setoran bulanan awal)',
    annualRateLabel: 'Bunga per tahun',
    annualRateHint: 'Contoh: 10 berarti 10% per tahun',
    yearsLabel: 'Durasi (tahun)',
    yearsHint: 'Misal: 10 tahun',
    inflationLabel: 'Inflasi per tahun',
    inflationHint: 'Contoh: 3 berarti 3% per tahun (untuk menghitung nilai riil)',
    calculateButton: 'Hitung',
    resetButton: 'Reset',
    resultsTitle: 'Hasil',
    finalAmount: 'Nilai akhir (estimasi)',
    presentValue: 'Nilai riil di tahun sekarang',
    totalContributions: 'Total setoran',
    totalInterest: 'Total bunga',
    interestShare: 'Porsi bunga dari nilai akhir',
    breakdownTitle: 'Rincian input',
    invalidInput: 'Input tidak valid. Pastikan semua angka \u2265 0.',
    exportButton: 'Ekspor ke Excel',
    exportSuccess: 'File Excel berhasil diunduh',
    exportError: 'Gagal mengekspor ke Excel',
    tooltips: {
      finalAmount: {
        title: 'Nilai Akhir (Estimasi)',
        description:
          'Total nilai investasi di akhir periode, termasuk modal awal, semua setoran, dan bunga yang diperoleh.',
        formula: 'FV = PV × (1 + r/n)^(n×t) + Σ[PMT × ((1 + r/n)^n - 1) / (r/n)]',
        explanation:
          'FV dihitung dengan bunga berbunga bulanan (n=12) dan setoran bulanan yang meningkat setiap tahun.',
      },
      presentValue: {
        title: 'Nilai Riil di Tahun Sekarang',
        description:
          'Nilai akhir yang disesuaikan dengan inflasi untuk menunjukkan daya beli sebenarnya di tahun sekarang.',
        formula: 'PV = FV / (1 + inflasi)^tahun',
        explanation:
          'Menghitung berapa nilai akhir jika diukur dengan daya beli saat ini, dengan mempertimbangkan inflasi.',
      },
      totalContributions: {
        title: 'Total Setoran',
        description:
          'Jumlah total uang yang disetor selama periode investasi, termasuk modal awal dan semua setoran bulanan.',
        formula: 'Total = Modal Awal + Σ(Setoran Bulanan × 12 × (1 + kenaikan)^tahun)',
        explanation:
          'Menjumlahkan modal awal dengan semua setoran bulanan yang meningkat setiap tahun sesuai persentase kenaikan.',
      },
      totalInterest: {
        title: 'Total Bunga',
        description:
          'Selisih antara nilai akhir dan total setoran, menunjukkan keuntungan dari bunga berbunga.',
        formula: 'Total Bunga = Nilai Akhir - Total Setoran',
        explanation:
          'Bunga yang diperoleh dari investasi, dihitung dengan mengurangi total setoran dari nilai akhir.',
      },
    },
    exportLabels: {
      year: 'Tahun',
      startingBalance: 'Saldo Awal',
      monthlyContribution: 'Setoran Bulanan',
      yearlyContributions: 'Total Setoran Tahun Ini',
      interestEarned: 'Bunga Tahun Ini',
      endingBalance: 'Saldo Akhir',
      presentValue: 'Nilai Riil di Tahun Sekarang',
      finalAmount: 'Nilai Akhir',
      total: 'Total',
    },
    breakdownLabels: {
      principal: 'Modal awal',
      monthlyContribution: 'Setoran bulanan',
      depositIncreaseRate: 'Kenaikan setoran/tahun',
      years: 'Durasi (tahun)',
      periods: 'Total bulan',
      annualRate: 'Bunga per tahun',
      inflationRate: 'Inflasi per tahun',
    },
  },
  portfolioBalancer: {
    title: 'Portfolio Balancer',
    description:
      'Alat untuk membantu menyeimbangkan portfolio investasi Anda sesuai dengan target alokasi yang ditetapkan.',
    targetAllocationTitle: 'Target Alokasi',
    targetAllocationDescription:
      'Masukkan persentase target untuk setiap kategori aset. Total harus sama dengan 100%.',
    currentAllocationTitle: 'Alokasi Saat Ini',
    currentAllocationDescription:
      'Masukkan nilai mata uang untuk setiap kategori aset yang Anda miliki saat ini.',
    currencyLabel: 'Mata uang',
    total: 'Total',
    totalPortfolioValue: 'Total Nilai Portfolio',
    calculateButton: 'Hitung',
    resetButton: 'Reset',
    addAsset: '+ Tambah Aset',
    removeAsset: 'Hapus',
    invalidInput: 'Input tidak valid. Pastikan semua angka valid dan total portfolio > 0.',
    totalMustBe100: 'Total alokasi {type} harus sama dengan 100%.',
    targetChartTitle: 'Target Alokasi',
    currentChartTitle: 'Alokasi Saat Ini',
    differencesTitle: 'Perbedaan Alokasi',
    recommendationsTitle: 'Rekomendasi',
    overAllocated: '(Berlebih)',
    underAllocated: '(Kurang)',
    correctlyAllocated: '(Sesuai)',
    recommendationBuy: 'Beli {amount} untuk mencapai target alokasi.',
    recommendationSell: 'Jual {amount} untuk mencapai target alokasi.',
    recommendationMaintain: 'Pertahankan alokasi saat ini.',
    assetNamePlaceholder: 'Nama aset (contoh: S&P 500)',
    targetPercentPlaceholder: '35',
    currentAmountPlaceholder: '10000000',
    assetLabels: {
      sp500: 'S&P 500 / Global Equity',
      growth: 'Growth Equity (Nasdaq / Factor / Emerging)',
      bonds: 'Obligasi (Syariah / Duration Pendek)',
      gold: 'Emas',
      cash: 'USD Cash',
    },
  },
  tensesDetector: {
    title: 'Tenses Detector',
    description: 'Deteksi dan tandai 16 tenses bahasa Inggris dalam teks Anda',
    inputPlaceholder: 'Masukkan atau tempel teks bahasa Inggris di sini...',
    analyzeButton: 'Analisis Tenses',
    analyzing: 'Menganalisis...',
    clearButton: 'Hapus',
    noTextError: 'Silakan masukkan teks terlebih dahulu',
    error: 'Terjadi kesalahan',
    errorMessage: 'Gagal menganalisis tenses. Silakan coba lagi.',
    legend: 'Legenda Tenses',
    statistics: 'Statistik',
    totalTenses: 'Total tenses ditemukan',
    tensesFound: 'tenses ditemukan',
    noTensesFound: 'Tidak ada tenses yang ditemukan dalam teks ini',
    tenses: {
      'Simple Present': 'Simple Present',
      'Present Continuous': 'Present Continuous',
      'Present Perfect': 'Present Perfect',
      'Present Perfect Continuous': 'Present Perfect Continuous',
      'Simple Past': 'Simple Past',
      'Past Continuous': 'Past Continuous',
      'Past Perfect': 'Past Perfect',
      'Past Perfect Continuous': 'Past Perfect Continuous',
      'Simple Future': 'Simple Future',
      'Future Continuous': 'Future Continuous',
      'Future Perfect': 'Future Perfect',
      'Future Perfect Continuous': 'Future Perfect Continuous',
      'Past Future': 'Past Future',
      'Past Future Continuous': 'Past Future Continuous',
      'Past Future Perfect': 'Past Future Perfect',
      'Past Future Perfect Continuous': 'Past Future Perfect Continuous',
    },
  },
  mdToDocxConverter: {
    title: 'Konverter MD ke DOCX',
    description: 'Konversi teks Markdown ke DOCX dengan font, ukuran font, dan LaTeX/KaTeX',
    inputPlaceholder:
      'Tempel atau ketik Markdown di sini. Mendukung **bold**, *italic*, heading, list, dan rumus: $x^2$, $$E=mc^2$$, atau [ Ek = \\frac{1}{2}mv^2 ]',
    fontLabel: 'Font',
    fontSizeLabel: 'Ukuran font (pt)',
    convertButton: 'Konversi ke DOCX',
    converting: 'Mengonversi...',
    clearButton: 'Hapus',
    noTextError: 'Silakan masukkan teks Markdown terlebih dahulu',
    error: 'Terjadi kesalahan',
    errorMessage: 'Konversi gagal. Silakan coba lagi.',
    successMessage: 'DOCX berhasil diunduh',
    latexSupport:
      'Rumus: $...$ (inline), $$...$$ atau [ ... ] (display) dikonversi ke equation Word. **Bold** dan *italic* juga didukung.',
  },
  aiPractice: {
    title: 'AI Practice',
    subtitle: 'Praktik dan latihan dengan AI',
    description: 'Halaman untuk berlatih dan bereksperimen dengan AI',
    buttonText: 'Praktik dengan AI',
  },
  deepResearchChat: {
    title: 'Deep Research Chatbot',
    subtitle: 'Penelitian mendalam dengan AI',
    welcome:
      'Halo! Saya adalah Deep Research Chatbot. Saya dapat membantu Anda melakukan penelitian mendalam tentang topik apa pun. Silakan ajukan pertanyaan Anda!',
    placeholder: 'Tulis pertanyaan penelitian Anda...',
    send: 'Kirim',
    processing: 'Memproses penelitian...',
    error: 'Terjadi kesalahan',
    errorMessage: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
    reportTitle: 'Laporan Penelitian',
    underConstruction: 'Sedang dalam pengembangan',
    reportSubtitle: 'Hasil penelitian mendalam',
    downloadReport: 'Unduh Laporan',
    download: 'Unduh',
    closeReport: 'Tutup Laporan',
    focus: {
      selectPlaceholder: 'Pilih fokus penelitian',
      loading: 'Memuat fokus...',
      selectFocus: 'Pilih Fokus',
      selectFirst: 'Silakan pilih fokus penelitian terlebih dahulu',
    },
    status: {
      starting: 'Memulai penelitian tentang',
      complete: 'Penelitian selesai!',
      restoring: 'Memulihkan progress penelitian sebelumnya...',
      noData:
        'Tidak ada data yang diterima dari server. Silakan coba lagi atau periksa koneksi internet Anda.',
      noFinalReport: 'Data diterima tetapi laporan final tidak ditemukan. Silakan coba lagi.',
      incomplete: 'Laporan mungkin tidak lengkap - periksa bagian yang hilang',
    },
    report: {
      open: 'Buka Laporan',
      sources: 'sumber',
      characters: 'karakter',
    },
    reportCanvas: {
      tableOfContents: 'Daftar Isi',
      toc: 'Daftar Isi',
      shareExport: 'Bagikan & Ekspor',
      share: 'Bagikan',
    },
  },
  theme: {
    toggle: 'Toggle tema',
    light: 'Terang',
    dark: 'Gelap',
  },
  fontSize: {
    toggle: 'Ukuran font',
    small: 'Kecil',
    medium: 'Sedang',
    large: 'Besar',
  },
  toc: {
    title: 'Daftar Isi',
    show: 'Tampilkan',
    hide: 'Sembunyikan',
  },
  breadcrumb: {
    home: 'Beranda',
    notes: 'Catatan',
    cheatsheet: 'Cheatsheet',
    tags: 'Tag',
  },
  notFound: {
    title: '404 - Halaman Tidak Ditemukan',
    heading: 'Halaman Tidak Ditemukan',
    description: 'Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.',
    backHome: 'Kembali ke Beranda',
    backNotes: 'Kembali ke Catatan',
  },
  share: {
    title: 'Bagikan',
    facebook: 'Facebook',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram',
    instagram: 'Instagram',
    copyLink: 'Salin Link',
  },
  comments: {
    title: 'Komentar & Diskusi',
    loading: 'Memuat komentar...',
    powered: 'Didukung oleh GitHub Discussions',
  },
  chatbot: {
    title: 'Asisten Chat AI',
    welcome:
      'Halo! Saya bisa membantu menjawab pertanyaan tentang catatan di Readme.md. Silakan tanyakan sesuatu!',
    placeholder: 'Tulis pertanyaan...',
    send: 'Kirim',
    processing: 'Memproses...',
    sources: 'Sumber',
    error: 'Terjadi kesalahan',
    errorMessage: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
    toggleLabel: 'Buka/Tutup chatbot',
    generatingRecommendations: 'Membuat rekomendasi pertanyaan...',
    recommendations: 'Pertanyaan yang mungkin Anda tanyakan:',
  },
  rag: {
    systemInstruction: `Anda adalah "Persona Blog Akmal". Tugas Anda HANYA menjawab pertanyaan berdasarkan isi pikiran Akmal yang ada di database blog.

ATURAN UTAMA:
1. Jika pertanyaan user TIDAK ADA pembahasannya di blog Akmal, Anda HARUS MENOLAK memberikan saran. JANGAN memberikan tips umum, JANGAN memberikan motivasi, dan JANGAN menghubungkan topik yang tidak nyambung (seperti menghubungkan AI/Duolingo dengan kencan).

2. Jika topik tidak ditemukan, gunakan template ini:
   "Waduh, kalau soal [Topik], Akmal belum pernah nulis nih di blog ini. Jadi aku nggak punya rekaman pemikiran dia soal itu. Coba tanya hal lain yang ada di blognya yuk, misalnya soal [Sebutkan 1 topik dari konteks]!"

3. Gaya Bahasa:
   - Santai dan friendly (panggil "aku/kamu").
   - Hindari kata: "Berdasarkan konteks", "Dalam dokumen ini", "Menurut data".
   - Gunakan: "Setahuku dari tulisan Akmal...", "Akmal sempat cerita di blog kalau...", "Di catatannya, Akmal bilang...".

4. Larangan Keras:
   - Dilarang memberikan saran di luar isi blog (No General Advice).
   - Dilarang menyebutkan angka referensi [1], [2].

PENTING: Anda adalah arsip pemikiran Akmal, bukan asisten pribadi user. Jika Akmal tidak menulis tentang itu, Anda TIDAK TAHU apa-apa.`,
    pageContextNote:
      'Catatan: User sedang melihat halaman "{title}". Jika pertanyaan terkait dengan halaman ini, prioritaskan informasi dari halaman tersebut.',
    userPromptTemplate:
      'Berikut adalah konteks dari blog notes yang relevan:\n\n{context}{pageContext}\n\nPertanyaan pengunjung: {question}\n\nJawablah pertanyaan tersebut dengan santai namun informatif berdasarkan konteks di atas. Jangan sertakan nomor referensi dalam jawaban.',
    noContextFound: 'No relevant context found.',
    errorNoAnswer: 'Maaf, saya tidak bisa menghasilkan jawaban.',
    errorNetwork:
      'Network error: Unable to connect to API. Please check your internet connection and try again.',
    errorNetworkGemini:
      'Network error: Unable to connect to Gemini API. Please check your internet connection and try again.',
    errorQuota: 'API quota exceeded. Please wait a moment and try again',
    errorApiKey: 'Invalid or missing GEMINI_API_KEY. Please check your .env file.',
    errorUnknown: 'Unknown error occurred while querying RAG',
    recommendations: {
      systemInstructionTemplate: `Anda adalah data driven question generator untuk blog "readme.md". 
  
ATURAN FORMANTING (WAJIB):
- HANYA keluarkan daftar pertanyaan.
- DILARANG memberikan kalimat pembuka seperti "Berikut adalah...", "Ini pertanyaannya:", atau kalimat apapun di awal.
- DILARANG memberikan kalimat penutup atau penjelasan di akhir.
- Satu baris satu pertanyaan, tanpa nomor, tanpa bullet point.
- JANGAN bertanya hal umum. Pertanyaan harus spesifik tentang apa yang Akmal tulis di bawah ini.
- Sebelum menulis pertanyaan, pastikan jawaban dari pertanyaan tersebut ada di dalam potongan teks blog.
- Satu pertanyaan hanya fokus pada satu topik. Jangan mencampur aduk. Pastikan pertanyaan masuk akal.

KONTEN:
- Maksimal {count} pertanyaan.
- Harus relevan dengan judul artikel: {titles}. dan catatan-catatan yang ada di blog.
- Bahasa santai/casual, maksimal 10 kata.`,
      pageContextNote:
        'Catatan penting: User sedang melihat halaman "{title}". Prioritaskan untuk menghasilkan pertanyaan yang relevan dengan halaman ini, tetapi juga sertakan beberapa pertanyaan umum tentang blog.',
      userPromptTemplate: `Ini adalah daftar judul artikel blog Akmal:\n\n{titles}{pageContext}\n\nBuatkan {count} pertanyaan singkat yang bikin orang penasaran buat klik, tapi tetap relevan sama judul di atas. Ingat, jangan melenceng dari topik judulnya ya!`,
      fallback: [
        'Apa saja topik yang dibahas di blog ini?',
        'Bagaimana cara menggunakan fitur-fitur yang tersedia?',
        'Apa yang menarik dari konten blog ini?',
        'Bisa jelaskan tentang teknologi yang digunakan?',
        'Apa tips dan trik yang bisa dipelajari?',
        'Bagaimana cara memulai dengan konten ini?',
        'Apa saja best practices yang direkomendasikan?',
        'Bisa berikan contoh implementasi?',
      ],
    },
  },
} as const;
