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

button.addEventListener("click", Changebackground);
button2.addEventListener("click", reversebackground);

function Changebackground() {
  const video = document.getElementById('bg-video');
  const source = video.children[0];
  console.log(source.src);
  source.setAttribute('src', '/videos/scene2.mp4');  
  video.load();

  button.style.display = "none";
  button2.style.display = "block";
  indexButton.style.display = "block";
  tiktokButton.style.display = "block";  
  emailButton.style.display = "block";
  aboutButton.style.display = "block";
}

function reversebackground() {
  const video = document.getElementById('bg-video');
  const source = video.children[0];
  console.log(source.src);
  source.setAttribute('src', '/videos/inverse.mp4');
  video.load();

  button2.style.display = "none";
  button.style.display = "block";
  indexButton.style.display = "none";
  tiktokButton.style.display = "none"; 
}






