import axios from "axios";

class MoviesRepository {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllMovies() {
        const response = await axios.get(this.baseUrl, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f7efb526-5a19-4099-8eef-9da6a6a06d58',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }

    async getMovie(id) {
        const response = await axios.get(`${this.baseUrl}/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f7efb526-5a19-4099-8eef-9da6a6a06d58',
                'Content-Type': 'application/json',
            },
            // params: {
            //   page: 1,
            //   keyword: "удача",
            // },
        });
        return response.data;
    }

}
export default MoviesRepository