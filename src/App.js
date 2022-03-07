import './App.css'
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './components/questionnaire/Questionnaire'
import PersonalInformation from './components/personalInfoPage/PersonalInformation'
import SkillsPage from './components/skillsPage/SkillsPage'
import CovidPage from './components/covidPage/CovidPage'
import RedberryInsight from './components/redberryInsight/RedberryInsight'
import Submit from './components/submitPage/Submit'
import ThanksGiving from './components/thanksGivingPage/ThanksGiving'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
        <Route path="/skills-page" element={<SkillsPage />} />
        <Route path="/covid-page" element={<CovidPage />} />
        <Route path="/redberry-insight" element={<RedberryInsight />}></Route>
        <Route path="/submit-page" element={<Submit />}></Route>
        <Route path="/thanks-giving-page" element={<ThanksGiving />}></Route>
      </Routes>
    </div>
  )
}

export default App
