import * as express from 'express';

export const legacyRouter = express.Router();

legacyRouter.get('/', (req, res) => {
  res.send('Hello World!');
});
