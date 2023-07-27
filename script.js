const inputbox = document.querySelector('.inputbox');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description'); 
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location_not_found');



async function checkWeather(city){
    const api_key="bcb50a59d09a9930d4b2486569cecd7d";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;



    windspeed.innerHTML = `${weather_data.wind.speed}KM/H`;

   switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src="/images/cloud.png";
        break;
        case 'Clear':
        weather_img.src="/images/clear.png";
        break;
        case 'Rain':
        weather_img.src="/images/rain.png";
        break;
        case 'Mist':
        weather_img.src="/images/mist.png";
        break;
        case 'Snow':
        weather_img.src="/images/snow.png";

 
      

        
        break;
   
    default: "undefined";
        break;
   }

    // console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{

    checkWeather(inputbox.value);

});