import '../scss/app.scss'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (<>
  <Header/>
  <Component {...pageProps} />
  </>)
}

export default MyApp
