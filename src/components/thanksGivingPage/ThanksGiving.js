import { useNavigate } from 'react-router'
import styles from './ThanksGiving.module.css'
import { useContext } from 'react'
import QuestionsContext from '../../store/questions-context'

function ThanksGiving() {
  const navigate = useNavigate()
  useContext(QuestionsContext)
  setTimeout(() => {
    navigate('/')
  }, 3000)

  return (
    <div className={styles.thanksGivingContainer}>
      <p>Thanks for Joining 😊</p>
    </div>
  )
}

export default ThanksGiving
