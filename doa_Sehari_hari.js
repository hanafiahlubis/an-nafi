// const elemenOutput = document.querySelector('#out-put');
const main = document.querySelector(".output");
async function tampil(param) {

    let data = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian', {})
        .then(res => res.json())
        .then(function (json) {
    
            console.log(json)
            const x = json.data;
            let out = "";
            // for(let x=0;x<)
            x.forEach(e => {
                out += `<div class="container-3 "><h3 class="kiri">${e.title}</h3> <p class="paragraf"><br>${e.arabic}</p><p class="artinya">Artinya: ${e.translation}</p></div>`
            })
            main.innerHTML = out

        })
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
