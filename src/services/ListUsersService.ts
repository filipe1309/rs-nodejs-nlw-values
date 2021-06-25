import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

class ListUsersService {
    async execute() {
        const userRepository = getCustomRepository(UserRepository);

        try {
            return await userRepository.find();
        } catch (error) {}
    }
}

export { ListUsersService }
