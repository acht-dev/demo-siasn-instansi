import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Checkbox,
  Row,
  Col,
  Button,
  FormControl,
  Card,
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


function UploadW5B() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}
          <Form><Card><Card.Body>

          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>Realisasi SKP 1 Tahun Terakhir*</Col>
            <Col className="paddingLefta">SK KP Perorangan/SK Petikan Terakhir*</Col>
          </Form.Row>

          {/* Input 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>

          {/* Judul 2 */}
          <Form.Row className="Step-3">
            <Col md={5}>SK Penetepan Prestasi Kerja Luar Biasa Ditandatangani PPK*</Col>
            <Col className="paddingLefta"><br />Pas Foto Terbaru*</Col>
          </Form.Row>

          {/* Input 2 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>

          {/* Judul 3 */}
          <Form.Row className="Step-3">
            <Col md={5}>SK PAK*</Col>
            <Col className="paddingLefta">Asli Klarifikasi PAK</Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>Bukti Prestasi*</Col>
            <Col className="paddingLefta">SK Jabatan (terakhir)*</Col>
          </Form.Row>

          {/* Input 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>

          {/* Judul 5 */}
          <Form.Row className="Step-3">
            <Col md={5}>Surat Pelantikan (dalam Jabatan Terakhir)*</Col>
            <Col className="paddingLefta">Berita Acara Sumpah/Janji/Pelantikan Jabatan</Col>
          </Form.Row>

          {/* Input 5 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>

          {/* Judul 6 */}
          <Form.Row className="Step-3">
            <Col md={5}><br />SPMT (Surat Perintah Melaksanakan Tugas)</Col>
            <Col md={5} className="paddingLefta">Surat Perintah Pelaksana Tugas (plt) dari Pejabat Pembina Kepegawaian
            </Col>
          </Form.Row>

          {/* Input 6 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
            <Col md={5} className="paddingLeftc">
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaCheckCircle
              size='1rem'
              color='green'
            /></Col>
          </Form.Row>
          {/* Judul 7 */}
          <Form.Row className="Step-3">
            <Col md={5}>CV Terbaru*</Col>
          </Form.Row>

          {/* Input 7 */}
          <Form.Row className="Step-3">
            <Col md={5}>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md><FaTimesCircle
              size='1rem'
              color='red'
            /></Col>
          </Form.Row>
          <br />
          </Card.Body></Card></Form>
        </div>
      </section>
    </main>
  );
}

export default UploadW5B;
