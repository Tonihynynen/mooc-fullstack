const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.course1} count={props.exercises1}/>
      <Part part={props.course2} count={props.exercises2}/>
      <Part part={props.course3} count={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>Course part {props.part} with exercises count of {props.count}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content course1={part1} course2={part2} course3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App