import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Layout from '../components/ui/Layout'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Layout></Layout><Component {...pageProps} /></Provider>
}

export default MyApp;
