const backgroundColors = [];
const borderColors = [];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

var family = [];

async function getData() {
  const response = await fetch(url);
  const characters = await response.json();
  characters.forEach((item) => {
    console.log(item)
    familyName = updateFamily(item.family);
    family.push(familyName);
  });
  sortHouses(family);
}

getData();

const updateFamily = (family) => {
  family = family.replace(/House/, "").trim();
  const cleanHouseNames = {
    Lanister: "Lannister",
    None: "Unknown",
    Unkown: "Unknown",
    Targaryan: "Targaryen",
    Targaryn: "Targaryen",
    "": "Unknown",
  };
  return cleanHouseNames[family] || family;
};

const sortHouses = (family) => {
  var houses = Array.from(new Set(family)).map((a) => ({
    house: a,
    count: family.filter((f) => f === a).length,
  }));

  const houseArray = houses.map((item) => item.house);
  const countArray = houses.map((item) => item.count);

  addColors(houseArray);

  renderChart(houseArray, countArray);
};

function getRandomRGBA() {
  const r = Math.floor(Math.random() * 256); // Red component (0-255)
  const g = Math.floor(Math.random() * 256); // Green component (0-255)
  const b = Math.floor(Math.random() * 256); // Blue component (0-255)

  backgroundColors.push(`rgb(${r},${g},${b}, ${0.8})`);
  borderColors.push(`rgb(${r},${g},${b}, ${1})`);
}

function addColors(houseArray) {
  houseArray.forEach((house) => {
    getRandomRGBA();
  });
  
}

const renderChart = (houseArray, countArray) => {
  const donutChart = document.querySelector(".donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: houseArray,
      datasets: [
        {
          label: "My First Dataset",
          data: countArray,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false, 
      },
    },
  });
};

renderChart();
