import { Specification } from "../model/Specification"

export interface ICreateSpecification {
    name: string
    description: string
}

export interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecification): void
    findByName(name: string): Specification
}