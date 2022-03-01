function Input(props) {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        error={props.error}
        errorText={props.errorText}
      />
    </div>
  )
}

export default Input
