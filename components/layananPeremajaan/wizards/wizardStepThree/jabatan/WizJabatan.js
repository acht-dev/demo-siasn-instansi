import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import Jabatan from "./Jabatan";
import CardProfile from "../CardProfile";

function WizJabatan() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail Jabatan</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* Form Tabs */}
      <Jabatan></Jabatan>

      <ShowButton />
    </Layout>
  );
}

export default WizJabatan;
