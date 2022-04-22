import { IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../shared/error/AppError";
import { IFetchUserRequestDTO } from "./IFetchUserRequestDTO";

export class FetchUserUseCase {
    constructor(
        private repository: IUserRepository
    ) { }

    async execute({ uid }: IFetchUserRequestDTO) {

        try {
            const user = await this.repository.fetchUserByUID(uid)
            return user
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}