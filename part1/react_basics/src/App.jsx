const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p> So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Toni'
  const age = 28

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={20 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App