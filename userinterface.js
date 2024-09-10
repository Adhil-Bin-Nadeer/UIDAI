document.getElementById('startButton').addEventListener('click', function() {
    const video = document.getElementById('video');
    video.style.display = 'block';

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
    }
});