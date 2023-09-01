import Server from './server/server';

const server = new Server();

server.start(
    ()  => {
        console.log(server);        
        console.log('Server is running: ' server.host + ':' + server.port); 
    }
)