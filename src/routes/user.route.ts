import BaseRoutes from "./base.route";
import { auth } from '../middlewares/auth.middleware';

// controllers
import UserController from '../controllers/user.controller';

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, UserController.index);
    this.router.post('/', UserController.create);
    this.router.get('/:id', UserController.show);
    this.router.put('/:id', UserController.update);
    this.router.delete('/:id', UserController.delete);
  }
}

export default new UserRoutes().router;