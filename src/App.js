import './App.css';
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './components/questionnaire/Questionnaire';
import PersonalInformation from './components/personalInfoPage/PersonalInformation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/PersonalInformation" element={<PersonalInformation/>} />
      </Routes>
    </div>
  );
}

export default App;
