import { InvalidNameError } from "../../domain/entities/errors/InvalidName"
import { UserFactory } from "../../domain/entities/UserFactory"
import { Name } from "../../domain/entities/valueObject/Name"
import { IUserRepository } from "../../repository/IUserRepository"
import { Either, left, right } from "../../shared/either/Either"
import { AppError } from "../../shared/error/AppError"
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO"

type CreateUserUseCaseResponse = Promise<Either<InvalidNameError, ICreateUserRequestDTO>>

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) { }

    async execute(data: ICreateUserRequestDTO): CreateUserUseCaseResponse {
        let {
            uid, name, address, phone, accountType, cpf, cnpj, corporateName
        } = data
        const nameOrError = Name.create(name)

        if (nameOrError.isLeft()) {
            return left(nameOrError.value)
        }

        name = nameOrError.value.getName()

        try {
            const user = UserFactory.createWith({
                uid, name, address, phone, accountType, cpf, cnpj, corporateName
            })
            const response = await this.repository.save(user)
            return right(response)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}