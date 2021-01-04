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

function UploadV6C() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>Realisasi SKP 1 tahun terakhir*</Col>
            <Col className="paddingLeft">SK KP Perorangan/SK Petikan Terakhir*</Col>
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
            <Col md={5}>SK Tugas Belajar / Izin Belajar*</Col>
            <Col className="paddingLeft">Surat Keputusan Pengangkatan Jabatan</Col>
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
            <Col md={5}>Surat Keputusan Pemindahan Jabatan</Col>
            <Col className="paddingLeft">Surat Keputusan Pemberhentian Jabatan</Col>
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
          <br />
        </div>
      </section>
    </main>
  );
}

export default UploadV6C;