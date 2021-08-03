const http = require('http');
const server = http.createServer((request, response) => {
    // Fonction de Callback pour lire la requête et écrire la réponse
    response.end();
    console.log('Le server est démaré')
});
server.listen(8080);