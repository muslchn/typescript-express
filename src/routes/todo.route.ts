import BaseRoutes from "./base.route";
import { auth } from "../middlewares/auth.middleware";
import validate from "../middlewares/todo.validator";

// controllers
import TodoController from "../controllers/todo.controller";

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, TodoController.index);
    this.router.post('/', auth, validate, TodoController.create);
    this.router.get('/:id', auth, TodoController.show);
    this.router.put('/:id', auth, validate, TodoController.update);
    this.router.delete('/:id', auth, TodoController.delete);
  }
}

export default new TodoRoutes().router;