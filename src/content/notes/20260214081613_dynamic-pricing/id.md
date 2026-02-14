---
title: 'Dilema Dynamic Pricing: Saat Algoritma "Mengintip" Dompet dan Urgensi Kita'
description: 'Bedah dynamic pricing di Indonesia: Gojek, Grab, Traveloka; lonjakan demand untuk ojol saat hujan, tarif Kemenhub, diskriminasi harga berbasis data, plus tips supaya tidak selalu kena multiplier—dengan sumber riset dan regulasi.'
pubDate: 2026-02-14
author: 'Akmal'
tags: ['technology', 'dynamic-pricing', 'unicorn', 'economics', 'society']
---

Pernahkah kamu merasa harga ojol tiba-tiba naik dua kali lipat saat hujan deras, padahal lima menit sebelumnya masih normal? Itulah **dynamic pricing**. Terinspirasi dari thread [Hanif Luthfi](https://x.com/hanifproduktif) ([1](https://x.com/hanifproduktif/status/2021022476407337471), [2](https://x.com/hanifproduktif/status/2021395323453571174)), tulisan ini membedah cara kerjanya dan dampaknya—bukan sekadar "harga naik", tapi bagaimana data dan konteks kita dipakai untuk menebak seberapa besar kita mau bayar.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260214081613_dynamic-pricing/dynamic-pricing.webp" type="image/webp">
    <img 
      src="/notes/20260214081613_dynamic-pricing/dynamic-pricing.png" 
      alt="Praktik Dynamic Pricing di perusahan teknologi " 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Praktik Dynamic Pricing di perusahan teknologi </em>
  </p>
</div>

---

## 1. Apa Itu Dynamic Pricing?

Secara sederhana, _dynamic pricing_ adalah strategi harga yang fleksibel: bisnis menyesuaikan harga berdasarkan kondisi pasar secara _real-time_. Harga bisa berubah dalam hitungan menit—tergantung permintaan, ketersediaan, waktu, cuaca, event besar, dan bahkan profil atau perilaku pengguna.

Dalam bentuk yang paling dasar, logika di baliknya kira-kira seperti ini:

- **Permintaan (demand)** — makin banyak orang butuh layanan, harga cenderung naik.
- **Penawaran (supply)** — makin sedikit driver yang available (misalnya saat hujan), harga ikut naik.
- **Waktu (time)** — jam sibuk, tengah malam, atau weekend bisa memicu multiplier.
- **Faktor eksternal** — hujan, konser, tahun baru, atau bahkan data perangkat dan baterai kita.

Di Indonesia kita kenal lewat **Gojek** dan **Grab**: saat permintaan di area kita tinggi vs jumlah driver, harga naik—[Gojek](https://www.gojek.com/en-id/help/goride/penetapan-harga-dinamis-untuk-transportasi) menampilkan indikator "thermometer", [Grab](https://www.grab.com/sg/inside-grab/stories/surge-dynamic-pricing-explained/) menjelaskan bahwa hujan bikin supply driver turun dan demand naik, jadi multiplier jalan. Kemenhub membatasi: multiplier bergerak _dalam_ [batas tarif per zona](https://itrade.cgsi.co.id/kemenhub-resmi-sesuailan-tarif-ojek-online) (Zona I/II/III), platform tidak boleh tembus plafon. Algoritma dipakai agar angka di layar mendekati harga tertinggi yang masih kita sanggup bayar—dalam koridor itu. Jadi ini juga soal **maksimalisasi revenue** per transaksi.

---

## 2. Dampak ke Masyarakat

Masalahnya bukan cuma naik-turun harga, tapi **ketimpangan posisi tawar**: platform punya data dan algoritma; kita tidak tahu persis bagaimana angka di layar diset. Yang kerap dirugikan: orang kepepet, sibuk, atau baterai abis—mereka bayar lebih karena posisi tawar lemah.

- **Eksploitasi urgensi** — Saat hujan, tengah malam, atau lokasi sepi, daya tawar jatuh; kita bayar berdasarkan **tingkat keputusasaan**. [Riset surge pricing](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3245533) menunjukkan manfaat tidak dibagi rata; beberapa kelompok (termasuk driver yang kerja lama, terutama perempuan) cenderung dirugikan.
- **Diskriminasi berbasis data** — Harga bisa dibedakan menurut model HP, riwayat belanja, atau sisa baterai. [Studi FTC 2025](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-surveillance-pricing-study-indicates-wide-range-personal-data-used-set-individualized-consumer) mencatat data yang dipakai sangat luas: lokasi, browser, keranjang, pola belanja.
- **Ketidakpastian anggaran** — Bagi yang mengandalkan Gojek/Grab untuk mobilitas kerja, biaya transport bulanan sulit diprediksi. [Debat regulasi tarif](https://jakartaglobe.id/business/govt-plan-to-regulate-ride-hailing-rates-threatens-grab-go-jek-expansion) memperlihatkan tarik ulur konsumen–driver–platform.

---

## 3. Sisi Terang: Mengapa Perusahaan Melakukannya?

- **Menjaga ekosistem (insentif supply)** — Tanpa kenaikan tarif saat hujan atau macet, driver bisa enggan narik; harga tinggi jadi "umpan" agar supply mengikuti demand. [Grab](https://www.grab.com/sg/inside-grab/stories/surge-dynamic-pricing-explained/) menjelaskan lonjakan harga menyeimbangkan jumlah driver dan penumpang.
- **Kepatuhan regulasi** — Gojek dan Grab harus profitable sambil mematuhi [batas tarif Kemenhub](https://www.reuters.com/article/us-indonesia-transportation-regulation-idUSKBN19N0E2/). [Jakarta Globe](https://jakartaglobe.id/business/govt-plan-to-regulate-ride-hailing-rates-threatens-grab-go-jek-expansion) mencatat komitmen patuh sambil jaga pendapatan driver.
- **Trade-off** — Di satu sisi: efisiensi dan kelangsungan layanan. Di sisi lain: risiko eksploitasi bagi konsumen yang kepepet atau kurang informasi.

---

## 4. Refleksi: Harga yang Semakin "Individual"

Harga semakin **individual**—dibentuk data dan algoritma. Di Indonesia tidak cuma ojol: **Traveloka** memakai [dynamic pricing tiket pesawat & hotel](https://hub.kirim.ai/ai-dynamic-pricing-tiket-pesawat-hotel) (permintaan, musim, event, perilaku). Fitur [Notifikasi Harga Traveloka](https://www.traveloka.com/id-id/explore/news/never-miss-the-best-flight-deals-with-traveloka-price-alerts/63396) membantu pantau fluktuasi—tapi yang tidak punya waktu pantau tetap bisa kena angka lebih tinggi. [Riset OECD](https://www.oecd-ilibrary.org/science-and-technology/the-effects-of-online-disclosure-about-personalised-pricing-on-consumers_1ce1de63-en): pengungkapan saja berdampak terbatas; konsumen anggap praktik ini **tidak adil**. Kalau tidak hati-hati, kita gampang korban _decision fatigue_ yang dimanfaatkan algoritma.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260214081613_dynamic-pricing/surveillance-pricing.webp" type="image/webp">
    <img 
      src="/notes/20260214081613_dynamic-pricing/surveillance-pricing.png" 
      alt="Harga disesuaikan berdasarkan beberapa faktor menurut FTC" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Harga disesuaikan berdasarkan beberapa faktor menurut FTC</em>
  </p>
</div>

---

## 5. Tips Kecil untuk Menjadi Konsumen yang Lebih Cerdas

Kita tidak bisa menghapus _dynamic pricing_, tapi kita bisa sedikit "melawan" atau setidaknya tidak selalu pasrah—dan untuk konteks Indonesia ada beberapa saran untuk "mengakali" algoritma.

1. **Jangan panik—tunggu beberapa menit**  
   Harga Gojek atau Grab melonjak pas hujan? Coba tunggu 5–10 menit. Lonjakan permintaan sering berumur pendek; setelah gelombang order pertama terlayani, multiplier kerap turun. Riset serupa di luar negeri ([NPR](https://www.npr.org/sections/alltechconsidered/2015/10/29/452585089/uber-surge-price-research-says-walk-a-few-blocks-wait-a-few-minutes)) mengonfirmasi bahwa menunggu beberapa menit saja bisa menghemat cukup banyak.

2. **Bandingkan Gojek dan Grab**  
   Punya kedua aplikasi dan cek harga sebelum order. Satu platform bisa lagi "panas" sementara yang lain masih normal—karena zona dan algoritma tiap app bisa beda. Memberi tekanan kompetisi kecil ke algoritma.

3. **Pindah titik jemput (kalau aman)**  
   Zona surge punya batas tak terlihat; dua titik berjarak dekat kadang beda multiplier. Di [investigasi serupa terhadap model surge Grab](https://www.rappler.com/business/how-pcij-investigated-grab-surge-pricing-model/) (Filipina), jurnalisme investigasi menunjukkan pentingnya memahami bagaimana zona dan waktu memengaruhi harga. Di sini, pilih titik jemput yang sedikit menjauh dari pusat keramaian atau dari "episentrum" hujan kadang bantu—asal tetap aman dan masuk akal.

4. **Tiket pesawat/hotel: pakai Price Alert**  
   Kalau sering beli tiket lewat Traveloka (atau platform lain), manfaatkan [fitur Notifikasi Harga](https://www.traveloka.com/id-id/flights/price-alerts). Kita bisa dapat notifikasi saat harga naik/turun signifikan dan lihat riwayat harga—jadi tidak cuma mengandalkan satu kali cek yang kebetulan lagi mahal.

5. **Jaga baterai (dan privasi konteks)**  
   Jangan kasih sinyal bahwa kita kepepet—baterai hampir habis, lokasi sepi. Charge HP sebelum order kalau bisa; kurangi info yang bisa dipakai algoritma untuk naikkan harga.

6. **Buka website lewat mode incognito (e-commerce)**  
   Untuk belanja online atau booking lewat browser, harga sering dipersonalisasi dari riwayat dan cookie. Incognito atau browser bersih kadang tampilkan harga lebih "netral".

7. **Pilih waktu dan rute**  
   Kalau tidak mendesak, hindari order ojol di puncak jam sibuk atau pas hujan baru turun. Sedikit geser waktu atau titik jemput bisa ubah multiplier.

---

## Penutup

_Dynamic pricing_ adalah pisau bermata dua: efisiensi dan layanan saat dibutuhkan di satu sisi, eksploitasi keputusasaan di sisi lain. Di Indonesia, [batas tarif Kemenhub](https://katadata.co.id/digital/startup/68649a95d9aba/kemenhub-akan-kerek-tarif-ojol-hingga-15-gojek-soroti-daya-beli-masyarakat) membatasi multiplier—tapi perdebatan "batas atas vs kelangsungan layanan" tetap hidup. Pertanyaan reflektifnya bukan cuma apakah harga ini adil, tapi **siapa yang pegang kontrol atas cara kita dinilai.** Kalau harga makin personal, mungkin yang perlu kita tuntut bukan cuma diskon—tapi hak untuk tahu. Bagaimana menurut kamu?
