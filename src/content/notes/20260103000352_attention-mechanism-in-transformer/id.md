---
title: 'Mekanisme Attention di Transformer'
description: 'Penjelasan tentang bagaimana mekanisme attention bekerja dalam arsitektur Transformer dan mengapa ini menjadi revolusi dalam deep learning.'
pubDate: 2026-01-03
author: 'Akmal'
tags: ['machine-learning', 'deep-learning', 'transformer', 'ai', 'nlp']
---

# Mekanisme Attention di Transformer

Mekanisme **attention** adalah jantung dari arsitektur Transformer, yang menjadi fondasi untuk model-model AI modern seperti GPT, BERT, dan banyak model bahasa besar lainnya. Memahami attention adalah kunci untuk memahami bagaimana AI modern "berpikir" dan memproses informasi.

## Apa itu Attention?

Attention, dalam konteks machine learning, adalah mekanisme yang memungkinkan model untuk **"memperhatikan"** bagian-bagian tertentu dari input ketika memproses setiap bagian output.

Bayangkan Anda membaca kalimat: "The cat sat on the mat because it was tired." Ketika Anda membaca kata "it", otak Anda secara otomatis menghubungkannya dengan "cat" di awal kalimat. Attention melakukan hal yang sama untuk model AI.

## Masalah yang Dipecahkan Attention

### Masalah dengan RNN/LSTM

Sebelum Transformer, model bahasa menggunakan RNN (Recurrent Neural Network) atau LSTM (Long Short-Term Memory):

**Masalah:**

- **Sequential processing**: Harus memproses kata demi kata secara berurutan
- **Vanishing gradient**: Informasi dari awal kalimat sulit dipertahankan sampai akhir
- **Slow training**: Tidak bisa diparalelkan dengan baik
- **Limited context**: Sulit menangkap dependensi jarak jauh

### Solusi: Self-Attention

Attention memungkinkan model untuk:

- **Melihat semua posisi sekaligus**: Tidak perlu memproses secara berurutan
- **Menangkap dependensi jarak jauh**: Kata di awal bisa langsung "memperhatikan" kata di akhir
- **Paralel processing**: Semua posisi bisa diproses bersamaan
- **Interpretability**: Kita bisa melihat bagian mana yang "diperhatikan" model

## Bagaimana Attention Bekerja?

### 1. Query, Key, dan Value

Attention menggunakan tiga komponen utama:

- **Query (Q)**: "Apa yang sedang saya cari?"
- **Key (K)**: "Apa yang tersedia di setiap posisi?"
- **Value (V)**: "Apa isi informasi di setiap posisi?"

Setiap kata dalam kalimat memiliki Q, K, dan V yang dihasilkan dari embedding-nya.

### 2. Menghitung Similarity

Model menghitung seberapa "mirip" Query dengan setiap Key menggunakan **dot product**:

```
Attention Score = Q · K^T
```

Score yang tinggi berarti Query "cocok" dengan Key tersebut.

### 3. Softmax Normalization

Score-score tersebut dinormalisasi menggunakan softmax untuk mendapatkan **attention weights** (bobot perhatian):

```
Attention Weights = softmax(Q · K^T / √d_k)
```

Pembagian dengan √d_k (akar dari dimensi key) disebut **scaling** dan mencegah gradient menjadi terlalu kecil.

### 4. Weighted Sum

Akhirnya, Value di setiap posisi dikalikan dengan attention weight-nya dan dijumlahkan:

```
Output = Attention Weights · V
```

## Multi-Head Attention

Transformer menggunakan **Multi-Head Attention**, yang berarti attention dihitung beberapa kali secara paralel dengan parameter yang berbeda. Setiap "head" belajar menangkap jenis hubungan yang berbeda:

- Head 1 mungkin fokus pada hubungan subjek-objek
- Head 2 mungkin fokus pada hubungan kata sifat-kata benda
- Head 3 mungkin fokus pada hubungan temporal
- Dan seterusnya...

Hasil dari semua head kemudian digabungkan (concatenated) dan diproyeksikan lagi.

## Self-Attention vs Cross-Attention

### Self-Attention

Dalam self-attention, Query, Key, dan Value semuanya berasal dari **sequence yang sama**. Ini memungkinkan setiap posisi untuk "memperhatikan" semua posisi lain dalam sequence yang sama.

Contoh: Dalam kalimat "The cat sat on the mat", kata "it" bisa memperhatikan "cat" untuk memahami referensi.

### Cross-Attention

Dalam cross-attention, Query berasal dari satu sequence, sementara Key dan Value berasal dari **sequence yang berbeda**. Ini berguna untuk tugas seperti translation atau question-answering.

Contoh: Dalam translation, Query dari bahasa target memperhatikan Key dan Value dari bahasa sumber.

## Arsitektur Transformer Lengkap

Transformer tidak hanya attention. Arsitektur lengkapnya terdiri dari:

1. **Input Embedding**: Mengubah kata menjadi vektor
2. **Positional Encoding**: Menambahkan informasi posisi (karena attention tidak memiliki urutan bawaan)
3. **Multi-Head Self-Attention**: Layer attention utama
4. **Feed-Forward Network**: Jaringan neural sederhana untuk transformasi non-linear
5. **Residual Connection**: Menambahkan input ke output (skip connection)
6. **Layer Normalization**: Normalisasi untuk stabilitas training
7. **Stacking**: Beberapa layer ini ditumpuk untuk membentuk encoder/decoder

## Mengapa Attention Begitu Powerful?

### 1. Interpretability

Kita bisa memvisualisasikan attention weights untuk melihat bagian mana yang "diperhatikan" model. Ini membantu kita memahami bagaimana model membuat keputusan.

### 2. Parallelization

Tidak seperti RNN yang harus sequential, attention bisa diproses secara paralel, membuat training jauh lebih cepat.

### 3. Long-Range Dependencies

Attention bisa langsung menghubungkan posisi yang jauh, tidak seperti RNN yang harus "mengalirkan" informasi melalui banyak langkah.

### 4. Flexibility

Attention bisa digunakan untuk berbagai jenis data: teks, gambar, audio, dll.

## Aplikasi Attention

Attention telah digunakan dalam:

- **Language Models**: GPT, BERT, T5
- **Machine Translation**: Google Translate
- **Image Processing**: Vision Transformer (ViT)
- **Speech Recognition**: Whisper
- **Code Generation**: GitHub Copilot, Codex

## Kesimpulan

Mekanisme attention adalah terobosan fundamental dalam deep learning. Ini memungkinkan model untuk:

- Memproses informasi secara paralel
- Menangkap dependensi jarak jauh
- Menjadi lebih interpretable
- Mencapai performa yang jauh lebih baik

Transformer dan attention telah mengubah lanskap AI modern, dan pemahaman tentang mekanisme ini penting untuk siapa pun yang ingin memahami atau bekerja dengan AI modern.

---

**Catatan**: Paper asli "Attention is All You Need" (Vaswani et al., 2017) adalah bacaan wajib untuk pemahaman yang lebih mendalam tentang Transformer.
