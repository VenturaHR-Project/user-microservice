import { UserRepository } from "../../repository/implementations/UserRepository"
import { FetchUsersController } from "./FetchUsersController"
import { FetchUsersUseCase } from "./FetchUsersUseCase"

const userRepository = new UserRepository()
const fetchUsersUseCase = new FetchUsersUseCase(userRepository)
const fetchUsersController= new FetchUsersController(fetchUsersUseCase) 

export { fetchUsersUseCase, fetchUsersController }
