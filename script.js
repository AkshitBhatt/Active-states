"use strict";

let daily = document.querySelector(".Daily");
let weekly = document.querySelector(".weekly");
let Monthly = document.querySelector(".Monthly");

var data;
await fetch("data.json")
  .then((res) => res.json())
  .then((result) => (data = result));

// document.querySelector(".work-3").innerHTML = "";
data.map((ele, i) => {
  document.querySelector(".work-3").innerHTML += `
    <div class="d-flex ">
    <div
      class=" work1 d-flex flex-column align-items-end justify-content-end"
    >
      <img src=images/icon-${(i + 1).toString()}.svg class="plus" alt="" />

      <div class="work">
        <div class="d-flex justify-content-between">
          <p>${ele.title}</p>
          <img src="images/icon-ellipsis.svg" class="img1 mt-3" alt="" />
        </div>
        <p class="fs-1">${ele.timeframes.weekly.current}hrs</p>
        <p>Last week -${ele.timeframes.weekly.previous}hrs</p>
      </div>
    </div>
    `;
});

daily.addEventListener("click", () => {
  document.querySelector(".work-3").innerHTML = "";
  data.map((ele, i) => {
    document.querySelector(".work-3").innerHTML += `
    <div class="d-flex">
    <div
      class=" work1 d-flex flex-column align-items-end justify-content-end"
    >
      <img src=images/icon-${(i + 1).toString()}.svg class="plus" alt="" />

      <div class="work">
        <div class="d-flex justify-content-between">
          <p>${ele.title}</p>
          <img src="images/icon-ellipsis.svg" class="img1 mt-3" alt="" />
        </div>
        <p class="fs-1">${ele.timeframes.daily.current}hrs</p>
        <p>Last week -${ele.timeframes.daily.previous}hrs</p>
      </div>
    </div>

  
      `;
  });
});

weekly.addEventListener("click", () => {
  document.querySelector(".work-3").innerHTML = "";
  data.map((ele, i) => {
    document.querySelector(".work-3").innerHTML += `
    <div class="d-flex ">
    <div
      class=" work1 d-flex flex-column align-items-end justify-content-end"
    >
      <img src=images/icon-${(i + 1).toString()}.svg class="plus" alt="" />

      <div class="work">
        <div class="d-flex justify-content-between">
          <p>${ele.title}</p>
          <img src="images/icon-ellipsis.svg" class="img1 mt-3" alt="" />
        </div>
        <p class="fs-1">${ele.timeframes.weekly.current}hrs</p>
        <p>Last week -${ele.timeframes.weekly.previous}hrs</p>
      </div>
    </div>
    `;
  });
});

Monthly.addEventListener("click", () => {
  document.querySelector(".work-3").innerHTML = "";
  data.map((ele, i) => {
    document.querySelector(".work-3").innerHTML += `
    <div class="d-flex ">
    <div
      class="work1 work1 d-flex flex-column align-items-end justify-content-end"
    >
      <img src=images/icon-${(i + 1).toString()}.svg class="plus" alt="" />

      <div class="work">
        <div class="d-flex justify-content-between">
          <p>${ele.title}</p>
          <img src="images/icon-ellipsis.svg" class="img1 mt-3" alt="" />
        </div>
        <p class="fs-1">${ele.timeframes.monthly.current}hrs</p>
        <p>Last week -${ele.timeframes.monthly.previous}hrs</p>
      </div>
    </div>
      `;
  });
});

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
