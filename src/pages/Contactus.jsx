import React from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import ContactCon from "../sections/ContactUs/ContactCon";

function Contactus() {
  return (
    <>
      <HeroTitle title="CONTACT US" />
      <Breadcrumb title="CONTACT US" />
      <ContactCon />
    </>
  );
}

export default Contactus;
