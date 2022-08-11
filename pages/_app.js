import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Layout from '../components/ui/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Layout></Layout><Head>
    <title>Blockcurrency</title>
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4491/4491699.png"/>
    <meta name="description" content="You can track the prices of current cryptocurrencies, and add new ones"></meta></Head><Component {...pageProps} /></Provider>
}

export default MyApp;
