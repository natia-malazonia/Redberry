import styles from './Submit.module.css'
import { useNavigate } from 'react-router'

function Submit() {
    const navigate = useNavigate()

    const prevPageChangeHandler = () => {
        navigate('/redberry-insight')
    }

    const submitHandler = ()=> {

    }

    return <div className={styles.submitContainer}>
        <button onClick={submitHandler} className={styles.submitButton}>Submit</button>
        <button onClick={prevPageChangeHandler} className={styles.goBackBtn}>go back</button>
    </div>
}

export default Submit