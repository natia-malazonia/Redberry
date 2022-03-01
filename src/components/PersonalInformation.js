import Input from '../UI/Input'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router'

function PersonalInformation() {
    const navigate = useNavigate()

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim().length > 2)


  const nextPageChangeHandler = () => {
    navigate('/')
}

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if(!enteredNameIsValid) {
        return
    }

    nextPageChangeHandler()
  }

  return (
    <div>
      <div>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <form onSubmit={formSubmissionHandler}>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            error={nameInputHasError}
            errorText={'Empty Value'}
          />
          <Input name="lastName" type="text" placeholder="Last Name" />
          <Input name="email" type="email" placeholder="E Mail" />
          <Input name="mobile" type="tel" placeholder="+995 5____" />
          <button>prev</button>
          <button >next</button>
        </form>
      </div>

      <div>
        <h1>Redberry Origins</h1>
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
