
const apikey='339e8b5754ff2f9d083142a9f996beab'
const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`
const searchfield=document.querySelector('#searchfield')
const searchbtn=document.querySelector('.search button')
async function checkWeather(cityname) {
    const response = await fetch (url + `&q=${cityname}`)
    var data = await response.json()
    
    console.log(data)
    document.querySelector(".city").innerHTML=data.name
    document.querySelector( ".temp").innerHTML= math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
    document.querySelector('.wind').innerHTML=data.main.wind.speed + 'km/h'
}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchfield.value)

})