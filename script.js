window.addEventListener("load", ()=> {

  let long
  let lat

  let locationCity = document.querySelector(".location-city");
  let temperatureDegree = document.querySelector(".temperature-degree");
  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        long = position.coords.longitude
        lat = position.coords.latitude
        const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=13376e09cd864dfa9576fc020d5c5b65`;
        console.log(lat, long)

        fetch(api)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            const cityName = data.data[0].city_name;
            const currentTempereature = data.data[0].temp;
            console.log(cityName);
            locationCity.innerText = cityName;
            temperatureDegree.innerText = currentTempereature;
          })
      },
    )
  }
});