import { Document } from "mongoose"
import { User } from "../../domain/entities/User"
import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO"
import { IEditUserRequestDTO } from "../../useCases/editUser/IEditUserRequestDTO"
import { IUserRepository } from "../IUserRepository"

export class UserRepository implements IUserRepository {
    async fetchUsersByEmail(email: string): Promise<Document> {
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

    async update({ _id, name, address, phone, password }: IEditUserRequestDTO): Promise<void> {
        const user = new User()

        password = await user.generateHash(password)
        await User.findByIdAndUpdate(_id, {
            $set: {
                name,
                address,
                phone,
                password,
            },
        })
    }

    async validateIfUserAlreadyExists(_id: string): Promise<boolean> {
        const user = new User()
        return await user.validateIfObjectIdIsValid(_id)
    }
}