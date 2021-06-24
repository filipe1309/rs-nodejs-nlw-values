import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"
import { TagRepository } from "../repositories/TagRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver");
        }
        
        const userRepository = getCustomRepository(UserRepository);
        const userReceiverExists = await userRepository.findOne(user_receiver);
        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }

        const userSenderExists = await userRepository.findOne(user_sender);
        if (!userSenderExists) {
            throw new Error("User Sender does not exists!");
        }

        const tagRepository = getCustomRepository(TagRepository);
        const tagExists = await tagRepository.findOne(tag_id);
        if (!tagExists) {
            throw new Error("Tag does not exists!");
        }

        const complimentRepository = getCustomRepository(ComplimentRepository);
        const ComplimentAlreadyExists = await complimentRepository.findOne({ tag_id, user_sender, user_receiver, message });
        if (ComplimentAlreadyExists) {
            throw new Error("Compliment already exists!");
        }

        const Compliment = complimentRepository.create({ tag_id, user_sender, user_receiver, message });

        await complimentRepository.save(Compliment);

        return Compliment;
    }
}

export { CreateComplimentService }
