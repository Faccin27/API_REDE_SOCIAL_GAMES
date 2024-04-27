const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes/router")

class App {
  constructor() {
    this.server = express();
    this.middleweres();
    this.routes();
  }

  middleweres() {
    // Deixando uma pasta pública para usar CSS, imagens estáticas e Javascript
    this.server.use(express.static('public'))

    // Configura o body-parser
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(router)
  }
}

module.exports = new App().server;
