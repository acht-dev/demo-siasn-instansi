import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";

function DataTambahan(props) {
  const [file, setFile] = useState("");
  const selectOptions={
    pns : ["--- Tahun ---","2000", "2010", "2020"],
    pnssSatus:["--- Pilih ---","Aaaa", "Bbb", "Ccc"],
    jenisKelamin:["--- Pilih ---","Aaaa","Bbbb","Ccccc"],
    agama:["--- Pilih ---"," A","B","C"],
    dokumen:["--- Pilih ---"," A","B","C"],
    tahun:["--- Pilih ---"," A","B","C"],
  }; 
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
          <Form>
            <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='tingkatPendidikan'>
                  <Form.Label>Tingkat Pendidikan</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}className="mr-3">
                <Form.Group className="" controlId="pendidikan">
                  <Form.Label>Pendidikan </Form.Label>
                  <InputGroup>
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
              </Col>
              <Col xs={12} md={2}className="mr-3">
                <Form.Group controlId='keluarga'>
                  <Form.Label>Keluarga</Form.Label><InputGroup>
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
              </Col>
              <Col xs={12} md={2}>
                <Form.Group controlId='masaKerja'>
                  <Form.Label>Masa Kerja</Form.Label><InputGroup>
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
              </Col>
            </Form.Row>
            
            <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='Dokter'>
                  <Form.Label>Dokter</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={2} className="mr-3">
                <Form.Group className="" controlId="pendidikan">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            size='sm'
                            />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId='bahasa'>
                  <Form.Label>Bahasa</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
              </Col>
            </Form.Row>
             
            <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='suratbebasNarkoba'>
                  <Form.Label>No. Surat Ket Bebas Narkoba</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Group className="" controlId="tanggal">
                  <Form.Label>Tanggal </Form.Label>
                  <Form.Control
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            size='sm'
                            />
                </Form.Group>
              </Col></Form.Row>

              <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='suratKepolisian'>
                  <Form.Label>No. Surat Ket Catatan Kepolisian</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Group className="" controlId="tanggal">
                  <Form.Label>Tanggal </Form.Label>
                  <Form.Control
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            size='sm'
                            />
                </Form.Group>
              </Col></Form.Row>

              <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='aktaKelahiran'>
                  <Form.Label>Akta Kelahiran</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col></Form.Row>

              <Form.Row>
              <Col xs={12} md={5} className="mr-3">
                <Form.Group controlId='noNpwp'>
                  <Form.Label>No.NPWP</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Group className="" controlId="tanggalNPWP">
                  <Form.Label>Tanggal NPWP </Form.Label>
                  <Form.Control
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            size='sm'
                            />
                </Form.Group>
              </Col></Form.Row>
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

export default DataTambahan;
