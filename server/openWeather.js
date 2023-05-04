import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); //process.env.API_KEY
import fetch from 'node-fetch';

//강수량 가져오는 함수 - 없으면 0 반환
function getRain(data) {
  return data.rain ? data.rain['1h'] : 0;
}

const weather = app => {
  app.get('/weather', async (req, res) => {
    const lat = 37.5815659;
    const lon = 126.8860337;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`;
    let result = {};

    try {
      await fetch(url) // axios라이브러리 사용 시 json 처리 추상화
        .then(response => response.json())
        .then(data => {
          result.icon = data.weather[0].icon;
          result.description = data.weather[0].description;

          result.temp = data.main.temp;
          result.humidity = data.main.humidity;
          result.speed = data.wind.speed;
          result.rain = getRain(data);

          res.send(result);
        });
    } catch (err) {
      //에러처리
    }
  });

  return app;
};

export default weather;
