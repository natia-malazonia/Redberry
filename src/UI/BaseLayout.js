import styles from './BaseLayout.module.css'

function BaseLayout(props) {
  return (
    <div className={styles.baseLayoutContainer}>
      <div className={styles.leftSide}>
        <h1 className={styles.header_1}>{props.leftSideHeader}</h1>
        {props.children}
      </div>

      <div className={styles.rightSide}>
        <h1 className={styles.rightSideHeader}>{props.rightSideHeader}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default BaseLayout
