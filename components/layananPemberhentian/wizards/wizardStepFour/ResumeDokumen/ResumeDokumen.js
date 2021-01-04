import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, Card, Col, InputGroup, Checkbox, Row, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";
import UploadY3B from "../uploadDokumen/UploadY3B";
import UploadY4ABC from "../uploadDokumen/UploadY4ABC";
import UploadY6ABC from "../uploadDokumen/UploadY6ABC";
import UploadZ101112B from "../uploadDokumen/UploadZ101112B";

import "bootstrap/dist/css/bootstrap.min.css";
// icon ceklis verifikasi step4
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function ResumeDokumen(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <section className="Full-Container">
        <div>
                  <Card>
                      <Card.Body></Card.Body>
                      <Form.Row className="Step-3 align-items-center">
                          <Col md={5}>
                              <Form.Label>Daftar Perorangan Calon Penerima Pensiun (DPCP)
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
                              <Form.Label> SK Pengangkatan Pertama dlm Jabatan Fungsional
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
                      <Form.Row className="Step-3 align-items-center">
                          <Col md={5}>
                              <Form.Label> SP Pemberhentian sbg PNS Instansi Kolektif
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
                            <Form.Label>SK Pemberhentian Sementara
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
                            <Form.Label> Surat Permohonan Berhenti Sebagai PNS
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
                            <Form.Label>SK Penaikan Pangkat Sesuai Ijazah
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
                            <Form.Label>Srt Pernyataan tdk Sedang Menjalani Proses Pidana/Pernah Dipidana
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
                            <Form.Label>SK Pengangkatan, Pemindahan dan Pemberhentian Jabatan</Form.Label>
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
                        <Col md={5}>
                            <Form.Label>Surat Keputusan CPNS
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
                            <Form.Label>SK CLTN
          
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
                                Surat Keputusan Kenaikan Pangkat Terakhir
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
                             Surat Keputusan Penunjauan Masa Kerja
          
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

export default ResumeDokumen;
