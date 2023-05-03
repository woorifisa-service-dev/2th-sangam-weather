const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.5820627, 126.8890844),
  level: 3,
};

const map = new kakao.maps.Map(container, options);
const mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
const markerPosition = new kakao.maps.LatLng(37.5820627, 126.8890844);
const marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map);

const recommendRestaurant = async (temp, isRain) => {
  const data = await (await fetch('/restaurantInfo')).json();
  let filtteredArray = data;
  if (temp <= 0) {
    filtteredArray = filtteredArray.filter(list => {
      if (
        list.name.includes('국수') ||
        list.name.includes('찌개') ||
        list.name.includes('짜글이') ||
        list.name.includes('탄탄면')
      ) {
        return list;
      }
    });
  } else if (temp >= 30) {
    filtteredArray = filtteredArray.filter(list => {
      if (
        list.name.includes('김밥') ||
        list.name.includes('써브웨이') ||
        list.name.includes('온돈부리') ||
        list.name.includes('상암회관')
      ) {
        return list;
      }
    });
  } else if (isRain) {
    filtteredArray = filtteredArray.filter(list => {
      if (list.name.includes('칼국수') || list.name.includes('김치')) {
        return list;
      }
    });
  }
  let randomFood = filtteredArray[Math.floor(Math.random() * filtteredArray.length)];
  document.querySelector('.restaurant-recommend h3').innerText = randomFood.name;
  for (const list of randomFood.food) {
    const li = document.createElement('li');
    li.innerText = list;
    document.querySelector('.restaurant-recommend ul').appendChild(li);
  }
  document.querySelector('.restaurant-recommend address').innerText = randomFood.address;
  options.center = new kakao.maps.LatLng(randomFood.lat, randomFood.lon);
};
