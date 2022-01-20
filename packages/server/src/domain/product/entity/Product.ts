import Category from "../../Category"

export default class Product {
    private readonly _id: string
    private readonly _name: string
    private readonly _description: string
    private readonly _price: number
    private readonly _tenantId: string

    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
        tenantId: string
    ) {
        this._id = id
        this._name = name
        this._description = description
        this._price = price
        this._tenantId = tenantId
        this._images = []
        this._categories = []
    }

    private _images: string[]

    get images(): string[] {
        return this._images
    }

    set images(value: string[]) {
        this._images = value
    }

    private _categories: Category[]

    get categories(): Category[] {
        return this._categories
    }

    set categories(value: Category[]) {
        this._categories = value
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this._name
    }

    get description(): string {
        return this._description
    }

    get price(): number {
        return this._price
    }

    get tenantId(): string {
        return this._tenantId
    }

    toJSON(): Object {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            images: this.images,
            categories: this.categories
        }
    }
}
