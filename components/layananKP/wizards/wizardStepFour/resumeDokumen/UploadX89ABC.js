import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row, Card, InputGroup } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
export default function UploadX89ABC() {
  return (
    <>
      <Card>
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
            <Col md={5} xs={10} className="mb-4">
              <Form.Label>Kepres tentang penemuan baru*</Form.Label>
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
              <Form.Label>DOK SK JABATAN (HAKIM/PANITERA)*</Form.Label>
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
        </Card.Body>
      </Card>
    </>
  );
}
