import { AccountType } from "../../domain/enum/AccountType"
import { IUserRepository } from "../../repository/IUserRepository"
import { AppError } from "../../shared/error/AppError"
import { IManageAccountStateRequestDTO } from "./IManageAccountStateRequestDTO"

export class ManageAccountStateUseCase {
    constructor(
        private repository: IUserRepository
    ) {}

    async execute({ _id }: IManageAccountStateRequestDTO) {
        const userAlreadyExists = await this.repository.validateIfUserAlreadyExists(_id)

        if (!userAlreadyExists) {
            throw new AppError(404, "User not found")
        }

        const userAccountType = await this.repository.fetchUserAccountType(_id)

        if (userAccountType == AccountType.Candidate || userAccountType == AccountType.Company) {
            throw new AppError(403, "Account doesn't have permission to change user account state")
        }

        const userIsActive = await this.repository.checkIfUserIsActive(_id)
        
        try {
            await this.repository.updateAccountState(_id, !userIsActive)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}
