//Elements
let body = document.querySelector("body");
let list = document.querySelector("ul");
let childrenLi = list.childNodes;
console.log(list.children);
//Loop for EqualNode
for (let i = 0; i < childrenLi.length; i++) {
  for (let j = i + 1; j < childrenLi.length; j++) {
    if (childrenLi[i].isEqualNode(childrenLi[j])) {
      childrenLi[j].parentNode.removeChild(childrenLi[j]);
    }
  }
}
//Loop for Nodes
for (i = 0; i < childrenLi.length; i++) {
  let child = childrenLi[i];
  child.addEventListener("click", () => {
    let childText = child.textContent;
    // Create an alert pop up for each li with his name
    if (childText === "Fast and Furious") {
      alert(
        " The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    } else {
      alert(childText);
    }
  });
  // select all html elements and the element with fast and furious in text
  if (child.nodeType === 1 && child.textContent === "Fast and Furious") {
    // Select and move Fast and Furious in first position
    list.insertBefore(child, list.firstChild);
    child.classList.add("important");
  }
}
//------------------------------------------------------------------
//Create a new Div , firstchild of the body with select option
let newDiv = document.createElement("div");
body.insertBefore(newDiv, body.firstChild);
//create select
let select = document.createElement("select");
newDiv.appendChild(select);
//create base option
let optionZero = document.createElement("option");
optionZero.textContent = "Choose your Option";
optionZero.value = "Choose your Option";
select.appendChild(optionZero);
// create option1
let optionUn = document.createElement("option");
optionUn.textContent = "Important Franchises";
optionUn.value = "Important Franchises";
select.appendChild(optionUn);
// create option2
let optionDeux = document.createElement("option");
optionDeux.textContent = "Normal Franchises";
optionDeux.value = "Normal Franchises";
select.appendChild(optionDeux);
// select event change
let movies = document.querySelectorAll("li");
select.addEventListener("change", () => {
  if (select.value === "Important Franchises") {
    movies.forEach((elem) => {
      if (elem.classList != "important") {
        elem.style.visibility = "hidden";
      }
    });
  } else {
    movies.forEach((elem) => {
      elem.style.visibility = "visible";
    });
  }
});

//------------------------------------------------------------------------
//Bonus
//Add Instruction for keyup
let sectionInstruction = document.createElement("section");
let instructionContent = `
<p class="instructionContent">Tap "r" for randomize the list</p>
<p class="instructionContent">Tap "d" for Clone Fast and Furious</p>
`;
sectionInstruction.innerHTML += instructionContent;
newDiv.appendChild(sectionInstruction);
// add keyup
body.addEventListener("keyup", (event) => {
  if (event.key === "r") {
    for (let i = childrenLi.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [childrenLi[i], childrenLi[j]] = [childrenLi[i], childrenLi[i]];
      console.log(childrenLi);
    }
    //   } else if (event.key === "d") {
    //     // for (let i = 0; i < childrenLi.length; i++){

    //     // }
  }
});

// let importantLi = document.getElementsByClassName("important");
// let cloneImportantLi = importantLi.cloneNode();
// // let list = document.querySelector("ul");
// list.appendChild(cloneImportantLi);
// console.log(importantLi);
