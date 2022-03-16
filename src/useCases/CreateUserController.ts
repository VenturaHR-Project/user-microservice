import { CreateUserUseCase } from "./CreateUserUseCase"
import { Request, Response } from "express"

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createUserUseCase.execute(request.body)
            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err || "An unexpected error occurred"
            }) 
        }
    }
}