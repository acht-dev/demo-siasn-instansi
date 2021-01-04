import { Layout } from "../../../../components/Layout";
import { Form, Col, Button, Dropdown, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import CardProfile from "./CardProfile";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function DetailPenetapan() {
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

        {/* title */}
        <div className='wizard__title'>
          <h2>Dokumen Penetapan Peremajaan</h2>
        </div>
        {/* Card Profile */}
        <CardProfile />
        {/* End Card Profile */}

        {/* Component download form */}
        <div className='wizard__inputForm'>
          <Form>
            <div className='mb-3'>
              <h3>Dokumen Penetapan Peremajaan</h3>
            </div>
            <Form.Row>
              <Col xs={12} md={6} className='mr-md-5'>
                <Form.Group controlId='nip'>
                  <Form.Label>
                    Silahkan Unduh Dokumen SK/PERTEK di bawah ini
                  </Form.Label>
                  <a href='../../file/SK_PERTEK.pdf' download>
                    <div className='input-group'>
                      <Form.Control
                        disabled
                        type='text'
                        className='custominput'
                        defaultValue='SK_PERTEK.pdf'
                      />
                      <div className='input-group-append'>
                        <div className='input-group icon-size'>
                          <Button className='buttonLihat'>UNDUH</Button>
                        </div>
                      </div>
                    </div>
                  </a>
                </Form.Group>
              </Col>
              <Col xs={2} md={1} lg={1}>
                <FaCheckCircle
                  style={{ marginTop: "2rem" }}
                  size='2rem'
                  color='green'
                />
              </Col>
            </Form.Row>
            {/* End Component download form */}

            <div className='wizard__inputForm-buttonBox mt-3'>
              <Link href='/layananKP/monitoringPenetapan '>
                <Button className='mr-4 wizard__formButtonReset' type='submit'>
                  KEMBALI
                </Button>
              </Link>

              <Link href='/layananKP/monitoringPenetapan/routePembatalan'>
                <Button
                  className='mr-4 wizard__formButtonPembatalan'
                  type='submit'>
                  AJUKAN PEMBATALAN
                </Button>
              </Link>

              <Link href='/layananKP/monitoringPenetapan/routePerbaikan '>
                <Button
                  className='wizard__formButtonSubmit'
                  type='button'
                  onClick={handleReset}>
                  AJUKAN PERBAIKAN
                </Button>
              </Link>
            </div>
          </Form>
        </div>
        {/* akhir table surat usulan */}
      </Layout>
    </>
  );
}
