import { useNavigate } from 'react-router'
import styles from './BaseLayout.module.css'

function BaseLayout(props) {
  const navigate = useNavigate()

  for (let i = 0; i < 5; i++) {
    if (props.pageNumber > i) {
      ;<img
        src={require('../../src/assets/images/Ellipse 1.png')}
        alt="calendar"
        className={styles.paginationBtn}
      ></img>
    } else {
      ;<img
        src={require('../../src/assets/images/Ellipse 2.png')}
        alt="calendar"
        className={styles.paginationBtn}
      ></img>
    }
  }

  return (
    <div className={styles.baseLayoutContainer}>
      <div className={styles.leftSide}>
        <div className={styles.header_1}>
          <h1>{props.leftSideHeader}</h1>
        </div>
        <div className={styles.formContainer}>{props.children}</div>
        <div className={styles.btnContainer}>
          {/* <button
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
          ></button> */}

          <img
            onClick={() => {
              navigate(props.previousPageUrl)
            }}
            src={require('../../src/assets/images/Previous.png')}
            alt="calendar"
            className={styles.paginationBtnPrev}
          ></img>

          {[1, 2, 3, 4, 5].map((index) => {
            if (props.pageNumber >= index) {
              return (
                <img
                  key={index}
                  src={require('../../src/assets/images/Ellipse 1.png')}
                  alt="calendar"
                  className={styles.paginationBtn}
                ></img>
              )
            }
            return (
              <img
                key={index}
                src={require('../../src/assets/images/Ellipse 2.png')}
                alt="calendar"
                className={styles.paginationBtn}
              ></img>
            )
          })}

          <img
            onClick={() => {
              if (props.allowNextPage) navigate(props.nextPageUrl)
            }}
            src={require('../../src/assets/images/Next.png')}
            alt="calendar"
            className={styles.paginationBtnNext}
          ></img>
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
