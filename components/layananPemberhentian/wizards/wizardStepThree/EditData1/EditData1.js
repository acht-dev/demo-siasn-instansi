import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl, Card, CardBody } from "react-bootstrap";
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

function StatusData1(props) {
  const [file, setFile] = useState("");
  const selectOptions={
    tahun: ["--- Tahun ---","Aaaa", "Bbb", "Ccc"],
    golonganLama:["--- Pilih ---","Aaaa", "Bbb", "Ccc"],
    satuanKerja:["--- Pilih ---","Aaaa","Bbbb","Ccccc"],     
  };
  return (
    <>
    <section className="Full-Container">
        <div>
        <Card>
          <Card.Body>
            <Form>
                    <Form.Row>
                  <Col className='mr-4 mt-3'>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label>Jenis Jabatan</Form.Label>
                      <Form.Control as='select'>
                        <option>Fungsional Umum</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          KPPN
                        </Form.Label>
                        <Form.Control
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder=''
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder=''
                            required
                          />
                          <Iconsearch></Iconsearch>
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
                          <Form.Control
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder=''
                            className=''
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Control
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder=''
                            className=''
                          />
                        </Col>
                        <Iconsearch></Iconsearch>
                      </Form.Row>
                    </Form.Row>
                  </Col>
                  <Col className='ml-4'>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          Kanreg
                        </Form.Label>
                        <Form.Control
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder=''
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder=''
                            required
                          />
                          <Iconsearch></Iconsearch>
                        </div>
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Unit Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>Kantor Verifikasi Anggaran</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                </Form.Row>


                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>TASPEN</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Control as='select'>
                        <option>Fungsional Umum</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  
                  </Form.Row>
                  <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            <br />
      </Form>
          </Card.Body>
        </Card>
        </div>
        </section>

    </>
  );
}

export default StatusData1;
