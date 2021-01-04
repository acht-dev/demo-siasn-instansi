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
                <Row>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm={11} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Status Kepeg</Form.Label>
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
                              <Form.Label>No. Pertek C2TH</Form.Label>
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
                              <Form.Label>TMT CPNS</Form.Label>
                              <Form.Control
                                className='form-control datetimepicker-input'
                                type='date'
                                placeholder='01/10/1986'
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
                              <Form.Label>
                                Tgl. Kep PNS Honorer &gt;= 2 Thn
                              </Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='01/10/1986'
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
                              <Form.Label>Tgl. SK CPNS</Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='01/10/1986'
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
                              <Form.Label>
                                No. Kep. PNS Honorer &gt;= 2 Thn
                              </Form.Label>
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
                              <Form.Label>No. SK CPNS</Form.Label>
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
                              <Form.Label>Karis/ Karsu</Form.Label>
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
                        <Form.Row className='align-items-center'>
                          <Col sm={5} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Jenis Pengadaan</Form.Label>
                              <Form.Control placeholder='' disabled />
                            </Form.Group>
                          </Col>
                          <Col xs='6' className='my-1'>
                            <Form.Group as={Col} className='mb-1'>
                              <Form.Label></Form.Label>
                              <Form.Control placeholder='' disabled />
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
                              <Form.Label>Karpeg</Form.Label>
                              <Form.Control placeholder='E298906' disabled />
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
                              <Form.Label>Tgl. SPMT</Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='01/10/1986'
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
                              <Form.Label>Tgl. STTPL</Form.Label>
                              <Form.Control
                                type='date'
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
                              <Form.Label>No. SPMT</Form.Label>
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
                              <Form.Label>No. STTPL</Form.Label>
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
                              <Form.Label>TMT PNS</Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='01/10/1986'
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
                              <Form.Label>Tgl. Dokter</Form.Label>
                              <Form.Control
                                type='date'
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
                              <Form.Label htmlFor='example-date-input'>
                                Tgl. SK PNS
                              </Form.Label>
                              <Form.Control
                                type='date'
                                defaultValue='2018-11-23'
                                id='example-date-input'
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
                              <Form.Label>No. Surat Dokter</Form.Label>
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
                              <Form.Label>No. SK PNS</Form.Label>
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
                              <Form.Label>
                                Nama Jabatan yang Mengangkat CPNS
                              </Form.Label>
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
                          <Col sm={5} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label htmlFor='example-date-input'>
                                Tgl. Pertek C2TH
                              </Form.Label>
                              <Form.Control
                                type='date'
                                defaultValue='2018-11-23'
                                id='example-date-input'
                                disabled
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={1}>
                            <br />
                            <br />
                            <i className='fa fa-check-circle' />
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                </Row>
              </div>
            </Tab>
            {/*TAB Dokumen Pendukung*/}
            <Tab eventKey='profile' title='DOKUMEN PENDUKUNG'>
              <Container>
                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>SK Peremajaan</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen_A.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>

                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen PerTek</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen_B.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen PNS*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen SK CPNS*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen SPMT*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Lihat'>
                        Dokumen.pdf
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen Penetapan NIP*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
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
