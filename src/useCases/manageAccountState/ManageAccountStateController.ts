import { AppError } from "../../utils/error/AppError"
import { ManageAccountStateUseCase } from "./ManageAccountStateUseCase"
import { Request, Response } from "express"

export class ManageAccountStateController {
    constructor (
        private manageAccountStateUseCase: ManageAccountStateUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { _id } = request.params 
        try {
            await this.manageAccountStateUseCase.execute({ _id })
            return response.status(200).send()
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}