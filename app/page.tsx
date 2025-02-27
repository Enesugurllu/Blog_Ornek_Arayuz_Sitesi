import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HotTopics from '../components/HotTopics'
import EditorsPicks from '../components/EditorsPicks'
import PopularTags from '../components/PopularTags'
import Footer from '../components/Footer'



const page = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] dark:bg-navy-900">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <HotTopics />
        <EditorsPicks />
        <PopularTags />
      </main>
      <Footer/>
    </div>
  )
}

export default page
