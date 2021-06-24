require("dotenv").config();
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require("./app");

/*
const ssl = {
    key: fs.readFileSync('/etc/letsencrypt/live/lalitbauskar.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/lalitbauskar.com/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/lalitbauskar.com/chain.pem')
}

http.createServer(app).listen(process.env.PORT || 5000);
https.createServer(ssl, app).listen(process.env.port || 5443);
*/

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`My Website (Express) is running on port ${server.address().port}`);
    console.log(`local url: http://localhost:${server.address().port}`);
});

