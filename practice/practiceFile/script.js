const inputUsd = document.querySelector("#usd");
const inputUan = document.querySelector("#uan");

inputUan.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass);
  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  //status
  //statusText
  //response
  //readyState

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUan.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Something wrond";
    }
  });
});
