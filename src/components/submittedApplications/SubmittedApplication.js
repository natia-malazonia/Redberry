import styles from './SubmittedApplication.module.css'
import DatePicker from 'react-datepicker'

function SubmittedApplication() {

  return (
    <div className={styles.submittedApplicationContainer}>
      <div className={styles.topRow}>
        <div className={styles.personalInfo}>
          <h4>Personal Information</h4>
          <div>
            <div>First Name</div>
            <div></div>
          </div>

          <div>
            <div>Last Name</div>
            <div></div>
          </div>

          <div>
            <div>E Mail</div>
            <div></div>
          </div>

          <div>
            <div>Phone</div>
            <div></div>
          </div>
        </div>

        <div className={styles.skillset}>
          <h4>Skillset</h4>
          <div>
            <div>PHP</div>
            <div>Years of Experience: 3</div>
          </div>
        </div>
      </div>

      <div className={styles.downRow}>
        <div className={styles.covidPage}>
          <h4>Covid Situation</h4>
          <div className={styles.covidDetails}>
            <div>
              <p>How would you prefer to work?</p>
              <div>
                <input type="radio" id="office" name="workPreference" />
                <label htmlFor="office">From Sairme Office</label>
              </div>

              <div>
                <input type="radio" id="home" name="workPreference" />
                <label htmlFor="home">From Home</label>
              </div>

              <div>
                <input type="radio" id="hybrid" name="workPreference" />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
            </div>
          </div>

          <div className={styles.covidContact}>
            <div>
              <p>Did you contact covid19? </p>

              <div>
                <input
                  className={styles.radioInputBtn}
                  type="radio"
                  id="covContact"
                  name="covContact"
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
                />
                <label htmlFor="covContactNo">No</label>
              </div>
            </div>
          </div>

          <div className={styles.contactDate}>
            <p>When?</p>
            <DatePicker className={styles.datePickerInput} />
            <img
              src={require('../../assets/images/calendar.png')}
              alt="calendar"
              className={styles.calendarLogo_1}
            />
          </div>

          <div className={styles.vaccine}>
            <p>Have you been vaccinated? </p>
            <div>
              <input
                className={styles.radioInputBtn}
                type="radio"
                id="covidVaccine"
                name="covidVaccine"
                value={'true'}
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
              />
              <label htmlFor="covidVaccineNo">No</label>
            </div>
          </div>

          <div className={styles.vaccineDate}>
            <p>When did you get your last covid vaccine?</p>
            <DatePicker className={styles.datePickerInput} />
            <img
              src={require('../../assets/images/calendar.png')}
              alt="calendar"
              className={styles.calendarLogo_2}
            />
          </div>
        </div>

        <div className={styles.insight}>
          <h4>Insights</h4>
          <div className={styles.devTalk}>
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <div>
              <input
                className={styles.inpurRadioBtn}
                type="radio"
                id="devTalkYes"
                name="devTalk"
              />
              <label htmlFor="devTalkYes">Yes</label>
            </div>

            <div>
              <input
                className={styles.inpurRadioBtn}
                type="radio"
                id="devTalkNo"
                name="devTalk"
              />
              <label htmlFor="devTalkNo">No</label>
            </div>
          </div>

          <div className={styles.talkAbout}>
            <p>What would you speak about at Devtalk?</p>
            <div>
              <textarea></textarea>
            </div>
          </div>

          <div className={styles.smthSpecial}>
            <p>Tell us something special</p>
            <div>
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmittedApplication
