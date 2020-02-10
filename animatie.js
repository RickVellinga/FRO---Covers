let alleCovers = document.querySelectorAll(".image");

const omhoog = (e) => {
e.target.classList.remove('omlaag');
e.target.classList.add('omhoog');
}

const omlaag = (e) => {
e.target.classList.remove('omhoog');
e.target.classList.add('omlaag');
}

for (var i = 0; i < alleCovers.length; i++) {
let album = alleCovers[i];
album.addEventListener("mouseenter" , omhoog);
album.addEventListener("mouseleave" , omlaag);
}
