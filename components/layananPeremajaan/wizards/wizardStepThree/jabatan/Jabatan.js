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
import Iconsearch from "./Iconsearch";
import React, { useState } from "react";

function Jabatan() {
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
      {/* Component input detail */}

      <div className='mb-3'>
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
                          <Col sm className='my-1'>
                            <Form.Group controlId='exampleForm.ControlSelect1'>
                              <Form.Label>Jenis Jabatan</Form.Label>
                              <Form.Control as='select'>
                                <option>---Pilih Jenis Jabatan---</option>
                                <option>Jabatan 1</option>
                                <option>Jabatan 2</option>
                                <option>Jabatan 3</option>
                              </Form.Control>
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
                          <Col sm={6} className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>J. Fungsional</Form.Label>
                              <Form.Control type='text' placeholder='' />
                            </Form.Group>
                          </Col>
                          <Col xs='6' className='my-1'>
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
                          <Form.Group
                            as={Col}
                            md='5'
                            controlId='validationCustom03'>
                            <Form.Label>Instansi Kerja</Form.Label>
                            <Form.Control type='text' placeholder='' required />
                            <Form.Control.Feedback type='invalid'>
                              Please provide a valid city.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md='7'
                            controlId='validationCustom04'>
                            <Form.Label></Form.Label>
                            <div class='mt-2' style={{ display: "flex" }}>
                              <Form.Control
                                style={{ width: "80%" }}
                                type='text'
                                placeholder=''
                                required
                              />
                              <Iconsearch></Iconsearch>
                            </div>

                            {/* <span class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search this blog"/> */}
                            {/* </span> */}
                          </Form.Group>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <Form>
                        <Form.Row>
                          <Col sm='6' className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>J. F. Umum</Form.Label>
                              <Form.Control type='text' placeholder='' />
                            </Form.Group>
                          </Col>
                          <Col xs='6' className='my-1'>
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
                              <Form.Label>Satuan Kerja</Form.Label>
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
                          <Col sm className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>TMT Jabatan</Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='Date of Birth'
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
                          <Form.Group
                            as={Col}
                            md='5'
                            controlId='validationCustom03'>
                            <Form.Label>Unit Organisasi</Form.Label>
                            <Form.Control type='text' placeholder='' required />
                            <Form.Control.Feedback type='invalid'>
                              Please provide a valid city.
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md='7'
                            controlId='validationCustom04'>
                            <Form.Label></Form.Label>
                            <div class='mt-2' style={{ display: "flex" }}>
                              <Form.Control
                                style={{ width: "80%" }}
                                type='text'
                                placeholder=''
                                required
                              />
                              <Iconsearch></Iconsearch>
                            </div>

                            {/* <span class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search this blog"/> */}
                            {/* </span> */}
                          </Form.Group>
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
                              <Form.Label>Tanggal SK</Form.Label>
                              <Form.Control
                                type='date'
                                placeholder='Date of Birth'
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
                          <Col sm className='my-1'>
                            <Form.Group as={Col}>
                              <Form.Label>Unit Organisasi Induk</Form.Label>
                              <FormControl type='text' placeholder='' />
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
                              <Form.Label>Nomor SK</Form.Label>
                              <FormControl type='text' placeholder='' />
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
                              <Form.Label>Jenis Struktural</Form.Label>
                              <FormControl type='text' placeholder='' />
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
                              <Form.Label>Nomor Unor</Form.Label>
                              <FormControl type='text' placeholder='' />
                            </Form.Group>
                          </Col>
                        </Form.Row>
                      </Form>
                    </span>
                  </Col>
                </Row>
              </Container>
              <div className='wizard__inputForm-buttonBox mt-3 ml-3'>
                <Button
                  className='wizard__formButtonReset mr-3'
                  type='button'
                  onClick={handleReset}>
                  BATAL
                </Button>

                <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
                  SIMPAN
                </Button>
              </div>
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
                  <label for='berkas'>Dokumen SK Jabatan*</label>
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
                <div class='form-group col-md-6'>
                  <label for='berkas'>Dokumen Surat Pelantikan*</label>
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

            <div className='wizard__inputForm-buttonBox mt-3 ml-3'>
              <Button
                className='wizard__formButtonReset mr-3'
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
            <div className='wizard__inputForm-buttonBox mt-3 ml-3'>
              <Button
                className='wizard__formButtonReset mr-3'
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
    </>
  );
}
export default Jabatan;
