const API_KEY = "AIzaSyBbhju011EtzN-elXRz_wtDfaaBI1T3DNo";
const convertBtn = document.getElementById("convert-btn");
const player = document.getElementById("player");
const linkInput = document.getElementById("youtube-link");

convertBtn.addEventListener("click", convert);

function convert(event) {
  event.preventDefault();
  const link = linkInput.value;
  if(!link){
    alert("Please enter a YouTube link");
    return;
  }
  fetch("https://yourapi.com/convert?link=" + link)
    .then(response => response.json())
    .then(data => {
      const video = document.createElement("video");
      video.src = data.mp4Url;
      video.controls = true;
      player.appendChild(video);
    })
    .catch(error => console.error(error));
}
