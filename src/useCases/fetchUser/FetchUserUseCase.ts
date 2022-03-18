import { IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../utils/error/AppError";
import { IFetchUserRequestDTO } from "./IFetchUserRequestDTO";

export class FetchUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: IFetchUserRequestDTO) {
        try {
            const user = await this.repository.fetchUserByEmail(data.email)
            return user
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}