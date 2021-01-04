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
import Iconsearch from "./Iconsearch";
// icon ceklis verifikasi step4
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


function ResumeData1(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <section className="Full-Container">
        <div>
          <Card>
            <Card.Body>
            <Form>
                <Form.Row>
                <Col md={6}>
                    <Form.Label className='mt-3'>Jenis Jabatan</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Fungsional Umum'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  
                  <Col>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          KPPN
                        </Form.Label>
                        <Form.Control disabled
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder='31563'
                          className=''
                        />
                      </Col>
                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control disabled
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder='Surabaya'
                            required
                          /><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                          {/* <i className='fa fa-check-circle' /> */}
                        </div> 
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Row>
                      <Col md={8}><Form.Label className='mt-3'>
                        Jabatan Fungsional Umum
                        </Form.Label></Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Row>
                        <Col md={4}>
                          <Form.Control disabled
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder='785856'
                            className=''
                          />
                        </Col>
                        <Col md={7}>
                          <Form.Control disabled
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder='Staff'
                            className=''
                          />
                        </Col><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                      </Form.Row>
                    </Form.Row>
                  </Col>
                  <Col className='ml-4'>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          Kanreg
                        </Form.Label>
                        <Form.Control disabled
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder='02'
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control disabled
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder='Kantor Regional II BKN'
                            required
                          /><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                        </div>
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Unit Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='DINAS PENDIDIKAN'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>Kantor Verifikasi Anggaran</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>


                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>TASPEN</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <Form.Label className='mt-3'>Satuan Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Pemerintah Kota Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        
        </div>
      </section>
    </>
  );
}

export default ResumeData1;
