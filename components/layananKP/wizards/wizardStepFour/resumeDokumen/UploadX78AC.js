import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row, Card, InputGroup } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
export default function Upload78AC() {
  return (
    <>
      <Card>
        {" "}
        <Card.Body>
          <Form.Row className="Step-3">
            <Col md={5} xs={10}>
              <Form.Label>DoK Realisasi SKP 1 tahun terakhir*</Form.Label>
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
              <Form.Label>Dok SK Tugas Belajar / Izin Belajar*</Form.Label>
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
              <Form.Label>Ijazah*</Form.Label>
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
          <Form.Row className="Step-3">
            <Col md={5} xs={10}>
              <Form.Label>Transkrip nilai*</Form.Label>
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
              <Form.Label>Akreditasi Program Studi*</Form.Label>
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
              <Form.Label>Uraian Tugas yang Ditetapkan Pejabat Setingkat Eselon II*</Form.Label>
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
              <FaCheckCircle style={{ marginTop: "3.2rem", marginLeft: "0.7rem" }} size="1rem" color="green" />
            </Col>
          </Form.Row>
        </Card.Body>
      </Card>
    </>
  );
}
