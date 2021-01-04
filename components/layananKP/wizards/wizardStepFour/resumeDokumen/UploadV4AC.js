import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Timesbox,
  Row,
  Col,
  Button,
  FormControl,
  Card
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadV4AC() {
  return (
    <Card> 
      <Card.Body>
      
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}

          {/* Input 1 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Realisasi SKP 1 Tahun Terakhir *</Form.Label> 
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
              <Form.Label>SK KP Perorangan/SK Petikan Terakhir *</Form.Label>
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

          {/* Judul 2 */}
         
          {/* Input 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Ijazah *</Form.Label> 
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
              <Form.Label>Transkrip Nilai *</Form.Label>
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

          {/* Judul 3 */}

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Akreditasi Program Studi *</Form.Label> 
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
              <Form.Label>STL ujian KP Penyesuaian Ijazah *</Form.Label>
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

          {/* Judul 4 */}
          <Form.Row className="Step-3">
            <Col md={5}></Col>
            <Col className="paddingLeft"> </Col>
          </Form.Row>

          {/* Input 4 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Tugas Belajar / Izin Belajar *</Form.Label> 
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
            
            <Col md={5}>
              <Form.Label>Uraian Tugas yang Ditetapkan Pejabat Setingkat Eselon II *</Form.Label>
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
         
          
            {/* Ceklis */}
            {/* <Col md={1}><br></br><FaCheckCircle   
                      size='1.5rem'
                      color='green'
                    /></Col> */}   
          </Form.Row>

          <br />
        </div>
      </section>
    </main>
    
    </Card.Body>
    </Card>
  );
}

export default UploadV4AC;