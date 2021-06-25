import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("User incorrect");
        }
        
        const complimentRepository = getCustomRepository(ComplimentRepository);
        try {
            return await complimentRepository.find({
                where: {
                    user_sender: user_id
                },
                relations: ["userSender", "userReceiver", "tag"]
            });
        } catch (error) {}
    }
}

export { ListUserSendComplimentsService }
