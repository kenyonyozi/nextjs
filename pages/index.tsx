import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import ProjectPreview from '../Components/ProjectPreview';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <div> <ProjectPreview/> </div>
      <Footer />
    </div>
  )
}

export default Home
