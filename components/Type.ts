export default class Type {
    private _type: string;

    getType(): string{
        return this._type;
    }

    setType(newType: string) {
        this._type = newType;
    }
}

