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
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

function UploadZ1011B() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 4-3 */}

          {/* Judul 1 */}
{/* Judul 1 */}
<Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Tempat Lahir</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Tanggal Lahir</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>
         

          {/* Judul 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Pendidikan Lama</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Jabatan Funssional Umum Lama</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Jabatan Fungsional Umum Baru</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>TMT Fungsional Umum Lama</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   /> 
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          {/* Judul 4 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>TMT Fungsional Umum Baru</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Unit Kerja</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          
          {/* Judul 5 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Unit Kerja Induk</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Lokasi Kerja</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          
          {/* Judul 6 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Satuan Kerja</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   />
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
              <Form.Label>Tahun Gaji</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   /> 
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

           {/* Judul 7 */}
           <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Golongan Lama</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   />
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
             <Form.Label>TMT Golongan Lama</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 8 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Gaji Pokok Lama</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   />
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
             <Form.Label>Masa Kerja Lama (Tahun Bulan)</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 9 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Golongan Baru</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   />
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
             <Form.Label>TMT Golongan Baru</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 10 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Gaji Pokok Baru</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Document.pdf"
                   />
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
             <Form.Label>Masa Kerja Baru(Tahun Bulan)</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>
          <br />
        </div>
      </section>
    </main>
  );
}

export default UploadZ1011B;