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
    Button,
    FormControl,
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadZ13B() {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <div className={styles.components}>
                    {/* Step 3-2 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>SK KP Perorangan/SK Petikan Terakhir*</Col>
                        <Col className="paddingLeft">Realisasi SKP 2 tahun terakhir*</Col>
                    </Form.Row>

                    {/* Input 1 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>SK PAK*</Col>
                        <Col className="paddingLeft">Sertifikat Uji Kompetensi Teknis*</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Formulir Rencana Pelantikan*</Col>
                        <Col className="paddingLeft">Penetapan Formasi*</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>SK Jabatan*</Col>
                        <Col className="paddingLeft">Surat Pernyataan Pelantikan*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                     {/* Judul 4 */}
                     <Form.Row className="Step-3">
                        <Col md={5}>Surat Pernyataan Pengalaman di Bidangnya*</Col>
                        <Col className="paddingLeft">Surat Pernyataan Menduduki Jabatan s.d Saat ini*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                     {/* Judul 4 */}
                     <Form.Row className="Step-3">
                        <Col md={5}>SK KP Perorangan/SK Petikan*</Col>
                        <Col className="paddingLeft">Transkip Nilai*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Akreditasi Program Studi*</Col>
                        <Col className="paddingLeft">Tugas Yang Ditetapkan Pejabat Setingkat Eselon II*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>


                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>SK Tugas Belajar/Izin Belajar*</Col>
                        <Col className="paddingLeft">Ijazah*</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>
                            <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                        <Col md={5} className="paddingLeft">
                        <Form.File id="formcheck-api-custom" custom>
                                <Form.File.Input isInvalid />
                                <Form.File.Label data-browse="Pilih">
                                    Pilih Berkas
                </Form.File.Label>
                                <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                </Form.Control.Feedback>
                            </Form.File>
                        </Col>
                    </Form.Row>

                    
                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Asli Klarifikasi PAK</Col>
                        <Col className="paddingLeft">Klarifikasi PAK</Col>
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

                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}>Surat Penunjukan PLT dari PPK</Col>
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

                    <br /><div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UploadZ13B;
