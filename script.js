const btn=document.querySelector(".get");
const input=document.querySelector("#inp");
const weather=document.querySelector(".weather")
const grp=document.querySelector(".inp-grp2");
const cty=document.querySelector(".temp h4");
const temp=document.querySelector(".temp h2");
const des=document.querySelector(".temp p");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".windspeed");
const feels=document.querySelector(".feelslike");
btn.addEventListener('click',()=>{
    const city = input.value; 
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  grp.style.display="flex";
  weather.style.height="400px";
  weather.style.width="300px";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bc35389ccacb5ca1306955deeea0b64&units=metric`).then(
    (response)=>{
        return response.json();
    }
  ).then((data)=>{
    if(data.cod==404){
      alert("invalid city");
      return;
    }
    cty.innerHTML=data.name;
    temp.innerHTML=`${data.main.temp}°C`;
    des.innerHTML=data.weather[0].description;
    humidity.innerHTML=`Humidity:<br> ${data.main.humidity}%`;
    wind.innerHTML=`Wind speed:<br>${data.wind.speed}m/s`;
    feels.innerHTML=`Feels like:<br>${data.main.feels_like}°C`;
    console.log(data);
  })
  input.value="";
})



