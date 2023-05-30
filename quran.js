const suroh = document.getElementById("suroh");
const output = document.querySelector(".output");

function option() {
  for (let x = 1; x <= 114; x++) {
    let op = document.createElement("option");
    op.value = x;
    // op.textContent = `${x}`;
    // op.className = "abc"
    fetch(
      `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/` +
        x +
        `.json`
    )
      .then((response) => response.json())
      .then((bebas) => {
        console.log(bebas);
        // op.textContent = `${x}. `;
        op.textContent = `${bebas.number_of_surah}.${bebas.name}`;
      });
    if (x === 2) {
      op.setAttribute("selected", true);
      ayat(x);
    }
    suroh.appendChild(op);
  }
}

option();
function ayat(suroh) {
  output.innerHTML = "";
  fetch(
    `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/` +
      suroh +
      `.json`
  )
    .then((response) => response.json())
    .then((bebas) => {
      console.log(bebas);
      const text = bebas.verses;
      console.log(text);
      let out = "";
      out += `<div class="namaSuroh"><h3>${bebas.number_of_surah}.&#160${bebas.name}</h3></div> <div class="namaSuroh a"><h2>${bebas.name_translations.id} </h2></div><div class="ayatH3">
            <h3>${bebas.number_of_ayah}&#160ayat</h3></div> </div> <hr>`;
      text.forEach((e) => {
        out += ` <div class="ayat"><h2 class ="ayatku">${e.text}</h2><p class="artiku"> ${e.number}.${e.translation_id}</p></div>`;
      });

      output.innerHTML = out;
    });
}

suroh.addEventListener("change", (e) => ayat(e.target.value));
