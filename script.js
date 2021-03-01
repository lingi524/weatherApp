//Get longitude and lattitude
window.addEventListener("load", ()=> {
    let long;
    let lat;
    console.log("hallåejkfn ");
    

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position)
          long = position.coords.longitude;
          lat = position.coords.latitude;
        });
        console.log(lat);

    }
});

console.log("hallå");