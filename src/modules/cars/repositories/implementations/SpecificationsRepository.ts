import { Specification } from "../../model/Specification";
import { ICreateSpecification, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[]

    private static INSTANCE: SpecificationsRepository

    constructor() {
        this.specifications = []
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository()
        }

        return SpecificationsRepository.INSTANCE
    }

    create({ description, name }: ICreateSpecification): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }


    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification
    }
}