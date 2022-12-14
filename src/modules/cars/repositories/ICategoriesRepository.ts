import { Category } from "../model/Category"

export interface ICreateCategory {
    name: string
    description: string
}

export interface ICategoriesRepository {
    create({ name, description }: ICreateCategory): void
    list(): Category[]
    findByName(name: string): Category
}