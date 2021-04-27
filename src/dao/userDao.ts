import mongoose from 'mongoose';
import { userSchema, UserModel } from '../model/userModel';

const UserModel = mongoose.model('User', userSchema);
export class UserDao {

  public async userCreate(user: UserModel) {
    const userObject = new UserModel(user);
    return await userObject.save();
  }
}