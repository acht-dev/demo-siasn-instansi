import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

function PMK(props) {
    const [file, setFile] = useState("");
    const selectOptions = {
        jenisKelamin: ["--- Pilih Jenis Kelamin ---", "Laki-Laki", "Perempuan"],
        Agama: ["--- Pilih Agama ---", "Islam", "Kristen", "Hindu", "Budha"],
        jenisDokumen: ["Jenis Dokumen ID", "One", "Two", "Three"],
    };
    return (
        <>
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.row}></div>
                    <div className={styles.components}>
                        <Form>
                            <div class='form-row mt-0' >
                                <div className='form-group col-md-6'>
                                <Form.Label>Foto</Form.Label>   
                                    <div className='box-img-profile'>
                                        <img src='/img/foto-profile.png' />                                        
                                    </div>
                                    <div className='offset-4' style={{marginBottom:""}}>                                                                     
                                        <Form.File id='formcheck-api-custom' custom>
                                            <Form.File.Input />
                                            <Form.File.Label data-browse='Pilih'>
                                                Pilih Berkas</Form.File.Label>
                                        </Form.File>
                                    </div>
                                </div>
                                <div class='form-group col-md-6'>
                                    <label for='bbb'><br/><br/><br/>Alamat</label>
                                    <Form.Control type='text' placeholder='' />
                                </div>
                            </div>

                            <Form.Row>
                                <Form.Group as={Col} controlId='nama'>
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type='text' placeholder='' />
                                </Form.Group>

                                <Form.Group as={Col} controlId='nomor'>
                                    <Form.Label>Nomor</Form.Label>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='081525431233'
                                            className='mr-4'
                                        />
                                        <Form.Control type='text' placeholder='0215' />

                                    </div>
                                    <Form.Text className="text-muted">
                                        HP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Telepon</Form.Text>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId='gelar'>
                                    <Form.Label>Gelar</Form.Label>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}>
                                        <Form.Control
                                            type='text'
                                            placeholder='Ketik Gelar'
                                            className='mr-4'
                                        />
                                        <Form.Control type='text' placeholder='S.Sos' />

                                    </div>
                                    <Form.Text className="text-muted">
                                        Gelar Depan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Gelar Belakang</Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId='Status Perkawinan'>
                                    <Form.Label>Status Perkawinan</Form.Label>
                                    <Form.Control type='text' placeholder='' />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId='Tempat Lahir'>
                                    <Form.Label>Tempat Lahir</Form.Label><InputGroup>
                                        <Form.Control
                                            placeholder=''
                                            aria-label=''
                                            aria-describedby='pns-search'
                                        />
                                        <InputGroup.Append>
                                            <Button
                                                variant='outline-secondary'
                                                style={{
                                                    backgroundColor: "#EAEAEA",
                                                    height: "40px",
                                                }}>
                                                <svg
                                                    className='mb-2'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='1.2rem'
                                                    height='1.2rem'
                                                    viewBox='0 0 35.997 36.004'>
                                                    <path
                                                        id='Icon_awesome-search'
                                                        data-name='Icon awesome-search'
                                                        d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                                        fill='#2d3c6c'
                                                    />
                                                </svg>
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} controlId='Akte Kelahiran'>
                                    <Form.Label>Akte Kelahiran</Form.Label>
                                    <Form.Control type='text' placeholder='' />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId='Tanggal Lahir'>
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId='Akte Meninggal'>
                                    <Form.Label>Akte Meninggal</Form.Label>
                                    <Form.Control type='text' placeholder='' />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId='agama'>
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control as='select'>
                                        {selectOptions.Agama.map((data) => {
                                            return <option>{data}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId='Tanggal Meninggal'>
                                    <Form.Label>Tanggal Meninggal</Form.Label>
                                    <Form.Control
                                        type='date'
                                        placeholder=''
                                        name='dob'
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId='Jenis Kelamin'>
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Control as='select'>
                                        {selectOptions.jenisKelamin.map((data) => {
                                            return <option>{data}</option>
                                        })}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId='Status Hidup'>
                                    <Form.Label>Status Hidup</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <Form.Check size='' type='radio' />
                                            <label style={{marginTop:"0.5rem"}}>Hidup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        </InputGroup.Prepend>
                                        <InputGroup.Prepend>
                                        <Form.Check size='' type='radio' />
                                            <label style={{marginTop:"0.5rem"}}>Tidak Hidup</label>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md='6' controlId='Dokumen ID'>
                                    <Form.Label>Dokumen ID</Form.Label>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}>
                                       <Form.Control as='select'>
                                        {selectOptions.jenisDokumen.map((data) => {
                                            return <option>{data}</option>
                                        })}
                                    </Form.Control>
                                        <Form.Control type='text' placeholder='88255825327835238535' />

                                    </div>
                                    <Form.Text className="text-muted">
                                        Jenis &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Nomor</Form.Text>
                                </Form.Group>
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
