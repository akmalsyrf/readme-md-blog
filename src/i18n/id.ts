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
        'Selamat datang di ruang kecil saya di internet. Di sini, saya berbagi pemikiran tentang apapun yang saya ingin bagikan. Terkadang mengenai software development, tapi kadang juga tidak. Kadang tentang pengetahuan yang tidak populer, kadang yang populer aja.',
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
