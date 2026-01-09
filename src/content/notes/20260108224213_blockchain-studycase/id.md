---
title: 'Arsitektur Kepercayaan: Bedah Anatomi dari Genesis Block hingga DeFi'
description: 'Menelusuri teknologi blockchain melalui studi kasus teknis repo studycase saya'
pubDate: 2026-01-08
author: 'Akmal'
tags: ['blockchain', 'web3', 'smart-contract']
---

Halo semua! Masih bersama saya di sini. Kali ini, saya ingin membedah lebih dalam project lama lainnya yang saya buat di GitHub. Repo ini berisikan _studycase_ di bidang Blockchain yang bisa diakses [disini](https://github.com/akmalsyrf/blockchain-studycase).

Dalam artikel ini, kita akan membedah hal-hal teknis yang ada di dalam repositori tersebut. Ini adalah sebuah narasi teknis tentang bagaimana kita memindahkan "rasa percaya" dari institusi manusia ke dalam perhitungan matematika.

Mari kita kupas satu per satu.

### 1. The Consensus Layer: Mengapa Bitcoin "Makan" Listrik?

_(Bedah Sub project: [1-basic-concept](https://github.com/akmalsyrf/blockchain-studycase/tree/main/1-basic-concept))_

Kita mulai dari akarnya dengan **Python**. Di sini, kita tidak pakai _library_ canggih yang langsung jadi. Kita bangun _blockchain_ dari nol supaya paham satu konsep vital: **State Machine Replication**.

Dari implementasi dasar ini, kita belajar kalau blockchain sebenarnya hanyalah sebuah _Linked List_ yang sangat skeptis. Setiap blok punya "sidik jari" (Hash) yang merujuk ke blok sebelumnya. Namun, inti kekuatannya ada pada **Proof of Work (PoW)**.

**Mekanisme Hash dan Linked List:**
Setiap blok mengandung data transaksi, timestamp, dan hash dari blok sebelumnya. Hash function (biasanya SHA-256) mengkonversi semua data ini menjadi string 64 karakter hexadecimal. Secara matematis: $\text{Hash}(\text{Block } N) = \text{SHA256}(\text{Data} \oplus \text{PreviousHash} \oplus \text{Nonce})$. Jika satu bit data di blok A berubah, hash output akan berubah total (avalanche effect), sehingga hash yang tersimpan di blok B menjadi tidak valid. Ini menciptakan **cryptographic chain** yang tidak bisa diputus tanpa mengubah semua blok berikutnya.

- **Immutability:** Ketika data di blok A berubah, Hash-nya berubah. Karena blok B menyimpan Hash blok A, maka seluruh rantai setelahnya akan dianggap tidak valid. Secara teknis, validasi dilakukan dengan membandingkan $H_i = \text{SHA256}(D_i \oplus H_{i-1} \oplus N_i)$ dimana $H_i$ adalah hash blok ke $i$, $D_i$ adalah data blok ke $i$, $H_{i-1}$ adalah hash blok sebelumnya, dan $N_i$ adalah nonce. Jika tidak match, seluruh chain dianggap corrupted.

- **Proof of Work (PoW):** Saya mengimplementasikan mekanisme mining sederhana. Di sini, mesin dipaksa memecahkan teka-teki matematika (mencari nonce) untuk menghasilkan Hash dengan jumlah nol di depan yang spesifik. Secara teknis, algoritma bekerja dengan brute-force: increment nonce dari 0 hingga menemukan hash yang memenuhi `hash.startswith("0000")` (atau lebih banyak nol tergantung difficulty). Probabilitas menemukan hash valid adalah $\frac{1}{16^{n}}$, dimana $n$ adalah jumlah nol target, sehingga rata-rata perlu $16^{n}$ iterasi. Inilah alasan mengapa blockchain sangat sulit dimanipulasi: Anda butuh tenaga komputasi raksasa untuk menulis ulang sejarah.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/chained-collection.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/chained-collection.png" 
      alt="Cara kerja nonce dan hash di mekanisme Proof of Work" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Cara kerja nonce dan hash di mekanisme Proof of Work</em>
  </p>
</div>

Mungkin Anda bertanya, "Kenapa harus ribet _mining_?"
Jawabannya adalah **Teori Permainan (Game Theory)**. Dalam kode `proof_of_work`, kita memaksa komputer bekerja keras mencari _nonce_ yang spesifik. Ini bukan kerja bakti; ini adalah **"Cost of Forgery"** (biaya pemalsuan).

**Game Theory dan Nash Equilibrium:**
Sistem PoW menciptakan **Nash Equilibrium** di mana strategi terbaik untuk semua miner adalah bermain jujur. Secara matematis, jika attacker ingin mengubah blok di posisi $N$, dia harus:

1. Re-mine blok $N$ dengan biaya $C_n$
2. Re-mine blok $N+1$ dengan biaya $C_{n+1}$
3. ... dan seterusnya hingga blok terbaru

Total biaya = $\sum_{i=N}^{B} C_i$ dimana $B$ adalah blok terbaru. Sementara honest miner hanya perlu mine 1 blok baru dengan biaya $C_{\text{new}}$. Karena network terus berkembang, attacker harus mengalahkan seluruh hashrate network (51% attack), yang secara ekonomi tidak feasible. **Expected cost of attack** jauh melebihi **expected reward**, sehingga strategi optimal adalah tetap honest.

Kalau seseorang mau curang dan mengubah data di masa lalu, dia harus melakukan _re-mining_ blok tersebut dan semua blok setelahnya. Kode Python ini membuktikan bahwa keamanan blockchain tidak cuma soal enkripsi, tapi soal **biaya ekonomi**. Kita bikin biaya untuk jadi penjahat jauh lebih mahal daripada keuntungan yang didapat.

### 2. The Logic Layer: Mesin Pintar yang Tak Bisa Disuap

_(Bedah Sub project: [2-simple-contract](https://github.com/akmalsyrf/blockchain-studycase/tree/main/2-simple-contract), [3-e-voting](https://github.com/akmalsyrf/blockchain-studycase/tree/main/3-e-voting-studycase), [6-vending-machine](https://github.com/akmalsyrf/blockchain-studycase/tree/main/6-vending-machine-truffle-studycase))_

Begitu masuk ke ranah **Solidity**, kita mulai bermain dengan **EVM (Ethereum Virtual Machine)**. Di sini, fokusnya bergeser dari sekadar "simpan data" menjadi "jalankan logika otomatis".

- **EVM: Stack-Based Virtual Machine:**
  EVM adalah **quasi-Turing complete** virtual machine yang menggunakan **stack-based architecture** (bukan register-based). Setiap operasi memanipulasi stack dengan operasi PUSH, POP, DUP, SWAP. Kode Solidity dikompilasi menjadi **bytecode** yang dieksekusi secara deterministik oleh ribuan node. Setiap node menjalankan kode yang sama dengan input yang sama, menghasilkan output yang identik - ini adalah **consensus through computation**.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/evm.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/evm.png" 
      alt="Bagaimana Ethereum Virtual Machine (EVM) bekerja" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Bagaimana Ethereum Virtual Machine (EVM) bekerja</em>
  </p>
</div>

- **Deterministic Execution:**
  Studi kasus _Vending Machine_ dan _E-Voting_ menunjukkan apa itu **Deterministic Execution**. Di server tradisional, seorang admin bisa saja masuk ke _database_ dan mengubah angka secara diam-diam. Di blockchain, kode yang sudah di-_deploy_ adalah hukum alam yang tidak bisa diganggu gugat. Secara teknis, setiap transaksi memiliki **transaction hash** yang unik, dan eksekusi kode menghasilkan **state root hash** yang sama di semua node. Jika ada node yang menghasilkan state berbeda, transaksi dianggap invalid dan di-reject oleh network.

* **State vs Local Variables:** Kita belajar kalau menyimpan data di blockchain itu mahal (_Gas fee_). Secara teknis, EVM memiliki 3 area storage:
  - **Storage**: Persistent data di blockchain (20,000 gas untuk write pertama, 5,000 gas untuk update). Data disimpan dalam **32-byte slots** dengan layout yang deterministic berdasarkan urutan deklarasi variable.
  - **Memory**: Temporary data selama eksekusi (3 gas per word untuk write, free untuk read). Direset setelah transaksi selesai.
  - **Stack**: Operand stack untuk EVM opcodes (free, tapi terbatas 1024 items).

  Kenapa mahal? Karena data storage harus dikopi ke ribuan komputer di seluruh dunia secara bersamaan dan disimpan permanen. Setiap SSTORE opcode memicu replikasi data ke seluruh network.

* **Trustlessness:** Dalam kasus _E-Voting_, logika penghitungan suara dikunci rapat. Tidak ada celah untuk manipulasi waktu atau kesalahan manusia. Kita memecat "panitia pusat" dan menggantinya dengan fungsi `vote()`. Secara teknis, setiap vote adalah transaksi yang immutable, dan hasil perhitungan bisa diverifikasi oleh siapa saja dengan menjalankan ulang semua transaksi vote dari genesis block.

Disana saya bereksperimen dengan:

- **State Variables & Visibility**: Bagaimana data disimpan secara permanen di storage Ethereum. Secara teknis, state variables disimpan di storage slots berdasarkan urutan deklarasi. Variable `uint256` memakan 1 slot (32 bytes), `uint128` bisa di-pack 2 per slot. Visibility modifiers (`public`, `private`, `internal`, `external`) mengontrol akses di level compiler - `public` auto-generate getter function, `private` hanya bisa diakses dalam contract yang sama, `external` hanya bisa dipanggil dari luar contract. Namun penting diingat: **semua data di blockchain adalah public** - visibility hanya mengontrol akses melalui Solidity, tapi data tetap bisa dibaca langsung dari storage dengan tools seperti `web3.eth.getStorageAt()`.

- **Modifiers & Access Control**: Memastikan hanya pemilik kontrak yang bisa mengeksekusi fungsi krusial (seperti menarik dana). Modifier adalah code yang di-inject sebelum/setelah function body. Contoh `onlyOwner` modifier menggunakan pattern `require(msg.sender == owner, "Not owner")` yang di-compile menjadi opcode `EQ` dan `REVERT` jika false. Access control di blockchain berbeda dari traditional auth - tidak ada session atau JWT, hanya cryptographic proof bahwa caller memiliki private key untuk address tertentu. Setiap transaksi ditandatangani dengan ECDSA signature yang memverifikasi `msg.sender`.

- **Payable Functions**: Kemampuan kontrak untuk menerima dan mengirim Ether secara otomatis. Ini adalah cikal bakal ekonomi terprogram. Secara teknis, function dengan modifier `payable` bisa menerima Ether melalui `msg.value` (dalam wei). Contract balance disimpan di `address(this).balance` dan bisa di-transfer dengan `transfer()`, `send()`, atau `call()`. Perbedaan utama: `transfer()` dan `send()` memiliki gas limit 2300 (hanya cukup untuk log event), sementara `call()` forward semua gas dan return success boolean. Ini penting untuk reentrancy protection - `transfer()` lebih aman karena membatasi gas yang bisa digunakan oleh recipient.

### 3. The Interoperability Layer: Menembus Tembok Blockchain

_(Bedah Sub project: [7-lottery-chainlink](https://github.com/akmalsyrf/blockchain-studycase/tree/main/7-lottery-chainlink-studycase))_

Ada satu fakta unik: Blockchain itu ibarat komputer di dalam bunker tanpa internet. Dia aman, tapi "buta". Dia tidak tahu harga aset di luar sana atau hasil pertandingan bola. Kenapa? Karena kalau blockchain mengambil data dari internet secara bebas, hasilnya tidak akan seragam bagi semua orang, dan konsensus bisa hancur.

**The Oracle Problem:**
Masalahnya adalah **trust boundary**. Blockchain adalah deterministic system yang membutuhkan data eksternal (off-chain), tapi tidak bisa mempercayai sumber data tunggal. Jika smart contract langsung memanggil API eksternal, node yang berbeda bisa mendapatkan response berbeda (network delay, API down, dll), sehingga consensus hancur. Solusinya membutuhkan **cryptographic proof** bahwa data yang diberikan valid.

Solusinya ada di studi kasus _Lottery Chainlink_ lewat konsep **The Oracle Problem**. Kita menggunakan **Verifiable Random Function (VRF)**.

**VRF: Cryptographic Proof of Randomness:**
VRF adalah fungsi kriptografi yang menghasilkan output random yang bisa diverifikasi. Secara teknis:

1. Chainlink node memiliki **private key** VRF
2. Smart contract memanggil `requestRandomness()` dengan `seed` (biasanya blockhash + user input)
3. Chainlink node menghitung: $r = \text{VRF}(k_{\text{priv}}, s)$ dan $p = \text{Proof}(k_{\text{priv}}, s)$ dimana $k_{\text{priv}}$ adalah private key, $s$ adalah seed, $r$ adalah randomness, dan $p$ adalah proof
4. Smart contract menerima `randomness` dan `proof`
5. Contract memverifikasi: $\text{Verify}(k_{\text{pub}}, s, r, p) = \text{true}$ dimana $k_{\text{pub}}$ adalah public key

Jika proof valid, kita tahu randomness tersebut:

- **Unpredictable**: Tidak bisa diprediksi sebelum di-generate
- **Tamper-proof**: Tidak bisa dimanipulasi oleh Chainlink node sendiri
- **Verifiable**: Siapa saja bisa verify proof tanpa perlu trust Chainlink

Alih-alih mengandalkan angka acak buatan sendiri yang rawan dimanipulasi (seperti `block.timestamp % 100`), _smart contract_ kita "memesan" angka acak dari Chainlink yang datang lengkap dengan bukti matematis bahwa angka itu asli dan tidak diakali.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/vrf.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/vrf.png" 
      alt="Bagaimana Verifiable Random Function (VRF) bekerja" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Bagaimana Verifiable Random Function (VRF) bekerja</em>
  </p>
</div>

### 4. The Asset Layer: Ketika Angka Menjadi Berharga

_(Bedah Sub project: [9-cryptobeetles-nft](https://github.com/akmalsyrf/blockchain-studycase/tree/main/9-cryptobeetles-nft-erc721-studycase), [13-erc20-token](https://github.com/akmalsyrf/blockchain-studycase/tree/main/13-erc-20-token-studycase))_

Di sinilah kita mendefinisikan apa itu "nilai". Dalam standar ERC-20 dan ERC-721 (_CryptoBeetles_), kita belajar bahwa uang digital sebenarnya hanyalah sebuah daftar alamat dan angka (mapping) di dalam kode:
`mapping(address => uint256) balances;`

**Storage Layout dan Mapping:**
Secara teknis, mapping di Solidity tidak menyimpan data secara linear. EVM menggunakan **keccak256 hash** untuk menghitung storage slot: $\text{slot} = \text{keccak256}(\text{abi.encode}(k, s))$ dimana $k$ adalah key dan $s$ adalah mapping slot. Setiap slot adalah 32 bytes. Untuk `mapping(address => uint256)`, alamat di-hash dengan slot mapping untuk mendapatkan lokasi storage yang deterministic. Ini berarti:

- Tidak ada iterasi langsung (tidak bisa loop semua balances)
- Access adalah $O(1)$ dengan hash computation
- Storage terdistribusi secara pseudo-random di $2^{256}$ possible slots

Di repo studycase saya dibahas standar Token ERC (_Ethereum Request for Comment_) berikut:

- **ERC-20 (Fungible):** Seperti uang tunai, 1 token milik Anda sama nilainya dengan 1 token milik orang lain. Standar ini menjadi fondasi untuk stablecoin, governance token, dan sebagian besar token utilitas di ekosistem Ethereum.

- **ERC-721 (Non-Fungible):** Menciptakan keunikan. Token ID #1 punya identitas yang berbeda dengan ID #2. Setiap token memiliki metadata unik yang membuatnya tidak bisa dipertukarkan. Ini adalah standar yang menggerakkan pasar NFT dan digital collectibles.

Selain standar-standar yang di bahas di repo saya, sebenarnya masih banyak standar lain seperti:

- **ERC-1155 (Multi-Token):** Standar yang lebih efisien yang menggabungkan kemampuan ERC-20 dan ERC-721 dalam satu kontrak. Dengan ERC-1155, Anda bisa membuat token fungible (seperti 1000 koin emas) dan non-fungible (seperti pedang langka) dalam satu kontrak yang sama. Ini menghemat gas fee secara signifikan karena hanya perlu satu transaksi untuk mentransfer berbagai jenis token sekaligus.

- **ERC-777 (Advanced Token):** Evolusi dari ERC-20 dengan fitur hooks yang memungkinkan kontrak pintar untuk "bereaksi" ketika token diterima atau dikirim. Ini memungkinkan logika yang lebih kompleks seperti auto-staking atau auto-redirect tanpa memerlukan approval tambahan.

- **ERC-165 (Interface Detection):** Standar yang memungkinkan kontrak untuk mendeklarasikan interface apa saja yang mereka implementasikan. Ini memudahkan aplikasi untuk memeriksa apakah kontrak mendukung fitur tertentu sebelum berinteraksi dengannya.

Poin paling krusial di sini adalah mekanisme **Approval & Allowance**. Sebelum aplikasi lain bisa memakai token Anda, Anda harus memberikan izin secara eksplisit.

**Mekanisme Approval & Allowance:**
Secara teknis, ERC-20 memiliki dua mapping:

```solidity
mapping(address => uint256) balances;
mapping(address => mapping(address => uint256)) allowances;
```

Flow-nya:

1. User memanggil `approve(spender, amount)` → set `allowances[owner][spender] = amount`
2. Spender (misal: DEX contract) memanggil `transferFrom(owner, recipient, amount)`
3. Contract check: `allowances[owner][spender] >= amount` dan `balances[owner] >= amount`
4. Update: `allowances[owner][spender] -= amount` dan `balances[owner] -= amount`, `balances[recipient] += amount`

Ini adalah perubahan besar dari sistem bank lama yang memegang kendali penuh atas saldo kita. Di blockchain, **you are your own bank** - Anda yang mengontrol private key, dan approval adalah cara untuk memberikan limited access tanpa menyerahkan kendali penuh. Setiap standar ERC memiliki cara unik dalam menangani ownership, transfer, dan interoperabilitas, yang mencerminkan evolusi kebutuhan ekosistem blockchain.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/erc.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/erc.png" 
      alt="Standar Ethereum Request for Comment (ERC)" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Standar Ethereum Request for Comment (ERC)</em>
  </p>
</div>

### 5. The Financial Layer: Sihir Flash Loans

_(Bedah Sub project: 14-flash-loan-arbitrage)_

Ini adalah bagian paling menarik. **Flash Loan** adalah konsep yang tidak ada di dunia keuangan biasa. Bayangkan Anda bisa pinjam uang miliaran rupiah tanpa jaminan apa pun, asalkan Anda mengembalikannya dalam hitungan detik di transaksi yang sama.

**Mekanisme Flash Loan:**
Flash loan bekerja dengan **callback pattern** dalam satu transaksi atomik. Secara teknis:

1. User memanggil `flashLoan(amount)` di AAVE
2. AAVE transfer token ke user contract (tanpa collateral)
3. AAVE memanggil callback `executeOperation()` di user contract
4. Di dalam callback, user melakukan arbitrage/swap/apa pun
5. User harus return `amount + fee` sebelum callback selesai
6. Jika return gagal → seluruh transaksi di-revert (atomicity)

Studi kasus AAVE Flash Loan mendemonstrasikan **Atomicity**. Dalam satu blok transaksi, kita bisa melakukan aksi berantai:

1. Pinjam modal besar.
2. Beli murah di satu tempat, jual mahal di tempat lain.
3. Bayar utang plus bunganya.

**Atomicity di EVM:**
EVM menjamin bahwa semua operasi dalam satu transaksi adalah **all-or-nothing**. Jika ada opcode yang throw exception (REVERT, OUT_OF_GAS, dll), seluruh state changes di-rollback. Secara teknis, EVM menggunakan **state trie** yang hanya di-commit ke final state jika transaksi berhasil. Jika gagal, semua SSTORE operations di-discard. Ini berbeda dengan database tradisional yang butuh explicit transaction rollback.

Jika langkah terakhir gagal (misal: untungnya tidak cukup buat bayar utang), maka seluruh rangkaian tadi otomatis dianggap tidak pernah terjadi. Tidak ada risiko rugi bagi pemberi pinjaman. Inilah keajaiban _programmable money_.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/flash-loan.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/flash-loan.png" 
      alt="Cara kerja Flash Loan" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Cara kerja Flash Loan</em>
  </p>
</div>

### 6. The Security Layer: Celah di Balik Kode

_(Bedah Sub project: 10-reentrancy-attacks)_

Lewat studi kasus _Reentrancy Attack_, kita belajar cara berpikir seorang peretas. Serangan ini biasanya terjadi karena program mengirim uang sebelum sempat mencatat bahwa uang tersebut sudah dikirim.

**Mekanisme Reentrancy Attack:**
Secara teknis, reentrancy terjadi karena **external call** bisa memanggil kembali fungsi yang sama sebelum state di-update. Contoh vulnerable code:

```solidity
function withdraw() {
    require(balances[msg.sender] > 0);
    msg.sender.call{value: balances[msg.sender]}(""); // INTERACTION
    balances[msg.sender] = 0; // EFFECT (terlambat!)
}
```

Attacker contract:

```solidity
receive() external payable {
    if (victim.balance > 0) {
        victim.withdraw(); // Re-enter sebelum balances di-update
    }
}
```

**Call Stack dan Execution Context:**
EVM memungkinkan **nested calls** - satu contract bisa memanggil contract lain, yang bisa memanggil contract lain lagi. Setiap call menambah **call depth** (max 1024). Reentrancy memanfaatkan fakta bahwa state belum di-update saat external call terjadi, sehingga attacker bisa "mengulang" operasi dengan state yang sama.

**Checks-Effects-Interactions Pattern:**
Prinsip ini memastikan urutan eksekusi yang aman:

1. **Checks**: Validasi semua kondisi (require, assert)
2. **Effects**: Update state variables (balances, flags, dll)
3. **Interactions**: External calls (transfer, call, dll)

Code yang aman:

```solidity
function withdraw() {
    require(balances[msg.sender] > 0); // CHECK
    uint256 amount = balances[msg.sender];
    balances[msg.sender] = 0; // EFFECT (update dulu!)
    msg.sender.call{value: amount}(""); // INTERACTION (baru transfer)
}
```

Ibaratnya seperti menarik uang di ATM yang rusak, di mana saldonya tidak berkurang meski uang sudah keluar, sehingga Anda bisa menariknya terus-menerus sampai mesinnya kosong. Ini mengajarkan kita prinsip utama keamanan Web3: **Checks-Effects-Interactions**. Validasi dulu, perbarui catatan, baru kirim uangnya.

---

### Penutup

Blockchain adalah sebuah perjalanan transisi. Dari struktur data sederhana, menuju kontrak pintar yang demokratis, hingga instrumen finansial yang sangat kompleks.

Bagi kita para engineer, memahami ini bukan cuma soal belajar bahasa pemrograman baru. Ini soal memahami paradigma baru di mana kode bukan lagi sekadar pelayan aplikasi, melainkan **hakim dan eksekutor** yang jujur dan tidak memihak.

Selamat menjelajahi Web3!
