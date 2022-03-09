import { useContext } from 'react'
import { useNavigate } from 'react-router'
import QuestionsContext from '../../store/questions-context'
import styles from './Questionnaire.module.css'

function Questionnaire() {
  const context = useContext(QuestionsContext)
  const navigate = useNavigate()

  const questionChangeHandler = () => {
    context.resetDataHandler()
    context.initTokenHandler()
    navigate('/PersonalInformation')
  }

  const submittedUserChangeHandler = () => {
    navigate('/submitted-applications-page')
  }

  return (
    <div className={styles.questionnaireContainer}>
      <h1 className={styles.header}>Welcome Rocketeer !</h1>
      <button className={styles.btn} onClick={questionChangeHandler}>
        Start Questionnaire
      </button>
      <button
        onClick={submittedUserChangeHandler}
        className={styles.submitedUserBtn}
      >
        Submitted Applications
      </button>
      <div className={styles.rocketman}></div>
    </div>
  )
}

export default Questionnaire
