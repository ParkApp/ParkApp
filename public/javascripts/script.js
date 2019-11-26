const checked = []
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("Mesa").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_MESA: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Banco").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_BANCO: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Papelera").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_PAPELERA: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Contenedor").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_CONTENEDOR: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Fuente").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_FUENTE: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Senal").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_SENAL: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Juegos").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_JUEGOS: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Senda").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_SENDA: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Kiosco").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_KIOSCO: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Aseos").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_ASEOS: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Estacionamiento").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_ESTACIONAMIENTO: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Bicis").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_P_BICIS: "S" })
      console.log(checked)
    } else {
      let place = Number

      checked.forEach((elm, idx) => {
        if (elm.IT_P_BICIS == "S") {
          checked.splice(idx, 1)
        }
      })

    }
  }

  document.getElementById("Bano").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_BANO: "S" })
      console.log(checked)
    }
  }
  document.getElementById("Barbacoa").onclick = (e) => {
    if (e.target.checked) {
      checked.push({ IT_BARBACOA: "S" })
      console.log(checked)
    }
  }


  console.log('IronGenerator JS imported successfully!');
  console.log(checked)

}, false);
