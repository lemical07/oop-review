import { Person } from './person.js';

export class Teacher extends Person {
    #id;

    constructor(id, firstName, lastName, identificationType, identificationNumber, email) {
        super(firstName, lastName, identificationType, identificationNumber, email);
        this.#id = id;
    }

    get id() { return this.#id };
}