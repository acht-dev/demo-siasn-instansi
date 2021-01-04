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

function ResumeV7B() {
  return (
    <Card>
      <Card.Body>

    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 4 */}

           {/* judul baris 1 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>       
                  <Form.Label>Realisasi SKP 2 Tahun Terakhir </Form.Label> 
                  {/* input  */}
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

            {/* icon ceklis */}
            <Col md={1}><br></br><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col>

            <Col md={5} >
              <Form.Label>SK KP  Perorangan/SK Petikan Terakhir </Form.Label>
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
        
            <Col md={1}><br></br><FaCheckCircle   
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          {/* Judul baris 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Tugas Belajar /Izin Belajar </Form.Label> 
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
            
            {/* icon silang */}
            <Col md={1}><br></br><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >


              <Form.Label>Ijazah </Form.Label>
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
         
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul baris 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Transkrip Nilai </Form.Label> 
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
        
            <Col md={1}><br></br><FaTimesCircle   
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Akreditas Program Studi </Form.Label>
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
         
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul baris 4 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Uraian Tugas yang Ditetapkan Pejabat Setingkat Eselon II </Form.Label> 
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

              <Form.Label>SK PAK </Form.Label>
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
                  <Form.Label>Asli Klarifikasi PAK</Form.Label> 
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

            {/* ceklis */}
            {/* <Col md={1}><br></br><FaCheckCircle   
                      size='1rem'
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

export default ResumeV7B;
