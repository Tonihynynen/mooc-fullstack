import { useEffect } from 'react'
import CountryController from './services/countries'

const App = () => {
  const [countries, setCountries] = ([])

  useEffect(()=> {
    const countryData = CountryController.getCountriesData()
    setCountries(...countries, countryData)
  },[])
  
  const FormInputChange = (event) => {
    const searchParameter = event.target.value
  }

  return(
    <div>
      <form>
        <div>
        find countries <input value={countries} onChange={FormInputChange}/>
        </div>
      </form>
    </div>
  )

}
export default App