import { Router } from "express"
import { createUserController } from "../../useCases/createUser"
import { fetchUsersController } from "../../useCases/fetchUsers"
import { fetchUserController } from "../../useCases/fetchUser"
import { editUserController } from "../../useCases/editUser"
import { manageAccountStateController } from "../../useCases/manageAccountState"

const routes = Router()

routes.post("/users", (request, response) => {
    return createUserController.handle(request, response)
})

routes.get("/users", (request, response) => {
    return fetchUsersController.handle(request, response)
})

routes.get("/users/:uid", (request, response) => {
    return fetchUserController.handle(request, response)
})

routes.put("/users/:_id", (request, response) => {
    return editUserController.handle(request, response)
})

routes.put("/users/admin/:_id", (request, response) => {
    return manageAccountStateController.handle(request, response)
})

export default routes