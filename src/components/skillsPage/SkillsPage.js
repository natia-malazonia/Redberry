import styles from './SkillsPage.module.css'
import BaseLayout from '../../UI/BaseLayout'
import Input from '../../UI/Input'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router'

function SkillsPage() {
  const navigate = useNavigate()

  const {
    value: enteredSkill,
    isValid: enteredSkillIsValid,
    hasError: skillInputHasError,
    valueChangeHandler: skillChangedHandler,
    inputBlurHandler: skillBlurHandler,
    isTouched: skillInputIsTouched,
  } = useInput((value) => value.trim().length > 0)

  const nextPageChangeHandler = () => {
    navigate('/covid-page')
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!enteredSkillIsValid) {
      return
    }

    nextPageChangeHandler()
  }

  return (
    <BaseLayout
      leftSideHeader={'Tell us about your skills'}
      rightSideHeader={'A bit about our battles'}
      text={`As we said, Redberry has been on the field for quite some time now, 
      and we have touched and embraced a variety of programming languages, 
      technologies, philosophies, and frameworks. We are battle-tested in 
      PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside 
      technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.`}
    >
      <form onSubmit={formSubmissionHandler} className={styles.form}>
        <select name="skills" id="skills" className={styles.select}>
          <option value="0">Skills</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Input
          name="skill"
          type="text"
          placeholder="Experience Duration In Years"
          value={enteredSkill}
          onChange={skillChangedHandler}
          onBlur={skillBlurHandler}
          hasError={skillInputHasError}
          isTouched={skillInputIsTouched}
          errorText={'* Experience Duration is required'}
        />
        <button className={styles.prLanguage}>Add Programming Language</button>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            PHP Years of Experience: 3{' '}
            <button className={styles.skillBtn}>-</button>
          </div>
          <div className={styles.skill}>
            React Year of Experience: 2{' '}
            <button className={styles.skillBtn}>-</button>
          </div>
        </div>
        <button className={styles.btnPrev}></button>
        <button className={styles.btnNext}></button>
      </form>
    </BaseLayout>
  )
}

export default SkillsPage
