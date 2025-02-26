const srch = document.querySelector('#dstn');
const BaseURL = 'https://api.weatherapi.com/v1/current.json?key=93dd826b9509431a95c25637252502&q=';
const srchBtn = document.querySelector('#srchBtn');
const img = document.querySelector('.imgCnt img');
const temp = document.querySelector('#tbcTemp');
const place = document.querySelector('.cityName');
const humidity = document.querySelector('#percentage');
const wind = document.querySelector('#speed');
const info = document.querySelector('.infoCnt');

async function checkWeather(){
    let srchInput = srch.value.toLowerCase();
    const URL = BaseURL + srchInput;
    let response = await fetch(URL);
    if(response.ok){
        let data = await response.json();

        changeImg(data.current.condition.icon);
        temp.innerText = Math.round(data.current.temp_c);
        place.innerText = data.location.name;
        humidity.innerText = data.current.humidity + '%';
        wind.innerText = data.current.wind_kph;

        info.classList.remove('hide');
    }else{
        alert('invalid name of the place 🤨');
    }
}

function changeImg(data){
    img.src = data;
}

srchBtn.addEventListener('click', ()=>{
    checkWeather();
})

