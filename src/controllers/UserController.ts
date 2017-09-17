import assert = require('assert');
import { NextFunction, Request, Response } from 'express';
import { User } from '../models/Models';

export default class UserController {

    public getAll(req: Request, res: Response, next: NextFunction) {

        User.find((err, data) => {
            res.send(data);
        });
    }

    public register(req: Request, res: Response, next: NextFunction) {
        console.log('Regestiring user...');
        User.create(req.body).then(() => {
            res.sendStatus(201);
        }, () => {
            res.sendStatus(500);
        });
    }
}
