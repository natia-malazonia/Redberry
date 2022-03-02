import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router'
import { validate } from 'react-email-validator'
import styles from './PersonalInformation.module.css'
import Input from '../../UI/Input'

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

  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.leftSide}>
        <h1 className={styles.header_1}>
          Hey, Rocketeer, what are your coordinates?
        </h1>
        <form onSubmit={formSubmissionHandler} className={styles.form}>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            hasError={nameInputHasError}
            isTouched={nameInputIsTouched}
            errorText={'* First name should include 3 or more characters'}
          />

          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            hasError={lastNameInputHasError}
            isTouched={lastNameInputIsTouched}
            errorText={'* Last name should include 3 or more characters'}
          />

          <Input
            name="email"
            type="email"
            placeholder="E Mail"
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            hasError={emailInputHasError}
            isTouched={emailInputIsTouched}
            errorText={'*Incorrect Email Address'}
          />

          <Input
            name="mobile"
            type="tel"
            placeholder="+995 5__ __ __ __"
            value={enteredMobilenum}
            onChange={mobilenumChangedHandler}
            onBlur={mobilenumBlurHandler}
            hasError={mobilenumInputHasError}
            isTouched={mobileInputIsTouched}
            errorText={'*Incorrect Phone Number'}
          />
           
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
