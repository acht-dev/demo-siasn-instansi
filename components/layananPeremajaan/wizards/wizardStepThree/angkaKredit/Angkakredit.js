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
import Iconsearch from "./Iconsearch";

export default function AngkaKredit(props) {
  const selectOptions = {
    bulanMulai: [
      "--- Pilih Bulan Mulai ---",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    bulanSelesai: [
      "--- Pilih Bulan Selesai ---",
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
  };

  return (
    <>
      <br></br>

      <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
        <Tab eventKey='editdata' title='Edit Data'>
          <Card>
            <Card.Body>
              <form>
                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='aaa'>Nomor SK PAK</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='bbb'>Total Kredit Baru</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='a'>Bulan Mulai Penilaian</label>
                    <select class='custom-select form-control' id='bulanMulai'>
                      {selectOptions.bulanMulai.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </select>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='a'>Tgl. SK PAK</label>
                    <div class='input-group'>
                      <Form.Control type='date' name='dob' placeholder='' />
                    </div>
                    <InputGroup className='mb-1'>
                      <Form.Check size='' type='checkbox' />
                      <small id='text-optional' class='form-text text-muted'>
                        &nbsp; Angka Kredit Pertama
                      </small>
                    </InputGroup>
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='a'>Bulan Selesai Penilaian</label>
                    <select
                      class='custom-select form-control'
                      id='bulanSelesai'>
                      {selectOptions.bulanSelesai.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </select>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='bbb'>Tahun Mulai Penilaian</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='aaa'>Kredit Utama Baru</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='bbb'>Tahun Selesai Penilaian</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                </div>

                <div class='form-row mt-0'>
                  <div class='form-group col-md-6'>
                    <label for='aaa'>Kredit Penunjang Baru</label>
                    <Form.Control type='text' placeholder='' />
                  </div>
                  <div class='form-group col-md-6'>
                    <div class='col'>
                      <label for='aaa'>Jabatan</label>
                      <InputGroup className='mb-1'>
                        <FormControl
                          placeholder=''
                          type='text'
                          aria-label="Recipient's username"
                          aria-describedby='basic-addon2'
                        />
                        <Iconsearch></Iconsearch>
                      </InputGroup>
                      <small id='text-optional' class='form-text text-muted'>
                        Jika belum ada jabatan silahkan tambahkan di Riwayat
                        Jabatan
                      </small>
                    </div>
                  </div>
                </div>

                <div className='wizard__showButton-buttonBox'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>
                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div>
              </form>
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
                  <label for='berkas'>Dokumen PAK*</label>
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
                  <label for='berkas'>SK PAK*</label>
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
