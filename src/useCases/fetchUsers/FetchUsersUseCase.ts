import { IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../shared/error/AppError";

export class FetchUsersUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute() {
        try {
            const users = await this.repository.fetchUsers()
            return users  
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}