import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import ShowButton from "./../ShowButton";
import CardProfile from "./../CardProfile";
import WizardSteps from "./../WizardSteps";
import TablePI3 from "./TablePI3";
import PaginationTablePI3 from "./PaginationTablePI3";
import TabSKP from "./TabSKP";

function WizardSecond() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail SKP</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-4' />

        {/* show card profile */}
        <CardProfile />
        <p>Riwayat</p>
        <TablePI3></TablePI3>

        <Row className='mb-4'>
          <Col>Menampilkan 1-5 dari 8 entri</Col>
          <Col className='text-right'>
            <PaginationTablePI3 />
          </Col>
        </Row>

        <TabSKP></TabSKP>

        <div className='mt-5'></div>
        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizardSecond;
