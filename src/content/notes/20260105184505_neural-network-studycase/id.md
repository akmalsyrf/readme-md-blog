---
title: 'Deep Dive: Bagaimana Cara Membangun Neural Network dari Nol'
description: 'Membongkar cara kerja Jaringan Saraf Tiruan melalui paradigma Machine Learning, dari kalkulus di balik Backpropagation hingga simulasi manual.'
pubDate: 2026-01-05
author: 'Akmal'
tags: ['python', 'neural-network', 'machine-learning', 'jupyter-notebook', 'math']
---

# Deep Dive: Bagaimana Cara Membangun Neural Network dari Nol

Halo semua! Masih bersama saya di sini. Kali ini, saya ingin membedah lebih dalam proyek lama yang saya buat di GitHub. Proyek ini bukan sekadar _copy-paste_ kode, melainkan usaha untuk memahami setiap baris logika di balik **Neural Network**.

Inspirasi utamanya datang dari playlist [Machine Learning 101 milik Bapak Ridwan Ilyas](https://www.youtube.com/playlist?list=PLo6nZTcpSz2p5oKKkg6ZWHx4Pw7ToYVtD). Beliau mengajarkan sesuatu yang fundamental: **jangan jadi pengguna library yang buta, pahamilah matematikanya.**

<div class="my-8 flex justify-center">
  <div class="relative w-full max-w-3xl" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe
      src="https://www.youtube.com/embed/crIQS9x3QnE"
      title="Machine Learning 101 Ridwan Ilyas"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
</div>

---

## 1. Pergeseran Paradigma: Data + Jawaban = Aturan

Hal pertama yang saya pelajari dari playlist tersebut adalah perbedaan mendasar antara _traditional programming_ dan _Machine Learning_.

- **Pemrograman Tradisional:** Kita memasukkan **Data** dan **Aturan (Rule)** untuk mendapatkan **Jawaban**.
- **Machine Learning:** Kita memberikan **Data** dan **Jawaban**, lalu membiarkan mesin mencari **Aturan (Model)** sendiri.

Inilah yang saya coba pegang ketika melanjutkan _studycase_ dan memahami konteks dari playlist tersebut.

---

## 2. Anatomi Jaringan: Lebih dari Sekadar Titik dan Garis

Dalam repo saya, kita merancang struktur utama yang terdiri dari:

- **Input Layer:** Gerbang awal data.
- **Hidden Layer:** Di sinilah abstraksi terjadi. Semakin banyak layer, semakin kompleks pola yang bisa dikenali.
- **Weights (Bobot) & Bias:** Inilah "ingatan" dari model. Saya melakukan inisialisasi bobot secara acak. Mengapa? Jika semua bobot bernilai 0, semua neuron akan menghasilkan output yang sama, dan model tidak akan pernah belajar hal yang unik (_symmetry problem_).

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260105184505_neural-network-studycase/3-multilayer-perceptron.webp" type="image/webp">
    <img 
      src="/notes/20260105184505_neural-network-studycase/3-multilayer-perceptron.png" 
      alt="MLP" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
</div>

Setiap neuron dalam kode saya melakukan operasi linear sederhana sebelum masuk ke tahap aktivasi:

$$z = \sum_{i=1}^{n} (w_i \cdot x_i) + b$$

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260105184505_neural-network-studycase/2-perceptron-learning.webp" type="image/webp">
    <img 
      src="/notes/20260105184505_neural-network-studycase/2-perceptron-learning.png" 
      alt="MLP" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
</div>

---

## 3. Fungsi Aktivasi: Mengatur "Percikan" Neuron

Kenapa kita butuh fungsi aktivasi? Tanpa itu, ribuan layer saraf sekalipun hanya akan menjadi operasi linear raksasa. Saya menggunakan **Sigmoid Function** dalam studi kasus ini:

$$S(z) = \frac{1}{1 + e^{-z}}$$

Fungsi ini mengubah angka berapapun menjadi rentang **0 hingga 1**. Di playlist Pak Ridwan, kita juga belajar fungsi lain seperti **Step Function** (untuk logika sederhana) atau **ReLU**. Namun, Sigmoid tetap menjadi pilihan klasik untuk memahami konsep probabilitas klasifikasi.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260105184505_neural-network-studycase/1-fungsi-aktifasi.webp" type="image/webp">
    <img 
      src="/notes/20260105184505_neural-network-studycase/1-fungsi-aktifasi.png" 
      alt="MLP" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
</div>

---

## 4. Jantung Model: Backpropagation dan Epochs

Bagian tersulit sekaligus paling menarik adalah proses _training_. Dalam kode saya, ini bukan sekadar _looping_, tapi sebuah proses koreksi diri yang presisi:

### A. Forward Propagation (Proses Menebak)

Data mengalir dari input ke output. Model memberikan tebakan. Di awal, tebakannya pasti berantakan karena bobotnya masih acak.

### B. Menghitung Error (Loss Function)

Saya menggunakan **Mean Squared Error (MSE)** untuk mengukur seberapa jauh melesetnya tebakan tersebut:

$$MSE = \frac{1}{n} \sum_{i=1}^{n} (y_{pred} - y_{actual})^2$$

### C. Backpropagation (Proses Belajar)

Inilah poin penting yang dibahas detail di playlist "Machine Learning 101". Kita tidak hanya tahu kalau model salah, tapi kita tahu **siapa yang harus disalahkan**. Melalui teknik kalkulus (turunan), kita menghitung _gradient_ untuk memperbarui bobot:

- **Optimizer:** Saya menggunakan logika _Stochastic Gradient Descent_ (SGD).
- **Learning Rate:** Saya menambahkan parameter ini untuk mengatur seberapa drastis model berubah setiap kali ia salah.
- **Epochs:** Proses ini diulang ratusan hingga ribuan kali (epoch) sampai nilai _error_ mencapai titik terendah.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260105184505_neural-network-studycase/4-mlp-feedforward.webp" type="image/webp">
    <img 
      src="/notes/20260105184505_neural-network-studycase/4-mlp-feedforward.png" 
      alt="MLP" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
</div>

---

## 5. Simulasi Excel ke Python

Salah satu "aha! moment" saya adalah saat melihat simulasi perhitungan manual di Excel dalam playlist tersebut, tepatnya di [video ini](https://youtu.be/iFcgzZOqYeU?si=BAEoF494Q5-e-uvK). Melihat angka-angka bobot berubah di sel Excel membuat saya sadar bahwa **AI itu bukan sihir, AI itu statistik yang bekerja keras.** Saat saya memindahkan logika tersebut ke Python menggunakan _Numpy_, semuanya menjadi jauh lebih efisien.

---

## 6. Apa yang Saya Pelajari sebagai Engineer?

Setelah menilik ulang kembali proyek `neural-network-studycase` ini, ada tiga pelajaran berharga:

1. **Garbage In, Garbage Out:** Sebagus apa pun _backpropagation_ kita, kalau datanya kotor (tidak dinormalisasi), model akan bingung.
2. **Debugging AI itu Beda:** Debugging kode biasa itu mencari _logic error_. Debugging Neural Network itu mencari tahu kenapa model _stuck_ di akurasi 50% (apakah _learning rate_ terlalu besar? atau fungsi aktivasi tidak cocok?).
3. **Fondasi untuk CNN:** Memahami _multilayer perceptron_ dari nol adalah bekal wajib sebelum saya melangkah ke arsitektur yang lebih kompleks seperti **Convolutional Neural Networks (CNN)**

Secara keseluruhan, playlist tersebut sangat cocok untuk pemula yang ingin mengetahui bagaimana unit terkecil dalam machine learning sebenarnya bekerja.

---

## Penutup & Langkah Selanjutnya

Membangun sesuatu dari nol memberikan kepuasan yang tidak bisa diberikan oleh library instan. Kamu jadi tahu apa yang terjadi saat memanggil fungsi `.fit()` di masa depan.

Jika teman-teman ingin melihat kotornya tangan saya dengan perhitungan manual ini, silakan mampir ke:
👉 [GitHub: akmalsyrf/neural-network-studycase](https://github.com/akmalsyrf/neural-network-studycase)

**Jangan lupa beri star atau fork jika kalian ingin bereksperimen juga!**
