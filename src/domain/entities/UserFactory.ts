import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO";
import { User } from "./User";

export class UserFactory {
    static create() { 
        return new User()
    }

    static createWith(data: ICreateUserRequestDTO): ICreateUserRequestDTO {
        return new User(data)
    }
}