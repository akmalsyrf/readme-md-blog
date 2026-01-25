---
title: 'Dibalik Layar: Mengapa Aplikasi Harus Dibuat Spesifik untuk Setiap Sistem Operasi?'
description: 'Membongkar alasan teknis di balik ketidakcocokan aplikasi antara Windows, Mac, dan Linux, mulai dari System Calls hingga ABI.'
pubDate: 2026-01-25
author: 'Akmal'
tags: ['computer-science', 'operating-system', 'software-engineering']
---

Pernahkah kalian bertanya-tanya, kenapa file `.exe` dari Windows tidak bisa dibuka di MacBook, atau aplikasi Mac tidak bisa jalan di Linux? Jawaban simpelnya mungkin: _"Ya, kan beda OS!"_. Tapi bagi kita yang ingin tahu lebih dalam, jawabannya jauh lebih kompleks daripada sekadar perbedaan merek device.

Banyak orang mengira ini hanya masalah prosesor (seperti Intel vs Apple Silicon). Padahal, meskipun dua komputer menggunakan CPU yang sama persis, aplikasi dari satu OS tetap tidak bisa berjalan di OS lain. Kenapa? Mari kita bedah berdasarkan penjelasan dari kanal **Core Dumped** berikut.

<div class="my-8 flex justify-center">
  <div class="relative w-full max-w-3xl" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eP_P4KOjwhs?si=5Qi_0bP-N9xLR58z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"></iframe>
  </div>
</div>

---

## 1. Satpam Digital: User Mode vs Kernel Mode

Sistem Operasi (OS) modern didesain untuk menjalankan banyak aplikasi sekaligus. Untuk menjaga keamanan, CPU memiliki dua mode operasi:

- **User Mode:** Aplikasi kita (seperti Browser atau Game) berjalan di sini. Instruksinya terbatas hanya untuk perhitungan matematika atau memindahkan data di memori [[02:31](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=151s)].
- **Kernel Mode:** Mode "Priviledged" yang dimiliki OS. Hanya di mode ini CPU bisa mengakses _hardware_ secara langsung (seperti menulis data ke disk atau mengirim pesan lewat internet) [[02:09](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=129s)].

Masalahnya, aplikasi di _User Mode_ tidak punya kunci untuk masuk ke _Kernel Mode_. Di sinilah "System Calls" berperan.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260125155304_why-apps-are-os-spesific/interaction.webp" type="image/webp">
    <img 
      src="/notes/20260125155304_why-apps-are-os-spesific/interaction.png" 
      alt="Bagaimana Sistem Operasi mengatur interaksi dengan Kernel Mode dan User Mode" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Bagaimana Sistem Operasi mengatur interaksi dengan Kernel Mode dan User Mode</em>
  </p>
</div>

> **Fakta Menarik:** Transisi dari User Mode ke Kernel Mode bukan proses yang "gratis". Setiap kali aplikasi melakukan System Call, CPU harus melakukan **context switch** — proses yang memakan waktu karena harus menyimpan state aplikasi, mengubah privilege level, dan memanggil kode kernel. Inilah salah satu alasan mengapa System Call yang terlalu sering bisa memperlambat aplikasi.

## 2. System Calls: Bahasa yang Berbeda-beda

Aplikasi tidak bisa menyentuh _hardware_. Jika aplikasi ingin membuka file, ia harus "minta tolong" ke OS melalui **System Call** [[03:18](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=198s)].

Bayangkan OS sebagai pelayan restoran. Masalahnya:

- **Windows** menggunakan bahasa "A" untuk minta kopi (misalnya: `CreateProcess`).
- **Unix (Linux/Mac)** menggunakan bahasa "B" (misalnya: `Fork` diikuti `Exec`) [[05:04](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=304s)].

Bahkan jika CPU-nya sama, aplikasi Windows akan memberikan instruksi yang dianggap "bahasa planet lain" oleh Linux. Hasilnya? _Crash_ atau perilaku yang tidak terdefinisi [[06:23](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=383s)].

Perbedaan ini tidak hanya pada nama fungsi, tapi juga pada **semantik**-nya. Misalnya, Windows `CreateProcess` adalah satu fungsi yang melakukan banyak hal sekaligus, sementara Unix memecahnya menjadi `fork()` (menduplikasi proses) dan `exec()` (mengganti image proses). Filosofi desainnya berbeda fundamental [[05:04](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=304s)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260125155304_why-apps-are-os-spesific/win-lin-sys-call.webp" type="image/webp">
    <img 
      src="/notes/20260125155304_why-apps-are-os-spesific/win-lin-sys-call.png" 
      alt="Contoh Perbandingan System Calls Linux vs Windows" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Contoh Perbandingan System Calls Linux vs Windows</em>
  </p>
</div>

## 3. ABI (Application Binary Interface): Aturan Main yang Ketat

Bukan cuma beda bahasa, tapi aturan "tata krama"-nya juga beda. Hal ini disebut **ABI**.

ABI mendefinisikan bagaimana aplikasi dan OS "berkomunikasi" di level biner. Ini mencakup:

- **Calling convention** — register mana yang digunakan untuk parameter, register mana untuk return value
- **Stack layout** — bagaimana data disusun di stack saat function call
- **Data structure alignment** — bagaimana struktur data di-align di memori
- **Name mangling** — bagaimana nama fungsi di-encode untuk linking

Misalnya, saat aplikasi meminta layanan ke OS, ia harus menaruh data di "meja" (register) tertentu. OS Linux mungkin mengharapkan data ditaruh di meja nomor 1, sedangkan Windows di meja nomor 5 [[09:11](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=551s)]. Jika aplikasi salah menaruh data, OS tidak akan mengerti apa yang diminta, meskipun tujuannya sama [[10:08](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=608s)].

> **Contoh Praktis:** Di x86-64 Linux, parameter pertama System Call biasanya ditaruh di register `rax`, sedangkan di Windows x64, parameter pertama ditaruh di register `rcx`. Meskipun keduanya menggunakan arsitektur CPU yang sama (x86-64), ABI-nya berbeda, sehingga kode yang dikompilasi untuk satu OS tidak akan bekerja di OS lain.

## 4. Format File: "Bungkus" yang Berbeda

Setiap OS punya cara unik untuk membungkus kode mesinnya menjadi file yang bisa dieksekusi:

- **Windows** menggunakan format **PE (Portable Executable)**.
- **Linux** menggunakan format **ELF (Executable and Linkable Format)** [[11:52](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=712s)].

Ibaratnya, isinya mungkin sama-sama buku, tapi yang satu dibungkus kardus segel plastik, yang satu lagi dibungkus kaleng besi. Jika OS tidak tahu cara membuka "bungkusnya", ia tidak akan pernah bisa menjalankan isinya [[11:23](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=683s)].

Format file executable ini tidak hanya menentukan struktur, tapi juga menyimpan informasi penting seperti:

- **Entry point** — di mana kode harus mulai dieksekusi
- **Section headers** — bagaimana memori harus dialokasikan (code, data, stack)
- **Import/Export tables** — library apa yang dibutuhkan dan fungsi apa yang diekspor
- **Metadata** — informasi tentang compiler, versi, dan platform target

Tanpa informasi ini, OS tidak tahu bagaimana cara "membongkar" dan menjalankan kode mesin di dalamnya [[11:52](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=712s)].

> **Dynamic vs Static Linking:** Format executable juga menentukan bagaimana aplikasi menghubungkan library eksternal. **Static linking** menyalin semua kode library ke dalam executable, membuat file lebih besar tapi lebih portabel. **Dynamic linking** menyimpan referensi ke library eksternal (seperti `.dll` di Windows atau `.so` di Linux), membuat file lebih kecil tapi membutuhkan library tersebut tersedia di sistem. Perbedaan format library ini (`.dll` vs `.so`) juga menjadi salah satu alasan mengapa aplikasi tidak bisa langsung dipindah antar OS.

---

## 5. Virtual Machine & Interpreter

Lalu kenapa Java atau JavaScript (Node.js) bisa jalan di mana saja? Karena mereka menggunakan "penerjemah" di tengah-tengah.

Bahasa seperti ini tidak dikompilasi langsung ke kode mesin (native code), tapi dikompilasi ke **bytecode** — semacam "bahasa universal" yang bisa dipahami oleh Virtual Machine [[12:07](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=727s)]. Virtual Machine (seperti JVM untuk Java, atau V8 untuk JavaScript) bertindak sebagai "penerjemah" yang menjembatani antara bytecode dan OS setempat.

Cara kerjanya:

- Kode sumber (misalnya Java) dikompilasi menjadi bytecode yang **sama** di semua platform.
- Virtual Machine yang **spesifik per OS** membaca bytecode ini dan menerjemahkannya ke System Call yang sesuai dengan OS tempatnya berjalan.
- Jadi, satu file `.class` (Java) atau satu file JavaScript bisa berjalan di Windows, Mac, dan Linux — asalkan ada Virtual Machine yang tepat untuk masing-masing OS.

Ini seperti memiliki seorang penerjemah yang fasih dalam banyak bahasa. Kode aplikasi berbicara dalam "bahasa bytecode", lalu Virtual Machine menerjemahkannya ke "bahasa System Call" yang dimengerti oleh OS setempat. Selama ada penerjemahnya (VM), kodenya bisa "keliling dunia" ke berbagai OS tanpa perlu dikompilasi ulang.

Tentu saja, ada trade-off: aplikasi yang berjalan di atas VM biasanya lebih lambat dibanding aplikasi native karena ada "lapisan tambahan" yang harus diproses. Tapi untuk banyak kasus, portabilitas yang didapat sepadan dengan sedikit penurunan performa.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260125155304_why-apps-are-os-spesific/jvm.webp" type="image/webp">
    <img 
      src="/notes/20260125155304_why-apps-are-os-spesific/jvm.png" 
      alt="Contoh Java Virtual Machine yang memungkinkan satu Source Code di jalankan dimana saja" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Contoh Java Virtual Machine yang memungkinkan satu Source Code di jalankan dimana saja</em>
  </p>
</div>

> **Catatan Teknis:** Modern VM seperti JVM dan V8 menggunakan teknik **Just-In-Time (JIT) Compilation** untuk mengatasi masalah performa. Bytecode tidak hanya diinterpretasikan, tapi juga dikompilasi ke native code saat runtime. Ini membuat aplikasi VM bisa mendekati performa aplikasi native, sambil tetap mempertahankan portabilitas.

---

## 6. Compatibility Layer: "Penerjemah" untuk Aplikasi Native

Bagaimana jika kita ingin menjalankan aplikasi Windows di Linux, atau sebaliknya? Solusinya adalah **Compatibility Layer** — semacam "penerjemah" yang menerjemahkan System Call dari satu OS ke OS lain.

Contoh paling terkenal adalah **Wine** (Wine Is Not an Emulator) yang memungkinkan aplikasi Windows berjalan di Linux dan macOS. Wine bekerja dengan cara:

- **Menerjemahkan System Call Windows** ke System Call Unix yang setara
- **Mengemulasi format file PE** menjadi format yang bisa dipahami oleh OS host
- **Menyediakan implementasi library Windows** (seperti DirectX, Win32 API) menggunakan library native Unix

Proses ini tidak sempurna karena beberapa System Call Windows tidak memiliki padanan langsung di Unix, atau memiliki perilaku yang berbeda. Itulah mengapa tidak semua aplikasi Windows bisa berjalan dengan sempurna di Wine.

**Proton** (dari Valve) adalah fork dari Wine yang dioptimalkan khusus untuk game, dengan dukungan tambahan untuk DirectX 11/12 melalui Vulkan. Ini memungkinkan ribuan game Windows berjalan di Linux dengan performa yang hampir setara dengan Windows native.

> **Fakta Menarik:** Wine bukanlah emulator dalam arti tradisional. Wine tidak menjalankan instruksi CPU Windows di atas CPU Linux. Sebaliknya, Wine menjalankan kode mesin Windows secara langsung di CPU host, tapi menerjemahkan System Call Windows ke System Call Unix [[14:02](https://www.youtube.com/watch?v=eP_P4KOjwhs&t=842s)]. Inilah mengapa Wine bisa lebih cepat dibanding VM, tapi juga mengapa tidak semua aplikasi Windows bisa berjalan — beberapa aplikasi bergantung pada perilaku spesifik Windows yang sulit di-emulasi.

---

## 7. Container & Virtualization: Solusi Modern

Solusi modern lainnya adalah menggunakan **containerization** (seperti Docker) atau **virtualization** (seperti VirtualBox, VMware).

**Container** bekerja dengan cara membungkus aplikasi beserta semua dependensinya (library, runtime, konfigurasi) dalam satu paket yang bisa berjalan di berbagai OS — asalkan OS tersebut memiliki container runtime (seperti Docker Engine). Container menggunakan kernel dari OS host, jadi aplikasi di dalam container tetap harus kompatibel dengan System Call OS host.

**Virtual Machine** (VM) lebih "berat" karena menjalankan OS lengkap di dalam OS host. VM memiliki kernel sendiri, jadi aplikasi di dalam VM bisa menggunakan System Call dari OS guest-nya. Trade-off-nya adalah overhead yang lebih besar karena harus menjalankan seluruh OS.

Kedua pendekatan ini memungkinkan aplikasi berjalan di berbagai platform, tapi dengan cara yang berbeda: container untuk aplikasi yang sudah kompatibel dengan OS host, VM untuk aplikasi yang membutuhkan OS yang berbeda.

---

## Kesimpulan

Membangun aplikasi yang _cross-platform_ itu sulit karena kita berhadapan dengan fondasi OS yang berbeda secara fundamental. Sebagai _developer_, memahami System Call dan ABI membuat kita sadar bahwa **Software bukan sekadar baris kode, tapi sebuah dialog panjang antara aplikasi, sistem operasi, dan perangkat keras.**

---
