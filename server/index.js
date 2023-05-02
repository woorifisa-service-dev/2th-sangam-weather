import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;
const restaurantList = JSON.parse(fs.readFileSync('restaurant.json'));

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/restaurantInfo', (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(restaurantList);
  }
});

app.listen(port, () => {
  console.log(`
  server is open! 
  http://localhost:3000`);
});
