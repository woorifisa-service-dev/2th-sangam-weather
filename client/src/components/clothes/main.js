// getWeather();

const imgWrap = document.querySelector('.imgWrap');
let clothLength = [7, 5, 5, 6, 5, 4, 4, 5, 3]; //폴더 안의 파일 개수

let useWeather = (temp, isRain) => {
  let path = 1;

  if (temp >= 27) {
    path = 1;
  } else if (23 <= temp && temp < 27) {
    path = 2;
  } else if (20 <= temp && temp < 23) {
    path = 3;
  } else if (17 <= temp && temp < 20) {
    path = 4;
  } else if (12 <= temp && temp < 17) {
    path = 5;
  } else if (10 <= temp && temp < 12) {
    path = 6;
  } else if (6 <= temp && temp < 10) {
    path = 7;
  } else if (2 <= temp && temp < 6) {
    path = 8;
  }

  if (isRain) {
    path = 9;
  }

  for (let i = 0; i < clothLength[path - 1]; i++) {
    let list = document.createElement('li');
    list.style.background = `url('./src/public/img/clothes/${path}/${
      i + 1
    }.png')no-repeat center / contain`;
    imgWrap.appendChild(list);
  }
};
