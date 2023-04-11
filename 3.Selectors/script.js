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

function addBackground(section) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  section.style.backgroundColor = `rgb(${red} ${green} ${blue})
  `;
  if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
    section.style.color = "#000";
  } else {
    section.style.color = "#fff";
  }
}

// if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use #ffffff

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};


let article = document.getElementsByTagName("article")[0];
 console.log(article);
function addLearners() {
  let shuffledLearners = shuffleArray(learners);
  for (i = 0; i < learners.length; i++) {
    let learner = shuffledLearners[i];
    let newSection = document.createElement("section");
    let text = document.createTextNode(learner);
    newSection.appendChild(text);
    article.appendChild(newSection);
    addBackground(newSection);
  }
}

addLearners();

// Math.floor(Math.random() * learners.length);

//const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//paragraph.style.color=randomColor;

// document.createElement();
// document.createTextNode();
// .appendChild();
// .insertBefore();
