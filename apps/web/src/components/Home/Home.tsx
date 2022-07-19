
import { HEADING } from './Home.constants'
import { getCurrentDateToLocaleString } from './Home.helpers'

function Home() {
  return (
    <>
    <div>{HEADING}</div>
    <p>Today is: {getCurrentDateToLocaleString()}</p>
    </>
  )
} 

export { Home }