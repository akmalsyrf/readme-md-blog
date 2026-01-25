---
title: 'Sistem Operasi: Cheatsheet Komprehensif'
description: 'Panduan lengkap sistem operasi dari konsep dasar, manajemen proses, memori, file system, hingga keamanan dan virtualisasi'
pubDate: 2026-01-24
author: 'Akmal'
category: 'Ilmu Komputer'
tags: ['operating-system', 'computer-science', 'process', 'memory', 'kernel']
---

Cheatsheet lengkap untuk memahami Sistem Operasi (Operating System) dari konsep fundamental hingga implementasi modern.

## 1. Pengantar Sistem Operasi

### Definisi Sistem Operasi

**Sistem Operasi (OS)** adalah perangkat lunak sistem yang bertindak sebagai perantara antara pengguna dan perangkat keras komputer. OS mengelola sumber daya hardware dan menyediakan layanan untuk program aplikasi.

**Fungsi Utama:**

- **Resource Manager**: Mengelola CPU, memori, storage, dan I/O devices
- **Extended Machine**: Menyediakan abstraksi untuk menyembunyikan kompleksitas hardware
- **Control Program**: Mengontrol eksekusi program dan mencegah error

### Arsitektur Sistem Operasi

```
┌─────────────────────────────────────────────────-┐
│                  User Programs                   │
├─────────────────────────────────────────────────-┤
│              System Libraries (libc)             │
├─────────────────────────────────────────────────-┤
│    System Call Interface (API ke Kernel)         │
├─────────────────────────────────────────────────-┤
│                    KERNEL                        │
│  ┌───────────┬───────────┬───────────────────┐   │
│  │  Process  │   Memory  │   File System     │   │
│  │  Manager  │   Manager │   Manager         │   │
│  ├───────────┼───────────┼───────────────────┤   │
│  │  Device   │  Network  │   Security        │   │
│  │  Drivers  │   Stack   │   Module          │   │
│  └───────────┴───────────┴───────────────────┘   │
├─────────────────────────────────────────────────-┤
│               Hardware (CPU, RAM, Disk)          │
└─────────────────────────────────────────────────-┘
```

### Tipe Kernel

| Tipe            | Deskripsi                                       | Contoh            | Kelebihan                      | Kekurangan                          |
| --------------- | ----------------------------------------------- | ----------------- | ------------------------------ | ----------------------------------- |
| **Monolithic**  | Semua layanan OS berjalan di kernel space       | Linux, Unix       | Performa tinggi                | Kurang modular, crash = sistem down |
| **Microkernel** | Kernel minimal, layanan di user space           | Minix, QNX, L4    | Stabil, modular                | Overhead IPC                        |
| **Hybrid**      | Kombinasi monolithic + microkernel              | Windows NT, macOS | Balance performa & modularitas | Kompleksitas                        |
| **Exokernel**   | Kernel sangat minimal, aplikasi kelola hardware | MIT Exokernel     | Fleksibel, efisien             | Sulit diprogram                     |

### Mode Eksekusi

**Dual Mode Operation:**

```
┌────────────────────────────────────────────┐
│           USER MODE (Ring 3)               │
│  • Aplikasi user berjalan di sini          │
│  • Akses hardware terbatas                 │
│  • Tidak bisa eksekusi privileged instr.   │
└──────────────────┬─────────────────────────┘
                   │ System Call (trap)
                   ▼
┌────────────────────────────────────────────┐
│          KERNEL MODE (Ring 0)              │
│  • Kernel dan driver berjalan di sini      │
│  • Akses penuh ke hardware                 │
│  • Bisa eksekusi semua instruksi           │
└────────────────────────────────────────────┘
```

**Privileged Instructions** (hanya di kernel mode):

- I/O instructions
- Memory management (page table manipulation)
- Interrupt management
- Halt instruction

### System Calls

**System Call** adalah mekanisme yang memungkinkan program user mode untuk meminta layanan dari kernel. System call adalah satu-satunya cara legal untuk aplikasi mengakses sumber daya sistem yang dilindungi.

**Mengapa System Call Diperlukan?**

Aplikasi user tidak bisa langsung mengakses hardware karena:

- **Keamanan**: Mencegah aplikasi merusak sistem atau mengakses data aplikasi lain
- **Abstraksi**: Menyembunyikan kompleksitas hardware dari programmer
- **Portabilitas**: Aplikasi bisa berjalan di hardware berbeda tanpa modifikasi

**Mekanisme System Call:**

```
┌─────────────────────────────────────────────┐
│  User Program                               │
│  printf("Hello");                           │
│       │                                     │
│       ▼                                     │
│  C Library (libc)                           │
│  write(fd, buf, size)                       │
│       │                                     │
│       ▼                                     │
│  System Call Wrapper                        │
│  mov $1, %rax    # syscall number           │
│  mov $fd, %rdi   # arg1                     │
│  mov $buf, %rsi  # arg2                     │
│  mov $size, %rdx # arg3                     │
│  syscall        # interrupt ke kernel       │
│       │                                     │
│       ▼                                     │
└───────┼─────────────────────────────────────┘
        │ Trap/Interrupt
        ▼
┌─────────────────────────────────────────────┐
│  Kernel Mode                                │
│  System Call Handler                        │
│  sys_write() {                              │
│    // validasi parameter                    │
│    // eksekusi operasi I/O                  │
│    // return hasil                          │
│  }                                          │
│       │                                     │
│       ▼                                     │
│  Return ke User Mode                        │
└─────────────────────────────────────────────┘
```

**Langkah-langkah System Call:**

1. **User program** memanggil library function (misal: `write()`)
2. **Library wrapper** menyiapkan parameter dan system call number
3. **Trap instruction** (`syscall`, `int 0x80`, `SVC`) memicu mode switch
4. **Kernel** menyimpan context user (registers, stack pointer)
5. **System call handler** mengeksekusi fungsi kernel sesuai nomor
6. **Kernel** mengembalikan hasil ke user space
7. **Context switch** kembali ke user mode dengan hasil

**System Call Number:**

Setiap system call memiliki nomor unik yang digunakan untuk mengidentifikasi layanan yang diminta:

```c
// Linux x86-64 system call numbers
#define __NR_read    0
#define __NR_write   1
#define __NR_open    2
#define __NR_close   3
#define __NR_fork   57
#define __NR_execve 59
#define __NR_exit   60
```

**Kategori System Calls:**

| Kategori                    | Contoh                                             | Deskripsi                                    |
| --------------------------- | -------------------------------------------------- | -------------------------------------------- |
| **Process Control**         | `fork()`, `exec()`, `exit()`, `wait()`             | Membuat, menghentikan, dan mengontrol proses |
| **File Management**         | `open()`, `read()`, `write()`, `close()`, `stat()` | Operasi file dan direktori                   |
| **Device Management**       | `ioctl()`, `read()`, `write()`                     | Mengakses dan mengontrol device              |
| **Information Maintenance** | `getpid()`, `gettimeofday()`, `sysinfo()`          | Mendapatkan informasi sistem                 |
| **Communication**           | `pipe()`, `shmget()`, `msgget()`, `socket()`       | IPC dan komunikasi jaringan                  |
| **Protection**              | `chmod()`, `chown()`, `setuid()`                   | Kontrol akses dan keamanan                   |

**Contoh System Call di Linux:**

```c
#include <unistd.h>
#include <sys/syscall.h>

// Direct system call (tidak direkomendasikan)
long result = syscall(SYS_write, STDOUT_FILENO, "Hello\n", 6);

// Via library wrapper (direkomendasikan)
write(STDOUT_FILENO, "Hello\n", 6);
```

**System Call Interface di Berbagai OS:**

| OS               | Instruction | Calling Convention         | Register untuk syscall number |
| ---------------- | ----------- | -------------------------- | ----------------------------- |
| **Linux x86-64** | `syscall`   | RDI, RSI, RDX, R10, R8, R9 | RAX                           |
| **Linux x86-32** | `int 0x80`  | Stack (EBX, ECX, EDX, ...) | EAX                           |
| **Windows x64**  | `syscall`   | RCX, RDX, R8, R9, stack    | RAX                           |
| **macOS/BSD**    | `syscall`   | RDI, RSI, RDX, R10, R8, R9 | RAX                           |
| **ARM64**        | `svc #0`    | X0-X7                      | X8                            |

**Error Handling:**

System call mengembalikan nilai negatif atau -1 jika terjadi error, dan `errno` di-set dengan kode error:

```c
ssize_t bytes = write(fd, buffer, size);
if (bytes == -1) {
    // Error occurred
    perror("write");  // prints: write: Bad file descriptor
    // atau
    fprintf(stderr, "Error: %s\n", strerror(errno));
}
```

**Overhead System Call:**

System call memiliki overhead karena:

- **Context switch** (user ↔ kernel mode)
- **Parameter validation** di kernel
- **Security checks** (permissions, capabilities)
- **Interrupt handling**

**Optimasi:**

- **VDSO (Virtual Dynamic Shared Object)**: System call tertentu (seperti `gettimeofday()`) diimplementasikan di user space untuk menghindari context switch
- **Batching**: Menggabungkan multiple system calls menjadi satu
- **Async I/O**: Menggunakan `epoll`, `kqueue`, atau `io_uring` untuk mengurangi blocking

**System Call vs Library Function:**

| System Call                   | Library Function               |
| ----------------------------- | ------------------------------ |
| Interface langsung ke kernel  | Wrapper di atas system call    |
| Harus melalui trap            | Bisa di user space             |
| Lebih lambat (context switch) | Lebih cepat (no trap)          |
| Contoh: `read()`, `write()`   | Contoh: `printf()`, `strlen()` |

**Contoh: Perjalanan `printf()` ke System Call**

```c
printf("Hello World\n");
    │
    ▼
// Di libc: printf() memformat string
fprintf(stdout, "Hello World\n");
    │
    ▼
// Di libc: write() adalah wrapper
write(STDOUT_FILENO, "Hello World\n", 12);
    │
    ▼
// Assembly: setup system call
mov $1, %rax        // __NR_write = 1
mov $1, %rdi        // fd = STDOUT_FILENO
mov $string, %rsi   // buffer address
mov $12, %rdx       // size
syscall             // Trap ke kernel
    │
    ▼
// Kernel: sys_write()
sys_write(fd, buf, count) {
    // Validasi fd, buffer, permissions
    // Copy data dari user space ke kernel
    // Panggil device driver
    // Return jumlah bytes written
}
```

**Security Implications:**

- **Sandboxing**: Membatasi system calls yang bisa dipanggil (seccomp, AppArmor, SELinux)
- **Capabilities**: Memberikan privilege tanpa full root
- **System call filtering**: Memblokir system calls berbahaya (seperti `ptrace`, `mount`)

---

## 2. Manajemen Proses

### Konsep Proses

**Proses** adalah program yang sedang dieksekusi. Proses adalah unit dasar dari eksekusi dalam sistem operasi.

**Process vs Program:**
| Program | Proses |
|---------|--------|
| Passive entity (file di disk) | Active entity (running) |
| Tidak punya state | Punya state (running, waiting, etc.) |
| Tidak punya resources | Memiliki resources (memory, files) |

### Process Control Block (PCB)

PCB menyimpan semua informasi tentang proses:

```
┌─────────────────────────────────────┐
│      PROCESS CONTROL BLOCK          │
├─────────────────────────────────────┤
│ Process ID (PID)                    │
│ Process State                       │
│ Program Counter                     │
│ CPU Registers                       │
│ CPU Scheduling Info (priority)      │
│ Memory Management Info              │
│ Accounting Info (CPU time used)     │
│ I/O Status Info                     │
│ List of Open Files                  │
└─────────────────────────────────────┘
```

### Process State Diagram

<div class="process-state-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .process-state-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .process-state-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .process-state-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .process-state-viz h4 {
          color: #f3f4f6 !important;
        }
        .ps-svg-container {
          width: 100%;
          height: 280px;
        }
        .ps-svg {
          width: 100%;
          height: 100%;
        }
        .ps-state {
          stroke-width: 2;
        }
        .ps-new { fill: #9b59b6; }
        .ps-ready { fill: #f39c12; }
        .ps-running { fill: #27ae60; }
        .ps-waiting { fill: #3498db; }
        .ps-terminated { fill: #e74c3c; }
        html.dark .ps-new { fill: #a855f7; }
        html.dark .ps-ready { fill: #f59e0b; }
        html.dark .ps-running { fill: #22c55e; }
        html.dark .ps-waiting { fill: #3b82f6; }
        html.dark .ps-terminated { fill: #ef4444; }
        .ps-label {
          font-size: 0.7rem;
          font-weight: 600;
          fill: white;
          text-anchor: middle;
        }
        .ps-arrow {
          fill: none;
          stroke: #666;
          stroke-width: 2;
          marker-end: url(#psArrowhead);
        }
        html.dark .ps-arrow {
          stroke: #9ca3af;
        }
        .ps-transition {
          font-size: 0.55rem;
          fill: #555;
        }
        html.dark .ps-transition {
          fill: #d1d5db;
        }
        .ps-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .ps-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .ps-legend-item {
          color: #d1d5db;
        }
        .ps-legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        @media (min-width: 640px) {
          .process-state-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
          .ps-svg-container {
            height: 300px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Diagram State Proses (Process State Diagram)</h4>

<div class="ps-svg-container">
    <svg class="ps-svg" viewBox="0 0 450 280" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="psArrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
        </marker>
      </defs>
      <rect x="180" y="10" width="90" height="40" rx="8" class="ps-state ps-new"/>
      <text x="225" y="35" class="ps-label">NEW</text>
      <rect x="50" y="100" width="90" height="40" rx="8" class="ps-state ps-ready"/>
      <text x="95" y="125" class="ps-label">READY</text>
      <rect x="250" y="100" width="90" height="40" rx="8" class="ps-state ps-running"/>
      <text x="295" y="125" class="ps-label">RUNNING</text>
      <rect x="50" y="200" width="90" height="40" rx="8" class="ps-state ps-waiting"/>
      <text x="95" y="225" class="ps-label">WAITING</text>
      <rect x="310" y="200" width="100" height="40" rx="8" class="ps-state ps-terminated"/>
      <text x="360" y="225" class="ps-label">TERMINATED</text>
      <path d="M 180 40 Q 120 60, 110 100" class="ps-arrow"/>
      <text x="130" y="65" class="ps-transition">admit</text>
      <path d="M 140 110 L 248 110" class="ps-arrow"/>
      <text x="195" y="100" class="ps-transition">dispatch</text>
      <path d="M 250 130 L 142 130" class="ps-arrow"/>
      <text x="195" y="150" class="ps-transition">preempt/timeout</text>
      <path d="M 270 140 Q 180 170, 130 200" class="ps-arrow"/>
      <text x="170" y="175" class="ps-transition">I/O wait</text>
      <path d="M 95 200 L 95 142" class="ps-arrow"/>
      <text x="55" y="175" class="ps-transition">I/O done</text>
      <path d="M 340 140 Q 360 170, 360 198" class="ps-arrow"/>
      <text x="375" y="170" class="ps-transition">exit</text>
    </svg>
  </div>
  
  <div class="ps-legend">
    <div class="ps-legend-item">
      <div class="ps-legend-dot" style="background: #9b59b6;"></div> New (Created)
    </div>
    <div class="ps-legend-item">
      <div class="ps-legend-dot" style="background: #f39c12;"></div> Ready (Waiting for CPU)
    </div>
    <div class="ps-legend-item">
      <div class="ps-legend-dot" style="background: #27ae60;"></div> Running (Executing)
    </div>
    <div class="ps-legend-item">
      <div class="ps-legend-dot" style="background: #3498db;"></div> Waiting (Blocked)
    </div>
    <div class="ps-legend-item">
      <div class="ps-legend-dot" style="background: #e74c3c;"></div> Terminated (Exit)
    </div>
  </div>
</div>

**State Transitions:**

- **New → Ready**: Proses diadmit ke antrian ready
- **Ready → Running**: Scheduler memilih proses (dispatch)
- **Running → Ready**: Preemption (time slice habis)
- **Running → Waiting**: Menunggu I/O atau event
- **Waiting → Ready**: I/O selesai
- **Running → Terminated**: Proses selesai atau kill

### Context Switch

**Context Switch** adalah proses menyimpan state dari proses yang sedang berjalan dan memuat state proses lain.

<div class="ctx-switch-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .ctx-switch-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .ctx-switch-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .ctx-switch-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .ctx-switch-viz h4 {
          color: #f3f4f6 !important;
        }
        .cs-svg-container {
          width: 100%;
          height: 260px;
        }
        .cs-svg {
          width: 100%;
          height: 100%;
        }
        .cs-process-bar {
          stroke-width: 0;
        }
        .cs-p0 { fill: #3498db; }
        .cs-p1 { fill: #e74c3c; }
        .cs-kernel { fill: #9b59b6; }
        .cs-idle { fill: #ecf0f1; stroke: #bdc3c7; stroke-width: 1; }
        html.dark .cs-idle { fill: #374151; stroke: #4b5563; }
        .cs-label {
          font-size: 0.65rem;
          fill: #2c3e50;
          font-weight: 600;
        }
        html.dark .cs-label {
          fill: #f3f4f6;
        }
        .cs-action {
          font-size: 0.55rem;
          fill: #666;
        }
        html.dark .cs-action {
          fill: #9ca3af;
        }
        .cs-arrow {
          stroke: #666;
          stroke-width: 1.5;
          fill: none;
          marker-end: url(#csArrow);
        }
        html.dark .cs-arrow {
          stroke: #9ca3af;
        }
        .cs-time-label {
          font-size: 0.55rem;
          fill: #999;
        }
        html.dark .cs-time-label {
          fill: #6b7280;
        }
        .cs-overhead {
          fill: #f39c12;
          opacity: 0.3;
        }
        .cs-explanation {
          margin-top: 10px;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #495057;
          text-align: center;
        }
        html.dark .cs-explanation {
          background: #111827;
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .ctx-switch-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
          .cs-svg-container {
            height: 280px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Context Switch: Proses P0 → P1</h4>

<div class="cs-svg-container">
    <svg class="cs-svg" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="csArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#666"/>
        </marker>
      </defs>
      <line x1="80" y1="30" x2="80" y2="230" stroke="#ddd" stroke-width="1"/>
      <line x1="200" y1="30" x2="200" y2="230" stroke="#ddd" stroke-width="1"/>
      <line x1="320" y1="30" x2="320" y2="230" stroke="#ddd" stroke-width="1"/>
      <text x="80" y="20" class="cs-label" text-anchor="middle">Process P0</text>
      <text x="200" y="20" class="cs-label" text-anchor="middle">Kernel</text>
      <text x="320" y="20" class="cs-label" text-anchor="middle">Process P1</text>
      <rect x="55" y="35" width="50" height="40" rx="4" class="cs-process-bar cs-p0"/>
      <text x="80" y="60" class="cs-label" fill="white" text-anchor="middle">Running</text>
      <path d="M 80 75 L 80 90 L 175 100" class="cs-arrow"/>
      <text x="120" y="85" class="cs-action">interrupt/syscall</text>
      <rect x="130" y="100" width="140" height="25" rx="4" class="cs-process-bar cs-kernel"/>
      <text x="200" y="117" class="cs-label" fill="white" text-anchor="middle">Save P0 state to PCB₀</text>
      <rect x="130" y="95" width="140" height="75" class="cs-overhead"/>
      <rect x="130" y="130" width="140" height="20" rx="4" class="cs-process-bar cs-kernel"/>
      <text x="200" y="144" class="cs-label" fill="white" text-anchor="middle">Schedule P1</text>
      <rect x="130" y="155" width="140" height="25" rx="4" class="cs-process-bar cs-kernel"/>
      <text x="200" y="172" class="cs-label" fill="white" text-anchor="middle">Load P1 state from PCB₁</text>
      <path d="M 225 180 L 295 190 L 320 190" class="cs-arrow"/>
      <text x="260" y="200" class="cs-action">dispatch</text>
      <rect x="55" y="100" width="50" height="95" rx="4" class="cs-idle"/>
      <text x="80" y="150" class="cs-action" text-anchor="middle">idle</text>
      <rect x="295" y="35" width="50" height="155" rx="4" class="cs-idle"/>
      <text x="320" y="115" class="cs-action" text-anchor="middle">idle</text>
      <rect x="295" y="195" width="50" height="40" rx="4" class="cs-process-bar cs-p1"/>
      <text x="320" y="220" class="cs-label" fill="white" text-anchor="middle">Running</text>
      <text x="35" y="55" class="cs-time-label">t₀</text>
      <text x="35" y="140" class="cs-time-label">t₁</text>
      <text x="35" y="215" class="cs-time-label">t₂</text>
      <text x="285" y="140" class="cs-action" fill="#d35400" font-weight="600">Overhead</text>
    </svg>
  </div>
  
  <div class="cs-explanation">
    <strong>Context Switch Overhead:</strong> Waktu untuk save/restore registers, flush cache (TLB, CPU cache), dan pipeline flush. Semakin sering context switch = semakin banyak overhead!
  </div>
</div>

**Overhead Context Switch:**

- Waktu untuk save/restore registers
- Cache flush (TLB, CPU cache)
- Pipeline flush

### Process Creation

**Fork-Exec Model (Unix/Linux):**

```c
pid_t pid = fork();  // Duplikasi proses

if (pid == 0) {
    // Child process
    exec("/bin/ls", args);  // Replace dengan program baru
} else if (pid > 0) {
    // Parent process
    wait(NULL);  // Tunggu child selesai
} else {
    // Fork failed
    perror("fork");
}
```

**Process Tree:**

```
init (PID 1)
├── systemd
│   ├── sshd
│   │   └── bash
│   │       └── vim
│   └── nginx
│       ├── nginx worker
│       └── nginx worker
└── cron
```

### Inter-Process Communication (IPC)

| Metode                | Deskripsi                      | Use Case                   |
| --------------------- | ------------------------------ | -------------------------- |
| **Pipe**              | Unidirectional byte stream     | Parent-child communication |
| **Named Pipe (FIFO)** | Pipe dengan nama di filesystem | Unrelated processes        |
| **Message Queue**     | Antrian pesan terstruktur      | Producer-consumer          |
| **Shared Memory**     | Region memori yang di-share    | High-speed data sharing    |
| **Semaphore**         | Signaling mechanism            | Synchronization            |
| **Socket**            | Network-style communication    | Local or network IPC       |
| **Signal**            | Asynchronous notification      | Event notification         |

---

## 3. Thread

### Konsep Thread

**Thread** adalah unit terkecil dari eksekusi dalam proses. Thread berbagi address space dan resources dengan thread lain dalam proses yang sama.

```
┌─────────────────────────────────────────────────────┐
│                      PROSES                          │
│  ┌─────────────────────────────────────────────────┐│
│  │              Shared Resources                    ││
│  │  • Code Section          • Open Files           ││
│  │  • Data Section          • Heap Memory          ││
│  │  • Global Variables      • Signal Handlers      ││
│  └─────────────────────────────────────────────────┘│
│                                                      │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐         │
│  │ Thread 1│    │ Thread 2│    │ Thread 3│         │
│  ├─────────┤    ├─────────┤    ├─────────┤         │
│  │ Stack   │    │ Stack   │    │ Stack   │         │
│  │ Regs    │    │ Regs    │    │ Regs    │         │
│  │ PC      │    │ PC      │    │ PC      │         │
│  │ ThreadID│    │ ThreadID│    │ ThreadID│         │
│  └─────────┘    └─────────┘    └─────────┘         │
└─────────────────────────────────────────────────────┘
```

### Thread vs Process

| Aspek              | Process                 | Thread                      |
| ------------------ | ----------------------- | --------------------------- |
| **Address Space**  | Terpisah                | Shared                      |
| **Communication**  | IPC (mahal)             | Shared memory (murah)       |
| **Creation Cost**  | Tinggi                  | Rendah                      |
| **Context Switch** | Mahal                   | Murah                       |
| **Isolation**      | Tinggi (crash terpisah) | Rendah (crash = semua mati) |
| **Overhead**       | Lebih berat             | Lebih ringan                |

### Model Threading

**1. User-Level Threads (ULT):**

```
┌────────────────────────────────────┐
│           User Space               │
│  ┌──────────────────────────────┐  │
│  │   Thread Library (pthreads)  │  │
│  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐    │  │
│  │  │ T1│ │ T2│ │ T3│ │ T4│    │  │
│  │  └───┘ └───┘ └───┘ └───┘    │  │
│  └──────────────────────────────┘  │
├────────────────────────────────────┤
│           Kernel Space             │
│         (1 Kernel Thread)          │
└────────────────────────────────────┘
```

- Kernel tidak tahu tentang user threads
- Context switch cepat (tidak perlu syscall)
- Jika satu thread block, semua thread block

**2. Kernel-Level Threads (KLT):**

```
┌────────────────────────────────────┐
│           User Space               │
│      ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│      │ T1│ │ T2│ │ T3│ │ T4│      │
│      └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘      │
├────────┼─────┼─────┼─────┼─────────┤
│        ▼     ▼     ▼     ▼         │
│      ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│      │KT1│ │KT2│ │KT3│ │KT4│      │
│      └───┘ └───┘ └───┘ └───┘      │
│           Kernel Space             │
└────────────────────────────────────┘
```

- Kernel manage semua threads
- Satu thread block tidak mempengaruhi yang lain
- Overhead lebih tinggi

**3. Hybrid (Many-to-Many):**

```
┌────────────────────────────────────┐
│  User Threads: T1 T2 T3 T4 T5 T6   │
│                 \  | /   \ | /     │
│                  \ |/     \|/      │
├────────────────────────────────────┤
│  Kernel Threads:  KT1      KT2     │
└────────────────────────────────────┘
```

- Fleksibel: banyak user thread ke beberapa kernel thread
- Digunakan oleh Solaris, older Windows

### POSIX Threads (pthreads)

```c
#include <pthread.h>

void* thread_function(void* arg) {
    int* num = (int*)arg;
    printf("Thread received: %d\n", *num);
    return NULL;
}

int main() {
    pthread_t thread_id;
    int arg = 42;

    // Create thread
    pthread_create(&thread_id, NULL, thread_function, &arg);

    // Wait for thread to finish
    pthread_join(thread_id, NULL);

    return 0;
}
```

**Fungsi pthreads penting:**
| Fungsi | Deskripsi |
|--------|-----------|
| `pthread_create()` | Buat thread baru |
| `pthread_join()` | Tunggu thread selesai |
| `pthread_exit()` | Terminasi thread |
| `pthread_cancel()` | Batalkan thread |
| `pthread_mutex_lock()` | Lock mutex |
| `pthread_cond_wait()` | Wait pada condition variable |

---

## 4. CPU Scheduling

### Konsep Scheduling

**CPU Scheduler** memilih proses dari ready queue untuk dieksekusi di CPU.

**Kapan scheduling terjadi:**

1. Proses switch dari running ke waiting (I/O)
2. Proses switch dari running ke ready (interrupt)
3. Proses switch dari waiting ke ready (I/O complete)
4. Proses terminasi

**Non-preemptive vs Preemptive:**
| Non-preemptive | Preemptive |
|----------------|------------|
| Proses jalan sampai selesai/block | Proses bisa diinterupsi |
| Sederhana | Lebih kompleks |
| Response time buruk | Response time baik |
| Contoh: FCFS, SJF | Contoh: Round Robin, SRTF |

### Kriteria Scheduling

| Kriteria            | Definisi                                  | Goal     |
| ------------------- | ----------------------------------------- | -------- |
| **CPU Utilization** | % waktu CPU sibuk                         | Maximize |
| **Throughput**      | Jumlah proses selesai/waktu               | Maximize |
| **Turnaround Time** | Waktu dari submit sampai selesai          | Minimize |
| **Waiting Time**    | Waktu menunggu di ready queue             | Minimize |
| **Response Time**   | Waktu dari submit sampai response pertama | Minimize |

### Algoritma Scheduling

#### 1. First-Come First-Served (FCFS)

```
Ready Queue: P1 → P2 → P3 → CPU

Urutan kedatangan = urutan eksekusi
```

**Contoh:**
| Process | Burst Time |
|---------|------------|
| P1 | 24 |
| P2 | 3 |
| P3 | 3 |

```
Gantt Chart:
|    P1 (24)    | P2(3)| P3(3)|
0              24    27     30

Waiting Time: P1=0, P2=24, P3=27
Average WT = (0+24+27)/3 = 17
```

**Convoy Effect**: Proses pendek menunggu proses panjang.

<div class="gantt-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .gantt-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .gantt-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .gantt-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .gantt-viz h4 {
          color: #f3f4f6 !important;
        }
        .gantt-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .gantt-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gantt-label {
          width: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #2c3e50;
          text-align: right;
        }
        html.dark .gantt-label {
          color: #f3f4f6;
        }
        .gantt-chart {
          flex: 1;
          display: flex;
          height: 30px;
          background: #f0f0f0;
          border-radius: 4px;
          overflow: hidden;
        }
        html.dark .gantt-chart {
          background: #374151;
        }
        .gantt-block {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 600;
          color: white;
        }
        .gantt-p1 { background: #e74c3c; }
        .gantt-p2 { background: #3498db; }
        .gantt-p3 { background: #27ae60; }
        .gantt-p4 { background: #9b59b6; }
        .gantt-timeline {
          flex: 1;
          display: flex;
          font-size: 0.55rem;
          color: #666;
        }
        html.dark .gantt-timeline {
          color: #9ca3af;
        }
        .gantt-result {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .gantt-result-item {
          text-align: center;
          padding: 8px 12px;
          background: #f8f9fa;
          border-radius: 6px;
        }
        html.dark .gantt-result-item {
          background: #111827;
          color: #d1d5db;
        }
        .gantt-result-label {
          font-size: 0.6rem;
          color: #666;
        }
        html.dark .gantt-result-label {
          color: #9ca3af;
        }
        .gantt-result-value {
          font-weight: 600;
          color: #2c3e50;
        }
        html.dark .gantt-result-value {
          color: #f3f4f6;
        }
        @media (min-width: 640px) {
          .gantt-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Gantt Chart: FCFS vs SJF (P1=24, P2=3, P3=3)</h4>

<div class="gantt-container">
    <div class="gantt-row">
      <div class="gantt-label">FCFS:</div>
      <div class="gantt-chart">
        <div class="gantt-block gantt-p1" style="flex: 24;">P1 (24)</div>
        <div class="gantt-block gantt-p2" style="flex: 3;">P2</div>
        <div class="gantt-block gantt-p3" style="flex: 3;">P3</div>
      </div>
    </div>
    <div class="gantt-row">
      <div class="gantt-label"></div>
      <div class="gantt-timeline">
        <span style="flex: 24;">0</span>
        <span style="flex: 3;">24</span>
        <span style="flex: 3;">27 30</span>
      </div>
    </div>
    <div class="gantt-row" style="margin-top: 10px;">
      <div class="gantt-label">SJF:</div>
      <div class="gantt-chart">
        <div class="gantt-block gantt-p2" style="flex: 3;">P2</div>
        <div class="gantt-block gantt-p3" style="flex: 3;">P3</div>
        <div class="gantt-block gantt-p1" style="flex: 24;">P1 (24)</div>
      </div>
    </div>
    <div class="gantt-row">
      <div class="gantt-label"></div>
      <div class="gantt-timeline">
        <span style="flex: 3;">0</span>
        <span style="flex: 3;">3</span>
        <span style="flex: 24;">6         30</span>
      </div>
    </div>
  </div>
  
  <div class="gantt-result">
    <div class="gantt-result-item">
      <div class="gantt-result-label">FCFS Avg Wait</div>
      <div class="gantt-result-value" style="color: #e74c3c;">(0+24+27)/3 = 17</div>
    </div>
    <div class="gantt-result-item">
      <div class="gantt-result-label">SJF Avg Wait</div>
      <div class="gantt-result-value" style="color: #27ae60;">(0+3+6)/3 = 3</div>
    </div>
  </div>
</div>

#### 2. Shortest Job First (SJF)

Proses dengan burst time terpendek dieksekusi duluan.

**Non-preemptive SJF:**
| Process | Arrival | Burst |
|---------|---------|-------|
| P1 | 0 | 7 |
| P2 | 2 | 4 |
| P3 | 4 | 1 |
| P4 | 5 | 4 |

```
Gantt Chart:
| P1 (7) | P3(1)| P2 (4) | P4 (4) |
0       7     8       12       16

Average WT = (0+6+3+7)/4 = 4
```

**Preemptive SJF (SRTF - Shortest Remaining Time First):**
Jika proses baru datang dengan burst lebih pendek dari remaining time proses yang sedang jalan, switch!

#### 3. Priority Scheduling

Setiap proses punya priority. CPU diberikan ke proses dengan priority tertinggi.

**Masalah: Starvation** - Proses low priority mungkin tidak pernah jalan.
**Solusi: Aging** - Tingkatkan priority proses yang sudah lama menunggu.

```
Priority(t) = BasePriority + (WaitingTime × AgingFactor)
```

#### 4. Round Robin (RR)

Setiap proses dapat **time quantum** (q) untuk eksekusi. Setelah q habis, proses dipindah ke belakang antrian.

**Contoh dengan q = 4:**
| Process | Burst Time |
|---------|------------|
| P1 | 24 |
| P2 | 3 |
| P3 | 3 |

```
Gantt Chart:
|P1(4)|P2(3)|P3(3)|P1(4)|P1(4)|P1(4)|P1(4)|P1(4)|
0    4    7    10   14   18   22   26   30

Queue evolution:
t=0:  [P1, P2, P3]
t=4:  [P2, P3, P1]
t=7:  [P3, P1]
t=10: [P1]
...
```

**Time Quantum Selection:**

- q terlalu besar → jadi FCFS
- q terlalu kecil → overhead context switch tinggi
- Rule of thumb: 80% CPU bursts < q

#### 5. Multilevel Queue

```
┌─────────────────────────────────────┐
│   Highest Priority                  │
│   ┌───────────────────────────────┐ │
│   │ System Processes      [RR]    │ │
│   └───────────────────────────────┘ │
│   ┌───────────────────────────────┐ │
│   │ Interactive Processes [RR]    │ │
│   └───────────────────────────────┘ │
│   ┌───────────────────────────────┐ │
│   │ Batch Processes      [FCFS]   │ │
│   └───────────────────────────────┘ │
│   Lowest Priority                   │
└─────────────────────────────────────┘
```

#### 6. Multilevel Feedback Queue (MLFQ)

Proses bisa berpindah antar queue berdasarkan perilaku:

- CPU-bound → turun ke queue priority rendah
- I/O-bound → naik ke queue priority tinggi

```
Queue 0 (q=8):   [Interactive jobs] ←── New process
     ↓ timeout
Queue 1 (q=16):  [Mixed jobs]
     ↓ timeout
Queue 2 (FCFS):  [CPU-bound jobs]
```

---

## 5. Sinkronisasi Proses

### Race Condition

**Race Condition** terjadi ketika hasil eksekusi bergantung pada urutan eksekusi thread yang tidak terprediksi.

**Contoh:**

```c
// Shared variable
int counter = 0;

// Thread 1                    // Thread 2
counter++;                     counter++;

// Expected: counter = 2
// Possible: counter = 1 (race condition!)
```

**Kenapa bisa salah?**

```
counter++ sebenarnya adalah:
1. LOAD  counter → register
2. ADD   register, 1
3. STORE register → counter

Thread 1:           Thread 2:
LOAD (0)
                    LOAD (0)
ADD (1)
                    ADD (1)
STORE (1)
                    STORE (1)  ← overwrites!

Hasil: counter = 1 (seharusnya 2)
```

### Critical Section Problem

**Critical Section** adalah bagian kode yang mengakses shared resource.

**Requirements untuk solusi:**

1. **Mutual Exclusion**: Hanya satu proses di critical section
2. **Progress**: Jika tidak ada di CS, proses yang mau masuk tidak boleh diblock selamanya
3. **Bounded Waiting**: Ada batas waktu tunggu untuk masuk CS

### Peterson's Solution

Solusi software untuk 2 proses:

```c
// Shared variables
bool flag[2] = {false, false};
int turn;

// Process i (i = 0 atau 1, j = 1-i)
void enter_critical_section(int i) {
    int j = 1 - i;
    flag[i] = true;      // Saya mau masuk
    turn = j;            // Tapi beri kesempatan dia dulu
    while (flag[j] && turn == j)
        ; // busy wait
}

void exit_critical_section(int i) {
    flag[i] = false;
}
```

### Hardware Support

**1. Test-and-Set (TAS):**

```c
// Atomic instruction
bool test_and_set(bool *target) {
    bool old = *target;
    *target = true;
    return old;  // Return nilai lama
}

// Penggunaan
bool lock = false;

void enter_cs() {
    while (test_and_set(&lock))
        ; // busy wait
}

void exit_cs() {
    lock = false;
}
```

**2. Compare-and-Swap (CAS):**

```c
// Atomic instruction
int compare_and_swap(int *ptr, int expected, int new_value) {
    int old = *ptr;
    if (old == expected)
        *ptr = new_value;
    return old;
}
```

### Mutex (Mutual Exclusion)

```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void* thread_func(void* arg) {
    pthread_mutex_lock(&mutex);

    // Critical Section
    counter++;

    pthread_mutex_unlock(&mutex);
    return NULL;
}
```

### Semaphore

**Semaphore** adalah variabel integer dengan operasi atomic:

- **wait(S)** atau **P(S)**: Decrement, block jika ≤ 0
- **signal(S)** atau **V(S)**: Increment, wake up waiting process

```c
// Binary Semaphore (Mutex)
sem_t mutex;
sem_init(&mutex, 0, 1);  // Initial value = 1

sem_wait(&mutex);   // P(mutex)
// Critical Section
sem_post(&mutex);   // V(mutex)

// Counting Semaphore (Resource pool)
sem_t resources;
sem_init(&resources, 0, 5);  // 5 resources available
```

### Classic Synchronization Problems

#### 1. Producer-Consumer (Bounded Buffer)

<div class="prodcons-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .prodcons-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .prodcons-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .prodcons-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .prodcons-viz h4 {
          color: #f3f4f6 !important;
        }
        .pc-svg-container {
          width: 100%;
          height: 180px;
        }
        .pc-svg {
          width: 100%;
          height: 100%;
        }
        .pc-producer {
          fill: #27ae60;
        }
        html.dark .pc-producer {
          fill: #22c55e;
        }
        .pc-consumer {
          fill: #e74c3c;
        }
        html.dark .pc-consumer {
          fill: #ef4444;
        }
        .pc-buffer-slot {
          fill: #ecf0f1;
          stroke: #bdc3c7;
          stroke-width: 2;
        }
        html.dark .pc-buffer-slot {
          fill: #374151;
          stroke: #4b5563;
        }
        .pc-buffer-filled {
          fill: #3498db;
          stroke: #2980b9;
          stroke-width: 2;
        }
        html.dark .pc-buffer-filled {
          fill: #3b82f6;
          stroke: #2563eb;
        }
        .pc-arrow {
          fill: none;
          stroke: #666;
          stroke-width: 2;
          marker-end: url(#pcArrow);
        }
        html.dark .pc-arrow {
          stroke: #9ca3af;
        }
        .pc-label {
          font-size: 0.7rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .pc-label {
          fill: #f3f4f6;
        }
        .pc-sem-label {
          font-size: 0.6rem;
          fill: #666;
        }
        html.dark .pc-sem-label {
          fill: #9ca3af;
        }
        .pc-explanation {
          margin-top: 12px;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #495057;
          border-left: 4px solid #3498db;
        }
        html.dark .pc-explanation {
          background: #111827;
          color: #d1d5db;
          border-left-color: #3b82f6;
        }
        @media (min-width: 640px) {
          .prodcons-viz {
            max-width: 600px;
            padding: 1.5rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Bounded Buffer: Producer-Consumer Problem</h4>

<div class="pc-svg-container">
    <svg class="pc-svg" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="pcArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
        </marker>
      </defs>
      <!-- Producer -->
      <rect x="20" y="50" width="60" height="50" rx="8" class="pc-producer"/>
      <text x="50" y="80" class="pc-label" fill="white" font-weight="600">Producer</text>
      <!-- Arrow to buffer -->
      <path d="M 85 75 L 115 75" class="pc-arrow"/>
      <text x="100" y="65" class="pc-sem-label" text-anchor="middle">in</text>
      <!-- Buffer (circular) -->
      <rect x="125" y="45" width="30" height="30" rx="4" class="pc-buffer-filled"/>
      <rect x="160" y="45" width="30" height="30" rx="4" class="pc-buffer-filled"/>
      <rect x="195" y="45" width="30" height="30" rx="4" class="pc-buffer-filled"/>
      <rect x="230" y="45" width="30" height="30" rx="4" class="pc-buffer-slot"/>
      <rect x="125" y="85" width="30" height="30" rx="4" class="pc-buffer-slot"/>
      <rect x="160" y="85" width="30" height="30" rx="4" class="pc-buffer-slot"/>
      <rect x="195" y="85" width="30" height="30" rx="4" class="pc-buffer-slot"/>
      <rect x="230" y="85" width="30" height="30" rx="4" class="pc-buffer-slot"/>
      <!-- Buffer items -->
      <text x="140" y="65" class="pc-label" fill="white">A</text>
      <text x="175" y="65" class="pc-label" fill="white">B</text>
      <text x="210" y="65" class="pc-label" fill="white">C</text>
      <!-- Arrow from buffer -->
      <path d="M 265 75 L 295 75" class="pc-arrow"/>
      <text x="280" y="65" class="pc-sem-label" text-anchor="middle">out</text>
      <!-- Consumer -->
      <rect x="305" y="50" width="60" height="50" rx="8" class="pc-consumer"/>
      <text x="335" y="80" class="pc-label" fill="white" font-weight="600">Consumer</text>
      <!-- Semaphore labels -->
      <text x="180" y="135" class="pc-label">Bounded Buffer (size = 8)</text>
      <text x="50" y="115" class="pc-sem-label" text-anchor="middle">wait(empty)</text>
      <text x="50" y="128" class="pc-sem-label" text-anchor="middle">signal(full)</text>
      <text x="335" y="115" class="pc-sem-label" text-anchor="middle">wait(full)</text>
      <text x="335" y="128" class="pc-sem-label" text-anchor="middle">signal(empty)</text>
      <!-- Indicators -->
      <text x="180" y="25" class="pc-sem-label" text-anchor="middle" font-style="italic">full = 3, empty = 5</text>
    </svg>
  </div>
  
  <div class="pc-explanation">
    <strong>Semaphore:</strong> <code>full</code> = jumlah item di buffer, <code>empty</code> = slot kosong. Producer menunggu jika buffer penuh, Consumer menunggu jika buffer kosong.
  </div>
</div>

```c
#define BUFFER_SIZE 10
int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty, full;
pthread_mutex_t mutex;

void init() {
    sem_init(&empty, 0, BUFFER_SIZE);  // Buffer slots available
    sem_init(&full, 0, 0);              // Items in buffer
}

void* producer(void* arg) {
    int item;
    while (1) {
        item = produce_item();

        sem_wait(&empty);           // Wait for empty slot
        pthread_mutex_lock(&mutex);

        buffer[in] = item;
        in = (in + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex);
        sem_post(&full);            // Signal item available
    }
}

void* consumer(void* arg) {
    int item;
    while (1) {
        sem_wait(&full);            // Wait for item
        pthread_mutex_lock(&mutex);

        item = buffer[out];
        out = (out + 1) % BUFFER_SIZE;

        pthread_mutex_unlock(&mutex);
        sem_post(&empty);           // Signal empty slot

        consume_item(item);
    }
}
```

#### 2. Readers-Writers Problem

```c
sem_t rw_mutex;      // For writers
sem_t mutex;         // For read_count
int read_count = 0;

void* reader(void* arg) {
    while (1) {
        sem_wait(&mutex);
        read_count++;
        if (read_count == 1)
            sem_wait(&rw_mutex);  // First reader locks
        sem_post(&mutex);

        // Reading...

        sem_wait(&mutex);
        read_count--;
        if (read_count == 0)
            sem_post(&rw_mutex);  // Last reader unlocks
        sem_post(&mutex);
    }
}

void* writer(void* arg) {
    while (1) {
        sem_wait(&rw_mutex);

        // Writing...

        sem_post(&rw_mutex);
    }
}
```

#### 3. Dining Philosophers

<div class="dining-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .dining-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .dining-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .dining-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .dining-viz h4 {
          color: #f3f4f6 !important;
        }
        .dn-svg-container {
          width: 100%;
          height: 220px;
        }
        .dn-svg {
          width: 100%;
          height: 100%;
        }
        .dn-table {
          fill: #8b4513;
        }
        html.dark .dn-table {
          fill: #78350f;
        }
        .dn-philosopher {
          fill: #3498db;
          stroke: #2980b9;
          stroke-width: 2;
        }
        .dn-thinking {
          fill: #9b59b6;
          stroke: #8e44ad;
        }
        .dn-eating {
          fill: #27ae60;
          stroke: #1e8449;
        }
        html.dark .dn-philosopher {
          fill: #3b82f6;
          stroke: #2563eb;
        }
        .dn-fork {
          fill: #bdc3c7;
          stroke: #7f8c8d;
          stroke-width: 1;
        }
        html.dark .dn-fork {
          fill: #9ca3af;
          stroke: #6b7280;
        }
        .dn-label {
          font-size: 0.65rem;
          fill: white;
          text-anchor: middle;
          font-weight: 600;
        }
        .dn-fork-label {
          font-size: 0.55rem;
          fill: #666;
          text-anchor: middle;
        }
        html.dark .dn-fork-label {
          fill: #9ca3af;
        }
        .dn-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .dn-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .dn-legend-item {
          color: #d1d5db;
        }
        .dn-explanation {
          margin-top: 12px;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #495057;
        }
        html.dark .dn-explanation {
          background: #111827;
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .dining-viz {
            max-width: 500px;
            padding: 1.5rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Dining Philosophers Problem</h4>

<div class="dn-svg-container">
    <svg class="dn-svg" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <!-- Table -->
      <circle cx="150" cy="100" r="45" class="dn-table"/>
      <!-- Philosopher 0 (top) - Thinking -->
      <circle cx="150" cy="30" r="22" class="dn-philosopher dn-thinking"/>
      <text x="150" y="35" class="dn-label">P0</text>
      <!-- Philosopher 1 (right) - Eating -->
      <circle cx="220" cy="60" r="22" class="dn-philosopher dn-eating"/>
      <text x="220" y="65" class="dn-label">P1</text>
      <!-- Philosopher 2 (bottom-right) -->
      <circle cx="200" cy="140" r="22" class="dn-philosopher"/>
      <text x="200" y="145" class="dn-label">P2</text>
      <!-- Philosopher 3 (bottom-left) -->
      <circle cx="100" cy="140" r="22" class="dn-philosopher"/>
      <text x="100" y="145" class="dn-label">P3</text>
      <!-- Philosopher 4 (left) - Thinking -->
      <circle cx="80" cy="60" r="22" class="dn-philosopher dn-thinking"/>
      <text x="80" y="65" class="dn-label">P4</text>
      <!-- Forks (between philosophers) -->
      <!-- Fork 0 (between P0 and P1) -->
      <rect x="180" y="38" width="4" height="20" rx="2" class="dn-fork" transform="rotate(35 182 48)"/>
      <text x="192" y="35" class="dn-fork-label">F0</text>
      <!-- Fork 1 (between P1 and P2) - being used by P1 -->
      <rect x="218" y="95" width="4" height="20" rx="2" class="dn-fork" transform="rotate(70 220 105)"/>
      <text x="235" y="105" class="dn-fork-label">F1</text>
      <!-- Fork 2 (between P2 and P3) -->
      <rect x="148" y="145" width="4" height="20" rx="2" class="dn-fork"/>
      <text x="150" y="175" class="dn-fork-label">F2</text>
      <!-- Fork 3 (between P3 and P4) -->
      <rect x="78" y="95" width="4" height="20" rx="2" class="dn-fork" transform="rotate(-70 80 105)"/>
      <text x="60" y="105" class="dn-fork-label">F3</text>
      <!-- Fork 4 (between P4 and P0) - being used by P1 -->
      <rect x="108" y="38" width="4" height="20" rx="2" class="dn-fork" transform="rotate(-35 110 48)"/>
      <text x="100" y="35" class="dn-fork-label">F4</text>
    </svg>
  </div>
  
  <div class="dn-legend">
    <div class="dn-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#9b59b6;border-radius:50%;"></span> Thinking
    </div>
    <div class="dn-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#27ae60;border-radius:50%;"></span> Eating
    </div>
    <div class="dn-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#3498db;border-radius:50%;"></span> Waiting
    </div>
  </div>
  
  <div class="dn-explanation">
    <strong>Problem:</strong> 5 philosopher, 5 fork. Untuk makan, philosopher butuh 2 fork (kiri & kanan). Jika semua ambil fork kiri bersamaan → <strong>Deadlock!</strong>
  </div>
</div>

**Solusi dengan asymmetric pickup:**

```c
sem_t fork[5];  // All initialized to 1

void philosopher(int id) {
    while (1) {
        think();

        if (id % 2 == 0) {
            sem_wait(&fork[id]);
            sem_wait(&fork[(id + 1) % 5]);
        } else {
            sem_wait(&fork[(id + 1) % 5]);
            sem_wait(&fork[id]);
        }

        eat();

        sem_post(&fork[id]);
        sem_post(&fork[(id + 1) % 5]);
    }
}
```

### Monitor

**Monitor** adalah high-level synchronization construct yang menggabungkan data, procedures, dan synchronization.

```
┌────────────────────────────────────────┐
│              MONITOR                   │
│  ┌──────────────────────────────────┐  │
│  │    Shared Data                   │  │
│  │    (private)                     │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │    Condition Variables           │  │
│  │    x.wait()  x.signal()          │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌────────────┐ ┌────────────────────┐ │
│  │ Procedure 1│ │ Procedure 2        │ │
│  │ (public)   │ │ (public)           │ │
│  └────────────┘ └────────────────────┘ │
│        ↑                               │
│   Only one thread at a time            │
│   (implicit mutual exclusion)          │
│                                        │
│  ╔════════════════════════════════════╗│
│  ║     Entry Queue                    ║│
│  ║   [T3] [T2] [T1] → enter           ║│
│  ╚════════════════════════════════════╝│
└────────────────────────────────────────┘
```

---

## 6. Deadlock

### Definisi Deadlock

**Deadlock** adalah situasi dimana dua atau lebih proses saling menunggu resource yang dipegang oleh proses lain, sehingga tidak ada yang bisa melanjutkan.

```
┌───────────┐         ┌───────────┐
│ Process A │◀──holds─│ Resource 1│
│           │         └───────────┘
│           │               ▲
│   waits   │               │ waits
│     for   │               │  for
│     ▼     │               │
│ Resource 2│─────holds────▶│ Process B │
└───────────┘               └───────────┘

A holds R1, waits for R2
B holds R2, waits for R1
→ DEADLOCK!
```

### Kondisi Deadlock (Coffman Conditions)

Deadlock terjadi jika dan hanya jika **keempat** kondisi ini terpenuhi secara bersamaan:

| Kondisi                 | Deskripsi                                                 |
| ----------------------- | --------------------------------------------------------- |
| **1. Mutual Exclusion** | Resource hanya bisa digunakan satu proses pada satu waktu |
| **2. Hold and Wait**    | Proses memegang resource sambil menunggu resource lain    |
| **3. No Preemption**    | Resource tidak bisa diambil paksa dari proses             |
| **4. Circular Wait**    | Ada rantai circular: P1→P2→P3→...→P1                      |

### Resource Allocation Graph (RAG)

<div class="rag-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .rag-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .rag-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .rag-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .rag-viz h4 {
          color: #f3f4f6 !important;
        }
        .rag-svg-container {
          width: 100%;
          height: 240px;
        }
        .rag-svg {
          width: 100%;
          height: 100%;
        }
        .rag-process {
          fill: #3498db;
          stroke: #2980b9;
          stroke-width: 2;
        }
        html.dark .rag-process {
          fill: #3b82f6;
          stroke: #1d4ed8;
        }
        .rag-resource {
          fill: #f39c12;
          stroke: #d68910;
          stroke-width: 2;
        }
        html.dark .rag-resource {
          fill: #f59e0b;
          stroke: #b45309;
        }
        .rag-instance {
          fill: #2c3e50;
        }
        html.dark .rag-instance {
          fill: #e5e7eb;
        }
        .rag-request {
          stroke: #e74c3c;
          stroke-width: 2;
          stroke-dasharray: 5,3;
          fill: none;
          marker-end: url(#ragArrowRed);
        }
        html.dark .rag-request {
          stroke: #f87171;
        }
        .rag-assign {
          stroke: #27ae60;
          stroke-width: 2;
          fill: none;
          marker-end: url(#ragArrowGreen);
        }
        html.dark .rag-assign {
          stroke: #4ade80;
        }
        .rag-label {
          font-size: 0.7rem;
          font-weight: 600;
          fill: white;
          text-anchor: middle;
        }
        .rag-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .rag-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .rag-legend-item {
          color: #d1d5db;
        }
        .rag-warning {
          margin-top: 10px;
          padding: 10px;
          background: #fef3c7;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #92400e;
          text-align: center;
          border-left: 4px solid #f59e0b;
        }
        html.dark .rag-warning {
          background: #451a03;
          color: #fef3c7;
          border-left-color: #f59e0b;
        }
        @media (min-width: 640px) {
          .rag-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
          .rag-svg-container {
            height: 260px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Resource Allocation Graph - Contoh Deadlock</h4>

<div class="rag-svg-container">
    <svg class="rag-svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="ragArrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e74c3c"/>
        </marker>
        <marker id="ragArrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#27ae60"/>
        </marker>
      </defs>
      <rect x="160" y="20" width="50" height="50" rx="4" class="rag-resource"/>
      <circle cx="185" cy="45" r="6" class="rag-instance"/>
      <text x="185" y="85" class="rag-label" style="fill: #2c3e50;">R1</text>
      <rect x="280" y="100" width="50" height="50" rx="4" class="rag-resource"/>
      <circle cx="305" cy="125" r="6" class="rag-instance"/>
      <text x="305" y="165" class="rag-label" style="fill: #2c3e50;">R2</text>
      <circle cx="100" cy="120" r="30" class="rag-process"/>
      <text x="100" y="125" class="rag-label">P1</text>
      <circle cx="200" cy="190" r="30" class="rag-process"/>
      <text x="200" y="195" class="rag-label">P2</text>
      <path d="M 160 55 Q 130 70, 115 90" class="rag-assign"/>
      <path d="M 130 120 Q 200 110, 278 120" class="rag-request"/>
      <path d="M 285 145 Q 250 170, 225 175" class="rag-assign"/>
      <path d="M 200 160 Q 190 100, 185 72" class="rag-request"/>
      <text x="200" y="15" style="font-size: 0.65rem; fill: #e74c3c; text-anchor: middle; font-weight: 600;">⚠ CYCLE DETECTED = DEADLOCK</text>
    </svg>
  </div>
  
  <div class="rag-legend">
    <div class="rag-legend-item">
      <svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="#3498db"/></svg> Process
    </div>
    <div class="rag-legend-item">
      <svg width="20" height="20"><rect x="2" y="2" width="16" height="16" rx="2" fill="#f39c12"/></svg> Resource
    </div>
    <div class="rag-legend-item">
      <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#27ae60" stroke-width="2"/></svg> Assignment
    </div>
    <div class="rag-legend-item">
      <svg width="30" height="10"><line x1="0" y1="5" x2="30" y2="5" stroke="#e74c3c" stroke-width="2" stroke-dasharray="5,3"/></svg> Request
    </div>
  </div>
  
  <div class="rag-warning">
    <strong>Deadlock:</strong> P1 holds R1, waits for R2. P2 holds R2, waits for R1 → Circular wait!
  </div>
</div>

### Strategi Penanganan Deadlock

#### 1. Deadlock Prevention

Cegah salah satu dari 4 kondisi:

| Kondisi              | Cara Mencegah                            |
| -------------------- | ---------------------------------------- |
| **Mutual Exclusion** | Gunakan sharable resources (jarang bisa) |
| **Hold and Wait**    | Request semua resource sekaligus         |
| **No Preemption**    | Paksa release jika request gagal         |
| **Circular Wait**    | Order resources, request sesuai urutan   |

**Contoh Circular Wait Prevention:**

```c
// Resource ordering: R1 < R2 < R3
// Selalu request dengan urutan ascending

// Correct:
lock(R1); lock(R2); lock(R3);

// Incorrect (bisa deadlock):
lock(R3); lock(R1);  // Violates ordering
```

#### 2. Deadlock Avoidance

Sistem mengevaluasi setiap request untuk memastikan tidak menuju unsafe state.

**Banker's Algorithm:**

State aman jika ada urutan eksekusi $\langle P_1, P_2, ..., P_n \rangle$ dimana setiap $P_i$ bisa selesai.

**Data Structures:**

- `Available[m]`: Resource tersedia
- `Max[n][m]`: Maximum demand setiap proses
- `Allocation[n][m]`: Resource yang sudah dialokasi
- `Need[n][m] = Max - Allocation`: Kebutuhan sisa

**Safety Algorithm:**

```
1. Work = Available, Finish[i] = false
2. Find i where Finish[i] = false AND Need[i] ≤ Work
3. If found:
     Work = Work + Allocation[i]
     Finish[i] = true
     Goto step 2
4. If all Finish[i] = true → SAFE STATE
```

**Contoh:**

```
Proses  Allocation  Max     Need    Available
        A  B  C    A B C   A B C    A  B  C
P0      0  1  0    7 5 3   7 4 3    3  3  2
P1      2  0  0    3 2 2   1 2 2
P2      3  0  2    9 0 2   6 0 0
P3      2  1  1    2 2 2   0 1 1
P4      0  0  2    4 3 3   4 3 1

Safe sequence: <P1, P3, P4, P2, P0>
```

#### 3. Deadlock Detection

Izinkan deadlock terjadi, lalu deteksi dan recover.

**Detection Algorithm** (mirip safety algorithm):

- Jalankan periodically
- Cari cycle di wait-for graph

**Recovery:**

- **Process Termination**: Kill proses di cycle
- **Resource Preemption**: Ambil resource dari proses

#### 4. Ignore (Ostrich Algorithm)

Abaikan deadlock karena:

- Jarang terjadi
- Cost prevention/detection tinggi
- Restart lebih murah

Digunakan oleh: Unix, Linux, Windows (untuk sebagian resource)

---

## 7. Manajemen Memori

### Memory Hierarchy

<div class="mem-hierarchy-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .mem-hierarchy-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .mem-hierarchy-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .mem-hierarchy-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .mem-hierarchy-viz h4 {
          color: #f3f4f6 !important;
        }
        .mh-pyramid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }
        .mh-level {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.7rem;
          padding: 8px 0;
          text-align: center;
          border-radius: 4px;
          position: relative;
        }
        .mh-level-info {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 10px;
          font-size: 0.6rem;
          font-weight: 400;
        }
        .mh-reg { background: linear-gradient(135deg, #e74c3c, #c0392b); width: 90px; }
        .mh-l1 { background: linear-gradient(135deg, #e67e22, #d35400); width: 130px; }
        .mh-l2 { background: linear-gradient(135deg, #f1c40f, #f39c12); width: 180px; color: #2c3e50; }
        .mh-l3 { background: linear-gradient(135deg, #2ecc71, #27ae60); width: 240px; }
        .mh-ram { background: linear-gradient(135deg, #3498db, #2980b9); width: 310px; }
        .mh-ssd { background: linear-gradient(135deg, #9b59b6, #8e44ad); width: 380px; }
        .mh-hdd { background: linear-gradient(135deg, #34495e, #2c3e50); width: 100%; max-width: 450px; }
        .mh-indicators {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 450px;
          margin-top: 15px;
          font-size: 0.7rem;
          color: #666;
        }
        html.dark .mh-indicators {
          color: #9ca3af;
        }
        .mh-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .mh-arrow-up {
          font-size: 1.2rem;
          color: #27ae60;
        }
        .mh-arrow-down {
          font-size: 1.2rem;
          color: #e74c3c;
        }
        @media (min-width: 640px) {
          .mem-hierarchy-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
          .mh-level {
            font-size: 0.75rem;
            padding: 10px 0;
          }
          .mh-level-info {
            font-size: 0.65rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Hierarki Memori (Memory Hierarchy)</h4>

<div class="mh-pyramid">
    <div class="mh-level mh-reg">
      <div class="mh-level-info">
        <span>~1 ns</span>
        <span>Registers</span>
        <span>bytes</span>
      </div>
    </div>
    <div class="mh-level mh-l1">
      <div class="mh-level-info">
        <span>~2 ns</span>
        <span>L1 Cache</span>
        <span>64 KB</span>
      </div>
    </div>
    <div class="mh-level mh-l2">
      <div class="mh-level-info">
        <span>~7 ns</span>
        <span>L2 Cache</span>
        <span>256 KB</span>
      </div>
    </div>
    <div class="mh-level mh-l3">
      <div class="mh-level-info">
        <span>~20 ns</span>
        <span>L3 Cache</span>
        <span>8+ MB</span>
      </div>
    </div>
    <div class="mh-level mh-ram">
      <div class="mh-level-info">
        <span>~100 ns</span>
        <span>Main Memory (RAM)</span>
        <span>GB</span>
      </div>
    </div>
    <div class="mh-level mh-ssd">
      <div class="mh-level-info">
        <span>~100 µs</span>
        <span>SSD / NVMe</span>
        <span>TB</span>
      </div>
    </div>
    <div class="mh-level mh-hdd">
      <div class="mh-level-info">
        <span>~10 ms</span>
        <span>HDD (Hard Disk)</span>
        <span>TB</span>
      </div>
    </div>
  </div>
  
  <div class="mh-indicators">
    <div class="mh-indicator">
      <span class="mh-arrow-up">▲</span>
      <span>Faster</span>
      <span>Smaller</span>
      <span>Expensive</span>
    </div>
    <div class="mh-indicator">
      <span class="mh-arrow-down">▼</span>
      <span>Slower</span>
      <span>Larger</span>
      <span>Cheaper</span>
    </div>
  </div>
</div>

### Address Binding

**Kapan address ditentukan:**

| Tahap              | Deskripsi                                | Flexibility                  |
| ------------------ | ---------------------------------------- | ---------------------------- |
| **Compile Time**   | Address absolut di-generate saat compile | Harus recompile jika pindah  |
| **Load Time**      | Address ditentukan saat program di-load  | Relocatable code             |
| **Execution Time** | Address ditentukan saat runtime          | Perlu hardware support (MMU) |

### Logical vs Physical Address

```
┌─────────────────┐          ┌─────────────────┐
│ CPU (Process)   │          │ Physical Memory │
│                 │          │                 │
│ Logical Address │   MMU    │ Physical Address│
│ (Virtual)       │─────────▶│                 │
│    0x1234       │  Mapping │    0xABCD       │
└─────────────────┘          └─────────────────┘
```

- **Logical/Virtual Address**: Dilihat oleh CPU/process
- **Physical Address**: Address sebenarnya di RAM
- **MMU (Memory Management Unit)**: Hardware yang melakukan translasi

### Contiguous Memory Allocation

Setiap proses mendapat blok memori yang berurutan.

**Fixed Partitioning:**

```
┌────────────────────┐
│    OS (Reserved)   │
├────────────────────┤
│  Partition 1 (2MB) │ ← Process A (1.5MB) + 0.5MB fragmentation
├────────────────────┤
│  Partition 2 (4MB) │ ← Process B (3MB) + 1MB fragmentation
├────────────────────┤
│  Partition 3 (4MB) │ ← Empty
├────────────────────┤
│  Partition 4 (6MB) │ ← Process C (6MB)
└────────────────────┘
```

- **Internal Fragmentation**: Ruang tidak terpakai di dalam partisi

**Variable Partitioning:**

```
┌────────────────────┐
│    OS (Reserved)   │
├────────────────────┤
│  Process A (1.5MB) │
├────────────────────┤
│     Hole (2MB)     │ ← External fragmentation
├────────────────────┤
│  Process B (3MB)   │
├────────────────────┤
│     Hole (1MB)     │ ← External fragmentation
├────────────────────┤
│  Process C (4MB)   │
└────────────────────┘
```

- **External Fragmentation**: Lubang-lubang kecil antar partisi

**Allocation Strategies:**
| Strategy | Deskripsi | Pros/Cons |
|----------|-----------|-----------|
| **First Fit** | Cari hole pertama yang cukup | Cepat |
| **Best Fit** | Cari hole terkecil yang cukup | Minimize waste, tapi banyak small holes |
| **Worst Fit** | Cari hole terbesar | Leave larger remaining hole |

### Paging

**Paging** membagi memori menjadi fixed-size blocks:

- **Frame**: Fixed-size block di physical memory
- **Page**: Fixed-size block di logical memory
- Ukuran umum: 4KB, 2MB, 1GB (huge pages)

```
Logical Memory              Physical Memory
┌────────────┐              ┌────────────┐
│   Page 0   │──────────────▶│  Frame 2   │
├────────────┤              ├────────────┤
│   Page 1   │───┐          │  Frame 0   │◀──┐
├────────────┤   │          ├────────────┤   │
│   Page 2   │   │          │  Frame 1   │◀──┼──┐
├────────────┤   │          ├────────────┤   │  │
│   Page 3   │   └─────────▶│  Frame 5   │   │  │
└────────────┘              ├────────────┤   │  │
                            │  Frame 3   │   │  │
     Page Table             ├────────────┤   │  │
   ┌───┬───────┐            │  Frame 4   │   │  │
   │ 0 │   2   │            └────────────┘   │  │
   ├───┼───────┤                             │  │
   │ 1 │   5   │─────────────────────────────┘  │
   ├───┼───────┤                                │
   │ 2 │   1   │────────────────────────────────┘
   ├───┼───────┤
   │ 3 │   0   │
   └───┴───────┘
```

**Address Translation:**

<div class="addr-trans-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .addr-trans-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .addr-trans-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .addr-trans-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .addr-trans-viz h4 {
          color: #f3f4f6 !important;
        }
        .at-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        .at-address {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .at-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #2c3e50;
          width: 80px;
          text-align: right;
        }
        html.dark .at-label {
          color: #f3f4f6;
        }
        .at-parts {
          display: flex;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .at-part {
          padding: 10px 15px;
          text-align: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
        }
        .at-page-num {
          background: linear-gradient(135deg, #3498db, #2980b9);
          min-width: 100px;
        }
        .at-offset {
          background: linear-gradient(135deg, #27ae60, #1e8449);
          min-width: 80px;
        }
        .at-frame-num {
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          min-width: 100px;
        }
        .at-bits {
          font-size: 0.6rem;
          font-weight: 400;
          opacity: 0.9;
        }
        .at-arrow {
          font-size: 1.5rem;
          color: #666;
        }
        html.dark .at-arrow {
          color: #9ca3af;
        }
        .at-table {
          display: flex;
          flex-direction: column;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 10px;
          font-size: 0.65rem;
        }
        html.dark .at-table {
          background: #111827;
        }
        .at-table-title {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 5px;
          text-align: center;
        }
        html.dark .at-table-title {
          color: #f3f4f6;
        }
        .at-table-row {
          display: flex;
          justify-content: space-between;
          padding: 3px 8px;
          color: #555;
        }
        html.dark .at-table-row {
          color: #d1d5db;
        }
        .at-table-row.active {
          background: #3498db;
          color: white;
          border-radius: 4px;
        }
        .at-explanation {
          margin-top: 10px;
          padding: 10px;
          background: #e8f4f8;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #2c3e50;
          text-align: center;
        }
        html.dark .at-explanation {
          background: #1e3a5f;
          color: #e0f2fe;
        }
        @media (min-width: 640px) {
          .addr-trans-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
          .at-part {
            padding: 12px 20px;
            font-size: 0.75rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Translasi Alamat dengan Paging (Page Size = 4KB)</h4>

<div class="at-container">
    <!-- Logical Address -->
    <div class="at-address">
      <div class="at-label">Logical:</div>
      <div class="at-parts">
        <div class="at-part at-page-num">
          Page Number<br>
          <span class="at-bits">20 bits</span>
        </div>
        <div class="at-part at-offset">
          Offset<br>
          <span class="at-bits">12 bits</span>
        </div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 15px;">
      <div class="at-arrow">↓</div>
      <div class="at-table">
        <div class="at-table-title">Page Table</div>
        <div class="at-table-row">Page 0 → Frame 5</div>
        <div class="at-table-row">Page 1 → Frame 2</div>
        <div class="at-table-row active">Page 2 → Frame 7</div>
        <div class="at-table-row">Page 3 → Frame 1</div>
      </div>
      <div class="at-arrow">↓</div>
    </div>
    <div class="at-address">
      <div class="at-label">Physical:</div>
      <div class="at-parts">
        <div class="at-part at-frame-num">
          Frame Number<br>
          <span class="at-bits">dari table</span>
        </div>
        <div class="at-part at-offset">
          Offset<br>
          <span class="at-bits">tetap sama</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="at-explanation">
    <strong>Contoh:</strong> Jika Page Number = 2, lookup di Page Table → Frame 7. Offset tetap sama, sehingga Physical Address = Frame 7 + Offset.
  </div>
</div>

**Page Table Entry (PTE):**

```
┌─────────────────────────────────────────────────────┐
│ Valid │ Read │ Write │ Exec │ Dirty │ Accessed │ Frame │
│  (V)  │ (R)  │  (W)  │ (X)  │  (D)  │    (A)   │  No.  │
└─────────────────────────────────────────────────────┘
```

### Translation Lookaside Buffer (TLB)

**TLB** adalah cache untuk page table entries.

```
┌───────────────────────────────────────────────────────────┐
│                         CPU                                │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                    Logical Address                    │ │
│  │                   Page | Offset                       │ │
│  └─────────────────────────┬────────────────────────────┘ │
│                            │                              │
│                            ▼                              │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                      TLB                              │ │
│  │   Page  │  Frame                                      │ │
│  │    3    │    7     ← TLB Hit! (fast)                  │ │
│  │    5    │    2                                        │ │
│  └─────────┬────────────────────────────────────────────┘ │
│            │ TLB Miss?                                    │
│            ▼                                              │
│  ┌──────────────────────────────────────────────────────┐ │
│  │               Page Table (in RAM)                     │ │
│  │            (slower, update TLB)                       │ │
│  └──────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────┘
```

**Effective Access Time (EAT):**
$$\text{EAT} = h \times (t_{TLB} + t_{mem}) + (1-h) \times (t_{TLB} + 2 \times t_{mem})$$

Dimana:

- $h$ = TLB hit ratio
- $t_{TLB}$ = TLB access time
- $t_{mem}$ = Memory access time

### Multi-level Page Tables

Untuk menghemat memori page table:

**Two-Level Paging (x86):**

```
┌───────────────┬───────────────┬────────────────┐
│  Directory   │  Page Table   │    Offset      │
│   (10 bits)  │   (10 bits)   │   (12 bits)    │
└───────┬──────┴───────┬───────┴────────────────┘
        │              │
        ▼              │
   ┌─────────┐         │
   │  Page   │         ▼
   │Directory│    ┌─────────┐
   │         │───▶│  Page   │
   │  Entry  │    │  Table  │───▶ Physical Frame
   └─────────┘    └─────────┘
```

**Four-Level Paging (x86-64):**

```
PML4 (9 bits) → PDPT (9 bits) → PD (9 bits) → PT (9 bits) → Offset (12 bits)
     ↓              ↓             ↓            ↓
   512 entries   512 entries   512 entries  512 entries  4KB page
```

### Segmentation

**Segmentation** membagi program berdasarkan logical divisions:

```
Logical View:                Physical Memory:
┌────────────────┐           ┌────────────────────────┐
│     Code       │──────────▶│ Code (at base 0x1000)  │
│   Segment      │           │ limit 0x500            │
├────────────────┤           ├────────────────────────┤
│     Data       │──────────▶│ Data (at base 0x5000)  │
│   Segment      │           │ limit 0x300            │
├────────────────┤           ├────────────────────────┤
│     Stack      │──────────▶│ Stack (at base 0x8000) │
│   Segment      │           │ limit 0x1000           │
├────────────────┤           └────────────────────────┘
│     Heap       │
│   Segment      │
└────────────────┘

Segment Table:
┌─────────┬──────────┬─────────┐
│ Segment │   Base   │  Limit  │
├─────────┼──────────┼─────────┤
│ Code    │  0x1000  │  0x500  │
│ Data    │  0x5000  │  0x300  │
│ Stack   │  0x8000  │  0x1000 │
│ Heap    │  0x9000  │  0x2000 │
└─────────┴──────────┴─────────┘
```

### Paging vs Segmentation

| Aspek             | Paging                  | Segmentation                  |
| ----------------- | ----------------------- | ----------------------------- |
| **Unit Size**     | Fixed (4KB, dll)        | Variable                      |
| **Visibility**    | Invisible to programmer | Visible (code, data, stack)   |
| **Fragmentation** | Internal                | External                      |
| **Sharing**       | Page-level              | Segment-level (lebih natural) |
| **Protection**    | Per page                | Per segment                   |

---

## 8. Virtual Memory

### Konsep Virtual Memory

**Virtual Memory** memungkinkan eksekusi proses yang tidak sepenuhnya ada di memori fisik. Bagian yang tidak dipakai disimpan di disk.

**Keuntungan:**

- Program bisa lebih besar dari RAM fisik
- Lebih banyak proses bisa berjalan bersamaan
- Efisiensi memori (hanya load yang diperlukan)

```
┌─────────────────────────────────────────────────────────┐
│                    Virtual Address Space                 │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Program besar (4GB)                               │   │
│  │ Hanya sebagian di RAM                            │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
              │                           │
              │ Pages in RAM              │ Pages on Disk
              ▼                           ▼
        ┌──────────┐               ┌──────────────┐
        │ Physical │               │  Swap Space  │
        │  Memory  │               │   (Disk)     │
        │  (1GB)   │               │              │
        └──────────┘               └──────────────┘
```

### Demand Paging

Hanya load page ketika diperlukan (on-demand).

**Page Fault Handling:**

```
1. CPU generates virtual address
           │
           ▼
2. Check page table
   ┌───────────────────────┐
   │ Valid bit = 0?        │──── No ──▶ Access memory normally
   └───────────┬───────────┘
               │ Yes (Page Fault!)
               ▼
3. Trap to OS (page fault handler)
           │
           ▼
4. Find page on disk (swap space)
           │
           ▼
5. Find free frame in memory
   (may need page replacement)
           │
           ▼
6. Load page from disk to frame
           │
           ▼
7. Update page table (valid = 1)
           │
           ▼
8. Restart instruction
```

**Effective Access Time dengan Page Fault:**
$$\text{EAT} = (1-p) \times t_{mem} + p \times t_{page\_fault}$$

Dimana:

- $p$ = page fault rate
- $t_{page\_fault}$ ≈ 10ms (disk access)
- $t_{mem}$ ≈ 100ns

Contoh: Jika p = 0.001:
$\text{EAT} = 0.999 \times 100\text{ns} + 0.001 \times 10\text{ms} = 100\text{ns} + 10\mu\text{s} ≈ 10.1\mu\text{s}$

Page fault sangat mahal! Harus diminimalkan.

### Page Replacement Algorithms

Ketika RAM penuh dan perlu load page baru, pilih **victim page** untuk di-swap out.

#### 1. FIFO (First-In First-Out)

Replace page yang paling lama di memori.

```
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2
Frames: 3

Step  Ref  Frame State        Fault?
1     7    [7, -, -]          ✓
2     0    [7, 0, -]          ✓
3     1    [7, 0, 1]          ✓
4     2    [2, 0, 1]          ✓ (replace 7)
5     0    [2, 0, 1]
6     3    [2, 3, 1]          ✓ (replace 0)
7     0    [2, 3, 0]          ✓ (replace 1)
8     4    [4, 3, 0]          ✓ (replace 2)
...

Total Page Faults: 15
```

**Belady's Anomaly**: FIFO bisa menghasilkan MORE page faults dengan MORE frames!

#### 2. Optimal (OPT)

Replace page yang tidak akan digunakan untuk waktu terlama.

```
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2
Frames: 3

Step  Ref  Frame State        Fault?  Next Use
4     2    [2, 0, 1]          ✓       7 never used again
6     3    [2, 0, 3]          ✓       1 not used until later
8     4    [2, 4, 3]          ✓       0 not used until later

Total Page Faults: 9 (minimum possible)
```

- Optimal tapi **tidak bisa diimplementasi** (perlu future knowledge)
- Digunakan sebagai benchmark

#### 3. LRU (Least Recently Used)

Replace page yang paling lama tidak diakses.

```
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2
Frames: 3

Menggunakan timestamp atau stack

Step  Ref  Frame State        Fault?  LRU victim
4     2    [2, 0, 1]          ✓       7 (oldest access)
6     3    [2, 0, 3]          ✓       1 (oldest access)
8     4    [4, 0, 3]          ✓       2 (oldest access)

Total Page Faults: 12
```

**Implementasi LRU:**

- **Counter-based**: Setiap page punya timestamp
- **Stack-based**: Page diakses → pindah ke top of stack
- **Approximation**: Reference bit (cheaper)

#### 4. LRU Approximation Algorithms

**Second Chance (Clock) Algorithm:**

```
┌───────────────────────────────────────┐
│           Circular Buffer             │
│                                       │
│     ┌───┐   ┌───┐   ┌───┐   ┌───┐    │
│     │ A │ ─ │ B │ ─ │ C │ ─ │ D │    │
│     │R=1│   │R=0│   │R=1│   │R=0│    │
│     └───┘   └─▲─┘   └───┘   └───┘    │
│               │                       │
│            pointer                    │
│                                       │
│ Algorithm:                            │
│ 1. If R=0: Replace this page          │
│ 2. If R=1: Set R=0, move pointer      │
│ 3. Repeat until victim found          │
└───────────────────────────────────────┘
```

**Enhanced Second Chance:**
Menggunakan (Reference bit, Modified bit):
| Class | (R, M) | Description | Priority |
|-------|--------|-------------|----------|
| 0 | (0, 0) | Not recently used, not modified | Best victim |
| 1 | (0, 1) | Not recently used, modified | Need write to disk |
| 2 | (1, 0) | Recently used, not modified | Might be used again |
| 3 | (1, 1) | Recently used, modified | Worst victim |

<div class="page-replace-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .page-replace-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .page-replace-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .page-replace-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .page-replace-viz h4 {
          color: #f3f4f6 !important;
        }
        .pr-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .pr-algo {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 12px;
        }
        html.dark .pr-algo {
          background: #111827;
        }
        .pr-algo-title {
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 10px;
          padding: 5px;
          border-radius: 4px;
          color: white;
        }
        .pr-fifo-title {
          background: #e74c3c;
        }
        .pr-lru-title {
          background: #3498db;
        }
        .pr-ref-string {
          font-size: 0.65rem;
          color: #666;
          text-align: center;
          margin-bottom: 8px;
        }
        html.dark .pr-ref-string {
          color: #9ca3af;
        }
        .pr-frames {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .pr-step {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.6rem;
        }
        .pr-step-ref {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #9b59b6;
          color: white;
          border-radius: 4px;
          font-weight: 600;
        }
        html.dark .pr-step-ref {
          background: #a855f7;
        }
        .pr-step-frames {
          display: flex;
          gap: 2px;
        }
        .pr-frame {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          border-radius: 3px;
          font-size: 0.6rem;
          background: white;
          color: #2c3e50;
        }
        html.dark .pr-frame {
          background: #374151;
          border-color: #4b5563;
          color: #f3f4f6;
        }
        .pr-frame.new {
          background: #27ae60;
          color: white;
          border-color: #27ae60;
        }
        .pr-frame.victim {
          background: #e74c3c;
          color: white;
          border-color: #e74c3c;
        }
        .pr-fault {
          font-size: 0.55rem;
          color: #e74c3c;
          font-weight: 600;
        }
        html.dark .pr-fault {
          color: #f87171;
        }
        .pr-result {
          margin-top: 10px;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 8px;
          border-radius: 4px;
        }
        .pr-result-fifo {
          background: #fdecea;
          color: #c0392b;
        }
        html.dark .pr-result-fifo {
          background: #450a0a;
          color: #fca5a5;
        }
        .pr-result-lru {
          background: #e8f6f3;
          color: #1e8449;
        }
        html.dark .pr-result-lru {
          background: #052e16;
          color: #86efac;
        }
        @media (max-width: 500px) {
          .pr-comparison {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 640px) {
          .page-replace-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Perbandingan FIFO vs LRU (3 Frames, Reference: 1,2,3,4,1,2,5,1,2,3)</h4>

<div class="pr-comparison">
    <div class="pr-algo">
      <div class="pr-algo-title pr-fifo-title">FIFO</div>
      <div class="pr-frames">
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame new">1</div><div class="pr-frame">-</div><div class="pr-frame">-</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">1</div><div class="pr-frame new">2</div><div class="pr-frame">-</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">3</div><div class="pr-step-frames"><div class="pr-frame">1</div><div class="pr-frame">2</div><div class="pr-frame new">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">4</div><div class="pr-step-frames"><div class="pr-frame victim">4</div><div class="pr-frame">2</div><div class="pr-frame">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame">4</div><div class="pr-frame victim">1</div><div class="pr-frame">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">4</div><div class="pr-frame">1</div><div class="pr-frame victim">2</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">5</div><div class="pr-step-frames"><div class="pr-frame victim">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span style="color:#27ae60">✓</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span style="color:#27ae60">✓</span></div>
        <div class="pr-step"><div class="pr-step-ref">3</div><div class="pr-step-frames"><div class="pr-frame">5</div><div class="pr-frame victim">3</div><div class="pr-frame">2</div></div><span class="pr-fault">F</span></div>
      </div>
      <div class="pr-result pr-result-fifo">Page Faults: 8</div>
    </div>
    <div class="pr-algo">
      <div class="pr-algo-title pr-lru-title">LRU</div>
      <div class="pr-frames">
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame new">1</div><div class="pr-frame">-</div><div class="pr-frame">-</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">1</div><div class="pr-frame new">2</div><div class="pr-frame">-</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">3</div><div class="pr-step-frames"><div class="pr-frame">1</div><div class="pr-frame">2</div><div class="pr-frame new">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">4</div><div class="pr-step-frames"><div class="pr-frame victim">4</div><div class="pr-frame">2</div><div class="pr-frame">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame">4</div><div class="pr-frame victim">1</div><div class="pr-frame">3</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">4</div><div class="pr-frame">1</div><div class="pr-frame victim">2</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">5</div><div class="pr-step-frames"><div class="pr-frame victim">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span class="pr-fault">F</span></div>
        <div class="pr-step"><div class="pr-step-ref">1</div><div class="pr-step-frames"><div class="pr-frame">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span style="color:#27ae60">✓</span></div>
        <div class="pr-step"><div class="pr-step-ref">2</div><div class="pr-step-frames"><div class="pr-frame">5</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span style="color:#27ae60">✓</span></div>
        <div class="pr-step"><div class="pr-step-ref">3</div><div class="pr-step-frames"><div class="pr-frame victim">3</div><div class="pr-frame">1</div><div class="pr-frame">2</div></div><span class="pr-fault">F</span></div>
      </div>
      <div class="pr-result pr-result-lru">Page Faults: 8</div>
    </div>
  </div>
</div>

### Thrashing

**Thrashing** terjadi ketika sistem menghabiskan lebih banyak waktu untuk paging daripada eksekusi.

<div class="thrashing-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .thrashing-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .thrashing-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .thrashing-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .thrashing-viz h4 {
          color: #f3f4f6 !important;
        }
        .th-svg-container {
          width: 100%;
          height: 200px;
        }
        .th-svg {
          width: 100%;
          height: 100%;
        }
        .th-axis {
          stroke: #95a5a6;
          stroke-width: 1.5;
        }
        html.dark .th-axis {
          stroke: #6b7280;
        }
        .th-curve {
          fill: none;
          stroke: #3498db;
          stroke-width: 3;
        }
        html.dark .th-curve {
          stroke: #60a5fa;
        }
        .th-zone-good {
          fill: #27ae60;
          opacity: 0.15;
        }
        .th-zone-bad {
          fill: #e74c3c;
          opacity: 0.15;
        }
        .th-label {
          font-size: 0.65rem;
          fill: #2c3e50;
        }
        html.dark .th-label {
          fill: #f3f4f6;
        }
        .th-annotation {
          font-size: 0.6rem;
          fill: #666;
        }
        html.dark .th-annotation {
          fill: #9ca3af;
        }
        .th-warning {
          margin-top: 10px;
          padding: 10px;
          background: #fef3c7;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #92400e;
          border-left: 4px solid #f59e0b;
        }
        html.dark .th-warning {
          background: #451a03;
          color: #fef3c7;
        }
        @media (min-width: 640px) {
          .thrashing-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
          .th-svg-container {
            height: 220px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Thrashing: CPU Utilization vs Degree of Multiprogramming</h4>

<div class="th-svg-container">
    <svg class="th-svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
      <!-- Zones -->
      <rect x="50" y="20" width="150" height="150" class="th-zone-good"/>
      <rect x="200" y="20" width="170" height="150" class="th-zone-bad"/>
      <line x1="50" y1="170" x2="370" y2="170" class="th-axis"/>
      <line x1="50" y1="170" x2="50" y2="20" class="th-axis"/>
      <path d="M 50 170 Q 80 150, 100 120 Q 130 70, 170 45 Q 200 35, 220 40 Q 250 55, 280 100 Q 310 140, 360 160" class="th-curve"/>
      <circle cx="200" cy="37" r="5" fill="#27ae60"/>
      <line x1="200" y1="42" x2="200" y2="170" stroke="#27ae60" stroke-width="1" stroke-dasharray="4,4"/>
      <circle cx="250" cy="55" r="5" fill="#e74c3c"/>
      <text x="210" y="185" class="th-label" text-anchor="middle">Degree of Multiprogramming</text>
      <text x="25" y="100" class="th-label" text-anchor="middle" transform="rotate(-90, 25, 100)">CPU Utilization</text>
      <text x="50" y="30" class="th-label">100%</text>
      <text x="50" y="95" class="th-label">50%</text>
      <text x="50" y="168" class="th-label">0%</text>
      <text x="120" y="60" class="th-annotation" fill="#27ae60" font-weight="600">Optimal</text>
      <text x="200" y="25" class="th-annotation" fill="#27ae60" font-weight="600">Peak</text>
      <text x="265" y="45" class="th-annotation" fill="#e74c3c" font-weight="600">Thrashing!</text>
      <text x="310" y="120" class="th-annotation" fill="#e74c3c">↓ CPU drops</text>
      <text x="310" y="135" class="th-annotation" fill="#e74c3c">   due to</text>
      <text x="310" y="150" class="th-annotation" fill="#e74c3c">   page faults</text>
    </svg>
  </div>
  
  <div class="th-warning">
    <strong>⚠ Thrashing:</strong> Terlalu banyak proses → tidak cukup frame per proses → page fault terus-menerus → CPU sibuk swap bukan eksekusi → performa anjlok!
  </div>
</div>

**Penyebab:**

- Terlalu banyak proses
- Tidak cukup frame per proses
- Working set > available memory

**Working Set Model:**
$$WS(t, \Delta) = \text{pages referenced in past } \Delta \text{ time units}$$

Jika $\sum WS_i > \text{total frames}$ → thrashing

**Solusi:**

- Suspend processes
- Increase RAM
- Use local replacement (proses hanya affect frame-nya sendiri)

### Memory-Mapped Files

Map file langsung ke virtual address space:

```c
// Memory-mapped file I/O
int fd = open("file.txt", O_RDWR);
char *addr = mmap(NULL, file_size, PROT_READ|PROT_WRITE,
                  MAP_SHARED, fd, 0);

// Access file like memory
addr[0] = 'H';
addr[1] = 'i';

// Changes automatically written to file
munmap(addr, file_size);
close(fd);
```

**Keuntungan:**

- No explicit read/write system calls
- Shared memory between processes
- Efficient for random access

### Copy-on-Write (COW)

Optimisasi untuk `fork()`:

```
Before fork():
┌─────────────┐     ┌─────────────┐
│  Parent     │────▶│   Pages     │
│  Process    │     │  (shared)   │
└─────────────┘     └─────────────┘

After fork() - COW:
┌─────────────┐     ┌─────────────┐
│  Parent     │────▶│   Pages     │◀───┐
│  Process    │     │ (read-only) │    │
└─────────────┘     └─────────────┘    │
                                       │
┌─────────────┐                        │
│  Child      │────────────────────────┘
│  Process    │  (shares same pages)
└─────────────┘

After write by child:
┌─────────────┐     ┌─────────────┐
│  Parent     │────▶│   Page A    │
│  Process    │     └─────────────┘
└─────────────┘
                    ┌─────────────┐
┌─────────────┐     │  Page A'    │  ← Copy created
│  Child      │────▶│  (modified) │
│  Process    │     └─────────────┘
└─────────────┘
```

Only copy page when modified → save memory and time!

---

## 9. File System

### Konsep File

**File** adalah named collection of related information yang disimpan di secondary storage.

**File Attributes:**
| Attribute | Deskripsi |
|-----------|-----------|
| **Name** | Human-readable identifier |
| **Type** | Extension (OS-dependent) |
| **Location** | Pointer ke lokasi di disk |
| **Size** | Ukuran dalam bytes |
| **Protection** | Access rights (rwx) |
| **Time** | Created, modified, accessed |
| **Owner** | User ID |

**File Operations:**

- Create, Delete, Open, Close
- Read, Write, Seek (reposition)
- Truncate, Append
- Get/Set attributes

### Directory Structure

**Single-Level Directory:**

```
┌─────────────────────────────────────────────┐
│               Root Directory                 │
├─────┬─────┬─────┬─────┬─────┬─────┬─────────┤
│file1│file2│file3│file4│file5│file6│  ...    │
└─────┴─────┴─────┴─────┴─────┴─────┴─────────┘
```

- Sederhana, tapi naming collision

**Two-Level Directory:**

```
┌─────────────────────────────────────────────┐
│            Master Directory                  │
├─────────────────┬───────────────────────────┤
│     User 1      │        User 2             │
├─────┬─────┬─────┼─────┬─────┬───────────────┤
│file1│file2│file3│file1│file2│  ...          │
└─────┴─────┴─────┴─────┴─────┴───────────────┘
```

**Hierarchical (Tree) Directory:**

```
                    /
          ┌─────────┼─────────┐
         bin      home      etc
          │    ┌───┴───┐     │
         ls   alice   bob   passwd
              │       │
          documents  code
              │       │
           report.txt main.c
```

**Acyclic-Graph Directory:**
Memungkinkan shared files/directories (hard links, symbolic links).

### Path Names

**Absolute Path**: Dari root directory

```
/home/alice/documents/report.txt
```

**Relative Path**: Dari current directory

```
./documents/report.txt
../bob/code/main.c
```

### File System Implementation

#### Disk Layout

```
┌──────────────────────────────────────────────────────┐
│ Boot │ Super │ Free Space │ Inode  │    Data        │
│ Block│ Block │ Management │ Table  │    Blocks      │
└──────┴───────┴────────────┴────────┴────────────────┘
```

| Block           | Deskripsi                                    |
| --------------- | -------------------------------------------- |
| **Boot Block**  | Bootstrap code untuk boot OS                 |
| **Super Block** | Metadata filesystem (size, #blocks, #inodes) |
| **Free Space**  | Bitmap atau linked list untuk free blocks    |
| **Inode Table** | Array of inodes (file metadata)              |
| **Data Blocks** | Actual file contents                         |

#### Inode (Index Node)

```
┌────────────────────────────────────────────┐
│                   INODE                     │
├────────────────────────────────────────────┤
│ Mode (permissions)          : rwxr-xr-x    │
│ Link count                  : 2            │
│ Owner UID                   : 1000         │
│ Group GID                   : 1000         │
│ File size                   : 4096 bytes   │
│ Access time                 : ...          │
│ Modify time                 : ...          │
│ Change time                 : ...          │
├────────────────────────────────────────────┤
│ Direct blocks (12)          : [5,8,12,...] │
│ Single indirect             : [ptr→block]  │
│ Double indirect             : [ptr→ptr→b]  │
│ Triple indirect             : [ptr→ptr→...]│
└────────────────────────────────────────────┘
```

**Block Addressing:**

<div class="inode-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .inode-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .inode-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .inode-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .inode-viz h4 {
          color: #f3f4f6 !important;
        }
        .in-svg-container {
          width: 100%;
          height: 220px;
        }
        .in-svg {
          width: 100%;
          height: 100%;
        }
        .in-inode {
          fill: #9b59b6;
          stroke: #8e44ad;
          stroke-width: 2;
        }
        html.dark .in-inode {
          fill: #7c3aed;
          stroke: #6d28d9;
        }
        .in-pointer {
          fill: #f39c12;
          stroke: #e67e22;
          stroke-width: 1.5;
        }
        html.dark .in-pointer {
          fill: #f59e0b;
          stroke: #d97706;
        }
        .in-data {
          fill: #3498db;
          stroke: #2980b9;
          stroke-width: 1.5;
        }
        html.dark .in-data {
          fill: #3b82f6;
          stroke: #2563eb;
        }
        .in-arrow {
          fill: none;
          stroke: #666;
          stroke-width: 1.5;
          marker-end: url(#inArrow);
        }
        html.dark .in-arrow {
          stroke: #9ca3af;
        }
        .in-label {
          font-size: 0.55rem;
          fill: white;
          text-anchor: middle;
          font-weight: 500;
        }
        .in-desc {
          font-size: 0.5rem;
          fill: #666;
          text-anchor: start;
        }
        html.dark .in-desc {
          fill: #9ca3af;
        }
        .in-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .in-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .in-legend-item {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .inode-viz {
            max-width: 650px;
            padding: 1.5rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Inode Block Addressing (Direct, Single, Double, Triple Indirect)</h4>

<div class="in-svg-container">
    <svg class="in-svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="inArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#666"/>
        </marker>
      </defs>
      <!-- Inode -->
      <rect x="10" y="20" width="70" height="165" rx="5" class="in-inode"/>
      <text x="45" y="38" class="in-label">INODE</text>
      <line x1="15" y1="45" x2="75" y2="45" stroke="white" stroke-width="1"/>
      <!-- Direct blocks in inode -->
      <rect x="15" y="50" width="60" height="12" rx="2" fill="#27ae60"/>
      <text x="45" y="59" class="in-label" style="font-size:0.45rem;">Direct 0-11</text>
      <rect x="15" y="67" width="60" height="12" rx="2" fill="#f39c12"/>
      <text x="45" y="76" class="in-label" style="font-size:0.45rem;">Single Ind.</text>
      <rect x="15" y="84" width="60" height="12" rx="2" fill="#e67e22"/>
      <text x="45" y="93" class="in-label" style="font-size:0.45rem;">Double Ind.</text>
      <rect x="15" y="101" width="60" height="12" rx="2" fill="#e74c3c"/>
      <text x="45" y="110" class="in-label" style="font-size:0.45rem;">Triple Ind.</text>
      <!-- Direct arrows to data -->
      <path d="M 80 56 L 110 35" class="in-arrow"/>
      <rect x="115" y="25" width="35" height="20" rx="3" class="in-data"/>
      <text x="132" y="38" class="in-label" style="font-size:0.4rem;">Data</text>
      <text x="155" y="38" class="in-desc">← 12 blocks = 48KB</text>
      <!-- Single indirect -->
      <path d="M 80 73 L 110 73" class="in-arrow"/>
      <rect x="115" y="63" width="35" height="20" rx="3" class="in-pointer"/>
      <text x="132" y="76" class="in-label" style="font-size:0.4rem;">Ptrs</text>
      <path d="M 155 73 L 185 73" class="in-arrow"/>
      <rect x="190" y="63" width="35" height="20" rx="3" class="in-data"/>
      <text x="207" y="76" class="in-label" style="font-size:0.4rem;">Data</text>
      <text x="230" y="76" class="in-desc">← 1024 blocks = 4MB</text>
      <!-- Double indirect -->
      <path d="M 80 90 L 110 110" class="in-arrow"/>
      <rect x="115" y="100" width="35" height="20" rx="3" class="in-pointer"/>
      <text x="132" y="113" class="in-label" style="font-size:0.4rem;">Ptrs</text>
      <path d="M 155 110 L 185 110" class="in-arrow"/>
      <rect x="190" y="100" width="35" height="20" rx="3" class="in-pointer"/>
      <text x="207" y="113" class="in-label" style="font-size:0.4rem;">Ptrs</text>
      <path d="M 230 110 L 260 110" class="in-arrow"/>
      <rect x="265" y="100" width="35" height="20" rx="3" class="in-data"/>
      <text x="282" y="113" class="in-label" style="font-size:0.4rem;">Data</text>
      <text x="305" y="113" class="in-desc">← 4GB</text>
      <!-- Triple indirect -->
      <path d="M 80 107 L 110 150" class="in-arrow"/>
      <rect x="115" y="140" width="30" height="18" rx="3" class="in-pointer"/>
      <text x="130" y="152" class="in-label" style="font-size:0.35rem;">Ptrs</text>
      <path d="M 148 150 L 168 150" class="in-arrow"/>
      <rect x="172" y="140" width="30" height="18" rx="3" class="in-pointer"/>
      <text x="187" y="152" class="in-label" style="font-size:0.35rem;">Ptrs</text>
      <path d="M 205 150 L 225 150" class="in-arrow"/>
      <rect x="229" y="140" width="30" height="18" rx="3" class="in-pointer"/>
      <text x="244" y="152" class="in-label" style="font-size:0.35rem;">Ptrs</text>
      <path d="M 262 150 L 282 150" class="in-arrow"/>
      <rect x="286" y="140" width="30" height="18" rx="3" class="in-data"/>
      <text x="301" y="152" class="in-label" style="font-size:0.35rem;">Data</text>
      <text x="320" y="152" class="in-desc">← 4TB</text>
    </svg>
  </div>
  
  <div class="in-legend">
    <div class="in-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#9b59b6;border-radius:2px;"></span> Inode
    </div>
    <div class="in-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#f39c12;border-radius:2px;"></span> Pointer Block
    </div>
    <div class="in-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#3498db;border-radius:2px;"></span> Data Block
    </div>
  </div>
</div>

**Maximum File Size (block = 4KB, pointer = 4 bytes):**

- Direct: $12 \times 4\text{KB} = 48\text{KB}$
- Single: $1024 \times 4\text{KB} = 4\text{MB}$
- Double: $1024^2 \times 4\text{KB} = 4\text{GB}$
- Triple: $1024^3 \times 4\text{KB} = 4\text{TB}$

#### Directory Implementation

Directory adalah file khusus yang berisi list of (name, inode number):

```
┌──────────────────────────────────────┐
│           Directory File             │
├──────────────────────┬───────────────┤
│       Name           │  Inode Number │
├──────────────────────┼───────────────┤
│  "."                 │      42       │ (current dir)
│  ".."                │      15       │ (parent dir)
│  "report.txt"        │     128       │
│  "code"              │      89       │ (subdirectory)
│  "image.png"         │     156       │
└──────────────────────┴───────────────┘
```

### File Allocation Methods

#### 1. Contiguous Allocation

```
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│    │ A  │ A  │ A  │    │ B  │ B  │    │ C  │ C  │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
  0    1    2    3    4    5    6    7    8    9

Directory: file → (start, length)
A → (1, 3)
B → (5, 2)
C → (8, 2)
```

| Pros                    | Cons                   |
| ----------------------- | ---------------------- |
| Simple                  | External fragmentation |
| Sequential access cepat | Sulit grow file        |
| Random access cepat     | Perlu compaction       |

#### 2. Linked Allocation

```
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ A3 │    │ B2 │    │ A1 │ B1 │    │    │ A2 │    │
│→8  │    │→-1 │    │→0  │→2  │    │    │→4  │    │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
  0    1    2    3    4    5    6    7    8    9

Directory: file → start
A → 4  (4→8→0→end)
B → 5  (5→2→end)
```

| Pros                      | Cons                                  |
| ------------------------- | ------------------------------------- |
| No external fragmentation | Random access lambat                  |
| File bisa grow easily     | Pointer overhead                      |
|                           | Reliability (broken link = lost data) |

**FAT (File Allocation Table):**

```
    FAT Table              Disk Blocks
┌─────┬─────┐          ┌─────┐
│  0  │  8  │──────────│  A3 │
│  1  │ -1  │          ├─────┤
│  2  │ EOF │          │  B2 │
│  3  │ -1  │          ├─────┤
│  4  │  0  │──────────│     │
│  5  │  2  │          ├─────┤
│  6  │ -1  │          │  A1 │
│  7  │ -1  │          ├─────┤
│  8  │  4  │──────────│  B1 │
└─────┴─────┘          └─────┘
```

#### 3. Indexed Allocation

```
Index Block for File A:     Data Blocks:
┌─────┐                    ┌─────┐
│  4  │───────────────────▶│Data0│ block 4
│  8  │───────────────────▶│Data1│ block 8
│  0  │───────────────────▶│Data2│ block 0
│ -1  │                    └─────┘
└─────┘

Directory: file → index block
```

| Pros                      | Cons                              |
| ------------------------- | --------------------------------- |
| Random access cepat       | Index block overhead              |
| No external fragmentation | Limited file size per index block |

### Free Space Management

**1. Bitmap (Bit Vector):**

```
Block:  0  1  2  3  4  5  6  7  8  9
Bitmap: 0  1  1  1  0  1  1  0  1  1
        │           │        │
      free       free      free
```

**2. Linked List:**

```
Free List Head → Block 0 → Block 4 → Block 7 → NULL
```

### Journaling File System

**Problem**: Crash during write → inconsistent state

**Solution**: Write-ahead logging

```
Transaction:
1. Write to journal (log):
   "Delete file X from directory Y"
   "Mark blocks 5,6,7 as free"

2. Apply changes to disk

3. Mark transaction as complete in journal

4. (Periodically) Clear old journal entries

Recovery:
- Replay uncommitted transactions from journal
- Or rollback incomplete transactions
```

**Journaling Modes:**
| Mode | Journal Contains | Consistency | Performance |
|------|-----------------|-------------|-------------|
| **Writeback** | Metadata only | Low | Fast |
| **Ordered** | Metadata (data first) | Medium | Medium |
| **Journal** | Metadata + Data | High | Slow |

### Virtual File System (VFS)

**VFS** adalah abstraction layer yang menyediakan interface seragam untuk berbagai filesystem.

```
┌─────────────────────────────────────────────────────┐
│                  User Applications                   │
└───────────────────────┬─────────────────────────────┘
                        │ POSIX API (open, read, write)
                        ▼
┌─────────────────────────────────────────────────────┐
│              Virtual File System (VFS)               │
│  ┌──────────────────────────────────────────────┐   │
│  │ vnode, dentry, superblock, file operations   │   │
│  └──────────────────────────────────────────────┘   │
└───────────┬──────────────┬──────────────┬───────────┘
            │              │              │
            ▼              ▼              ▼
      ┌─────────┐    ┌─────────┐    ┌─────────┐
      │  ext4   │    │  NTFS   │    │   NFS   │
      │  driver │    │  driver │    │  driver │
      └────┬────┘    └────┬────┘    └────┬────┘
           │              │              │
      ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
      │  Disk   │    │  Disk   │    │ Network │
      └─────────┘    └─────────┘    └─────────┘
```

### Common File Systems

| File System | OS      | Max File Size | Max Volume |            Features |
| ----------- | ------- | ------------: | ---------: | ------------------: |
| **ext4**    | Linux   |         16 TB |       1 EB | Journaling, extents |
| **XFS**     | Linux   |          8 EB |       8 EB |    High performance |
| **Btrfs**   | Linux   |         16 EB |      16 EB |      COW, snapshots |
| **NTFS**    | Windows |         16 EB |      16 EB |     Journaling, ACL |
| **APFS**    | macOS   |          8 EB |       8 EB |     COW, encryption |
| **FAT32**   | All     |          4 GB |       2 TB |  Simple, compatible |
| **exFAT**   | All     |         16 EB |     128 PB |     Flash optimized |

---

## 10. Sistem I/O

### I/O Hardware

**Device Categories:**
| Category | Examples | Characteristics |
|----------|----------|-----------------|
| **Block Devices** | HDD, SSD, USB drive | Fixed-size blocks, seekable |
| **Character Devices** | Keyboard, mouse, serial | Stream of characters |
| **Network Devices** | Ethernet, WiFi | Packet-based |

**I/O Port vs Memory-Mapped I/O:**

```
Port-Mapped I/O:                Memory-Mapped I/O:
┌────────────────┐              ┌────────────────┐
│      CPU       │              │      CPU       │
└───────┬────────┘              └───────┬────────┘
        │                               │
   ┌────┴────┐                   ┌──────┴──────┐
   │ I/O Bus │                   │ Memory Bus  │
   └────┬────┘                   └──────┬──────┘
        │                               │
┌───────┴───────┐              ┌────────┴────────┐
│ Device Ports  │              │     Memory      │
│ (0x60, 0x64)  │              │ ┌────────────┐  │
└───────────────┘              │ │ RAM        │  │
                               │ ├────────────┤  │
Special I/O instructions       │ │ Device Regs│  │
(IN, OUT)                      │ │ 0xF0000000 │  │
                               │ └────────────┘  │
                               └─────────────────┘
                               Normal memory instructions
```

### I/O Methods

#### 1. Polling (Programmed I/O)

CPU terus-menerus check device status.

```c
// Write character to device
while (status_register & BUSY)
    ;  // Busy wait
data_register = character;
command_register = WRITE;
```

```
CPU          Device
 │              │
 │──check status│
 │◀────busy─────│
 │──check status│
 │◀────busy─────│
 │──check status│
 │◀────ready────│
 │──write data──│▶
 │              │
```

**Pros**: Simple, low latency untuk fast devices
**Cons**: CPU waste time waiting

#### 2. Interrupt-Driven I/O

CPU melakukan kerja lain, device interrupt ketika siap.

```
CPU              Device
 │                 │
 │──start I/O──────│▶
 │                 │ (device working)
 │ (do other work) │
 │                 │
 │◀───interrupt────│
 │──read data──────│
 │                 │
```

**Interrupt Handling:**

```
1. Device raises interrupt (IRQ)
2. CPU finishes current instruction
3. CPU saves state (registers, PC)
4. CPU jumps to Interrupt Handler
5. Handler processes interrupt
6. Handler acknowledges interrupt
7. CPU restores state
8. CPU resumes execution
```

#### 3. Direct Memory Access (DMA)

DMA controller transfers data directly between device and memory.

```
       ┌─────────────────────────────────────────┐
       │                   CPU                    │
       │ 1. Setup DMA    4. Handle interrupt     │
       └────────┬────────────────┬───────────────┘
                │                ▲
           Setup│            Interrupt
                ▼                │
       ┌────────────────────────────────────────┐
       │           DMA Controller               │
       │                                        │
       │  2. Transfer data (no CPU involvement) │
       │     Device ←→ Memory                   │
       │                                        │
       │  3. Raise interrupt when done          │
       └────────┬────────────────┬──────────────┘
                │                │
                ▼                ▼
         ┌──────────┐     ┌──────────┐
         │  Device  │     │  Memory  │
         └──────────┘     └──────────┘
```

**DMA Transfer Steps:**

1. CPU programs DMA: source, destination, count
2. DMA takes over bus, transfers data
3. DMA interrupts CPU when complete
4. CPU handles interrupt

<div class="io-compare-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .io-compare-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .io-compare-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .io-compare-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .io-compare-viz h4 {
          color: #f3f4f6 !important;
        }
        .io-svg-container {
          width: 100%;
          height: 200px;
        }
        .io-svg {
          width: 100%;
          height: 100%;
        }
        .io-cpu-busy {
          fill: #e74c3c;
        }
        html.dark .io-cpu-busy {
          fill: #dc2626;
        }
        .io-cpu-free {
          fill: #27ae60;
        }
        html.dark .io-cpu-free {
          fill: #22c55e;
        }
        .io-cpu-wait {
          fill: #f39c12;
        }
        html.dark .io-cpu-wait {
          fill: #f59e0b;
        }
        .io-transfer {
          fill: #3498db;
        }
        html.dark .io-transfer {
          fill: #3b82f6;
        }
        .io-label {
          font-size: 0.6rem;
          fill: #2c3e50;
        }
        html.dark .io-label {
          fill: #f3f4f6;
        }
        .io-method {
          font-size: 0.65rem;
          fill: #2c3e50;
          font-weight: 600;
        }
        html.dark .io-method {
          fill: #f3f4f6;
        }
        .io-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .io-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .io-legend-item {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .io-compare-viz {
            max-width: 600px;
            padding: 1.5rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Perbandingan I/O Methods: CPU Utilization</h4>

<div class="io-svg-container">
    <svg class="io-svg" viewBox="0 0 380 180" preserveAspectRatio="xMidYMid meet">
      <!-- Timeline labels -->
      <text x="60" y="15" class="io-label">Time →</text>
      <!-- Method 1: Polling -->
      <text x="10" y="45" class="io-method">Polling</text>
      <rect x="60" y="30" width="300" height="25" fill="#f8f9fa" stroke="#ddd" rx="3"/>
      <!-- CPU busy polling (all red) -->
      <rect x="60" y="32" width="200" height="21" class="io-cpu-wait" rx="2"/>
      <rect x="260" y="32" width="40" height="21" class="io-transfer" rx="2"/>
      <rect x="300" y="32" width="58" height="21" class="io-cpu-busy" rx="2"/>
      <text x="140" y="47" class="io-label" fill="white">CPU busy-waiting...</text>
      <text x="320" y="47" class="io-label" fill="white">I/O</text>
      <!-- Method 2: Interrupt -->
      <text x="10" y="90" class="io-method">Interrupt</text>
      <rect x="60" y="75" width="300" height="25" fill="#f8f9fa" stroke="#ddd" rx="3"/>
      <!-- CPU does other work, then interrupt -->
      <rect x="60" y="77" width="40" height="21" class="io-cpu-busy" rx="2"/>
      <rect x="100" y="77" width="160" height="21" class="io-cpu-free" rx="2"/>
      <rect x="260" y="77" width="20" height="21" class="io-cpu-busy" rx="2"/>
      <rect x="280" y="77" width="40" height="21" class="io-transfer" rx="2"/>
      <rect x="320" y="77" width="38" height="21" class="io-cpu-busy" rx="2"/>
      <text x="75" y="92" class="io-label" fill="white">req</text>
      <text x="165" y="92" class="io-label" fill="white">CPU free (other work)</text>
      <text x="265" y="92" class="io-label" fill="white">int</text>
      <!-- Method 3: DMA -->
      <text x="10" y="135" class="io-method">DMA</text>
      <rect x="60" y="120" width="300" height="25" fill="#f8f9fa" stroke="#ddd" rx="3"/>
      <!-- CPU programs DMA, then free, then small interrupt -->
      <rect x="60" y="122" width="25" height="21" class="io-cpu-busy" rx="2"/>
      <rect x="85" y="122" width="230" height="21" class="io-cpu-free" rx="2"/>
      <rect x="315" y="122" width="15" height="21" class="io-cpu-busy" rx="2"/>
      <rect x="330" y="122" width="28" height="21" class="io-cpu-free" rx="2"/>
      <text x="70" y="137" class="io-label" fill="white">set</text>
      <text x="185" y="137" class="io-label" fill="white">CPU free (DMA handles transfer)</text>
      <text x="318" y="137" class="io-label" fill="white">i</text>
      <!-- Efficiency labels -->
      <text x="365" y="47" class="io-label" style="font-size:0.5rem;">Low</text>
      <text x="365" y="92" class="io-label" style="font-size:0.5rem;">Medium</text>
      <text x="365" y="137" class="io-label" style="font-size:0.5rem;">High</text>
      <!-- Efficiency header -->
      <text x="365" y="20" class="io-label" style="font-size:0.5rem;font-weight:600;">Efficiency</text>
    </svg>
  </div>
  
  <div class="io-legend">
    <div class="io-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#e74c3c;border-radius:2px;"></span> CPU I/O work
    </div>
    <div class="io-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#f39c12;border-radius:2px;"></span> CPU waiting
    </div>
    <div class="io-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#27ae60;border-radius:2px;"></span> CPU free
    </div>
    <div class="io-legend-item">
      <span style="display:inline-block;width:12px;height:12px;background:#3498db;border-radius:2px;"></span> Data transfer
    </div>
  </div>
</div>

### Device Drivers

**Driver** adalah software yang mengontrol specific device.

```
┌─────────────────────────────────────────────────┐
│              Application                         │
└────────────────────┬────────────────────────────┘
                     │ System Call (read, write)
                     ▼
┌─────────────────────────────────────────────────┐
│              Kernel I/O Subsystem                │
│  • Buffering  • Caching  • Scheduling           │
└────────────────────┬────────────────────────────┘
                     │ Uniform Driver Interface
                     ▼
┌───────────────┬───────────────┬─────────────────┐
│  Disk Driver  │ Network Driver│ Keyboard Driver │
└───────┬───────┴───────┬───────┴────────┬────────┘
        │               │                │
        ▼               ▼                ▼
   ┌─────────┐    ┌─────────┐      ┌─────────┐
   │  Disk   │    │   NIC   │      │ Keyboard│
   └─────────┘    └─────────┘      └─────────┘
```

### Disk Scheduling

Untuk HDD dengan mechanical arm, urutan akses mempengaruhi performance.

**Disk Structure:**

```
┌──────────────────────────────────────┐
│          Disk Platter                │
│                                      │
│    ╭────────────────────────────╮    │
│    │   Track 0 (outermost)      │    │
│    │  ╭──────────────────────╮  │    │
│    │  │      Track 1         │  │    │
│    │  │   ╭──────────────╮   │  │    │
│    │  │   │   Track 2    │   │  │    │
│    │  │   │     ...      │   │  │    │
│    │  ╰───┴──────────────┴───╯  │    │
│    ╰────────────────────────────╯    │
│                                      │
│         ← Head movement →            │
└──────────────────────────────────────┘
```

**Disk Scheduling Algorithms:**

Request Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head starts at: 53

#### 1. FCFS (First Come First Served)

```
Service order: 53→98→183→37→122→14→124→65→67
               ↓
             |----45----|
                       |----85----|
                                  |----146----|
                                              |----85----|
                                                         |----108----|
                                                                      |----110----|
                                                                                   |----59----|
                                                                                              |--2--|
Total head movement: 640 cylinders
```

#### 2. SSTF (Shortest Seek Time First)

Pilih request terdekat dari posisi head saat ini.

```
53→65→67→37→14→98→122→124→183

Total head movement: 236 cylinders
```

**Problem**: Starvation untuk request jauh dari head

#### 3. SCAN (Elevator Algorithm)

Head bergerak satu arah sampai ujung, lalu balik.

```
Direction: toward 0 first

53→37→14→0→65→67→98→122→124→183

   │
 0 ├───○───────────────────────────────────────────────────▶ 199
   │   14  37   53  65 67     98    122 124        183
   │   ↑   ↑    │   ↓  ↓      ↓      ↓   ↓          ↓
   │   └───┴────┘   │  │      │      │   │          │
   │                └──┴──────┴──────┴───┴──────────┘

Total head movement: 236 cylinders
```

#### 4. C-SCAN (Circular SCAN)

Saat sampai ujung, langsung jump ke ujung satunya.

```
53→65→67→98→122→124→183→199→0→14→37

         ────────────────────────▶
53  65 67  98   122 124    183  199
│   ↓  ↓   ↓     ↓   ↓      ↓    │
│   └──┴───┴─────┴───┴──────┴────┘
│                              │
└──────────────────────────────┘ (jump back to 0)
0   14  37
↓    ↓   ↓
└────┴───┘

Total head movement: 183 + 199 + 37 = 382 cylinders (but uniform wait)
```

#### 5. LOOK / C-LOOK

Sama seperti SCAN/C-SCAN tapi tidak pergi sampai ujung disk, hanya sampai request terjauh.

```
C-LOOK:
53→65→67→98→122→124→183→14→37

Total head movement: 130 + 169 + 23 = 322 cylinders
```

<div class="disk-sched-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .disk-sched-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .disk-sched-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .disk-sched-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .disk-sched-viz h4 {
          color: #f3f4f6 !important;
        }
        .ds-svg-container {
          width: 100%;
          height: 200px;
        }
        .ds-svg {
          width: 100%;
          height: 100%;
        }
        .ds-track {
          fill: none;
          stroke: #e0e0e0;
          stroke-width: 1;
        }
        html.dark .ds-track {
          stroke: #374151;
        }
        .ds-path-fcfs {
          fill: none;
          stroke: #e74c3c;
          stroke-width: 2;
        }
        .ds-path-sstf {
          fill: none;
          stroke: #27ae60;
          stroke-width: 2;
        }
        .ds-path-scan {
          fill: none;
          stroke: #3498db;
          stroke-width: 2;
        }
        .ds-point {
          r: 4;
        }
        .ds-point-fcfs { fill: #e74c3c; }
        .ds-point-sstf { fill: #27ae60; }
        .ds-point-scan { fill: #3498db; }
        .ds-label {
          font-size: 0.6rem;
          fill: #666;
          text-anchor: middle;
        }
        html.dark .ds-label {
          fill: #9ca3af;
        }
        .ds-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .ds-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #495057;
        }
        html.dark .ds-legend-item {
          color: #d1d5db;
        }
        .ds-result {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .ds-result-item {
          padding: 8px 15px;
          border-radius: 6px;
          text-align: center;
        }
        .ds-result-fcfs {
          background: #fdecea;
          color: #c0392b;
        }
        html.dark .ds-result-fcfs {
          background: #450a0a;
          color: #fca5a5;
        }
        .ds-result-sstf {
          background: #e8f6f3;
          color: #1e8449;
        }
        html.dark .ds-result-sstf {
          background: #052e16;
          color: #86efac;
        }
        .ds-result-scan {
          background: #e8f4f8;
          color: #1a5276;
        }
        html.dark .ds-result-scan {
          background: #0c4a6e;
          color: #bae6fd;
        }
        @media (min-width: 640px) {
          .disk-sched-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
          .ds-svg-container {
            height: 220px;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Perbandingan Disk Scheduling (Start: 53, Requests: 98, 183, 37, 122, 14, 124, 65, 67)</h4>

<div class="ds-svg-container">
    <svg class="ds-svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
      <!-- Track lines -->
      <line x1="20" y1="180" x2="380" y2="180" class="ds-track" stroke-width="2"/>
      <text x="20" y="195" class="ds-label">0</text>
      <text x="116" y="195" class="ds-label">53</text>
      <text x="200" y="195" class="ds-label">100</text>
      <text x="380" y="195" class="ds-label">199</text>
      <!-- Request positions on track -->
      <circle cx="44" cy="180" r="3" fill="#9b59b6"/> <!-- 14 -->
      <circle cx="90" cy="180" r="3" fill="#9b59b6"/> <!-- 37 -->
      <circle cx="116" cy="180" r="3" fill="#f39c12"/> <!-- 53 start -->
      <circle cx="141" cy="180" r="3" fill="#9b59b6"/> <!-- 65 -->
      <circle cx="147" cy="180" r="3" fill="#9b59b6"/> <!-- 67 -->
      <circle cx="206" cy="180" r="3" fill="#9b59b6"/> <!-- 98 -->
      <circle cx="250" cy="180" r="3" fill="#9b59b6"/> <!-- 122 -->
      <circle cx="254" cy="180" r="3" fill="#9b59b6"/> <!-- 124 -->
      <circle cx="354" cy="180" r="3" fill="#9b59b6"/> <!-- 183 -->
      <!-- FCFS Path (red) - 53→98→183→37→122→14→124→65→67 -->
      <path d="M 116 40 L 206 50 L 354 60 L 90 70 L 250 80 L 44 90 L 254 100 L 141 110 L 147 120" class="ds-path-fcfs" fill="none" stroke-dasharray="5,3"/>
      <!-- SSTF Path (green) - 53→65→67→37→14→98→122→124→183 -->
      <path d="M 116 40 L 141 50 L 147 60 L 90 70 L 44 80 L 206 90 L 250 100 L 254 110 L 354 120" class="ds-path-sstf" fill="none"/>
      <!-- SCAN Path (blue) - 53→37→14→0→65→67→98→122→124→183 -->
      <path d="M 116 40 L 90 50 L 44 60 L 20 70 L 141 90 L 147 100 L 206 110 L 250 120 L 254 130 L 354 140" class="ds-path-scan" fill="none" stroke-dasharray="8,4"/>
      <!-- Labels -->
      <text x="30" y="25" style="font-size: 0.6rem; fill: #f39c12; font-weight: 600;">Start: 53</text>
    </svg>
  </div>
  
  <div class="ds-legend">
    <div class="ds-legend-item">
      <svg width="20" height="10"><line x1="0" y1="5" x2="20" y2="5" stroke="#e74c3c" stroke-width="2" stroke-dasharray="3,2"/></svg> FCFS
    </div>
    <div class="ds-legend-item">
      <svg width="20" height="10"><line x1="0" y1="5" x2="20" y2="5" stroke="#27ae60" stroke-width="2"/></svg> SSTF
    </div>
    <div class="ds-legend-item">
      <svg width="20" height="10"><line x1="0" y1="5" x2="20" y2="5" stroke="#3498db" stroke-width="2" stroke-dasharray="5,3"/></svg> SCAN
    </div>
    <div class="ds-legend-item">
      <svg width="12" height="12"><circle cx="6" cy="6" r="4" fill="#9b59b6"/></svg> Request
    </div>
  </div>
  
  <div class="ds-result">
    <div class="ds-result-item ds-result-fcfs">FCFS: <strong>640</strong> cylinders</div>
    <div class="ds-result-item ds-result-sstf">SSTF: <strong>236</strong> cylinders</div>
    <div class="ds-result-item ds-result-scan">SCAN: <strong>236</strong> cylinders</div>
  </div>
</div>

### Buffering and Caching

**Buffer**: Temporary storage during transfer
**Cache**: Fast storage for frequently accessed data

```
┌──────────────────────────────────────────────────────────┐
│                      Application                          │
└─────────────────────────────┬────────────────────────────┘
                              │
              ┌───────────────▼───────────────┐
              │         User Buffer           │
              └───────────────┬───────────────┘
                              │ copy_from_user()
              ┌───────────────▼───────────────┐
              │       Kernel Buffer           │
              │        (Page Cache)           │
              └───────────────┬───────────────┘
                              │ DMA
              ┌───────────────▼───────────────┐
              │      Device Controller        │
              │          Buffer               │
              └───────────────┬───────────────┘
                              │
              ┌───────────────▼───────────────┐
              │           Disk                │
              └───────────────────────────────┘
```

**Double Buffering:**

```
Time 1: DMA fills Buffer A    │ CPU processes Buffer B
Time 2: DMA fills Buffer B    │ CPU processes Buffer A
Time 3: DMA fills Buffer A    │ CPU processes Buffer B
...
```

### RAID (Redundant Array of Independent Disks)

| Level       | Description                   | Redundancy   | Performance      | Capacity  |
| ----------- | ----------------------------- | ------------ | ---------------- | --------- |
| **RAID 0**  | Striping                      | None         | Read/Write ↑↑    | N disks   |
| **RAID 1**  | Mirroring                     | 1 disk fail  | Read ↑           | N/2 disks |
| **RAID 5**  | Striping + Distributed Parity | 1 disk fail  | Read ↑, Write ↓  | N-1 disks |
| **RAID 6**  | Double Parity                 | 2 disk fail  | Read ↑, Write ↓↓ | N-2 disks |
| **RAID 10** | Mirror + Stripe               | 1 per mirror | Read/Write ↑↑    | N/2 disks |

<div class="raid-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .raid-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .raid-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .raid-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .raid-viz h4 {
          color: #f3f4f6 !important;
        }
        .raid-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .raid-item {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 15px;
        }
        html.dark .raid-item {
          background: #111827;
        }
        .raid-title {
          text-align: center;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 12px;
          padding: 6px 12px;
          border-radius: 6px;
          color: white;
        }
        .raid-0-title { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .raid-1-title { background: linear-gradient(135deg, #3498db, #2980b9); }
        .raid-5-title { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .raid-10-title { background: linear-gradient(135deg, #27ae60, #1e8449); }
        .raid-disks {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .raid-disk {
          display: flex;
          flex-direction: column;
          gap: 3px;
          text-align: center;
        }
        .raid-disk-label {
          font-size: 0.6rem;
          color: #666;
          font-weight: 600;
        }
        html.dark .raid-disk-label {
          color: #9ca3af;
        }
        .raid-block {
          width: 40px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.55rem;
          font-weight: 600;
          border-radius: 4px;
          color: white;
        }
        .raid-data { background: #3498db; }
        .raid-mirror { background: #2ecc71; }
        .raid-parity { background: #e74c3c; }
        .raid-stripe-a { background: #e74c3c; }
        .raid-stripe-b { background: #f39c12; }
        .raid-stripe-c { background: #27ae60; }
        .raid-stripe-d { background: #9b59b6; }
        html.dark .raid-data { background: #2563eb; }
        html.dark .raid-mirror { background: #059669; }
        html.dark .raid-parity { background: #dc2626; }
        .raid-desc {
          font-size: 0.65rem;
          color: #555;
          text-align: center;
          margin-top: 8px;
          padding: 8px;
          background: white;
          border-radius: 6px;
        }
        html.dark .raid-desc {
          background: #1f2937;
          color: #d1d5db;
        }
        .raid-pros { color: #27ae60; }
        .raid-cons { color: #e74c3c; }
        @media (max-width: 600px) {
          .raid-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 640px) {
          .raid-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Perbandingan RAID Levels</h4>

<div class="raid-grid">
    <!-- RAID 0 -->
    <div class="raid-item">
      <div class="raid-title raid-0-title">RAID 0 - Striping</div>
      <div class="raid-disks">
        <div class="raid-disk">
          <span class="raid-disk-label">Disk 0</span>
          <div class="raid-block raid-stripe-a">A1</div>
          <div class="raid-block raid-stripe-b">B1</div>
          <div class="raid-block raid-stripe-c">C1</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">Disk 1</span>
          <div class="raid-block raid-stripe-a">A2</div>
          <div class="raid-block raid-stripe-b">B2</div>
          <div class="raid-block raid-stripe-c">C2</div>
        </div>
      </div>
      <div class="raid-desc">
        <span class="raid-pros">✓ Performa tinggi</span> | <span class="raid-cons">✗ No redundancy</span>
      </div>
    </div>
    <!-- RAID 1 -->
    <div class="raid-item">
      <div class="raid-title raid-1-title">RAID 1 - Mirroring</div>
      <div class="raid-disks">
        <div class="raid-disk">
          <span class="raid-disk-label">Disk 0</span>
          <div class="raid-block raid-data">A</div>
          <div class="raid-block raid-data">B</div>
          <div class="raid-block raid-data">C</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">Disk 1</span>
          <div class="raid-block raid-mirror">A'</div>
          <div class="raid-block raid-mirror">B'</div>
          <div class="raid-block raid-mirror">C'</div>
        </div>
      </div>
      <div class="raid-desc">
        <span class="raid-pros">✓ Full redundancy</span> | <span class="raid-cons">✗ 50% kapasitas</span>
      </div>
    </div>
    <!-- RAID 5 -->
    <div class="raid-item">
      <div class="raid-title raid-5-title">RAID 5 - Distributed Parity</div>
      <div class="raid-disks">
        <div class="raid-disk">
          <span class="raid-disk-label">D0</span>
          <div class="raid-block raid-data">A1</div>
          <div class="raid-block raid-data">B1</div>
          <div class="raid-block raid-data">C1</div>
          <div class="raid-block raid-parity">Dp</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D1</span>
          <div class="raid-block raid-data">A2</div>
          <div class="raid-block raid-data">B2</div>
          <div class="raid-block raid-parity">Cp</div>
          <div class="raid-block raid-data">D1</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D2</span>
          <div class="raid-block raid-data">A3</div>
          <div class="raid-block raid-parity">Bp</div>
          <div class="raid-block raid-data">C2</div>
          <div class="raid-block raid-data">D2</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D3</span>
          <div class="raid-block raid-parity">Ap</div>
          <div class="raid-block raid-data">B3</div>
          <div class="raid-block raid-data">C3</div>
          <div class="raid-block raid-data">D3</div>
        </div>
      </div>
      <div class="raid-desc">
        <span class="raid-pros">✓ 1 disk fail OK</span> | Capacity: N-1
      </div>
    </div>
    <!-- RAID 10 -->
    <div class="raid-item">
      <div class="raid-title raid-10-title">RAID 10 - Mirror + Stripe</div>
      <div class="raid-disks">
        <div class="raid-disk">
          <span class="raid-disk-label">D0</span>
          <div class="raid-block raid-stripe-a">A1</div>
          <div class="raid-block raid-stripe-b">B1</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D1</span>
          <div class="raid-block raid-mirror">A1'</div>
          <div class="raid-block raid-mirror">B1'</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D2</span>
          <div class="raid-block raid-stripe-c">A2</div>
          <div class="raid-block raid-stripe-d">B2</div>
        </div>
        <div class="raid-disk">
          <span class="raid-disk-label">D3</span>
          <div class="raid-block raid-mirror">A2'</div>
          <div class="raid-block raid-mirror">B2'</div>
        </div>
      </div>
      <div class="raid-desc">
        <span class="raid-pros">✓ Performa + Redundancy</span> | 50% kapasitas
      </div>
    </div>
  </div>
</div>

**Recovery pada RAID 5:** Jika Disk 1 gagal, data dapat direkonstruksi: `D1 = Dp XOR D2 XOR D3`

---

## 11. Security dan Protection

### Protection vs Security

| Protection                  | Security                                 |
| --------------------------- | ---------------------------------------- |
| Internal mechanism          | External threats                         |
| Control access to resources | Defend against attacks                   |
| Policies and mechanisms     | Confidentiality, Integrity, Availability |
| Who can do what             | How to ensure it                         |

### Protection Domain

**Domain** = set of (object, access-rights) pairs

```
Domain D1: { (File1, read), (File2, read/write), (Printer1, print) }
Domain D2: { (File1, execute), (File3, read) }
```

**Access Matrix:**

```
              │ File1    │ File2    │ File3    │ Printer1 │
──────────────┼──────────┼──────────┼──────────┼──────────┤
Domain 1      │ read     │ read     │          │ print    │
              │          │ write    │          │          │
──────────────┼──────────┼──────────┼──────────┼──────────┤
Domain 2      │ execute  │          │ read     │          │
──────────────┼──────────┼──────────┼──────────┼──────────┤
Domain 3      │ read     │ read     │ execute  │ print    │
              │ execute  │          │          │          │
```

### Access Control Implementation

#### 1. Access Control List (ACL)

Per-object list of (subject, rights).

```
File1.acl:
┌────────────────────────────┐
│ User: alice    │ rwx      │
│ User: bob      │ r--      │
│ Group: dev     │ r-x      │
│ Other          │ ---      │
└────────────────────────────┘
```

**Unix Permissions:**

```
-rwxr-xr-- 1 alice dev 4096 Jan 24 12:00 file.txt
 │││ │││ │││
 │││ │││ └┴┴─ Other: r--
 │││ └┴┴───── Group: r-x
 └┴┴───────── Owner: rwx

Octal: 754
```

**Special Permissions:**
| Bit | Name | Effect on File | Effect on Directory |
|-----|------|----------------|---------------------|
| **SetUID** (4) | Set User ID | Run as owner | - |
| **SetGID** (2) | Set Group ID | Run as group | Inherit group |
| **Sticky** (1) | Sticky Bit | - | Only owner can delete |

```bash
# SetUID example
-rwsr-xr-x root root /usr/bin/passwd
    ^
    SetUID - runs as root regardless of who executes
```

#### 2. Capability List

Per-subject list of (object, rights).

```
Alice's Capabilities:
┌─────────────────────────────────┐
│ Cap 1: (File1, rwx, key123)    │
│ Cap 2: (Printer1, print, key456)│
│ Cap 3: (Process2, signal, key789)│
└─────────────────────────────────┘
```

**ACL vs Capability:**
| ACL | Capability |
|-----|------------|
| Easy to see who has access to object | Easy to see what subject can access |
| Easy to revoke all access to object | Easy to transfer access rights |
| Hard to revoke user's access to all | Hard to revoke all access to object |

### Authentication

**Something you:**

- **Know**: Password, PIN
- **Have**: Token, smart card, phone
- **Are**: Fingerprint, face, iris

**Multi-Factor Authentication (MFA):** Combine 2+ factors

**Password Security:**

```
Storage: hash(password + salt)

┌──────────────────────────────────────────────────┐
│  Password: "secret123"                           │
│  Salt: "x7Km2p" (random per user)                │
│  Hash: bcrypt("secret123" + "x7Km2p")            │
│      = "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqh"│
└──────────────────────────────────────────────────┘
```

### Common Security Threats

#### 1. Buffer Overflow

<div class="overflow-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .overflow-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .overflow-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .overflow-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .overflow-viz h4 {
          color: #f3f4f6 !important;
        }
        .of-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        .of-stack {
          text-align: center;
        }
        .of-stack-title {
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #2c3e50;
        }
        html.dark .of-stack-title {
          color: #f3f4f6;
        }
        .of-svg {
          width: 150px;
          height: 220px;
        }
        .of-cell {
          stroke: #2c3e50;
          stroke-width: 2;
        }
        html.dark .of-cell {
          stroke: #6b7280;
        }
        .of-normal { fill: #ecf0f1; }
        .of-buffer { fill: #3498db; }
        .of-overflow { fill: #e74c3c; }
        .of-target { fill: #f39c12; }
        .of-malicious { fill: #c0392b; }
        html.dark .of-normal { fill: #374151; }
        html.dark .of-buffer { fill: #2563eb; }
        html.dark .of-overflow { fill: #dc2626; }
        html.dark .of-target { fill: #d97706; }
        .of-label {
          font-size: 0.55rem;
          fill: #2c3e50;
          text-anchor: middle;
        }
        html.dark .of-label {
          fill: #f3f4f6;
        }
        .of-arrow {
          fill: none;
          stroke: #e74c3c;
          stroke-width: 2;
          marker-end: url(#ofArrow);
        }
        .of-warning {
          margin-top: 12px;
          padding: 10px;
          background: #fef3cd;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #856404;
          border-left: 4px solid #f39c12;
        }
        html.dark .of-warning {
          background: #422006;
          color: #fbbf24;
          border-left-color: #f59e0b;
        }
        @media (min-width: 640px) {
          .overflow-viz {
            max-width: 550px;
            padding: 1.5rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Stack Buffer Overflow Attack</h4>

<div class="of-container">
    <div class="of-stack">
      <div class="of-stack-title">Normal Stack</div>
      <svg class="of-svg" viewBox="0 0 120 200">
        <text x="100" y="15" style="font-size:0.5rem;fill:#666;">High Addr</text>
        <rect x="10" y="20" width="80" height="25" rx="3" class="of-cell of-normal"/>
        <text x="50" y="37" class="of-label">Return Addr</text>
        <rect x="10" y="48" width="80" height="25" rx="3" class="of-cell of-normal"/>
        <text x="50" y="65" class="of-label">Saved EBP</text>
        <rect x="10" y="76" width="80" height="70" rx="3" class="of-cell of-buffer"/>
        <text x="50" y="115" class="of-label" fill="white">buffer[64]</text>
        <rect x="10" y="149" width="80" height="25" rx="3" class="of-cell of-normal"/>
        <text x="50" y="166" class="of-label">Local vars</text>
        <text x="100" y="180" style="font-size:0.5rem;fill:#666;">Low Addr</text>
        <!-- Arrow showing growth direction -->
        <text x="5" y="100" style="font-size:0.5rem;fill:#3498db;">↑ write</text>
      </svg>
    </div>
    <div class="of-stack">
      <div class="of-stack-title" style="color:#e74c3c;">After Overflow!</div>
      <svg class="of-svg" viewBox="0 0 120 200">
        <defs>
          <marker id="ofArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#e74c3c"/>
          </marker>
        </defs>
        <text x="100" y="15" style="font-size:0.5rem;fill:#666;">High Addr</text>
        <rect x="10" y="20" width="80" height="25" rx="3" class="of-cell of-malicious"/>
        <text x="50" y="37" class="of-label" fill="white">0xDEADBEEF</text>
        <rect x="10" y="48" width="80" height="25" rx="3" class="of-cell of-overflow"/>
        <text x="50" y="65" class="of-label" fill="white">AAAA...</text>
        <rect x="10" y="76" width="80" height="70" rx="3" class="of-cell of-overflow"/>
        <text x="50" y="115" class="of-label" fill="white">AAAA...</text>
        <rect x="10" y="149" width="80" height="25" rx="3" class="of-cell of-normal"/>
        <text x="50" y="166" class="of-label">Local vars</text>
        <text x="100" y="180" style="font-size:0.5rem;fill:#666;">Low Addr</text>
        <!-- Overflow arrow -->
        <path d="M 95 160 C 110 140 110 80 95 35" class="of-arrow"/>
        <text x="115" y="100" style="font-size:0.45rem;fill:#e74c3c;writing-mode:tb;">Overflow!</text>
      </svg>
    </div>
  </div>
  
  <div class="of-warning">
    <strong>⚠ Danger:</strong> Attacker overwrites Return Address dengan alamat malicious code → CPU jump ke kode attacker saat function return!
  </div>
</div>

```c
// Vulnerable code
void vulnerable(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // No bounds check!
}
```

**Protections:**

- **Stack Canaries**: Detect overflow before return
- **ASLR**: Randomize address layout
- **DEP/NX**: Non-executable stack
- **Safe functions**: `strncpy`, `snprintf`

#### 2. Privilege Escalation

Gaining higher privileges than authorized.

```
Normal User → Root/Admin access

Methods:
- Exploit SetUID binaries
- Kernel vulnerabilities
- Misconfigured services
```

#### 3. SQL Injection

```
Input: ' OR '1'='1' --
Query: SELECT * FROM users WHERE name='' OR '1'='1' --'
                                          ^^^^^^^^^
                                          Always true!
```

#### 4. Race Condition (TOCTOU)

Time-of-Check to Time-of-Use vulnerability.

```c
// Vulnerable pattern
if (access("file", W_OK) == 0) {  // Check
    // Window of vulnerability here!
    // Attacker can swap "file" with symlink
    file = open("file", O_WRONLY);  // Use
    write(file, data, len);
}
```

### Security Mechanisms

#### Sandboxing

Isolate untrusted code:

```
┌─────────────────────────────────────────────┐
│                  Host OS                     │
│  ┌───────────────────────────────────────┐  │
│  │              Sandbox                   │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │     Untrusted Application       │  │  │
│  │  │                                 │  │  │
│  │  │  Limited access to:             │  │  │
│  │  │  - Filesystem (chroot/jail)     │  │  │
│  │  │  - Network (filtered)           │  │  │
│  │  │  - System calls (seccomp)       │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**Technologies:**

- **chroot**: Filesystem isolation
- **seccomp**: System call filtering
- **Containers**: Docker, LXC
- **VMs**: Full isolation

#### Mandatory Access Control (MAC)

System-enforced policies (vs discretionary/DAC).

**SELinux/AppArmor:**

```
# SELinux policy example
allow httpd_t httpd_content_t : file { read getattr };
       ^         ^              ^      ^
       source    target         class  permissions
       domain    type
```

#### Encryption

**At Rest:** Disk encryption (LUKS, BitLocker, FileVault)
**In Transit:** TLS/SSL, VPN

```
Full Disk Encryption:
┌─────────────────────────────────────┐
│ Boot → Enter passphrase → Decrypt  │
│                                    │
│ ┌────────────────────────────────┐ │
│ │      Encrypted Partition       │ │
│ │  (all data encrypted with key) │ │
│ └────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Principle of Least Privilege

> "Every program and user should operate using the least set of privileges necessary to complete the job."

**Examples:**

- Web server doesn't need root
- User programs shouldn't access kernel memory
- Services run as dedicated users, not root

---

## 12. Virtualisasi

### Konsep Virtualisasi

**Virtualisasi** memungkinkan menjalankan beberapa OS/environment di satu hardware fisik.

```
┌─────────────────────────────────────────────────────────┐
│                     Hardware                             │
├─────────────────────────────────────────────────────────┤
│                   Hypervisor (VMM)                       │
├────────────────┬────────────────┬───────────────────────┤
│    VM 1        │    VM 2        │    VM 3               │
│ ┌───────────┐  │ ┌───────────┐  │ ┌───────────────────┐ │
│ │Guest OS   │  │ │Guest OS   │  │ │Guest OS           │ │
│ │ (Linux)   │  │ │ (Windows) │  │ │ (FreeBSD)         │ │
│ ├───────────┤  │ ├───────────┤  │ ├───────────────────┤ │
│ │   Apps    │  │ │   Apps    │  │ │   Apps            │ │
│ └───────────┘  │ └───────────┘  │ └───────────────────┘ │
└────────────────┴────────────────┴───────────────────────┘
```

### Tipe Hypervisor

#### Type 1 (Bare-Metal)

Langsung di atas hardware.

```
┌───────────────────────────────────┐
│       VM 1    │    VM 2          │
├───────────────┴──────────────────┤
│       Type 1 Hypervisor          │
│  (VMware ESXi, Xen, Hyper-V)     │
├──────────────────────────────────┤
│           Hardware               │
└──────────────────────────────────┘
```

**Examples:** VMware ESXi, Xen, Microsoft Hyper-V, KVM

#### Type 2 (Hosted)

Berjalan di atas Host OS.

```
┌───────────────────────────────────┐
│       VM 1    │    VM 2          │
├───────────────┴──────────────────┤
│       Type 2 Hypervisor          │
│   (VirtualBox, VMware Workstation)│
├──────────────────────────────────┤
│           Host OS                │
├──────────────────────────────────┤
│           Hardware               │
└──────────────────────────────────┘
```

**Examples:** VirtualBox, VMware Workstation, Parallels

### Virtualization Techniques

#### 1. Full Virtualization

Guest OS tidak perlu dimodifikasi.

```
Guest OS instruction (privileged)
        │
        ▼
   ┌─────────┐
   │ VMM     │─── Binary Translation atau
   │ traps   │    Hardware Virtualization
   └────┬────┘
        ▼
   Execute safely
```

**Hardware Support:**

- Intel VT-x
- AMD-V

#### 2. Paravirtualization

Guest OS dimodifikasi untuk bekerja sama dengan hypervisor.

```
Guest OS (modified)
        │
        │ Hypercall (instead of privileged instruction)
        ▼
   ┌─────────┐
   │   VMM   │
   └─────────┘
```

**Examples:** Xen (paravirtualized guests)

**Pros:** Better performance
**Cons:** Need modified guest OS

### Memory Virtualization

```
Guest Virtual  →  Guest Physical  →  Host Physical
    (GVA)             (GPA)             (HPA)

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Guest Page  │    │ Shadow Page │    │ Physical    │
│   Table     │───▶│   Table     │───▶│  Memory     │
│             │    │ (maintained │    │             │
│             │    │  by VMM)    │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

**EPT/NPT (Extended/Nested Page Tables):**
Hardware support for two-level translation (GVA→GPA→HPA).

### I/O Virtualization

**Emulation:**

```
Guest → Virtual Device → VMM → Real Device
        (slow)
```

**Paravirtualized I/O (virtio):**

```
Guest (virtio driver) → VMM → Real Device
        (faster)
```

**Device Passthrough (SR-IOV):**

```
Guest → Direct access to physical device
        (native performance)
```

### Container Virtualization

**Containers** share host kernel, isolate processes.

```
┌─────────────────────────────────────────────────────────┐
│                     Host OS Kernel                       │
├──────────────┬──────────────┬──────────────┬────────────┤
│  Container 1 │  Container 2 │  Container 3 │ Container 4│
│ ┌──────────┐ │ ┌──────────┐ │ ┌──────────┐ │ ┌────────┐ │
│ │   App A  │ │ │   App B  │ │ │   App C  │ │ │ App D  │ │
│ ├──────────┤ │ ├──────────┤ │ ├──────────┤ │ ├────────┤ │
│ │  Libs    │ │ │  Libs    │ │ │  Libs    │ │ │  Libs  │ │
│ └──────────┘ │ └──────────┘ │ └──────────┘ │ └────────┘ │
└──────────────┴──────────────┴──────────────┴────────────┘
```

**VM vs Container:**
| Aspect | Virtual Machine | Container |
|--------|-----------------|-----------|
| **Isolation** | Full (separate kernel) | Process-level (shared kernel) |
| **Startup** | Minutes | Seconds |
| **Size** | GBs | MBs |
| **Performance** | Near-native | Native |
| **Security** | Strong isolation | Weaker isolation |

<div class="vm-container-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .vm-container-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .vm-container-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .vm-container-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .vm-container-viz h4 {
          color: #f3f4f6 !important;
        }
        .vc-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .vc-stack {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .vc-title {
          text-align: center;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 8px;
          padding: 8px;
          border-radius: 6px;
          color: white;
        }
        .vc-vm-title { background: #e74c3c; }
        .vc-container-title { background: #3498db; }
        .vc-layer {
          padding: 8px;
          text-align: center;
          font-size: 0.65rem;
          font-weight: 500;
          border-radius: 4px;
          color: white;
        }
        .vc-hardware { background: #2c3e50; }
        .vc-hypervisor { background: #9b59b6; }
        .vc-host-os { background: #27ae60; }
        .vc-guest-os { background: #f39c12; color: #2c3e50; }
        .vc-docker { background: #0db7ed; }
        .vc-app { background: #3498db; }
        .vc-apps-row {
          display: flex;
          gap: 3px;
        }
        .vc-app-small {
          flex: 1;
          padding: 6px 4px;
          text-align: center;
          font-size: 0.55rem;
          font-weight: 500;
          border-radius: 4px;
          background: #3498db;
          color: white;
        }
        .vc-vm-box {
          border: 2px dashed #e74c3c;
          border-radius: 6px;
          padding: 5px;
          margin-bottom: 3px;
        }
        html.dark .vc-vm-box {
          border-color: #f87171;
        }
        .vc-container-box {
          border: 2px dashed #3498db;
          border-radius: 6px;
          padding: 5px;
          margin-bottom: 3px;
        }
        html.dark .vc-container-box {
          border-color: #60a5fa;
        }
        .vc-note {
          font-size: 0.6rem;
          color: #666;
          text-align: center;
          margin-top: 5px;
        }
        html.dark .vc-note {
          color: #9ca3af;
        }
        @media (max-width: 500px) {
          .vc-comparison {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 640px) {
          .vm-container-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Arsitektur: Virtual Machine vs Container</h4>

<div class="vc-comparison">
    <div class="vc-stack">
      <div class="vc-title vc-vm-title">Virtual Machine</div>
      <div class="vc-apps-row">
        <div class="vc-vm-box">
          <div class="vc-app-small">App A</div>
          <div class="vc-app-small" style="background: #f39c12; margin-top: 3px;">Guest OS</div>
        </div>
        <div class="vc-vm-box">
          <div class="vc-app-small">App B</div>
          <div class="vc-app-small" style="background: #f39c12; margin-top: 3px;">Guest OS</div>
        </div>
        <div class="vc-vm-box">
          <div class="vc-app-small">App C</div>
          <div class="vc-app-small" style="background: #f39c12; margin-top: 3px;">Guest OS</div>
        </div>
      </div>
      <div class="vc-layer vc-hypervisor">Hypervisor (Type 1 or 2)</div>
      <div class="vc-layer vc-host-os">Host OS (optional for Type 1)</div>
      <div class="vc-layer vc-hardware">Hardware</div>
      <div class="vc-note">Each VM has its own OS kernel (GBs)</div>
    </div>
    <div class="vc-stack">
      <div class="vc-title vc-container-title">Container</div>
      <div class="vc-apps-row">
        <div class="vc-container-box">
          <div class="vc-app-small">App A</div>
          <div class="vc-app-small" style="background: #1abc9c; margin-top: 3px;">Libs</div>
        </div>
        <div class="vc-container-box">
          <div class="vc-app-small">App B</div>
          <div class="vc-app-small" style="background: #1abc9c; margin-top: 3px;">Libs</div>
        </div>
        <div class="vc-container-box">
          <div class="vc-app-small">App C</div>
          <div class="vc-app-small" style="background: #1abc9c; margin-top: 3px;">Libs</div>
        </div>
      </div>
      <div class="vc-layer vc-docker">Container Runtime (Docker)</div>
      <div class="vc-layer vc-host-os">Host OS (Shared Kernel)</div>
      <div class="vc-layer vc-hardware">Hardware</div>
      <div class="vc-note">Containers share host kernel (MBs)</div>
    </div>
  </div>
</div>

**Linux Container Technologies:**

- **Namespaces**: Isolate system resources
  - PID, Network, Mount, User, UTS, IPC, Cgroup
- **cgroups**: Limit and account resources
  - CPU, Memory, I/O, Network
- **UnionFS/OverlayFS**: Layered filesystem

```
Docker Image Layers:
┌─────────────────────────┐
│     Writeable Layer     │ ← Container changes
├─────────────────────────┤
│     Application Code    │
├─────────────────────────┤
│     Dependencies        │
├─────────────────────────┤
│     Base Image (Ubuntu) │
└─────────────────────────┘
```

---

## 13. Sistem Operasi Modern

### Real-Time Operating Systems (RTOS)

**Hard Real-Time:** Deadline HARUS dipenuhi

- Contoh: Pacemaker, ABS brakes
- Missing deadline = catastrophic failure

**Soft Real-Time:** Deadline sebaiknya dipenuhi

- Contoh: Video streaming, gaming
- Missing deadline = degraded quality

**RTOS Characteristics:**

- Deterministic scheduling
- Priority-based preemption
- Minimal interrupt latency
- No virtual memory (usually)

**Examples:** FreeRTOS, VxWorks, QNX, RTLinux

### Distributed Operating Systems

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Node 1    │    │   Node 2    │    │   Node 3    │
│  ┌───────┐  │    │  ┌───────┐  │    │  ┌───────┐  │
│  │  App  │  │    │  │  App  │  │    │  │  App  │  │
│  └───────┘  │    │  └───────┘  │    │  └───────┘  │
│  ┌───────┐  │    │  ┌───────┐  │    │  ┌───────┐  │
│  │  OS   │  │    │  │  OS   │  │    │  │  OS   │  │
│  └───┬───┘  │    │  └───┬───┘  │    │  └───┬───┘  │
└──────┼──────┘    └──────┼──────┘    └──────┼──────┘
       │                  │                  │
       └──────────────────┴──────────────────┘
                    Network
```

**Challenges:**

- No shared memory
- Network latency
- Partial failures
- Clock synchronization

### Mobile Operating Systems

**Characteristics:**

- Power efficiency critical
- Touch interface
- Limited resources
- App sandboxing

**Examples:**

- **Android**: Linux kernel + ART runtime
- **iOS**: XNU kernel (Darwin-based)

```
Android Architecture:
┌───────────────────────────────────┐
│          Applications             │
├───────────────────────────────────┤
│     Application Framework         │
│   (Activity Manager, etc.)        │
├───────────────────────────────────┤
│    Android Runtime (ART)          │
│    Native Libraries (C/C++)       │
├───────────────────────────────────┤
│   Hardware Abstraction Layer      │
├───────────────────────────────────┤
│         Linux Kernel              │
└───────────────────────────────────┘
```

### Embedded Operating Systems

- Resource constrained (KB of RAM)
- Specific hardware
- Often no MMU
- Examples: Embedded Linux, Zephyr, NuttX

### Cloud and Serverless

**Cloud Computing Models:**

```
┌─────────────────────────────────────────────────────────┐
│ IaaS (Infrastructure)                                   │
│ Virtual Machines, Storage, Network                      │
│ (AWS EC2, Google Compute Engine)                        │
├─────────────────────────────────────────────────────────┤
│ PaaS (Platform)                                         │
│ Runtime, Database, Development Tools                    │
│ (Heroku, Google App Engine)                             │
├─────────────────────────────────────────────────────────┤
│ FaaS/Serverless                                         │
│ Function execution only                                 │
│ (AWS Lambda, Cloud Functions)                           │
└─────────────────────────────────────────────────────────┘
```

---

## 14. Linux Commands Cheatsheet

### Process Management

```bash
# View processes
ps aux                    # List all processes
top / htop               # Interactive process viewer
pstree                   # Process tree

# Process control
kill PID                 # Send SIGTERM
kill -9 PID              # Send SIGKILL (force)
killall name             # Kill by name
nice -n 10 command       # Run with priority
renice -n 5 -p PID       # Change priority

# Background/Foreground
command &                # Run in background
jobs                     # List background jobs
fg %1                    # Bring job 1 to foreground
bg %1                    # Resume job 1 in background
nohup command &          # Run immune to hangups
```

### Memory

```bash
free -h                  # Memory usage
vmstat 1                 # Virtual memory stats
cat /proc/meminfo        # Detailed memory info
pmap PID                 # Process memory map
```

### Disk & File System

```bash
df -h                    # Disk space usage
du -sh directory         # Directory size
lsblk                    # List block devices
mount /dev/sdb1 /mnt     # Mount filesystem
umount /mnt              # Unmount
fdisk -l                 # Partition table

# File permissions
chmod 755 file           # rwxr-xr-x
chmod u+x file           # Add execute for owner
chown user:group file    # Change ownership
```

### System Information

```bash
uname -a                 # Kernel info
cat /etc/os-release      # OS info
uptime                   # System uptime
dmesg                    # Kernel messages
lscpu                    # CPU info
lspci                    # PCI devices
lsusb                    # USB devices
```

### Network

```bash
ip addr                  # Network interfaces
ip route                 # Routing table
ss -tuln                 # Listening ports
netstat -tuln            # (legacy) Listening ports
ping host                # Test connectivity
traceroute host          # Trace route
curl -I url              # HTTP headers
```

### Service Management (systemd)

```bash
systemctl start service  # Start service
systemctl stop service   # Stop service
systemctl restart service
systemctl status service # Check status
systemctl enable service # Enable at boot
journalctl -u service    # Service logs
```

---

## 15. Rangkuman Cepat

### Formula Penting

**Effective Access Time (EAT):**
$$\text{EAT} = h \times t_{cache} + (1-h) \times t_{memory}$$

**Page Fault EAT:**
$$\text{EAT} = (1-p) \times t_{mem} + p \times t_{page\_fault}$$

**Disk Access Time:**
$$T_{access} = T_{seek} + T_{rotation} + T_{transfer}$$

**CPU Utilization (n processes, I/O wait = p):**
$$\text{Utilization} = 1 - p^n$$

### Comparison Tables

**Scheduling Algorithms:**
| Algorithm | Preemptive | Starvation | Overhead |
|-----------|------------|------------|----------|
| FCFS | No | No | Low |
| SJF | No | Yes | Medium |
| SRTF | Yes | Yes | High |
| Priority | Both | Yes | Medium |
| Round Robin | Yes | No | High |
| MLFQ | Yes | No | High |

**Page Replacement:**
| Algorithm | Optimal | Practical | Belady's Anomaly |
|-----------|---------|-----------|------------------|
| FIFO | No | Yes | Yes |
| OPT | Yes | No | No |
| LRU | Near-optimal | Expensive | No |
| Clock | Approximation | Yes | No |

### Key Concepts Summary

1. **Kernel Mode vs User Mode**: Privilege separation
2. **Process vs Thread**: Heavyweight vs lightweight execution
3. **Deadlock Conditions**: Mutual exclusion, hold & wait, no preemption, circular wait
4. **Virtual Memory**: Address abstraction, demand paging
5. **File System**: Hierarchy, inodes, journaling
6. **Security**: Authentication, authorization, encryption
7. **Virtualization**: Hypervisors, containers, isolation
