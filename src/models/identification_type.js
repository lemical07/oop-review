class IdentificationType{
    #id;
    #code;
    #name;
    #description;

    constructor(id, code, name, description){
        this.#id = id;
        this.#code = code;
        this.#name = name;
        this.#description = description;
    }

    get id(){return this.#id};
    get code(){return this.#code};
    get name(){return this.#name};
    get description(){return this.#description};
}