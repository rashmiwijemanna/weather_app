const app=document.querySelector('.weather-app');
const temp = document.querySelector('.temp')
const dateOutput= document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput= document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon=document.querySelector('.icon');
const cloudOutput=document.querySelector('.cloud');
const Humidity=document.querySelector('humidity');
const windOutput=document.querySelector('.wind');
const form=document.getElementById('locationInput');
const search=document.querySelector('.search');
const btn=document.querySelector('.submit');
const cities=document.querySelector('.city');

let cityInput= "London";

cities.forEach((city) => {
    cities.addEventListener('click', (e) => {
        cityInput = e.target.innerHtml;

        fetchWeatherData();
        app.computedStyleMap.opacity = "0";
    })
    
})

form.addEventListener('submit', (e) => {
    if(search.value.lenght==0){
        alert('Please type in a city name');
    }else{
        cityInput=search.value;

        fetchWeatherData();

        search.value="";

        app.style.opacity = 0;
    }

    e.preventDefault();
})


function dayOfTheWeek(day, month, year){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};




