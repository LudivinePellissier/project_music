export const createNewTrack = track => `
  <div class="track">
    <p class="track_style">${track.style}</p>
    <h3>${track.title}</h3>
    <h4>${track.artist}</h4>
    <hr>
    <a href="${track.url}" target="_blank">${track.url}</a>
    <p>Ajouté le ${track.createdAt}</p>
    <div>&#128077; ${track.like.length}</div>
  </div>
`