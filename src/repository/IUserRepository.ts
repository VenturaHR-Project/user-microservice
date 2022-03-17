import { ICreateUserRequestDTO } from '../useCases/createUser/ICreateUserRequestDTO'

export interface IUserRepository {
    findByEmail(email: string): Promise<Document>
    save(data: ICreateUserRequestDTO): Promise<void>
}