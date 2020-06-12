import axios from 'axios';
//const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try{
            const res = axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`)
            this.result = (await res).data.recipes;
        } catch(error) {
            alert(error);
        }
    }
}    

