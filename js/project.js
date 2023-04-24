function getWeather(lat, lon) {
  var temp = {};
  var openWeatherAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&lat=37.4495733&lon=126.7154219"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

  $.ajax({
    type: "GET",
    url: openWeatherAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      //정상 응답시 처리 작업
      temp.celsius = data.main.temp.toFixed(0); // 소수점 버림;
      temp.icon = data.weather[0].icon;
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  console.log(temp);
  return temp;
}

function getWeatherWithCity(city) {
  var temp = {};
  var openWeatherAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q="; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다
  openWeatherAPI += city;

  $.ajax({
    type: "GET",
    url: openWeatherAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      //정상 응답시 처리 작업
      temp.celsius = data.main.temp.toFixed(0); // 소수점 버림;
      temp.icon = data.weather[0].icon;
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  console.log(temp);
  return temp;
}

var cityList = [
  "seoul",
  "incheon",
  "busan",
  "daegu",
  "daejeon",
  "jeju",
  "gangneung",
  "bucheon",
  "gimhae",
  "gyeongju",
  "iksan",
  "yeosu",
];

for (const city of cityList) {
  let temp = getWeatherWithCity(city);
  $("." + city + " > .celsius").text(`${temp.celsius}℃`);

  var iconURL = "https://openweathermap.org/img/wn/";
  $("." + city + " > .icon > img").attr("src", iconURL + temp.icon + ".png");
}
