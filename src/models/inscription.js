class Inscription{
    #id;
    #courseSchedule;
    #student;
    #registerDate;
    #active;

    constructor(id, courseSchedule, student, registerDate, active){
        this.#id = id;
        this.#courseSchedule = courseSchedule;
        this.#student = student;
        this.#registerDate = registerDate;
        this.#active = active;
    }


    get id(){ return this.#id};
    get courseSchedule(){ return this.#courseSchedule};
    get student(){ return this.#student};
    get registerDate(){ return this.#registerDate};
    get active(){ return this.#active};
}