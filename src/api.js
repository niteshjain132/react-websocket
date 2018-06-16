import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer( cb) {
console.log("\n\n\n cb ::", cb);

console.log("\n\n===>>> socket :: ", socket);
    socket.on('timer', timestamp =>
        cb(null, timestamp)
    );
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };