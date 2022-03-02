import styles from '../UI/Input.module.css'

function Input(props) {
  return (
    <div className={styles.inputContainer}>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={
          props.hasError && props.isTouched
            ? `${styles.input} ${styles.inputTxt} ${styles.invalid}`
            : `${styles.input} ${styles.inputTxt}`
        }
      />
      {props.hasError && props.isTouched && (
        <p className={styles.errorText}>{props.errorText}</p>
      )}
    </div>
  )
}

export default Input
