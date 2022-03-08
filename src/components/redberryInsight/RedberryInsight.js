import { useContext, useState } from 'react'
import useInput from '../../hooks/useInput'
import QuestionsContext from '../../store/questions-context'
import BaseLayout from '../../UI/BaseLayout'
import styles from './RedberryInsight.module.css'

function RedberryInsight() {
  const context = useContext(QuestionsContext)

  const [devTalkAllow, setDevTalkAllow] = useState(
    context.questionData.will_organize_devtalk,
  )

  const {
    value: devTalkAbout,
    isValid: devTalkAboutIsValid,
    valueChangeHandler: devTalkAboutChangeHandler,
    inputBlurHandler: devTalkAboutBlurHandler,
  } = useInput(
    (value) => value.trim() !== '',
    context.questionData.devtalk_topic,
  )

  const {
    value: saySmthSpecial,
    isValid: saySmthSpecialIsValid,
    valueChangeHandler: saySmthSpecialChangeHandler,
    inputBlurHandler: saySmthSpecialBlurHandler,
  } = useInput(
    (value) => value.trim() !== '',
    context.questionData.something_special,
  )

  function formIsValid() {
    return (
      devTalkAllow !== undefined && devTalkAboutIsValid && saySmthSpecialIsValid
    )
  }

  const devTalkAllowChangeHandler = (event) => {
    setDevTalkAllow(JSON.parse(event.target.value))
  }

  const saveHandler = () => {
    if (formIsValid()) {
      context.setRedberryInsightHandler(devTalkAllow, devTalkAbout, saySmthSpecial)
    }
  }

  return (
    <BaseLayout
      pageNumber={4}
      errorMessage="*All questions must be answered"
      previousPageUrl={'/covid-page'}
      nextPageUrl={'/submit-page'}
      beforePrevPageHandler={saveHandler}
      beforeNextPageHandler={saveHandler}
      allowNextPage={formIsValid()}
      leftSideHeader={'What about you?'}
      rightSideHeader={'Redberrian Insights'}
      text={`We were soo much fun before the pandemic started! 
      Parties almost every weekend and lavish employee birthday 
      celebrations! Unfortunately, covid ruined that fun like it 
      did almost everything else in the world. But we try our 
      best to zhuzh it up a bit. For example, we host biweekly 
      Devtalks where our senior and lead developers talk about 
      topics they are passionate about. Previous topics have 
      included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these
       talks in the office but you can join our Zoom broadcast as 
       well. Feel free to join either as an attendee or a speaker!`}
    >
      <form>
        <div className={styles.devTalk}>
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <div>
            <input
              className={styles.inpurRadioBtn}
              type="radio"
              id="devTalkYes"
              name="devTalk"
              value={'true'}
              checked={devTalkAllow.toString() === 'true'}
              onChange={devTalkAllowChangeHandler}
            />
            <label htmlFor="devTalkYes">Yes</label>
          </div>

          <div>
            <input
              className={styles.inpurRadioBtn}
              type="radio"
              id="devTalkNo"
              name="devTalk"
              value={'false'}
              checked={devTalkAllow.toString() === 'false'}
              onChange={devTalkAllowChangeHandler}
            />
            <label htmlFor="devTalkNo">No</label>
          </div>
        </div>

        <div className={styles.talkAbout}>
          <p>What would you speak about at Devtalk?</p>
          <div>
            <textarea
              placeholder="I would..."
              value={devTalkAbout}
              onChange={devTalkAboutChangeHandler}
              onBlur={devTalkAboutBlurHandler}
            ></textarea>
          </div>
        </div>

        <div className={styles.smthSpecial}>
          <p>Tell us something special</p>
          <div>
            <textarea
              placeholder="I..."
              value={saySmthSpecial}
              onChange={saySmthSpecialChangeHandler}
              onBlur={saySmthSpecialBlurHandler}
            ></textarea>
          </div>
        </div>
      </form>
    </BaseLayout>
  )
}

export default RedberryInsight
