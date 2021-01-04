import { Form, Col, Button, Dropdown, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import { Layout } from "../../../../components/Layout";
import Breadcrumb from "./Breadcrumb";
import CardProfile from "./CardProfile";
import Link from "next/link";

export default function PengajuanPembatalan() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Pengajuan Perbaikan</h2>
        </div>
        {/* Card Profile */}
        <CardProfile />
        {/* End Card Profile */}

        {/* Component Pengajuan Perbaikan */}
        <div className='wizard__inputForm'>
          <Form>
            <Form.Row>
              <Col xs={12} md={4}>
                <Form.Group controlId='noSuratUsulan'>
                  <Form.Label>Nomor Surat Usulan</Form.Label>
                  <Form.Control type='text' defaultValue={18020002123} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12} md={12}>
                <Form.Group controlId='noSuratUsulan'>
                  <Form.Label>Nomor Surat Usulan</Form.Label>
                  <textarea
                    rows={10}
                    cols={140}
                    className='form-control'
                    autofocus>
                    - Dokumen tidak valid
                  </textarea>
                </Form.Group>
              </Col>
            </Form.Row>
            {/* button */}
            <div className='wizard__inputForm-buttonBox mt-3'>
              <Link href='/layananKP/monitoringPenetapan/wizardDetail/DetailPenetapan '>
                <Button className='mr-4 wizard__formButtonReset' type='submit'>
                  KEMBALI
                </Button>
              </Link>

              <Link href='/layananKP/monitoringPenetapan '>
                <Button className='wizard__formButtonSubmit' type='button'>
                  KIRIM
                </Button>
              </Link>
            </div>
            {/* end Button */}
          </Form>
        </div>
        {/* End Component Pengajuan Perbaikan */}
      </Layout>
    </>
  );
}
