import axios from 'axios';

class CategoryService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000'
        });
    }

    async getAll() {
        let responce = await this.axios.get('/categories', {});
        return responce.data;
    }

    async getById(id) {
        let responce = await this.axios.get('/category/' + id)
        return responce.data;
    }

}


export default new CategoryService();