console.log(document.title);
document.title = "Modify the DOM";
console.log(document.title);
document.body.style.backgroundColor = "hotpink";

console.log(document.body.children[1]);

//console.log(document.body.children[1]);

let child = document.body.children;

for (elem of child){

    console.log(elem);
}