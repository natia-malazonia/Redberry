import React, { useState } from 'react'
import { userToken } from '../environment'

const initalData = {
  token: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  skills: [],
  work_preference: '',
  had_covid: '',
  had_covid_at: '',
  vaccinated: '',
  vaccinated_at: '',
  will_organize_devtalk: '',
  devtalk_topic: '',
  something_special: '',
}

const QuestionsContext = React.createContext({
  questionData: initalData,
  setPersonalInformationHandler: (firtsName, lastName, email, mobile) => {},
  setSkillsHandler: (skillsList) => {},
  setCovidHandler: (
    workPreference,
    hadCovid,
    hadCovidAt,
    hadVaccine,
    hadVaccineAt,
  ) => {},
  setRedberryInsightHandler: (
    willOrganizeDevtalk,
    devtalkTopic,
    smtSpecial,
  ) => {},
  resetDataHandler: () => {},
  initTokenHandler: () => {},
  getFormattedData: () => {},
})

export const QuestionsContextProvider = (props) => {
  const setPersonalInformationHandler = (
    firstName,
    lastName,
    email,
    mobile,
  ) => {
    setQuestionData((prev) => {
      return {
        ...prev,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: mobile,
      }
    })
  }

  const setSkillsHandler = (skillsList) => {
    setQuestionData((prev) => {
      return { ...prev, skills: skillsList }
    })
  }

  const setCovidHandler = (
    workPreference,
    hadCovid,
    hadCovidAt,
    hadVaccine,
    hadVaccineAt,
  ) => {
    setQuestionData((prev) => {
      return {
        ...prev,
        work_preference: workPreference,
        had_covid: hadCovid,
        had_covid_at: hadCovid
          ? `${hadCovidAt.getFullYear()}-${
              hadCovidAt.getMonth() + 1
            }-${hadCovidAt.getDate()}`
          : '',
        vaccinated: hadVaccine,
        vaccinated_at: hadVaccine
          ? `${hadVaccineAt.getFullYear()}-${
              hadVaccineAt.getMonth() + 1
            }-${hadVaccineAt.getDate()}`
          : '',
      }
    })
  }

  const setRedberryInsightHandler = (
    willOrganizeDevtalk,
    devtalkTopic,
    smtSpecial,
  ) => {
    setQuestionData((prev) => {
      return {
        ...prev,
        will_organize_devtalk: willOrganizeDevtalk,
        devtalk_topic: devtalkTopic,
        something_special: smtSpecial,
      }
    })
  }

  const resetDataHandler = () => {
    setQuestionData(initalData)
  }

  const initTokenHandler = () => {
    setQuestionData((prev) => {
      return {
        ...prev,
        token: userToken,
      }
    })
  }

  const getFormattedData = () => {
    let obj = { ...questionData }
    if (!obj.had_covid_at) {
      delete obj.had_covid_at
    }
    if (!obj.vaccinated_at) {
      delete obj.vaccinated_at
    }
    return obj
  }

  const [questionData, setQuestionData] = useState(initalData)

  return (
    <QuestionsContext.Provider
      value={{
        questionData,
        setPersonalInformationHandler,
        setSkillsHandler,
        setCovidHandler,
        setRedberryInsightHandler,
        resetDataHandler,
        initTokenHandler,
        getFormattedData,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContext
