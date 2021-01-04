import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import {
    Form,
    Tabs,
    Tab,
    Table,
    InputGroup,
    Timesbox,
    Row,
    Col,
    Button,
    FormControl,
    Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadX9ABC() {
    return (
        <Card>
            <Card.Body>
            
        <main className={styles.main}>
            <section className={styles.container}>
                <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}

                    {/* Input 1 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>Realisasi SKP 1 Tahun terakhir*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                        <Col md={5} >
                            <Form.Label>SK Jabatan (HAKIM/PANITERA)*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                    </Form.Row>

                    {/* Judul 3 */}

                    {/* Input 3 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>SK KP Perorangan/SK Petikan*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                        <Col md={5} >
                            <Form.Label>SK KP Perorangan/SK Petikan Terakhir*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
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
                            <Form.Label>Surat Pengantar Instansi (Kolektif)*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                        <Col md={5}>
                            <Form.Label>Surat Pengantar Provinsi (Kolektif)*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
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
                            <Form.Label>Surat Pengantar Keluar Pertek KP (Kolektif)*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                        <Col md={5}>
                            <Form.Label>Pertek*</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                    </Form.Row>

                    {/* Input 6 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>Surat Pembatalan Pertek</Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        /></Col>
                        </Form.Row>
                    <br />
                </div>
            </section>
        </main>
        </Card.Body>
        </Card>
    );
}

export default UploadX9ABC;