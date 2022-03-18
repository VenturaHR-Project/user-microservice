import { Request, Response } from "express"
import { AppError } from "../../utils/error/AppError"
import { EditUserUseCase } from "./EditUserUserCase"

export class EditUserController {
    constructor(
        private editUserUseCase: EditUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { _id } = request.params
        const { name, address, phone, password } = request.body

        try {
            await this.editUserUseCase.execute({ _id, name, address, phone, password })
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