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
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Kepanitiaan() {
  const selectOptions = {
    jabatanTim: ["--- Pilih Jabatan ---", "One", "Two", "Three"],
  };
  return (
    <>
      {/* <Table striped bordered hover responsive>
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
        </Container> */}
      <br></br>

      <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
        <Tab eventKey='editdata' title='Edit Data'>
          <Card>
            <Card.Body>
              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='aaa'>Nama Tim</label>
                  <Form.Control type='text' placeholder='' />
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='a'>Jabatan dalam Tim</label>
                  <select class='custom-select form-control' id='jabatanLama'>
                    {selectOptions.jabatanTim.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='aaa'>Pengalaman</label>
                  <Form.Control type='text' placeholder='' />
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='a'>Tanggal Mulai</label>
                  <div class='input-group'>
                    <Form.Control type='date' placeholder='' name='dob' />
                  </div>
                </div>
              </div>

              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='a'>Tanggal Selesai</label>
                  <div class='input-group'>
                    <Form.Control type='date' placeholder='' name='dob' />
                  </div>
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
                  <label for='berkas'>Dokumen SK Kepanitiaan/Tim*</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input isInvalid />
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
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
