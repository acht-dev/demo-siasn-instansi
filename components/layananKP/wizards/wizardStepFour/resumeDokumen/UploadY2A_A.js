import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row, Card, InputGroup } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
export default function UploadY2A_A() {
  return (
    <>
      <Card>
        <Card.Body>
          <Form.Row className="Step-3">
            <Col md={5} xs={10}>
              <Form.Label>Dok Realisasi SKP 2 tahun terakhir*</Form.Label>
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
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
            <Col md={5} xs={10}>
              <Form.Label>DOK SK KP Perorangan/SK Petikan Terakhir*</Form.Label>
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
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
          </Form.Row>
          <Form.Row className="Step-3">
            <Col md={5} xs={10}>
              <Form.Label>DOK SK jabatan (struktural)*</Form.Label>
              <a href="#" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="Belum Upload Dokumen" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaTimesCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="red" />
            </Col>
            <Col md={5} xs={10}>
              <Form.Label>DOK Surat Pelantikan*</Form.Label>
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
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
          </Form.Row>
          <Form.Row className="Step-3">
            <Col md={5} xs={10}>
              <Form.Label>Surat Penunjukan PLT dari PPK</Form.Label>
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
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
            <Col md={5} xs={10}>
              <Form.Label>Hasil 3 nama yang lolos seleksi JPT*</Form.Label>
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
            <Col xs={2} md={1} lg={1}>
              <FaCheckCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
          </Form.Row>
          <Form.Row className="Step-3">
            <Col md={5} xs={10} className="mb-4">
              <Form.Label>Berita Acara Sumpah/Janji/Pelantikan Jabatan</Form.Label>
              <a href="#" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="Belum Upload Dokumen" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaTimesCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="red" />
            </Col>
            <Col md={5} xs={10}>
              <Form.Label>SPMT (Surat Perintah Melaksanakan Tugas)</Form.Label>
              <a href="#" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="Belum Upload Dokumen" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col xs={2} md={1} lg={1}>
              <FaTimesCircle style={{ marginTop: "2.5rem", marginLeft: "0.7rem" }} size="1rem" color="red" />
            </Col>
          </Form.Row>
        </Card.Body>
      </Card>
    </>
  );
}
