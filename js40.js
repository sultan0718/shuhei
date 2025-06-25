function tampilkanHari() {More actions
  const elemenHari = document.getElementById("hari");
  const hariDalamSeminggu = [
    "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
  ];
  
  const tanggalSekarang = new Date();
  const indeksHari = tanggalSekarang.getDay();
  const namaHari = hariDalamSeminggu[indeksHari];
  
  elemenHari.textContent = "Hari ini adalah " + namaHari;
}