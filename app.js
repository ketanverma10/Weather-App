
const apikey='339e8b5754ff2f9d083142a9f996beab'
const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`
const searchfield=document.querySelector('#searchfield')
const searchbtn=document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
async function checkWeather(cityname) {
    const response = await fetch (url + `&q=${cityname}`)
    var data = await response.json()
    
    if(response.status==404){
        document.querySelector(".error").style.display='block'
        document.querySelector(".weather").style.display='none'

    }
    else{
        console.log(data)
    document.querySelector(".city").innerHTML=data.name
    document.querySelector( ".temp").innerHTML= Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
    document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h'

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    
    document.querySelector(".weather").style.display='block'
    document.querySelector(".error").style.display='none'

    }
    

}

searchbtn.addEventListener('click',()=>{
    checkWeather(searchfield.value)

})