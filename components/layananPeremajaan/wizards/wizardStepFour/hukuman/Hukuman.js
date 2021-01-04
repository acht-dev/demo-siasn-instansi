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
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

export default function Hukuman(props) {
  return (
    <>
      <section className='Full-Container'>
        <div className='mb-3'>
          <Row>
            <Col>
              <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
                <Tab className='mr-2' eventKey='editdata' title='Edit Data '>
                  <Container className='p-3'>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} md='5' controlId='Jenis Hukuman'>
                          <Form.Label>Jenis Hukuman</Form.Label>
                          <div
                            style={{
                              display: "flex",
                            }}>
                            <Form.Control
                              type='text'
                              placeholder='22'
                              className='mr-4'
                              disabled
                            />
                            <Form.Control
                              type='text'
                              placeholder='0'
                              disabled
                            />
                          </div>
                        </Form.Group>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />

                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='Gol Ruang'
                          className='ml-4'>
                          <Form.Label>Gol/Ruang</Form.Label>
                          <Form.Control type='date' disabled />
                        </Form.Group>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md='5' controlId='NO SK'>
                          <Form.Label>NO SK HD</Form.Label>
                          <Form.Control type='text' placeholder='' disabled />
                        </Form.Group>

                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='NO PP'
                          className='ml-4'>
                          <Form.Label>NO PP</Form.Label>
                          <Form.Control type='text' disabled />
                        </Form.Group>

                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md='5' controlId='TanggalSK'>
                          <Form.Label>Tanggal SK HD</Form.Label>
                          <Form.Control type='Date' disabled />
                        </Form.Group>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />

                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='AlasaanHuk'
                          className='ml-4'>
                          <Form.Label>Alasan Hukuman</Form.Label>
                          <Form.Control type='text' disabled />
                        </Form.Group>

                        <FaTimesCircle
                          size='1rem'
                          color='red'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md='5' controlId='Masa Hukuman'>
                          <Form.Label>Masa Hukuman</Form.Label>
                          <div
                            style={{
                              display: "flex",
                            }}>
                            <Form.Control
                              type='text'
                              placeholder='22'
                              className='mr-4'
                              disabled
                            />
                            <Form.Control
                              type='text'
                              placeholder='0'
                              disabled
                            />
                          </div>
                        </Form.Group>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />

                        <Form.Group
                          as={Col}
                          md='5'
                          controlId='AlasaanHuk'
                          className='ml-4'>
                          <Form.Label></Form.Label>
                          <Button variant='light' disabled>
                            Pengaktifan Kembali
                          </Button>
                        </Form.Group>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                      </Form.Row>

                      <Form.Row>
                        <Col md={5}>
                          <Form.Group controlId='AkhirHuk'>
                            <Form.Label>Akhir Hukuman</Form.Label>
                            <Form.Control type='Date' disabled />
                          </Form.Group>
                        </Col>

                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
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
                        <div class='form-group col-md-5'>
                          <label for='berkas'>SK Peremajaan</label>
                          <Form.File id='formcheck-api-custom' custom>
                            <Form.File.Input disabled />
                            <Form.File.Label data-browse='View'></Form.File.Label>
                          </Form.File>
                        </div>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                        <div class='form-group col-md-5 ml-4'>
                          <label for='berkas'>Dokumen Pertek</label>
                          <Form.File id='formcheck-api-custom' custom>
                            <Form.File.Input disabled />
                            <Form.File.Label data-browse='View'></Form.File.Label>
                          </Form.File>
                        </div>
                        <FaTimesCircle
                          size='1rem'
                          color='red'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
                        <div class='form-group col-md-5'>
                          <label for='berkas'>
                            Dokumen SK Hukuman Disiplin*
                          </label>
                          <Form.File id='formcheck-api-custom' custom>
                            <Form.File.Input disabled />
                            <Form.File.Label data-browse='View'></Form.File.Label>
                            <Form.Control.Feedback type='invalid'>
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <FaCheckCircle
                          size='1rem'
                          color='green'
                          as={Col}
                          md='1'
                          style={{ marginTop: "2rem" }}
                        />
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
