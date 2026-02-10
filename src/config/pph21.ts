/**
 * Konfigurasi PPh 21 Indonesia.
 * Sesuaikan bila ada perubahan ketentuan (PTKP, biaya jabatan, tarif lapisan).
 * Referensi: UU PPh, PMK terkait PTKP dan biaya jabatan.
 */

/** Penghasilan Tidak Kena Pajak (PTKP) per tahun, per status. Nilai dalam Rupiah. */
export const PPH21_PTKP: Record<string, number> = {
  TK0: 54_000_000,
  TK1: 58_500_000,
  TK2: 63_000_000,
  TK3: 67_500_000,
  K0: 58_500_000,
  K1: 63_000_000,
  K2: 67_500_000,
  K3: 72_000_000,
};

/** Tarif biaya jabatan (pegawai tetap): persentase dari penghasilan bruto. */
export const PPH21_BIAYA_JABATAN_RATE = 0.05;

/** Batas maksimal biaya jabatan per tahun (Rupiah). */
export const PPH21_BIAYA_JABATAN_MAX_YEARLY = 6_000_000;

/**
 * Apakah biaya jabatan dipakai sebagai pengurang.
 * true = sesuai PMK (biaya jabatan 5% max 6 jt/tahun) → PPh lebih rendah, ketentuan resmi.
 * false = tanpa biaya jabatan (PKP = bruto − PTKP)
 *         (Annual Tax = 6.900.000 untuk contoh: gross 10jt×12 + THR 10jt + Bonus 10jt, TK/0).
 */
export const PPH21_APPLY_BIAYA_JABATAN = true;

/**
 * Lapisan tarif PPh Pasal 17 (progresif).
 * Setiap item: batas atas lapisan (Rupiah), tarif (0–1).
 * Lapisan: (0, limit[0]], (limit[0], limit[1]], ...
 */
export const PPH21_TAX_BRACKETS: { limit: number; rate: number }[] = [
  { limit: 60_000_000, rate: 0.05 },
  { limit: 250_000_000, rate: 0.15 },
  { limit: 500_000_000, rate: 0.25 },
  { limit: 5_000_000_000, rate: 0.3 },
  { limit: Number.MAX_SAFE_INTEGER, rate: 0.35 },
];

/**
 * Batas bawah untuk rentang pencarian (Net→Gross): nilai "high" awal minimal ini
 * agar binary search punya rentang cukup saat target net kecil. Rupiah/tahun.
 */
export const PPH21_NET_TO_GROSS_SEARCH_MIN_HIGH_YEARLY = 500_000_000;

/**
 * Batas atas rentang pencarian (Tax→Gross): gross tahunan maksimal yang dicari.
 * Rupiah/tahun.
 */
export const PPH21_TAX_TO_GROSS_SEARCH_MAX_YEARLY = 1e12;
