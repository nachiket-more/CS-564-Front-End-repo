// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

async function getData() {
  const response = await fetch(url);
  const characters = await response.json();
  console.log(characters);
  addData(characters);
}

function addData(data) {
  const containerDiv = document.getElementById("character-container");

  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col");

    const imgDiv = document.createElement("img");
    imgDiv.classList.add("img");
    imgDiv.src = item.imageUrl;
    imgDiv.alt = "";

    const fullNameDiv = document.createElement("div");
    fullNameDiv.textContent = item.fullName;
    fullNameDiv.classList.add("name");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = item.title;
    titleDiv.classList.add("title");

    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(fullNameDiv);
    itemDiv.appendChild(titleDiv);

    containerDiv.appendChild(itemDiv);
    
  });

  document.body.appendChild(containerDiv);
}

getData();
