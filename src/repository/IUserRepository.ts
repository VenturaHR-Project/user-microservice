import { ICreateUserRequestDTO } from '../useCases/ICreateUserRequestDTO'

export interface IUserRepository {
    findByEmail(email: string): Promise<Document>
    save(data: ICreateUserRequestDTO): Promise<void>
}