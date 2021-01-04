import Layout from "../../../../Layout";
import React, { useState } from "react";
import ShowButton from "./../ShowButton";
import CardProfile from "./../CardProfile";
import Breadcrumb from "../../../../Breadcrumb";
import WizardSteps from "../WizardSteps";
import Link from "next/link";
import Hukuman from "./Hukuman";

function WizHukuman() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Hukuman Disiplin</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* show card profile */}
        <CardProfile />

      {/* Form Tabs */}
        <Hukuman/>

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizHukuman;
