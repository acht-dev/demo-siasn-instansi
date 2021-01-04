import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import React, { useState } from "react";
import ShowButton from "./../ShowButton";
import CardProfile from "./../CardProfile";
import WizardSteps from "../WizardSteps";
import VerifikasiData from "./VerifikasiData";

function WizHukuman() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Verifikasi Data</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-4' />

        {/* show card profile */}
        <CardProfile />

        {/* form golongan */}
        <VerifikasiData />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizHukuman;
