import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ShowButton from "../ShowButton";
import CardProfile from "../CardProfile";
import WizardSteps from "../WizardSteps";
import KGB4 from "./KGB4";
import Link from "next/link";
import TableKGB4 from "./TableKGB4";
import PaginationTableKGB4 from "./PaginationTableKGB4";

function WizGolongan() {
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
        <p>Riwayat</p>
        <TableKGB4></TableKGB4>

        <Row className='mb-4'>
          <Col>Menampilkan 1-5 dari 8 entri</Col>
          <Col className='text-right'>
            <PaginationTableKGB4 />
          </Col>
        </Row>

        <KGB4 />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizGolongan;
