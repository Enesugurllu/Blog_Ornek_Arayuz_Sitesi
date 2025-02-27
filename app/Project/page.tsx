import React from 'react'
import Navbar from '../../components/Navbar'
import ProjectsGrid from '../../components/ProjectsGrid'
import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'
import Sponsors from '../../components/Sponsors'
import Footer from '../../components/Footer'


const page = () => {
  return (
    <>
    <Navbar/>
    <ProjectsGrid/>
    <Services/>
    <Testimonials/> 
    <Sponsors/>
    <Footer/>
    </>
  )
}

export default page
