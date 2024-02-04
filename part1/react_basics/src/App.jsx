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
    <table>
      <tbody>
      <StaticsticsLine text="Good" value={good}/>
      <StaticsticsLine text="Neutral" value={neutral}/>
      <StaticsticsLine text="Bad" value={bad}/>
      <StaticsticsLine text="All" value={total}/>
      <StaticsticsLine text="Average" value={((good-bad) / total) || 0}/>
      <StaticsticsLine text="Positive" value={((good / total) * 100) || 0}/>
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
      <th align="left">{value}</th>
    </tr>
  )
}
const MostVotedAnecdote = (props) => {
  const values = Object.values(props.points)
  const anecs = props.anecdotes
  const mostPoints = Math.max(...values)
  const topAnec = values.indexOf(Math.max(...values))
  console.log(topAnec)
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <div>
      {anecs[topAnec]}
      </div>
      <div>
        has {mostPoints} points
      </div>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [point, setPoint] = useState([0,0,0,0,0,0,0,0])

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
  const RandomAnecdote = () => {
    const randomInteger = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomInteger)
  }
  const VoteAnecdote = () => {
    const copy = {...point}
    copy[selected] +=1
    setPoint(copy)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button action={IncrementGoodResult} text="Good"/>
      <Button action={IncrementNeutralResult} text="Neutral"/>
      <Button action={IncrementBadResult} text="Bad"/>
      <h1>Staticstics</h1>
      <Results good={good} neutral={neutral} bad={bad} total={total}/>
      <Button action={VoteAnecdote} text="Vote"/>
      <Button action={RandomAnecdote} text="Next anecdote"/>
      <div>{anecdotes[selected]}</div>
      <div>has {point[selected]} votes</div>
      <MostVotedAnecdote anecdotes={anecdotes} points={point}/>    
    </div>
  )
}
export default App