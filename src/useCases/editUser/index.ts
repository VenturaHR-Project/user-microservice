import { UserRepository } from "../../repository/implementations/UserRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUserCase";

const userRepository = new UserRepository()
const editUserUseCase = new EditUserUseCase(userRepository)
const editUserController = new EditUserController(editUserUseCase)

export { editUserUseCase, editUserController }