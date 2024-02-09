import express from 'express';
const pingRouter = express.Router();


pingRouter.get('/api/ping', (_req, res) => {
  res.set('Acces-Control-Allow-Origin', 'http://localhost:3000');
  console.log('someone pinged here');
  res.send('pong');
});

export default pingRouter;