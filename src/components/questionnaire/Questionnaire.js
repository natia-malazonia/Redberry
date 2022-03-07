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
      <button className={styles.submitedUserBtn}>Submitted Applications</button>
      <div className={styles.rocketman}></div>
    </div>
  )
}

export default Questionnaire
