import axios from 'axios';

class loginService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000'
        });
    }

    async postAll(user, pass) {
        let responce = await this.axios.post('/login', { user, pass });
        return responce.data;
    }
}


export default new loginService();