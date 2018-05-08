const http = require('http')

const server = http.createServer( (request, response) => {
  console.log(`J'ai une requête !`)
  response.end('OK')
})

server.listen(3000, () => console.log(`J'écoute sur le port 3000`))