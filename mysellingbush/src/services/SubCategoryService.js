import axios from 'axios';

class CategoryService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000'
        });
    }

    async getAll() {
        let responce = await this.axios.get('/subcategories',{});
        return responce.data;
    }

    async getById(id) {
        let responce = await this.axios.get('/subcategory/' + id)
        return responce.data;
    }

}


export default new CategoryService();