function checkStrength() {More actions
  const val = document.getElementById("password").value;
  let strength = "Lemah";
  if (val.length > 8 && /[A-Z]/.test(val) && /[0-9]/.test(val)) {
    strength = "Kuat";
  } else if (val.length > 5) {
    strength = "Sedang";
  }
  document.getElementById("strength").textContent = `Kekuatan: ${strength}`;
}