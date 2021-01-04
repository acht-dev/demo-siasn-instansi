import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import { Layout } from "./../../Layout";
import Breadcrumb from "./Breadcrumb";
//import WizardStepsSK from "../penetapanSK/wizardStepsSK";
import TableSK from "./TableSK";

export default function WizardMonitoring() {
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Monitoring Surat Keterangan</h2>
        </div>
        {/* End title */}

        {/* Wizard One - Main Component */}
        <div className='wizard__inputForm monitoringUsulan'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId='noSK'>
                <Form.Label>No. Surat Keputusan</Form.Label>
                <Form.Control
                  type='text-muted'
                  name='noSK'
                  placeholder='Masukkan No. Surat Keputusan'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='tanggalPenetapanSK'>
                <Form.Label>Tanggal Penetapan SK</Form.Label>
                <Form.Control
                  type='date'
                  name='tanggalPenetapanSK'
                  placeholder='dd/mm/yyyy'
                />
              </Form.Group>
              <Form.Group as={Col} controlId='nip'>
                <Form.Label>NIP</Form.Label>
                <Form.Control
                  type='text-muted'
                  name='nip'
                  placeholder='Masukkan NIP'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='jenisPemberhentian'>
                <Form.Label>Jenis Pemberhentian</Form.Label>
                <Form.Control
                  as='select'
                  defaultValue='--Pilih Jenis Pemberhentian--'>
                  <option>--Pilih Jenis Pemberhentian--</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='provinsi'>
                <Form.Label>Provinsi</Form.Label>
                <Form.Control as='select' defaultValue='--Pilih Provinsi--'>
                  <option>--Pilih Provinsi--</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='nama'>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type='text-muted'
                  name='nama'
                  placeholder='Masukkan Nama'
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} mt={4}>
                <Button
                  className='wizard__formButtonSubmit'
                  type='submit'
                  className='mr-2'>
                  CARI USULAN
                </Button>
                <Button className='wizard__formButtonReset' type='submit'>
                  RESET
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>

        <TableSK />

        {/*End Wizard One - Main Component */}
      </Layout>
    </>
  );
}
