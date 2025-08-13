const button =document.getElementById('button')

button.addEventListener("click",Changebackground)

function Changebackground(){
  const video = document.getElementById('bg-video')
  const source = video.children[0]
  console.log(source.src)
  source.setAttribute('src', '/videos/Cat Video.mp4')  
  video.load()
}