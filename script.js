const API_KEY = "AIzaSyBbhju011EtzN-elXRz_wtDfaaBI1T3DNo";

function convert() {
  const link = document.getElementById("link").value;
  const videoId = link.split("v=")[1];
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const mp4Url = data.items[0].contentDetails.videoId;
      const player = document.getElementById("player");
      player.innerHTML = `
        <video controls>
          <source src="${mp4Url}" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      `;
    });
}
