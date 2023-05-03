import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); //process.env.API_KEY

//강수량 가져오는 함수 - 없으면 0 반환
function getRain(data) {
  // var key = eval('1h');
  return data.rain ? data.rain['1h'] : 0;
}

const weather = app => {
  app.get('/weather', async (req, res) => {
    const lat = 37.5815659;
    const lon = 126.8860337;

    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`;

    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`;

    let result = {};

    await fetch(url) // axios라이브러리 사용 시 json 처리 추상화
      .then(response => response.json())
      .then(data => {
        console.log('api서버에서 받아온 데이터');
        console.log(data);

        result.icon = data.weather[0].icon;
        result.description = data.weather[0].description;

        result.temp = data.main.temp;
        result.humidity = data.main.humidity;
        result.speed = data.wind.speed;

        result.rain = getRain(data);

        // console.log('날씨 api 정보' + result.temp);
        res.send(result);
      })
      .catch(error => console.error(error));

    // res.send(result);
  });

  return app;
};

export default weather;

// app.get('/restaurantInfo', (req, res) => {
//     if (req.method === 'GET') {
//       res.status(200).json(restaurantList);
//     }
//   });
