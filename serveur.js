const http = require('http');
const app = require('./app');


const numeroPort = 3004;

app.set('port', numeroPort);

const server = http.createServer(app);

server.listen(numeroPort, ()=> {
    console.log("Le serveur de MayGourmet est à l'écoute sur le port", numeroPort);
});