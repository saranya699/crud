import { UserDao } from "../dao/userDao";
import { UserModel } from "../model/userModel";

let userDao: UserDao;
export class UserService {
    constructor() {
        userDao = new UserDao();
    }

    public async userCreate(user: UserModel) {
        return await userDao.userCreate(user);
    }
}