document.getElementById('location-form').addEventListener('submit', getWeather);

function getWeather(e) {
  e.preventDefault(); // Prevent form submission

  // Get the value entered in the location input field
  const locationInput = document.getElementById('location-input');
  const location = locationInput.value;

  
  //console.log(location);
  // Construct the API URL with the location and API key
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4b3898f5071e1e31e8dc5b3e0eca455b&units=metric`;

  // Make the API call using fetch
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch weather data'); // Throw an error for failed response
      }
      return response.json(); // Parse JSON response
    })
    .then(data => {
      // Handle the weather data
      //console.log('Weather data:', data);
      document.getElementById('city').innerHTML=data.name;
      document.getElementById('weather').innerHTML=data.weather[0].main;
      document.getElementById('weather-sub').innerHTML=data.main.temp;
      locationInput.value='';
      // You can access different properties of the data object here to display weather information
    })
    .catch(error => {
      //console.error('Error:', error.message); // Log specific error message
      document.getElementById('weather').innerHTML="Error: City not found";
      locationInput.value='';
    });

    // location.value='';
    
}
