import styles from './SkillsPage.module.css'
import BaseLayout from '../../UI/BaseLayout'
import Input from '../../UI/Input'
import useInput from '../../hooks/useInput'
import { useContext, useEffect, useState } from 'react'
import QuestionsContext from '../../store/questions-context'

function SkillsPage() {
  const [skillsList, setSkillsList] = useState([])
  const [selectedSkillValue, setSelectedSkillValue] = useState('')
  const [selectedSkillsList, setSelectedSkillsList] = useState([])
  const context = useContext(QuestionsContext)

  const {
    value: experienceInYears,
    isValid: experienceInYearsIsValid,
    hasError: experienceInYearsHasError,
    valueChangeHandler: experienceInYearsChangedHandler,
    inputBlurHandler: experienceInYearsBlurHandler,
    isTouched: experienceInYearsIsTouched,
    resetHandler: experienceResetHandler
  } = useInput(
    (value) =>
      value.trim().length > 0 && !isNaN(value.trim()) && value % 1 === 0,
  )

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

  useEffect(() => {
    if (context.questionData.skills.length > 0 && skillsList.length > 0)
      setSelectedSkillsList(
        context.questionData.skills.map((item) => {
          return {
            id: item.id,
            title: skillsList.filter((skill) => skill.id === item.id)[0].title,
            years: item.experience,
          }
        }),
      )
  }, [skillsList, context.questionData.skills])

  const addSkillHandler = () => {
    if (isNaN(selectedSkillValue) || !experienceInYearsIsValid) {
      return
    }
    if (selectedSkillsList.some((item) => item.id === selectedSkillValue)) {
      return
    }
    let newSkill = {
      id: selectedSkillValue,
      title: skillsList.filter((item) => item.id === +selectedSkillValue)[0]
        .title,
      years: experienceInYears.trim(),
    }
    setSelectedSkillsList((prevValue) => [...prevValue, newSkill])
  }

  const removeSkillHandler = (id) => {
    setSelectedSkillsList((prevValue) =>
      prevValue.filter((item) => item.id !== id),
    )
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
  }

  function formIsValid() {
    return selectedSkillsList.length > 0
  }

  const saveHandler = () => {
    if (formIsValid()) {
      context.setSkillsHandler(
        selectedSkillsList.map((item) => {
          return {
            id: +item.id,
            experience: +item.years,
          }
        }),
      )
    }
  }

  return (
    <BaseLayout
      pageNumber={2}
      previousPageUrl={'/PersonalInformation'}
      nextPageUrl={'/covid-page'}
      allowNextPage={formIsValid()}
      beforePrevPageHandler={saveHandler}
      beforeNextPageHandler={saveHandler}
      errorMessage="*You must choose at least 1 skill"
      leftSideHeader={'Tell us about your skills'}
      rightSideHeader={'A bit about our battles'}
      text={`As we said, Redberry has been on the field for quite some time now, 
      and we have touched and embraced a variety of programming languages, 
      technologies, philosophies, and frameworks. We are battle-tested in 
      PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside 
      technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.`}
    >
      <form onSubmit={formSubmissionHandler} className={styles.form}>
        <select
          value={selectedSkillValue}
          name="skills"
          id="skills"
          className={styles.select}
          onChange={(event) => {
            experienceResetHandler();
            setSelectedSkillValue(event.target.value)
          }}
        >
          <option value="" disabled>
            Skills
          </option>
          {skillsList.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            )
          })}
        </select>
        <Input
          name="skill"
          type="text"
          placeholder="Experience Duration In Years"
          value={experienceInYears}
          onChange={experienceInYearsChangedHandler}
          onBlur={experienceInYearsBlurHandler}
          hasError={experienceInYearsHasError}
          isTouched={experienceInYearsIsTouched}
          errorText={'* Experience Duration is required'}
        />
        <button onClick={addSkillHandler} className={styles.prLanguage}>
          Add Programming Language
        </button>
        <div className={styles.skillsContainer}>
          {selectedSkillsList.map((item) => {
            return (
              <div className={styles.skill} key={item.id}>
                {item.title} Years of Experience: {item.years}
                <button
                  onClick={() => {
                    removeSkillHandler(item.id)
                  }}
                >
                  <img
                    src={require('../../assets/images/Remove.png')}
                    alt="remove"
                    className={styles.removeBtn}
                  ></img>
                </button>
              </div>
            )
          })}
         
        </div>
      </form>
    </BaseLayout>
  )
}

export default SkillsPage
