import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "./../ShowButton";
import WizardSteps from "./../WizardSteps";
import Lhaksn from "./Lhkasn";
import CardProfile from "./../CardProfile";
import Link from "next/link";

function WizardThree() {
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Input Detail Usulan</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* show card profile */}
      <CardProfile />

      <Lhaksn />

      

      <ShowButton />
    </Layout>
  );
}

export default WizardThree;
