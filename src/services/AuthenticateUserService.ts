import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateRequest) {
        // Verify if email exists
        const userssRepository = getCustomRepository(UserRepository);
        const user = await userssRepository.findOne({ email });
        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        // Verify if passowrd is correct
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        // Generate token
        return sign({ email: user.email }, "d2036f7519307b4356826d6010f1fcdb", {
            subject: user.id,
            expiresIn: "1d"
        });
    }
}

export { AuthenticateUserService }
