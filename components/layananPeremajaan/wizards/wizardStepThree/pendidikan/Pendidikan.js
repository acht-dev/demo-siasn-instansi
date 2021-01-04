import {
  striped,
  bordered,
  hover,
  Table,
  responsive,
  Form,
  Container,
  Row,
  Col,
  Tab,
  Tabs,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Pendidikan(props) {
  function Pendidikan() {}

  return (
    <>
      <span>Riwayat</span>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type='checkbox' />
            </th>
            <th>Nomor SK</th>
            <th>Tanggal SK</th>
            <th>Kredit Utama</th>
            <th>Kredit Penunjang</th>
            <th>Total Kredit</th>
            <th>Jabatan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Container>
        <Row className='bottom-main'>
          <Col>Menampilkan 1-5 dari 8 entri</Col>
          <Col md='0'>Pertama</Col>
          <Col md='auto'>Sebelumnya</Col>
          <Col md='auto'>01</Col>
          <Col md='auto'>02</Col>
          <Col md='auto'>Berikutnya</Col>
          <Col md='auto'>Terakhir</Col>
        </Row>
      </Container>
      <br></br>

      <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
        <Tab eventKey='editdata' title='Edit Data'>
          <Card>
            <Card.Body>
              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='aaa'>Pendidikan</label>
                  <Form.Control type='text' placeholder='' />
                </div>
                <div class='form-group col-md-6'>
                  <label for='bbb'>Tingkat Pendidikan</label>
                  <Form.Control type='text' placeholder='' />
                </div>
              </div>

              <div class='form-group mt-0 mb-0'>
                <div class='row'>
                  <div class='col'>
                    <label for='noSKBKN'>Tanggal Lulus</label>
                  </div>
                  <div class='col'>
                    <label for='TMT'>Tahun Lulus</label>
                  </div>
                </div>
                <div class='form-row mt-0'>
                  <div class='form-group col-md-2 col'>
                    <Form.Control type='text' placeholder='' />
                  </div>
                  <div class='form-group col-md-4 col'>
                    <Form.Control type='text' placeholder='' />
                  </div>
                  <div class='form-group col-md-6'>
                    <Form.Control type='text' placeholder='' />
                  </div>
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='aaa'>Nomor Ijazah</label>
                  <Form.Control type='text' placeholder='' />
                </div>
                <div class='form-group col-md-6'>
                  <label for='bbb'>Nama Sekolah</label>
                  <Form.Control type='text' placeholder='' />
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='aaa'>Gelar Depan</label>
                  <Form.Control type='text' placeholder='' />
                </div>
                <div class='form-group col-md-6'>
                  <label for='bbb'>Gelar Belakang</label>
                  <Form.Control type='text' placeholder='' />
                </div>
              </div>

              <div className='wizard__showButton-buttonBox'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='dokumenpendukung' title='Dokumen Pendukung'>
          <Card>
            <Card.Body>
              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Peremajaan</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input />
                    <Form.File.Label data-browse='Pilih'>
                      Pilih Berkas
                    </Form.File.Label>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Dokumen PerTek</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input />
                    <Form.File.Label data-browse='Pilih'>
                      Pilih Berkas
                    </Form.File.Label>
                  </Form.File>
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Dokumen SK Pencatuman Gelar*</label>
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
                  <label for='berkas'>Transkrip Nilai*</label>
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

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Ijazah*</label>
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

              <div className='wizard__showButton-buttonBox'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='status' title='Status'>
          <Card>
            <Card.Body>
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

              <div className='wizard__showButton-buttonBox'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
      
      <br></br>
    </>
  );
}
