import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

function DetailKompetensi(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
          <Form>
                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Integritas</Form.Label>
                        <Form.Control disabled
                          type='text'
                          placeholder=''
                        />
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                      <Form.Group as={Col} md='5' controlId='' className='ml-4'>
                        <Form.Label>Mengelola Perubahan</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>

                    
                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Kerjasama</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                      <Form.Group as={Col} md='5' controlId='' className='ml-4'>
                        <Form.Label>Pengambilan Keputusan</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Komunikasi</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                      <Form.Group as={Col} md='5' controlId='' className='ml-4'>
                        <Form.Label>Perekat Bangsa</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>


                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Orientasi Pada Hasil</Form.Label>
                        <Form.Control type='text' placeholder='' disabled />
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>
                    
                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Pelayanan Publik</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                      <Form.Group as={Col} md='5' controlId='' className='ml-4'>
                        <Form.Label>JUMLAH KUANTITATIF</Form.Label>
                        <Form.Control type='text' placeholder='' disabled />
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId=''>
                        <Form.Label>Pengembangan Diri dan ORLA</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                      <Form.Group as={Col} md='5' controlId='' className='ml-4'>
                        <Form.Label>JUMLAH KUALITATIF</Form.Label>
                        <Form.Control type='text' placeholder='' disabled/>
                      </Form.Group>
                      <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                    </Form.Row>
            </Form> 
            <br /><div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DetailKompetensi;
