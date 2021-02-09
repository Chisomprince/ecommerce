
import {ContextWrapper} from '../context/app-context'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )


}

export default MyApp
