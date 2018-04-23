function translate(words) {
  var baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  var API_KEY =
    "trnsl.1.1.20180423T104000Z.92de8d60387621be.caaca061cc50ab7a5e1ed325c018e437dc26eef6";
  var params = `?key=${API_KEY}&text=Hello&lang=en-fr`;
  var url = baseURL + params;
  fetch(url);
}

translate("Hello");