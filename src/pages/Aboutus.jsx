import React from 'react'
import HeroTitle from '../components/PageTitle/Hero'
import Breadcrumb from '../components/PageTitle/Breadcum'
import InfoTabs from '../sections/AboutUs/AboutTab'

function Aboutus() {
  return (
    <>
      <HeroTitle title="ABOUT US" />
      <Breadcrumb title="ABOUT US" />
      <InfoTabs />
    </>
  )
}

export default Aboutus
