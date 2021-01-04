import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import styles from "../../../../../styles/Home.module.css";
function Tnipcpns(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
                    <Form>
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Bukti Pengalaman Kerja</Form.Label>
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
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Keterangan Catatan Kerja</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Kesehatan</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Bebas Narkoba</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen4.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                    
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Usul Penetapan NIP</Form.Label>
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
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Usul Pengantar Kolektif</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                    
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Surat Pernyataan Rencana Penempatan</Form.Label>
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
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok Persetujuan Teknis NIP</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok SK CPNS Kolektif</Form.Label>
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
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok SK CPNS Perorangan/Petikan</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                    <Form.Row className="form-group">
                    <Col xs={12} md={5}>
                        <Form.Label>Dok SK PNS Kolektif</Form.Label>
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
                    <span className="mr-5"></span>
                    <Col xs={12} md={5}>
                        <Form.Label>Dok SK PNS Peroranga/Petikan</Form.Label>
                        <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                        <InputGroup>
                            <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                            <InputGroup.Append>
                            <InputGroup className="icon-size">
                                <Button className="buttonLihat">View</Button>
                            </InputGroup>
                            </InputGroup.Append>
                        </InputGroup>
                        </a>
                    </Col>
                    </Form.Row>
                      <div className="wizard__showButton-buttonBox mt-3">
                        <button className="btn btn-before ml-2 mb-2">
                          Batal
                        </button>
                        <button className="btn btn-after  mb-2">Simpan</button>
                      </div>
                  </Form>
                </div>
        </section>
      </main>
    </>
  );
}

export default Tnipcpns;
