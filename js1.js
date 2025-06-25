console.log('tabung')
const jari = document.getElementById('fr-jari')
const tinggi = document.getElementById('fr-tinggi')
const btnHitung = document.getElementById('fr-btnHitung')
const luas = document.querySelector('fr-#txt-luaspermukaan')
const volume = document.querySelector('fr-#txt-volume')

const ngitungvolume = (r,t) => Math.PI * r * r * t
const ngitungluas = (r,t) =>2 * (Math.PI * r * t) + (2 * Math.PI * r * r)

btnHitung.addEventListener('click', function (){
  luas.textContent = ngitungluas (jari-jari.value , tinggi.value)
  volume.textContent = ngitungvolume (jari-jari.value , tinggi.value)
})