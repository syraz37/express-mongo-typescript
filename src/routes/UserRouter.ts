import { Router } from 'express';
import UserController from '../controllers/UserController';

export default class UserRouter {
    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.router.get('/', this.userController.getAll);
        this.router.post('/', this.userController.register);
    }
}
