const app=document.querySelector('.weather-app');
const temp = document.querySelector('.temp')
const dateOutput= document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput= document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon=document.querySelector('.icon');
const cloudOutput=document.querySelector('.cloud');
const HumidityOutput=document.querySelector('.humidity');
const windOutput=document.querySelector('.wind');
const form=document.getElementById('locationInput');
const search=document.querySelector('.search');
const btn=document.querySelector('.submit');
const cities=document.querySelectorAll('.city');

const video = document.querySelector(".videoPlayer")
const forecastList = document.querySelector(".forecast-list");

let cityInput= "London";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.textContent;

       
        app.style.opacity = "0";
        setTimeout(fetchWeatherData, 500);
    })
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(search.value.length==0){
        alert('Please type in a city name');
    }else{
        cityInput=search.value;

       

        search.value="";

        app.style.opacity = 0;
        setTimeout(fetchWeatherData, 500);
    }

   
})


function dayOfTheWeek(day, month, year){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

function fetchWeatherData(){
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7968f0118cec4306a24144801252506&q=${cityInput}&days=3`)
    .then(response => response.json() )
    .then(data => {
        console.log(data);

        temp.innerHTML=data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;

        const date= data.location.localtime;

        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));

        const time = date.substr(11);

        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`

        timeOutput.innerHTML = time;
        nameOutput.innerHTML = data.location.name;

        const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length
        );

        icon.src = "https:" + data.current.condition.icon;

        cloudOutput.innerHTML = data.current.cloud + "%";
        HumidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_kph + "km/h";

        let timeOfDay = "day";

        const code = data.current.condition.code;

        if(!data.current.is_day){
            timeOfDay = "night"
        }

        if(code ==1000){
            video.src = `./videos/${timeOfDay}/clear.mp4`;
            btn.style.background = "#7aa6edff";
            if(timeOfDay == "night"){
                btn.style.background = "#181e27"
            }
        }
        else if(
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282){
             video.src = `./videos/${timeOfDay}/cloudy.mp4`;
            btn.style.background = "#e5ba92";
             if(timeOfDay == "night"){
                btn.style.background = "#0e0c0bff"
            }

            } else if (

                code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252
            ){
                video.src = `./videos/${timeOfDay}/rainy.mp4`;
                btn.style.background="#0a5427ff";

                if(timeOfDay == "night"){
                    btn.style.background = "#765e0fff"
                }
            } else {
                video.src = `./videos/${timeOfDay}/snow.mp4`;
                btn.style.background= "#000000ff";
                if(timeOfDay == "night"){
                    btn.style.background = "#dcc772ff"

                }

            
            }

            forecastList.innerHTML = "";
            data.forecast.forecastday.forEach(day => {
                const li=document.createElement("li");
                li.classList.add("forecast-card");

                const dateObj= new Date(day.date);
                const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short'});

                const iconUrl="https:" + day.day.condition.icon;

                li.innerHTML = `
                <span class="forecast-day">${dayName}</span>
                <img src="${iconUrl}" class="forecast-icon" alt="icon">
                 <span class="forecast-temp">${Math.round(day.day.avgtemp_c)}&#176;</span>   
                 `;
                 forecastList.appendChild(li);
                

            });

            app.style.opacity = "1";
           
        
    

        
        
    })

    .catch(() => {
        alert("City not found, please try again");
        app.style.opacity = "1";
    })
}

function getUserLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                cityInput = `${lat},${lon}`;

                fetchWeatherData();
                app.style.opacity = "0";
                setTimeout(() => app.style.opacity = "1", 500);

            },
            (error) => {
                console.log("Location access denied or error. Loading default city.");
                fetchWeatherData();
                
            }
        );
    }else{
        alert("Geolocation is not supported by your browser.");
        fetchWeatherData();
    }
}

getUserLocation();





