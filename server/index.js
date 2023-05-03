import express from 'express';
import fs from 'fs';
import weather from './openWeather.js';
import cors from 'cors';

export const app = express();
const port = 3000;
const restaurantList = JSON.parse(fs.readFileSync('restaurant.json'));

app.use(cors());

const options = {
  origin: '*', // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors(options));

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/restaurantInfo', (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(restaurantList);
  }
});

weather(app);

app.listen(port, () => {
  console.log(`
  server is open! 
  http://localhost:3000`);
});
