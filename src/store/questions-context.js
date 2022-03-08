import React, { useState } from 'react'

const initalData = {
    token: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: [],
    work_preference: '',
    had_covid: false,
    had_covid_at: '',
    vaccinated: false,
    vaccinated_at: '',
    will_organize_devtalk: false,
    devtalk_topic: '',
    something_special: '',
  }

const QuestionsContext = React.createContext({
  questionData: initalData,
  setPersonalInformationHandler: (firtsName, lastName, email, mobile) => {},
  setSkillsHandler: (skillsList) => {},
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

  const [questionData, setQuestionData] = useState(initalData)

  return (
    <QuestionsContext.Provider
      value={{
        questionData,
        setPersonalInformationHandler,
        setSkillsHandler,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContext
