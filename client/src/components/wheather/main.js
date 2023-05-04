(async () => {
  try {
    document.querySelector('#loader').classList.add('loading');
    const result = await (await fetch('/weather')).json();
    const weatherIcon = document.createElement('img');
    weatherIcon.src = './src/public/img/weather/' + result.icon + '.png';
    weatherIcon.classList.add('image-thumbnail');
    document.querySelector('.image-box').prepend(weatherIcon);
    document.getElementById('temperature-box').innerText = Math.ceil(result.temp);
    document.getElementById('humidityText-box').innerText = result.humidity;
    document.getElementById('speedText-box').innerText = result.speed;
    document.getElementById('rainText-box').innerText = result.rain;
    const isRain = result.rain ? true : false;
    useWeather(result.temp, isRain);
    await recommendRestaurant(result.temp, isRain);
    document.querySelector('#loader').classList.remove('loading');
  } catch (error) {
    alert('서버에 문제가 생겼습니다.');
  }
})();
