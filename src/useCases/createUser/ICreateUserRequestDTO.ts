import { AccountType } from "../../domain/enum/AccountType"

export interface ICreateUserRequestDTO {
    uid: string
    name: string
    address: string
    phone: string
    accountType: AccountType
    cpf?: string
    cnpj?: string
    corporateName?: string
}