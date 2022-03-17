import { Document } from "mongoose"
import { ICreateUserRequestDTO } from '../useCases/createUser/ICreateUserRequestDTO'

export interface IUserRepository {
    fetchUsersByEmail(email: string): Promise<Document>
    save(data: ICreateUserRequestDTO): Promise<void>
    fetchUsers(): Promise<Document[]>
}