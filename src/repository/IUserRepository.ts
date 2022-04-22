import { Document } from "mongoose"
import { AccountType } from "../domain/enum/AccountType"
import { ICreateUserRequestDTO } from '../useCases/createUser/ICreateUserRequestDTO'
import { IEditUserRequestDTO } from "../useCases/editUser/IEditUserRequestDTO"

export interface IUserRepository {
    fetchUsers(): Promise<Document[]>
    fetchUserByUID(uid: string): Promise<Document>
    fetchUserAccountType(_id: string): Promise<AccountType>
    save(data: ICreateUserRequestDTO): Promise<ICreateUserRequestDTO>
    update(data: IEditUserRequestDTO): Promise<void>
    updateAccountState(_id: string, isActive: boolean): Promise<void>
    checkIfUserIsActive(_id: string): Promise<boolean>
    validateIfUserAlreadyExists(_id: string): Promise<boolean>
}