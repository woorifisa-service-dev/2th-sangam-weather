async function getWeather() {
  // 날씨 API 요청
  const url = 'http://localhost:3000/weather';

  const cors_url = ``;

  try {
    const result = await (await fetch(url)).json();

    // result.speed : 풍속
    return result;
  } catch (error) {
    // 날씨 API 에러 발생시 처리
    alert('서버에 문제가 생겼습니다.');
  }
}

var result;
(async () => {
  result = await getWeather();
  document.getElementById('weather-img').src = './src/img/weather/' + result.icon + '.png';
  let temperatureTextBox = document.getElementById('temperature-box');
  let humidityTextBox = document.getElementById('humidityText-box');
  let speedTextBox = document.getElementById('speedText-box');
  let rainTextBox = document.getElementById('rainText-box');

  temperatureTextBox.innerText = result.temp;
  humidityTextBox.innerText = result.humidity;
  speedTextBox.innerText = result.speed;
  rainTextBox.innerText = result.rain;
})();
