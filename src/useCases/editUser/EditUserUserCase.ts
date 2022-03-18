import { IUserRepository } from "../../repository/IUserRepository"
import { AppError } from "../../utils/error/AppError"
import { IEditUserRequestDTO } from "./IEditUserRequestDTO"

export class EditUserUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute(data: IEditUserRequestDTO) {
        const userAlreadyExists = await this.repository.validateIfUserAlreadyExists(data._id)

        if (!userAlreadyExists) {
            throw new AppError(404, "User not found")
        }

        try {
            await this.repository.update(data)
        } catch (err: any) {
            throw new AppError(400, err.message)
        }
    }
}