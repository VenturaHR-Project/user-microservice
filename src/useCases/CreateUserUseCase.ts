import { IUserRepository } from "../repository/IUserRepository"
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO"

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.repository.findByEmail(data.email)

        if(userAlreadyExists) {
            throw new Error(`User already exists!`)
        }

        try {
            await this.repository.save(data)
        } catch (err) {
            throw new Error(`An unexpected error occurred: ${err}`)
        }   
    }
}