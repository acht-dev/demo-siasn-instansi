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


function ResumeData2(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <section className="Full-Container">
        <div>
          <Card>
            <Card.Body>
            <Form.Row className="Step-3">
                      <Col md={6}>TMT CPNS & PNS</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja Pensiun</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                    <Col md={2}>
                    <Form.Control disabled></Form.Control>
                    <Form.Text className="text-muted">
                        TMT CPNS
                      </Form.Text>
                      </Col><Col md={3}>
                      <Form.Control disabled></Form.Control>
                    <Form.Text className="text-muted">
                        TMT PNS
                      </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled></Form.Control><Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col><Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Pensiun
                      </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Golongan Sekarang</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja PNS</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Golongan
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Nama Pangkat
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Golongan
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Gaji</Col>
                      <Col md={6} className="paddingLeft">Pendidikan Pertama PNS</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={3} className="paddingRight">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Gaji Pokok Terakhir
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingRight">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun Gaji
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Pendidikan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Tahun Lulus
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>KP Pengabdian</Col>
                      <Col md={6} className="paddingLeft">Gelar</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Diusulkan?
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Golongan Baru
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT KPP
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Depan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Belakang
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Masa Kerja Golongan</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Golongan Baru
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}

export default ResumeData2;
