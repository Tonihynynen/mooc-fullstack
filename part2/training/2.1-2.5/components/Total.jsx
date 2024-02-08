const Total = ({courses}) =>{
    const coursesList = courses.parts
    const sum = coursesList.reduce((a , b) => a + b.exercises, 0)
    console.log(sum)
    return(
        <div><b>Total of {sum} exercises</b></div>
    )
}
export default Total