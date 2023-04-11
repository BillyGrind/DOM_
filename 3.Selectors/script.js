// document.body.onload = addElement();

// function addElement() {
//   let newArticle = document.createElement("article");
//   let newSection = document.createElement("section");
//   newArticle.appendChil(section);
//   let addText = document.createTextNode("Hello");
//   newArticle.appendChild(addText);

//   let currentArticle = document.getElementById("article1");
//   document.body.insertBefore(newArticle, currentArticle);
// }
let article = document.getElementsByClassName("article");
let newSection = document.createElement("section");
newSection.innerText = "Hello";
// article.appendChild(newSection);
let currentSection = document.getElementById("section1");
document.body.insertBefore(newSection,article)


let learners = [
  "Abel",
  "Alexandra",
  "Anthony",
  "Benjamin",
  "Bruno",
  "Delphine",
  "Emilien",
  "Ethan",
  "Ismaël",
  "Jodie",
  "Julien",
  "Louka",
  "Loïc",
  "Luciano",
  "Marine",
  "Nikko",
  "Noa",
  "Steve",
  "Sylvain",
  "Willy",
];

function randomLearner() {}
