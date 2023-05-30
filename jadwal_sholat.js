const getDate = new Date();
const getYear = getDate.getFullYear();
const getMount = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan() {
    if (getMount < 10) {
        bulan = `0${getMount}`;
    } else {
        bulan = getMount;
    }
    return bulan;
}

function hari() {
    if (getDay < 10) {
        hari = `0${getDay}`
    } else {
        hari = getDay;
    }
    return hari;
}

const tanggal = `${getYear}-${bulan()}-${hari()}`;
// console.log(tanggal)
const tampilKota = document.querySelector(".judul-kota")
tampilKota.textContent = localStorage.judulKota;


function getJadwalSholat() {
    fetch("https://api.banghasan.com/sholat/format/json/jadwal/kota/" + parseInt(localStorage.idkota) + "/tanggal/" + tanggal)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            const jadwal = data.jadwal.data;
            document.querySelector('.tanggal').textContent = jadwal.tanggal;
            document.querySelector('.isi.a').textContent = jadwal.imsak;
            document.querySelector('.isi.b').textContent = jadwal.subuh;
            document.querySelector('.isi.c').textContent = jadwal.terbit;
            document.querySelector('.isi.d').textContent = jadwal.dzuhur;
            document.querySelector('.isi.e').textContent = jadwal.ashar;
            document.querySelector('.isi.f').textContent = jadwal.maghrib;
            document.querySelector('.isi.g').textContent = jadwal.isya;
        })
}
getJadwalSholat();

// pilih lokasi
const input = document.querySelector(".input")
const card = document.querySelector(".card")

input.addEventListener("keyup", function () {
    const value = input.value.length;
    if (value > 0) {
        card.classList.remove("hidden");
        fetch("https://api.banghasan.com/sholat/format/json/kota")
            .then((response) => response.json())
            .then((bebas) => {
                // console.log(bebas)
                const kota = bebas.kota;
                let listKota = "";
                kota.forEach(k => {
                    listKota += `<a href="#"  data-idkota="${k.id}" id="namaKota">${k.nama}</a>`;
                });
                const namaKota = document.querySelector(".card");
                namaKota.innerHTML = listKota;
                //ketika kota di klik
                const isiKota = document.querySelectorAll("#namaKota");
                isiKota.forEach(kota => {
                    const filterText = input.value.toLowerCase();
                    // console.log(filterText)
                    const itemText = kota.firstChild.textContent.toLowerCase();
                    console.log(itemText.indexOf(filterText));
                    if (itemText.indexOf(filterText) != -1) {
                        kota.setAttribute("style", "display : block");
                    } else {
                        kota.setAttribute("style", "display : none !important");
                    }
                    kota.addEventListener('click', function () {
                        const idKota = this.dataset.idkota;
                        const judulKota = this.textContent;
                        window.localStorage.setItem('idkota', idKota);
                        window.localStorage.setItem('judulKota', judulKota);
                        namaKota.classList.add('hidden');
                        input.value = "";
                        alert(`kota ${judulKota} berhasil dipilih`)
                        location.reload();
                    })
                })

            })
    } else {
        card.classList.add("hidden");
    }
})