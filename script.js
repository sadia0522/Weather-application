const apiKey = "693b6eb341486f902ab072040d9d0967";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");

const weatherIcon = document.querySelector('.weather-icon');

async function chackWeather(city) {
    const respons = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await respons.json()
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';


    if(data.weather[0].main =='Clouds'){
        weatherIcon.src = 'cold-removebg-preview.png'
    }
    else if (data.weather[0].main =='Clear'){
        weatherIcon.src = 'clear-removebg-preview.png'
    }
    else if (data.weather[0].main =='Drizzle'){
        weatherIcon.src = 'drizzle-removebg-preview.png'
    }
    else if (data.weather[0].main =='Mist'){
        weatherIcon.src = 'mist-removebg-preview.png'
    }

    
}


searchBtn.addEventListener('click',() => {
    chackWeather(searchBox.value)
});


