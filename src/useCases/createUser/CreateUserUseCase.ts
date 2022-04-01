import { UserFactory } from "../../domain/entities/User/UserFactory"
import { IUserRepository } from "../../repository/IUserRepository"
import { AppError } from "../../utils/error/AppError"
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO"

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        try {
            const user = UserFactory.createWith(data)
            await this.repository.save(user)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }   
    }
}