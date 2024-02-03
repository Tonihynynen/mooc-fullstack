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
      <Part part={props.course[0]['name']} count={props.course[0]['exercises']}/>
      <Part part={props.course[1]['name']} count={props.course[1]['exercises']}/>
      <Part part={props.course[2]['name']} count={props.course[2]['exercises']}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>There are total of exercises: {props.exercises[0]['exercises'] + props.exercises[1]['exercises'] + props.exercises[2]['exercises']}</p>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts['name'])
  return (
    <div>
      <Header course={course} />
      <Content course={parts} />
      <Total exercises={parts} />
    </div>
  )
}

export default App