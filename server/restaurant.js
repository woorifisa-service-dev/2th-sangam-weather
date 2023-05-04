import fs from 'fs';

const restaurantList = JSON.parse(fs.readFileSync('restaurant.json'));

const getRestaurantInfo = app => {
  app.get('/restaurantInfo', (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json(restaurantList);
    }
  });
};

export default getRestaurantInfo;
