import { Document } from "mongoose"
import { ICreateUserRequestDTO } from '../useCases/createUser/ICreateUserRequestDTO'
import { IEditUserRequestDTO } from "../useCases/editUser/IEditUserRequestDTO"

export interface IUserRepository {
    fetchUsersByEmail(email: string): Promise<Document>
    save(data: ICreateUserRequestDTO): Promise<void>
    fetchUsers(): Promise<Document[]>
    update(data: IEditUserRequestDTO): Promise<void>
    validateIfUserAlreadyExists(_id: string): Promise<boolean>
}