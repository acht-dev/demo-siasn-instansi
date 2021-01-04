import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, Card, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";
import UploadY3B from "../uploadDokumen/UploadY3B";
import UploadY4ABC from "../uploadDokumen/UploadY4ABC";
import UploadY6ABC from "../uploadDokumen/UploadY6ABC";
import UploadZ101112B from "../uploadDokumen/UploadZ101112B";
import Iconsearch from "./Iconsearch";
import "bootstrap/dist/css/bootstrap.min.css";


function WizED1_A(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <section className="Full-Container">
        <div className="card card-profile my-3">
        <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
        <Tab eventKey='editdata' title='EDIT DATA 1'>
          <Card>
            <Card.Body>
              <Form>
                <Form.Row>
                  <Col className='mr-4 mt-3'>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label>Jenis Jabatan</Form.Label>
                      <Form.Control as='select'>
                        <option>Fungsional Umum</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          KPPN
                        </Form.Label>
                        <Form.Control
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder=''
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder=''
                            required
                          />
                          <Iconsearch></Iconsearch>
                        </div>
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Row>
                      <Col md={8}><Form.Label className='mt-3'>
                        Jabatan Fungsional Umum
                        </Form.Label></Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Row>
                        <Col md={4}>
                          <Form.Control
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder=''
                            className=''
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Control
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder=''
                            className=''
                          />
                        </Col>
                        <Iconsearch></Iconsearch>
                      </Form.Row>
                    </Form.Row>
                  </Col>
                  <Col className='ml-4'>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          Kanreg
                        </Form.Label>
                        <Form.Control
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder=''
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder=''
                            required
                          />
                          <Iconsearch></Iconsearch>
                        </div>
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Unit Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>Kantor Verifikasi Anggaran</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                </Form.Row>


                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>TASPEN</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder=''
                        required
                      />
                      <Iconsearch></Iconsearch>
                    </div>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Control as='select'>
                        <option>Fungsional Umum</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  </Form.Row>
              
                <div className='wizard__showButton-buttonBox mt-5'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>
                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='editdata2' title='EDIT DATA 2'>
          <Card>
            <Card.Body>
              <Form><Form.Row className="Step-3">
                      <Col md={6}>TMT CPNS & PNS</Col>
                      <Col md={6} className="paddingLeft">Masa Kerja Pensiun</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                    <Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT CPNS
                      </Form.Text>
                      </Col><Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT PNS
                      </Form.Text>
                      </Col>
                      <Col md={2} className="paddingRight">
                        <Form.Control></Form.Control><Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingRight">
                        <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col><Col md={2}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT Pensiun
                      </Form.Text>
                      </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Golongan Sekarang</Col>
                      <Col md={6} className="paddingLeft">Masa Kerja PNS</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>III/d</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <Form.Text className="text-muted">
                        Golongan
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Nama Pangkat
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT Golongan
                        </Form.Text>
                      </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Gaji</Col>
                      <Col md={6} className="paddingLeft">Pendidikan Pertama PNS</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={4} className="paddingRight">
                        <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                          Gaji Pokok Terakhir
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingRight">
                      <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>2015</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <Form.Text className="text-muted">
                        Tahun Gaji
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                          Pendidikan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                          Tahun Lulus
                        </Form.Text>
                      </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>KP Pengabdian</Col>
                      <Col md={6} className="paddingLeft">Gelar</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>Ya</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <Form.Text className="text-muted">
                        Diusulkan?
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Golongan Baru
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT KPP
                        </Form.Text>
                      </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Depan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Belakang
                        </Form.Text>
                      </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Masa Kerja Golongan</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        /><Form.Text className="text-muted">
                        TMT Golongan Baru
                        </Form.Text>
                      </Col>
                    </Form.Row>
              
                <div className='wizard__showButton-buttonBox mt-5'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>
                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='dokumenpendukung' title='UNGGAH DOKUMEN'>
          <Card>
            <Card.Body>
              <div class='form-row mt-0'>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Daftar Perorangan Calon Penerima Pensiun (DPCP)</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Pengangkatan Pertama dlm Jabatan Fungsional</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SP Pemberhentian sbg PNS dari Instansi Kolektif</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Pemberhentian Sementara</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Surat Permohonan Berhenti Sebagai PNS</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Penaikan Pangkat Sesuai Ijazah</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Srt Pernyataan tdk Sedang Menjalani Proses Pidana/Pernah Dipidana</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Pengangkatan, Pemindahan dan Pemberhentian Jabatan</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Surat Keputusan CPNS</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK CLTN</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Surat Keputusan Kenaikan Pangkat Terakhir</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>SK Pengaktifan dari CLTN</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
                <div class='form-group col-md-6'>
                  <label for='berkas'>Surat Keputusan Penunjauan Masa Kerja</label>
                  <Form.File id='formcheck-api-custom' custom>
                    <Form.File.Input/>
                    <Form.File.Label data-browse='Pilih'></Form.File.Label>
                    <Form.Control.Feedback>
                    </Form.Control.Feedback>
                  </Form.File>
                </div>
              </div>

              {/* BUTTON BATAL & SIMPAN */}
              <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey='status' title='STATUS DATA'>
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
                    <td>Kedudukan Hukum Aktif</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Tidak Aktif</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Telah Mencapai BUP</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Umur Kurang Dari 58 Tahun</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Nilai SKP Baik</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>4</td>
                    <td>Data Keluarga Lengkap</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Tidak Lengkap</td>
                  </tr><tr>
                    <td>5</td>
                    <td>Data Alamat Lengkap</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>6</td>
                    <td>Tidak Ada Hukuman Disiplin Aktif</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>7</td>
                    <td>Masa Kerja</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Masa Kerja Lebih Dari 30 Tahun</td>
                  </tr>
                </tbody>
              </Table>
              <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
        </div>
      </section>
    </>
  );
}

export default WizED1_A;
