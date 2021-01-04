import { Layout } from "../../../Layout";
import { useSelector } from "react-redux";
import { Form, Col, show, setShow, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import CardProfile from "./CardProfile";
import Breadcrumb from "./../../Breadcrumb";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

function WizardFive() {
  const buttonName = useSelector((state) => state.wizards.buttonName);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    jenisPengadaan: [
      "--- Pilih Jenis Pengadaan ---",
      "Penetapan NIP CPNS",
      "Pembatalan NIP PNS",
    ],
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Simpan Berkas</h2>
        </div>

        {/* wizard step section */}
        <div className='wizard__page-5'>
          <div className='wizard__container'>
            <div className='wizard__row'>
              <div className='wizard__step-2 active'>
                <h5>Langkah 1</h5>
                <p>Pilih Jenis Prosedur</p>
              </div>
              <div className='wizard__step-2 active'>
                <h5>Langkah 2</h5>
                <p>Pilih PNS</p>
              </div>
              <div className='wizard__step-3 active'>
                <h5>Langkah 3</h5>
                <p>Edit</p>
              </div>
              <div className='wizard__step-4 active'>
                <h5>Langkah 4</h5>
                <p>Resume</p>
              </div>
              <div className='wizard__step-5 active'>
                <h5>Langkah 5</h5>
                <p>Simpan Berkas</p>
              </div>
            </div>
          </div>
        </div>
        {/* show card profile */}
        <CardProfile isClick />

        {/* show modal dialog */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='MarginRight'>Simpan Berkas</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda yakin ingin menyimpan berkas ini?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Kembali
            </Button>
            <Link href='/'>
              <Button variant='primary' onClick={handleClose}>
                Simpan
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        {/* Form */}
        <div className='wizard__inputForm'>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId='nopeserta'>
                <Form.Label>Nomor Peserta</Form.Label>
                <Form.Control type='text'></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='namapeserta'>
                <Form.Label>Nama Peserta</Form.Label>
                <Form.Control type='text'></Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId='ttd'>
                <Form.Label>Jenis Pengadaan</Form.Label>
                <Form.Control as='select'>
                  {selectOptions.jenisPengadaan.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <div className='wizard__inputForm-buttonBox mt-3'>
              <Button
                className='mr-3 wizard__formButtonReset'
                type='button'
                onClick={handleReset}>
                RESET
              </Button>

              <Button
                className='mr-4 wizard__formButtonSubmit'
                type='submit'
                onClick={handleSubmit}>
                SUBMIT
              </Button>
            </div>
          </Form>
        </div>

        <div className='wizard__inputForm'>
          <div className='wizard__showButtonRow'>
            <p>Silahkan klik "SIMPAN BERKAS" jika data sudah benar.</p>

            <div className='wizard__inputForm-buttonBox mt-3'>
              <Link href='/layananPengadaan/berkasUsulan/step-4'>
                <Button className='mr-3 wizard__formButtonReset' type='button'>
                  SEBELUMNYA
                </Button>
              </Link>

              <Button
                className='mr-3 wizard__formButtonSubmit'
                type='submit'
                onClick={handleShow}>
                SIMPAN BERKAS
              </Button>
            </div>
          </div>
        </div>

        {/* show button */}
      </Layout>
    </>
  );
}

export default WizardFive;
