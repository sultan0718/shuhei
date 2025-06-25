function hitungSelisih() {More actions
  const t1 = new Date(document.getElementById("tgl1").value);
  const t2 = new Date(document.getElementById("tgl2").value);
  const selisih = Math.abs((t2 - t1) / (1000 * 60 * 60 * 24));
  document.getElementById("hasil").textContent = `Selisih: ${selisih} hari`;
}