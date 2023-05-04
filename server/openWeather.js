import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({ path: '../.env' }); //process.env.API_KEY

const weather = app => {
  app.get('/weather', async (req, res) => {
    const lat = 37.5815659;
    const lon = 126.8860337;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`;
    try {
      const data = await (await fetch(url)).json();
      const result = {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temp: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        rain: data.rain ? data.rain['1h'] : 0,
      };
      res.status(200).json(result);
    } catch (err) {
      //에러처리
      console.log(err);
    }
  });

  return app;
};

export default weather;
