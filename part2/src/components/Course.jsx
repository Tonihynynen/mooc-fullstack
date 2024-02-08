import Content from "./Content"
import Header from "./Header"

const Course = ({courses}) => {
    return(
      <div>
        {courses.map(course => <div key={course.id}><Header name={course.name}/> <Content courses={course}/> </div>)}
      </div>
    )
  }
export default Course