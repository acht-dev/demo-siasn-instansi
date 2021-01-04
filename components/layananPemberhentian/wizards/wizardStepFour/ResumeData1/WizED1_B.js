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
                      <Col md={5}>Tempat Lahir</Col>
                      <Col md={5} className="paddingLeft">Tahun Gaji</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form.Control></Form.Control>
                    </Col>
                      <Col md={5} className="paddingLeft">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>--- Tahun ---</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Tanggal Lahir</Col>
                      <Col md={2} className="paddingLeft">Golongan Lama</Col>
                      <Col md={3}>TMT Golongan Lama</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                      <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>--- Pilih ---</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Pendidikan Lama</Col>
                      <Col md={5} className="paddingLeft">Gaji Pokok Lama</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={2} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3} className="paddingRight">
                        <Form.Control></Form.Control>
                        <Form.Text className="text-muted">
                          Tahun Lulus
                        </Form.Text>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Satuan Kerja</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja Lama (Tahun/Bulan)</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>--- Pilih ---</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={2} className="paddingLeft">
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
                    </Form.Row>

                      {/* Judul 5 */}
                      <Form.Row className="Step-3">
                      <Col md={5}>Unit Kerja</Col>
                      <Col md={2} className="paddingLeft">Golongan Baru</Col>
                      <Col md={3}>TMT Golongan Baru</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3}>
                      <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Col>
                    </Form.Row>
                     {/* Judul 6 */}
                     <Form.Row className="Step-3">
                      <Col md={5}>Unit Kerja Induk</Col>
                      <Col md={5} className="paddingLeft">Gaji Pokoko Baru</Col>
                    </Form.Row>

                    {/* Input 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>

                    {/* Judul 7 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Lokasi Kerja</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja(Tahun/Bulan)</Col>
                    </Form.Row>

                    {/* Input 7 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={2} className="paddingLeft">
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
                    </Form.Row>

                     {/* Judul 8 */}
                     <Form.Row className="Step-3">
                      <Col md={5}>Jabatan Fungsional Umum Lama</Col>
                      <Col md={5} className="paddingLeft">TMT Fungsional Umum Lama</Col>
                    </Form.Row>

                    {/* Input 9 */}
                    <Form.Row className="Step-3">
                      <Col md={2} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                      <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Col>
                    </Form.Row>

                     {/* Judul 10 */}
                     <Form.Row className="Step-3">
                      <Col md={5}>Jabatan Fungsional Umum Baru</Col>
                      <Col md={5} className="paddingLeft">TMT Fungsional Umum Baru</Col>
                    </Form.Row>

                    {/* Input 10 */}
                    <Form.Row className="Step-3">
                      <Col md={2} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                      <Form.Control
                          type="date"
                          name="dob"
                          placeholder="Date of Birth"
                        />
                      </Col>
                    </Form.Row>

                     {/* Judul 11 */}
                     <Form.Row className="Step-3">
                      <Col md={5}>Angka Kredit Lama</Col>
                      <Col md={5} className="paddingLeft">Angka Kredit Baru</Col>
                    </Form.Row>

                    {/* Input 11 */}
                    <Form.Row className="Step-3">
                      <Col md={5} className="paddingRight">
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
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
                      <Col md={5}>KPPN</Col>
                      <Col className="paddingLeft">SK PNS Perorangan/Petikan</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={2}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>
              
                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Kanreg</Col>
                      <Col className="paddingLeft">
                        Nama
                      </Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={2}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Formasi</Col>
                      <Col className="paddingLeft">
                        Golongan
                      </Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                    <Col md={2}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={2}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={1}>
                        <Form.Control></Form.Control>
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                          >
                            <option selected>--- Pilih ---</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                    </Form.Row>

                     {/* Judul 4 */}
                     <Form.Row className="Step-3">
                      <Col md={5}>Alasan KP</Col>
                      <Col className="paddingLeft">
                        TMT Golongan
                      </Col>
                    </Form.Row>

                    
                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                      <Form.Control as="textarea" rows={4} />
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
                      </Col>
                    </Form.Row>
                    
                    
                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Keterangan Masa Kerja</Col>
                      <Col className="paddingLeft">
                        Jabatan
                      </Col>
                    </Form.Row>
                    
                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                      <Form.Control as="textarea" rows={4} />
                      </Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control></Form.Control>
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
                      <Col md={5}>Realisasi SKP 2 tahun terakhir*</Col>
                      <Col className="paddingLeft">SK PNS Perorangan/Petikan</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              input="Invalid"
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
                      <Col md={5}>SK KP Perorangan/SK Petikan Terakhir*</Col>
                      <Col className="paddingLeft">
                        SK CPNS Perorangan/Petikan
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
                      <Col md={5}>Surat Pengantar Instansi</Col>
                      <Col className="paddingLeft">
                        Surat Tanda Ujian Lulus Dinas
                      </Col>
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
                    
                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Surat Pengantar Provinsi (Kolektif)</Col>
                      <Col className="paddingLeft">
                        SK Jabatan (Atasan Langsung)
                      </Col>
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
                    
                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Pertek</Col>
                      <Col className="paddingLeft">
                        SK Jabatan (Terakhir)*
                      </Col>
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
                  
                    {/* Judul 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Surat Pembatalan Pertek</Col>
                      <Col className="paddingLeft">
                        Surat Pelantikan (dalam Jabatan Terakhir)*
                      </Col>
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
                    
                    {/* Judul 7 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Surat Pengantar Keluar Pertrk KP (Kolektif)</Col>
                      <Col className="paddingLeft">
                        SK Tugas Belajar/ Izin Belajar
                      </Col>
                    </Form.Row>

                    {/* Input 7 */}
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
                    
                    {/* Judul 8 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>SK KP Perorangan/Petikan</Col>
                      <Col className="paddingLeft">
                        Ijazah
                      </Col>
                    </Form.Row>

                    {/* Input 8 */}
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
                    
                    {/* Judul 9 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>SK KP Kolektif</Col>
                      <Col className="paddingLeft">
                        Transkip Nilai
                      </Col>
                    </Form.Row>

                    {/* Input 9 */}
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
                        <td>Golongan Baru</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>DP3 baik atau amat baik</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Kredit mencakupi</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Kandidat tidak sedang dipromosikan</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Lama Menjalan Golongan</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Lama menjabat</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Cek peningkatan golongan</td>
                        <td><Form.Check size="" type="checkbox" /></td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Cek tingkat pendidikan dari kandidat promosi</td>
                        <td><Form.Check size="" type = "checkbox" /></td>
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
