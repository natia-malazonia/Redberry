import Input from '../UI/Input'

function PersonalInformation() {
  return (
    <div>
      <div>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <Input name="firstName" type="text" placeholder="First Name" />
        <Input name="lastName" type="text" placeholder="Last Name" />
        <Input name="email" type="email" placeholder="E Mail" />
        <Input name="mobile" type="tel" placeholder="+995 5____" />
        <button>prev</button>
        <button>next</button>
      </div>

      <div>
        <h1>Redberry Origins</h1>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  )
}

export default PersonalInformation
