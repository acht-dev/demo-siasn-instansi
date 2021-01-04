import { Layout } from "../../../Layout";
import { Form, Col, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
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
        <p>Dengan mengirim data ini berarti anda mengirim surat usulan.</p>
        <div className='text-right'>
          <Button className='mr-4' variant='info' onClick={props.onHide}>
            Kembali
          </Button>
          <Link href='/'>
            <Button variant='primary'> Kirim </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function SuratUsulan2() {
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
    spesimenTTD: ["--Pilih Spesimen Approval--", "2", "3", "4", "5"],
  };

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Pembuatan SK</h2>
        </div>

        {/* wizard step section */}
        <div className='wizard__page-2_SU'>
          <div className='wizard__container'>
            <div className='row'>
              <div className='col-6 wizard__step-1 disabled'>
                <h5>Langkah 1</h5>
                <p>Pilih ASN</p>
              </div>
              <div className='col-6  wizard__step-2 active'>
                <h5>Langkah 2</h5>
                <p>Pembuatan SK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component input form */}
        <div className='wizard__inputForm'>
          <Form>
            <Form.Row className=''>
              <Col xs={12} md={4} className='md-3'>
                <Form.Group controlId='nip'>
                  <Form.Label>Masukkan Nomor Surat Keputusan</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className='md-3 '>
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Tanggal SK </Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    placeholder='DD/MM/YYYY'
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className='md-3'>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Pilih Spesimen Tanda Tangan </Form.Label>
                  <Form.Control as='select'>
                    {selectOptions.spesimenTTD.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <div className=' wizard__inputForm-buttonBox mt-3'>
              <Link href='/layananPI/penetapanSK'>
                <Button
                  className='wizard__formButtonReset'
                  type='button'
                  onClick={handleReset}>
                  Kembali
                </Button>
              </Link>

              <Button
                className='ml-4 wizard__formButtonSubmit'
                onClick={() => setModalShow(true)}>
                Kirim
              </Button>
            </div>
          </Form>
        </div>
        {/* modal */}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Layout>
    </>
  );
}

export default SuratUsulan2;
