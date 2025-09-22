import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import TopCourses from '../../components/topCourses/TopCourses'

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <TopCourses/>
    </Layout>
  )
}

export default Home