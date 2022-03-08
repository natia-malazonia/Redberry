import { useNavigate } from 'react-router'
import styles from './ThanksGiving.module.css'

function ThanksGiving() {
  const navigate = useNavigate()
  
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
