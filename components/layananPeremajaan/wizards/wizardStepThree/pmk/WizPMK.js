import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import PMK from "./PMK";
import CardProfile from "../CardProfile";

function WizPMK() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail PMK</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <PMK></PMK>

      <ShowButton />
    </Layout>
  );
}

export default WizPMK;
