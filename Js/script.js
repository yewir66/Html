const button = document.getElementById('Next');
const button2 = document.getElementById('button2');
const indexButton = document.getElementById('indexButton');
const tiktokButton = document.getElementById('tiktokButton');
const emailButton = document.getElementById('EmailButton');
const aboutButton = document.getElementById('AboutButton');


button2.style.display = "none";
indexButton.style.display = "none"; 
tiktokButton.style.display = "none";
emailButton.style.display = "none";
aboutButton.style.display = "none";

let previousState = "Home";

button.addEventListener("click", Changebackground);
button2.addEventListener("click", reversebackground);
aboutButton.addEventListener("click", aboutPage);

function Changebackground() {
  const video = document.getElementById('bg-video');
  const source = video.children[0];
  source.setAttribute('src', '/videos/scene2.mp4');  
  video.load();

  button.style.display = "none";
  button2.style.display = "block";
  indexButton.style.display = "block";
  tiktokButton.style.display = "block";  
  emailButton.style.display = "block";
  aboutButton.style.display = "block";
}

function aboutPage() {
  const video = document.getElementById('bg-video');
  const source = video.children[0];
  source.setAttribute('src', '/videos/aboutme.mp4');
  video.load();

  previousState = (button.style.display === "none") ? "Scene2" : "Home";

  button2.style.display = "block";
  button.style.display = "none";
  indexButton.style.display = "none";
  tiktokButton.style.display = "none"; 
  emailButton.style.display = "none";
  aboutButton.style.display = "none";
}

function reversebackground() {
  const video = document.getElementById('bg-video');
  const source = video.children[0];

  if (previousState === "Scene2") {
    source.setAttribute('src', '/videos/aboutmereverse.mp4');
    video.load();

    // Restore Scene2 state
    button.style.display = "none";
    button2.style.display = "block";
    indexButton.style.display = "block";
    tiktokButton.style.display = "block";
    emailButton.style.display = "block";
    aboutButton.style.display = "block";
  } else {
    source.setAttribute('src', '/videos/inverse.mp4');
    video.load();

    // Restore Home state
    button.style.display = "block";
    button2.style.display = "none";
    indexButton.style.display = "none";
    tiktokButton.style.display = "none";
    emailButton.style.display = "none";
    aboutButton.style.display = "none";
  }
}





