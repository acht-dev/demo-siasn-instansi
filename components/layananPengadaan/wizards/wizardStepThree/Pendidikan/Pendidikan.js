import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

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
                      <Form.Group as={Col} controlId='pendidikan'>
                        <Form.Label>Pendidikan</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='tingkatPenddidikan'>
                        <Form.Label>Tingkat Pendidikan</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    </Form.Row>

                    
                    <Form.Row>
                      <Form.Group as={Col} controlId='tanggaLulus'>
                        <Form.Label>Tanggal Lulus</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control
                            type='text'
                            placeholder='22'
                            className='mr-4'
                          />
                          <Form.Control type='text' placeholder='' />
                        </div>
                      </Form.Group>

                      <Form.Group as={Col} controlId='tahunLulus'>
                        <Form.Label>Tahun Lulus</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='noIjazah'>
                        <Form.Label>Nomor Ijazah</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='namaSekolah'>
                        <Form.Label>Nama Sekolah</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    </Form.Row>


                    <Form.Row>
                      <Form.Group as={Col} controlId='gelarDepan'>
                        <Form.Label>Gelar Depan</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='gelarBelakang'>
                        <Form.Label>Gelar Belakang</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
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
