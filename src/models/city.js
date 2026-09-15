class City{
    #id;
    #code;
    #name;

    constructor(id, code, name){
        this.#id = id; 
        this.#code = code; 
        this.#name = name; 
    }

    get id() { return this.#id; }
    get code() { return this.#code; }
    get name() { return this.#name; }
}