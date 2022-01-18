import Category from "./Category";

export default class Tenant {
    private readonly _id: string
    private readonly _companyName: string
    private _categories: Category[]

    constructor(
        id: string,
        companyName: string
    ) {
        this._id = id
        this._companyName = companyName
        this._categories = []
    }

    get id(): string {
        return this._id
    }

    get companyName(): string {
        return this._companyName
    }

    get categories(): Category[] {
        return this._categories
    }

    set categories(value: Category[]) {
        this._categories = value
    }

    toJSON(): Object {
        return {
            id: this.id,
            companyName: this.companyName,
            categories: this.categories
        }
    }
}
