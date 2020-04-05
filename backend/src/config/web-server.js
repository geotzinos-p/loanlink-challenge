const express = require('express');
const bodyParser = require('body-parser');

class WebServer {
    
    setup() {
        const app = express();
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        return app;
    }
}

module.exports = {
    WebServer
};