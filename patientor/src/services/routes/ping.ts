import express from 'express';
const pingRouter = express.Router();
import cors from 'cors';

pingRouter.use(cors());

pingRouter.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

export default pingRouter;