const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// Create New Square

// let squareGreen = document.getElementsByClassName("actionsquare green")[0];
// let squareViolet = document.getElementsByClassName("actionsquare violet")[0];
// let squareOrange = document.getElementsByClassName("actionsquare orange")[0];

// function createDivGreen() {
//   let divWrapper = document.querySelector(".displayedsquare-wrapper");
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("displayedsquare", "green");
//   divWrapper.appendChild(newDiv);
//   return newDiv;
// }

// function createDivViolet() {
//   let divWrapper = document.querySelector(".displayedsquare-wrapper");
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("displayedsquare", "violet");
//   divWrapper.appendChild(newDiv);
//   return newDiv;
// }

// function createDivOrange() {
//   let divWrapper = document.querySelector(".displayedsquare-wrapper");
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("displayedsquare", "orange");
//   divWrapper.appendChild(newDiv);
//   return newDiv;
// }

// squareGreen.addEventListener("click", createDivGreen);
// squareViolet.addEventListener("click", createDivViolet);
// squareOrange.addEventListener("click", createDivOrange);

// Sélectionner les carrés d'action

const squares = document.querySelectorAll(".actionsquare");

// Ajouter un événement de clic à chaque carré
squares.forEach((square) => {
  square.addEventListener("click", () => {
    // Créer une nouvelle div avec la classe de couleur correspondante
    const color = square.classList[1];
    const divWrapper = document.querySelector(".displayedsquare-wrapper");
    const newDiv = document.createElement("div");
    newDiv.classList.add("displayedsquare", color);
    divWrapper.appendChild(newDiv);
    //Create new li in ul
    let list = document.querySelectorAll("ul")[0];
    let newLi = document.createElement("li");
    let time = getElapsedTime();
    newLi.textContent = "[" + time + "] Created a new " + color + " square";
    list.prepend(newLi);

    newDiv.addEventListener("click", () => {
      let color = newDiv.classList[1];
      return alert("The color is " + color);
    });
  });
});

document.addEventListener("keydown", () => {
  if (event.key === " ") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    let list = document.querySelectorAll("ul")[0];
    let newLi = document.createElement("li");
    newLi.textContent = "SpaceBar was used";
    list.prepend(newLi);
  } else if (event.key === "l") {
    let deleteList = document.querySelectorAll("li");
    let i = deleteList.length - 1;
    console.log(i);
    while (i >= 0) {
      deleteList[i].remove();
      i--;
    }
  } else if (event.key === "s") {
    let deleteSquares = document.querySelectorAll(".displayedsquare");
    // console.log(deleteSquares);
    let i = deleteSquares.length - 1;
    while (i >= 0) {
      deleteSquares[i].remove();
      i--;
    }
  }
});
