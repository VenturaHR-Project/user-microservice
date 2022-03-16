import { Router } from "express"
import { createUserController } from "../../useCases"

const routes = Router()

routes.get("/", (req, res) => res.status(200).json({ message: 'Hello World' }))
routes.post('/users', (request, response) => {
    return createUserController.handle(request, response)
})

export default routes