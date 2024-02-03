import { useState } from 'react'

const Button = ({action, text}) => {
  return(
    <button onClick={action}>{text}</button>
  )
}

const Results = ({good, neutral, bad, total}) => {
  if (total === 0){
    return(
      <div>No feedback given</div>
    )
  }
  return (
    <div>
    <table align="left" border={1}>
      <tbody>
      <tr>
      <StaticsticsLine text="Good" value={good}/>
      </tr>
      <tr>
      <StaticsticsLine text="Neutral" value={neutral}/>
      </tr>
      <tr>
      <StaticsticsLine text="Bad" value={bad}/>
      </tr>
      <tr>
      <StaticsticsLine text="All" value={total}/>
      </tr>
      <tr>
      <StaticsticsLine text="Average" value={((good-bad) / total) || 0}/>
      </tr>
      <tr>
      <StaticsticsLine text="Positive" value={((good / total) * 100) || 0}/>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const StaticsticsLine = ({text, value}) =>{
  if (text === "Positive")
  return(
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
  return(
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const IncrementGoodResult = () => {
    setGood(good + 1)
    setTotal(setTotal + 1)
    const totalCount = total
    setTotal(totalCount + 1)
  }
  const IncrementNeutralResult = () => {
    setNeutral(neutral + 1)
    setTotal(setTotal + 1)
    const totalCount = total
    setTotal(totalCount + 1)
  }
  const IncrementBadResult = () => {
    setBad(bad + 1)
    setTotal(setTotal + 1)
    const totalCount = total
    setTotal(totalCount + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={IncrementGoodResult} text="Good"/>
      <Button action={IncrementNeutralResult} text="Neutral"/>
      <Button action={IncrementBadResult} text="Bad"/>
      <h1>Staticstics</h1>
      <Results good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}
export default App