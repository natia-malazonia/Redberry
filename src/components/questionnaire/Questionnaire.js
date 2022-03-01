import { useNavigate } from "react-router"
import styles from './Questionnaire.module.css'

function Questionnaire() {
 const navigate = useNavigate()

    const questionChangeHandler = () => {
        navigate('/PersonalInformation')
    }

  return (
    <div className={styles.questionnaireContainer}>
      <h1 className={styles.header}>Welcome Rocketeer !</h1>
      <button className={styles.btn} onClick={questionChangeHandler}>Start Questionnaire</button>
      <a href=''>Submitted Applications</a>
      <div className={styles.rocketman}></div>
    </div>
  )
}

export default Questionnaire
