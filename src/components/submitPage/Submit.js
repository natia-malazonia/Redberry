import styles from './Submit.module.css'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import QuestionsContext from '../../store/questions-context'

function Submit() {
  const context = useContext(QuestionsContext)
  const navigate = useNavigate()

  const prevPageChangeHandler = () => {
    navigate('/redberry-insight')
  }

  const submitHandler = async () => {
    const response = await fetch('https://bootcamp-2022.devtest.ge/api/application', {
      method: 'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify(context.getFormattedData()),
    })
    if(response.status === 201){
        navigate('/thanks-giving-page')
    } 
    alert('Something went wrong. Try again later')
  }

  return (
    <div className={styles.submitContainer}>
      <button onClick={submitHandler} className={styles.submitButton}>
        Submit
      </button>
      <button onClick={prevPageChangeHandler} className={styles.goBackBtn}>
        go back
      </button>
    </div>
  )
}

export default Submit
