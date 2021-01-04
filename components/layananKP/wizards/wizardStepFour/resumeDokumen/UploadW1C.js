import "bootstrap/dist/css/bootstrap.min.css";
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
  Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function ResumeW1C() {
  return (
    <Card> 
      <Card.Body> 
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 4 */}

          {/* Judul baris 1 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Realisasi SKP 2 tahun terakhir</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
        
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>

            <Col md={5} >
              <Form.Label>SK KP Perorangan/SK Petikan Terakhir</Form.Label>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
        
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>
          </Form.Row>

          {/* Judul baris 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK PNS Perorangan/SK Petikan</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
     
            <Col md={1}><br></br>
              <FaTimesCircle size='1rem' color='red'/>
            </Col>
            <Col md={5} >
              <Form.Label>SK CPNS Perorangan/Petikan</Form.Label>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
         
            <Col md={1}><br></br>
              <FaTimesCircle size='1rem' color='red'/>
            </Col>
          </Form.Row>

          {/* Judul baris 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Tanda Lulus Ujian Dinas</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
        
            <Col md={1}><br></br>
              <FaTimesCircle size='1rem' color='red'/>
            </Col>

            <Col md={5} >
              <Form.Label>SK Jabatan (Atasan Langsung)</Form.Label>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
         
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>
          </Form.Row>

          {/* Judul baris 4 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Jabatan (terakhir)</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
        
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>
            <Col md={5} >

              <Form.Label>Surat Pelantikan (dalam Jabatan Terakhir)</Form.Label>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
           
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>
          </Form.Row>

          {/* Judul baris 5 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Tugas Belajar / Izin Belajar</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
            
            <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>

                <Col md={5} >

                <Form.Label>Ijazah</Form.Label>
                <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
                </Col>

                <Col md={1}><br></br>
              <FaCheckCircle size='1rem' color='green'/>
            </Col>
          </Form.Row>

        {/* judul baris 6 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Transkrip nilai</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                    <div className="input-group">
                    <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                    <InputGroup.Append>
                      <InputGroup className="icon-size">
                        <Button className="buttonLihat">View</Button>
                      </InputGroup>
                    </InputGroup.Append>
                   </div>
                  </a>
            </Col>
            
            <Col md={1}><br></br>
              <FaTimesCircle size='1rem' color='red'/>
            </Col>
          </Form.Row>


            {/* ceklis */}
            {/* <Col md={1}><br></br><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col> */}
            
              
          <br />
        </div>
      </section>
    </main>
  
    </Card.Body> 
    </Card>
  );
}

export default ResumeW1C;
