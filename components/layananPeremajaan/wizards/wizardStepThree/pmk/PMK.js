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
  Card,
  FormControl,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";

function PMK() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };
  return (
    <>
      {/* Component form input detail */}
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
                    <Col className='mt-3'>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm='5' className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Jenis PMK</Form.Label>
                                <Form.Control as='select'>
                                  <option></option>
                                  <option>Form 1</option>
                                  <option>Form 2</option>
                                  <option>Form 3</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col className='mt-3'>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm className='MarginLeft'>
                              <Form.Group as={Col}>
                                <Form.Label>Tgl. SK</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder=''
                                  name='dob'
                                />
                              </Form.Group>
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
                            <Col sm className='MarginLeft'>
                              <Form.Group as={Col}>
                                <Form.Label>Instansi/ Perusahaan</Form.Label>
                                <Form.Control type='text' placeholder='' />
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm='5' className='MarginLeft'>
                              <Form.Group as={Col}>
                                <Form.Label>Masa Kerja</Form.Label>
                                <Form.Control type='text' placeholder='' />
                              </Form.Group>
                            </Col>
                            <Col sm='7' className='MarginLeft'>
                              <Form.Group as={Col}>
                                <Form.Label>&nbsp;</Form.Label>
                                <Form.Control type='text' placeholder='' />
                              </Form.Group>
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
                            <Col sm className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Tanggal Awal</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder=''
                                  name='dob'
                                />
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>No. BKN</Form.Label>
                                <Form.Control type='text' />
                              </Form.Group>
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
                            <Col sm className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Tanggal Akhir</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder=''
                                  name='dob'
                                />
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <Form>
                          <Form.Row>
                            <Col sm className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>Tanggal BKN</Form.Label>
                                <Form.Control
                                  type='date'
                                  placeholder=''
                                  name='dob'
                                />
                              </Form.Group>
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
                            <Col sm='6' className='my-1'>
                              <Form.Group as={Col}>
                                <Form.Label>No. Surat Keputusan</Form.Label>
                                <Form.Control type='text' placeholder='' />
                              </Form.Group>
                            </Col>
                          </Form.Row>
                        </Form>
                      </span>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className='wizard__inputForm-buttonBox mt-3 ml-4'>
                <Button
                  className='wizard__formButtonReset mr-3 '
                  type='button'
                  onClick={handleReset}>
                  BATAL
                </Button>

                <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
                  SIMPAN
                </Button>
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
                      <Form.File.Label data-browse='Pilih'>
                        Pilih Berkas
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>

                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen PerTek</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input />
                      <Form.File.Label data-browse='Pilih'>
                        Pilih Berkas
                      </Form.File.Label>
                      <Form.Control.Feedback type=''></Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='berkas'>Dokumen SK PMK*</label>
                    <Form.File id='formcheck-api-custom' custom>
                      <Form.File.Input isInvalid />
                      <Form.File.Label data-browse='Pilih'>
                        Pilih Berkas
                      </Form.File.Label>
                      <Form.Control.Feedback type='invalid'>
                        *Mohon Unggah Berkas
                      </Form.Control.Feedback>
                    </Form.File>
                  </div>
                </div>
              </Container>
              <div className='wizard__inputForm-buttonBox mt-3'>
                <Button
                  className='wizard__formButtonReset'
                  type='button'
                  onClick={handleReset}>
                  BATAL
                </Button>

                <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
                  SIMPAN
                </Button>
              </div>
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
              <div className='wizard__inputForm-buttonBox mt-3'>
                <Button
                  className='wizard__formButtonReset'
                  type='button'
                  onClick={handleReset}>
                  BATAL
                </Button>

                <Button
                  className='mr-4 wizard__formButtonSubmit'
                  type='submit'
                  onClick={handleSubmit}>
                  SIMPAN
                </Button>
              </div>
              <div>
                <Row>
                  <Col>&nbsp;</Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
export default PMK;
