import "bootstrap/dist/css/bootstrap.min.css"
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
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

function WizED1_B(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <section className="Full-Container">
        <div className="card card-profile my-3">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="EDIT DATA 1">
              {/*Form*/}
              <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-1 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jenis Jabatan Lama</Col>
                      <Col md={5} className="paddingLeft">Jenis Pegawai</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5} >
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>Jabatan Fungsional</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Instansi Kerja Lama</Col>
                      <Col md={5} className="paddingLeft">Jenis Jabatan Baru</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control placeholder="6000"></Form.Control>
                      </Col>
                      <Col md={3} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>Jabatan Fungsional</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                    </Form.Row>


                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Satuan Kerja Lama</Col>
                      <Col md={5} className="paddingLeft">Instansi Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1} className="paddingLeft">
                        <Form.Control placeholder="6137"></Form.Control>
                      </Col>
                      <Col md={3} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                    </Form.Row>


                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Unor Lama</Col>
                      <Col md={5} className="paddingLeft">Satuan Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={4} className="paddingRight">
                        <Form.Control placeholder="SMKN JAKARTA"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                    </Form.Row>


                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jab. Fungsional Lama</Col>
                      <Col md={5} className="paddingLeft">Unor Baru</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingLeft">
                        <Form.Control placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                    </Form.Row>


                    {/* Judul 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Instansi Induk Lama</Col>
                      <Col md={5} className="paddingLeft">Jab. Fungsional Baru</Col>
                    </Form.Row>

                    {/* Input 6 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control placeholder="6000"></Form.Control>
                      </Col>
                      <Col md={3} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                      <Col md={5} className="paddingLeft">
                       <Form.Control placeholder="Guru Dewasa"></Form.Control>
                      </Col>
                    </Form.Row>


                    
                    {/* Judul 7 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Satuan Kerja Induk Lama</Col>
                      <Col md={5} className="paddingLeft">Instansi Induk Baru</Col>
                    </Form.Row>

                    {/* Input 7 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1} className="paddingLeft">
                        <Form.Control placeholder="6137"></Form.Control>
                      </Col>
                      <Col md={3} className="paddingRight">
                        <Form.Control placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                    </Form.Row>


                    {/* Judul 8 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Lokasi Kerja Lama</Col>
                      <Col md={5} className="paddingLeft">Satuan Kerja Induk Baru</Col>
                    </Form.Row>

                    {/* Input 8 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={4} className="paddingRight">
                        <Form.Control placeholder=""></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                    </Form.Row>


                    {/* Judul 9 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>KPPN BARU</Col>
                      <Col md={5} className="paddingLeft">Lokasi Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 9 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={4} className="paddingRight">
                        <Form.Control placeholder=""></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                      <Col md={4} className="paddingLeft">
                        <Form.Control placeholder=""></Form.Control>
                      </Col>
                      <Col xs={1} className="paddingRight">
                        <Button variant="light">
                          <img src="../../../img/magnify-scan.png" />
                        </Button>
                      </Col>
                    </Form.Row>
                   
                    <br />
                  </div>
                </section>
              </main>
            </Tab>
            
            {/*TAB Dokumen Pendukung*/}
            <Tab eventKey="profile 1" title="EDIT DATA 2">
              <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jab. Fungsional Umum Baru</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control placeholder=""></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control placeholder="Pendidikan dan Kebudayaan"></Form.Control>
                      </Col>
                    </Form.Row>


                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Asal</Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="4168/0832"></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="10/10/2014"
                        />
                      </Col>
                    </Form.Row>


                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Asal (Prov)</Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder=""></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="10/10/2014"
                        />
                      </Col>
                    </Form.Row>


                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Tujuan</Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="824.3/1353/BKD"></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="10/10/2014"
                        />
                      </Col>
                    </Form.Row>


                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>No. Surat Instansi Tujuan (Prov)</Col>
                      <Col md={5} className="paddingLeft">Tanggal Surat</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control placeholder="-"></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="10/10/2014"
                        />
                      </Col>
                    </Form.Row>

                    
      
                    <br />
                  </div>
                </section>
              </main>
            </Tab>

            {/*TAB Dokumen Pendukung*/}
            <Tab eventKey="profile 2" title="UNGGAH DOKUMEN">
              <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen SK Pindah Instansi</Col>
                      <Col className="paddingLeft">Dokumen Surat Bebas Temuan Diterbitkan Inspektorat Instansi Asal</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>
              
                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Pembatalan Pindah Instansi</Col>
                      <Col className="paddingLeft">
                        Dokumen Anjab dan ABK Jabatan yang Akan Diduduki
                      </Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>
                    
                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Laporan Pengeluaran Penyelesaian PI</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>
                    

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Pengantar Dari Instansi Asal</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>
                  

                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Usul Mutasi Instansi Penerima Dari PPK</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>


                    {/* Judul 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Persetujuan Mutasi Instansi Asal Dari PPK</Col>
                    </Form.Row>

                    {/* Input 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>


                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Pernyataan Bebas Hukuman Disiplin Dibuat Oleh PPK atau PyB Minimal JPT Pratama</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Pilih Berkas"
                              data-browse="Pilih"
                              custom
                            />
                          </Form>
                        </Form>
                      </Col>
                    </Form.Row>

                    <br />
                  </div>
                </section>
              </main>
            </Tab>
            {/*TAB Status Data*/}
            <Tab eventKey="contact" title="STATUS DATA">
              {/* Step 3-3 */}
              <Row className="table">
                <Col md={12}>
                  <h5 className="Judul">View Status Validasi</h5>
                  <br></br>
                  <Table striped bordeeless hover responsive="sm">
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
                        <td>Umur Kandidat Benar</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>Umur kurang dari 58 tahun</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cek hukuman disiplin</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Cek masa kerja</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default WizED1_B;
