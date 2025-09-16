const apiKey = "zRNScBD8ppgIVvGP8BtQcRFmzj1ETH4ztKtwKyii";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log(data); // Optional: See the full data in your console

    const apodImage = document.getElementById('apod-image');
    const apodVideo = document.getElementById('apod-video');
    
    // Check the media type to decide what to display
    if (data.media_type === 'image') {
        apodImage.src = data.url;
        apodImage.alt = data.title;
        apodImage.style.display = 'block'; // Show the image
        apodVideo.style.display = 'none'; // Hide the video
    } else if (data.media_type === 'video') {
        apodVideo.src = data.url;
        apodVideo.style.display = 'block'; // Show the video
        apodImage.style.display = 'none'; // Hide the image
    }

    document.getElementById('apod-title').textContent = data.title;
    document.getElementById('apod-explanation').textContent = data.explanation;
    
    if (data.copyright) {
        document.querySelector('.copyright').textContent = `© ${data.copyright}`;
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('apod-container').innerHTML = `<p style="color: red;">Failed to load data. Please check your API key and try again.</p>`;
});
