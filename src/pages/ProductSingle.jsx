import React from 'react'
import HeroTitle from '../components/PageTitle/Hero'
import Breadcrumb from '../components/PageTitle/Breadcum'
import ProductSingleSection from '../sections/ProductSingle/ProductSingle'

function ProductSingle() {
  return (
    <>
      <HeroTitle title="PRODUCTS" />
      <Breadcrumb title="PRODUCTS" />
      <ProductSingleSection />
    </>
  )
}

export default ProductSingle
