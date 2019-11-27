document.addEventListener('DOMContentLoaded', () => {
  const checked = []

  const select = document.getElementsByClassName('find')
  const boton = document.getElementById("button")
  const prueba = document.getElementById("prueba")
  const linkGo = document.getElementById('goTo')

  // buttonGo.onclick = (e) => {
  //   let parkSelect = prueba.options.selectedIndex
  //   const selectId = prueba[parkSelect].value

  // }
  if (prueba) {
    prueba.onchange = (e) => {
      let parkSelect = prueba.options.selectedIndex
      const selectId = prueba[parkSelect].value
      linkGo.setAttribute("href", `/${selectId}/park-detail`)
      console.log(selectId)

    }
  }

  // console.log(prueba.childNodes)

  let newSelect = [...select]
  newSelect.forEach(elm => {
    elm.onclick = (e) => {
      name = e.target.name

      if (e.target.checked) {
        let obj = {}
        obj[elm.id] = "S"
        id = elm.id
        checked.push(obj)
      } else if (!(e.target.checked)) {
        checked.forEach((elm, idx) => {
          if (Object.keys(elm)[0] == name) {
            checked.splice(idx, 1)
          }
        })
      }
      console.log(checked)
    }
  })
  if (boton) {
    boton.onclick = (e) => {
      axios.get("/api", {
        params: {
          info: checked
        }
      })
        .then(response => {
          const ids = []
          response.data.park.forEach(park => ids.push(park._id))
          console.log(prueba.children)
          const arr = [...prueba.children]
          arr.forEach(elm => {
            console.log(elm.value)
            if (!ids.includes(elm.value)) {
              prueba.removeChild(elm)
            }
          })
          const myMap = new google.maps.Map(document.getElementById('map'),
            {
              zoom: 9,
              center: {
                lat: 40.40,
                lng: -3.7
              }
            }
          )
          placePlaces(response.data, myMap)
        })
        .catch(error => console.log(error))

    }

  }


  // console.log('IronGenerator JS imported successfully!');
}, false)
function getAllParksFromTheAPI(myMap) {
  axios.get("/api")
    .then(response => {
      // console.log(response)
      placePlaces(response.data, myMap)
    })
    .catch(error => console.log(error))
}
function placePlaces(Park, myMap) {
  Park.park.forEach(elm => {
    const center = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: elm.DS_NOMBRE
    });
  })
}
function initMap() {
  const myMap = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 9,
      center: {
        lat: 40.40,
        lng: -3.7
      }
    }
  )

  getAllParksFromTheAPI(myMap)
}
