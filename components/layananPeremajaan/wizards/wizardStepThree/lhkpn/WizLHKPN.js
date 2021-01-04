import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import LHKPN from "./LHKPN";
import CardProfile from "../CardProfile";

function WizLHKPN() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail LHKPN</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <LHKPN></LHKPN>

      <ShowButton />
    </Layout>
  );
}

export default WizLHKPN;
