const apiKey = "zRNScBD8ppgIVvGP8BtQcRFmzj1ETH4ztKtwKyii"
 // Replace with your NASA API key or 'DEMO_KEY'
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

        document.getElementById('apod-title').textContent = data.title;
        document.getElementById('apod-image').src = data.url;
        document.getElementById('apod-image').alt = data.title;
        document.getElementById('apod-explanation').textContent = data.explanation;
        
        if (data.copyright) {
            document.querySelector('.copyright').textContent = `© ${data.copyright}`;
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('apod-container').innerHTML = `<p style="color: red;">Failed to load data. Please check your API key and try again.</p>`;
    });