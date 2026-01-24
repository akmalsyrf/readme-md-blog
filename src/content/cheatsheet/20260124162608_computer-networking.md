---
title: 'Jaringan Komputer'
description: 'Cheatsheet komprehensif tentang jaringan komputer: OSI Layer, TCP/IP, protokol, addressing, routing, dan keamanan jaringan'
pubDate: 2026-01-24
author: 'Akmal'
category: 'Ilmu Komputer'
tags: ['networking', 'tcp-ip', 'protocol', 'infrastructure']
---

Jaringan komputer adalah sistem yang menghubungkan dua atau lebih perangkat komputasi untuk berbagi sumber daya dan berkomunikasi. Cheatsheet ini mencakup konsep fundamental hingga topik lanjutan dalam jaringan komputer.

---

## 1. Dasar-Dasar Jaringan

### 1.1 Definisi dan Komponen

**Jaringan Komputer** adalah kumpulan perangkat yang terhubung untuk berbagi data dan sumber daya.

**Komponen Utama:**
| Komponen | Fungsi |
|----------|--------|
| **End Devices** | Komputer, smartphone, server, IoT devices |
| **Intermediary Devices** | Router, switch, hub, access point, firewall |
| **Network Media** | Kabel (twisted pair, coaxial, fiber optic), wireless |
| **Network Interface Card (NIC)** | Hardware untuk koneksi jaringan |

### 1.2 Klasifikasi Jaringan Berdasarkan Cakupan

<div class="network-class-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .network-class-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .network-class-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .network-class-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .network-class-viz h4 {
          color: #f3f4f6 !important;
        }
        .nc-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 10px;
          padding: 15px 10px;
          background: linear-gradient(to right, #f8f9fa, #ecf0f1, #f8f9fa);
          border-radius: 10px;
          position: relative;
        }
        html.dark .nc-container {
          background: linear-gradient(to right, #111827, #1f2937, #111827);
        }
        .nc-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }
        .nc-icon-wrapper {
          position: relative;
          margin-bottom: 8px;
        }
        .nc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
        }
        .nc-pan .nc-icon { 
          width: 40px; 
          height: 40px; 
          background: linear-gradient(135deg, #9b59b6, #8e44ad);
        }
        .nc-lan .nc-icon { 
          width: 55px; 
          height: 55px; 
          background: linear-gradient(135deg, #3498db, #2980b9);
          font-size: 1.4rem;
        }
        .nc-man .nc-icon { 
          width: 70px; 
          height: 70px; 
          background: linear-gradient(135deg, #27ae60, #1e8449);
          font-size: 1.6rem;
        }
        .nc-wan .nc-icon { 
          width: 90px; 
          height: 90px; 
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          font-size: 2rem;
        }
        .nc-label {
          font-weight: 700;
          font-size: 0.85rem;
          color: #2c3e50;
          margin-bottom: 3px;
        }
        html.dark .nc-label {
          color: #f3f4f6;
        }
        .nc-range {
          font-size: 0.65rem;
          color: #666;
          margin-bottom: 5px;
        }
        html.dark .nc-range {
          color: #9ca3af;
        }
        .nc-examples {
          font-size: 0.6rem;
          color: #888;
          text-align: center;
        }
        html.dark .nc-examples {
          color: #6b7280;
        }
        .nc-scale {
          position: absolute;
          bottom: -20px;
          left: 10px;
          right: 10px;
          height: 4px;
          background: linear-gradient(to right, #9b59b6, #3498db, #27ae60, #e74c3c);
          border-radius: 2px;
        }
        .nc-scale-label {
          position: absolute;
          bottom: -35px;
          font-size: 0.6rem;
          color: #666;
        }
        html.dark .nc-scale-label {
          color: #9ca3af;
        }
        .nc-scale-label.left { left: 0; }
        .nc-scale-label.right { right: 0; }
        @media (max-width: 500px) {
          .nc-container {
            flex-wrap: wrap;
            justify-content: center;
          }
          .nc-item {
            flex: 0 0 45%;
            margin-bottom: 15px;
          }
          .nc-scale {
            display: none;
          }
        }
        @media (min-width: 640px) {
          .network-class-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Klasifikasi Jaringan Berdasarkan Cakupan</h4>
  
  <div class="nc-container" style="padding-bottom: 45px;">
    <div class="nc-item nc-pan">
      <div class="nc-icon-wrapper">
        <div class="nc-icon">📱</div>
      </div>
      <span class="nc-label">PAN</span>
      <span class="nc-range">1-10 meter</span>
      <span class="nc-examples">Bluetooth, USB</span>
    </div>
    <div class="nc-item nc-lan">
      <div class="nc-icon-wrapper">
        <div class="nc-icon">🏢</div>
      </div>
      <span class="nc-label">LAN</span>
      <span class="nc-range">100m - 1km</span>
      <span class="nc-examples">Office, School</span>
    </div>
    <div class="nc-item nc-man">
      <div class="nc-icon-wrapper">
        <div class="nc-icon">🏙️</div>
      </div>
      <span class="nc-label">MAN</span>
      <span class="nc-range">1-50 km</span>
      <span class="nc-examples">City, Metro</span>
    </div>
    <div class="nc-item nc-wan">
      <div class="nc-icon-wrapper">
        <div class="nc-icon">🌍</div>
      </div>
      <span class="nc-label">WAN</span>
      <span class="nc-range">> 50 km</span>
      <span class="nc-examples">Internet, Global</span>
    </div>
    <div class="nc-scale">
      <span class="nc-scale-label left">Kecil</span>
      <span class="nc-scale-label right">Besar</span>
    </div>
  </div>
</div>

| Tipe                                | Jangkauan  | Contoh                                      |
| ----------------------------------- | ---------- | ------------------------------------------- |
| **PAN** (Personal Area Network)     | 1-10 meter | Bluetooth, USB                              |
| **LAN** (Local Area Network)        | 100m - 1km | Jaringan kantor, sekolah                    |
| **MAN** (Metropolitan Area Network) | 1-50 km    | Jaringan antar gedung dalam satu kota       |
| **WAN** (Wide Area Network)         | > 50 km    | Internet, jaringan perusahaan multinasional |

### 1.3 Topologi Jaringan

<div class="topology-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .topology-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .topology-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .topology-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .topology-viz h4 {
          color: #f3f4f6 !important;
        }
        .topo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        .topo-item {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 15px 10px;
          text-align: center;
        }
        html.dark .topo-item {
          background: #111827;
        }
        .topo-title {
          font-weight: 700;
          font-size: 0.8rem;
          margin-bottom: 10px;
          padding: 5px 10px;
          border-radius: 5px;
          color: white;
          display: inline-block;
        }
        .topo-bus .topo-title { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .topo-ring .topo-title { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .topo-star .topo-title { background: linear-gradient(135deg, #3498db, #2980b9); }
        .topo-mesh .topo-title { background: linear-gradient(135deg, #27ae60, #1e8449); }
        .topo-tree .topo-title { background: linear-gradient(135deg, #f39c12, #d68910); }
        .topo-hybrid .topo-title { background: linear-gradient(135deg, #1abc9c, #16a085); }
        .topo-svg {
          width: 100%;
          height: 90px;
        }
        .topo-node {
          fill: #3498db;
        }
        html.dark .topo-node {
          fill: #60a5fa;
        }
        .topo-hub {
          fill: #e74c3c;
        }
        html.dark .topo-hub {
          fill: #f87171;
        }
        .topo-line {
          stroke: #95a5a6;
          stroke-width: 2;
        }
        html.dark .topo-line {
          stroke: #6b7280;
        }
        .topo-bus-line {
          stroke: #e74c3c;
          stroke-width: 3;
        }
        html.dark .topo-bus-line {
          stroke: #f87171;
        }
        .topo-desc {
          font-size: 0.65rem;
          color: #666;
          margin-top: 8px;
        }
        html.dark .topo-desc {
          color: #9ca3af;
        }
        @media (max-width: 600px) {
          .topo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 640px) {
          .topology-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Topologi Jaringan</h4>
  
  <div class="topo-grid">
    <!-- BUS Topology -->
    <div class="topo-item topo-bus">
      <span class="topo-title">BUS</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <line x1="10" y1="40" x2="110" y2="40" class="topo-bus-line"/>
        <line x1="25" y1="40" x2="25" y2="55" class="topo-line"/>
        <line x1="50" y1="40" x2="50" y2="55" class="topo-line"/>
        <line x1="75" y1="40" x2="75" y2="55" class="topo-line"/>
        <line x1="100" y1="40" x2="100" y2="55" class="topo-line"/>
        <circle cx="25" cy="62" r="7" class="topo-node"/>
        <circle cx="50" cy="62" r="7" class="topo-node"/>
        <circle cx="75" cy="62" r="7" class="topo-node"/>
        <circle cx="100" cy="62" r="7" class="topo-node"/>
      </svg>
      <div class="topo-desc">Semua terhubung ke satu kabel utama</div>
    </div>
    <!-- RING Topology -->
    <div class="topo-item topo-ring">
      <span class="topo-title">RING</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <circle cx="60" cy="40" r="25" fill="none" class="topo-line"/>
        <circle cx="60" cy="15" r="7" class="topo-node"/>
        <circle cx="85" cy="40" r="7" class="topo-node"/>
        <circle cx="60" cy="65" r="7" class="topo-node"/>
        <circle cx="35" cy="40" r="7" class="topo-node"/>
      </svg>
      <div class="topo-desc">Data mengalir dalam lingkaran</div>
    </div>
    <!-- STAR Topology -->
    <div class="topo-item topo-star">
      <span class="topo-title">STAR</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <line x1="60" y1="40" x2="60" y2="12" class="topo-line"/>
        <line x1="60" y1="40" x2="95" y2="25" class="topo-line"/>
        <line x1="60" y1="40" x2="95" y2="55" class="topo-line"/>
        <line x1="60" y1="40" x2="60" y2="68" class="topo-line"/>
        <line x1="60" y1="40" x2="25" y2="55" class="topo-line"/>
        <line x1="60" y1="40" x2="25" y2="25" class="topo-line"/>
        <rect x="52" y="32" width="16" height="16" rx="3" class="topo-hub"/>
        <circle cx="60" cy="12" r="6" class="topo-node"/>
        <circle cx="95" cy="25" r="6" class="topo-node"/>
        <circle cx="95" cy="55" r="6" class="topo-node"/>
        <circle cx="60" cy="68" r="6" class="topo-node"/>
        <circle cx="25" cy="55" r="6" class="topo-node"/>
        <circle cx="25" cy="25" r="6" class="topo-node"/>
      </svg>
      <div class="topo-desc">Semua terhubung ke hub/switch pusat</div>
    </div>
    <!-- MESH Topology -->
    <div class="topo-item topo-mesh">
      <span class="topo-title">MESH</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <line x1="35" y1="20" x2="85" y2="20" class="topo-line"/>
        <line x1="35" y1="20" x2="35" y2="60" class="topo-line"/>
        <line x1="35" y1="20" x2="85" y2="60" class="topo-line"/>
        <line x1="85" y1="20" x2="35" y2="60" class="topo-line"/>
        <line x1="85" y1="20" x2="85" y2="60" class="topo-line"/>
        <line x1="35" y1="60" x2="85" y2="60" class="topo-line"/>
        <circle cx="35" cy="20" r="7" class="topo-node"/>
        <circle cx="85" cy="20" r="7" class="topo-node"/>
        <circle cx="35" cy="60" r="7" class="topo-node"/>
        <circle cx="85" cy="60" r="7" class="topo-node"/>
      </svg>
      <div class="topo-desc">Setiap node terhubung ke semua node</div>
    </div>
    <!-- TREE Topology -->
    <div class="topo-item topo-tree">
      <span class="topo-title">TREE</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <line x1="60" y1="12" x2="35" y2="35" class="topo-line"/>
        <line x1="60" y1="12" x2="85" y2="35" class="topo-line"/>
        <line x1="35" y1="35" x2="20" y2="60" class="topo-line"/>
        <line x1="35" y1="35" x2="50" y2="60" class="topo-line"/>
        <line x1="85" y1="35" x2="70" y2="60" class="topo-line"/>
        <line x1="85" y1="35" x2="100" y2="60" class="topo-line"/>
        <circle cx="60" cy="12" r="7" class="topo-hub"/>
        <circle cx="35" cy="35" r="6" class="topo-node"/>
        <circle cx="85" cy="35" r="6" class="topo-node"/>
        <circle cx="20" cy="60" r="5" class="topo-node"/>
        <circle cx="50" cy="60" r="5" class="topo-node"/>
        <circle cx="70" cy="60" r="5" class="topo-node"/>
        <circle cx="100" cy="60" r="5" class="topo-node"/>
      </svg>
      <div class="topo-desc">Struktur hierarkis seperti pohon</div>
    </div>
    <!-- HYBRID Topology -->
    <div class="topo-item topo-hybrid">
      <span class="topo-title">HYBRID</span>
      <svg class="topo-svg" viewBox="0 0 120 80">
        <!-- Star part -->
        <line x1="35" y1="35" x2="20" y2="20" class="topo-line"/>
        <line x1="35" y1="35" x2="20" y2="50" class="topo-line"/>
        <line x1="35" y1="35" x2="50" y2="25" class="topo-line"/>
        <rect x="29" y="29" width="12" height="12" rx="2" class="topo-hub"/>
        <!-- Ring part -->
        <circle cx="85" cy="40" r="18" fill="none" class="topo-line"/>
        <!-- Connection -->
        <line x1="47" y1="35" x2="67" y2="40" class="topo-line" stroke-dasharray="3,2"/>
        <circle cx="20" cy="20" r="5" class="topo-node"/>
        <circle cx="20" cy="50" r="5" class="topo-node"/>
        <circle cx="50" cy="25" r="5" class="topo-node"/>
        <circle cx="85" cy="22" r="5" class="topo-node"/>
        <circle cx="103" cy="40" r="5" class="topo-node"/>
        <circle cx="85" cy="58" r="5" class="topo-node"/>
        <circle cx="67" cy="40" r="5" class="topo-node"/>
      </svg>
      <div class="topo-desc">Kombinasi berbagai topologi</div>
    </div>
  </div>
</div>

| Topologi | Kelebihan                    | Kekurangan                         |
| -------- | ---------------------------- | ---------------------------------- |
| **Bus**  | Murah, sederhana             | Single point of failure, collision |
| **Ring** | Equal access, predictable    | Satu node rusak = jaringan down    |
| **Star** | Mudah troubleshoot, scalable | Hub/switch = critical point        |
| **Mesh** | Redundansi tinggi, reliable  | Mahal, kompleks                    |
| **Tree** | Hierarkis, scalable          | Root failure = total failure       |

---

## 2. Model OSI (Open Systems Interconnection)

Model OSI adalah kerangka konseptual untuk memahami komunikasi jaringan dalam 7 lapisan (layer).

<div class="osi-model-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .osi-model-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .osi-model-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .osi-model-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .osi-model-viz h4 {
          color: #f3f4f6 !important;
        }
        .osi-layers {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .osi-layer {
          display: grid;
          grid-template-columns: 30px 1fr 100px 120px;
          align-items: center;
          padding: 10px 12px;
          border-radius: 8px;
          color: white;
          font-size: 0.75rem;
          gap: 10px;
        }
        .osi-layer-num {
          font-weight: 700;
          font-size: 1rem;
        }
        .osi-layer-name {
          font-weight: 600;
        }
        .osi-layer-pdu {
          font-size: 0.65rem;
          background: rgba(255,255,255,0.2);
          padding: 3px 8px;
          border-radius: 4px;
          text-align: center;
        }
        .osi-layer-protocol {
          font-size: 0.6rem;
          opacity: 0.9;
        }
        .osi-l7 { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .osi-l6 { background: linear-gradient(135deg, #e67e22, #d35400); }
        .osi-l5 { background: linear-gradient(135deg, #f1c40f, #f39c12); color: #2c3e50; }
        .osi-l4 { background: linear-gradient(135deg, #2ecc71, #27ae60); }
        .osi-l3 { background: linear-gradient(135deg, #3498db, #2980b9); }
        .osi-l2 { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .osi-l1 { background: linear-gradient(135deg, #34495e, #2c3e50); }
        .osi-category {
          position: absolute;
          right: -80px;
          writing-mode: vertical-rl;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 5px;
          border-radius: 4px;
        }
        .osi-legend {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 15px;
          font-size: 0.7rem;
          color: #666;
          flex-wrap: wrap;
        }
        html.dark .osi-legend {
          color: #9ca3af;
        }
        .osi-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .osi-legend-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        @media (max-width: 500px) {
          .osi-layer {
            grid-template-columns: 25px 1fr 70px;
            font-size: 0.65rem;
            padding: 8px;
          }
          .osi-layer-protocol {
            display: none;
          }
        }
        @media (min-width: 640px) {
          .osi-model-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Model OSI 7 Layer</h4>
  
  <div class="osi-layers">
    <div class="osi-layer osi-l7">
      <span class="osi-layer-num">7</span>
      <span class="osi-layer-name">Application</span>
      <span class="osi-layer-pdu">Data</span>
      <span class="osi-layer-protocol">HTTP, FTP, SMTP, DNS</span>
    </div>
    <div class="osi-layer osi-l6">
      <span class="osi-layer-num">6</span>
      <span class="osi-layer-name">Presentation</span>
      <span class="osi-layer-pdu">Data</span>
      <span class="osi-layer-protocol">SSL/TLS, JPEG, MPEG</span>
    </div>
    <div class="osi-layer osi-l5">
      <span class="osi-layer-num">5</span>
      <span class="osi-layer-name">Session</span>
      <span class="osi-layer-pdu">Data</span>
      <span class="osi-layer-protocol">NetBIOS, RPC, PPTP</span>
    </div>
    <div class="osi-layer osi-l4">
      <span class="osi-layer-num">4</span>
      <span class="osi-layer-name">Transport</span>
      <span class="osi-layer-pdu">Segment</span>
      <span class="osi-layer-protocol">TCP, UDP, SCTP</span>
    </div>
    <div class="osi-layer osi-l3">
      <span class="osi-layer-num">3</span>
      <span class="osi-layer-name">Network</span>
      <span class="osi-layer-pdu">Packet</span>
      <span class="osi-layer-protocol">IP, ICMP, ARP, OSPF</span>
    </div>
    <div class="osi-layer osi-l2">
      <span class="osi-layer-num">2</span>
      <span class="osi-layer-name">Data Link</span>
      <span class="osi-layer-pdu">Frame</span>
      <span class="osi-layer-protocol">Ethernet, PPP, Wi-Fi</span>
    </div>
    <div class="osi-layer osi-l1">
      <span class="osi-layer-num">1</span>
      <span class="osi-layer-name">Physical</span>
      <span class="osi-layer-pdu">Bits</span>
      <span class="osi-layer-protocol">Cables, Hubs, NICs</span>
    </div>
  </div>
  
  <div class="osi-legend">
    <div class="osi-legend-item">
      <div class="osi-legend-box" style="background: #e74c3c;"></div> Upper Layers (Host)
    </div>
    <div class="osi-legend-item">
      <div class="osi-legend-box" style="background: #3498db;"></div> Lower Layers (Media)
    </div>
  </div>
</div>

### 2.1 Detail Setiap Layer (Bottom-Up: Physical → Application)

> **Pendekatan Bottom-Up:** Penjelasan dimulai dari layer paling bawah (Physical) menuju ke atas (Application), mengikuti alur bagaimana data diterima dan diproses naik ke aplikasi.

---

#### Layer 1: Physical Layer — "The Foundation"

**Definisi:** Layer paling dasar yang bertanggung jawab untuk transmisi dan penerimaan bit mentah (0 dan 1) melalui media fisik. Layer ini mendefinisikan karakteristik electrical, mechanical, procedural, dan functional untuk mengaktifkan, memelihara, dan menonaktifkan koneksi fisik.

**Analogi:** Seperti jalan raya dan kendaraan pengangkut — layer ini adalah infrastruktur fisik tempat data "berkendara".

**Fungsi Utama:**

1. **Bit Transmission & Reception:** Mengkonversi data digital ke sinyal dan sebaliknya
2. **Physical Topology Definition:** Menentukan layout koneksi (bus, star, ring, mesh)
3. **Transmission Mode:** Simplex, half-duplex, atau full-duplex
4. **Signal Encoding:** Line coding untuk representasi bit
5. **Bit Synchronization:** Sinkronisasi clock antara sender dan receiver
6. **Physical Medium Specification:** Jenis kabel, konektor, frekuensi wireless

**Media Transmisi:**

| Kategori             | Tipe        | Kecepatan   | Jarak Max   | Karakteristik                |
| -------------------- | ----------- | ----------- | ----------- | ---------------------------- |
| **Copper - UTP**     | Cat5e       | 1 Gbps      | 100m        | Murah, rentan EMI            |
| **Copper - UTP**     | Cat6        | 10 Gbps     | 55m (10G)   | Lebih baik dari Cat5e        |
| **Copper - UTP**     | Cat6a       | 10 Gbps     | 100m        | Shielded, data center        |
| **Copper - Coaxial** | RG-6        | Variable    | 500m+       | TV kabel, tahan interferensi |
| **Fiber - SMF**      | Single-mode | 100+ Gbps   | 100 km      | Long distance, mahal         |
| **Fiber - MMF**      | Multi-mode  | 10-100 Gbps | 300m-2km    | Data center, lebih murah     |
| **Wireless**         | Wi-Fi 6     | 9.6 Gbps    | ~30m indoor | Fleksibel, shared medium     |

**Konektor Umum:**

| Konektor   | Media   | Penggunaan                       |
| ---------- | ------- | -------------------------------- |
| **RJ-45**  | UTP/STP | Ethernet LAN                     |
| **RJ-11**  | UTP     | Telepon                          |
| **BNC**    | Coaxial | Legacy Ethernet, CCTV            |
| **F-Type** | Coaxial | TV kabel                         |
| **SC**     | Fiber   | Data center (square, push-pull)  |
| **LC**     | Fiber   | High-density (small form factor) |
| **ST**     | Fiber   | Legacy (bayonet twist)           |
| **MT-RJ**  | Fiber   | Dual fiber, compact              |

**Signaling & Encoding:**

| Scheme                       | Deskripsi                            | Penggunaan                      |
| ---------------------------- | ------------------------------------ | ------------------------------- |
| **NRZ (Non-Return to Zero)** | High voltage = 1, Low = 0            | Serial communication            |
| **Manchester**               | Transisi di tengah setiap bit period | 10BASE-T Ethernet               |
| **4B/5B**                    | 4 bit data → 5 bit code              | 100BASE-TX                      |
| **8B/10B**                   | 8 bit data → 10 bit code             | Gigabit Ethernet, Fibre Channel |
| **PAM-4**                    | 4 level amplitude                    | 400G Ethernet                   |

**Spesifikasi yang Didefinisikan:**

- **Electrical:** Voltage levels, impedance, signal timing
- **Mechanical:** Connector dimensions, pin layouts, cable specifications
- **Procedural:** Sequence untuk transmisi dan penerimaan bit
- **Functional:** Fungsi setiap pin/wire dalam konektor

**Device yang Beroperasi:**

| Device             | Fungsi                                           |
| ------------------ | ------------------------------------------------ |
| **Hub**            | Repeater multi-port, broadcast ke semua port     |
| **Repeater**       | Memperkuat sinyal untuk jarak lebih jauh         |
| **Modem**          | Modulator/Demodulator, konversi digital ↔ analog |
| **Network Cables** | Media transmisi copper/fiber                     |
| **Transceiver**    | Transmitter + Receiver, konversi sinyal          |
| **Patch Panel**    | Centralized cable management                     |

**Standar Penting:**

- **IEEE 802.3** — Ethernet physical layer
- **IEEE 802.11** — Wireless LAN physical layer
- **TIA/EIA-568** — Cabling standards (T568A, T568B)
- **ITU-T G.652** — Single-mode fiber specifications

**PDU (Protocol Data Unit):** **Bits**

**Troubleshooting Layer 1:**

- Cek lampu link pada NIC dan switch
- Periksa kabel (kink, damage, wrong type)
- Test kabel dengan cable tester
- Verifikasi koneksi konektor
- Cek jarak kabel tidak melebihi batas

---

#### Layer 2: Data Link Layer — "The Local Deliveryman"

**Definisi:** Layer yang bertanggung jawab untuk transfer data yang reliable antara dua node yang terhubung langsung (directly connected). Layer ini membungkus paket dari layer 3 menjadi frame dan menangani akses ke media fisik.

**Analogi:** Seperti pengantar paket lokal yang mengurus pengiriman dari rumah ke rumah dalam satu kompleks — mengenal alamat fisik (MAC) setiap rumah.

**Fungsi Utama:**

1. **Framing:** Membungkus paket menjadi frame dengan header dan trailer
2. **Physical Addressing:** Menggunakan MAC address untuk identifikasi node
3. **Error Detection:** CRC (Cyclic Redundancy Check) di trailer frame
4. **Flow Control:** Mengatur kecepatan transmisi agar receiver tidak overflow
5. **Media Access Control:** Mengatur bagaimana node mengakses shared medium
6. **Link Management:** Establish, maintain, terminate link antar node

**Sub-Layer IEEE:**

| Sub-Layer                      | Standar           | Fungsi                                                          |
| ------------------------------ | ----------------- | --------------------------------------------------------------- |
| **LLC (Logical Link Control)** | IEEE 802.2        | Multiplexing protokol layer 3, flow control, error notification |
| **MAC (Media Access Control)** | IEEE 802.3/802.11 | Physical addressing, frame delimiting, media access             |

**MAC Address (Media Access Control Address):**

```
        OUI (Vendor)          NIC Specific
     ┌───────────────┐     ┌───────────────┐
     │  AA:BB:CC     │  :  │  DD:EE:FF     │
     └───────────────┘     └───────────────┘
        24 bits                 24 bits
              Total: 48 bits (6 bytes)
```

**Karakteristik MAC Address:**

- Panjang 48-bit, ditulis dalam hexadecimal
- Format: `AA:BB:CC:DD:EE:FF` atau `AA-BB-CC-DD-EE-FF`
- **OUI (3 byte pertama):** Organizationally Unique Identifier — menunjukkan vendor/manufacturer
- **NIC-specific (3 byte terakhir):** Unik untuk setiap NIC dari vendor tersebut
- **Burned-In Address (BIA):** Tertanam permanen di ROM NIC
- Dapat di-override dengan software (MAC spoofing)

**MAC Address Khusus:**

| Address             | Nama        | Fungsi                               |
| ------------------- | ----------- | ------------------------------------ |
| `FF:FF:FF:FF:FF:FF` | Broadcast   | Dikirim ke semua node dalam segment  |
| `01:xx:xx:xx:xx:xx` | Multicast   | Dikirim ke grup node tertentu        |
| `00:00:00:00:00:00` | Unspecified | Placeholder saat MAC belum diketahui |

**Ethernet Frame Format (IEEE 802.3):**

```
┌──────────┬──────────┬──────┬─────────────────────────┬─────┐
│ Dest MAC │ Src MAC  │ Type │        Payload          │ FCS │
│ (6 bytes)│ (6 bytes)│(2 B) │    (46-1500 bytes)      │(4 B)│
└──────────┴──────────┴──────┴─────────────────────────┴─────┘
                              │← MTU: 1500 bytes →│
```

**Media Access Methods:**

| Method            | Mekanisme                                                 | Penggunaan           |
| ----------------- | --------------------------------------------------------- | -------------------- |
| **CSMA/CD**       | Carrier Sense, transmit, detect collision, backoff, retry | Half-duplex Ethernet |
| **CSMA/CA**       | Carrier Sense, RTS/CTS, wait, transmit                    | Wireless (802.11)    |
| **Token Passing** | Node harus memiliki token untuk transmit                  | Token Ring (legacy)  |

**CSMA/CD Algorithm (Ethernet):**

1. **Carrier Sense:** Dengarkan apakah medium sibuk
2. **Multiple Access:** Jika idle, mulai transmit
3. **Collision Detection:** Jika collision terdeteksi:
   - Kirim jam signal
   - Tunggu random backoff time (exponential backoff)
   - Retry (maksimal 16 kali)

**Protokol dan Standar:**

| Standar         | Nama                         | Kecepatan          | Media        |
| --------------- | ---------------------------- | ------------------ | ------------ |
| **IEEE 802.3**  | Ethernet                     | 10 Mbps - 400 Gbps | Copper/Fiber |
| **IEEE 802.11** | Wi-Fi                        | 11 Mbps - 9.6 Gbps | Wireless     |
| **IEEE 802.1Q** | VLAN Tagging                 | -                  | Ethernet     |
| **IEEE 802.1D** | Spanning Tree                | -                  | Ethernet     |
| **PPP**         | Point-to-Point Protocol      | Variable           | Serial       |
| **HDLC**        | High-Level Data Link Control | Variable           | Serial       |

**Switching Methods:**

| Method                | Deskripsi                              | Latency | Error Check |
| --------------------- | -------------------------------------- | ------- | ----------- |
| **Store-and-Forward** | Terima seluruh frame, cek CRC, forward | Tinggi  | Ya          |
| **Cut-Through**       | Baca dest MAC, forward immediately     | Rendah  | Tidak       |
| **Fragment-Free**     | Baca 64 bytes pertama, forward         | Medium  | Partial     |

**Device yang Beroperasi:**

| Device          | Fungsi                              | Collision Domain | Broadcast Domain  |
| --------------- | ----------------------------------- | ---------------- | ----------------- |
| **Switch**      | Forward frame berdasarkan MAC table | Per port         | 1 (atau per VLAN) |
| **Bridge**      | Connect 2 segment, filter by MAC    | Per segment      | 1                 |
| **NIC**         | Interface node ke network           | -                | -                 |
| **Wireless AP** | Bridge antara wired dan wireless    | -                | -                 |

**MAC Address Table (CAM Table):**

- Switch mempelajari MAC address dari source address pada incoming frame
- Menyimpan mapping: MAC Address → Port
- Digunakan untuk forwarding decision
- Entries memiliki aging time (default 300 detik)

**PDU (Protocol Data Unit):** **Frame**

**Troubleshooting Layer 2:**

- Cek MAC address table pada switch
- Verifikasi VLAN configuration
- Periksa duplex mismatch (half vs full)
- Monitor collision dan CRC errors
- Cek STP status untuk loop issues

---

#### Layer 3: Network Layer — "The GPS Navigator"

**Definisi:** Layer yang bertanggung jawab untuk pengalamatan logical dan routing paket data melewati berbagai jaringan yang berbeda. Layer ini menentukan "jalur terbaik" dari source ke destination melewati multiple hops.

**Analogi:** Seperti GPS yang menentukan rute perjalanan dari kota A ke kota B, melewati berbagai persimpangan dan jalan tol — layer ini menentukan jalur optimal untuk paket data.

**Fungsi Utama:**

1. **Logical Addressing:** Memberikan alamat IP yang hierarkis dan routable
2. **Routing:** Menentukan jalur terbaik berdasarkan routing protocol
3. **Packet Forwarding:** Meneruskan paket ke next-hop router
4. **Fragmentation & Reassembly:** Memecah paket besar jika melebihi MTU
5. **Error Reporting:** ICMP untuk notifikasi masalah
6. **Quality of Service (QoS):** Prioritisasi traffic tertentu

**IPv4 Packet Header:**

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤
│Version│  IHL  │    DSCP   │ECN│         Total Length          │
├───────┴───────┼───────────┴───┼───────────────────────────────┤
│         Identification        │Flags│     Fragment Offset     │
├───────────────┼───────────────┼─────┴─────────────────────────┤
│      TTL      │   Protocol    │        Header Checksum        │
├───────────────┴───────────────┴───────────────────────────────┤
│                       Source IP Address                       │
├───────────────────────────────────────────────────────────────┤
│                    Destination IP Address                     │
├───────────────────────────────────────────────────────────────┤
│                    Options (if IHL > 5)                       │
└───────────────────────────────────────────────────────────────┘
```

**Field Penting IPv4 Header:**

| Field              | Size         | Deskripsi                                       |
| ------------------ | ------------ | ----------------------------------------------- |
| **Version**        | 4 bits       | Versi IP (4 untuk IPv4)                         |
| **IHL**            | 4 bits       | Header length dalam 32-bit words                |
| **DSCP/ToS**       | 8 bits       | Quality of Service marking                      |
| **Total Length**   | 16 bits      | Total ukuran paket (max 65,535 bytes)           |
| **TTL**            | 8 bits       | Max hops sebelum discarded (default 64/128/255) |
| **Protocol**       | 8 bits       | Protocol layer atas (TCP=6, UDP=17, ICMP=1)     |
| **Source/Dest IP** | 32 bits each | Alamat pengirim dan penerima                    |

**Protokol Layer 3:**

| Protokol           | Tipe       | Fungsi                                         |
| ------------------ | ---------- | ---------------------------------------------- |
| **IP (IPv4/IPv6)** | Core       | Pengalamatan dan routing dasar                 |
| **ICMP**           | Utility    | Error reporting, diagnostik (ping, traceroute) |
| **ICMPv6**         | Utility    | ICMP untuk IPv6 + Neighbor Discovery           |
| **ARP**            | Resolution | IP → MAC address resolution                    |
| **RARP**           | Resolution | MAC → IP (legacy, digantikan DHCP)             |
| **IGMP**           | Multicast  | Multicast group management                     |

**Routing Protocols:**

| Protokol  | Tipe                 | Algoritma    | Metric                     | Use Case              |
| --------- | -------------------- | ------------ | -------------------------- | --------------------- |
| **RIP**   | IGP, Distance Vector | Bellman-Ford | Hop count (max 15)         | Small networks        |
| **OSPF**  | IGP, Link State      | Dijkstra     | Cost (bandwidth)           | Enterprise            |
| **IS-IS** | IGP, Link State      | Dijkstra     | Configurable               | ISP, large enterprise |
| **EIGRP** | IGP, Hybrid          | DUAL         | Composite (BW, delay, etc) | Cisco networks        |
| **BGP**   | EGP, Path Vector     | Best Path    | AS Path, policies          | Internet backbone     |

**Konsep Penting:**

| Konsep              | Deskripsi                                                   |
| ------------------- | ----------------------------------------------------------- |
| **IP Address**      | Alamat logical 32-bit (IPv4) atau 128-bit (IPv6)            |
| **Subnet Mask**     | Membedakan network portion dan host portion                 |
| **CIDR**            | Classless Inter-Domain Routing (/24, /16, etc)              |
| **Default Gateway** | Router untuk mencapai network lain                          |
| **Routing Table**   | Database rute dengan destination, mask, next-hop, interface |
| **TTL**             | Time to Live — mencegah infinite loop                       |
| **MTU**             | Maximum Transmission Unit — ukuran maksimum paket           |
| **Fragmentation**   | Memecah paket jika lebih besar dari MTU                     |

**Proses Routing Decision:**

1. Terima paket, baca destination IP
2. Bandingkan dengan routing table (longest prefix match)
3. Tentukan next-hop dan exit interface
4. Decrement TTL (discard jika = 0)
5. Forward paket ke next-hop

**Device yang Beroperasi:**

| Device             | Fungsi                                |
| ------------------ | ------------------------------------- |
| **Router**         | Forward paket antar network berbeda   |
| **Layer 3 Switch** | Switch dengan kemampuan routing       |
| **Firewall**       | Filter paket berdasarkan rules        |
| **Load Balancer**  | Distribute traffic ke multiple server |

**PDU (Protocol Data Unit):** **Packet**

**Troubleshooting Layer 3:**

- `ping` untuk test connectivity
- `traceroute/tracert` untuk trace path
- `show ip route` untuk routing table
- Verifikasi IP address dan subnet mask
- Cek default gateway configuration
- Periksa ACL/firewall rules

---

#### Layer 4: Transport Layer — "The Reliable Courier"

**Definisi:** Layer yang menyediakan komunikasi end-to-end antara aplikasi di host yang berbeda. Bertanggung jawab untuk segmentasi data, reliability, flow control, dan multiplexing menggunakan port numbers.

**Analogi:** Seperti perusahaan kurir yang menjamin paket sampai dengan aman (TCP) atau kurir express yang cepat tapi tidak ada jaminan (UDP).

**Fungsi Utama:**

1. **Segmentation & Reassembly:** Memecah data menjadi segment, menyusun ulang di receiver
2. **Connection Control:** Connection-oriented (TCP) atau connectionless (UDP)
3. **Flow Control:** Mengatur kecepatan transmisi agar tidak membanjiri receiver
4. **Error Control:** Deteksi dan recovery dari error (TCP)
5. **Multiplexing/Demultiplexing:** Menggunakan port untuk membedakan aplikasi

**TCP vs UDP — Perbandingan Mendalam:**

| Karakteristik           | TCP                                     | UDP                    |
| ----------------------- | --------------------------------------- | ---------------------- |
| **Full Name**           | Transmission Control Protocol           | User Datagram Protocol |
| **Connection**          | Connection-oriented (3-way handshake)   | Connectionless         |
| **Reliability**         | Guaranteed delivery, ACK-based          | Best-effort, no ACK    |
| **Ordering**            | Sequence numbers, in-order delivery     | No ordering            |
| **Flow Control**        | Sliding window                          | None                   |
| **Congestion Control**  | Ya (slow start, congestion avoidance)   | None                   |
| **Error Recovery**      | Retransmission on timeout/duplicate ACK | None                   |
| **Header Size**         | 20-60 bytes                             | 8 bytes                |
| **Overhead**            | Tinggi                                  | Rendah                 |
| **Speed**               | Relatif lambat                          | Cepat                  |
| **Broadcast/Multicast** | Tidak                                   | Ya                     |

**TCP Header (20-60 bytes):**

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
├───────────────────────────────┬───────────────────────────────┤
│          Source Port          │       Destination Port        │
├───────────────────────────────┴───────────────────────────────┤
│                        Sequence Number                        │
├───────────────────────────────────────────────────────────────┤
│                    Acknowledgment Number                      │
├───────┬───────┬─┬─┬─┬─┬─┬─┬───────────────────────────────────┤
│Offset │Reserve│U│A│P│R│S│F│            Window                 │
│       │       │R│C│S│S│Y│I│                                   │
│       │       │G│K│H│T│N│N│                                   │
├───────┴───────┴─┴─┴─┴─┴─┴─┼───────────────────────────────────┤
│          Checksum          │         Urgent Pointer           │
├────────────────────────────┴───────────────────────────────────┤
│                    Options (variable)                         │
└───────────────────────────────────────────────────────────────┘
```

**TCP Flags dan Fungsinya:**

| Flag    | Nama        | Fungsi                                         |
| ------- | ----------- | ---------------------------------------------- |
| **SYN** | Synchronize | Inisiasi koneksi, sinkronisasi sequence number |
| **ACK** | Acknowledge | Konfirmasi penerimaan data                     |
| **FIN** | Finish      | Request untuk menutup koneksi                  |
| **RST** | Reset       | Abort koneksi secara paksa                     |
| **PSH** | Push        | Kirim data segera ke aplikasi (jangan buffer)  |
| **URG** | Urgent      | Ada data urgent (gunakan urgent pointer)       |

**TCP Three-Way Handshake:**

```
Client                              Server
   │                                   │
   │ ──── SYN (seq=x) ───────────────→ │  1. Client initiates
   │                                   │
   │ ←── SYN-ACK (seq=y, ack=x+1) ──── │  2. Server responds
   │                                   │
   │ ──── ACK (ack=y+1) ─────────────→ │  3. Connection established
   │                                   │
   │ ═══════ DATA TRANSFER ══════════  │
```

**TCP Four-Way Termination:**

```
Client                              Server
   │                                   │
   │ ──── FIN ───────────────────────→ │  1. Client initiates close
   │                                   │
   │ ←──── ACK ───────────────────────│  2. Server acknowledges
   │                                   │
   │ ←──── FIN ───────────────────────│  3. Server closes
   │                                   │
   │ ──── ACK ───────────────────────→ │  4. Client acknowledges
   │                                   │
   TIME_WAIT (2×MSL)               CLOSED
```

**TCP Flow Control — Sliding Window:**

- Receiver mengiklankan **window size** (buffer available)
- Sender tidak boleh mengirim lebih dari window size tanpa ACK
- Window "slides" forward setelah menerima ACK
- Prevents receiver buffer overflow

**TCP Congestion Control:**

- **Slow Start:** Mulai dengan congestion window kecil, double setiap RTT
- **Congestion Avoidance:** Tambah linear setelah threshold
- **Fast Retransmit:** Retransmit setelah 3 duplicate ACKs
- **Fast Recovery:** Kurangi congestion window, lanjutkan transmisi

**UDP Header (8 bytes):**

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
├───────────────────────────────┬───────────────────────────────┤
│          Source Port          │       Destination Port        │
├───────────────────────────────┼───────────────────────────────┤
│             Length            │           Checksum            │
└───────────────────────────────┴───────────────────────────────┘
```

**Port Number Ranges:**

| Range           | Kategori          | Deskripsi                                  |
| --------------- | ----------------- | ------------------------------------------ |
| **0-1023**      | Well-known Ports  | Reserved untuk sistem dan services standar |
| **1024-49151**  | Registered Ports  | Untuk aplikasi vendor/user tertentu        |
| **49152-65535** | Dynamic/Ephemeral | Digunakan client untuk source port         |

**Use Cases:**

| Protokol | Application     | Alasan                                   |
| -------- | --------------- | ---------------------------------------- |
| **TCP**  | HTTP/HTTPS      | Webpage harus lengkap dan terurut        |
| **TCP**  | FTP             | File harus utuh tanpa corruption         |
| **TCP**  | SMTP/IMAP       | Email harus terkirim lengkap             |
| **TCP**  | SSH             | Session harus reliable                   |
| **UDP**  | DNS             | Query kecil, response cepat penting      |
| **UDP**  | VoIP            | Real-time, sedikit packet loss OK        |
| **UDP**  | Video streaming | Buffering handles loss, latency critical |
| **UDP**  | Online gaming   | Speed > reliability                      |
| **UDP**  | DHCP            | Broadcast, connectionless                |

**PDU (Protocol Data Unit):** **Segment (TCP)** / **Datagram (UDP)**

**Troubleshooting Layer 4:**

- `netstat -an` untuk melihat koneksi aktif
- `ss -tulpn` untuk listening ports
- Cek firewall rules untuk port blocking
- Verify aplikasi listening pada port yang benar
- Monitor untuk connection timeouts atau resets

---

#### Layer 5: Session Layer — "The Meeting Coordinator"

**Definisi:** Layer yang bertanggung jawab untuk establishing, maintaining, dan terminating sessions (dialog) antara dua end-system. Mengelola sesi komunikasi agar data dapat dipertukarkan secara terorganisir.

**Analogi:** Seperti koordinator meeting yang menjadwalkan rapat, memastikan semua peserta hadir, mengatur giliran bicara, dan menutup rapat dengan benar.

**Fungsi Utama:**

1. **Session Establishment:** Negosiasi dan setup koneksi antar aplikasi
2. **Session Maintenance:** Menjaga session aktif, menangani interruption
3. **Session Termination:** Mengakhiri session secara graceful
4. **Dialog Control:** Mengatur mode komunikasi (simplex/duplex)
5. **Synchronization:** Menambahkan checkpoint untuk recovery
6. **Token Management:** Mengontrol akses ke shared resources

**Mode Dialog:**

| Mode            | Deskripsi            | Contoh                       |
| --------------- | -------------------- | ---------------------------- |
| **Simplex**     | Satu arah saja       | TV broadcast, keyboard input |
| **Half-Duplex** | Dua arah, bergantian | Walkie-talkie, CB radio      |
| **Full-Duplex** | Dua arah, bersamaan  | Telepon, video call          |

**Mekanisme Session Layer:**

| Mekanisme               | Fungsi                           | Contoh               |
| ----------------------- | -------------------------------- | -------------------- |
| **Authentication**      | Verifikasi identitas             | Login credentials    |
| **Authorization**       | Verifikasi hak akses             | Permission check     |
| **Session Restoration** | Recovery setelah failure         | Resume download      |
| **Checkpointing**       | Save progress periodik           | Database transaction |
| **Activity Management** | Sinkronisasi multiple activities | RPC calls            |

**Protokol dan Teknologi:**

| Protokol/Teknologi              | Fungsi                                                      |
| ------------------------------- | ----------------------------------------------------------- |
| **NetBIOS**                     | Network Basic I/O System — session management untuk Windows |
| **RPC (Remote Procedure Call)** | Memanggil procedure di remote host                          |
| **PPTP**                        | Point-to-Point Tunneling — VPN sessions                     |
| **L2TP**                        | Layer 2 Tunneling Protocol                                  |
| **NFS**                         | Network File System — file sharing sessions                 |
| **SQL Sessions**                | Database connection management                              |
| **SIP**                         | Session Initiation Protocol — VoIP sessions                 |
| **H.323**                       | Multimedia conferencing sessions                            |

**Session States:**

1. **Idle:** Tidak ada session
2. **Establishing:** Negosiasi dan setup
3. **Established:** Session aktif, data dapat ditransfer
4. **Releasing:** Proses penutupan
5. **Closed:** Session selesai

**Contoh Praktis:**

- **Web Session:** Login → browse pages → logout (session cookie menjaga state)
- **Video Conference:** Setup call → communicate → end call
- **File Download:** Start → checkpoint → resume if interrupted → complete
- **Database:** Connect → query → transaction → disconnect

**PDU (Protocol Data Unit):** **Data**

> **Catatan:** Dalam praktik modern (TCP/IP), fungsi session layer sering digabung ke application layer atau ditangani oleh protokol seperti TLS.

---

#### Layer 6: Presentation Layer — "The Universal Translator"

**Definisi:** Layer yang bertanggung jawab untuk translasi, format, dan representasi data. Memastikan data dari application layer di satu sistem dapat dibaca oleh application layer di sistem lain, terlepas dari perbedaan internal representation.

**Analogi:** Seperti penerjemah di konferensi internasional yang mengkonversi bahasa dan memastikan semua peserta memahami pesan dengan benar.

**Fungsi Utama:**

1. **Data Translation:** Konversi format data antar sistem berbeda
2. **Character Encoding:** Transformasi karakter (ASCII ↔ EBCDIC ↔ Unicode)
3. **Data Encryption/Decryption:** Keamanan data dalam transit
4. **Data Compression/Decompression:** Efisiensi bandwidth
5. **Data Serialization:** Mengubah struktur data menjadi byte stream

**Proses Utama:**

| Proses            | Deskripsi                  | Contoh                      |
| ----------------- | -------------------------- | --------------------------- |
| **Translation**   | Konversi representasi data | EBCDIC ↔ ASCII              |
| **Encoding**      | Representasi karakter      | UTF-8, UTF-16, ISO-8859-1   |
| **Encryption**    | Mengamankan data           | TLS, AES, RSA               |
| **Compression**   | Mengurangi ukuran          | gzip, deflate, LZ77         |
| **Serialization** | Struktur → byte stream     | JSON, XML, Protocol Buffers |

**Encryption di Presentation Layer:**

| Protokol        | Tipe                   | Deskripsi                          |
| --------------- | ---------------------- | ---------------------------------- |
| **SSL**         | Symmetric + Asymmetric | Secure Sockets Layer (deprecated)  |
| **TLS 1.2/1.3** | Symmetric + Asymmetric | Transport Layer Security (current) |
| **HTTPS**       | TLS over HTTP          | Secure web browsing                |

**Format Data:**

| Kategori             | Format                        | Karakteristik              |
| -------------------- | ----------------------------- | -------------------------- |
| **Text**             | ASCII, UTF-8, UTF-16          | Character encoding         |
| **Images**           | JPEG, PNG, GIF, WebP          | Lossy/lossless compression |
| **Audio**            | MP3, AAC, FLAC, WAV           | Compressed/uncompressed    |
| **Video**            | H.264, H.265, VP9, AV1        | Codec untuk streaming      |
| **Documents**        | PDF, DOCX, ODT                | Structured documents       |
| **Data Interchange** | JSON, XML, YAML               | Application data           |
| **Binary**           | Protocol Buffers, MessagePack | Efficient serialization    |

**Compression Types:**

| Tipe         | Karakteristik                               | Contoh           |
| ------------ | ------------------------------------------- | ---------------- |
| **Lossless** | Data asli dapat di-recover sempurna         | ZIP, PNG, FLAC   |
| **Lossy**    | Beberapa data hilang untuk ratio lebih baik | JPEG, MP3, H.264 |

**Character Encoding Evolution:**

- **ASCII:** 7-bit, 128 karakter (English only)
- **Extended ASCII:** 8-bit, 256 karakter
- **ISO-8859-1:** 8-bit, Western European
- **Unicode:** Universal character set
  - **UTF-8:** Variable length (1-4 bytes), backward compatible dengan ASCII
  - **UTF-16:** 2 or 4 bytes per character
  - **UTF-32:** Fixed 4 bytes per character

**TLS Handshake Simplified:**

```
Client                              Server
   │                                   │
   │ ──── Client Hello ──────────────→ │  (TLS version, cipher suites)
   │                                   │
   │ ←──── Server Hello ───────────── │  (Chosen cipher, certificate)
   │                                   │
   │ ←──── Certificate ───────────────│  (Server's public key)
   │                                   │
   │ ──── Key Exchange ─────────────→ │  (Pre-master secret)
   │                                   │
   │ ←───→ Finished ←───→             │
   │                                   │
   │ ═════ Encrypted Data ═══════════ │
```

**PDU (Protocol Data Unit):** **Data**

> **Catatan:** Dalam TCP/IP model, presentation layer functions sering diimplementasikan di application layer (contoh: TLS di HTTPS).

---

#### Layer 7: Application Layer — "The User Interface"

**Definisi:** Layer tertinggi yang menyediakan antarmuka langsung antara aplikasi pengguna dan jaringan. Layer ini adalah titik di mana user applications mengakses network services.

**Analogi:** Seperti resepsionis hotel yang berinteraksi langsung dengan tamu dan menyediakan berbagai layanan — layer ini adalah "wajah" jaringan yang dilihat aplikasi.

**Fungsi Utama:**

1. **Network Service Access:** Menyediakan interface ke network services
2. **Resource Sharing:** Akses ke file, printer, dan resources lainnya
3. **Remote Access:** Akses ke remote hosts dan applications
4. **Network Management:** Monitoring dan management jaringan
5. **Email Services:** Sending dan receiving email
6. **Directory Services:** Lookup services (DNS, LDAP)

**Protokol Utama — Web:**

| Protokol      | Port   | Deskripsi                                       |
| ------------- | ------ | ----------------------------------------------- |
| **HTTP**      | 80     | HyperText Transfer Protocol — web browsing      |
| **HTTPS**     | 443    | HTTP Secure — encrypted web                     |
| **HTTP/2**    | 443    | Multiplexed, binary framing, header compression |
| **HTTP/3**    | 443    | QUIC-based, improved performance                |
| **WebSocket** | 80/443 | Full-duplex communication                       |

**HTTP Methods:**

| Method      | Idempotent | Safe | Use Case                     |
| ----------- | ---------- | ---- | ---------------------------- |
| **GET**     | Yes        | Yes  | Retrieve resource            |
| **POST**    | No         | No   | Create resource, submit data |
| **PUT**     | Yes        | No   | Replace entire resource      |
| **PATCH**   | No         | No   | Partial update               |
| **DELETE**  | Yes        | No   | Remove resource              |
| **HEAD**    | Yes        | Yes  | GET without body             |
| **OPTIONS** | Yes        | Yes  | Get supported methods        |

**HTTP Status Codes:**

| Range   | Category      | Examples                                                        |
| ------- | ------------- | --------------------------------------------------------------- |
| **1xx** | Informational | 100 Continue, 101 Switching Protocols                           |
| **2xx** | Success       | 200 OK, 201 Created, 204 No Content                             |
| **3xx** | Redirection   | 301 Moved Permanently, 302 Found, 304 Not Modified              |
| **4xx** | Client Error  | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **5xx** | Server Error  | 500 Internal Error, 502 Bad Gateway, 503 Service Unavailable    |

**Protokol — Email:**

| Protokol | Port    | Direction | Deskripsi                      |
| -------- | ------- | --------- | ------------------------------ |
| **SMTP** | 25/587  | Outgoing  | Send email                     |
| **POP3** | 110/995 | Incoming  | Download & delete from server  |
| **IMAP** | 143/993 | Incoming  | Sync with server, multi-device |

**Protokol — File Transfer:**

| Protokol     | Port  | Deskripsi                             |
| ------------ | ----- | ------------------------------------- |
| **FTP**      | 20/21 | File Transfer Protocol (data/control) |
| **SFTP**     | 22    | SSH File Transfer Protocol (secure)   |
| **FTPS**     | 990   | FTP over SSL/TLS                      |
| **SCP**      | 22    | Secure Copy Protocol                  |
| **SMB/CIFS** | 445   | Windows file sharing                  |
| **NFS**      | 2049  | UNIX file sharing                     |

**Protokol — Remote Access:**

| Protokol   | Port  | Deskripsi                              |
| ---------- | ----- | -------------------------------------- |
| **SSH**    | 22    | Secure Shell — encrypted remote access |
| **Telnet** | 23    | Unencrypted terminal (deprecated)      |
| **RDP**    | 3389  | Remote Desktop Protocol (Windows)      |
| **VNC**    | 5900+ | Virtual Network Computing              |

**Protokol — Network Services:**

| Protokol   | Port    | Deskripsi                            |
| ---------- | ------- | ------------------------------------ |
| **DNS**    | 53      | Domain Name System — name resolution |
| **DHCP**   | 67/68   | Dynamic Host Configuration           |
| **NTP**    | 123     | Network Time Protocol                |
| **SNMP**   | 161/162 | Simple Network Management            |
| **LDAP**   | 389/636 | Directory services                   |
| **Syslog** | 514     | System logging                       |

**DNS Record Types:**

| Type      | Deskripsi                    |
| --------- | ---------------------------- |
| **A**     | IPv4 address                 |
| **AAAA**  | IPv6 address                 |
| **CNAME** | Canonical name (alias)       |
| **MX**    | Mail exchange                |
| **NS**    | Name server                  |
| **PTR**   | Pointer (reverse lookup)     |
| **TXT**   | Text record (SPF, DKIM, etc) |
| **SOA**   | Start of Authority           |
| **SRV**   | Service locator              |

**DHCP Process (DORA):**

| Step | Message         | Direction          | Purpose                |
| ---- | --------------- | ------------------ | ---------------------- |
| 1    | **D**iscover    | Client → Broadcast | Find DHCP server       |
| 2    | **O**ffer       | Server → Client    | Offer IP configuration |
| 3    | **R**equest     | Client → Broadcast | Accept offer           |
| 4    | **A**cknowledge | Server → Client    | Confirm assignment     |

**PDU (Protocol Data Unit):** **Data/Message**

**Troubleshooting Layer 7:**

- `nslookup/dig` untuk DNS
- `curl/wget` untuk HTTP testing
- Cek application logs
- Verify service running dan listening
- Test dengan protocol-specific tools

---

### 2.2 Ringkasan Layer (Bottom-Up)

| Layer | Nama         | PDU     | Address | Device         | Fungsi Utama             |
| ----- | ------------ | ------- | ------- | -------------- | ------------------------ |
| 1     | Physical     | Bits    | -       | Hub, Repeater  | Transmisi sinyal fisik   |
| 2     | Data Link    | Frame   | MAC     | Switch, Bridge | Node-to-node delivery    |
| 3     | Network      | Packet  | IP      | Router         | End-to-end routing       |
| 4     | Transport    | Segment | Port    | -              | Process-to-process       |
| 5     | Session      | Data    | -       | -              | Session management       |
| 6     | Presentation | Data    | -       | -              | Data format & encryption |
| 7     | Application  | Data    | -       | Gateway        | Network services         |

**Mnemonic (Bottom-Up):** **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

### 2.2 Enkapsulasi Data

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      PROSES ENKAPSULASI                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  SENDER                                          RECEIVER               │
│                                                                         │
│  Layer 7-5    ┌──────────┐                      ┌──────────┐            │
│               │   DATA   │                      │   DATA   │            │
│               └──────────┘                      └──────────┘            │
│                    ↓                                 ↑                  │
│  Layer 4     ┌────┬──────────┐              ┌────┬──────────┐           │
│              │ H4 │   DATA   │              │ H4 │   DATA   │           │
│              └────┴──────────┘  SEGMENT     └────┴──────────┘           │
│                    ↓                                 ↑                  │
│  Layer 3    ┌────┬────┬──────────┐      ┌────┬────┬──────────┐          │
│             │ H3 │ H4 │   DATA   │      │ H3 │ H4 │   DATA   │          │
│             └────┴────┴──────────┘      └────┴────┴──────────┘          │
│                    ↓            PACKET           ↑                      │
│  Layer 2   ┌────┬────┬────┬──────────┬────┐┌────┬────┬────┬──────────┬──┐│
│            │ H2 │ H3 │ H4 │   DATA   │ T2 ││ H2 │ H3 │ H4 │   DATA   │T2││
│            └────┴────┴────┴──────────┴────┘└────┴────┴────┴──────────┴──┘│
│                    ↓            FRAME            ↑                      │
│  Layer 1        101010110101...    →→→    101010110101...               │
│                     BITS                                                │
│                                                                         │
│  H = Header    T = Trailer                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Model TCP/IP

Model TCP/IP adalah implementasi praktis dari model OSI yang digunakan di internet.

### 3.1 Perbandingan OSI vs TCP/IP

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    OSI Model  vs  TCP/IP Model                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│      OSI (7 Layer)                    TCP/IP (4 Layer)                  │
│   ┌────────────────┐                ┌────────────────┐                  │
│   │  Application   │ ───┐           │                │                  │
│   ├────────────────┤    ├──────────→│  Application   │                  │
│   │  Presentation  │ ───┤           │                │                  │
│   ├────────────────┤    │           ├────────────────┤                  │
│   │    Session     │ ───┘           │                │                  │
│   ├────────────────┤                ├────────────────┤                  │
│   │   Transport    │ ──────────────→│   Transport    │                  │
│   ├────────────────┤                ├────────────────┤                  │
│   │    Network     │ ──────────────→│    Internet    │                  │
│   ├────────────────┤                ├────────────────┤                  │
│   │   Data Link    │ ───┐           │                │                  │
│   ├────────────────┤    ├──────────→│ Network Access │                  │
│   │    Physical    │ ───┘           │                │                  │
│   └────────────────┘                └────────────────┘                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Layer TCP/IP

| Layer              | Fungsi                          | Protokol                  |
| ------------------ | ------------------------------- | ------------------------- |
| **Application**    | Interaksi user, data formatting | HTTP, FTP, SMTP, DNS, SSH |
| **Transport**      | End-to-end communication        | TCP, UDP                  |
| **Internet**       | Logical addressing, routing     | IP, ICMP, ARP             |
| **Network Access** | Physical transmission           | Ethernet, Wi-Fi, PPP      |

---

## 4. IP Addressing

### 4.1 IPv4

**Format:** 32-bit, ditulis dalam dotted-decimal (4 oktet)
**Contoh:** `192.168.1.100`

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         IPv4 ADDRESS FORMAT                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│      Decimal:     192    .    168    .     1     .    100               │
│                    │          │           │           │                 │
│      Binary:   11000000   10101000   00000001   01100100                │
│                └────────────────────────────────────────┘               │
│                           32 bits total                                 │
│                                                                         │
│  Network Portion          │         Host Portion                        │
│  (Identifies network)     │    (Identifies device)                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Kelas IP Address (Classful)

| Kelas | Range Oktet 1 | Default Subnet      | Network/Host Bits | Jumlah Host |
| ----- | ------------- | ------------------- | ----------------- | ----------- |
| **A** | 1-126         | 255.0.0.0 (/8)      | 8/24              | 16,777,214  |
| **B** | 128-191       | 255.255.0.0 (/16)   | 16/16             | 65,534      |
| **C** | 192-223       | 255.255.255.0 (/24) | 24/8              | 254         |
| **D** | 224-239       | Multicast           | -                 | -           |
| **E** | 240-255       | Experimental        | -                 | -           |

> **Catatan:** 127.x.x.x adalah loopback address (localhost)

### 4.3 IP Address Khusus

| Alamat            | Fungsi                        |
| ----------------- | ----------------------------- |
| `0.0.0.0`         | Default route / this network  |
| `127.0.0.1`       | Loopback (localhost)          |
| `255.255.255.255` | Limited broadcast             |
| `x.x.x.0`         | Network address               |
| `x.x.x.255`       | Broadcast address (untuk /24) |

### 4.4 Private IP Address (RFC 1918)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     PRIVATE IP ADDRESS RANGES                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   Class A:    10.0.0.0    -    10.255.255.255    (10.0.0.0/8)           │
│               ├───────────────────────────────────────────┤             │
│               1 Network, 16,777,214 Hosts                               │
│                                                                         │
│   Class B:    172.16.0.0  -    172.31.255.255    (172.16.0.0/12)        │
│               ├───────────────────────────────────────────┤             │
│               16 Networks, 1,048,574 Hosts                              │
│                                                                         │
│   Class C:    192.168.0.0 -    192.168.255.255   (192.168.0.0/16)       │
│               ├───────────────────────────────────────────┤             │
│               256 Networks, 65,534 Hosts                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.5 Subnetting

**Subnet Mask** menentukan porsi network dan host dari IP address.

**CIDR Notation:** `/prefix` menunjukkan jumlah bit network

**Rumus Penting:**

- **Jumlah Subnet:** $2^n$ (n = bit yang dipinjam)
- **Jumlah Host per Subnet:** $2^h - 2$ (h = bit host tersisa)
- **Block Size:** $256 - \text{nilai oktet subnet}$

<div class="subnet-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .subnet-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .subnet-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .subnet-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .subnet-viz h4 {
          color: #f3f4f6 !important;
        }
        .subnet-example {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 15px;
        }
        html.dark .subnet-example {
          background: #111827;
        }
        .subnet-ip {
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        html.dark .subnet-ip {
          color: #f3f4f6;
        }
        .subnet-binary {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin: 10px 0;
          flex-wrap: wrap;
        }
        .subnet-octet {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .subnet-bits {
          display: flex;
          gap: 1px;
        }
        .subnet-bit {
          width: 14px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 600;
          border-radius: 2px;
        }
        .subnet-bit.network {
          background: #3498db;
          color: white;
        }
        .subnet-bit.host {
          background: #2ecc71;
          color: white;
        }
        html.dark .subnet-bit.network {
          background: #2563eb;
        }
        html.dark .subnet-bit.host {
          background: #059669;
        }
        .subnet-octet-label {
          font-size: 0.6rem;
          color: #666;
          margin-top: 3px;
        }
        html.dark .subnet-octet-label {
          color: #9ca3af;
        }
        .subnet-legend {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
          font-size: 0.7rem;
        }
        .subnet-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #666;
        }
        html.dark .subnet-legend-item {
          color: #d1d5db;
        }
        .subnet-legend-box {
          width: 14px;
          height: 14px;
          border-radius: 3px;
        }
        .subnet-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 15px;
          font-size: 0.75rem;
        }
        .subnet-info-item {
          background: #fff;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
        }
        html.dark .subnet-info-item {
          background: #1f2937;
          border-color: #374151;
          color: #d1d5db;
        }
        .subnet-info-label {
          font-weight: 600;
          color: #666;
          font-size: 0.65rem;
          margin-bottom: 3px;
        }
        html.dark .subnet-info-label {
          color: #9ca3af;
        }
        .subnet-info-value {
          color: #2c3e50;
          font-weight: 600;
        }
        html.dark .subnet-info-value {
          color: #f3f4f6;
        }
        @media (min-width: 640px) {
          .subnet-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
          .subnet-bit {
            width: 18px;
            height: 24px;
            font-size: 0.7rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Contoh Subnetting: 192.168.1.0/26</h4>
  
  <div class="subnet-example">
    <div class="subnet-ip">192.168.1.0 / 26</div>
    <div class="subnet-binary">
      <div class="subnet-octet">
        <div class="subnet-bits">
          <div class="subnet-bit network">1</div>
          <div class="subnet-bit network">1</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
        </div>
        <span class="subnet-octet-label">192</span>
      </div>
      <div class="subnet-octet">
        <div class="subnet-bits">
          <div class="subnet-bit network">1</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">1</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">1</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
        </div>
        <span class="subnet-octet-label">168</span>
      </div>
      <div class="subnet-octet">
        <div class="subnet-bits">
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">1</div>
        </div>
        <span class="subnet-octet-label">1</span>
      </div>
      <div class="subnet-octet">
        <div class="subnet-bits">
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit network">0</div>
          <div class="subnet-bit host">0</div>
          <div class="subnet-bit host">0</div>
          <div class="subnet-bit host">0</div>
          <div class="subnet-bit host">0</div>
          <div class="subnet-bit host">0</div>
          <div class="subnet-bit host">0</div>
        </div>
        <span class="subnet-octet-label">0</span>
      </div>
    </div>
    <div class="subnet-legend">
      <div class="subnet-legend-item">
        <div class="subnet-legend-box" style="background: #3498db;"></div> Network (26 bits)
      </div>
      <div class="subnet-legend-item">
        <div class="subnet-legend-box" style="background: #2ecc71;"></div> Host (6 bits)
      </div>
    </div>
  </div>
  
  <div class="subnet-info">
    <div class="subnet-info-item">
      <div class="subnet-info-label">Subnet Mask</div>
      <div class="subnet-info-value">255.255.255.192</div>
    </div>
    <div class="subnet-info-item">
      <div class="subnet-info-label">Usable Hosts</div>
      <div class="subnet-info-value">2⁶ - 2 = 62</div>
    </div>
    <div class="subnet-info-item">
      <div class="subnet-info-label">Network Address</div>
      <div class="subnet-info-value">192.168.1.0</div>
    </div>
    <div class="subnet-info-item">
      <div class="subnet-info-label">Broadcast</div>
      <div class="subnet-info-value">192.168.1.63</div>
    </div>
  </div>
</div>

#### Tabel Subnet Mask Umum

| CIDR | Subnet Mask     | Host Bits | Usable Hosts | Block Size |
| ---- | --------------- | --------- | ------------ | ---------- |
| /24  | 255.255.255.0   | 8         | 254          | 256        |
| /25  | 255.255.255.128 | 7         | 126          | 128        |
| /26  | 255.255.255.192 | 6         | 62           | 64         |
| /27  | 255.255.255.224 | 5         | 30           | 32         |
| /28  | 255.255.255.240 | 4         | 14           | 16         |
| /29  | 255.255.255.248 | 3         | 6            | 8          |
| /30  | 255.255.255.252 | 2         | 2            | 4          |
| /31  | 255.255.255.254 | 1         | 0\*          | 2          |
| /32  | 255.255.255.255 | 0         | 1            | 1          |

> \*_/31 digunakan untuk point-to-point links (RFC 3021)_

### 4.6 IPv6

**Format:** 128-bit, ditulis dalam hexadecimal (8 grup x 16 bit)
**Contoh:** `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         IPv6 ADDRESS FORMAT                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   Full:     2001:0db8:85a3:0000:0000:8a2e:0370:7334                     │
│                                                                         │
│   Compressed Rules:                                                     │
│   1. Leading zeros dapat dihilangkan:  0db8 → db8                       │
│   2. Grup 0000 berturut-turut → :: (sekali saja)                        │
│                                                                         │
│   Compressed: 2001:db8:85a3::8a2e:370:7334                              │
│                                                                         │
│   ┌────────────────────────────┬────────────────────────────┐           │
│   │     Network Prefix         │       Interface ID         │           │
│   │        (64 bits)           │        (64 bits)           │           │
│   └────────────────────────────┴────────────────────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Tipe IPv6 Address

| Tipe               | Prefix    | Deskripsi                             |
| ------------------ | --------- | ------------------------------------- |
| **Global Unicast** | 2000::/3  | Public routable (seperti IPv4 public) |
| **Link-Local**     | fe80::/10 | Otomatis, hanya untuk local link      |
| **Unique Local**   | fc00::/7  | Private address (seperti 10.x.x.x)    |
| **Multicast**      | ff00::/8  | One-to-many communication             |
| **Loopback**       | ::1       | Localhost                             |
| **Unspecified**    | ::        | Seperti 0.0.0.0                       |

#### IPv4 vs IPv6

| Aspek               | IPv4                   | IPv6             |
| ------------------- | ---------------------- | ---------------- |
| **Address Size**    | 32-bit                 | 128-bit          |
| **Total Addresses** | ~4.3 billion           | ~340 undecillion |
| **Format**          | Decimal                | Hexadecimal      |
| **Header**          | Variable (20-60 bytes) | Fixed (40 bytes) |
| **NAT**             | Required               | Not needed       |
| **IPSec**           | Optional               | Built-in         |
| **Broadcast**       | Yes                    | No (Multicast)   |

---

## 5. Transport Layer Protocols

### 5.1 TCP (Transmission Control Protocol)

TCP adalah protokol connection-oriented yang menjamin pengiriman data secara reliable dan terurut.

#### TCP Three-Way Handshake

<div class="tcp-handshake-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .tcp-handshake-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .tcp-handshake-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .tcp-handshake-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .tcp-handshake-viz h4 {
          color: #f3f4f6 !important;
        }
        .tcp-diagram {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding: 20px 0;
        }
        .tcp-host {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80px;
          z-index: 2;
        }
        .tcp-host-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3498db, #2980b9);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        .tcp-host-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #2c3e50;
        }
        html.dark .tcp-host-label {
          color: #f3f4f6;
        }
        .tcp-timeline {
          position: absolute;
          left: 65px;
          right: 65px;
          top: 80px;
          bottom: 20px;
        }
        .tcp-line-left, .tcp-line-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #e0e0e0;
        }
        html.dark .tcp-line-left, html.dark .tcp-line-right {
          background: #374151;
        }
        .tcp-line-left { left: 0; }
        .tcp-line-right { right: 0; }
        .tcp-arrow {
          position: absolute;
          display: flex;
          align-items: center;
          font-size: 0.7rem;
        }
        .tcp-arrow-line {
          flex: 1;
          height: 2px;
          position: relative;
        }
        .tcp-arrow-right .tcp-arrow-line {
          background: linear-gradient(to right, #3498db, #2ecc71);
        }
        .tcp-arrow-left .tcp-arrow-line {
          background: linear-gradient(to left, #3498db, #e74c3c);
        }
        .tcp-arrow-right .tcp-arrow-line::after {
          content: '▶';
          position: absolute;
          right: -8px;
          top: -7px;
          color: #2ecc71;
        }
        .tcp-arrow-left .tcp-arrow-line::before {
          content: '◀';
          position: absolute;
          left: -8px;
          top: -7px;
          color: #e74c3c;
        }
        .tcp-arrow-label {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
          white-space: nowrap;
        }
        html.dark .tcp-arrow-label {
          background: #1f2937;
          color: #f3f4f6;
        }
        .tcp-step {
          position: absolute;
          left: -25px;
          width: 20px;
          height: 20px;
          background: #f39c12;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 700;
        }
        .tcp-explanation {
          margin-top: 15px;
          font-size: 0.75rem;
          color: #555;
        }
        html.dark .tcp-explanation {
          color: #d1d5db;
        }
        .tcp-explanation ol {
          margin: 0;
          padding-left: 20px;
        }
        .tcp-explanation li {
          margin-bottom: 5px;
        }
        .tcp-flag {
          background: #e8f4f8;
          padding: 1px 5px;
          border-radius: 3px;
          font-weight: 600;
          color: #2980b9;
        }
        html.dark .tcp-flag {
          background: #1e3a5f;
          color: #60a5fa;
        }
        @media (min-width: 640px) {
          .tcp-handshake-viz {
            max-width: 550px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>TCP Three-Way Handshake</h4>
  
  <div class="tcp-diagram">
    <div class="tcp-host">
      <div class="tcp-host-icon">💻</div>
      <span class="tcp-host-label">Client</span>
    </div>
    <div class="tcp-host">
      <div class="tcp-host-icon">🖥️</div>
      <span class="tcp-host-label">Server</span>
    </div>
    <div class="tcp-timeline">
      <div class="tcp-line-left"></div>
      <div class="tcp-line-right"></div>
      <!-- SYN -->
      <div class="tcp-arrow tcp-arrow-right" style="top: 20px; left: 3px; right: 3px;">
        <div class="tcp-step">1</div>
        <div class="tcp-arrow-line">
          <span class="tcp-arrow-label" style="color: #3498db;">SYN (seq=x)</span>
        </div>
      </div>
      <!-- SYN-ACK -->
      <div class="tcp-arrow tcp-arrow-left" style="top: 70px; left: 3px; right: 3px;">
        <div class="tcp-step" style="left: auto; right: -25px;">2</div>
        <div class="tcp-arrow-line">
          <span class="tcp-arrow-label" style="color: #9b59b6;">SYN-ACK (seq=y, ack=x+1)</span>
        </div>
      </div>
      <!-- ACK -->
      <div class="tcp-arrow tcp-arrow-right" style="top: 120px; left: 3px; right: 3px;">
        <div class="tcp-step">3</div>
        <div class="tcp-arrow-line">
          <span class="tcp-arrow-label" style="color: #2ecc71;">ACK (ack=y+1)</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="tcp-explanation">
    <ol>
      <li><span class="tcp-flag">SYN</span> Client mengirim request koneksi dengan sequence number</li>
      <li><span class="tcp-flag">SYN-ACK</span> Server merespons dengan acknowledge dan sequence number sendiri</li>
      <li><span class="tcp-flag">ACK</span> Client mengonfirmasi, koneksi established</li>
    </ol>
  </div>
</div>

#### TCP Header (20-60 bytes)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          TCP HEADER FORMAT                              │
├─────────────────────────────────────────────────────────────────────────┤
│  0                   1                   2                   3          │
│  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1        │
│ ┌───────────────────────────────┬───────────────────────────────┐       │
│ │       Source Port (16)        │    Destination Port (16)      │       │
│ ├───────────────────────────────┴───────────────────────────────┤       │
│ │                   Sequence Number (32)                        │       │
│ ├───────────────────────────────────────────────────────────────┤       │
│ │                 Acknowledgment Number (32)                    │       │
│ ├────────┬────────┬─────────────┬───────────────────────────────┤       │
│ │Offset  │Reserved│   Flags     │         Window (16)           │       │
│ │  (4)   │  (3)   │    (9)      │                               │       │
│ ├────────┴────────┴─────────────┼───────────────────────────────┤       │
│ │       Checksum (16)           │     Urgent Pointer (16)       │       │
│ ├───────────────────────────────┴───────────────────────────────┤       │
│ │                    Options (if any)                           │       │
│ └───────────────────────────────────────────────────────────────┘       │
│                                                                         │
│  Flags: URG, ACK, PSH, RST, SYN, FIN                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

#### TCP Flags

| Flag    | Nama        | Fungsi                        |
| ------- | ----------- | ----------------------------- |
| **SYN** | Synchronize | Inisiasi koneksi              |
| **ACK** | Acknowledge | Konfirmasi penerimaan         |
| **FIN** | Finish      | Terminasi koneksi             |
| **RST** | Reset       | Abort koneksi                 |
| **PSH** | Push        | Kirim data segera ke aplikasi |
| **URG** | Urgent      | Data urgent                   |

#### TCP Connection Termination (Four-Way Handshake)

```
      Client                    Server
         │                         │
         │──── FIN ───────────────→│  1. Client initiates close
         │                         │
         │←─── ACK ────────────────│  2. Server acknowledges
         │                         │
         │←─── FIN ────────────────│  3. Server closes its side
         │                         │
         │──── ACK ───────────────→│  4. Client acknowledges
         │                         │
      CLOSED                    CLOSED
```

### 5.2 UDP (User Datagram Protocol)

UDP adalah protokol connectionless yang cepat tapi tidak reliable.

#### UDP Header (8 bytes)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          UDP HEADER FORMAT                              │
├─────────────────────────────────────────────────────────────────────────┤
│  0                   1                   2                   3          │
│  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1        │
│ ┌───────────────────────────────┬───────────────────────────────┐       │
│ │       Source Port (16)        │    Destination Port (16)      │       │
│ ├───────────────────────────────┼───────────────────────────────┤       │
│ │         Length (16)           │        Checksum (16)          │       │
│ └───────────────────────────────┴───────────────────────────────┘       │
│                                                                         │
│  Simple header = Low overhead = Fast transmission                       │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Kapan Menggunakan TCP vs UDP

| Use Case                  | TCP | UDP |
| ------------------------- | --- | --- |
| Web browsing (HTTP/HTTPS) | ✓   |     |
| Email (SMTP, IMAP)        | ✓   |     |
| File transfer (FTP)       | ✓   |     |
| DNS queries               |     | ✓   |
| Video streaming           |     | ✓   |
| VoIP                      |     | ✓   |
| Online gaming             |     | ✓   |
| DHCP                      |     | ✓   |

### 5.3 Port Numbers

Port adalah endpoint logical untuk komunikasi.

| Range           | Nama             | Contoh                           |
| --------------- | ---------------- | -------------------------------- |
| **0-1023**      | Well-known Ports | HTTP (80), HTTPS (443), SSH (22) |
| **1024-49151**  | Registered Ports | MySQL (3306), PostgreSQL (5432)  |
| **49152-65535** | Dynamic/Private  | Client-side ports                |

#### Port Umum yang Wajib Dihapal

| Port   | Protokol | Layanan              |
| ------ | -------- | -------------------- |
| 20, 21 | TCP      | FTP (data/control)   |
| 22     | TCP      | SSH                  |
| 23     | TCP      | Telnet               |
| 25     | TCP      | SMTP                 |
| 53     | TCP/UDP  | DNS                  |
| 67, 68 | UDP      | DHCP (server/client) |
| 80     | TCP      | HTTP                 |
| 110    | TCP      | POP3                 |
| 143    | TCP      | IMAP                 |
| 443    | TCP      | HTTPS                |
| 3389   | TCP      | RDP                  |

---

## 6. Routing

Routing adalah proses menentukan jalur terbaik untuk mengirim paket dari sumber ke tujuan.

### 6.1 Konsep Dasar Routing

<div class="routing-concept-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .routing-concept-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .routing-concept-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .routing-concept-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .routing-concept-viz h4 {
          color: #f3f4f6 !important;
        }
        .rc-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        html.dark .rc-diagram {
          background: #111827;
        }
        .rc-network {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .rc-network-label {
          font-weight: 700;
          font-size: 0.7rem;
          padding: 5px 10px;
          border-radius: 5px;
          color: white;
        }
        .rc-net-a { background: linear-gradient(135deg, #3498db, #2980b9); }
        .rc-net-b { background: linear-gradient(135deg, #27ae60, #1e8449); }
        .rc-devices {
          display: flex;
          gap: 8px;
        }
        .rc-device {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.6rem;
          color: #666;
        }
        html.dark .rc-device {
          color: #9ca3af;
        }
        .rc-device-icon {
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          border: 2px solid #e0e0e0;
          margin-bottom: 3px;
        }
        html.dark .rc-device-icon {
          background: #1f2937;
          border-color: #374151;
        }
        .rc-router {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rc-router-box {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          position: relative;
        }
        .rc-router-label {
          font-weight: 700;
          font-size: 0.75rem;
          color: #e74c3c;
          margin-top: 5px;
        }
        html.dark .rc-router-label {
          color: #f87171;
        }
        .rc-link {
          flex: 1;
          height: 4px;
          background: linear-gradient(to right, #3498db, #e74c3c);
          border-radius: 2px;
          position: relative;
        }
        .rc-link-b {
          background: linear-gradient(to right, #e74c3c, #27ae60);
        }
        .rc-link-label {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.55rem;
          color: #666;
          white-space: nowrap;
          background: white;
          padding: 1px 5px;
          border-radius: 3px;
        }
        html.dark .rc-link-label {
          background: #1f2937;
          color: #9ca3af;
        }
        .rc-table {
          font-size: 0.7rem;
        }
        .rc-table-title {
          font-weight: 700;
          font-size: 0.75rem;
          color: #2c3e50;
          margin-bottom: 8px;
          text-align: center;
        }
        html.dark .rc-table-title {
          color: #f3f4f6;
        }
        .rc-table table {
          width: 100%;
          border-collapse: collapse;
        }
        .rc-table th, .rc-table td {
          padding: 8px 10px;
          border: 1px solid #e0e0e0;
          text-align: center;
        }
        html.dark .rc-table th, html.dark .rc-table td {
          border-color: #374151;
        }
        .rc-table th {
          background: linear-gradient(135deg, #34495e, #2c3e50);
          color: white;
          font-weight: 600;
        }
        .rc-table td {
          background: #f8f9fa;
        }
        html.dark .rc-table td {
          background: #111827;
          color: #d1d5db;
        }
        @media (max-width: 500px) {
          .rc-diagram {
            flex-direction: column;
            gap: 15px;
          }
          .rc-link {
            width: 4px;
            height: 30px;
            background: linear-gradient(to bottom, #3498db, #e74c3c) !important;
          }
          .rc-link-label {
            top: 50%;
            left: auto;
            right: -50px;
            transform: translateY(-50%);
          }
        }
        @media (min-width: 640px) {
          .routing-concept-viz {
            max-width: 700px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Konsep Routing Dasar</h4>
  
  <div class="rc-diagram">
    <div class="rc-network">
      <span class="rc-network-label rc-net-a">Network A<br>10.0.0.0/24</span>
      <div class="rc-devices">
        <div class="rc-device">
          <div class="rc-device-icon">💻</div>
          <span>PC1</span>
          <span>.10</span>
        </div>
        <div class="rc-device">
          <div class="rc-device-icon">💻</div>
          <span>PC2</span>
          <span>.20</span>
        </div>
      </div>
    </div>
    <div class="rc-link">
      <span class="rc-link-label">eth0 (.1)</span>
    </div>
    <div class="rc-router">
      <div class="rc-router-box">📡</div>
      <span class="rc-router-label">Router R1</span>
    </div>
    <div class="rc-link rc-link-b">
      <span class="rc-link-label">eth1 (.1)</span>
    </div>
    <div class="rc-network">
      <span class="rc-network-label rc-net-b">Network B<br>20.0.0.0/24</span>
      <div class="rc-devices">
        <div class="rc-device">
          <div class="rc-device-icon">🖥️</div>
          <span>PC3</span>
          <span>.10</span>
        </div>
        <div class="rc-device">
          <div class="rc-device-icon">🖥️</div>
          <span>PC4</span>
          <span>.20</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="rc-table">
    <div class="rc-table-title">📋 Routing Table R1</div>
    <table>
      <tr>
        <th>Destination</th>
        <th>Mask</th>
        <th>Gateway</th>
        <th>Interface</th>
      </tr>
      <tr>
        <td>10.0.0.0</td>
        <td>255.255.255.0</td>
        <td>Directly Connected</td>
        <td>eth0</td>
      </tr>
      <tr>
        <td>20.0.0.0</td>
        <td>255.255.255.0</td>
        <td>Directly Connected</td>
        <td>eth1</td>
      </tr>
      <tr>
        <td>0.0.0.0</td>
        <td>0.0.0.0</td>
        <td>ISP Router</td>
        <td>eth2</td>
      </tr>
    </table>
  </div>
</div>

### 6.2 Tipe Routing

| Tipe                | Deskripsi                              | Kelebihan                     | Kekurangan                     |
| ------------------- | -------------------------------------- | ----------------------------- | ------------------------------ |
| **Static Routing**  | Dikonfigurasi manual                   | Simple, secure, low overhead  | Tidak scalable, tidak adaptif  |
| **Dynamic Routing** | Otomatis via protokol                  | Scalable, self-healing        | Complex, overhead lebih tinggi |
| **Default Routing** | Route untuk semua unknown destinations | Simple gateway of last resort | Tidak optimal                  |

### 6.3 Routing Protocols

<div class="routing-protocol-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .routing-protocol-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .routing-protocol-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .routing-protocol-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .routing-protocol-viz h4 {
          color: #f3f4f6 !important;
        }
        .rp-tree {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rp-root {
          background: linear-gradient(135deg, #2c3e50, #34495e);
          color: white;
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 15px;
        }
        .rp-branches {
          display: flex;
          gap: 30px;
          position: relative;
        }
        .rp-branches::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 50%;
          width: 2px;
          height: 15px;
          background: #bdc3c7;
        }
        html.dark .rp-branches::before {
          background: #4b5563;
        }
        .rp-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .rp-branch::before {
          content: '';
          position: absolute;
          top: -15px;
          width: 100%;
          height: 2px;
          background: #bdc3c7;
        }
        html.dark .rp-branch::before {
          background: #4b5563;
        }
        .rp-category {
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: 10px;
          color: white;
        }
        .rp-igp { background: linear-gradient(135deg, #3498db, #2980b9); }
        .rp-egp { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .rp-protocols {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .rp-protocol {
          background: #f8f9fa;
          padding: 8px 15px;
          border-radius: 6px;
          font-size: 0.7rem;
          text-align: center;
          border-left: 3px solid;
        }
        html.dark .rp-protocol {
          background: #111827;
          color: #d1d5db;
        }
        .rp-dv { border-color: #e74c3c; }
        .rp-ls { border-color: #2ecc71; }
        .rp-hybrid { border-color: #f39c12; }
        .rp-path { border-color: #9b59b6; }
        .rp-type {
          font-size: 0.6rem;
          color: #666;
          font-style: italic;
        }
        html.dark .rp-type {
          color: #9ca3af;
        }
        @media (max-width: 500px) {
          .rp-branches {
            flex-direction: column;
            gap: 20px;
          }
          .rp-branches::before {
            width: 2px;
            height: 100%;
            top: 0;
          }
          .rp-branch::before {
            display: none;
          }
        }
        @media (min-width: 640px) {
          .routing-protocol-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Klasifikasi Routing Protocols</h4>
  
  <div class="rp-tree">
    <div class="rp-root">Dynamic Routing Protocols</div>
    <div class="rp-branches">
      <div class="rp-branch">
        <div class="rp-category rp-igp">IGP (Interior Gateway)</div>
        <div class="rp-protocols">
          <div class="rp-protocol rp-dv">
            <strong>RIP</strong>
            <div class="rp-type">Distance Vector</div>
          </div>
          <div class="rp-protocol rp-ls">
            <strong>OSPF</strong>
            <div class="rp-type">Link State</div>
          </div>
          <div class="rp-protocol rp-ls">
            <strong>IS-IS</strong>
            <div class="rp-type">Link State</div>
          </div>
          <div class="rp-protocol rp-hybrid">
            <strong>EIGRP</strong>
            <div class="rp-type">Hybrid (Cisco)</div>
          </div>
        </div>
      </div>
      <div class="rp-branch">
        <div class="rp-category rp-egp">EGP (Exterior Gateway)</div>
        <div class="rp-protocols">
          <div class="rp-protocol rp-path">
            <strong>BGP</strong>
            <div class="rp-type">Path Vector</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

#### Perbandingan Routing Protocols

| Protokol  | Tipe            | Algoritma    | Metric            | Max Hops  | Convergence |
| --------- | --------------- | ------------ | ----------------- | --------- | ----------- |
| **RIP**   | Distance Vector | Bellman-Ford | Hop count         | 15        | Slow        |
| **RIPv2** | Distance Vector | Bellman-Ford | Hop count         | 15        | Slow        |
| **OSPF**  | Link State      | Dijkstra     | Cost (bandwidth)  | Unlimited | Fast        |
| **EIGRP** | Hybrid          | DUAL         | Composite         | 255       | Very Fast   |
| **BGP**   | Path Vector     | Best Path    | AS Path, policies | -         | Variable    |

### 6.4 Administrative Distance

Ketika ada multiple routes ke destination yang sama, Administrative Distance menentukan route mana yang dipilih.

| Route Source  | AD  |
| ------------- | --- |
| Connected     | 0   |
| Static        | 1   |
| EIGRP Summary | 5   |
| eBGP          | 20  |
| EIGRP         | 90  |
| OSPF          | 110 |
| IS-IS         | 115 |
| RIP           | 120 |
| iBGP          | 200 |
| Unknown       | 255 |

> **Semakin kecil AD, semakin trusted route tersebut**

---

## 7. Network Devices

### 7.1 Perbandingan Network Devices

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NETWORK DEVICES BY OSI LAYER                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Layer 7-4   ┌─────────────────────────────────────────────────────┐    │
│  Application │                    FIREWALL                         │    │
│  to Transport│     Application Gateway, Proxy, Deep Inspection     │    │
│              └─────────────────────────────────────────────────────┘    │
│                                                                         │
│  Layer 3     ┌─────────────────────────────────────────────────────┐    │
│  Network     │                     ROUTER                          │    │
│              │     Routes packets between different networks       │    │
│              │     Uses IP addresses, routing tables              │    │
│              └─────────────────────────────────────────────────────┘    │
│                                                                         │
│  Layer 2     ┌─────────────────────────────────────────────────────┐    │
│  Data Link   │                     SWITCH                          │    │
│              │     Forwards frames within same network             │    │
│              │     Uses MAC addresses, MAC address table          │    │
│              └─────────────────────────────────────────────────────┘    │
│                                                                         │
│  Layer 1     ┌─────────────────────────────────────────────────────┐    │
│  Physical    │               HUB / REPEATER                        │    │
│              │     Repeats signals, no intelligence                │    │
│              │     Broadcasts to all ports                        │    │
│              └─────────────────────────────────────────────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Detail Setiap Device

| Device      | Layer | Fungsi               | Collision Domain | Broadcast Domain |
| ----------- | ----- | -------------------- | ---------------- | ---------------- |
| **Hub**     | 1     | Repeater multi-port  | 1 (shared)       | 1                |
| **Bridge**  | 2     | Connect 2 segments   | Separated        | 1                |
| **Switch**  | 2     | Multi-port bridge    | Per port         | 1                |
| **Router**  | 3     | Route antar network  | Per port         | Per port         |
| **Gateway** | 7     | Protocol translation | Per port         | Per port         |

### 7.3 Switch vs Hub

```
         HUB (Layer 1)                    SWITCH (Layer 2)

    ┌───┬───┬───┬───┐                ┌───┬───┬───┬───┐
    │ 1 │ 2 │ 3 │ 4 │                │ 1 │ 2 │ 3 │ 4 │
    └─┬─┴─┬─┴─┬─┴─┬─┘                └─┬─┴─┬─┴─┬─┴─┬─┘
      │   │   │   │                    │   │   │   │
      │   │   │   │                    │   │   │   │
    ┌─┴─┐┌┴──┐┌┴──┐┌┴──┐             ┌─┴─┐┌┴──┐┌┴──┐┌┴──┐
    │PC1││PC2││PC3││PC4│             │PC1││PC2││PC3││PC4│
    └───┘└───┘└───┘└───┘             └───┘└───┘└───┘└───┘

    PC1 → Hub:                        PC1 → Switch:
    Hub broadcasts to ALL ports       Switch forwards ONLY to PC2

    🔴 Collision possible             🟢 No collision
    🔴 Bandwidth shared               🟢 Full bandwidth per port
    🔴 All traffic visible            🟢 Traffic isolated
```

---

## 8. VLAN (Virtual LAN)

VLAN memungkinkan segmentasi logical jaringan tanpa memerlukan hardware terpisah.

### 8.1 Konsep VLAN

<div class="vlan-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .vlan-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .vlan-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .vlan-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .vlan-viz h4 {
          color: #f3f4f6 !important;
        }
        .vlan-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .vlan-box {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 15px;
        }
        html.dark .vlan-box {
          background: #111827;
        }
        .vlan-title {
          text-align: center;
          font-weight: 700;
          font-size: 0.8rem;
          margin-bottom: 12px;
          color: #2c3e50;
        }
        html.dark .vlan-title {
          color: #f3f4f6;
        }
        .vlan-switch {
          display: flex;
          justify-content: center;
          gap: 3px;
          margin: 10px 0;
        }
        .vlan-port {
          width: 20px;
          height: 25px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.55rem;
          font-weight: 600;
          color: white;
        }
        .vlan-10 { background: #e74c3c; }
        .vlan-20 { background: #3498db; }
        .vlan-30 { background: #2ecc71; }
        .vlan-default { background: #95a5a6; }
        .vlan-devices {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .vlan-device {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.6rem;
        }
        .vlan-device-icon {
          font-size: 1.2rem;
          margin-bottom: 3px;
        }
        .vlan-device-label {
          color: #666;
        }
        html.dark .vlan-device-label {
          color: #9ca3af;
        }
        .vlan-legend {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
          font-size: 0.7rem;
          flex-wrap: wrap;
        }
        .vlan-legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #666;
        }
        html.dark .vlan-legend-item {
          color: #d1d5db;
        }
        .vlan-legend-box {
          width: 14px;
          height: 14px;
          border-radius: 3px;
        }
        .vlan-note {
          margin-top: 12px;
          padding: 10px;
          background: #fff;
          border-radius: 6px;
          font-size: 0.7rem;
          color: #555;
          border-left: 3px solid #3498db;
        }
        html.dark .vlan-note {
          background: #1f2937;
          color: #d1d5db;
        }
        @media (max-width: 500px) {
          .vlan-comparison {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 640px) {
          .vlan-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Tanpa VLAN vs Dengan VLAN</h4>
  
  <div class="vlan-comparison">
    <div class="vlan-box">
      <div class="vlan-title">❌ Tanpa VLAN</div>
      <div class="vlan-switch">
        <div class="vlan-port vlan-default">1</div>
        <div class="vlan-port vlan-default">2</div>
        <div class="vlan-port vlan-default">3</div>
        <div class="vlan-port vlan-default">4</div>
        <div class="vlan-port vlan-default">5</div>
        <div class="vlan-port vlan-default">6</div>
      </div>
      <div class="vlan-devices">
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">HR</span>
        </div>
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">IT</span>
        </div>
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">Sales</span>
        </div>
      </div>
      <div class="vlan-note">Semua dalam 1 broadcast domain. Broadcast dari HR sampai ke IT dan Sales.</div>
    </div>
    <div class="vlan-box">
      <div class="vlan-title">✅ Dengan VLAN</div>
      <div class="vlan-switch">
        <div class="vlan-port vlan-10">1</div>
        <div class="vlan-port vlan-10">2</div>
        <div class="vlan-port vlan-20">3</div>
        <div class="vlan-port vlan-20">4</div>
        <div class="vlan-port vlan-30">5</div>
        <div class="vlan-port vlan-30">6</div>
      </div>
      <div class="vlan-devices">
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">HR (V10)</span>
        </div>
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">IT (V20)</span>
        </div>
        <div class="vlan-device">
          <span class="vlan-device-icon">💻</span>
          <span class="vlan-device-label">Sales (V30)</span>
        </div>
      </div>
      <div class="vlan-note">Broadcast domain terpisah. Komunikasi antar VLAN butuh router (inter-VLAN routing).</div>
    </div>
  </div>
  
  <div class="vlan-legend">
    <div class="vlan-legend-item">
      <div class="vlan-legend-box" style="background: #e74c3c;"></div> VLAN 10 (HR)
    </div>
    <div class="vlan-legend-item">
      <div class="vlan-legend-box" style="background: #3498db;"></div> VLAN 20 (IT)
    </div>
    <div class="vlan-legend-item">
      <div class="vlan-legend-box" style="background: #2ecc71;"></div> VLAN 30 (Sales)
    </div>
  </div>
</div>

### 8.2 Tipe VLAN Port

| Tipe            | Deskripsi                           | Penggunaan            |
| --------------- | ----------------------------------- | --------------------- |
| **Access Port** | Membawa traffic 1 VLAN              | Koneksi ke end device |
| **Trunk Port**  | Membawa traffic multiple VLAN       | Koneksi antar switch  |
| **Native VLAN** | VLAN untuk untagged frames di trunk | Default: VLAN 1       |

### 8.3 VLAN Tagging (802.1Q)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     802.1Q FRAME FORMAT                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Standard Ethernet Frame:                                               │
│  ┌─────────┬─────────┬──────┬─────────────────────┬─────┐               │
│  │  Dest   │  Src    │ Type │       Data          │ FCS │               │
│  │  MAC    │  MAC    │      │                     │     │               │
│  └─────────┴─────────┴──────┴─────────────────────┴─────┘               │
│                                                                         │
│  802.1Q Tagged Frame:                                                   │
│  ┌─────────┬─────────┬───────────┬──────┬────────────────┬─────┐        │
│  │  Dest   │  Src    │  802.1Q   │ Type │     Data       │ FCS │        │
│  │  MAC    │  MAC    │   Tag     │      │                │     │        │
│  └─────────┴─────────┴───────────┴──────┴────────────────┴─────┘        │
│                            │                                            │
│                     ┌──────┴──────┐                                     │
│                     │  4 bytes    │                                     │
│                     ├─────────────┤                                     │
│                     │ TPID │ TCI  │                                     │
│                     │0x8100│      │                                     │
│                     ├──────┼──────┤                                     │
│                     │      │PRI│C │   VLAN ID (12 bits)                 │
│                     │      │(3)│F │   = 4096 possible VLANs             │
│                     │      │   │I │                                     │
│                     └──────┴───┴──┘                                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Protokol-Protokol Penting

### 9.1 ARP (Address Resolution Protocol)

Menerjemahkan IP address ke MAC address.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          ARP PROCESS                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   PC1 (10.0.0.1)                              PC2 (10.0.0.2)            │
│   MAC: AA:AA:AA                               MAC: BB:BB:BB             │
│                                                                         │
│   1. PC1 wants to send data to 10.0.0.2                                 │
│      "What is the MAC address of 10.0.0.2?"                             │
│                                                                         │
│   ┌────────────────────────────────────────────────────────────┐        │
│   │  ARP Request (BROADCAST)                                   │        │
│   │  Source IP: 10.0.0.1   Source MAC: AA:AA:AA                │        │
│   │  Target IP: 10.0.0.2   Target MAC: FF:FF:FF (broadcast)    │        │
│   └────────────────────────────────────────────────────────────┘        │
│                     ─────────────────────────→                          │
│                                                                         │
│   ┌────────────────────────────────────────────────────────────┐        │
│   │  ARP Reply (UNICAST)                                       │        │
│   │  Source IP: 10.0.0.2   Source MAC: BB:BB:BB                │        │
│   │  Target IP: 10.0.0.1   Target MAC: AA:AA:AA                │        │
│   └────────────────────────────────────────────────────────────┘        │
│                     ←─────────────────────────                          │
│                                                                         │
│   2. PC1 caches MAC in ARP table                                        │
│      Now PC1 can send frames directly to BB:BB:BB                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 9.2 DHCP (Dynamic Host Configuration Protocol)

Memberikan IP address dan konfigurasi jaringan secara otomatis.

```
   Client                                    Server
      │                                         │
      │ ─────── DHCP DISCOVER ─────────────────→│  (broadcast)
      │         "Any DHCP servers out there?"   │
      │                                         │
      │ ←────── DHCP OFFER ─────────────────────│
      │         "Here's an IP: 192.168.1.10"    │
      │                                         │
      │ ─────── DHCP REQUEST ──────────────────→│  (broadcast)
      │         "I'll take 192.168.1.10"        │
      │                                         │
      │ ←────── DHCP ACK ───────────────────────│
      │         "Confirmed. It's yours!"        │
      │                                         │

   Mnemonic: DORA (Discover, Offer, Request, Acknowledge)
```

**DHCP Lease Information:**
| Parameter | Contoh |
|-----------|--------|
| IP Address | 192.168.1.10 |
| Subnet Mask | 255.255.255.0 |
| Default Gateway | 192.168.1.1 |
| DNS Server | 8.8.8.8 |
| Lease Time | 86400 seconds |

### 9.3 DNS (Domain Name System)

Menerjemahkan domain name ke IP address.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       DNS RESOLUTION PROCESS                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   User types: www.example.com                                           │
│                                                                         │
│   ┌────────┐      ┌─────────────┐      ┌───────────────┐                │
│   │ Client │ ──1──│ Local DNS   │ ──2──│   Root DNS    │                │
│   │        │      │  Resolver   │      │   (.)         │                │
│   └────────┘      └──────┬──────┘      └───────────────┘                │
│                          │                    │                         │
│                          │ ←────3─────────────┘                         │
│                          │   "Ask .com TLD"                             │
│                          │                                              │
│                          │       ┌───────────────┐                      │
│                          │ ──4───│   TLD DNS     │                      │
│                          │       │   (.com)      │                      │
│                          │       └───────┬───────┘                      │
│                          │ ←────5────────┘                              │
│                          │   "Ask example.com"                          │
│                          │                                              │
│                          │       ┌───────────────┐                      │
│                          │ ──6───│Authoritative  │                      │
│                          │       │example.com DNS│                      │
│                          │       └───────┬───────┘                      │
│                          │ ←────7────────┘                              │
│   ┌────────┐             │   "93.184.216.34"                            │
│   │ Client │ ←────8──────┘                                              │
│   └────────┘                                                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### DNS Record Types

| Type      | Fungsi               | Contoh                         |
| --------- | -------------------- | ------------------------------ |
| **A**     | IPv4 address         | example.com → 93.184.216.34    |
| **AAAA**  | IPv6 address         | example.com → 2001:db8::1      |
| **CNAME** | Alias/canonical name | www → example.com              |
| **MX**    | Mail server          | example.com → mail.example.com |
| **NS**    | Name server          | example.com → ns1.example.com  |
| **PTR**   | Reverse lookup       | 34.216.184.93 → example.com    |
| **TXT**   | Text record          | SPF, DKIM, verification        |
| **SOA**   | Start of Authority   | Zone information               |

---

## 10. NAT (Network Address Translation)

NAT memungkinkan multiple device di private network menggunakan satu public IP address.

### 10.1 Tipe NAT

<div class="nat-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .nat-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .nat-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .nat-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .nat-viz h4 {
          color: #f3f4f6 !important;
        }
        .nat-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px 10px;
          background: #f8f9fa;
          border-radius: 10px;
        }
        html.dark .nat-diagram {
          background: #111827;
        }
        .nat-private {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nat-device {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 0.65rem;
          border: 1px solid #e0e0e0;
        }
        html.dark .nat-device {
          background: #1f2937;
          border-color: #374151;
          color: #d1d5db;
        }
        .nat-device-icon {
          font-size: 1rem;
        }
        .nat-router {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
        }
        .nat-router-icon {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        .nat-router-label {
          font-size: 0.7rem;
          font-weight: 600;
        }
        .nat-router-ip {
          font-size: 0.6rem;
          opacity: 0.9;
        }
        .nat-internet {
          background: linear-gradient(135deg, #9b59b6, #8e44ad);
          color: white;
          padding: 15px 20px;
          border-radius: 10px;
          text-align: center;
        }
        .nat-internet-icon {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        .nat-internet-label {
          font-size: 0.7rem;
          font-weight: 600;
        }
        .nat-arrow {
          font-size: 1.2rem;
          color: #3498db;
        }
        html.dark .nat-arrow {
          color: #60a5fa;
        }
        .nat-table {
          margin-top: 15px;
          font-size: 0.7rem;
        }
        .nat-table table {
          width: 100%;
          border-collapse: collapse;
        }
        .nat-table th, .nat-table td {
          padding: 8px;
          border: 1px solid #e0e0e0;
          text-align: center;
        }
        html.dark .nat-table th, html.dark .nat-table td {
          border-color: #374151;
        }
        .nat-table th {
          background: #f8f9fa;
          font-weight: 600;
        }
        html.dark .nat-table th {
          background: #111827;
          color: #f3f4f6;
        }
        html.dark .nat-table td {
          color: #d1d5db;
        }
        @media (min-width: 640px) {
          .nat-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>PAT (Port Address Translation) / NAT Overload</h4>
  
  <div class="nat-diagram">
    <div class="nat-private">
      <div class="nat-device">
        <span class="nat-device-icon">💻</span>
        <span>192.168.1.10:5001</span>
      </div>
      <div class="nat-device">
        <span class="nat-device-icon">📱</span>
        <span>192.168.1.11:5002</span>
      </div>
      <div class="nat-device">
        <span class="nat-device-icon">🖥️</span>
        <span>192.168.1.12:5003</span>
      </div>
    </div>
    <span class="nat-arrow">→</span>
    <div class="nat-router">
      <div class="nat-router-icon">📡</div>
      <div class="nat-router-label">NAT Router</div>
      <div class="nat-router-ip">Translation Table</div>
    </div>
    <span class="nat-arrow">→</span>
    <div class="nat-internet">
      <div class="nat-internet-icon">🌐</div>
      <div class="nat-internet-label">Internet</div>
      <div class="nat-router-ip">203.0.113.1</div>
    </div>
  </div>
  
  <div class="nat-table">
    <table>
      <tr>
        <th>Inside Local</th>
        <th>Inside Global</th>
        <th>Outside Global</th>
      </tr>
      <tr>
        <td>192.168.1.10:5001</td>
        <td>203.0.113.1:40001</td>
        <td>8.8.8.8:80</td>
      </tr>
      <tr>
        <td>192.168.1.11:5002</td>
        <td>203.0.113.1:40002</td>
        <td>8.8.8.8:80</td>
      </tr>
      <tr>
        <td>192.168.1.12:5003</td>
        <td>203.0.113.1:40003</td>
        <td>1.1.1.1:443</td>
      </tr>
    </table>
  </div>
</div>

| Tipe NAT             | Deskripsi                                             |
| -------------------- | ----------------------------------------------------- |
| **Static NAT**       | 1 private IP ↔ 1 public IP (one-to-one)               |
| **Dynamic NAT**      | Pool of public IPs, assigned dynamically              |
| **PAT/NAT Overload** | Many private IPs share 1 public IP (menggunakan port) |

### 10.2 NAT Terminology

| Term               | Deskripsi                                        |
| ------------------ | ------------------------------------------------ |
| **Inside Local**   | Private IP di internal network                   |
| **Inside Global**  | Public IP yang mewakili internal host            |
| **Outside Local**  | Private IP dari external host (jarang digunakan) |
| **Outside Global** | Public IP dari external host                     |

---

## 11. Wireless Networking

### 11.1 IEEE 802.11 Standards

| Standard               | Frequency   | Max Speed | Range | Year |
| ---------------------- | ----------- | --------- | ----- | ---- |
| **802.11a**            | 5 GHz       | 54 Mbps   | ~35m  | 1999 |
| **802.11b**            | 2.4 GHz     | 11 Mbps   | ~100m | 1999 |
| **802.11g**            | 2.4 GHz     | 54 Mbps   | ~100m | 2003 |
| **802.11n** (Wi-Fi 4)  | 2.4/5 GHz   | 600 Mbps  | ~70m  | 2009 |
| **802.11ac** (Wi-Fi 5) | 5 GHz       | 6.93 Gbps | ~35m  | 2013 |
| **802.11ax** (Wi-Fi 6) | 2.4/5/6 GHz | 9.6 Gbps  | ~35m  | 2019 |

### 11.2 Wireless Security

| Protocol | Security Level | Key Length | Notes                             |
| -------- | -------------- | ---------- | --------------------------------- |
| **WEP**  | ❌ Broken      | 64/128 bit | Deprecated, easily cracked        |
| **WPA**  | ⚠️ Weak        | TKIP       | Better than WEP, still vulnerable |
| **WPA2** | ✅ Good        | AES-CCMP   | Standard for years                |
| **WPA3** | ✅ Best        | SAE        | Latest, most secure               |

### 11.3 Wireless Terminology

| Term        | Deskripsi                             |
| ----------- | ------------------------------------- |
| **SSID**    | Service Set Identifier (nama network) |
| **BSSID**   | MAC address dari access point         |
| **Channel** | Frequency range untuk komunikasi      |
| **AP**      | Access Point                          |
| **CSMA/CA** | Collision avoidance mechanism         |

---

## 12. Network Security

### 12.1 Security Threats

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     COMMON NETWORK ATTACKS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐   │
│  │   DoS / DDoS     │    │   Man-in-the-    │    │  Phishing /      │   │
│  │                  │    │     Middle       │    │  Social Eng.     │   │
│  │  Overwhelm with  │    │  Intercept &     │    │  Trick users     │   │
│  │  traffic         │    │  modify traffic  │    │  for credentials │   │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘   │
│                                                                         │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐   │
│  │  ARP Spoofing    │    │  DNS Spoofing    │    │   Port Scan      │   │
│  │                  │    │                  │    │                  │   │
│  │  Fake ARP to     │    │  Redirect to     │    │  Discover open   │   │
│  │  redirect traffic│    │  malicious site  │    │  ports/services  │   │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘   │
│                                                                         │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐   │
│  │  Brute Force     │    │  SQL Injection   │    │   Zero-Day       │   │
│  │                  │    │                  │    │                  │   │
│  │  Try all password│    │  Inject malicious│    │  Exploit unknown │   │
│  │  combinations    │    │  SQL queries     │    │  vulnerabilities │   │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 12.2 Security Devices & Measures

| Device/Measure                 | Fungsi                               |
| ------------------------------ | ------------------------------------ |
| **Firewall**                   | Filter traffic berdasarkan rules     |
| **IDS** (Intrusion Detection)  | Detect & alert suspicious activity   |
| **IPS** (Intrusion Prevention) | Detect & block attacks               |
| **VPN**                        | Encrypted tunnel untuk remote access |
| **ACL** (Access Control List)  | Control traffic flow                 |
| **DMZ**                        | Isolated zone untuk public servers   |

### 12.3 Firewall Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       FIREWALL TYPES                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ 1. PACKET FILTER (Stateless)                                    │    │
│  │    - Layer 3-4                                                  │    │
│  │    - Check: Source/Dest IP, Port, Protocol                      │    │
│  │    - Fast but limited                                           │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ 2. STATEFUL INSPECTION                                          │    │
│  │    - Layer 3-4                                                  │    │
│  │    - Tracks connection state                                    │    │
│  │    - More secure than packet filter                             │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ 3. APPLICATION GATEWAY (Proxy)                                  │    │
│  │    - Layer 7                                                    │    │
│  │    - Deep packet inspection                                     │    │
│  │    - Can filter content                                         │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ 4. NEXT-GEN FIREWALL (NGFW)                                     │    │
│  │    - All layers                                                 │    │
│  │    - IPS + Application awareness + User identity                │    │
│  │    - Most comprehensive                                         │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 12.4 VPN Types

| Type            | Layer | Use Case                    |
| --------------- | ----- | --------------------------- |
| **IPSec**       | 3     | Site-to-site, remote access |
| **SSL/TLS VPN** | 5-7   | Remote access via browser   |
| **PPTP**        | 2     | Legacy, not recommended     |
| **L2TP/IPSec**  | 2     | Mobile devices              |
| **WireGuard**   | 3     | Modern, fast, simple        |

---

## 13. HTTP/HTTPS

### 13.1 HTTP Methods

| Method      | Deskripsi               | Idempotent | Safe |
| ----------- | ----------------------- | ---------- | ---- |
| **GET**     | Retrieve resource       | ✅         | ✅   |
| **POST**    | Create new resource     | ❌         | ❌   |
| **PUT**     | Update/replace resource | ✅         | ❌   |
| **PATCH**   | Partial update          | ❌         | ❌   |
| **DELETE**  | Remove resource         | ✅         | ❌   |
| **HEAD**    | GET without body        | ✅         | ✅   |
| **OPTIONS** | Get supported methods   | ✅         | ✅   |

### 13.2 HTTP Status Codes

| Range   | Category      | Contoh                                                              |
| ------- | ------------- | ------------------------------------------------------------------- |
| **1xx** | Informational | 100 Continue, 101 Switching Protocols                               |
| **2xx** | Success       | 200 OK, 201 Created, 204 No Content                                 |
| **3xx** | Redirection   | 301 Moved Permanently, 302 Found, 304 Not Modified                  |
| **4xx** | Client Error  | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found     |
| **5xx** | Server Error  | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |

### 13.3 HTTPS & TLS Handshake

```
   Client                                    Server
      │                                         │
      │ ───── Client Hello ────────────────────→│
      │       (TLS version, cipher suites)      │
      │                                         │
      │ ←──── Server Hello ─────────────────────│
      │       (Chosen cipher, certificate)      │
      │                                         │
      │ ←──── Server Certificate ───────────────│
      │                                         │
      │ ─────────── Key Exchange ──────────────→│
      │       (Pre-master secret)               │
      │                                         │
      │ ←──────── Finished ─────────────────────│
      │                                         │
      │ ═══════ Encrypted Data ════════════════→│
      │ ←══════ Encrypted Data ═════════════════│
      │                                         │
```

---

## 14. Quality of Service (QoS)

### 14.1 QoS Metrics

| Metric          | Deskripsi               | Typical Value     |
| --------------- | ----------------------- | ----------------- |
| **Bandwidth**   | Data rate               | Mbps, Gbps        |
| **Latency**     | Delay end-to-end        | <150ms untuk VoIP |
| **Jitter**      | Variasi latency         | <30ms untuk VoIP  |
| **Packet Loss** | Persentase paket hilang | <1% untuk VoIP    |

### 14.2 QoS Mechanisms

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          QoS TECHNIQUES                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  1. CLASSIFICATION & MARKING                                            │
│     ├── Identify traffic types                                          │
│     └── Mark with DSCP/CoS values                                       │
│                                                                         │
│  2. QUEUING                                                             │
│     ├── FIFO (First In First Out)                                       │
│     ├── Priority Queuing (PQ)                                           │
│     ├── Weighted Fair Queuing (WFQ)                                     │
│     └── Low Latency Queuing (LLQ)                                       │
│                                                                         │
│  3. CONGESTION AVOIDANCE                                                │
│     ├── RED (Random Early Detection)                                    │
│     └── WRED (Weighted RED)                                             │
│                                                                         │
│  4. TRAFFIC SHAPING & POLICING                                          │
│     ├── Shaping: Delay excess traffic                                   │
│     └── Policing: Drop excess traffic                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 14.3 DSCP Values (Common)

| DSCP          | Per-Hop Behavior     | Use Case                 |
| ------------- | -------------------- | ------------------------ |
| **EF (46)**   | Expedited Forwarding | VoIP, video conferencing |
| **AF41 (34)** | Assured Forwarding   | Video streaming          |
| **AF21 (18)** | Assured Forwarding   | Business applications    |
| **CS0 (0)**   | Best Effort          | Default traffic          |

---

## 15. Troubleshooting Commands

### 15.1 Essential Commands

#### ping

```bash
# Test connectivity
ping 8.8.8.8
ping -c 4 google.com    # Linux: 4 packets
ping -n 4 google.com    # Windows: 4 packets
```

#### traceroute / tracert

```bash
# Trace path to destination
traceroute google.com   # Linux
tracert google.com      # Windows
```

#### nslookup / dig

```bash
# DNS lookup
nslookup google.com
dig google.com          # More detailed (Linux)
dig +short google.com   # Just the IP
```

#### netstat / ss

```bash
# Network statistics
netstat -an             # All connections
netstat -tulpn          # Listening ports (Linux)
ss -tulpn               # Modern alternative (Linux)
```

#### ipconfig / ifconfig / ip

```bash
# Interface configuration
ipconfig /all           # Windows
ifconfig                # Linux (legacy)
ip addr                 # Linux (modern)
ip route                # Routing table
```

#### arp

```bash
# ARP cache
arp -a                  # Show ARP table
```

#### nmap

```bash
# Port scanning
nmap -sP 192.168.1.0/24   # Ping sweep
nmap -sT 192.168.1.1      # TCP connect scan
nmap -sV 192.168.1.1      # Service version detection
```

### 15.2 Troubleshooting Methodology

<div class="troubleshoot-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .troubleshoot-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .troubleshoot-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .troubleshoot-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .troubleshoot-viz h4 {
          color: #f3f4f6 !important;
        }
        .ts-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ts-step {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid;
        }
        html.dark .ts-step {
          background: #111827;
        }
        .ts-step-1 { border-color: #e74c3c; }
        .ts-step-2 { border-color: #f39c12; }
        .ts-step-3 { border-color: #27ae60; }
        .ts-step-4 { border-color: #3498db; }
        .ts-step-5 { border-color: #9b59b6; }
        .ts-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          color: white;
          flex-shrink: 0;
        }
        .ts-num-1 { background: #e74c3c; }
        .ts-num-2 { background: #f39c12; }
        .ts-num-3 { background: #27ae60; }
        .ts-num-4 { background: #3498db; }
        .ts-num-5 { background: #9b59b6; }
        .ts-content {
          flex: 1;
        }
        .ts-title {
          font-weight: 600;
          font-size: 0.8rem;
          color: #2c3e50;
          margin-bottom: 3px;
        }
        html.dark .ts-title {
          color: #f3f4f6;
        }
        .ts-desc {
          font-size: 0.7rem;
          color: #666;
        }
        html.dark .ts-desc {
          color: #9ca3af;
        }
        .ts-cmd {
          font-family: 'Consolas', monospace;
          font-size: 0.65rem;
          background: white;
          padding: 3px 8px;
          border-radius: 4px;
          color: #e74c3c;
          display: inline-block;
          margin-top: 4px;
        }
        html.dark .ts-cmd {
          background: #1f2937;
          color: #f87171;
        }
        @media (min-width: 640px) {
          .troubleshoot-viz {
            max-width: 600px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Bottom-Up Troubleshooting Approach</h4>
  
  <div class="ts-steps">
    <div class="ts-step ts-step-1">
      <div class="ts-num ts-num-1">1</div>
      <div class="ts-content">
        <div class="ts-title">Physical Layer</div>
        <div class="ts-desc">Check cables, lights, power, NIC status</div>
        <span class="ts-cmd">Check link lights, reseat cables</span>
      </div>
    </div>
    <div class="ts-step ts-step-2">
      <div class="ts-num ts-num-2">2</div>
      <div class="ts-content">
        <div class="ts-title">Data Link Layer</div>
        <div class="ts-desc">Check MAC address, switch port, VLAN</div>
        <span class="ts-cmd">arp -a, show mac address-table</span>
      </div>
    </div>
    <div class="ts-step ts-step-3">
      <div class="ts-num ts-num-3">3</div>
      <div class="ts-content">
        <div class="ts-title">Network Layer</div>
        <div class="ts-desc">Check IP config, routing, ping gateway</div>
        <span class="ts-cmd">ip addr, ping gateway, traceroute</span>
      </div>
    </div>
    <div class="ts-step ts-step-4">
      <div class="ts-num ts-num-4">4</div>
      <div class="ts-content">
        <div class="ts-title">Transport Layer</div>
        <div class="ts-desc">Check ports, firewall, TCP/UDP connectivity</div>
        <span class="ts-cmd">netstat -an, telnet host port</span>
      </div>
    </div>
    <div class="ts-step ts-step-5">
      <div class="ts-num ts-num-5">5</div>
      <div class="ts-content">
        <div class="ts-title">Application Layer</div>
        <div class="ts-desc">Check application logs, DNS, service status</div>
        <span class="ts-cmd">nslookup, curl, application logs</span>
      </div>
    </div>
  </div>
</div>

---

## 16. Cable Types & Standards

### 16.1 Ethernet Cable Categories

| Category  | Speed    | Bandwidth | Max Length | Use Case         |
| --------- | -------- | --------- | ---------- | ---------------- |
| **Cat5**  | 100 Mbps | 100 MHz   | 100m       | Legacy           |
| **Cat5e** | 1 Gbps   | 100 MHz   | 100m       | Common office    |
| **Cat6**  | 10 Gbps  | 250 MHz   | 55m (10G)  | Modern office    |
| **Cat6a** | 10 Gbps  | 500 MHz   | 100m       | Data center      |
| **Cat7**  | 10 Gbps  | 600 MHz   | 100m       | High performance |
| **Cat8**  | 40 Gbps  | 2000 MHz  | 30m        | Data center      |

### 16.2 Fiber Optic

| Type                  | Core Size  | Range     | Speed       | Use                |
| --------------------- | ---------- | --------- | ----------- | ------------------ |
| **Single-mode (SMF)** | 9 µm       | 10-100 km | 100 Gbps+   | Long distance, WAN |
| **Multi-mode (MMF)**  | 50/62.5 µm | 300m-2km  | 10-100 Gbps | Data center, LAN   |

### 16.3 Connector Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        COMMON CONNECTORS                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   COPPER (Ethernet)                 FIBER OPTIC                         │
│   ┌───────────────┐                 ┌───────────────┐                   │
│   │   RJ-45       │                 │   SC          │ Square connector  │
│   │   ┌─┬─┬─┬─┬─┬─┐│                 │   ┌───┐      │                   │
│   │   │ │ │ │ │ │ ││                 │   │ ○ │      │                   │
│   │   └─┴─┴─┴─┴─┴─┘│                 │   └───┘      │                   │
│   └───────────────┘                 └───────────────┘                   │
│   8 pins, Ethernet                                                      │
│                                     ┌───────────────┐                   │
│   ┌───────────────┐                 │   LC          │ Smaller, popular  │
│   │   RJ-11       │                 │   ┌──┐        │                   │
│   │   ┌─┬─┬─┐     │                 │   │○│        │                   │
│   │   │ │ │ │     │                 │   └──┘        │                   │
│   │   └─┴─┴─┘     │                 └───────────────┘                   │
│   └───────────────┘                                                     │
│   4/6 pins, Telephone               ┌───────────────┐                   │
│                                     │   ST          │ Bayonet style     │
│   ┌───────────────┐                 │   ○───        │                   │
│   │   Coaxial     │                 └───────────────┘                   │
│   │   ┌─○─┐       │                                                     │
│   │   └───┘       │                 ┌───────────────┐                   │
│   └───────────────┘                 │   MT-RJ       │ Dual fiber        │
│   BNC/F-type                        │   ┌──┬──┐     │                   │
│                                     │   │○│○│     │                   │
│                                     │   └──┴──┘     │                   │
│                                     └───────────────┘                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 17. Spanning Tree Protocol (STP)

STP mencegah loop di Layer 2 network dengan memblokir redundant paths.

### 17.1 STP Port States

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     STP PORT STATES (802.1D)                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐       │
│   │ Blocking │ ──→ │ Listening│ ──→ │ Learning │ ──→ │Forwarding│       │
│   │          │     │          │     │          │     │          │       │
│   │ No data  │     │ 15 sec   │     │ 15 sec   │     │ Normal   │       │
│   │ No MAC   │     │ No data  │     │ Learn MAC│     │ Full     │       │
│   │ learn    │     │ No MAC   │     │ No data  │     │ operation│       │
│   └──────────┘     └──────────┘     └──────────┘     └──────────┘       │
│                                                                         │
│   Total convergence time: 30-50 seconds (802.1D)                        │
│                                                                         │
│   RSTP (802.1w) States:                                                 │
│   Discarding → Learning → Forwarding                                    │
│   Convergence: < 1 second                                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 17.2 STP Port Roles

| Role                      | Deskripsi                                   |
| ------------------------- | ------------------------------------------- |
| **Root Port**             | Port dengan path terbaik ke Root Bridge     |
| **Designated Port**       | Port yang forward traffic ke segment        |
| **Blocked Port**          | Port yang tidak forward untuk mencegah loop |
| **Alternate Port** (RSTP) | Backup untuk root port                      |
| **Backup Port** (RSTP)    | Backup untuk designated port                |

### 17.3 STP Selection Process

1. **Root Bridge Election**: Switch dengan Bridge ID (Priority + MAC) terendah
2. **Root Port Selection**: Port dengan Root Path Cost terendah
3. **Designated Port Selection**: Per segment, switch dengan lowest Root Path Cost

**Default Bridge Priority:** 32768

---

## 18. Cloud Networking Concepts

### 18.1 Cloud Network Components

| Component            | Deskripsi                                |
| -------------------- | ---------------------------------------- |
| **VPC**              | Virtual Private Cloud, isolated network  |
| **Subnet**           | Network segment dalam VPC                |
| **Internet Gateway** | Koneksi VPC ke internet                  |
| **NAT Gateway**      | Outbound internet untuk private subnet   |
| **Route Table**      | Routing rules dalam VPC                  |
| **Security Group**   | Instance-level firewall (stateful)       |
| **NACL**             | Subnet-level firewall (stateless)        |
| **VPN Gateway**      | Hybrid cloud connectivity                |
| **Peering**          | Koneksi antar VPC                        |
| **Load Balancer**    | Distribute traffic ke multiple instances |

### 18.2 Cloud vs On-Premises

| Aspek            | On-Premises         | Cloud                 |
| ---------------- | ------------------- | --------------------- |
| **Capital Cost** | High (CapEx)        | Low (OpEx)            |
| **Scalability**  | Limited, plan ahead | Elastic, on-demand    |
| **Maintenance**  | Self-managed        | Provider-managed      |
| **Latency**      | Predictable         | Variable              |
| **Control**      | Full                | Limited               |
| **Compliance**   | Full control        | Shared responsibility |

---

## 19. Quick Reference

### 19.1 Penting Untuk Dihapal

<div class="quick-ref-viz" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 100%; width: 100%; border: 1px solid #e0e0e0; padding: 1rem; border-radius: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin: 1.5rem 0;">
  <script is:inline>
    (function() {
      if (typeof document === 'undefined') return;
      const style = document.createElement('style');
      style.textContent = `
        .quick-ref-viz {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        html.dark .quick-ref-viz {
          border-color: #374151 !important;
          background: #1f2937 !important;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
        }
        .quick-ref-viz h4 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 0.9375rem;
          margin-bottom: 15px;
          text-align: center;
        }
        html.dark .quick-ref-viz h4 {
          color: #f3f4f6 !important;
        }
        .qr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .qr-item {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 12px;
          border-left: 4px solid;
        }
        html.dark .qr-item {
          background: #111827;
        }
        .qr-item:nth-child(1) { border-color: #e74c3c; }
        .qr-item:nth-child(2) { border-color: #3498db; }
        .qr-item:nth-child(3) { border-color: #27ae60; }
        .qr-item:nth-child(4) { border-color: #9b59b6; }
        .qr-item:nth-child(5) { border-color: #f39c12; }
        .qr-item:nth-child(6) { border-color: #1abc9c; }
        .qr-title {
          font-weight: 700;
          font-size: 0.75rem;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        html.dark .qr-title {
          color: #f3f4f6;
        }
        .qr-list {
          font-size: 0.65rem;
          color: #555;
          line-height: 1.6;
        }
        html.dark .qr-list {
          color: #d1d5db;
        }
        .qr-list code {
          background: white;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 0.6rem;
        }
        html.dark .qr-list code {
          background: #1f2937;
          color: #f87171;
        }
        @media (max-width: 500px) {
          .qr-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 640px) {
          .quick-ref-viz {
            max-width: 650px;
            padding: 1.5625rem;
          }
        }
      `;
      document.head.appendChild(style);
    })();
  </script>
  
  <h4>Networking Quick Reference</h4>
  
  <div class="qr-grid">
    <div class="qr-item">
      <div class="qr-title">🔢 OSI Layers (Top-Down)</div>
      <div class="qr-list">
        <strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing<br>
        Application → Presentation → Session → Transport → Network → Data Link → Physical
      </div>
    </div>
    <div class="qr-item">
      <div class="qr-title">📍 Private IP Ranges</div>
      <div class="qr-list">
        <code>10.0.0.0/8</code> (Class A)<br>
        <code>172.16.0.0/12</code> (Class B)<br>
        <code>192.168.0.0/16</code> (Class C)
      </div>
    </div>
    <div class="qr-item">
      <div class="qr-title">🔌 Critical Ports</div>
      <div class="qr-list">
        HTTP: <code>80</code>, HTTPS: <code>443</code><br>
        SSH: <code>22</code>, DNS: <code>53</code><br>
        FTP: <code>21</code>, SMTP: <code>25</code>
      </div>
    </div>
    <div class="qr-item">
      <div class="qr-title">🤝 TCP Handshake</div>
      <div class="qr-list">
        1. SYN →<br>
        2. ← SYN-ACK<br>
        3. ACK →<br>
        Connection Established!
      </div>
    </div>
    <div class="qr-item">
      <div class="qr-title">📧 DHCP Process</div>
      <div class="qr-list">
        <strong>D</strong>iscover → <strong>O</strong>ffer → <strong>R</strong>equest → <strong>A</strong>ck<br>
        Mnemonic: <strong>DORA</strong>
      </div>
    </div>
    <div class="qr-item">
      <div class="qr-title">🔍 Subnetting Formula</div>
      <div class="qr-list">
        Hosts = 2<sup>h</sup> - 2<br>
        Networks = 2<sup>n</sup><br>
        Block Size = 256 - subnet
      </div>
    </div>
  </div>
</div>

### 19.2 Rumus Penting

| Rumus                                                            | Deskripsi                           |
| ---------------------------------------------------------------- | ----------------------------------- |
| $\text{Hosts} = 2^h - 2$                                         | Jumlah usable hosts (h = host bits) |
| $\text{Networks} = 2^n$                                          | Jumlah subnet (n = borrowed bits)   |
| $\text{Block Size} = 256 - \text{subnet octet}$                  | Increment antar subnet              |
| $\text{Bandwidth} = \frac{\text{Data Size}}{\text{Time}}$        | Throughput calculation              |
| $\text{Latency} = \frac{\text{Distance}}{\text{Speed of Light}}$ | Propagation delay                   |

### 19.3 Conversion Table

| Decimal | Binary   | Hex | CIDR Hosts |
| ------- | -------- | --- | ---------- |
| 0       | 00000000 | 00  | /24 = 254  |
| 128     | 10000000 | 80  | /25 = 126  |
| 192     | 11000000 | C0  | /26 = 62   |
| 224     | 11100000 | E0  | /27 = 30   |
| 240     | 11110000 | F0  | /28 = 14   |
| 248     | 11111000 | F8  | /29 = 6    |
| 252     | 11111100 | FC  | /30 = 2    |
| 254     | 11111110 | FE  | /31 = 0\*  |
| 255     | 11111111 | FF  | /32 = 1    |

### 19.4 Common Acronyms

| Acronym     | Full Form                                       |
| ----------- | ----------------------------------------------- |
| **TCP**     | Transmission Control Protocol                   |
| **UDP**     | User Datagram Protocol                          |
| **IP**      | Internet Protocol                               |
| **MAC**     | Media Access Control                            |
| **ARP**     | Address Resolution Protocol                     |
| **DHCP**    | Dynamic Host Configuration Protocol             |
| **DNS**     | Domain Name System                              |
| **NAT**     | Network Address Translation                     |
| **VLAN**    | Virtual Local Area Network                      |
| **VPN**     | Virtual Private Network                         |
| **OSPF**    | Open Shortest Path First                        |
| **BGP**     | Border Gateway Protocol                         |
| **STP**     | Spanning Tree Protocol                          |
| **QoS**     | Quality of Service                              |
| **SNMP**    | Simple Network Management Protocol              |
| **SSL/TLS** | Secure Sockets Layer / Transport Layer Security |

---

## Penutup

Jaringan komputer adalah fondasi dari hampir semua sistem modern. Memahami konsep-konsep di atas akan membantu dalam:

- **Troubleshooting** masalah jaringan dengan pendekatan sistematis
- **Designing** arsitektur jaringan yang scalable dan secure
- **Optimizing** performa jaringan
- **Securing** infrastruktur dari berbagai ancaman

> **Tips belajar:** Praktik langsung dengan tools seperti Packet Tracer, GNS3, atau lab virtual adalah cara terbaik untuk menginternalisasi konsep-konsep ini.

**Sertifikasi yang relevan:**

- CompTIA Network+
- Cisco CCNA/CCNP
- Juniper JNCIA
- AWS/Azure/GCP Networking Specialty
