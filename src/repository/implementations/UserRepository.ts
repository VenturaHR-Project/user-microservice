import { Document } from "mongoose"
import { User } from "../../domain/entities/User"
import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO"
import { IUserRepository } from "../IUserRepository"

export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<Document> {
        const response = await User.findOne({ email })
        return response
    }

    async save(data: ICreateUserRequestDTO): Promise<void> {
        const user = new User(data)
        await user.save()
    }

    async fetchUsers(): Promise<Document[]> {
        const response = await User.find().select('-password')
        return response
    }
}