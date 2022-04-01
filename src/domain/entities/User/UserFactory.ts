import { ICreateUserRequestDTO } from "../../../useCases/createUser/ICreateUserRequestDTO";
import { IUser, User } from "./User";

export class UserFactory {
    static create() { 
        return new User()
    }

    static createWith(data: ICreateUserRequestDTO): IUser {
        return new User(data)
    }
}