class CourseSchedule{
    #id;
    #course;
    #teacher;
    #classroom;
    #startDate;
    #endDate;
    #active;

    constructor (id, course, teacher, classroom, startDate, endDate, active){
        this.#id = id;
        this.#course = course;
        this.#teacher = teacher;
        this.#classroom = classroom;
        this.#startDate = startDate;
        this.#endDate =endDate;
        this.#active = active;
    }

    get id() {return this.#id};
    get course() {return this.#course};
    get teacher() {return this.#teacher};
    get classroom() {return this.#classroom};
    get startDate() {return this.#startDate};
    get endDate() {return this.#endDate};
    get active() {return this.#active};
    
}