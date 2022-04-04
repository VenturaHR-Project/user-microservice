import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const userOrError = await this.createUserUseCase.execute(request.body)

            if (userOrError.isLeft()) {
                return response.status(400).json({
                    message: userOrError.value.message
                })
            }
            return response.status(201).json(userOrError.value)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}