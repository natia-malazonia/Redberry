import styles from './CovidPage.module.css'
import BaseLayout from '../../UI/BaseLayout'
import Input from '../../UI/Input'
import useInput from '../../hooks/useInput'

function CovidPage() {
  const {
    value: office,
  } = useInput((value) => value.trim().length > 0)

  return (
    <BaseLayout
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
          <p>How would you prefer to work?</p>
       
      </form>
    </BaseLayout>
  )
}

export default CovidPage
