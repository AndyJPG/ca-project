export default class Tenant {
    private readonly _id: string
    private readonly _companyName: string

    constructor(
        id: string,
        companyName: string
    ) {
        this._id = id
        this._companyName = companyName
        this._categories = []
        this._products = []
    }

    private _products: string[]

    get products(): string[] {
        return this._products
    }

    set products(value: string[]) {
        this._products = value
    }

    private _categories: string[]

    get categories(): string[] {
        return this._categories
    }

    set categories(value: string[]) {
        this._categories = value
    }

    get id(): string {
        return this._id
    }

    get companyName(): string {
        return this._companyName
    }

    toJSON(): Object {
        return {
            id: this.id,
            companyName: this.companyName,
            categories: this.categories,
            products: this.products
        }
    }
}
