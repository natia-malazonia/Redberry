import { useNavigate } from 'react-router'
import styles from './BaseLayout.module.css'

function BaseLayout(props) {
  const navigate = useNavigate()

  return (
    <div className={styles.baseLayoutContainer}>
      <div className={styles.leftSide}>
        <div className={styles.header_1}>
          <h1>{props.leftSideHeader}</h1>
        </div>
        <div className={styles.formContainer}>{props.children}</div>
        <div className={styles.btnContainer}>
          <button
            onClick={() => {
              navigate(props.previousPageUrl)
            }}
            className={styles.btnPrev}
          ></button>
          <button
            onClick={() => {
              if (props.allowNextPage) navigate(props.nextPageUrl)
            }}
            className={styles.btnNext}
          ></button>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.rightSideContentContainer}>
          <div className={styles.rightSideHeader}>
            <h1>{props.rightSideHeader}</h1>
          </div>

          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
