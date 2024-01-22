import { SignUpRequestBody } from "../interfaces/Auth";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';

class UserHandler {

  static findUserByEmail(email: string | undefined): Promise<any> {
    return db.User.findOne({ where: { email }, raw: true })
  }

  static createUser(data: SignUpRequestBody): Promise<any> {
    const user = db.User.build({
      ...data,
      id: uuidv4()
    })

    return user.save()
  }

  static setAccessToken(userId: string, accessToken: string, refreshToken: string) {

    return db.User.update({
      accessToken,
      refreshToken,

    }, {
      where: {
        id: userId
      }
    });
  }

  static getAuthenticateUser(userId: string, email = " ", authToken: string): Promise<any> {
    return db.User.findOne({
      where: {
        email,
        id: userId,
        accessToken: authToken,
      }
    })
  }

  static setUserPassword(userId: string, password: string) {
    return db.User.update({ password }, { where: { id: userId } })

  }

}

export default UserHandler;
