import { useNavigate } from "react-router"

function Questionnaire() {
 const navigate = useNavigate()

    const questionChangeHandler = () => {
        navigate('/PersonalInformation')
    }

  return (
    <div>
      <h1>Welcome Rocketeer !</h1>
      <button onClick={questionChangeHandler}>Start Questionnaire</button>
      <span>Submitted applications</span>
    </div>
  )
}

export default Questionnaire
