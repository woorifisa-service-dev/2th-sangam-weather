function getWeather() {
  // 날씨 API 요청
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=4e8805ab0d7fb4c3356c58fa53901f24&units=metric`;
  const API_KEY = "4e8805ab0d7fb4c3356c58fa53901f24";

  const lat = 37.5815659;
  const lon = 126.8860337;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const cors_url = ``;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log("온도 = " + data.main.temp);
      console.log("날씨이미지 이름 = " + data.weather[0].icon);
    });
}

getWeather();
