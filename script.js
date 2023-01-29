const API_KEY = "AIzaSyBbhju011EtzN-elXRz_wtDfaaBI1T3DNo";
const convertBtn = $("#convert-btn");
const player = $("#player");
const linkInput = $("#youtube-link");

convertBtn.click(function(event) {
  event.preventDefault();
  const link = linkInput.val();
  if(!link){
    alert("Please enter a YouTube link");
    return;
  }
  $.getJSON("https://yourapi.com/convert?link=" + link, function(data) {
    const video = $("<video>", {
      src: data.mp4Url,
      controls: true
    });
    player.append(video);
  });
});
