// const server = http.createServer();
// server.on('request', (request, response) => {
//   // la même chose qu'avant
// });

// const http = require('http');
// const server = http.createServer((request, response) => {
//     // Fonction de Callback pour lire la requête et écrire la réponse
//     response.end();
//     console.log('Le server est démaré')
// });
// server.listen(8080);

const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {


    const url = request.url;
    let fileContent;

    if (url === '/home') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        fileContent = fs.readFileSync('./home.html', 'utf8');
    } else if (url === '/info') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        fileContent = fs.readFileSync('./info.html', 'utf8');
    } else {
        response.writeHead(400, {
            'content-type': 'text/html'
        })
        fileContent = fs.readFileSync('./notFund.html', 'utf8');

    }

    response.end(fileContent)
});
server.listen(8080);