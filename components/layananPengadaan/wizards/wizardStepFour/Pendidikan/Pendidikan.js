import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

function Pendidikan(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
          <Form>
                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='pendidikan'>
                        <Form.Label>Pendidikan</Form.Label>
                        <Form.Control disabled
                          type='text'
                          placeholder=''
                        />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group as={Col} md='5' controlId='tingkatPenddidikan'className='ml-4'>
                        <Form.Label>Tingkat Pendidikan</Form.Label>
                        <Form.Control disabled type='text' placeholder='' />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    
                    <Form.Row>
                      <Form.Group as={Col} md="5" controlId='tanggaLulus'>
                        <Form.Label>Tanggal Lulus</Form.Label>
                        <div 
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control disabled
                            type='text'
                            placeholder='22'
                            className='mr-4'
                          />
                          <Form.Control disabled type='text' placeholder='' />
                        </div>
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group as={Col} md="5" controlId='tahunLulus' className='ml-4'>
                        <Form.Label>Tahun Lulus</Form.Label>
                        <Form.Control disabled type='text' placeholder='' />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='noIjazah'>
                        <Form.Label>Nomor Ijazah</Form.Label>
                        <Form.Control disabled
                          type='text'
                          placeholder=''
                        />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group as={Col} md='5' controlId='namaSekolah' className='ml-4'>
                        <Form.Label>Nama Sekolah</Form.Label>
                        <Form.Control disabled type='text' placeholder='' />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>


                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='gelarDepan'>
                        <Form.Label>Gelar Depan</Form.Label>
                        <Form.Control disabled
                          type='text'
                          placeholder=''
                        />
                      </Form.Group><FaCheckCircle
                        size="1rem"
                        color="green"
                        as={Col}
                        md="1"
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group as={Col} md='5'controlId='gelarBelakang' className='ml-4'>
                        <Form.Label>Gelar Belakang</Form.Label>
                        <Form.Control disabled type='text' placeholder='' />
                      </Form.Group>
                      <FaTimesCircle
                        size="1rem"
                        color="red"
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

export default Pendidikan;
