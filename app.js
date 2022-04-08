const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:8100",
    allowEIO3: true, // false by default,
    methods: ["GET", "POST"]
  }
  });

io.on("connection", socket => {

    console.log('someone connected')
  
    socket.on('message', message => {
      console.log('message:' + message)
    })

    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
  });


// Initialize our websocket server on port 5000
let port = process.env.PORT;
console.log(port);
if (port == null || port == "") {
  port = 8000;
}
http.listen(port);