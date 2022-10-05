//open weather api key
let apiKey = "4b4875a4aa1ad99ee265ed1dc59a8d80";

//meteostat api key needed to look up cities. 
//to try app without api key, look up data for one of the saved cities: 
//Portland, Chicago, New Oreleans, Miami, Tokyo, or Paris

let apiKey2 = "";
import { cityMonthly } from "./monthcities.js"

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


//APP CALL FOR MONTHLY DATA
//DOCS:
//https://rapidapi.com/meteostat/api/meteostat
//https://dev.meteostat.net/api/stations/normals.html
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey2,
    "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
  },
};
const getMonthData = async (lat, lon) => {
  let response = await fetch(
    `https://meteostat.p.rapidapi.com/point/normals?lat=${lat}&lon=${lon}&alt=26&start=1991&end=2020&units=imperial`,
    options
  );
  let data = await response.json();
  return data.data;
};

//API call for current forecast 
const getData = async (city) => {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );
  let data = response.data;

  if (cityMonthly(city)) {
    let monthdata = cityMonthly(city);
    console.log("month data pulled from local storage", monthdata);
    return [data, monthdata];
  } else {
    if (apiKey2 == "") {
      console.log("api Keyneeded")
    } else {
    let long = data.coord.lon;
    let latt = data.coord.lat;
    let monthdata = await getMonthData(latt, long);
    return [data, monthdata];
  }
};
}

//Renders chart JS chart with annual weather data
function createChart(temps, rain, city) {
  document.querySelector(
    "#chart-title"
  ).innerHTML = `Average Weather in ${city}`;

  Chart.defaults.font.size = 12;
  Chart.defaults.borderColor = "#eee";

  let data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Temperature in F",
        data: temps,
        backgroundColor: "#ff83648c",
        borderColor: "#ff83648c",
        borderWidth: 2,
        type: "line",
        tension: 0.2,
        yAxisID: "rainAxis",
      },
      {
        label: "percipitation",
        data: rain,
        backgroundColor: "#5f6caf54",
        type: "bar",
        borderRadius: 2,
        yAxisID: "tempAxis",
      },
    ],
  };

  let options = {
    plugins: {
      legend: {
        display: false,
        position: "top",
        align: "end",
      },
    },
    scales: {
      rainAxis: {
        beginAtZero: true,
        type: "linear",
        position: "left",
        max: 120,
        drawTicks: false,
        title: {
          display: true,
          text: "Temperature in °F",
          color: "#ff8364",
        },
      },
      tempAxis: {
        beginAtZero: true,
        borderWidth: 2,
        type: "linear",
        position: "right",
        drawTicks: false,
        grid: {
          display: false,
        },
        max: 12,
        title: {
          display: true,
          text: "Rainfall in Inches",
          color: "#5f6caf",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const config = {
    data: data,
    options: options,
  };
  let tempChart = new Chart(document.getElementById("mychart"), config);
  console.log('chart updated with data for '+city)
  return tempChart;
}

const load_data = async (city, month) => {
  const data = await getData(city);
  let icon = data[0].weather[0].icon;
  document.querySelector(
    "#today-icon"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="" class="img-fluid"></img>`;
  document.querySelector("#today-city").innerHTML = `Today in ${data[0].name}`;
  document.querySelector("#today-temp").innerHTML = `${Math.round(
    data[0].main.temp
  )}°F`;
  document.querySelector("#today-desc").innerHTML =
    data[0].weather[0].description;
  document.querySelector(
    "#monthly-heading"
  ).innerHTML = `${data[0].name} in ${months[month]}`;
  document.querySelector("#tavg").innerHTML = Math.round(data[1][month].tavg);
  document.querySelector("#tmin").innerHTML = Math.round(data[1][month].tmin);
  document.querySelector("#tmax").innerHTML = Math.round(data[1][month].tmax);
  document.querySelector("#prcp").innerHTML = Math.round(data[1][month].prcp);

  //creating 2 arrays to put into chart
  let tavgs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((mon) =>
    Math.round(data[1][mon].tavg)
  );
  console.log("monthly temps in " + data[0].name + tavgs);

  let prcps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((mon) =>
    Math.round(data[1][mon].prcp)
  );
  console.log("monthly rain in " + data[0].name + prcps);
  document.querySelector(
    "#update-chart"
  ).innerHTML = `<canvas id="mychart"></canvas>`;
  createChart(tavgs, prcps, data[0].name);
};
let portland = "portland";
load_data(portland, 8);

const form = document.querySelector("#searchForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let city = document.querySelector("#citySearch").value;
  let month = document.querySelector("#monthChoice").value;
  load_data(city, month);
});
