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
  Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

function WizRD1_B(props) {
  const [file, setFile] = useState("");
  const selectOptions = {
    tahun: ["--- Tahun ---", "2000", "2010", "2020"],
    golonganLama: ["--- Pilih ---", "Aaaa", "Bbb", "Ccc"],
    satuanKerja: ["--- Pilih ---", "Aaaa", "Bbbb", "Ccccc"],
  };
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
              <Col md={5} className="paddingRD2">
                Tahun Gaji
              </Col>
            </Form.Row>

            {/* input 1 */}
            <Form.Row className="Step-3">
              <Col md={5}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={5} >
                <div class="form-row mt-0">
                  <select class="custom-select form-control" id="jabatanLama" disabled>
                    {selectOptions.tahun.map((data) => {
                      return <option>{data}</option>
                    })}
                  </select>
                </div>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 2 */}
            <Form.Row className="Step-3">
              <Col md={5}>Tanggal Lahir</Col>
              <Col md={2} className="paddingRD2">
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
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={2} >
                <div class="form-row mt-0">
                  <select class="custom-select form-control" id="jabatanLama" disabled>
                    {selectOptions.golonganLama.map((data) => {
                      return <option>{data}</option>
                    })}
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
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 3 */}
            <Form.Row className="Step-3">
              <Col md={5}>Pendidikan Lama</Col>
              <Col md={5} className="paddingRD2">
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
                <Form.Text className="text-muted" disabled>Tahun Lulus</Form.Text>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={5} >
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 4 */}
            <Form.Row className="Step-3">
              <Col md={5}>Satuan Kerja</Col>
              <Col md={5} className="paddingRD2">
                Masa Kerja Lama (Tahun/Bulan)
              </Col>
            </Form.Row>

            {/* Input 4 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <div class="form-row mt-0">
                  <select class="custom-select form-control" id="jabatanLama" disabled>
                    {selectOptions.satuanKerja.map((data) => {
                      return <option>{data}</option>
                    })}
                  </select>
                </div>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Tahun</Form.Text>
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Bulan</Form.Text>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 5 */}
            <Form.Row className="Step-3">
              <Col md={5}>Unit Kerja</Col>
              <Col md={2} className="paddingRD2">
                Golongan Baru
              </Col>
              <Col md={3}>TMT Golongan Baru</Col>
            </Form.Row>

            {/* Input 5 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={2}>
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
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>
            {/* Judul 6 */}
            <Form.Row className="Step-3">
              <Col md={5}>Unit Kerja Induk</Col>
              <Col md={5} className="paddingRD2">
                Gaji Pokok Baru
              </Col>
            </Form.Row>
            {/* Input 6 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={5}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 7 */}
            <Form.Row className="Step-3">
              <Col md={5}>Lokasi Kerja</Col>
              <Col md={5} className="paddingRD2">
                Masa Kerja(Tahun/Bulan)
              </Col>
            </Form.Row>

            {/* Input 7 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Tahun</Form.Text>
              </Col>
              <Col md={2}>
                <Form.Control disabled></Form.Control>
                <Form.Text className="text-muted">Bulan</Form.Text>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 8 */}
            <Form.Row className="Step-3">
              <Col md={5}>Jabatan Fungsional Umum Lama</Col>
              <Col md={5} className="paddingRD2">
                TMT Fungsional Umum Lama
              </Col>
            </Form.Row>

            {/* Input 8 */}
            <Form.Row className="Step-3">
              <Col md={2} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={5}>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 10 */}
            <Form.Row className="Step-3">
              <Col md={5}>Jabatan Fungsional Umum Baru</Col>
              <Col md={5} className="paddingRD2">
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
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <Col md={5}>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  disabled
                />
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            </Form.Row>

            {/* Judul 11 */}
            <Form.Row className="Step-3">
              <Col md={5}>Angka Kredit Lama</Col>
              <Col md={5} className="paddingRD2">Angka Kredit Baru</Col>
            </Form.Row>

            {/* Input 11 */}
            <Form.Row className="Step-3">
              <Col md={5} className="paddingRight">
                <Form.Control disabled></Form.Control>
              </Col>
              <i className='fa fa-check-circle' />
              <Col md={5}>
                <Form.Control disabled></Form.Control>
              </Col>
              <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
              <br />
              <i className='fa fa-check-circle' />
            </Form.Row>
            <Col md={1}><FaTimesCircle
                size='1rem'
                color='red' />
              </Col>
            <br />
          </div>
        </section>
      </main>
    
      </Card.Body>
    </Card>
    </>
  );
}

export default WizRD1_B;
