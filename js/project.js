var topRated =
  "https://api.themoviedb.org/3/movie/popular?api_key=609302939117d8d2b2dbeeb7381d9a00&language=ko-kr&page=1"; // city가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다

$.ajax({
  type: "GET",
  url: topRated,
  dataType: "json",
  async: false,
  success: function (data) {
    const results = data.results;
    console.log(results);
    console.log(data);
    //   https://image.tmdb.org/t/p/w500/
    for (const result of results) {
      console.log("영화 포스터 : ", result.poster_path);
      console.log("영화 아이디 : ", result.id);
      for (var i = 0; i < 7; i++) {
        $(`.card_top_${i}`).text(`${results[i].overview}`);
        let imgURL = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
        $(`.card_img_${i}`).append(
          `<a href='./detail.html?id=${results[i].id}'><img src=${imgURL} style="width: 200px; padding: 10px" ;></a>`
        );
      }
      return;
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

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
