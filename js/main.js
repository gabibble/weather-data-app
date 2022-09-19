let apiKey = "4b4875a4aa1ad99ee265ed1dc59a8d80";
//meteostat api key needed to look up cities not saved in cities object
let apiKey2 = "";

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
//saved city objects to reduce api calls
let cities = {
  portland: [
    {
      month: 1,
      tavg: 41.4,
      tmin: 36,
      tmax: 46.8,
      prcp: 5.039,
      wspd: 9.1,
      pres: 1019.2,
      tsun: null,
    },
    {
      month: 2,
      tavg: 43.7,
      tmin: 36.7,
      tmax: 50.7,
      prcp: 3.693,
      wspd: 8.4,
      pres: 1017.9,
      tsun: null,
    },
    {
      month: 3,
      tavg: 47.8,
      tmin: 39.6,
      tmax: 55.9,
      prcp: 3.98,
      wspd: 7.5,
      pres: 1017.6,
      tsun: null,
    },
    {
      month: 4,
      tavg: 52.4,
      tmin: 43.5,
      tmax: 61.3,
      prcp: 2.945,
      wspd: 7,
      pres: 1018.1,
      tsun: null,
    },
    {
      month: 5,
      tavg: 59,
      tmin: 49.5,
      tmax: 68.5,
      prcp: 2.551,
      wspd: 6.5,
      pres: 1017.4,
      tsun: null,
    },
    {
      month: 6,
      tavg: 63.8,
      tmin: 54,
      tmax: 73.6,
      prcp: 1.63,
      wspd: 6.7,
      pres: 1017.3,
      tsun: null,
    },
    {
      month: 7,
      tavg: 69.8,
      tmin: 58.5,
      tmax: 81.1,
      prcp: 0.508,
      wspd: 7,
      pres: 1017.1,
      tsun: null,
    },
    {
      month: 8,
      tavg: 70.2,
      tmin: 58.8,
      tmax: 81.7,
      prcp: 0.551,
      wspd: 6.5,
      pres: 1016.3,
      tsun: null,
    },
    {
      month: 9,
      tavg: 65,
      tmin: 54.1,
      tmax: 75.9,
      prcp: 1.524,
      wspd: 6,
      pres: 1016.4,
      tsun: null,
    },
    {
      month: 10,
      tavg: 55.2,
      tmin: 46.8,
      tmax: 63.7,
      prcp: 3.425,
      wspd: 6.2,
      pres: 1018.4,
      tsun: null,
    },
    {
      month: 11,
      tavg: 46.7,
      tmin: 40.6,
      tmax: 52.7,
      prcp: 5.417,
      wspd: 7.8,
      pres: 1018.9,
      tsun: null,
    },
    {
      month: 12,
      tavg: 41,
      tmin: 36.1,
      tmax: 46,
      prcp: 5.72,
      wspd: 9.1,
      pres: 1018.9,
      tsun: null,
    },
  ],
  chicago: [
    {
      month: 1,
      tavg: 27.6,
      tmin: 21,
      tmax: 34.3,
      prcp: 2.299,
      wspd: 10.9,
      pres: 1019,
      tsun: null,
    },
    {
      month: 2,
      tavg: 31.4,
      tmin: 24.4,
      tmax: 38.5,
      prcp: 2.114,
      wspd: 10.8,
      pres: 1018.6,
      tsun: null,
    },
    {
      month: 3,
      tavg: 41.4,
      tmin: 33.4,
      tmax: 49.5,
      prcp: 2.657,
      wspd: 10.9,
      pres: 1017.6,
      tsun: null,
    },
    {
      month: 4,
      tavg: 52.4,
      tmin: 43.3,
      tmax: 61.5,
      prcp: 4.15,
      wspd: 11.2,
      pres: 1014.6,
      tsun: null,
    },
    {
      month: 5,
      tavg: 63.5,
      tmin: 54,
      tmax: 73,
      prcp: 4.756,
      wspd: 9.8,
      pres: 1014.6,
      tsun: null,
    },
    {
      month: 6,
      tavg: 73.5,
      tmin: 64.2,
      tmax: 82.8,
      prcp: 4.528,
      wspd: 8.6,
      pres: 1014,
      tsun: null,
    },
    {
      month: 7,
      tavg: 78.2,
      tmin: 69.6,
      tmax: 86.9,
      prcp: 4.02,
      wspd: 8.1,
      pres: 1014.9,
      tsun: null,
    },
    {
      month: 8,
      tavg: 76.6,
      tmin: 68.4,
      tmax: 84.7,
      prcp: 4.094,
      wspd: 7.7,
      pres: 1016.1,
      tsun: null,
    },
    {
      month: 9,
      tavg: 69.4,
      tmin: 60.6,
      tmax: 78.1,
      prcp: 3.331,
      wspd: 8.3,
      pres: 1017.2,
      tsun: null,
    },
    {
      month: 10,
      tavg: 56.8,
      tmin: 48.4,
      tmax: 65.3,
      prcp: 3.858,
      wspd: 9.6,
      pres: 1016.9,
      tsun: null,
    },
    {
      month: 11,
      tavg: 43.9,
      tmin: 36.7,
      tmax: 51.1,
      prcp: 2.728,
      wspd: 10.4,
      pres: 1018.1,
      tsun: null,
    },
    {
      month: 12,
      tavg: 33.1,
      tmin: 26.8,
      tmax: 39.4,
      prcp: 2.331,
      wspd: 10.1,
      pres: 1018.7,
      tsun: null,
    },
  ],
  "new orleans": [
    {
      month: 1,
      tavg: 53.7,
      tmin: 45,
      tmax: 62.4,
      prcp: 5.181,
      wspd: 9.1,
      pres: 1021.3,
      tsun: null,
    },
    {
      month: 2,
      tavg: 57.4,
      tmin: 48.4,
      tmax: 66.4,
      prcp: 4.11,
      wspd: 9.3,
      pres: 1019.8,
      tsun: null,
    },
    {
      month: 3,
      tavg: 63.2,
      tmin: 54.1,
      tmax: 72.3,
      prcp: 4.374,
      wspd: 9.1,
      pres: 1018.1,
      tsun: null,
    },
    {
      month: 4,
      tavg: 69.4,
      tmin: 60.4,
      tmax: 78.3,
      prcp: 5.181,
      wspd: 9.4,
      pres: 1016.4,
      tsun: null,
    },
    {
      month: 5,
      tavg: 76.4,
      tmin: 67.8,
      tmax: 85.1,
      prcp: 5.61,
      wspd: 8,
      pres: 1015.6,
      tsun: null,
    },
    {
      month: 6,
      tavg: 81.6,
      tmin: 73.6,
      tmax: 89.6,
      prcp: 7.618,
      wspd: 6.7,
      pres: 1015.2,
      tsun: null,
    },
    {
      month: 7,
      tavg: 83.2,
      tmin: 75.4,
      tmax: 91,
      prcp: 6.65,
      wspd: 5.9,
      pres: 1016.6,
      tsun: null,
    },
    {
      month: 8,
      tavg: 83.2,
      tmin: 75.4,
      tmax: 91,
      prcp: 7.079,
      wspd: 6,
      pres: 1015.7,
      tsun: null,
    },
    {
      month: 9,
      tavg: 80.2,
      tmin: 72.5,
      tmax: 87.8,
      prcp: 5.031,
      wspd: 7.1,
      pres: 1015.1,
      tsun: null,
    },
    {
      month: 10,
      tavg: 71.8,
      tmin: 63.1,
      tmax: 80.4,
      prcp: 3.693,
      wspd: 7.9,
      pres: 1017.2,
      tsun: null,
    },
    {
      month: 11,
      tavg: 61.8,
      tmin: 52.5,
      tmax: 71.1,
      prcp: 3.87,
      wspd: 8.1,
      pres: 1020.2,
      tsun: null,
    },
    {
      month: 12,
      tavg: 56,
      tmin: 47.3,
      tmax: 64.8,
      prcp: 4.823,
      wspd: 8.6,
      pres: 1020.8,
      tsun: null,
    },
  ],
  miami: [
    {
      month: 1,
      tavg: 68.6,
      tmin: 60.8,
      tmax: 76.3,
      prcp: 1.835,
      wspd: 8.2,
      pres: 1019.8,
      tsun: null,
    },
    {
      month: 2,
      tavg: 70.6,
      tmin: 63,
      tmax: 78.3,
      prcp: 2.146,
      wspd: 8.3,
      pres: 1018.9,
      tsun: null,
    },
    {
      month: 3,
      tavg: 73,
      tmin: 65.5,
      tmax: 80.6,
      prcp: 2.484,
      wspd: 9.3,
      pres: 1017.9,
      tsun: null,
    },
    {
      month: 4,
      tavg: 76.6,
      tmin: 69.6,
      tmax: 83.7,
      prcp: 3.343,
      wspd: 9.6,
      pres: 1016.8,
      tsun: null,
    },
    {
      month: 5,
      tavg: 80.2,
      tmin: 73.4,
      tmax: 86.9,
      prcp: 6.181,
      wspd: 8.8,
      pres: 1016,
      tsun: null,
    },
    {
      month: 6,
      tavg: 82.6,
      tmin: 76.1,
      tmax: 89.2,
      prcp: 10.504,
      wspd: 7.2,
      pres: 1016.1,
      tsun: null,
    },
    {
      month: 7,
      tavg: 84.1,
      tmin: 77.4,
      tmax: 90.7,
      prcp: 7.307,
      wspd: 7,
      pres: 1017.5,
      tsun: null,
    },
    {
      month: 8,
      tavg: 84.1,
      tmin: 77.5,
      tmax: 90.7,
      prcp: 9.52,
      wspd: 6.8,
      pres: 1016.1,
      tsun: null,
    },
    {
      month: 9,
      tavg: 82.9,
      tmin: 76.8,
      tmax: 89.1,
      prcp: 10.209,
      wspd: 7,
      pres: 1014.4,
      tsun: null,
    },
    {
      month: 10,
      tavg: 80,
      tmin: 73.9,
      tmax: 86,
      prcp: 7.583,
      wspd: 8.2,
      pres: 1014.9,
      tsun: null,
    },
    {
      month: 11,
      tavg: 74.8,
      tmin: 68.2,
      tmax: 81.3,
      prcp: 3.539,
      wspd: 8.3,
      pres: 1017.3,
      tsun: null,
    },
    {
      month: 12,
      tavg: 71.2,
      tmin: 64,
      tmax: 78.3,
      prcp: 2.441,
      wspd: 7.9,
      pres: 1019,
      tsun: null,
    },
  ],
  tokyo: [
    {
      month: 1,
      tavg: 43.2,
      tmin: 36.5,
      tmax: 49.8,
      prcp: 2.354,
      wspd: null,
      pres: 1015.9,
      tsun: 11534,
    },
    {
      month: 2,
      tavg: 44.2,
      tmin: 37.2,
      tmax: 51.3,
      prcp: 2.228,
      wspd: null,
      pres: 1016,
      tsun: 10281,
    },
    {
      month: 3,
      tavg: 49.7,
      tmin: 42.4,
      tmax: 57,
      prcp: 4.591,
      wspd: null,
      pres: 1015.1,
      tsun: 10292,
    },
    {
      month: 4,
      tavg: 58.6,
      tmin: 51.1,
      tmax: 66,
      prcp: 5.28,
      wspd: null,
      pres: 1013.9,
      tsun: 10835,
    },
    {
      month: 5,
      tavg: 67.1,
      tmin: 60.1,
      tmax: 74.1,
      prcp: 5.508,
      wspd: null,
      pres: 1011.9,
      tsun: 10581,
    },
    {
      month: 6,
      tavg: 72.8,
      tmin: 66.9,
      tmax: 78.6,
      prcp: 6.614,
      wspd: null,
      pres: 1009,
      tsun: 7368,
    },
    {
      month: 7,
      tavg: 79.8,
      tmin: 73.9,
      tmax: 85.8,
      prcp: 6.161,
      wspd: null,
      pres: 1008.6,
      tsun: 8882,
    },
    {
      month: 8,
      tavg: 82.4,
      tmin: 76.3,
      tmax: 88.5,
      prcp: 6.091,
      wspd: null,
      pres: 1010.2,
      tsun: 10666,
    },
    {
      month: 9,
      tavg: 75.8,
      tmin: 70,
      tmax: 81.5,
      prcp: 8.681,
      wspd: null,
      pres: 1013,
      tsun: 7867,
    },
    {
      month: 10,
      tavg: 66,
      tmin: 60.3,
      tmax: 71.8,
      prcp: 9.331,
      wspd: null,
      pres: 1016.6,
      tsun: 7777,
    },
    {
      month: 11,
      tavg: 56.6,
      tmin: 50.4,
      tmax: 62.8,
      prcp: 3.799,
      wspd: null,
      pres: 1018.1,
      tsun: 9012,
    },
    {
      month: 12,
      tavg: 47.4,
      tmin: 40.8,
      tmax: 54.1,
      prcp: 2.287,
      wspd: null,
      pres: 1016.9,
      tsun: 10364,
    },
  ],
  paris: [
    {
      month: 1,
      tavg: 42,
      tmin: 37.4,
      tmax: 46.6,
      prcp: 1.752,
      wspd: null,
      pres: 1019.1,
      tsun: null,
    },
    {
      month: 2,
      tavg: 43.6,
      tmin: 38.1,
      tmax: 49.1,
      prcp: 1.512,
      wspd: null,
      pres: 1018.4,
      tsun: null,
    },
    {
      month: 3,
      tavg: 49.6,
      tmin: 43.2,
      tmax: 55.9,
      prcp: 1.606,
      wspd: null,
      pres: 1017.4,
      tsun: null,
    },
    {
      month: 4,
      tavg: 54.8,
      tmin: 46.8,
      tmax: 62.8,
      prcp: 1.768,
      wspd: null,
      pres: 1014.4,
      tsun: null,
    },
    {
      month: 5,
      tavg: 60.7,
      tmin: 52.5,
      tmax: 68.9,
      prcp: 2.941,
      wspd: null,
      pres: 1015.9,
      tsun: null,
    },
    {
      month: 6,
      tavg: 66.2,
      tmin: 57.7,
      tmax: 74.8,
      prcp: 2.02,
      wspd: null,
      pres: 1016.9,
      tsun: null,
    },
    {
      month: 7,
      tavg: 70.1,
      tmin: 61.2,
      tmax: 79,
      prcp: 2.272,
      wspd: null,
      pres: 1016.3,
      tsun: null,
    },
    {
      month: 8,
      tavg: 70.4,
      tmin: 61.5,
      tmax: 79.3,
      prcp: 2.13,
      wspd: null,
      pres: 1016.2,
      tsun: null,
    },
    {
      month: 9,
      tavg: 63.4,
      tmin: 55.6,
      tmax: 71.2,
      prcp: 1.988,
      wspd: null,
      pres: 1016.9,
      tsun: null,
    },
    {
      month: 10,
      tavg: 56.1,
      tmin: 49.8,
      tmax: 62.4,
      prcp: 2.169,
      wspd: null,
      pres: 1016.2,
      tsun: null,
    },
    {
      month: 11,
      tavg: 48,
      tmin: 43.3,
      tmax: 52.7,
      prcp: 2.142,
      wspd: null,
      pres: 1015.9,
      tsun: null,
    },
    {
      month: 12,
      tavg: 43.7,
      tmin: 39.6,
      tmax: 47.7,
      prcp: 2.425,
      wspd: null,
      pres: 1018.6,
      tsun: null,
    },
  ],
};
//returns city from cities object if exists
function cityMonthly(name) {
  return cities[name];
}

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

//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}

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

function createChart(temps, rain, city) {
  document.querySelector(
    "#chart-title"
  ).innerHTML = `Average Weather in ${city}`;

  Chart.defaults.font.size = 12;
  //   Chart.defaults.font.family = "Lato";
  // Chart.defaults.font.color = "#999";
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
        // borderColor: "#5f6cafaa",
        // borderWidth: 2,
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
//not sure why but need to reset the innerhtml for the chart to refresh
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
