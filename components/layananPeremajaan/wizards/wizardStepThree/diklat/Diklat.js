import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Checkbox,
  Row,
  Col,
  Container,
  Navbar,
  Button,
  FormControl,
} from "react-bootstrap";
import styles from "./../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

export default function Diklat(props) {
  const [file, setFile] = useState("");
  const selectOptions = {
    jenisDiklat: ["--- Jenis Diklat ---", "Aaaa", "Bbb", "Ccc"],
  };
  return (
    <>
      <section className="Full-Container">
        <span>Riwayat</span>
        <Table striped borderless hover responsive>
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Nomor </th>
              <th>Tahun</th>
              <th>Nomor Diklat Sruktural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <div className="mb-3">
          <Row>
            <Col>
              <Tabs defaultActiveKey="editdata" id="uncontrolled-tab-example">
                <Tab className="mr-2" eventKey="editdata" title="Edit Data ">
                  <Container className="p-3">
                    <Form>
                      <Form.Row>
                      <Form.Group as={Col} controlId='JenisDiklat'>
                        <Form.Label>Jenis Diklat</Form.Label>
                        <Form.Control as='select'>
                        {selectOptions.jenisDiklat.map((data)=> {
                            return<option>{data}</option>
                          })}
                        </Form.Control>
                      </Form.Group>

                        <Form.Group as={Col} controlId="NomorSK">
                          <Form.Label>Nomor SK</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="NamaDiklat">
                          <Form.Label>Nama Diklat</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="TanggalSK">
                          <Form.Label>Tanggal SK</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="LamaDiklat">
                          <Form.Label>Lama Diklat</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="InstitusiPenyelenggara">
                          <Form.Label>Institusi Penyelenggara</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                      <Col md={6}>
                        <Form.Group as={Col} controlId="Tanggal Mulai">
                          <Form.Label>Tanggal Mulai</Form.Label>
                          <Form.Control type="Date" />
                        </Form.Group>
                        </Col>
                      </Form.Row>

                      <Form.Row>
                        <Col md={6}>
                          <Form.Group controlId="Tanggal Selesai">
                            <Form.Label>Tanggal Selesai</Form.Label>
                            <Form.Control type="Date" />
                          </Form.Group>
                        </Col>
                      </Form.Row>

                      <div className="wizard__showButton-buttonBox mt-3">
                        <button className="btn btn-before ml-2 mb-2">
                          Batal
                        </button>
                        <button className="btn btn-after  mb-2">Simpan</button>
                      </div>
                    </Form>
                  </Container>
                </Tab>
                <Tab
                  className="mr-2"
                  eventKey="dokumenpendukung"
                  title="Dokumen Pendukung"
                >
                  <Container className="p-3">
                    <Form>
                      <div class="form-row mt-0">
                        <div class="form-group col-md-6">
                          <label for="berkas">SK Peremajaan</label>
                          <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input  />
                            <Form.File.Label data-browse="Pilih"></Form.File.Label>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dokumen Pertek</label>
                          <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input />
                            <Form.File.Label data-browse="Pilih"></Form.File.Label>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dokumen Sertifikat Diklat*</label>
                          <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Pilih"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                      </div>
                      <div className="wizard__showButton-buttonBox mt-3">
                        <button className="btn btn-before ml-2 mb-2">
                          Batal
                        </button>
                        <button className="btn btn-after  mb-2">Simpan</button>
                      </div>
                    </Form>
                  </Container>
                </Tab>

                <Tab className="mr-2" eventKey="status" title="Status Data">
                  <Container className="p-3">
                    <h4>View Status Validasi</h4>
                    <Table striped bordered hover responsive="sm">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Kondisi</th>
                          <th>Status</th>
                          <th>Catatan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Input Data</td>
                          <td>
                            <Form.Check size="" type="checkbox" />
                          </td>
                          <td>OK</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Upload Dokumen</td>
                          <td>
                            <Form.Check size="" type="checkbox" />
                          </td>
                          <td>OK</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="wizard__showButton-buttonBox mt-5">
                      <button className="btn btn-before ml-2 mb-2">
                        Batal
                      </button>
                      <button className="btn btn-after  mb-2">Simpan</button>
                    </div>
                  </Container>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
