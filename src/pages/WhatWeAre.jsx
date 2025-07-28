import React from "react";
import { useEffect, useState } from "react";
import HeroTitle from "../components/PageTitle/Hero";
import Breadcrumb from "../components/PageTitle/Breadcum";
import WhatTabs from "../sections/WhatWeAre/WhatTabs";

function WhatWeAre() {

  return (
    <>
      <HeroTitle title="WHAT" />
      <Breadcrumb title="What" />
      <WhatTabs />
    </>
  );
}

export default WhatWeAre;
