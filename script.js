const displayData = jsonData => {
  document.getElementById("displayChart")
    .innerHTML += `
      <article class="first-bar">
        <div>
          <img src=${jsonData[0].icon} alt=${jsonData[0].category}>
          <p>${jsonData[0].category}</p>
        </div>
        <p><span class="bold">${jsonData[0].score}</span> <span class="light-navy">/ 100</span></p>
      </article>
      <article class="second-bar">
        <div>
          <img src=${jsonData[1].icon} alt=${jsonData[1].category}>
          <p>${jsonData[1].category}</p>
        </div>  
        <p><span class="bold">${jsonData[1].score}</span> <span class="light-navy">/ 100</span></p>
      </article>
      <article class="third-bar">
        <div>
          <img src=${jsonData[2].icon} alt=${jsonData[2].category}>
          <p>${jsonData[2].category}</p>
        </div>
        <p><span class="bold">${jsonData[2].score}</span> <span class="light-navy">/ 100</span></p>  
      </article>
      <article class="fourth-bar">
        <div>
          <img src=${jsonData[3].icon} alt=${jsonData[3].category}>
          <p>${jsonData[3].category}</p>
        </div>
        <p><span class="bold">${jsonData[3].score}</span> <span class="light-navy">/ 100</span></p>  
      </article>
    `
}


const handleDisplay = () => {
  fetch("./data.json")
    .then(response => response.json())
    .then(json => displayData(json))
    .catch(err => console.error(err));
}


document.addEventListener("DOMContentLoaded", handleDisplay);