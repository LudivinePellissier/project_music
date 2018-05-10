import { createNewTrack } from './components/track.js'

fetch('http://localhost:3000/tracks')
  .then(response => response.json())
  .then(tracks => {
    const tracksElement = document.getElementById('tracks')

    const trackElement = tracks.map(track => createNewTrack(track)).join('')

    tracksElement.innerHTML = trackElement
  })