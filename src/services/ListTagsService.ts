import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository"

class ListTagsService {
    async execute() {
        const tagRepository = getCustomRepository(TagRepository);

        try {
            return await tagRepository.find();
        } catch (error) {}

    }
}

export { ListTagsService }
