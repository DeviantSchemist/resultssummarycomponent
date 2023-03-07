const displayData = jsonData => {
  document.getElementById("displayChart")
    .innerHTML += `
      <div class="first-bar">
        <div>
          <img src=${jsonData[0].icon} alt="">
          <p>${jsonData[0].category}</p>
        </div>
        <p>${jsonData[0].score} / 100</p>
      </div>
      <div class="second-bar">
        <div>
          <img src=${jsonData[1].icon} alt="">
          <p>${jsonData[1].category}</p>
        </div>  
        <p>${jsonData[1].score} / 100</p>
      </div>
      <div class="third-bar">
        <div>
          <img src=${jsonData[2].icon} alt="">
          <p>${jsonData[2].category}</p>
        </div>
        <p>${jsonData[2].score} / 100</p>  
      </div>
      <div class="fourth-bar">
        <div>
          <img src=${jsonData[3].icon} alt="">
          <p>${jsonData[3].category}</p>
        </div>
        <p>${jsonData[3].score} / 100</p>  
      </div>
    `
}


const handleDisplay = () => {
  fetch("./data.json")
    .then(response => response.json())
    .then(json => displayData(json))
    .catch(err => console.error(err));
}


document.addEventListener("DOMContentLoaded", handleDisplay);