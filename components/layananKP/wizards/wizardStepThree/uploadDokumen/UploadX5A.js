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
  Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadX5A() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}
          <Form><Card><Card.Body>
          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>Dok Realisasi SKP 1 Tahun Terakhir*</Col>
            <Col className="paddingLeft">DOK SK KP Perorangan/SK Petikan Terakhir*</Col>
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
            <Col md={5}>Dok SK Penetepan Prestasi Kerja Luar Biasa Ditandatangani PPK*</Col>
            <Col className="paddingLeft"><br/>Pas Foto Terbaru*</Col>
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

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>Bukti Prestasi*</Col>
            <Col className="paddingLeft">Dok SK Jabatan (terakhir)*</Col>
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
            <Col md={5}>Dok Surat Pelantikan (dalam Jabatan Terakhir)*</Col>
            <Col className="paddingLeft">Berita Acara Sumpah/Janji/Pelantikan Jabatan</Col>
          </Form.Row>

          {/* Input 5 */}
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

          {/* Judul 6 */}
          <Form.Row className="Step-3">
            <Col md={5}><br/>SPMT (Surat Perintah Melaksanakan Tugas)</Col>
            <Col md={5} className="paddingLeft">
            Surat Perintah Pelaksana Tugas (plt) dari Pejabat Pembina Kepegawaian
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
            <Col md={5}>CV Terbaru*</Col>
          </Form.Row>

          {/* Input 7 */}
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
          </Form.Row>
            <div className='wizard__inputForm-buttonBox mt-3'>
              <Button
              className='wizard__formButtonReset mr-3'
              type='button'
              onClick={handleReset}>
                BATAL
              </Button>
              <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
                SIMPAN
              </Button>
            </div>
          <br />
          </Card.Body></Card></Form>
        </div>
      </section>
    </main>
  );
}

export default UploadX5A;
