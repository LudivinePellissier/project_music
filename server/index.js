const express = require('express')

const track1 = require('../mocks/tracks/1.json')
const track2 = require('../mocks/tracks/2.json')

const tracks = [track1, track2]

const app = express()

app.get('/', (request, response) => {
  response.send('OK')
})

app.get('/tracks', (request, response) => {
  response.json(tracks)
})

app.listen(3000, () => console.log(`J'écoute sur le port 3000`))