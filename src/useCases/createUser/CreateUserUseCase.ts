import { IUserRepository } from "../../repository/IUserRepository"
import { AppError } from "../../utils/error/AppError"
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO"

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.repository.fetchUsersByEmail(data.email)

        if (userAlreadyExists) {
            throw new AppError(409, "User already exists")
        }

        try {
            await this.repository.save(data)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }   
    }
}