import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'


const getCountriesData = () => {
    axios.get(baseUrl)
    .then(response => {
        return response.data
    }).catch(error => {
        console.log("Failed to fetch data from API", error)
    })
}

export default {getCountriesData}