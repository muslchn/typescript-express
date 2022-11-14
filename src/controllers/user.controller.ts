import { Request, Response } from 'express';
import IController from './controller.interface';

let data: any[] = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Bruce' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dude' },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    console.log('This is users index');

    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send('Create user success!');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find(item => item.id == id);

    return res.send(person);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find(item => item.id == id);
    person.name = name;

    return res.send('Update user success!');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let people = data.filter(item => item.id != id);
    return res.send(people);
  }
}

export default new UserController();