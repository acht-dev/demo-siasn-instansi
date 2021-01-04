import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import {
    Form,
    Tabs,
    Tab,
    Table,
    InputGroup,
    Timesbox,
    Row,
    Col,
    Button,
    FormControl,
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadX9ABC() {
    return (
        <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen SK Pindah Instansi</Col>
                      <Col md={1}></Col>
                      <Col className="paddingLeft">Dokumen Surat Bebas Temuan Diterbitkan Inspektorat Instansi Asal</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
                    </Form.Row>
              
                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Dokumen Surat Pembatalan Pindah Instansi</Col>
                      <Col md={1}></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
                      <Col md={5}>
                        <Form>
                          <Form>
                            <Form.File
                              id="custom-file"
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
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
                              label="Belum Upload Dokumen"
                              data-browse="Pilih"
                              custom
                              disabled
                            />
                          </Form>
                        </Form>
                      </Col>
                      <Col md={1}><FaTimesCircle
                            size='1.5rem'
                            color='red'
                      /></Col>
                    </Form.Row>

                    <br />
                  </div>
                </section>
              </main>
    );
}

export default UploadX9ABC;