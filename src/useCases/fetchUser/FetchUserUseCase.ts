import { IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../utils/error/AppError";
import { IFetchUserRequestDTO } from "./IFetchUserRequestDTO";

export class FetchUserUseCase {
    constructor(
        private repository: IUserRepository
    ) { }

    async execute({ _id }: IFetchUserRequestDTO) {
        // const hasUser = await this.repository.validateIfUserAlreadyExists(_id)

        // if (!hasUser) {
        //     throw new AppError(404, "User not found")
        // }

        try {
            const user = await this.repository.fetchUserById(_id)
            return user
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}