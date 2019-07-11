import express from 'express';

const server = express();

server.get('/teste', (req, res) => {
  res.json({ message: 'ola, node.' });
});

server.listen(3000);
