import Input from '../UI/Input'

function PersonalInformation() {
    return <div>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <Input name='firstName' type='text' placeholder='First Name' />
        <Input name='lastName' type='text' placeholder='Last Name' />
        <Input name='email' type='email' placeholder='E Mail' />
        <Input name='mobile' type='tel' placeholder='+995 5____' />
        <button>prev</button>
        <button>next</button>

    </div>
}

export default PersonalInformation