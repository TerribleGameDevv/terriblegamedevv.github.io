$(document).ready(function() {
    // Attach click event to convert button
    $("#convert-button").click(convertVideo);

    function convertVideo() {
        console.log("Convert button clicked");
        $.ajax({
            type: "POST",
            url: "https://example.com/convert",
            data: {
                url: $("#youtube-link").val()
            },
            success: function(response) {
                console.log("Server responded:", response);
                $("#player").attr("src", response);
            },
            error: function(response) {
                console.log("Error:", response);
            }
        });
    }
});
