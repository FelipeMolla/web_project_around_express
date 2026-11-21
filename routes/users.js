const usersRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  fs.readFile(usersFilePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao acessar arquivo de usuários' });
    } else {
      res.send(JSON.parse(data));
    }
  });
});

usersRouter.get('/:_id', (req, res) => {
  fs.readFile(usersFilePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao acessar arquivo de usuários' });
    } else {
      const users = JSON.parse(data);
      const { _id } = req.params;
      if (!users.find((user) => user._id === _id)) {
        res.status(404).send({ message: 'ID do usuário não encontrado' });
        return;
      }
      res.send(users.find((user) => user._id === _id));
    }
  });
});

module.exports = usersRouter;
