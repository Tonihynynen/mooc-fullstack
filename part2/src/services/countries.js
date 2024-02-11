import axios from "axios";
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'


const getCountriesData = async() => {
    axios.get(baseUrl)
    .then(async response => {
        console.log(response)
        return await response.data
    }).catch(error => {
        console.log("Failed to fetch data from API", error)
    })
}
export default {getCountriesData}