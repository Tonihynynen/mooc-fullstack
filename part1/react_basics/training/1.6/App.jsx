import { useState } from 'react'

const Button = ({action, text}) => {
  return(
    <button onClick={action}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const Results = () => {
    return (
      <div>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
      <p>Average: {good - bad}</p>
      </div>
    )
  }
  const IncrementGoodResult = () => {
    setGood(good + 1)
  }
  const IncrementNeutralResult = () => {
    setNeutral(neutral + 1)
  }
  const IncrementBadResult = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={IncrementGoodResult} text="Good"/>
      <Button action={IncrementNeutralResult} text="Neutral"/>
      <Button action={IncrementBadResult} text="Bad"/>
      <h1>Staticstics</h1>
      <Results/>
    </div>
  )
}
export default App