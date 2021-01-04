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
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function VerifikasiData() {
  return (
    <>
      {/* Component input detail */}
      <div className='wizard__inputDetail mb-3'>
        <div>
          <Tabs
            defaultActiveKey='home'
            transition={false}
            id='noanim-tab-example'>
            <Tab eventKey='home' title='EDIT DATA'>
              {/*Form*/}
              <div>
                <Container>
                  <Row>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group controlId='exampleForm.ControlSelect1'>
                                <Form.Label>Jenis Jabatan</Form.Label>
                                <Form.Control as='select' disabled>
                                  <option>---Pilih Jenis Jabatan---</option>
                                  <option>Jabatan 1</option>
                                  <option>Jabatan 2</option>
                                  <option>Jabatan 3</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={5} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>J. Fungsional</Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col xs='6' className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>&nbsp;</Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <div className='w-100'></div>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Form.Group
                              as={Col}
                              md='5'
                              controlId='validationCustom03'>
                              <Form.Label>Instansi Kerja</Form.Label>
                              <Form.Control
                                type='text'
                                placeholder=''
                                required
                                disabled
                              />
                              <Form.Control.Feedback type='invalid'>
                                Please provide a valid city.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md='6'
                              controlId='validationCustom04'>
                              <Form.Label></Form.Label>
                              <div class='mt-2' style={{ display: "flex" }}>
                                <Form.Control
                                  style={{ width: "80%" }}
                                  type='text'
                                  placeholder=''
                                  required
                                  disabled
                                />
                              </div>

                              {/* <span class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search this blog"/> */}
                              {/* </span> */}
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md='1'
                              controlId='validationCustom03'>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm='5' className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>J. F. Umum</Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col xs='6' className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>&nbsp;</Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <div className='w-100'></div>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Satuan Kerja</Form.Label>
                                <Form.Control
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>TMT Jabatan</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder='Date of Birth'
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <div className='w-100'></div>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Form.Group
                              as={Col}
                              md='5'
                              controlId='validationCustom03'>
                              <Form.Label>Unit Organisasi</Form.Label>
                              <Form.Control
                                type='text'
                                placeholder=''
                                required
                                disabled
                              />
                              <Form.Control.Feedback type='invalid'>
                                Please provide a valid city.
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                              as={Col}
                              md='6'
                              controlId='validationCustom04'>
                              <Form.Label></Form.Label>
                              <div class='mt-2' style={{ display: "flex" }}>
                                <Form.Control
                                  style={{ width: "80%" }}
                                  type='text'
                                  placeholder=''
                                  required
                                  disabled
                                />
                              </div>
                              {/* <span class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search this blog"/> */}
                              {/* </span> */}
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md='1'
                              controlId='validationCustom03'>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Tanggal SK</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder='Date of Birth'
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <div className='w-100'></div>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Unit Organisasi Induk</Form.Label>
                                <FormControl
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Nomor SK</Form.Label>
                                <FormControl
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <div className='w-100'></div>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Jenis Struktural</Form.Label>
                                <FormControl
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm={11} className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Nomor Unor</Form.Label>
                                <FormControl
                                  type='text'
                                  placeholder=''
                                  disabled
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <br />
                              <br />
                              <i className='fa fa-check-circle' />
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
            {/*TAB Dokumen Pendukung*/}
            <Tab eventKey='profile' title='DOKUMEN PENDUKUNG'>
              <Container>
                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>SK Peremajaan</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>

                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen PerTek</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen SK Jabatan*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen Surat Pelantikan*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input disabled />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>
              </Container>
            </Tab>
            {/*TAB Status Data*/}
            <Tab eventKey='contact' title='STATUS DATA'>
              <div>
                <br />
                <h4 className='h4-tab'>View Status Validasi</h4>
                <br />
                <Table striped bordered hover responsive='sm'>
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
                        <Form.Check size='' type='checkbox' />
                      </td>
                      <td>OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Upload Dokumen</td>
                      <td>
                        <Form.Check size='' type='checkbox' />
                      </td>
                      <td>OK</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default VerifikasiData;
