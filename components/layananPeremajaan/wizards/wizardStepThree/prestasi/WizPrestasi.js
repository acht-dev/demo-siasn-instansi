import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import Prestasi from "./Prestasi";
import CardProfile from "../CardProfile";

function WizPrestasi() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail Prestasi</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <Prestasi></Prestasi>

      <ShowButton />
    </Layout>
  );
}

export default WizPrestasi;
