import Category from "../../Category"

export default class Product {
    private readonly _id: string
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

    private _name: string

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    private _description: string

    get description(): string {
        return this._description
    }

    set description(value: string) {
        this._description = value
    }

    private _price: number

    get price(): number {
        return this._price
    }

    set price(value: number) {
        this._price = value
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
