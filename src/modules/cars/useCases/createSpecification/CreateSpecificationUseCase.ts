import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

interface IRequest {
    name: string
    description: string
}

export class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ description, name }: IRequest): void {
        const findSpecification = this.specificationsRepository.findByName(name)

        if (findSpecification) {
            throw new Error("Specification Already Exists")
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}