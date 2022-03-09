import { useState } from 'react'

const useInput = (validateValue, initialValue = '') => {
  const [enteredValue, setEnteredValue] = useState(initialValue)
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true)
  }

  const resetHandler = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isTouched,
    resetHandler
  }
}

export default useInput
