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
import "font-awesome/css/font-awesome.min.css";
import { FaTimesCircle } from "react-icons/fa";

function UploadZ101112B() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>Tempat Lahir</Col>
            <Col className="paddingLeft">Tanggal Lahir</Col>
          </Form.Row>

          {/* Input 1 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}>
          <i className="fa fa-check-circle"/>
          </Col>
          </Form.Row>

          {/* Judul 2 */}
          <Form.Row className="Step-3">
            <Col md={5}>Pendidikan Lama</Col>
            <Col className="paddingLeft">Jabatan Fungsional Umum Lama</Col>
          </Form.Row>

          {/* Input 2 */}
          {/* Input 3*/}

          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}><FaTimesCircle   
                      size='1rem'
                      color='red'/>
            </Col>
          </Form.Row>

          {/* Judul 3 */}
          <Form.Row className="Step-3">
            <Col md={5}>Jabatan Fungsional Umum Baru</Col>
            <Col className="paddingLeft">TMT Fungsional Umum Lama</Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
              <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}>
          <i className="fa fa-check-circle"/>
          </Col>
          </Form.Row>

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>TMT Fungsional Umum Baru</Col>
            <Col className="paddingLeft"> Unit Kerja</Col>
          </Form.Row>

          {/* Input 4 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}><FaTimesCircle   
                      size='1rem'
                      color='red'/>
            </Col>
          </Form.Row>

          {/* Judul 5 */}
          <Form.Row className="Step-3">
            <Col md={5}>Unit Kerja Induk</Col>
            <Col className="paddingLeft">Lokasi Kerja</Col>
          </Form.Row>

          {/* Input 5 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}>
          <i className="fa fa-check-circle"/>
          </Col>
          </Form.Row>

          {/* Judul 6 */}
          <Form.Row className="Step-3">
            <Col md={5}>Satuan Kerja </Col>
            <Col className="paddingLeft">
            Tahun Gaji
            </Col>
          </Form.Row>

          {/* Input 6 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}><FaTimesCircle   
                      size='1rem'
                      color='red'/>
            </Col>
          </Form.Row>
           {/* Judul 7 */}
           <Form.Row className="Step-3">
            <Col md={5}>Golongan Lama</Col>
            <Col className="paddingLeft">TMT Golongan Lama</Col>
          </Form.Row>

          {/* Input 7 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}>
          <i className="fa fa-check-circle"/>
          </Col>
          </Form.Row>
          {/* Judul 8 */}
          <Form.Row className="Step-3">
            <Col md={5}>Gaji Pokok Lama</Col>
            <Col className="paddingLeft">Masa Kerja Lama (Tahun/Bulan)</Col>
          </Form.Row>

          {/* Input 8 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}><FaTimesCircle   
                      size='1rem'
                      color='red'/>
            </Col>
          </Form.Row>
          {/* Judul 9 */}
          <Form.Row className="Step-3">
            <Col md={5}>Golongan Baru</Col>
            <Col className="paddingLeft">TMT Golongan Baru</Col>
          </Form.Row>

          {/* Input 9 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
              </Col>
              <Col md={1}>
          <i className="fa fa-check-circle"/>
          </Col>
          
          </Form.Row>
          {/* Judul 10 */}
          <Form.Row className="Step-3">
            <Col md={5}>Gaji Pokok Baru</Col>
            <Col className="paddingLeft">Masa Kerja Baru (Tahun/Bulan)</Col>
          </Form.Row>

          {/* Input 10 */}
          <Form.Row className="Step-3">
            <Col md={5}>
            <Form>
                <Form>
                <Form.Control placeholder = "Dokumen.pdf" disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={5} className="paddingLeft">
            <Form>
                <Form>
                <Form.Control  disabled></Form.Control>
                </Form>
              </Form>
            </Col>
            <Col md={1}><FaTimesCircle   
                      size='1rem'
                      color='red'/>
            </Col>
          </Form.Row>
          <br />
        </div>
      </section>
    </main>
  );
}

export default UploadZ101112B;
