document.getElementById("hitung").addEventListener("click", function() {More actions
  var jariJari = parseFloat(document.getElementById("jari-jari").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);
  var volume = Math.PI * jariJari * jariJari * tinggi;
  document.getElementById("hasil").innerHTML = "Volume tabung adalah " + volume;
});