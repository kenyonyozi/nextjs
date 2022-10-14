import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Layout from '../Components/Layout';
import Profile from '../Components/Profile';
import ProjectPreview, { ProjectPreviewInterface } from '../Components/ProjectPreview';


const Home: NextPage = () => {
  const projectMetadataArrary =[];

  projectMetadataArrary.push({
    title: 'Data Analysis App',
    desc: 'Processes data in Python',
    linkUrl : '/Data',
    Image : '/pic.jpg',
  });
  projectMetadataArrary.push({
    title: 'Data Analysis App',
    desc: 'Processes data in Python',
    linkUrl : '/Data',
    Image : '/pic.jpg',
  });
  projectMetadataArrary.push({
    title: 'Data Analysis App',
    desc: 'Processes data in Python',
    linkUrl : '/Data',
    Image : '/pic.jpg',
  });

  
  const projectPreviewElements = []
  for(let i = 0; i< projectMetadataArrary.length; i++){
    const metaData = projectMetadataArrary[i];
    const element =  <ProjectPreview {...metaData} key ={i}/>;
    projectPreviewElements.push(element)
  }

  return (
    <div className='flex flex-col gap-4'>
      <Profile />
      <div className='mt-4 flex flex-col gap-4'>
        {projectPreviewElements}
      </div>
    </div>
  )
}

export default Home
