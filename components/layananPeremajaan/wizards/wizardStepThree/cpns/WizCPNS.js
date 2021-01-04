import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import CPNS from "./CPNS";
import CardProfile from "../CardProfile";

function WizCPNS() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail CPNS</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <CPNS></CPNS>

      <ShowButton />
    </Layout>
  );
}

export default WizCPNS;
