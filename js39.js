function cekEmail() {More actions
  const email = document.getElementById("email").value;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.getElementById("hasil").textContent = valid ? "Valid" : "Tidak valid";
}