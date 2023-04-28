//Elements
let body = document.querySelector("body");
let list = document.querySelector("ul");
let childrenLi = list.childNodes;
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

//Create a new Div , firstchild of the body
let newDiv = document.createElement("div");
body.insertBefore(newDiv, body.firstChild);
let select = document.createElement("select");
newDiv.appendChild(select);
let option = document.createElement("option");
option.textContent="Important Franchises";
select.add(option);
let optionDeux = document.createElement("option");
optionDeux.textContent="Normal Franchises";
select.add(optionDeux);
