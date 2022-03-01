function Input(props) {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input
