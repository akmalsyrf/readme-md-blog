---
title: 'Membongkar Kode "Aneh": Overview Bitwise Operations di Low-Level Programming'
description: 'Membongkar konsep operasi bitwise dalam pemrograman low-level, dari cara kerja CPU hingga teknik bit packing untuk efisiensi memori ekstrem'
pubDate: 2026-01-10
author: 'Akmal'
tags: ['bitwise-operation', 'software-engineering', 'low-level-programming']
---

Pernahkah Anda mengintip kode sumber kernel Linux, _driver_ perangkat keras, atau pustaka kriptografi dan merasa bingung melihat simbol-simbol seperti `&`, `|`, `<<`, serta deretan angka heksadesimal misterius? Bagi pengembang aplikasi web atau _high-level_, kode ini tampak seperti bahasa alien. Namun, di dunia _low-level_, ini adalah instrumen presisi untuk efisiensi maksimal.

Artikel ini akan membedah konsep **Bitwise Operations** berdasarkan penjelasan mendalam dari kanal _Core Dumped_, mulai dari cara kerja CPU hingga teknik _bit packing_.

<div class="my-8 flex justify-center">
  <div class="relative w-full max-w-3xl" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe
      src="https://www.youtube.com/embed/z7wVUfnm7M0?si=8wFXB7xYk8r5BEuV"
      title="Why Some Low-Level Projects Are Full of Weird Code Like This - Core Dumped"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
</div>

---

## 1. Fondasi Hardware: Mengapa Kita Tidak Bisa Mengakses Bit Secara Langsung?

Meskipun kita tahu komputer bekerja dengan biner (0 dan 1), CPU tidak dirancang untuk memproses satu bit dalam satu waktu. CPU beroperasi dalam unit yang disebut **Word** [[01:29](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=89)].

- **Word** adalah unit data alami prosesor (misalnya 16-bit, 32-bit, atau 64-bit).
- **Masalahnya:** Tidak ada sirkuit fisik khusus dalam CPU konvensional yang bisa langsung membaca atau menulis "bit ke-3" tanpa menyentuh bit lainnya dalam satu _word_ [[01:40](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=100)]. Operasi memori selalu bekerja pada tingkat minimal satu **Byte** (8 bit).

Inilah alasan mengapa kita membutuhkan operasi _bitwise_: untuk memanipulasi bit individu di dalam "bungkusan" byte yang diberikan oleh perangkat keras.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/word.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/word.png" 
      alt="Unit Word di CPU" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Unit Word di CPU</em>
  </p>
</div>

## 2. Operasi Bitwise Utama dan Logikanya

Berbeda dengan aritmatika biasa (seperti penjumlahan) di mana ada efek _carry_ (simpanan angka) yang merambat ke bit di sebelahnya, operasi _bitwise_ memproses setiap bit secara **independen** [[03:13](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=193)].

### A. Bitwise AND (`&`)

Output akan menjadi `1` hanya jika kedua input adalah `1`. Dalam teknisnya, ini sering digunakan sebagai **filter** atau **mask** untuk menghapus data.

- **Kegunaan:** Menghapus (_Clearing_) bit tertentu menjadi `0`.

### B. Bitwise OR (`|`)

Output akan menjadi `1` jika salah satu atau kedua input adalah `1`.

- **Kegunaan:** Menetapkan (_Setting_) bit tertentu menjadi `1` tanpa mengubah bit lainnya [[10:21](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=621)].

### C. Bitwise XOR (`^`)

_Exclusive OR_ menghasilkan `1` jika inputnya berbeda. Jika input kedua adalah `1`, maka input pertama akan "dibalik" (_flipped_).

- **Kegunaan:** Membalik (_Toggling_) status bit dari 0 ke 1 atau sebaliknya [[12:56](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=776)].

### D. Bitwise NOT (`~`) dan Bit Shifts (`<<`, `>>`)

- **NOT:** Membalikkan semua bit dalam satu _word_.
- **Shifts:** Menggeser seluruh deretan bit ke kiri atau kanan. Menggeser ke kiri satu posisi sama dengan mengalikan angka dengan 2, sedangkan menggeser ke kanan sama dengan membagi 2 [[04:28](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=268)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/bitwise-operation.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/bitwise-operation.png" 
      alt="Operasi Bitwise" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Operasi Bitwise</em>
  </p>
</div>

---

## 3. Teknik Bit Packing: Efisiensi Ruang yang Ekstrem

Salah satu aplikasi paling nyata dari operasi ini adalah **Bit Packing**. Bayangkan Anda memiliki 8 sakelar _toggle_ (On/Off) dalam sebuah aplikasi.

Secara naif, kita mungkin menggunakan 8 variabel `boolean`. Namun, karena tipe data terkecil di memori adalah 1 Byte (8 bit), maka 8 boolean tersebut akan memakan 8 Byte ruang [[07:43](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=463)]. Padahal, secara teoritis, 8 status On/Off tersebut bisa muat dalam **satu Byte saja**.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/before-bit-packing.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/before-bit-packing.png" 
      alt="Sebelum menggunakan Bit Packing" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Sebelum menggunakan Bit Packing</em>
  </p>
</div>

- **Studi Kasus Retro:** Pada game _Super Mario Bros_ di NES yang hanya memiliki RAM 2 KB, teknik ini krusial. Satu byte digunakan untuk menyimpan banyak status sekaligus: apakah Mario sedang kecil, punya kekuatan api, sedang tak terkalahkan (bintang), hingga arah hadapnya [[16:16](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=976)].
- **Skala Modern:** Untuk aplikasi dengan 50 juta pengguna, menghemat beberapa bit per pengguna bisa menghemat ratusan megabyte penyimpanan server [[08:18](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=498)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/bit-packing.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/bit-packing.png" 
      alt="Setelah menggunakan Bit Packing" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Setelah menggunakan Bit Packing</em>
  </p>
</div>

---

## 4. Implementasi Teknis: Set, Clear, Toggle, dan Read

Untuk memanipulasi bit ke-_n_ di dalam sebuah byte, kita menggunakan konsep **Mask** (Topeng).

1. **Set Bit (Menjadi 1):** `word | (1 << n)`
   Kita menggeser angka `1` sebanyak `n` kali untuk membuat masker, lalu menggabungkannya dengan operasi `OR` [[11:23](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=683)].
2. **Clear Bit (Menjadi 0):** `word & ~(1 << n)`
   Kita membuat masker dengan `1` di posisi `n`, membaliknya dengan `NOT`, lalu melakukan `AND`. Ini memaksa bit ke-n menjadi `0` [[12:24](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=744)].
3. **Toggle Bit:** `word ^ (1 << n)`
   Menggunakan `XOR` dengan masker yang hanya memiliki angka `1` di posisi target [[13:19](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=799)].
4. **Read Bit:** `(word >> n) & 1`
   Geser bit target ke posisi paling kanan (LSB), lalu gunakan masker `1` dengan operasi `AND` untuk mendapatkan nilai murninya (0 atau 1) [[14:24](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=864)].

---

## 5. Mengapa Banyak Angka Heksadesimal?

Dalam kode riil, pengembang jarang mengetik biner panjang seperti `00001000`. Ini sangat rawan kesalahan (_error-prone_). Sebagai gantinya, mereka menggunakan **Heksadesimal** [[17:52](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=1072)].

Satu karakter heksadesimal (0-F) mewakili tepat 4 bit. Ini memudahkan pemetaan mental antara kode dan struktur bit di memori. Jadi, jika Anda melihat `0x80`, pengembang sistem tahu itu adalah bit ke-7 yang aktif dalam satu byte.

---

## Kesimpulan

Operasi _bitwise_ adalah jembatan antara logika perangkat lunak dan realitas fisik perangkat keras. Meskipun jarang digunakan dalam pengembangan web modern, pemahaman tentang konsep ini sangat penting untuk bidang-bidang seperti:

- **Sistem Tertanam (Embedded Systems):** Di mana memori sangat terbatas [[15:05](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=905)].
- **Kompresi Data:** Algoritma yang mengecilkan ukuran video atau gambar sangat bergantung pada manipulasi bit [[16:44](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=1004)].
- **Kriptografi:** Keamanan siber modern dibangun di atas operasi _bitwise_ yang cepat dan efisien.

Memahami kode "aneh" ini berarti Anda mulai memahami bahasa asli dari mesin yang Anda gunakan setiap hari.
