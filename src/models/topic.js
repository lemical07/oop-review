class Topic{
    #id;
    #course;
    #code;
    #title;
    #description;
    #active;

    constructor(id, course, code, title, description, active){
        this.#id = id;
        this.#course = course;
        this.#code = code;
        this.#title = title;
        this.#description = description;
        this.#active = active;
    }

    get id (){ return this.#id}
    get course (){ return this.#course}
    get code (){ return this.#code}
    get title (){ return this.#title}
    get description (){ return this.#description}
    get active (){ return this.#active}
}