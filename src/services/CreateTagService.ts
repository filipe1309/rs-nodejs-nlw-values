import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository"

interface ITagRequest {
    name: string
}

class CreateTagService {
    async execute({ name }: ITagRequest) {
        if (!name) {
            throw new Error("Incorrect name!");
        }

        const tagRepository = getCustomRepository(TagRepository);
        const tagAlreadyExists = await tagRepository.findOne({ name });
        if (tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagRepository.create({ name });

        await tagRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }
