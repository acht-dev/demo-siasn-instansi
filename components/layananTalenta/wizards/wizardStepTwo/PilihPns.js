import { Form, Col, Button, Row } from "react-bootstrap";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";

// function modal
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-right"
      right
    >
      <Modal.Body>
        <h4 className="d-flex justify-content-center mt-2 modalPassword">
          Masukkan Password
        </h4>
        <Form className="mt-4 ">
          <Form.Group
            controlId="formBasicPassword"
            className="d-flex justify-content-center"
          >
            <Form.Control
              style={{ width: "50%" }}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-flex justify-content-center mt-4 mb-2">
            <Button
              className="wizard__formButtonReset mr-3"
              onClick={props.onHide}
            >
              Batal
            </Button>
            <Link href="/layananTTDPertek/monitoringTTDPertek/">
              <Button className="wizard__formButtonSubmit">Kirim</Button>
            </Link>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
// akhir function modal

function TandaTanganBasah() {
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

  // modal
  // const modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* Component input form */}
      <div className="wizard__inputForm">
        <div className="wizard__title">
          <h5 className="font-weight-bold">TANDA TANGAN BASAH</h5>
        </div>

        <Form className="mt-3">
          <Row>
            <Col xs={12} md={4} className="mt-1">
              <Form.Group controlId="nip">
                <small>Download Dokumen Pertek</small>
                <a href="../../file/pengajuan usul.pdf" download>
                  <div className="input-group">
                    <Form.Control
                      disabled
                      type="text"
                      className="custominput"
                      defaultValue="pengajuan usul.pdf"
                    />
                    <div className="input-group-append">
                      <div className="input-group icon-size">
                        <Button className="buttonLihat">UNDUH</Button>
                      </div>
                    </div>
                  </div>
                </a>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <small className="mt-1">
                Upload Dokumen Pertek yang Telah Diberi Paraf
              </small>
              <FormUpload></FormUpload>
            </Col>
          </Row>
          {/* button */}
          <div className=" wizard__inputForm-buttonBox mt-3">
            <Row>
              <Col className="mt-2" sm={3} md={2}>
                <Link href="/layananTTDPertek/TTDPertek/">
                  <Button
                    className="wizard__formButtonReset"
                    type="button"
                    onClick={handleReset}
                  >
                    Sebelumnya
                  </Button>
                </Link>
              </Col>
              <Col className="mt-2" sm={3} md={4}>
                <Link href="/layananTTDPertek/monitoringTTDPertek/">
                  <Button
                    className="wizard__formButtonTolak"
                    type="button"
                    onClick={handleReset}
                  >
                    Tolak
                  </Button>
                </Link>
                
                <Button
                  href=""
                  className="wizard__formButtonSubmit ml-3"
                  onClick={() => setModalShow(true)}
                >
                  Kirim
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>

      {/* modal react */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PilihPns;
