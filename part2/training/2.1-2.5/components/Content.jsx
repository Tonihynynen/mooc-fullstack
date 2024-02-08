import Part from "./Part"
import Total from "./Total"

const Content = ({courses}) =>{
    return(
        <div>
            <ul>
                {courses.parts.map(course => <Part key={course.id} course={course}/>)}
            </ul>
            <Total courses={courses}/>
        </div>
    )
}
export default Content