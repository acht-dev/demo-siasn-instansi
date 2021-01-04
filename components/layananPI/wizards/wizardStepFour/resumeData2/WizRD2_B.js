import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

export default function WizRD2_B() {
  return (
    <>
      <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jab. Fungsional Umum Baru</Col>
                      <Col md={1}></Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled placeholder="6073"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control disabled placeholder="Pendidikan dan Kebudayaan"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Asal</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="4168/0832"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="10/10/2014"
                          disabled
                        />
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Asal (Prov)</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder=""></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          disabled
                          placeholder="10/10/2014"
                        />
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Tujuan</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="824.3/1353/BKD"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          disabled
                          placeholder="10/10/2014"
                        />
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Tujuan (Prov)</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="-"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          disabled
                          placeholder="10/10/2014"
                        />
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>

                    
      
                    <br />
                  </div>
                </section>
              </main>
    </>
  );
}
