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
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className="wizard__title">
          <h2>Simpan Berkas</h2>
        </div>

        {/* wizard step section */}
        <div className="wizard__page-5">
          <div className="wizard__container">
            <div className="wizard__row">
              <div className="wizard__step-1 disabled">
                <h5>Langkah 1</h5>
                <p>Pilih Jenis Prosedur</p>
              </div>
              <div className="wizard__step-2 disabled">
                <h5>Langkah 2</h5>
                <p>Pilih Pegawai</p>
              </div>
              <div className="wizard__step-3 disabled">
                <h5>Langkah 3</h5>
                <p>Input Detail Usulan</p>
              </div>
              <div className="wizard__step-4 disabled">
                <h5>Langkah 4</h5>
                <p>Resume</p>
              </div>
              <div className="wizard__step-5 active">
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
            <Modal.Title className="MarginRight">Simpan Berkas</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda yakin ingin menyimpan berkas ini?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Kembali
            </Button>
            <Link href="/">
              <Button variant="primary" onClick={handleClose}>
                Simpan
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        {/* pilih spesimen paraf & tanda tangan */}
        {buttonName === "golongan" ? (
          <div className="wizard__inputForm">
            <strong>
              <p className="mb-2 title">PILIH SPECIMEN</p>
            </strong>

            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="paraf">
                  <Form.Label>Pilih Pejabat untuk Paraf</Form.Label>
                  <Form.Control as="select">
                    <option> --- Pilih Pejabat ---- </option>
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="ttd">
                  <Form.Label>Pilih Pejabat untuk Tanda Tangan</Form.Label>
                  <Form.Control as="select">
                    <option> --- Pilih Pejabat ---- </option>
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <div className="wizard__inputForm-buttonBox mt-3">
                <Button
                  className="mr-3 wizard__formButtonReset"
                  type="button"
                  onClick={handleReset}
                >
                  RESET
                </Button>

                <Button
                  className="mr-4 wizard__formButtonSubmit"
                  type="submit"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
        ) : null}

        <div className="wizard__inputForm">
          <div className="wizard__showButtonRow">
            <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>

            <div className="wizard__inputForm-buttonBox mt-3">
              <Link href="/layananKP/berkasUsulan/step-4">
                <Button className="mr-3 wizard__formButtonReset" type="button">
                  SEBELUMNYA
                </Button>
              </Link>

              <Button
                className="mr-3 wizard__formButtonSubmit"
                type="submit"
                onClick={handleShow}
              >
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
