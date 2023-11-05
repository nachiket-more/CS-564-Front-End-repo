import "../../index.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Houses() {
  const [labels, setLabels] = React.useState();
  const [houses, setHouses] = React.useState();
  const [bgColor, setBgColor] = React.useState([]);
  const [borderColor, setBorderColor] = React.useState([]);
  var family = [];

  const data = {
    labels: houses,
    datasets: [
      {
        data: labels,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  const getData = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await response.json();
    console.log(characters);
    characters.forEach((item) => {
      var familyName = updateFamily(item.family);
      family.push(familyName);
    });
    sortHouses(family);
  };

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
    console.log(family);
    var houses = Array.from(new Set(family)).map((a) => ({
      house: a,
      count: family.filter((f) => f === a).length,
    }));

    const houseArray = houses.map((item) => item.house);
    const countArray = houses.map((item) => item.count);

    console.log(houseArray, countArray);

    setHouses(houseArray);
    setLabels(countArray);

    addColors(houseArray);
  };

  React.useEffect(() => {
    getData();
  }, []);
  

  const getRandomRGBA = () => {
    const r = Math.floor(Math.random() * 256); // Red component (0-255)
    const g = Math.floor(Math.random() * 256); // Green component (0-255)
    const b = Math.floor(Math.random() * 256); // Blue component (0-255)

    // bgColor.push(`rgb(${r},${g},${b}, ${0.8})`);
    addBgColor(`rgb(${r},${g},${b}, ${0.8})`);
    // borderColor.push(`rgb(${r},${g},${b}, ${1})`);
    addBorderColor(`rgb(${r},${g},${b}, ${1})`);
  };

  const addBgColor = (newColor) => {
    // Use the setColors function to push a new color into the state
    setBgColor(oldArray => [...oldArray,newColor] );
  };
  
  const addBorderColor = (newColor) => {
    // Use the setColors function to push a new color into the state
    setBorderColor(oldArray => [...oldArray,newColor] );
  };

  const addColors = (houseArray) => {
    houseArray.forEach(() => {
      getRandomRGBA();
    });
  };

  return (
    <div className="page-container Houses">
      <div className="container">
        <div className="title">
          <h2>Characters Houses - Donut chart</h2>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
