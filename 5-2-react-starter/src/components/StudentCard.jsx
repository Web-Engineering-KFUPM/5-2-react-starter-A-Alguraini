

function StudentCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Dept: {props.dept}</p>
    </div>
  )
}

export default StudentCard;