import { User } from "../../domain/entities/User";
import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<Document> {
        const response = await User.findOne({ email })
        return response
    }

    async save(data: ICreateUserRequestDTO): Promise<void> {
        const user = new User(data)
        await user.save()
    }
}