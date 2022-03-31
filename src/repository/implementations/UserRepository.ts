import { Document } from "mongoose"
import { User } from "../../domain/entities/User"
import { AccountType } from "../../domain/enum/AccountType"
import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO"
import { IEditUserRequestDTO } from "../../useCases/editUser/IEditUserRequestDTO"
import { IUserRepository } from "../IUserRepository"

export class UserRepository implements IUserRepository {
    async fetchUsers(): Promise<Document[]> {
        const response = await User.find()
        return response
    }
    
    async fetchUserById(_id: string): Promise<Document> {
        const response = await User.findOne({ _id })
        return response
    }

    async fetchUserAccountType(_id: string): Promise<AccountType> {
        const response = await User.findById(_id).select('accountType');
        return response
    }

    async save(data: ICreateUserRequestDTO): Promise<void> {
        const user = new User(data)
        await user.save()
    }

    async update({ _id, name, address, phone }: IEditUserRequestDTO): Promise<void> {
        await User.findByIdAndUpdate(_id, {
            $set: {
                name,
                address,
                phone,
            },
        })
    }

    async updateAccountState(_id: string, isActive: boolean): Promise<void> {
        await User.findByIdAndUpdate(_id, { 
            $set: { 
                isActive 
            } 
        })
    }
    
    async checkIfUserIsActive(_id: string): Promise<boolean> {
        const response = await User.findById(_id).select('isActive');
        return response.isActive
    }

    async validateIfUserAlreadyExists(_id: string): Promise<boolean> {
        const user = new User()
        return await user.validateIfObjectIdIsValid(_id)
    }
}