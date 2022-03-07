import BaseLayout from '../../UI/BaseLayout'
import styles from './CovidPage.module.css'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useRef, useState } from 'react'

function CovidPage() {
  function formIsValid() {}
  const [covidContactDate, setCovidContactDate] = useState()
  const [vacineDate, setVacineDate] = useState()

  const [hadContact, setHadContact] = useState()
  const [hadVaccine, setHadVaccine] = useState()

  const covidContactRef = useRef()

  return (
    <BaseLayout
      previousPageUrl={'/skills-page'}
      nextPageUrl={'/redberry-insight'}
      allowNextPage={formIsValid()}
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
              <input type="radio" id="office" name="office" value="office" />
              <label htmlFor="office">From Sairme Office</label>
            </div>

            <div>
              <input type="radio" id="home" name="home" value="home" />
              <label htmlFor="home">From Home</label>
            </div>

            <div>
              <input type="radio" id="hybrid" name="hybrid" value="hybrid" />
              <label htmlFor="home">Hybrid</label>
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
                value={hadContact}
                onClick={(event) => {
                  setHadContact(true)
                }}
              />
              <label htmlFor="covContact">Yes</label>
            </div>

            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covContactNo"
                name="covContact"
                value={hadContact}
                onClick={(event) => {
                  setHadContact(false)
                }}
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
                value={hadVaccine}
                onClick={(event) => {
                  setHadVaccine(true)
                }}
              />
              <label htmlFor="covidVaccine">Yes</label>
            </div>

            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covidVaccineNo"
                name="covidVaccine"
                value={hadVaccine}
                onClick={() => {
                  setHadVaccine(false)
                }}
              />
              <label htmlFor="covidVaccineNo">No</label>
            </div>
          </div>

          {hadVaccine && (
            <div className={styles.vaccineDate}>
              <p>When did you get your last covid vaccine?</p>
              <DatePicker
                className={styles.datePickerInput}
                selected={vacineDate}
                onChange={(date) => {
                  setVacineDate(date)
                }}
                closeOnScroll={true}
                placeholderText="Date"
              />
              <img
                src={require('../../assets/images/calendar.png')}
                alt="calendar"
                className={styles.calendarLogo_2}
              />
            </div>
          )}
        </div>
      </form>
    </BaseLayout>
  )
}

export default CovidPage
