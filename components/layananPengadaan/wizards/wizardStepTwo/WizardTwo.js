import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Layout } from "../../../Layout";
import Breadcrumb from "../../Breadcrumb";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import WizardSteps from "./WizardSteps";

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

  const selectOptions = {
    jenisID: ["--- Pilih Jenis ---", "1", "2", "3"],
    jenisPengadaan: [
      "--- Pilih Jenis ---",
      "Penetapan NIP CPNS",
      "Pembatalan NIP PNS",
    ],
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Pilih PNS</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-2' />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className='wizard__inputForm '>
          <Form>
            <Col md={10}>
              <Form.Row>
                <Col>
                  <Form.Label>Cari Nomor Peserta</Form.Label>
                  <Form.Control
                    type='text'
                    id='inlineFormInputName'
                    defaultValue={"197003191997031002"}
                    required
                  />
                </Col>
                <Col xs={1} className='my-4' style={{ paddingTop: "10px" }}>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
                <Col className=''>
                  <Form.Label>Cari Nama Peserta</Form.Label>
                  <Form.Control
                    type='text'
                    id='inlineFormInputName'
                    placeholder=''
                  />
                </Col>
                <Col xs={1} className='my-4' style={{ paddingTop: "10px" }}>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Cari Nomor ID</Form.Label>
                  <Form.Control
                    type='text'
                    id='inlineFormInputName'
                    defaultValue={"197003191997031002"}
                    required
                  />
                </Col>
                <Col xs={1} className='my-4' style={{ paddingTop: "10px" }}>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
                <Col className=''>
                  <Form.Label>Jenis Pengadaan</Form.Label>
                  <Form.Control as='select' name='selectOption'>
                    {selectOptions.jenisPengadaan.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Col>
                <Col xs={1} className='my-4' style={{ paddingTop: "10px" }}>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col md={5}>
                  <Form.Label>Jenis ID</Form.Label>
                  <Form.Control as='select' name='selectOption'>
                    {selectOptions.jenisID.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Col>
                <Col xs={1} className='my-4' style={{ paddingTop: "10px" }}>
                  <Button variant='light' type='submit' onClick={handleSubmit}>
                    <img src='../../../img/magnify-scan.png' />
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <div className='wizard__inputForm-buttonBox mt-3'>
              <Button
                className='wizard__formButtonReset'
                type='button'
                onClick={handleReset}>
                Reset
              </Button>
            </div>
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
        <CardProfile isClick={isClick} onClick={handleSubmit} />

        {/* show button */}
        <ShowButton isShowButton={isClick} />
      </Layout>
    </>
  );
}
