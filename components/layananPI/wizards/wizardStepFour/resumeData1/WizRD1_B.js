import "bootstrap/dist/css/bootstrap.min.css"
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
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
import "font-awesome/css/font-awesome.min.css";

function WizRD1_B(props) {
  const [file, setFile] = useState("");
  return (
    <>
              <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-1 */}

                    {/* Judul 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jenis Jabatan Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Jenis Pegawai</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                      <Col md={5} >
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                            disabled
                          >
                            <option selected>Jabatan Fungsional</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control disabled placeholder="PNS Provinsi yang Bekerja pada Provinsi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Instansi Kerja Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Jenis Jabatan Baru</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled placeholder="6000"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <div class="form-row mt-0">
                          <select
                            class="custom-select form-control"
                            id="jabatanLama"
                            disabled
                          >
                            <option selected>Jabatan Fungsional</option>
                            <option value="1">Aaaa</option>
                            <option value="2">Bbbb</option>
                            <option value="3">Cccc</option>
                          </select>
                        </div>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Satuan Kerja Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Instansi Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={1} className="paddingLeft">
                        <Form.Control disabled placeholder="6137"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Unor Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Satuan Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="SMKN JAKARTA"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control disabled placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>
                    


                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Jab. Fungsional Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Unor Baru</Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control disabled placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 6 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Instansi Induk Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Jab. Fungsional Baru</Col>
                    </Form.Row>

                    {/* Input 6 */}
                    <Form.Row className="Step-3">
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled placeholder="6000"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                       <Form.Control disabled placeholder="Guru Dewasa"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    
                    {/* Judul 7 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Satuan Kerja Induk Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Instansi Induk Baru</Col>
                    </Form.Row>

                    {/* Input 7 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Provinsi Daerah Khusus Ibukota Jakarta"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={1} className="paddingLeft">
                        <Form.Control disabled placeholder="6137"></Form.Control>
                      </Col>
                      <Col md={4} className="paddingRight">
                        <Form.Control disabled placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 8 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>Lokasi Kerja Lama</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Satuan Kerja Induk Baru</Col>
                    </Form.Row>

                    {/* Input 8 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder=""></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control disabled placeholder="Pemerintah Kota Sukabumi"></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>


                    {/* Judul 9 */}
                    <Form.Row className="Step-3">
                      <Col md={5}>KPPN BARU</Col>
                      <Col md={1}></Col>
                      <Col md={5} className="paddingLeft">Lokasi Kerja Baru</Col>
                    </Form.Row>

                    {/* Input 9 */}
                    <Form.Row className="Step-3">
                      
                      <Col md={5} className="paddingRight">
                        <Form.Control disabled placeholder=""></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                      <Col md={5} className="paddingLeft">
                        <Form.Control disabled placeholder=""></Form.Control>
                      </Col>
                      <Col md={1}><FaCheckCircle
                            size='1.5rem'
                            color='green'
                      /></Col>
                    </Form.Row>
                   
                    <br />
                  </div>
                </section>
              </main>
    </>
  );
}

export default WizRD1_B;
