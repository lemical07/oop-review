class Rate{
    #id;
    #inscription;
    #rate;
    #comments;

    constructor (id, inscription, rate, comments){
        this.#id = id;
        this.#inscription = inscription;
        this.#rate = rate;
        this.#comments = comments;
    }
    get id(){ return  this.#id};
    get inscription(){ return  this.#inscription};
    get rate(){ return  this.#rate};
    get comments(){ return  this.#comments};
}