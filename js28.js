function convertTime() {More actions
  const sec = parseInt(document.getElementById("seconds").value);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  document.getElementById("result").textContent = `${h} jam ${m} menit ${s} detik`;
}