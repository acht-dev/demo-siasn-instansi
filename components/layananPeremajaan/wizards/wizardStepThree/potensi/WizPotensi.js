import React, { useState } from "react";
import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "./../ShowButton";
import WizardSteps from "./../WizardSteps";
import Potensi from "./Potensi";
import CardProfile from "./../CardProfile";

function WizPotensi() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail Potensi</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      {/* form tabs */}
      <Potensi></Potensi>

      <ShowButton />
    </Layout>
  );
}

export default WizPotensi;
