import { IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../shared/error/AppError";
import { IFetchUserRequestDTO } from "./IFetchUserRequestDTO";

export class FetchUserUseCase {
    constructor(
        private repository: IUserRepository
    ) { }

    async execute({ _id }: IFetchUserRequestDTO) {

        try {
            const user = await this.repository.fetchUserById(_id)
            return user
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}