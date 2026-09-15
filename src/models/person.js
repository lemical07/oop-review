export class Person {
    #firstName;
    #lastName;
    #identificationType;
    #identificationNumber;
    #email;

    constructor(firstName, lastName, identificationType, identificationNumber, email) {
        if (new.target === Person) {
            throw new Error("Person es abstracta, no se puede instanciar directamente");
        }
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#identificationType = identificationType;
        this.#identificationNumber = identificationNumber;
        this.#email = email;
    }

    get firstName() { return this.#firstName; }
    get lastName() { return this.#lastName; }
    get identificationType() { return this.#identificationType; }
    get identificationNumber() { return this.#identificationNumber; }
    get email() { return this.#email; }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}