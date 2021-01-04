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
import Image from "next/image";

export default function Golongan(props) {
  const selectOptions = {
    jenisKP: ["Jenis KP","1", "2","3"],
  };
  return (
    <>
      <div className='mb-3'>
        <Row>
          <Col>
            <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
              <Tab className='mr-2' eventKey='editdata' title='Edit Data '>
                <Container className='p-3'>
                  <Form>
                    <Form.Row>
                    <Form.Group as={Col} controlId='Golongan'>
                        <Form.Label>Golongan</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control
                            type='text'
                            placeholder='22'
                            className='mr-4' disabled
                          />
                          <Form.Control type='text' placeholder='0' disabled/>
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} controlId='TanggalBKN'>
                        <Form.Label>Tanggal BKN</Form.Label>
                        <Form.Control type='date' disabled/>
                      </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                      <Form.Group as={Col} controlId='MasaGolongan'>
                        <Form.Label>Masa Golongaan Kerja Tahun</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='' disabled
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TMT Golongan'>
                        <Form.Label>TMT Golongan</Form.Label>
                        <Form.Control type='date' disabled />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='KerjaBulan'>
                        <Form.Label>NIP Lama</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='' disabled
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NOBKN'>
                        <Form.Label>Nomor BKN</Form.Label>
                        <Form.Control type='text' placeholder='' disabled />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='GelarDepan'>
                        <Form.Label>Nomor SK</Form.Label>
                        <Form.Control type='text' disabled/>
                      </Form.Group>

                      <Form.Group as={Col} controlId='JenisKP'>
                        <Form.Label>Jenis KP</Form.Label>
                        <Form.Control disabled as='select'>
                        {selectOptions.jenisKP.map((data)=> {
                            return<option>{data}</option>
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='Masa Kerja Bulan'>
                          <Form.Label>Masa Kerja Bulan</Form.Label>
                          <Form.Control
                            type='Date' disabled
                          />
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
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Pertek</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled  />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen SK KP</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Pertimbangan Teknis KP</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
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
