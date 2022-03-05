import useInput from '../../hooks/useInput'
import { validate } from 'react-email-validator'
import Input from '../../UI/Input'
import BaseLayout from '../../UI/BaseLayout'

function PersonalInformation() {

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
    } else if (val.length === 13 && val.startsWith('+9955')) {
      return true
    }
    return false
  })

  const formSubmissionHandler = (event) => {
    event.preventDefault()

  }

  function formIsValid() {
    return (
      enteredNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredMobilenumIsValid
    )
  }

  return (
    <BaseLayout
      previousPageUrl={'/'}
      nextPageUrl={'/skills-page'}
      allowNextPage={formIsValid()}
      leftSideHeader={'Hey, Rocketeer, what are your coordinates?'}
      rightSideHeader={'Redberry Origins'}
      text={`You watch “What? Where? When?” Yeah. Our founders used to play it.
           That’s where they got a question about a famous American author and
           screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
           exact name and he answered Ray Redberry. And at that moment, a name
           for a yet to be born company was inspired - Redberry 😇`}
    >
      <form onSubmit={formSubmissionHandler}>
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
      </form>
    </BaseLayout>
  )
}

export default PersonalInformation
