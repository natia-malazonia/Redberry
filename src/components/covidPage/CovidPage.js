import BaseLayout from '../../UI/BaseLayout'
import styles from './CovidPage.module.css'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useContext, useRef, useState } from 'react'
import { workPreferences } from './WorkPreferenceEnum'
import QuestionsContext from '../../store/questions-context'

function CovidPage() {
  const context = useContext(QuestionsContext)

  const [covidContactDate, setCovidContactDate] = useState(
    context.questionData.had_covid_at
      ? new Date(context.questionData.had_covid_at)
      : undefined,
  )
  const [vaccineDate, setVaccineDate] = useState(
    context.questionData.vaccinated_at
      ? new Date(context.questionData.vaccinated_at)
      : undefined,
  )

  const [hadContact, setHadContact] = useState(
    context.questionData.had_covid,
  )
  const [hadVaccine, setHadVaccine] = useState(
    context.questionData.vaccinated,
  )

  const [selectedWorkPreference, setSelectedWorkPreference] = useState(
    context.questionData.work_preference
      ? context.questionData.work_preference
      : '',
  )

  const covidContactRef = useRef()

  function formIsValid() {
    return (
      hadContact !== '' && hadVaccine !== '' &&
      (hadContact ? covidContactDate : true) && 
      (hadVaccine ? vaccineDate : true) &&
      selectedWorkPreference
    )
  }

  const saveHandler = () => {
    if (formIsValid()) {
      context.setCovidHandler(
        selectedWorkPreference,
        hadContact,
        covidContactDate,
        hadVaccine,
        vaccineDate,
      )
    }
  }

  const workPreferenceChangeHandler = (event) => {
    setSelectedWorkPreference(event.target.value)
  }

  const hadCovidContactChangeHandler = (event) => {    
    let val = JSON.parse(event.target.value)
    setHadContact(val)
    if (!val) {
      setCovidContactDate(undefined)
    }
  }

  const hadVaccineChangeHandler = (event) => {
    let val = JSON.parse(event.target.value)
    setHadVaccine(val)
    if (!val) {
      setVaccineDate(undefined)
    }
  }

  return (
    <BaseLayout
      pageNumber={3}
      errorMessage="*All questions must be answered"
      previousPageUrl={'/skills-page'}
      nextPageUrl={'/redberry-insight'}
      allowNextPage={formIsValid()}
      beforePrevPageHandler={saveHandler}
      beforeNextPageHandler={saveHandler}
      leftSideHeader={'Covid Stuff'}
      rightSideHeader={'Redberry Covid Policies'}
      text={`As this infamous pandemic took over the world, we adjusted our 
      working practices so that our employees can be as safe and comfortable as 
      possible. We have a hybrid work environment, so you can either work from 
      home or visit our lovely office on Sairme Street. If it was up to us, 
      we would love you to see us in the office because we think face-to-face 
      communications > Zoom meetings. Both on the fun and productivity scales. `}
    >
      <form>       
        <div className={styles.questionnaireContainer}>
          <div className={styles.workEnvironment}>
            <p>How would you prefer to work?</p>
            <div>
              <input
                type="radio"
                id="office"
                name="workPreference"
                checked={selectedWorkPreference === workPreferences.from_office}
                value={workPreferences.from_office}
                onChange={workPreferenceChangeHandler}
              />
              <label htmlFor="office">From Sairme Office</label>
            </div>

            <div>
              <input
                type="radio"
                id="home"
                name="workPreference"
                checked={selectedWorkPreference === workPreferences.from_home}
                value={workPreferences.from_home}
                onChange={workPreferenceChangeHandler}
              />
              <label htmlFor="home">From Home</label>
            </div>

            <div>
              <input
                type="radio"
                id="hybrid"
                name="workPreference"
                checked={selectedWorkPreference === workPreferences.hybrid}
                value={workPreferences.hybrid}
                onChange={workPreferenceChangeHandler}
              />
              <label htmlFor="hybrid">Hybrid</label>
            </div>
          </div>

          <div className={styles.covidContact}>
            <p>Did you contact covid19? :( </p>
            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covContact"
                name="covContact"
                value={'true'}
                checked={hadContact.toString() === 'true'}
                onChange={hadCovidContactChangeHandler}
              />
              <label htmlFor="covContact">Yes</label>
            </div>

            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covContactNo"
                name="covContact"
                value={'false'}
                checked={hadContact.toString() === 'false'}
                onChange={hadCovidContactChangeHandler}
              />
              <label htmlFor="covContactNo">No</label>
            </div>
          </div>
          {hadContact && (
            <div className={styles.contactDate}>
              <p>When?</p>
              <DatePicker
                ref={covidContactRef}
                className={styles.datePickerInput}
                selected={covidContactDate}
                onChange={(date) => {
                  setCovidContactDate(date)
                }}
                closeOnScroll={true}
                placeholderText="Date"
              />
              <img
                onClick={() => {
                  covidContactRef.current.setFocus()
                }}
                src={require('../../assets/images/calendar.png')}
                alt="calendar"
                className={styles.calendarLogo_1}
              />
              {!covidContactDate && (
                <p className={styles.errorText}>*You must enter contact date</p>
              )}
            </div>
          )}

          <div className={styles.vaccine}>
            <p>Have you been vaccinated? </p>
            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covidVaccine"
                name="covidVaccine"
                value={'true'}
                checked={hadVaccine.toString() === 'true'}
                onChange={hadVaccineChangeHandler}
              />
              <label htmlFor="covidVaccine">Yes</label>
            </div>

            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covidVaccineNo"
                name="covidVaccine"
                value={'false'}
                checked={hadVaccine.toString() === 'false'}
                onChange={hadVaccineChangeHandler}
              />
              <label htmlFor="covidVaccineNo">No</label>
            </div>
          </div>
          {hadVaccine && (
            <div className={styles.vaccineDate}>
              <p>When did you get your last covid vaccine?</p>
              <DatePicker
                className={styles.datePickerInput}
                selected={vaccineDate}
                onChange={(date) => {
                  setVaccineDate(date)
                }}
                closeOnScroll={true}
                placeholderText="Date"
              />
              <img
                src={require('../../assets/images/calendar.png')}
                alt="calendar"
                className={styles.calendarLogo_2}
              />
              {!vaccineDate && (
                <p className={styles.errorText}>*You must enter vaccine date</p>
              )}
            </div>
          )}
        </div>
      </form>
    </BaseLayout>
  )
}

export default CovidPage
