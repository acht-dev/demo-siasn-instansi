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

function UploadZ13B() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 3-2 */}

          {/* Judul 1 */}

          {/* Input 1 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Realisasi SKP 2 tahun terakhir*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>SK KP Perorangan/SK Petikan Terakhir*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 2 */}
         
          {/* Input 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Sertifikat Uji Kompetensi Teknis*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>SK PAK*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 3 */}

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Formulir Rencana Pelantikan*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Penetapan Formasi*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Jabatan*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Surat Pernyataan Pelantikan*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

           {/* Input 3 */}
           <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Pernyataan Pengalaman di Bidangnya*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Akreditasi Program Studi*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK KP Perorangan/SK Petikan*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Transkip Nilai*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Pernyataan Menduduki Jabatan s.d Saat ini*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Uraian Tugas Yang Ditetapkan Pejabat Setingkat Eselon II*</Form.Label>
            <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   /> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Input 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>SK Tugas Belajar/Izin Belajar*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
                    <Col md={5}>
                  <Form.Label>Ijazah*</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

           {/* Input 3 */}
           <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Asli Klarifikasi PAK</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
                    <Col md={5}>
                  <Form.Label>Klarifikasi PAK</Form.Label> 
                   <Form.Control disabled
                   id="custom-file"
                   value="Belum Upload Document"
                   />
            </Col>
            <Col md={1}><br></br><FaTimesCircle   
                      size='1.5rem'
                      color='red'
                    /></Col>
          </Form.Row>

          <br />
        </div>
      </section>
    </main>
  );
}

export default UploadZ13B;