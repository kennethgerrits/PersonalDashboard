    // Fetches weather information with OpenWeather API
    let openWeatherMap = 'https://api.openweathermap.org/data/2.5/weather'
    var userLang = navigator.language || navigator.userLanguage;

    if (window.navigator && window.navigator.geolocation && userLang) {
        window.navigator.geolocation.getCurrentPosition(function (position) {
            $.getJSON(openWeatherMap, {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                units: 'metric',
                lang: userLang,
                APPID: 'ca862c1ce25923db366fa1502282cb69'
            }).done(function (weather) {
                $('#location').html(weather.name);
                $('#weatherIcon').html('<img src=assets/openweathermapicons/' + weather.weather[0].icon + '@2x.png>');
                $('#temp').html(Math.round(weather.main.temp) + '&deg;C');
                $('#feels_like').html('Feels like: ' + Math.round(weather.main.feels_like * 10) / 10 + '&deg;C');
                $('#weatherDescription').html(weather.weather[0].description);
                $('#humidity').html('Humidity: ' + weather.main.humidity + '%');
                $('#wind').html('Wind: ' + weather.wind.speed + 'km/h');
                $('#windArrow').css('transform', 'rotate(' + weather.wind.deg + 'deg)');
            });
        });
    }