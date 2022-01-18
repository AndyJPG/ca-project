export default class Category {
    private readonly _id: string
    private readonly _title: string

    constructor(
        id: string,
        title: string
    ) {
        this._id = id
        this._title = title
    }

    get id(): string {
        return this._id
    }

    get title(): string {
        return this._title
    }

    toJSON(): Object {
        return {
            id: this.id,
            title: this.title
        }
    }
}
