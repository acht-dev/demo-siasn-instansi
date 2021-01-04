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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

function RD1_C(props) {
  const [file, setFile] = useState("");
  return (
    <>
    <Card>
      <Card.Body>

     
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
            {/* Step 3-1 */}

            {/* Judul 1 */}
            <Form.Row className="Step-3">
              <Col md={5}>Tempat Lahir</Col>
              <Col md={5} className="paddingLeft">
                Tahun Gaji
              </Col>
            </Form.Row>

            {/* input 1 */}
            <Form.Row className="Step-3">
              <Col md={5}>
                <Form.Control disabled></Form.Control>
              </Col>
              <i class="fas fa-times-circle"></i>
              <Col md={5} className="paddingLeft">
                <div class="form-row mt-0">
                  <select
                    class="custom-select form-control"
                    id="jabatanLama"
                    disabled
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
              <Col md={2} className="paddingLeft">
                Golongan Lama
              </Col>
              <Col md={3}>TMT Golongan Lama</Col>
            </Form.Row>

            {/* Input 2 */}
            <Form.Row className="Step-3">
              <Col md={5}>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
              <Col md={2} className="paddingLeft">
                <div class="form-row mt-0">
                  <select
                    class="custom-select form-control"
                    id="jabatanLama"
                    disabled
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
                  disabled
                />
              </Col>
            </Form.Row>

            {/* Judul 3 */}
            <Form.Row className="Step-3">
              <Col md={5}>Pendidikan Lama</Col>
              <Col md={5} className="paddingLeft">
                Gaji Pokok Lama
              </Col>
            </Form.Row>

            {/* Input 3 */}
            <Form.Row className="Step-3">
              <Col md={2} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={3} className="paddingRight">
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted" disabled>
                  Tahun Lulus
                </Form.Text>
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control disabled></Form.Control>
              </Col>
            </Form.Row>

            {/* Judul 4 */}
            <Form.Row className="Step-3">
              <Col md={5}>Satuan Kerja</Col>
              <Col md={5} className="paddingLeft">
                Masa Kerja Lama (Tahun/Bulan)
              </Col>
            </Form.Row>

            {/* Input 4 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <div class="form-row mt-0">
                  <select
                    class="custom-select form-control"
                    id="jabatanLama"
                    disabled
                  >
                    <option selected>--- Pilih ---</option>
                    <option value="1">Aaaa</option>
                    <option value="2">Bbbb</option>
                    <option value="3">Cccc</option>
                  </select>
                </div>
              </Col>
              <Col md={2} className="paddingLeft">
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Tahun</Form.Text>
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Bulan</Form.Text>
              </Col>
            </Form.Row>

            {/* Judul 5 */}
            <Form.Row className="Step-3">
              <Col md={5}>Unit Kerja</Col>
              <Col md={2} className="paddingLeft">
                Golongan Baru
              </Col>
              <Col md={3}>TMT Golongan Baru</Col>
            </Form.Row>

            {/* Input 5 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={2} className="paddingLeft">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
            </Form.Row>
            {/* Judul 6 */}
            <Form.Row className="Step-3">
              <Col md={5}>Unit Kerja Induk</Col>
              <Col md={5} className="paddingLeft">
                Gaji Pokoko Baru
              </Col>
            </Form.Row>

            {/* Input 6 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control disabled></Form.Control>
              </Col>
            </Form.Row>

            {/* Judul 7 */}
            <Form.Row className="Step-3">
              <Col md={5}>Lokasi Kerja</Col>
              <Col md={5} className="paddingLeft">
                Masa Kerja(Tahun/Bulan)
              </Col>
            </Form.Row>

            {/* Input 7 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={2} className="paddingLeft">
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Tahun</Form.Text>
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Bulan</Form.Text>
              </Col>
            </Form.Row>

            {/* Judul 8 */}
            <Form.Row className="Step-3">
              <Col md={5}>Jabatan Fungsional Umum Lama</Col>
              <Col md={5} className="paddingLeft">
                TMT Fungsional Umum Lama
              </Col>
            </Form.Row>

            {/* Input 9 */}
            <Form.Row className="Step-3">
              <Col md={2} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
            </Form.Row>

            {/* Judul 10 */}
            <Form.Row className="Step-3">
              <Col md={5}>Jabatan Fungsional Umum Baru</Col>
              <Col md={5} className="paddingLeft">
                TMT Fungsional Umum Baru
              </Col>
            </Form.Row>

            {/* Input 10 */}
            <Form.Row className="Step-3">
              <Col md={2} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
            </Form.Row>
            <br />
          </div>
        </section>
      </main>
     </Card.Body>
    </Card>
    </>
  );
}

export default RD1_C;
