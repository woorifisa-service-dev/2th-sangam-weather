import express from 'express';
import getWeather from './openWeather.js';
import getRestaurant from './restaurant.js';

export const app = express();
const port = 3000;

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

getRestaurant(app);
getWeather(app);

app.listen(port, () => {
  console.log(`
  server is open! 
  http://localhost:3000`);
});
