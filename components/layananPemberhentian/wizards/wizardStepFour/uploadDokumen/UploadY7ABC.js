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

function UploadY7ABC() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>PENILAIAN PRESTASI KERJA/DP-3 2 tahun terakhir*</Col>
            <Col className="paddingLeft">SK KP Terakhir*</Col>
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
            <Col md={5}>SURAT PENGANTAR INSTANSI(KOLEKTIF)*</Col>
            <Col className="paddingLeft">SURAT PENGANTAR PROVINSI (KOLEKTIF)*</Col>
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
            <Col md={5}>PERTEK*</Col>
            <Col className="paddingLeft">SURAT PEMBATALAN PERTEK</Col>
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
            <Col md={5}>Surat Pengantar Keluar Pertek KP(KOLEKTIF)*</Col>
            <Col className="paddingLeft">SK KP Perorangan/SK Petikan*</Col>
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
            <Col md={5}>Surat Perintah Tugas Belajar</Col>
            <Col className="paddingLeft">Ijazah</Col>
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
            <Col md={5}>Akreditasi Program Studi*</Col>
            <Col md={5} className="paddingLeft">
            Uraian Tugas yang Ditetapkan Pejabat Setingkat Eselon II*
            </Col>
          </Form.Row>

          {/* Input 6 */}
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
           {/* Judul 7 */}
           <Form.Row className="Step-3">
            <Col md={5}>PAK</Col>
            <Col className="paddingLeft">Asli Klarifikasi PAK</Col>
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
          <br />
        </div>
      </section>
    </main>
  );
}

export default UploadY7ABC;
