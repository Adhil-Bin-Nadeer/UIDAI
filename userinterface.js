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

// Create stop button
const stopButton = document.createElement('button');
stopButton.id = 'stopButton';
stopButton.textContent = 'Stop Recognition';
stopButton.style.display = 'none';
document.querySelector('.container').appendChild(stopButton);

// Create refresh button
const refreshButton = document.createElement('button');
refreshButton.id = 'refreshButton';
refreshButton.textContent = 'Refresh Video';
refreshButton.style.display = 'none';
document.querySelector('.container').appendChild(refreshButton);

// Stop button functionality
stopButton.addEventListener('click', function() {
    const video = document.getElementById('video');
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(function(track) {
        track.stop();
    });

    video.srcObject = null;
    video.style.display = 'none';
    stopButton.style.display = 'none';
    refreshButton.style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
});

// Refresh button functionality
refreshButton.addEventListener('click', function() {
    const video = document.getElementById('video');
    if (video.srcObject === null) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                video.srcObject = stream;
                video.play();
                refreshButton.style.display = 'none';
                stopButton.style.display = 'block';
            }).catch(function(error) {
                console.error("Error accessing the camera:", error);
            });
        }
    }
});

document.getElementById('startButton').addEventListener('click', function() {
    stopButton.style.display = 'block';
    refreshButton.style.display = 'block';
    this.style.display = 'none';
});

