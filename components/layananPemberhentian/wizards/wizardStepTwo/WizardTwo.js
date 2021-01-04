import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Layout } from "./../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import WizardSteps from "../wizardStepTwo/WizardSteps";

export default function WizardTwo() {
  const [isClick, setIsClick] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Pilih Pegawai</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-2' />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className='wizard__inputForm '>
          <Form>
            <Col>
              <Form.Row>
                <Col>
                  <Form.Label>Cari Pegawai (NIP BARU)</Form.Label>
                  <Form.Control
                    type='text'
                    id='inlineFormInputName'
                    defaultValue={"197003191997031002"}
                    required
                  />
                </Col>
                <Col xs={1} className='my-4'>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
                <Col className=''>
                  <Form.Label>Cari Pegawai (NIP LAMA)</Form.Label>
                  <Form.Control
                    type='text'
                    id='inlineFormInputName'
                    placeholder='Cari pegawai dengan NIP Lama...'
                  />
                </Col>
                <Col xs={1} className='my-4'>
                  <Button variant='light'>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
              </Form.Row>
            </Col>
          </Form>
        </div>
        {/* <div style={{ textAlign: "center" }}>
          <div style={{ filter: "grayscale(100%)", marginLeft: "45%", marginRight: "50%" }}>
            <img src="../../../img/magnify-scan.png" width="100px" height="150px" />
          </div>
          <Form.Label className="mt-4">Mohon masukkan NIP terlebih dahulu</Form.Label>
        </div> */}
        {/*End Wizard One - Main Component */}

        {/* show card profile */}
        <CardProfile isClick={isClick} hideSelect />

        {/* show button */}
        <ShowButton isShowButton={isClick} />
      </Layout>
    </>
  );
}
