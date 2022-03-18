import { UserRepository } from "../../repository/implementations/UserRepository";
import { ManageAccountStateController } from "./ManageAccountStateController";
import { ManageAccountStateUseCase } from "./ManageAccountStateUseCase";


const userRepository = new UserRepository()
const manageAccountStateUseCase = new ManageAccountStateUseCase(userRepository)
const manageAccountStateController = new ManageAccountStateController(manageAccountStateUseCase)

export { manageAccountStateUseCase, manageAccountStateController }