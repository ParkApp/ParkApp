function getAllParksFromTheAPI(myMap) {
  //const table = document.getElementById("Mesa")
  axios.get("/api", {
    params: {
      foo: 'bar'
    }
  })
    .then(response => {
      console.log(response)
      //console.log(table.type)
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