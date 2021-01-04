import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import CLTN from "./CLTN";
import CardProfile from "../CardProfile";

function WizCLTN() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail CLTN</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <CLTN></CLTN>

      <ShowButton />
    </Layout>
  );
}

export default WizCLTN;
