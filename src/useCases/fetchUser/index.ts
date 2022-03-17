import { UserRepository } from "../../repository/implementations/UserRepository"
import { FetchUserController } from "./FetchUserController"
import { FetchUserUseCase } from "./FetchUserUseCase"

const userRepository = new UserRepository()
const fetchUserUseCase = new FetchUserUseCase(userRepository)
const fetchUserController= new FetchUserController(fetchUserUseCase) 

export { fetchUserUseCase, fetchUserController }
