const Notification = ({ message, errorType }) => {
  const errorStyle = {
    color: "red",
    background:"lightgrey",
    fontSize: 25,
    borderStyle: "solid",
    borderRadius: 5,
    fontStyle: "italic"
  }
  const okStyle = {
    color: "green",
    background:"lightgrey",
    fontSize: 25,
    borderStyle: "solid",
    borderRadius: 5,
    fontStyle: "italic"
  }  
  if (message === null){
    return null
  }

  if (errorType === true) {  
    return(
      <div className="error" style={errorStyle}>
        {message}
        </div>)
    }
  if (errorType === false) {
    return(
      <div style={okStyle}>
      {message}
    </div>
    )
  }
}
export default Notification