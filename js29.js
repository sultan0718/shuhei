function hitung() {More actions
  const p = parseFloat(document.getElementById("panjang").value);
  const l = parseFloat(document.getElementById("lebar").value);
  const luas = p * l;
  const keliling = 2 * (p + l);
  document.getElementById("hasil").textContent = `Luas: ${luas}, Keliling: ${keliling}`;
}