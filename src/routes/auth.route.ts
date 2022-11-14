import BaseRoutes from "./base.route";
import validate from "../middlewares/auth.validator";
import { auth } from '../middlewares/auth.middleware';

// controllers
import AuthController from "../controllers/auth.controller";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', validate, AuthController.login);
    this.router.get('/profile', auth, AuthController.profile);
  }
}

export default new AuthRoutes().router;