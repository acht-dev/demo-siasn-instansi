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

function PMK() {
    const [file, setFile] = useState("");
    const selectOptions = {
        jenisPMK: ["--- Pilih Jenis PMK ---", "Jenis 1", "Jenis 2", "Jenis 3"],
    };
    return (
        <>
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.row}></div>
                    <div className={styles.components}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md='5' controlId=''>
                                    <Form.Label>Jenis PMK</Form.Label>
                                    <Form.Control disabled as='select'>
                                        {selectOptions.jenisPMK.map((data) => {
                                            return <option>{data}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />

                                <Form.Group as={Col} md='5' className='ml-4' controlId=''>
                                    <Form.Label>Tgl. SK</Form.Label>
                                    <Form.Control disabled
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
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
                                    <Form.Label>Instansi/ Perusahaan</Form.Label>
                                    <Form.Control type='text' placeholder='' disabled />
                                </Form.Group>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                                <Form.Group as={Col} md='5' className='ml-4' controlId=''>
                                    <Form.Label>Masa Kerja</Form.Label>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}>
                                        <Form.Control disabled
                                            type='text'
                                            placeholder=''
                                            className='mr-4'
                                        />
                                        <Form.Control type='text' placeholder='' disabled/>
                                    </div>
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
                                    <Form.Label>Tanggal Awal</Form.Label>
                                    <Form.Control disabled
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
                                </Form.Group>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                                <Form.Group as={Col} md='5' className='ml-4' controlId=''>
                                    <Form.Label>No. BKN</Form.Label>
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
                                    <Form.Label>Tanggal Akhir</Form.Label>
                                    <Form.Control disabled
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
                                </Form.Group>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                                <Form.Group as={Col} md='5' className='ml-4' controlId=''>
                                    <Form.Label>Tanggal BKN</Form.Label>
                                    <Form.Control disabled
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
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
                                    <Form.Label>No. Surat Keputusan</Form.Label>
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
                        <br />
                        <div className='wizard__showButton-buttonBox mt-3'>
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

export default PMK;
