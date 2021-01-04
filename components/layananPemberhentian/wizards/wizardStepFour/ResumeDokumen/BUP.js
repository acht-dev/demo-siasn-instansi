// Batas Usia Pensiun

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
  
function BUP(props) {
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
                              <Form.Label>Dok SK Pemberhentian BUP*
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
                              <Form.Label> Dok Pertimbangan Teknis Pensiun
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
                            Surat Pernyataan Tidak Sedang Menjalani Proses Pidana/ Pernah Dipidana
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

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}></Col>
                        <Col className="paddingLeft"> </Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label> Surat Pernyataan Tidak Pernah Dijatuhi HD Tingkat Sedang/ Berat
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
                        <Col md={5}>
                            <Form.Label>
                            Surat Keputusan CPNS
                            </Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1rem'
                            color='red'
                        />
                        </Col>
                    </Form.Row>

                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}></Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>Surat Keputusan Kenaikan Pangkat Terakhir
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
                        <Col md={5}>
                            <Form.Label>SK Kenaikan Pangkat Penyesuaian Ijasah</Form.Label>
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


                    {/* Input 5 */}
                    <Form.Row className="Step-3 align-items-center">
                                            <Col md={5}>
                                                <Form.Label>
                                                SK Pemberhentian Sementara
                            
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
                        <Col md={5}>
                            <Form.Label>Surat Keputusan Peninjauan Masa Kerja
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

                    {/* Input 5 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>SK Pengangkatan Pertama Dalam Jabatan Fungsional
          
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
                        <Col md={5}>
                            <Form.Label>
                            Surat Keputusan Pengangkatan, Pemindahan dan Pemberhentian Jabatan
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

                    {/* Input 5 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>
                            SK CLTN
          
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

                        <Col md={5}>
                            <Form.Label>
                            SK Pengaktifan dari CLTN
          
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

export default BUP;
