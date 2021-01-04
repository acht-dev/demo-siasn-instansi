// Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)

import {
    striped,
    bordered,
    hover,
    Table,
    responsive,
    Form,
    Modal,
    Row,
    Col,
    Tab,
    Tabs,
    Card,
    InputGroup,
    FormControl,
    Button,
  } from "react-bootstrap";
  import React, { useState } from "react";
  
  import "bootstrap/dist/css/bootstrap.min.css";
  import Link from "next/link";
  
  //import Iconsearch from "./Iconsearch";
  import styles from "../../../../../styles/Home.module.css";
  
  
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
  
  function TCJR() {
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
              <Card.Body>
                {/* Step 3-2 */}
  
                {/* Judul 1 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Dok SK Pemberhentian Tidak Cakap Jasmani/Rohani*</Col>
                  <Col className="paddingLeft">Dok Pertimbangan Teknis Pensiun </Col>
                </Form.Row>
  
                {/* Input 1 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form.File id="formcheck-api-custom" custom>
                      <Form.File.Input isInvalid />
                      <Form.File.Label data-browse="Pilih">
                        Pilih Berkas
                  </Form.File.Label>
                      <Form.Control.Feedback type="invalid">
                        *Mohon Unggah Berkas
                  </Form.Control.Feedback>
                    </Form.File>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 2 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                      Dok Surat Rekomendasi tidak cakap dari tim Penguji Kesehatan yang ditunjuk kementrian Kesehatan</Col>
                  <Col className="paddingLeft">Daftar Perorangan Calon Penerima Pensiun (DPCP)</Col>
                </Form.Row>
  
                {/* Input 2 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 3 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Surat Pernyataan Tidak Sedang Menjalani Proses Pidana/ Pernah Dipidana</Col>
                  <Col className="paddingLeft">Surat Keterangan Tim Penguji Kesehatan</Col>
                </Form.Row>
  
                {/* Input 3 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 4 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Surat Keputusan CPNS</Col>
                  <Col className="paddingLeft">Surat Keputusan Kenaikan Pangkat Terakhir</Col>
                </Form.Row>
  
                {/* Input 4 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 5 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Surat Keputusan Peninjauan Masa Kerja</Col>
                  <Col className="paddingLeft">Surat Keputusan Cacat dari Pejabat Pembina Kepegawaian</Col>
                </Form.Row>
  
                {/* Input 5 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 6 */}
                <Form.Row className="Step-3">
                  <Col md={6}>SK Pengangkatan Pertama Dalam Jabatan Fungsional</Col>
                  <Col className="paddingLeft"> Surat Keputusan Pengangkatan, Pemindahan dan Pemberhentian Jabatan </Col>
                </Form.Row>
  
                {/* Input 6 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 7 */}
                <Form.Row className="Step-3">
                  <Col md={6}>SK Kenaikan Pangkat (Penyesuaian Ijasah)</Col>
                  <Col className="paddingLeft">SK Pemberhentian Sementara</Col>
                </Form.Row>
  
                {/* Input 7 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>
                </Form.Row>
  
                {/* Judul 8 */}
                <Form.Row className="Step-3">
                  <Col md={6}>SK CLTN</Col>  
                  <Col className="paddingLeft">SK Pengaktifan dari CLTN</Col>              
                </Form.Row>
  
                {/* Input 8 */}
                <Form.Row className="Step-3">
                  <Col md={6}>
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col> 
                  <Col md={6} className="paddingLeft">
                    <Form>
                      <Form>
                        <Form.File
                          id="custom-file"
                          label="Pilih Berkas"
                          data-browse="Pilih"
                          custom
                        />
                      </Form>
                    </Form>
                  </Col>               
                </Form.Row>
  
                {/* BUTTON BATAL & SIMPAN */}
                <div className='wizard__showButton-buttonBox mt-5'>
                  <Link href="/layananPemberhentian/berkasUsulan/step-2">
                    <Button
                      className="wizard__formButtonReset"
                      type="button"
                      onClick={handleReset}
                    >
                      Batal
                  </Button>
                  </Link>
  
                  <Button
                    className="ml-4 wizard__formButtonSubmit"
                    onClick={() => setModalShow(true)}
                  >
                    Simpan
                </Button>
                </div>
                <br />
                {/* modal */}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </div>
        </section>
  
      </>
    );
  }

  export default TCJR;