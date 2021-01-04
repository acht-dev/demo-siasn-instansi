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

function UploadY6ABC() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
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
            <Col className="paddingLeft">SK CPNS Perorangan/Petikan</Col>
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
            <Col className="paddingLeft">Surat Tanda Ujian Lulus Dinas</Col>
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
            <Col className="paddingLeft">SK Jabatan (Atasan Langsung)</Col>
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
            <Col className="paddingLeft">SK Jabatan (Terakhir)*</Col>
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
            <Col className="paddingLeft">SK Tugas Belajar/ Izin Belajar</Col>
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
            <Col className="paddingLeft">Ijazah</Col>
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
            <Col className="paddingLeft">Transkip Nilai</Col>
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
  );
}

export default UploadY6ABC;
