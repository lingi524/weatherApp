window.addEventListener("load", ()=> {

  let long
  let lat

  let locationCity = document.querySelector(".location-city");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(".temperature-description");
  
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
            // const icon = data.data[0].weather.icon;
            locationCity.innerText = cityName;
            temperatureDegree.innerText = currentTempereature;
            //Get rain and snow and wind maybe, make into a boolean, when advice after that as well. 

            //See if I think its warm enough for a bikeride
            
            if (currentTempereature < 0) {
              temperatureDescription.innerText = "Nope. It's to cold in " + cityName + " today";
            } else if (currentTempereature>0 && currentTempereature<15) {
              temperatureDescription.innerText = "Hmmm, maybe if you put on a pair of långkalsonger";
            }
            else if (currentTempereature>15 && currentTempereature<20) {
              temperatureDescription.innerText = "The temperature is perfect for a bikeride!";
            }
            else if (currentTempereature>20 && currentTempereature<30) {
              temperatureDescription.innerText = "It's very varm outside, be sure to bring water and it will be ok!";
            }

          })
      },
    )
  }

});