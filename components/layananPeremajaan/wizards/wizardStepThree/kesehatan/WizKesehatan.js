import Layout from "../../../../Layout";
import React, { useState } from "react";
import ShowButton from "./../ShowButton";
import CardProfile from "./../CardProfile";
import Breadcrumb from "../../../../Breadcrumb";
import WizardSteps from "../WizardSteps";
import Link from "next/link";
import Kesehatan from "./Kesehatan";

function WizKesehatan() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Kesehatan</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* show card profile */}
        <CardProfile />

        {/* Form Tabs */}
        <Kesehatan />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizKesehatan;
