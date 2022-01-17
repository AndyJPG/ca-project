export default class Tenant {
    private readonly _id: string
    private readonly _companyName: string

    constructor(
        id: string,
        companyName: string
    ) {
        this._id = id
        this._companyName = companyName
    }

    get id(): string {
        return this._id
    }

    get companyName(): string {
        return this._companyName
    }
}
