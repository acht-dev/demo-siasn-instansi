import Layout from "../../../../Layout";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ShowButton from "../ShowButton";
import CardProfile from "../CardProfile";
import Breadcrumb from "../../../../Breadcrumb";
import WizardSteps from "../WizardSteps";
import Golongan from "./KGB";
import TableKGB3 from "./TableKGB3"
import PaginationTableKGB3 from "./PaginationTableKGB3"

function WizGolongan() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail KGB</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* show card profile */}
        <CardProfile />
        <p>Riwayat</p>
        <TableKGB3></TableKGB3>

        <Row className='mb-4'>
          <Col>Menampilkan 1-5 dari 8 entri</Col>
          <Col className='text-right'>
            <PaginationTableKGB3 />
          </Col>
        </Row>

        <Golongan />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizGolongan;
