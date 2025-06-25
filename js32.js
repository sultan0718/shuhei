function hitungUmur() {More actions
  const tgl = new Date(document.getElementById("tglLahir").value);
  const today = new Date();
  let umur = today.getFullYear() - tgl.getFullYear();
  const m = today.getMonth() - tgl.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < tgl.getDate())) {
    umur--;
  }
  document.getElementById("umur").textContent = `Umur: ${umur} tahun`;
}