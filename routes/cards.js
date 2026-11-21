const cardsRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsFilePath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/', (req, res) => {
  fs.readFile(cardsFilePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao acessar arquivo de cartões' });
    } else {
      res.send(JSON.parse(data));
    }
  });
});

module.exports = cardsRouter;
