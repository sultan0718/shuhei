document.getElementById("tampilkan").addEventListener("click", function() {More actions
  var kalimat = document.getElementById("kalimat").value;
  var kalimatTerbalik = kalimat.split("").reverse().join("");
  document.getElementById("hasil").innerHTML = "Kalimat terbalik adalah " + kalimatTerbalik;
});