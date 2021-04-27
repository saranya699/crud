import { Request, Response } from 'express';
import { UserService } from '../service/userService';
import { UserModel } from '../model/userModel';
import  Logger  from '../config/logger';

let userService: UserService;

export class UserController {
    constructor() {
        userService = new UserService();
    }


    public async userCreate(req: Request, res: Response) {
        Logger.info("firstName is required");
        try {
            const user = await userService.userCreate(req.body);
            res.status(200).json(user);
        } catch (err) {
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
            }
        }
    }
}

