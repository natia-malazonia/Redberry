import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router'
import { validate } from 'react-email-validator'
import styles from './PersonalInformation.module.css'

function PersonalInformation() {
  const navigate = useNavigate()

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isTouched: nameInputIsTouched,
  } = useInput((value) => value.trim().length > 2)

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    isTouched: lastNameInputIsTouched,
  } = useInput((value) => value.trim().length > 2)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    isTouched: emailInputIsTouched,
  } = useInput((value) => validate(value))

  const {
    value: enteredMobilenum,
    isValid: enteredMobilenumIsValid,
    hasError: mobilenumInputHasError,
    valueChangeHandler: mobilenumChangedHandler,
    inputBlurHandler: mobilenumBlurHandler,
    isTouched: mobileInputIsTouched,
  } = useInput((value) => {
    let val = value ? value.trim() : null
    if (!val) {
      return true
    } else if (val.length === 12 && val.startsWith('9955')) {
      return true
    }
    return false
  })

  const nextPageChangeHandler = () => {
    navigate('/')
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (
      !enteredNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredMobilenumIsValid
    ) {
      return
    }

    nextPageChangeHandler()
  }

  const errorText = 'name should include 3 or more characters'

  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.leftSide}>
        <h1 className={styles.header_1}>
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <form onSubmit={formSubmissionHandler}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            className={styles.inputFname}
          />
          {nameInputHasError && nameInputIsTouched &&  (
            <p className={styles.errorTextName}>
              * First name should include 3 or more characters
            </p>
          )}

          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            className={styles.inputLname}
          />
          {lastNameInputHasError && lastNameInputIsTouched && (
            <p className={styles.errorTextLast}>
              * Last name should include 3 or more characters
            </p>
          )}

          <input
            name="email"
            type="email"
            placeholder="E Mail"
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            className={styles.inputEmail}
          />
          {emailInputHasError && emailInputIsTouched && (
            <p className={styles.errorTextEmail}>*Incorrect Email Address</p>
          )}

          <input
            name="mobile"
            type="tel"
            placeholder="+995 5__ __ __ __"
            value={enteredMobilenum}
            onChange={mobilenumChangedHandler}
            onBlur={mobilenumBlurHandler}
            className={styles.inputTel}
          />
           {mobilenumInputHasError && mobileInputIsTouched && (
            <p className={styles.errorTextTel}>*Incorrect Phone Number</p>
          )}
          <button className={styles.btnPrev}></button>
          <button className={styles.btnNext}></button>
        </form>
      </div>

      <div className={styles.rightSide}>
        <h1 className={styles.rightSideHeader}>Redberry Origins</h1>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  )
}

export default PersonalInformation
