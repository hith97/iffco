import React from 'react'
import HeroTitle from '../components/PageTitle/Hero'
import Breadcrumb from '../components/PageTitle/Breadcum'
import ProductTabs from '../sections/ProductListing/ProductTabs'
import BestSellers from '../sections/ProductListing/Bestseller'
import CallToActionBanner from '../sections/ProductListing/ProductCTA'

function ProductListing() {
  return (
    <>
      <HeroTitle title="PRODUCTS"  />
      <Breadcrumb title="PRODUCTS" />
      <ProductTabs />
      <CallToActionBanner />
      {/* <BestSellers /> */}
    </>
  )
}

export default ProductListing
