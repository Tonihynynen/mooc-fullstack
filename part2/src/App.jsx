import { useEffect, useState } from 'react'
import CountryController from './services/countries'
import axios from "axios";

const ResultList = ({data, filter}) => {
  if (data === null){
    return null
  }
  const resultCount = data.length
  if (resultCount < 11){
    return (
        <div>Too many matches, specify another filter</div>
    )
  }else{
    return(
        <ul>
          <ListItem data={data} fil={filter}/>
        </ul>
    )
  }
}
const ListItem = ({data, fil}) => {
  const filterCountries = data.map(item => item.name.common);
  const filterToUpper = fil.charAt(0).toUpperCase() + fil.slice(1)
  if (fil === ""){
    return null
  }
  const searchCountries = filterCountries.filter(country => country.startsWith(filterToUpper))
  const resultCount = searchCountries.length
  if (resultCount > 10){
    return(
      <div>Too many matches</div>
    )
  } else if ( resultCount === 1){
    const indexFromData = data.map(item => item.name.common).indexOf(searchCountries[0])
    const languages = Object.values(data[indexFromData].languages)
    const flag = data[indexFromData].flags.png
    console.log(data[indexFromData])
    return(
      <div>
        <h1>{searchCountries}</h1>
        <div>Capital: {data[indexFromData].capital}</div>
        <div>Area: {data[indexFromData].area}</div>
        <h3><b>Languages</b></h3>
        <ul>
          {languages.map((value) => <li key={value.id}>{value}</li>)}
        </ul>
        <img src={flag}/>
      </div>
    )
  } else {
  return(
    <div>
      {searchCountries.map(item => <li key={item.id}>{item}</li>)}
    </div>
  )}
}

const App = () => {
  const [countries, setCountries] = useState(null)
  const [countryFilter, setCountryFilter] = useState('')
  const apiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'
  
  useEffect(()=> {
    axios.get(apiUrl)
    .then(response=> {
      const countryData = response.data
      setCountries(countryData)
      console.log(countryData)
  }).catch(error => {
    console.log("Failed to fetch data", error)
  })
  },[])

  const FormInputChange = (event) => {
    const searchParameter = event.target.value
    setCountryFilter(searchParameter)
  }
  return(
    <div>
      <form>
        <div>
        find countries from API: <input value={countryFilter} onChange={FormInputChange}/>
        </div>
      </form>
      <ResultList data={countries} filter={countryFilter}/>
    </div>
  )
}
export default App