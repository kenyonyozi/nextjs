import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
    <div className='flex flex-col gap-4'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </Layout>
  )
}

export default MyApp
