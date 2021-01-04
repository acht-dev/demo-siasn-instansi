// Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)

// Pemberhentian Karena Hilang (Hilang)

// Pemberhentian Karena Tewas (Tewas)

// Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
//dan Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP (Meninggal)

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, Card, Col, InputGroup, Modal, Checkbox, Row, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";


import "bootstrap/dist/css/bootstrap.min.css";
// icon ceklis verifikasi step4
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Apakah anda yakin ingin mengirim data ini?</h4>
          <p>Dengan mengirim data ini berarti anda mengirim surat usulan.</p>
          <div className="text-right">
            <Button className="mr-4" variant="info" onClick={props.onHide}>
              Kembali
              </Button>
            <Link href="/">
              <Button variant="primary"> Simpan </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  
function PPPK(props) {
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
      <section className="Full-Container">
        <div>
                  <Card>
                      <Card.Body></Card.Body>
                      <Form.Row className="Step-3 ">
                          <Col md={5}>
                              <Form.Label>Dok SK Pemberhentian Tanpa Hak Pensiun*
                                </Form.Label>
                              <Form.Control disabled
                                  id="custom-file"
                                  value="Belum Upload Document"
                              />
                          </Col>
                          <Col md={1}><br></br><FaTimesCircle
                              size='1rem'
                              color='red'
                          /></Col>
                          <Col md={5} >
                              <Form.Label> Dok Surat Pernyataan tidak sedang menjalani proses/pernah dipidana
                                </Form.Label>
                              <Form.Control disabled
                                  id="custom-file"
                                  value="Belum Upload Document"
                              />
                          </Col>
                          <Col md={1}><br></br><FaTimesCircle
                              size='1rem'
                              color='red'
                          /></Col>
                      </Form.Row>

                      {/* Judul 3 */}

                      {/* Input 3 */}
                      <Form.Row className="Step-3 ">
                          <Col md={5}>
                              <Form.Label> Daftar Perorangan Calon Penerima Pensiun (DPCP)
                                </Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1rem'
                            color='red'
                        /></Col>
                        <Col md={5} >
                            <Form.Label>
                            Dok Surat Rekomendasi dari Instansi
                            </Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1rem'
                            color='red'
                        /></Col>
                    </Form.Row>                                   

        <br></br><br></br>
        </Card>
        </div>
      </section>
    </>
  );
}

export default PPPK;
