// Move dans la liste

let ol = document.querySelector("ol");
let firstOl = ol.children[0];
let lastOl = ol.lastChild[4];

ol.insertBefore(firstOl, lastOl);

// Move des H2

let section = document.querySelectorAll("section");
let titre = document.querySelectorAll("h2");

section[1].prepend(titre[2]);
section[2].prepend(titre[1]);


// Delete La section

section[2].remove();