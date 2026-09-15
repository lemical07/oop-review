import { Person } from './person.js';

export class Student extends Person {
    #id;
    #code;
    #gender;
    #birthday;
    #address;
    #city;



    constructor(id,code, firstName, lastName, identificationType, identificationNumber, gender, birthday, email, address, city) {
        super(firstName, lastName, identificationType, identificationNumber, email);
        this.#id = id;
        this.#code = code;
        this.#gender = gender;
        this.#birthday = birthday;
        this.#address = address;
        this.#city = city;
    }

    get id() { return this.#id};
    get code() { return this.#code};
    get gender() { return this.#gender};
    get birthday() { return this.#birthday};
    get address() { return this.#address};
    get city() { return this.#city};
}