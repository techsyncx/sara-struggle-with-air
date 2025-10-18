async function getAQI(city = "Lahore") {
  const token = "your_api_token_here";
  const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${token}`);
  const data = await response.json();
  document.body.insertAdjacentHTML('beforeend', `<p>Current AQI in ${city}: ${data.data.aqi}</p>`);
}

getAQI();
