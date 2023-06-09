import axios from "axios"

export const getCountries = (params = {}) => {
    return axios.get(
        `http://localhost:3001/countries`,{
            params : {
                _page : params.page,
                _limit : params.limit,
                _sort : params.sort,
                _order : params.order
            },
        }
    );
}

//Add a new country in the api
export const addCountry = (data = {}) => {
    return axios({
        method:"post",
        url:"http://localhost:3001/countries",
        data:{
            country : data.country,
            population : data.population
        }
    })
}

//Delete data in API
export const deletCountry = (id) => {
    return axios({
        method:"delete",
        url:`http://localhost:3001/countries/${id}`,
    })
}