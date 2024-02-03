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

const Total = (props) => {
  return(
    <div>
      <p>There are total of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 11
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content course1={part1.name} course2={part2.name} course3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App