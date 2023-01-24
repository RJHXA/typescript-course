export class Customer {
    // constructors
    constructor(private _firstName: string, private _lastName: string) {
    }

    // getter or setter methods
    getFirstName(): string {
        return this._firstName;
    }

    setFirstName(value: string) {
        this._firstName = value;
    }

    getLastName(): string {
        return this._lastName;
    }

    setLastName(value: string) {
        this._lastName = value;
    }
}