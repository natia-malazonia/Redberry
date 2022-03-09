import styles from './SubmittedApplication.module.css'
import DatePicker from 'react-datepicker'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import { userToken } from '../../environment'
import { workPreferences } from '../covidPage/WorkPreferenceEnum'

function SubmittedApplication() {
  const [usersList, setUsersList] = useState([])
  const [skillsList, setSkillsList] = useState([])
  const [expandedPanel, setExpandedPanel] = useState('')

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/applications?token=' + userToken,
      )
      const data = await response.json()
      setUsersList(data)
    }
    getUsers()
  }, [])

  useEffect(() => {
    async function getSkills() {
      const response = await fetch(
        'https://bootcamp-2022.devtest.ge/api/skills',
      )
      const data = await response.json()
      setSkillsList(data)
    }

    getSkills()
  }, [])
  const handleChange = (panel) => (event, newExpanded) => {
    setExpandedPanel(newExpanded ? panel : false)
  }

  return (
    <div className={styles.submittedContainer}>
      <div className={styles.headerText}>
        <h2>Submitted Applications</h2>
      </div>

      <div>
        {usersList.length > 0 &&
          skillsList.length > 0 &&
          usersList.map((application, index) => {
            return (
              <Accordion
                expanded={expandedPanel === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
                key={index}
                className={styles.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.accordionSummary}
                >
                  <Typography>{index + 1}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography variant="div">
                    <div className={styles.submittedApplicationContainer}>
                      <div className={styles.topRow}>
                        <div className={styles.personalInfo}>
                          <h4>Personal Information</h4>
                          <div>
                            <div>First Name</div>
                            <div>{application.first_name}</div>
                          </div>

                          <div>
                            <div>Last Name</div>
                            <div>{application.last_name}</div>
                          </div>

                          <div>
                            <div>E Mail</div>
                            <div>{application.email}</div>
                          </div>

                          <div>
                            <div>Phone</div>
                            <div>{application.phone}</div>
                          </div>
                        </div>

                        <div className={styles.skillset}>
                          <h4>Skillset</h4>

                          {application.skills.map((item) => {
                            return (
                              <div key={item.id}>
                                <div>
                                  {
                                    skillsList.filter(
                                      (skill) => skill.id === item.id,
                                    )[0].title
                                  }
                                </div>
                                <div>
                                  Years of Experience: {item.experience}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div className={styles.downRow}>
                        <div className={styles.covidPage}>
                          <h4>Covid Situation</h4>
                          <div className={styles.covidDetails}>
                            <div>
                              <p>How would you prefer to work?</p>
                              <div className={styles.inputContainer}>
                                <input
                                  readOnly
                                  type="radio"
                                  id={`office${index}`}
                                  name={`workPreference${index}`}
                                  checked={
                                    application.work_preference ===
                                    workPreferences.from_office
                                  }
                                />
                                <div className={styles.radioCheckMark}></div>
                                <label htmlFor="office">
                                  From Sairme Office
                                </label>
                              </div>

                              <div className={styles.inputContainer}>
                                <input
                                  readOnly
                                  type="radio"
                                  id={`home${index}`}
                                  name={`workPreference${index}`}
                                  checked={
                                    application.work_preference ===
                                    workPreferences.from_home
                                  }
                                />
                                <div className={styles.radioCheckMark}></div>
                                <label htmlFor="home">From Home</label>
                              </div>

                              <div className={styles.inputContainer}>
                                <input
                                  readOnly
                                  type="radio"
                                  id={`hybrid${index}`}
                                  name={`workPreference${index}`}
                                  checked={
                                    application.work_preference ===
                                    workPreferences.hybrid
                                  }
                                />
                                <div className={styles.radioCheckMark}></div>
                                <label htmlFor="hybrid">Hybrid</label>
                              </div>
                            </div>
                          </div>

                          <div className={styles.covidContact}>
                            <div>
                              <p>Did you contact covid19? </p>

                              <div className={styles.inputContainer}>
                                <input
                                  readOnly
                                  className={styles.radioInputBtn}
                                  type="radio"
                                  id={`covContact${index}`}
                                  name={`covContact${index}`}
                                  checked={application.had_covid === true}
                                />
                                <div className={styles.radioCheckMark}></div>
                                <label htmlFor={`covContact${index}`}>
                                  Yes
                                </label>
                              </div>

                              <div className={styles.inputContainer}>
                                <input
                                  readOnly
                                  className={styles.radioInputBtn}
                                  type="radio"
                                  id={`covContactNo${index}`}
                                  name={`covContact${index}`}
                                  checked={application.had_covid === false}
                                />
                                <div className={styles.radioCheckMark}></div>
                                <label htmlFor={`covContactNo${index}`}>
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          {application.had_covid && (
                            <div className={styles.contactDate}>
                              <p>When?</p>
                              <DatePicker
                                readOnly
                                className={styles.datePickerInput}
                                selected={new Date(application.had_covid_at)}
                              />
                              <img
                                src={require('../../assets/images/calendar.png')}
                                alt="calendar"
                                className={styles.calendarLogo_1}
                              />
                            </div>
                          )}

                          <div className={styles.vaccine}>
                            <p>Have you been vaccinated? </p>
                            <div className={styles.inputContainer}>
                              <input
                                readOnly
                                className={styles.radioInputBtn}
                                type="radio"
                                id={`covidVaccine${index}`}
                                name={`covidVaccine${index}`}
                                checked={application.vaccinated === true}
                              />
                              <div className={styles.radioCheckMark}></div>
                              <label htmlFor={`covidVaccine${index}`}>
                                Yes
                              </label>
                            </div>

                            <div className={styles.inputContainer}>
                              <input
                                readOnly
                                className={styles.radioInputBtn}
                                type="radio"
                                id={`covidVaccineNo${index}`}
                                name={`covidVaccine${index}`}
                                checked={application.vaccinated === false}
                              />
                              <div className={styles.radioCheckMark}></div>
                              <label htmlFor={`covidVaccine${index}`}>No</label>
                            </div>
                          </div>

                          {application.vaccinated && (
                            <div className={styles.vaccineDate}>
                              <p>When did you get your last covid vaccine?</p>
                              <DatePicker
                                readOnly
                                className={styles.datePickerInput}
                                selected={new Date(application.vaccinated_at)}
                              />
                              <img
                                src={require('../../assets/images/calendar.png')}
                                alt="calendar"
                                className={styles.calendarLogo_2}
                              />
                            </div>
                          )}
                        </div>

                        <div className={styles.insight}>
                          <h4>Insights</h4>
                          <div className={styles.devTalk}>
                            <p>
                              Would you attend Devtalks and maybe also organize
                              your own?
                            </p>
                            <div className={styles.inputContainer}>
                              <input
                                readOnly
                                className={styles.inpurRadioBtn}
                                type="radio"
                                id={`devTalkYes${index}`}
                                name={`devTalk${index}`}
                                checked={
                                  application.will_organize_devtalk === true
                                }
                              />
                              <div className={styles.radioCheckMark}></div>
                              <label htmlFor={`devTalkYes${index}`}>Yes</label>
                            </div>

                            <div className={styles.inputContainer}>
                              <input
                                readOnly
                                className={styles.inpurRadioBtn}
                                type="radio"
                                id={`devTalkNo${index}`}
                                name={`devTalk${index}`}
                                checked={
                                  application.will_organize_devtalk === false
                                }
                              />
                              <div className={styles.radioCheckMark}></div>
                              <label htmlFor={`devTalkNo${index}`}>No</label>
                            </div>
                          </div>

                          <div className={styles.talkAbout}>
                            <p>What would you speak about at Devtalk?</p>
                            <div>
                              <textarea
                                readOnly
                                value={application.devtalk_topic}
                              ></textarea>
                            </div>
                          </div>

                          <div className={styles.smthSpecial}>
                            <p>Tell us something special</p>
                            <div>
                              <textarea
                                readOnly
                                value={application.something_special}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
      </div>
    </div>
  )
}

export default SubmittedApplication
