async function getWeather() {
  // 날씨 API 요청
  const url = 'http://localhost:3000/weather';

  const cors_url = ``;

  await fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log('날씨 요청 받아옴');
      console.log(result);

      // result.humidity : 습도
      // result.speed : 풍속
      document.getElementById('weather-img').src = './src/img/weather/' + result.icon + '.png';
      let temperatureTextBox = document.getElementById('temperature-box');
      let humidityTextBox = document.getElementById('humidityText-box');
      let speedTextBox = document.getElementById('speedText-box');
      let rainTextBox = document.getElementById('rainText-box');

      temperatureTextBox.innerText = result.temp;
      humidityTextBox.innerText = result.humidity;
      speedTextBox.innerText = result.speed;
      rainTextBox.innerText = result.rain;
    });
}

getWeather();
