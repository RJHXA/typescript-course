class Customer {
    // properties
    private _firstName: string;
    private _lastName: string;

    // constructors
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
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

let myCustomer = new Customer("", "");

myCustomer.setFirstName("Rafael");
myCustomer.setLastName("Alves")

console.log(myCustomer.getFirstName());