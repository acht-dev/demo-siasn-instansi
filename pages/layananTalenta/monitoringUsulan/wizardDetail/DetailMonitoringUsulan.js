import {
    striped,
    bordered,
    hover,
    Table,
    responsive,
    Form,
    Container,
    Row,
    Col,
    Tab,
    Tabs,
    Card,
    InputGroup,
    FormControl,
    Button,
  
  } from "react-bootstrap";
  import { useState } from "react";

  import {Layout} from "../../../../components/Layout";
  import Breadcrumb from "./Breadcrumb";
  import CardProfile from "../CardProfile"
  import ShowButton from "../ShowButton"  
  import "bootstrap/dist/css/bootstrap.min.css";
  import Link from "next/link";

  // icon ceklis verifikasi step4
  import {FaCheckCircle} from "react-icons/fa";
  
  // layout pindah instansi step 4 (Verifikasi Data)
  export default function DetailMonitoringUsulan() {
    return (
      <>
    <Layout>
    {/* breadcrumb */}
    <Breadcrumb />
     {/* title */}
     <div className='wizard__title'>
          <h2>Detail Monitoring Usulan</h2>
        </div>
    <CardProfile></CardProfile>
        <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
          <Tab eventKey='editdata' title='Data'>
            <Card>
              <Card.Body>                
                <Form>
                    <Form.Row>
                        <Col className="mr-4" >
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Jenis Penyakit</Form.Label>
                                    <Form.Control size="sm" as="select" disabled>
                                    <option>--- Jenis Penyakit A ---</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem'}} size='2rem' color='green'/></Col>
                        <Col>
                            <Form.Label>Lokasi Rumah</Form.Label>
                                <div className="mr-3" style={{display: "flex"}}>
                                    <Form.Control disabled size="lg" style={{width:"100%"}} type="text" placeholder="Lokasi Rumah A" required />
                                    
                                </div>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.7rem'}} size='2rem' color='green'/></Col>
                    </Form.Row>

                    <Form.Row>
                        <Col className="mr-4">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Kategori</Form.Label>
                                    <Form.Control as="select" size="sm" disabled>
                                    <option>--- Kategori A ---</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem'}} size='2rem' color='green'/></Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control style={{width:'96%'}} size="sm" as="select" disabled>
                                    <option>--- Status A ---</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.8rem'}} size='2rem' color='green'/></Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Row>
                            <Col xs={10} md={10} lg={10}>
                            <Form.Label className="">Tanggal Penetapan Kategori</Form.Label>
                                <Form.Control
                                disabled
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                />
                            </Col>
                            <Col xs={2} md={2} lg={2}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'1.4rem'}} size='2rem' color='green'/></Col> 
                        </Form.Row>
                        </Col>
                        <Col className="ml-4">
                            <Form.Row>
                            <Col xs={10} md={10} lg={10}>
                            <Form.Label className="">Tanggal Status</Form.Label>
                                <Form.Control
                                style={{width:'96%'}}
                                disabled
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                />
                            </Col>
                            <Col xs={2} md={2} lg={2}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.8rem'}} size='2rem' color='green'/>
                            </Col> 
                            </Form.Row>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col className="mr-4 mt-2" >
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Lokasi Perawatan</Form.Label>
                                    <Form.Control size="sm" as="select" disabled>
                                    <option>--- Lokasi Perawatan A ---</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2.5rem'}} size='2rem' color='green'/></Col>
                        <Col className="mt-2">
                            <Form.Label>Keterangan</Form.Label>
                                <div className="mr-3" style={{display: "flex"}}>
                                    <Form.Control disabled size="lg" style={{width:"100%"}} type="text" placeholder="Keterangan A" required />
                                    
                                </div>
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2.5rem',marginLeft:'1rem'}} size='2rem' color='green'/></Col>
                    </Form.Row>

                    <Form.Row>
                        <Col className="" xs={10} md={5} lg={5}>
                            <Form.Label className="">Rumah Sakit</Form.Label>
                            <Form.Control disabled size="sm" type="text" placeholder="Rumah Sakit A" style={{width:"97%"}} />
                        </Col>
                        <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.7rem'}} size='2rem' color='green'/></Col>
                        <Col xs={10} md={5} lg={5}>
                              <Form.Group controlId="nip" style={{marginLeft:'0.3rem'}}>
                                  <Form.Label className="ml-2">Dokumen Kesehatan</Form.Label>
                                  <a href="../../file/surat_kesehatan.pdf" download>
                                    <div className="input-group ml-2" style={{width:"93%"}}>
                                      <Form.Control disabled type="text" className="custominput" defaultValue="surat_kesehatan.pdf" />
                                    </div>
                                  </a>
                              </Form.Group>
                            </Col>
                            <Col xs={2} md={1} lg={1}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'1rem'}} size='2rem' color='green'/></Col> 
                    </Form.Row>

                    
                        
                </Form>
              </Card.Body>
            </Card>
          </Tab>
            
          <Tab eventKey='dokumenpendukung' title='Dokumen Pendukung'>
            <Card>
              <Card.Body>
              <Form.Row>
                        <Col>
                        <Form.Row>
                            <Col xs={6} md={10} lg={10}>
                            <Form.Group controlId="nip">
                              <Form.Label>Dokumen Pendukung A</Form.Label>
                              <a href="../../file/dokumen_pendukung_A.pdf" download>
                                <div className="input-group">
                                  <Form.Control disabled type="text" className="custominput" defaultValue="dokumen_pendukung_A.pdf" />
                                </div>
                              </a>
                            </Form.Group>
                            </Col>
                            <Col xs={2} md={2} lg={2}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.5rem'}} size='2rem' color='green'/></Col> 
                        </Form.Row>
                        </Col>
                        <Col className="ml-4">
                          <Form.Row>
                              <Col xs={6} md={10} lg={10}>
                              <Form.Group controlId="nip">
                                <Form.Label>Dokumen Pendukung B</Form.Label>
                                <a href="../../file/dokumen_pendukung_B.pdf" download>
                                  <div className="input-group">
                                    <Form.Control disabled type="text" className="custominput" defaultValue="dokumen_pendukung_B.pdf" />
                                  </div>
                                </a>
                              </Form.Group>
                              </Col>
                              <Col xs={2} md={2} lg={2}><FaCheckCircle style={{marginTop:'2rem',marginLeft:'0.5rem'}} size='2rem' color='green'/></Col> 
                          </Form.Row>
                        </Col>
                    </Form.Row>
              </Card.Body>
            </Card>
          </Tab>
  
          <Tab eventKey='status' title='Status Data'>
            <Card>
              <Card.Body>
                <h4>View Status Validasi</h4>
                <Table striped bordered hover responsive='sm'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Kondisi</th>
                      <th>Status</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Input Data</td>
                      <td>
                        <Form.Check size='' type='checkbox' checked />
                      </td>
                      <td>OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Upload Dokumen</td>
                      <td>
                        <Form.Check size='' type='checkbox' checked />
                      </td>
                      <td>OK</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
        <br></br>
        <ShowButton></ShowButton>
        <br></br>
        </Layout>
      </>
    );
  }