let titre = document.querySelectorAll(".important");
for (elem of titre) {
  elem.setAttribute("title", "This is an important item");
}

console.log(titre);
// titre.setAttribute("title", "This is an important item");

let images = document.getElementsByTagName("img");

for (i = 0; i < images.length; i++) {
  let image = images[i];
  if (!image.classList.contains("important")) {
    image.style.display = "none";
  }
}

window.addEventListener("load", () => {
  let paragraphs = document.querySelectorAll("p");

  for (let i = 0; i < paragraphs.length; i++) {
    let paragraph = paragraphs[i];
    if (paragraph.className) {
      console.log(paragraph.classList, paragraph.innerText);
    } else {
      let red = Math.floor(Math.random() * 256);
       let green = Math.floor(Math.random() * 256);
       let blue = Math.floor(Math.random() * 256);
       //console.log(`Red : ${red}, Green : ${green}, Blue : ${blue}`);
       paragraph.style.color = `rgb(${red} ${green} ${blue})`;
    //const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //paragraph.style.color=randomColor;
      // paragraph.style.color = "rgb(245,134,132)";
      //   paragraph.style.color = "red";
      console.log(paragraph.innerText);
    }
  }
  //   console.log("Page is load");
});
