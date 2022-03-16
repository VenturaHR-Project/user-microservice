import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express"
import { AppError } from "../utils/error/AppError"
import { json } from "body-parser"
export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            await this.createUserUseCase.execute(request.body)
            return response.status(201).send()
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}