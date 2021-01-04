import { Form, Col, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Layout } from "../../../../components/Layout";
import Breadcrumb from "./Breadcrumb";
import CardProfile from "./CardProfile";
import Link from "next/link";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Apakah anda yakin ingin mengirim data ini?</h4>
        <p>
          Dengan mengirim data ini berarti anda mengirim pengajuan pembatalan.
        </p>
        <div className='text-right'>
          <Button className='mr-4' variant='info' onClick={props.onHide}>
            Kembali
          </Button>
          <Link href='/layananPemberhentian/monitoringPenetapan/'>
            <Button variant='primary'> Kirim </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function PengajuanPembatalan() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Pengajuan Pembatalan</h2>
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
              <Link href='/layananPemberhentian/monitoringPenetapan/detailMP'>
                <Button className='mr-4 wizard__formButtonReset' type='submit'>
                  KEMBALI
                </Button>
              </Link>

              <Button
                className='wizard__formButtonSubmit'
                type='button'
                onClick={() => setModalShow(true)}>
                KIRIM
              </Button>
            </div>
            {/* end Button */}
          </Form>
        </div>
        {/* End Component Pengajuan Perbaikan */}
        {/* modal */}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Layout>
    </>
  );
}
