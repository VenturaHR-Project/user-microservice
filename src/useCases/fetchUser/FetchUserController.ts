import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { FetchUserUseCase } from "./FetchUserUseCase"

export class FetchUserController {
    constructor(
        private fetchUserUseCase: FetchUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { _id } = request.params

        try {
            const user = await this.fetchUserUseCase.execute({ _id })

            if (!user) {
                response.status(404).json({ message: "User not found" })
            }
            return response.json(user)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}