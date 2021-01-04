import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";

export default function Profesi() {
  return (
    <>
      <div className='mb-3'>
        <Row>
          <Col>
            <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
              <Tab className='mr-2' eventKey='editdata' title='Edit Data'>
                <Container className='p-3'>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId='Profesi'>
                        <Form.Label>Profesi</Form.Label>
                        <div
                          className='form__input'
                          style={{ display: "flex" }}>
                          <Form.Control disabled type='text' className='mr-3' />
                          <InputGroup>
                            <Form.Control disabled type='text' />
                            <InputGroup.Append>
                              <Button
                                variant='outline-secondary'
                                style={{
                                  backgroundColor: "#EAEAEA",
                                  height: "40px",
                                }}>
                                <svg
                                  className='mb-2'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='1.2rem'
                                  height='1.2rem'
                                  viewBox='0 0 35.997 36.004'>
                                  <path
                                    id='Icon_awesome-search'
                                    data-name='Icon awesome-search'
                                    d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                    fill='#2d3c6c'
                                  />
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </Form.Group>

                      <Form.Group as={Col} controlId='TahunLulus'>
                        <Form.Label>Tahun Lulus</Form.Label>
                        <Form.Control disabled type='text' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='Penyelenggara'>
                          <Form.Label>Penyelenggara</Form.Label>
                          <Form.Control disabled type='text' />
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                  </Form>
                </Container>
              </Tab>

              <Tab
                className='mr-2'
                eventKey='dokumenpendukung'
                title='Dokumen Pendukung'>
                <Container className='p-3'>
                  <Form>
                    <div class='form-row mt-0'>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>SK Peremajaan</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Pertek</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen SK Profesi*</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                          <Form.Control.Feedback type='invalid'>
                            *Mohon Unggah Berkas
                          </Form.Control.Feedback>
                        </Form.File>
                      </div>
                    </div>
                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                  </Form>
                </Container>
              </Tab>

              <Tab className='mr-2' eventKey='status' title='Status Data'>
                <Container className='p-3'>
                  <h4>View Status Validasi</h4>
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
                  <div className='wizard__showButton-buttonBox mt-5'>
                    <button className='btn btn-before ml-2 mb-2'>Batal</button>
                    <button className='btn btn-after  mb-2'>Simpan</button>
                  </div>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    </>
  );
}
