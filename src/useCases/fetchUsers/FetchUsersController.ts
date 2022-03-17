import { Request, Response } from "express"
import { AppError } from "../../utils/error/AppError"
import { FetchUsersUseCase } from "./FetchUsersUseCase"

export class FetchUsersController {
    constructor(
        private fetchUsersUseCase: FetchUsersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const users = await this.fetchUsersUseCase.execute()
            return response.json(users)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}