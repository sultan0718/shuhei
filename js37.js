function faktorial() {More actions
  let n = parseInt(document.getElementById("angka").value);
  let hasil = 1;
  for (let i = 2; i <= n; i++) {
    hasil *= i;
  }
  document.getElementById("hasil").textContent = `Faktorial: ${hasil}`;
}