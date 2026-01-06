---
title: 'Jejak Fisik di Balik Kode: Mengapa Kita Menyebutnya Begitu?'
description: 'Menelusuri sejarah di balik istilah pemrograman populer seperti Bug, Print, dan Patch'
pubDate: 2026-01-06
author: 'Akmal'
tags: ['software-engineering', 'history', 'fun-facts', 'computer']
---

Membangun perangkat lunak di zaman modern sering kali membuat kita lupa bahwa bahasa yang kita gunakan sehari-hari—seperti _print_, _bug_, hingga _patch_—sebenarnya adalah "warisan" dari tumpukan besi, kabel, dan kertas di masa lalu.

Baru-baru ini, saya menonton sebuah video luar biasa dari kanal YouTube **Core Dumped** yang berjudul _"How History Shaped the Programming Terms We Still Use Today"_. Video ini benar-benar membuka mata saya tentang bagaimana sejarah fisik komputer membentuk jargon _software engineering_ yang kita pakai sekarang. Mari saya ceritakan beberapa temuan menariknya.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/core-dumped.webp" type="image/webp">
    <img 
      src="/notes/20260106200755_history-of-bug-patch-core-dumped/core-dumped.png" 
      alt="Core Dumped" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Core Dumped</em>
  </p>
</div>

---

### 1. Pesan Horor "Core Dumped"

Jika programmu _crash_ di lingkungan Linux, kamu mungkin pernah melihat pesan `segmentation fault (core dumped)`. Tahukah kamu bahwa "Core" di sini merujuk pada benda fisik nyata?

Dulu, memori komputer (RAM) terbuat dari ribuan cincin magnetik kecil yang disebut **magnetic core memory** [[01:11](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=71)]. Setiap cincin mewakili satu bit (0 atau 1). Ketika komputer mati atau _crash_, para insinyur perlu memeriksa isi dari "cincin-cincin" tersebut untuk mencari tahu apa yang salah. Proses menyalin seluruh isi memori fisik ke dalam sebuah file disebut "dumping the core". Jadi, meskipun sekarang RAM kita terbuat dari transistor silikon, kita masih "membuang isi inti" setiap kali terjadi kesalahan fatal [[04:24](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=264)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/magnetic-core-memory.webp" type="image/webp">
    <img 
      src="/notes/20260106200755_history-of-bug-patch-core-dumped/magnetic-core-memory.png" 
      alt="Magnetic Core Memory" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Magnetic Core Memory</em>
  </p>
</div>

### 2. Misteri Fungsi `print()` (Padahal Tidak Ada Kertas)

Pernahkah kamu merasa aneh saat mengetik `print("Hello World")` tapi yang muncul hanya tulisan di layar monitor, bukan di kertas printer?

Alasannya adalah di tahun 1950-an, monitor belum lazim digunakan. Alat _output_ utama adalah **teletype**—semacam mesin tik yang dihubungkan ke komputer [[10:44](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=644)]. Setiap kali komputer ingin memberikan jawaban, ia benar-benar **mencetak** (_print_) jawaban itu di atas kertas. Ketika monitor (terminal) mulai menggantikan kertas, para pemrogram saat itu malas mengubah nama fungsinya karena terlalu berisiko dan melelahkan untuk mengganti ribuan baris kode secara manual tanpa bantuan IDE modern [[16:14](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=974)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/teletype.webp" type="image/webp">
    <img 
      src="/notes/20260106200755_history-of-bug-patch-core-dumped/teletype.png" 
      alt="Teletype" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Teletype</em>
  </p>
</div>

### 3. Asal-Usul "Bug" dan "Debugging"

Cerita ini mungkin yang paling populer, tapi ada detail menarik di dalamnya. Pada tahun 1947, Laksamana Madya Grace Hopper menemukan seekor ngengat yang terjepit di dalam **relay** (saklar mekanis) komputer Mark II miliknya, yang menyebabkan kerusakan sistem [[07:04](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=424)].

Ngengat itu kemudian ditempel di buku log dengan catatan: _"First actual case of bug being found."_ Menariknya, istilah "bug" sendiri sebenarnya sudah digunakan oleh para insinyur (termasuk Thomas Edison) sejak abad ke-19 untuk mendeskripsikan cacat teknis, namun peristiwa ngengat inilah yang membuat istilah tersebut abadi di dunia komputer [[06:44](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=404)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/bug.webp" type="image/webp">
    <img 
      src="/notes/20260106200755_history-of-bug-patch-core-dumped/bug.png" 
      alt="Bug di dalam Relay" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Bug di dalam Relay</em>
  </p>
</div>

### 4. Menambal Kode dengan "Patch"

Kenapa pembaruan perangkat lunak disebut _patch_? Di masa lalu, data dimasukkan melalui kartu berlubang (_punch cards_) atau pita kertas. Jika ada kesalahan pada satu bit, kamu tidak bisa "menghapus" lubang yang sudah terlanjur dibuat. Solusi cerdiknya? Para insinyur menempelkan **selotip atau tambalan (patch)** di atas lubang yang salah tersebut agar komputer membacanya sebagai angka nol [[09:23](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=563)]. Itulah mengapa hingga sekarang, memperbaiki kode disebut sebagai "patching".

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/punch-card.webp" type="image/webp">
    <img 
      src="/notes/20260106200755_history-of-bug-patch-core-dumped/punch-card.png" 
      alt="Punch Card" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Punch Card</em>
  </p>
</div>

---

## Apresiasi untuk @CoreDumped: Seni Menjelaskan Hal Rumit

Di sela-sela cerita ini, saya ingin memberikan apresiasi khusus untuk kanal YouTube **[Core Dumped](https://www.youtube.com/@CoreDumpped)**. Jarang sekali saya menemukan kanal teknologi yang mampu memberikan penjelasan se-**deep** (mendalam) ini namun tetap terasa menarik.

Ada dua hal yang membuat saya sangat mengagumi karya George di kanal ini:

1. **Narasi yang Terstruktur:** Penjelasannya tidak hanya teknis, tapi memiliki alur sejarah yang kuat. Kita tidak hanya diajarkan "apa", tapi juga "mengapa".
2. **Animasi yang Memanjakan Mata:** @CoreDumped menggunakan animasi visual yang sangat halus dan cerdas untuk menggambarkan cara kerja konsep-konsep teknis di dunia _software engineering_. Padahal menurut pengakuan George ia hanya membuat _slide_-nya menggunakan _Microsoft Power Point_

Jika kamu adalah seorang _engineer_ yang ingin memahami akar dari apa yang kamu kerjakan setiap hari, video ini adalah tontonan wajib.

---

## Penutup: Belajar dari Masa Lalu

Mengingat kembali sejarah ini membuat saya sadar bahwa _software engineering_ bukanlah ilmu yang muncul tiba-tiba dari ruang hampa. Ia adalah akumulasi dari solusi-solusi fisik atas keterbatasan di masa lalu. Terkadang, untuk menjadi _engineer_ yang lebih baik di masa depan, kita perlu menoleh sejenak ke belakang dan memahami "besi tua" yang mendasarinya.

Bagaimana menurutmu? Apakah ada istilah lain yang membuatmu penasaran asal-usulnya?
