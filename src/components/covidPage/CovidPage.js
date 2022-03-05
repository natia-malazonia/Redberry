import styles from './CovidPage.module.css'
import BaseLayout from '../../UI/BaseLayout'
import Input from '../../UI/Input'
import useInput from '../../hooks/useInput'

function CovidPage() {
  function formIsValid() {}

  return (
    <BaseLayout
      previousPageUrl={'/skills-page'}
      nextPageUrl={'/'}
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
              <label for="office">From Sairme Office</label>
            </div>

            <div>
              <input type="radio" id="home" name="home" value="home" />
              <label for="home">From Home</label>
            </div>

            <div>
              <input type="radio" id="hybrid" name="hybrid" value="hybrid" />
              <label for="home">Hybrid</label>
            </div>
          </div>

          <div className={styles.covidContact}>
            <p>Did you contact covid19? :( </p>
            <div>
              <input
                type="radio"
                id="covContact"
                name="covContact"
                value="covContact"
              />
              <label for="covContact">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="covContactNo"
                name="covContactNo"
                value="covContactNo"
              />
              <label for="covContactNo">No</label>
            </div>
          </div>

          <div className={styles.contactDate}>
            <p>When?</p>
            <Input type="date" name="covidDate" placeholder="Date" />
          </div>

          <div className={styles.vaccine}>
            <p>Have you been vaccinated? </p>
            <div>
              <input
                type="radio"
                id="covidVaccine"
                name="covidVaccine"
                value="covidVaccine"
              />
              <label for="covidVaccine">Yes</label>
            </div>

            <div>
              <input
                type="radio"
                id="covidVaccineNo"
                name="covidVaccineNo"
                value="covidVaccineNo"
              />
              <label for="covidVaccineNo">No</label>
            </div>
          </div>

          <div className={styles.vaccineDate}>
            <p>When did you get your last covid vaccine?</p>
            <Input type="date" name="vaccineDate" placeholder="Date" />
          </div>
        </div>
      </form>
    </BaseLayout>
  )
}

export default CovidPage
