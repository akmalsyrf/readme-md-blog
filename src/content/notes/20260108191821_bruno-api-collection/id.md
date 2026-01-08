---
title: 'Meninggalkan Postman Cloud: Cerita Migrasi ke Bruno dan Efisiensi Git-Native Workflow'
description: 'Muak dengan Postman yang makin berat dan ribet? Simak cerita migrasi saya ke Bruno, API client yang "Git-native", ringan, dan gratis untuk kolaborasi tim.'
pubDate: 2026-01-08
author: 'Akmal'
tags: ['backend', 'api', 'bruno', 'automation', 'git', 'software-engineering']
---

Akhir-akhir ini saya merasa Postman terasa semakin _cloud-centric_ juga semakin banyak _additional-feature_ yang sepertinya tidak perlukan untuk sebuah _API Client_. Masalah utama muncul saat kolaborasi tim menjadi ribet karena batasan _workspace_ atau batasan _member_ untuk bergabung di organisasi Postman _free tier_. Sebagai _engineer_ yang memuja efisiensi, saya mendambakan sesuatu yang bisa masuk ke dalam ekosistem yang sudah ada: **Git**.

Lalu, saya bertemu dengan [**Bruno**](https://www.usebruno.com/).

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108191821_bruno-api-collection/bruno.webp" type="image/webp">
    <img 
      src="/notes/20260108191821_bruno-api-collection/bruno.png" 
      alt="Contoh tampilan Bruno" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Contoh tampilan Bruno</em>
  </p>
</div>

## Satu Request, Satu File

Hal pertama yang membuat saya terkesan pada Bruno adalah filosofinya: **Offline-first dan Plain Text.**

Berbeda dengan Postman yang menyimpan koleksi di dalam satu file _collection.json_ (yang mesti di _import_ ulang ketika ada perubahan) atau cloud mereka yang memiliki batasan member di _tier_ gratis nya, Bruno menyimpan setiap _request_ sebagai sebuah file dengan ekstensi `.bru`. Bayangkan, satu _request_ adalah satu file teks sederhana.

Karena berbasis file dan folder, saya tidak perlu lagi berlangganan fitur _cloud_ berbayar hanya untuk berbagi koleksi API dengan rekan setim. Saya cukup memasukkan folder koleksi tersebut ke dalam repositori Git proyek. Ingin berbagi _update_ API terbaru? Tinggal `git push`. Rekan setim ingin mengambilnya? Cukup `git pull`.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108191821_bruno-api-collection/file-structure.webp" type="image/webp">
    <img 
      src="/notes/20260108191821_bruno-api-collection/file-structure.png" 
      alt="Contoh struktur folder dan struktur file Bruno" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Contoh struktur folder dan struktur file Bruno</em>
  </p>
</div>

## Implementasi Single Source of Truth: OpenAPI ke Bruno

Ini adalah bagian yang paling memuaskan secara teknis. Sebagai _backend engineer_, saya sering menggunakan OpenAPI Spec (sebut saja berpusat di file bernama `api.yml`) sebagai dokumentasi utama. Masalah klasik yang sering muncul adalah: **Dokumentasi di YAML sudah berubah, tapi koleksi di API Client masih versi lama.**

Saya memutuskan untuk membangun sistem otomatisasi menggunakan Bruno CLI. Saya membuat sebuah **repositori khusus API Collection** dengan alur kerja sebagai berikut:

1. **Repo Terpusat:** Semua koleksi Bruno untuk berbagai layanan disimpan di sini.
2. **Trigger Otomatis:** Di dalam repo ini, terdapat GitHub Actions workflow yang memantau perubahan pada file `api.yml` (OpenAPI Spec).
3. **Bruno Build:** Setiap kali ada perubahan pada spesifikasi API, workflow akan menjalankan Bruno CLI untuk men-generate atau meng-update koleksi secara otomatis.

> "Tidak ada lagi manual update. Jika kontrak API berubah di file YAML, maka koleksi Bruno di tim kami akan ikut berubah setelah proses CI/CD selesai."

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108191821_bruno-api-collection/import-collection.webp" type="image/webp">
    <img 
      src="/notes/20260108191821_bruno-api-collection/import-collection.png" 
      alt="Fitur import Bruno. Support berbagai tipe mulai dari Postman, OpenApi Spec, Insomnia, dll" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Fitur import Bruno. Support berbagai tipe mulai dari Postman, OpenApi Spec, Insomnia, dll</em>
  </p>
</div>

## Kenapa Bruno Terasa "Benar" untuk Developer?

Setelah beberapa waktu bermigrasi, ada beberapa alasan mengapa transisi ini terasa sangat natural:

- **Git-Friendly (Truly):** Karena formatnya teks, saat melakukan _code review_, saya bisa melihat dengan jelas perubahan apa yang terjadi pada sebuah API (misal: perubahan header atau penambahan parameter) langsung melalui _diff_ di GitHub/GitLab.
- **Ringan:** Bruno tidak mencoba menjadi segalanya. Ia fokus menjadi API Client yang cepat tanpa _bloatware_.
- **Kolaborasi Tanpa Biaya Tambahan:** Selama tim kalian menggunakan Git, kalian sudah memiliki kolaborasi "cloud" secara gratis.
- **Scripting yang Fleat:** Dukungan terhadap JavaScript untuk _pre-request_ dan _post-response_ tetap ada, sehingga transisi dari Postman terasa sangat familiar.

## Penutup: Kembali ke Dasar

Perjalanan berpindah ke Bruno mengajarkan saya bahwa terkadang, solusi terbaik bukanlah alat dengan fitur paling banyak, melainkan alat yang paling baik berintegrasi dengan alur kerja kita. Dengan mengembalikan kontrol koleksi API ke tangan Git, saya tidak hanya menghemat biaya operasional, tapi juga memastikan bahwa _knowledge base_ API kami selalu sinkron dengan kode sumber.

Bagi yang ingin mencoba pendekatan Git-friendly dalam mengelola API, Bruno bisa menjadi opsi yang menarik untuk dieksplorasi. Dokumentasi lengkapnya bisa diakses [disini](https://docs.usebruno.com/)
