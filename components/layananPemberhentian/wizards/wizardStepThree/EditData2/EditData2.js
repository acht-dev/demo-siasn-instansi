import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl, Card, CardBody } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

export default function EditData2() {
  return (
    <>
      <section className="Full-Container">
        <div>
          <Card>
            <Card.Body>
              <Form>
                <Form.Row className="Step-3">
                  <Col md={6}>TMT CPNS & PNS</Col>
                  <Col md={6} className="paddingLeft">Masa Kerja Pensiun</Col>
                </Form.Row>

                {/* input 1 */}
                <Form.Row className="Step-3">
                  <Col md={3}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT CPNS
                      </Form.Text>
                  </Col><Col md={3}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT PNS
                      </Form.Text>
                  </Col>
                  <Col md={2} className="paddingRight">
                    <Form.Control></Form.Control><Form.Text className="text-muted">
                      Tahun
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingRight">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Bulan
                        </Form.Text>
                  </Col><Col md={2}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT Pensiun
                      </Form.Text>
                  </Col>
                </Form.Row>

                {/* Judul 2 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Golongan Sekarang</Col>
                  <Col md={6} className="paddingLeft">Masa Kerja PNS</Col>
                </Form.Row>

                {/* Input 2 */}
                <Form.Row className="Step-3">
                  <Col md={1}>
                    <div class="form-row mt-0">
                      <select
                        class="custom-select form-control"
                        id="jabatanLama"
                      >
                        <option selected>III/d</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <Form.Text className="text-muted">
                      Golongan
                        </Form.Text>
                  </Col>
                  <Col md={2}>
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Nama Pangkat
                        </Form.Text>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT Golongan
                        </Form.Text>
                  </Col>

                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Tahun
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Bulan
                        </Form.Text>
                  </Col>
                </Form.Row>

                {/* Judul 3 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Gaji</Col>
                  <Col md={6} className="paddingLeft">Pendidikan Pertama PNS</Col>
                </Form.Row>

                {/* Input 3 */}
                <Form.Row className="Step-3">
                  <Col md={4} className="paddingRight">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Gaji Pokok Terakhir
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingRight">
                    <div class="form-row mt-0">
                      <select
                        class="custom-select form-control"
                        id="jabatanLama"
                      >
                        <option selected>2015</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <Form.Text className="text-muted">
                      Tahun Gaji
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Pendidikan
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Tahun Lulus
                        </Form.Text>
                  </Col>
                </Form.Row>

                {/* Judul 2 */}
                <Form.Row className="Step-3">
                  <Col md={6}>KP Pengabdian</Col>
                  <Col md={6} className="paddingLeft">Gelar</Col>
                </Form.Row>

                {/* Input 2 */}
                <Form.Row className="Step-3">
                  <Col md={1}>
                    <div class="form-row mt-0">
                      <select
                        class="custom-select form-control"
                        id="jabatanLama"
                      >
                        <option selected>Ya</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <Form.Text className="text-muted">
                      Diusulkan?
                        </Form.Text>
                  </Col>
                  <Col md={2}>
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Golongan Baru
                        </Form.Text>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT KPP
                        </Form.Text>
                  </Col>

                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Gelar Depan
                        </Form.Text>
                  </Col>
                  <Col md={2} className="paddingLeft">
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Gelar Belakang
                        </Form.Text>
                  </Col>
                </Form.Row>

                {/* Judul 2 */}
                <Form.Row className="Step-3">
                  <Col md={6}>Masa Kerja Golongan</Col>
                </Form.Row>

                {/* Input 2 */}
                <Form.Row className="Step-3">
                  <Col md={1}>
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Tahun
                        </Form.Text>
                  </Col>
                  <Col md={2}>
                    <Form.Control></Form.Control>
                    <Form.Text className="text-muted">
                      Bulan
                        </Form.Text>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                    /><Form.Text className="text-muted">
                      TMT Golongan Baru
                        </Form.Text>
                  </Col>
                </Form.Row>
                <div className='wizard__showButton-buttonBox mt-5'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>
                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div>
              </Form>
              <br />
            </Card.Body>
          </Card>
        </div>
      </section>

    </>
  );
}
