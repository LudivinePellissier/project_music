fetch('http://localhost:3000/tracks')
  .then(response => response.json())
  .then(tracks => {
    const tracksElement = document.getElementById('tracks')
    tracksElement.innerHTML = JSON.stringify(tracks)
    console.log(tracks)
  })