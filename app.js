// load whale sound
var whale = document.getElementById("whale");

function playWhaleSound() { 
  whale.autoplay = true;
  whale.load();
}

// Koi's time zone utc7
// function to get vietnam time
function convertToVietnamTime(chinaTime) {
  const vietnamOffset = 1;
  const vietnamTime = new Date(chinaTime);
  vietnamTime.setHours(vietnamTime.getHours() + vietnamOffset);

  return vietnamTime;

}
// function to calculate the time difference
function getDifference(targetTime) {
  const currentTime = new Date();
  const timeDiff = targetTime - currentTime;


  // calculate the remaining time
  const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeDiff /1000 / 60 / 60) % 24;
  const minutes = Math.floor(timeDiff /1000 / 60) % 60;
  const seconds = Math.floor(timeDiff / 1000) % 60;

  // display days
  document.getElementById("vn-day").innerHTML = days + "d";

  // display hours
  document.getElementById("vn-hour").innerHTML = hours + "h";

  // display minutes
  document.getElementById("vn-minute").innerHTML = minutes + "m";

  // display seconds
  document.getElementById("vn-sec").innerHTML = seconds + "s";
}
const targetTimeChina = new Date("2023-07-21T17:00:00+08:00");
const targetTimeVietnam = convertToVietnamTime(targetTimeChina);
getDifference(targetTimeVietnam);
// start countdown
const countdownInVietnam = setInterval(() => {
  getDifference(targetTimeVietnam);
}, 1000);


// Jace's timezone utc8
// function to get china time
function convertToChinaTime(vietnamTime) {
  const chinaTimeOffset = -1;
  const chinaTime = new Date(vietnamTime);

  chinaTime.setHours(chinaTime.getHours() + chinaTimeOffset);

  return chinaTime;
}
function getDifferenceJace(targetTime) {
  // get current time
  const currentTime = new Date();
  // get the difference of time
  const timeDiff = targetTime - currentTime;

  // get exact day on 21st, July
  const d = currentTime.getDate();
  const m = currentTime.getMonth();

  // compare time
  const currentTimeC = currentTime.getTime();
  const targetTimeC = targetTime.getTime();

  // get the countdown box
  let countdownBox = document.getElementById("countdown");

  if (currentTimeC < targetTimeC) {
    // show box
    countdownBox.style.display = "flex";

    if (d == 21 && m == 6) {
      const targetTime = new Date("2023-07-21T17:00:00+07:00");
      const timeDiff = targetTime - currentTime;
      // calculate the remaining time
      const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(timeDiff /1000 / 60 / 60) % 24;
      const minutes = Math.floor(timeDiff /1000 / 60) % 60;
      const seconds = Math.floor(timeDiff / 1000) % 60;
  
      // display days
      document.getElementById("ch-day").innerHTML = days + "d";
  
      // display hours
      document.getElementById("ch-hour").innerHTML = hours + "h";
  
      // display minutes
      document.getElementById("ch-minute").innerHTML = minutes + "m";
  
      // display seconds
      document.getElementById("ch-sec").innerHTML = seconds + "s";
    } else {
      // calculate the remaining time
      const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(timeDiff /1000 / 60 / 60) % 24;
      const minutes = Math.floor(timeDiff /1000 / 60) % 60;
      const seconds = Math.floor(timeDiff / 1000) % 60;
  
      // display days
      document.getElementById("ch-day").innerHTML = days + "d";
  
      // display hours
      document.getElementById("ch-hour").innerHTML = hours + "h";
  
      // display minutes
      document.getElementById("ch-minute").innerHTML = minutes + "m";
  
      // display seconds
      document.getElementById("ch-sec").innerHTML = seconds + "s";
    }
  } else {
    // hide box
    clearInterval(countdownInVietnamJace);
    clearInterval(countdownInVietnam);
    countdownBox.style.display = "none";
  }
  
  

}
const targetTimeVietnamJ = new Date("2023-07-21T17:00:00+07:00");
const targetTimeChinaJ = convertToChinaTime(targetTimeVietnamJ);
// start countdown
getDifferenceJace(targetTimeChinaJ);
const countdownInVietnamJace = setInterval(() => {
  getDifferenceJace(targetTimeChinaJ);
}, 1000);


// progress bar jace
function startProgressBarJace(targetDate) {
  const progressBar = document.getElementById('progress-bar-jace');
  const avatar = document.getElementById('avatar-jace');

  const totalDuration = targetDate - new Date('2023-06-23T00:00:00+07:00');
  // const totalDuration = targetDate - new Date();
  const interval = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    if (remainingTime <= 0) {
      progressBar.style.width = '100%';
      avatar.style.left = '100%';
    } else {
      const elapsedDuration = totalDuration - remainingTime;
      const progress = (elapsedDuration / totalDuration) * 100;

      progressBar.style.width = progress + '%';
      avatar.style.left = progress + '%';

    }
  }, 1000);
}
const targetDateJace = new Date('2023-07-21T17:00:00+07:00');
startProgressBarJace(targetDateJace);

// Koi
function startProgressBarKoi(targetDate) {
  const progressBar = document.getElementById('progress-bar-koi');
  const avatar = document.getElementById('avatar-koi');

  const totalDuration = targetDate - new Date('2023-06-23T00:00:00+07:00');
  // const totalDuration = targetDate - new Date();
  const interval = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;
    if (remainingTime <= 0) {
      progressBar.style.width = '100%';
      avatar.style.right = '100%';
    } else {
      const elapsedDuration = totalDuration - remainingTime;
      const progress = (elapsedDuration / totalDuration) * 100;
      progressBar.style.width = progress + '%';
      avatar.style.right = progress + '%';
    }

  }, 1000);
}
const targetDateKoi = new Date('2023-07-21T17:00:00+07:00');
startProgressBarKoi(targetDateKoi);


// weather status
const weatherApiKoi = "https://api.openweathermap.org/data/2.5/weather?q=can tho&appid=1e78a7b887a9205bd3a7ad3737e46cb6&units=metric";

const weatherApiJace = "https://api.openweathermap.org/data/2.5/weather?q=guangzhou&appid=1e78a7b887a9205bd3a7ad3737e46cb6&units=metric";

// get the weather data
async function getWeatherDataKoi(weatherApiKoi) {
  const response = await fetch(weatherApiKoi);
  const data = await response.json();

  // console.log(data);

  const imgsrc = document.querySelector(".ct-weather-icon");
  // can tho
   // display weather status
  const status = data.weather[0].description;
  document.querySelector(".ct-status").innerHTML = status;
  const cantho = data.name;
  // display city name can tho
  document.querySelector(".ct-city").innerHTML = cantho;
  // display degrees
  const degree = Math.round(data.main.temp);
  // console.log(degree);
  document.querySelector(".cttemp").innerHTML = degree + "°c";
  // display humidity
  const humidity = data.main.humidity;
  document.querySelector(".ct-humidity").innerHTML = humidity + "%";
  // display wind spped
  const windspeed = data.wind.speed;
  document.querySelector(".ct-wind").innerHTML = windspeed + "km/h";

  // change the weather image accordingly
  if (data.weather[0].main == "Clouds") {
    imgsrc.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    imgsrc.src = "./images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    imgsrc.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    imgsrc.src = "./images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    imgsrc.src = "./images/rain.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    imgsrc.src = "./images/thunderstorm.png";
  }
  else {
    imgsrc.src = "./images/snow.png";
  }


}
getWeatherDataKoi(weatherApiKoi);

async function getWeatherDataJace(weatherApiJace) {
  const response = await fetch(weatherApiJace);
  const data = await response.json();

  const imgsrc = document.querySelector(".gz-weather-icon");

  // display weather status
  const status = data.weather[0].description;
  document.querySelector(".gz-status").innerHTML = status;
  // guangzhou
  const guangzhou = data.name;
  // display city name guangzhou
  document.querySelector(".gz-city").innerHTML = guangzhou;
  // display degrees
  const degree = Math.round(data.main.temp);
  // console.log(degree);
  document.querySelector(".gztemp").innerHTML = degree + "°c";
  // display humidity
  const humidity = data.main.humidity;
  document.querySelector(".gz-humidity").innerHTML = humidity + "%";
  // display wind spped
  const windspeed = data.wind.speed;
  document.querySelector(".gz-wind").innerHTML = windspeed + "km/h";

  // change the weather image accordingly
  if (data.weather[0].main == "Clouds") {
    imgsrc.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    imgsrc.src = "./images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    imgsrc.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    imgsrc.src = "./images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    imgsrc.src = "./images/rain.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    imgsrc.src = "./images/thunderstorm.png";
  }
  else {
    imgsrc.src = "./images/snow.png";
  }

  // console.log(data);

}
getWeatherDataJace(weatherApiJace);


// count forwardly
// update the timer
function countForward() {
  // target date
  const startingDate = new Date("2023-07-21T17:00:00+07:00");
  // get current time
  const currentDate = new Date();

  // get the box
  let countForwardBox = document.getElementById("count-forward");

  const targetTime = new Date("2023-07-21T17:00:00+07:00").getTime();
  const currentTime = new Date().getTime();

  if (currentTime >= targetTime) {
    countForwardBox.style.display = "flex";
    // calc the difference in ms
    const timeDiff = currentDate - startingDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // display the timer
    // day
    document.getElementById("day").innerHTML = days + "d";
    document.getElementById("hour").innerHTML = hours + "h";
    document.getElementById("minute").innerHTML = minutes + "m";
    document.getElementById("sec").innerHTML = seconds + "s";

  } else {
    countForwardBox.style.display = "none";
  }

  

}
countForward();
const countForwardInterval = setInterval(
  countForward, 1000
);


// display heart
let progress = document.getElementById("progress");
let heart = document.getElementById("heart");
progress.addEventListener("mouseover", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.display = "block";

});

progress.addEventListener("mouseout", () => {
  heart.style.display = "none";
});




