import axios from 'axios';

class ProductService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3000'
        });
    }

    async getAll() {
        let responce = await this.axios.get('/products',{});
        return responce.data;
    }

    async getByIdCat(id) {
        let responce = await this.axios.get('/products/' + id)
        return responce.data;
    }

}


export default new ProductService();