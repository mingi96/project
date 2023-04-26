// 1. 전체 url 가져오기
const currentURL = location.href;

// 2. 쿼리스트링 파라메터 가져오기
const urlobj = new URL(currentURL);

//파라메터에 대한 정보가 들어있다.
const params = urlobj.searchParams;

// 파라메터의 값을 구한다 params.get("변수명")
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

// 3. ajax 이용해 전체 날씨 정보 얻어오기
function getCityweather(q) {
  var temp = {};
  var urlAPI =
    "https://www.themoviedb.org/movie/${id}?api_key=609302939117d8d2b2dbeeb7381d9a00&language=ko-kr&page=1";
  urlAPI += "&q=" + q;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태 => ajax는 기본적으로 비동기다.
    success: function (data) {
      console.log(data);
      temp.celsius = data.main.temp.toFixed(0);
      temp.icon = data.weather[0].icon;
      temp.feels_like = data.main.feels_like;
      temp.humidity = data.main.humidity;
      temp.wind_speed = data.wind.speed;
      temp.clouds_all = data.clouds.all;
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });
  return temp;
}

// 4. 데이터 바인딩 작업
$(".region-title").text(`${krcity} 상세날씨`);
let temp = getCityweather(q);
$(".celsius").text(`${temp.celsius}`);
$(".feels_like").text(`${temp.feels_like}`);
$(".humidity").text(`${temp.humidity}`);
$(".wind_speed").text(`${temp.wind_speed}`);
$(".clouds_all").text(`${temp.clouds_all}`);

$(".img").attr("src", iconURL);
