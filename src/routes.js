import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diegod',
    email: 'daigo@parry.com',
    password_hash: '123213123',
  });

  return res.json(user);
});

export default routes;
