import { AccountType } from "../domain/enum/AccountType"

export interface ICreateUserRequestDTO {
    name: string
    address: string
    phone: string
    email: string
    password: string
    accountType: AccountType
    cpf?: string
    cnpj?: string
    corporateName?: string
}