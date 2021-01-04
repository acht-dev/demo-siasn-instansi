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

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

import Iconsearch from "./Iconsearch";
// icon ceklis verifikasi step4
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
export default function Langkah3() {
  return (
    <>
      <Tabs defaultActiveKey='resumedata' id='uncontrolled-tab-example'>
        <Tab eventKey='resumedata' title='RESUME DATA 1'>
          <Card>
            <Card.Body>
            <Form>
                <Form.Row>
                <Col md={6}>
                    <Form.Label className='mt-3'>Jenis Jabatan</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Fungsional Umum'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  
                  <Col>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          KPPN
                        </Form.Label>
                        <Form.Control disabled
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder='31563'
                          className=''
                        />
                      </Col>
                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control disabled
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder='Surabaya'
                            required
                          /><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                          {/* <i className='fa fa-check-circle' /> */}
                        </div> 
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Row>
                      <Col md={8}><Form.Label className='mt-3'>
                        Jabatan Fungsional Umum
                        </Form.Label></Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Row>
                        <Col md={4}>
                          <Form.Control disabled
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder='785856'
                            className=''
                          />
                        </Col>
                        <Col md={7}>
                          <Form.Control disabled
                            style={{}}
                            size='lg'
                            type='text'
                            placeholder='Staff'
                            className=''
                          />
                        </Col><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                      </Form.Row>
                    </Form.Row>
                  </Col>
                  <Col className='ml-4'>
                    <Form.Row>
                      <Col xs={12} md={6} lg={4}>
                        <Form.Label className='mt-3'>
                          Kanreg
                        </Form.Label>
                        <Form.Control disabled
                          style={{}}
                          size='lg'
                          type='text'
                          placeholder='02'
                          className=''
                        />
                      </Col>

                      <Col xs={12} md={6} lg={8}>
                        <div className='mt-5 ' style={{ display: "flex" }}>
                          <Form.Control disabled
                            size='lg'
                            style={{ width: "100%" }}
                            type='text'
                            placeholder='Kantor Regional II BKN'
                            required
                          /><Col md={1}>
                          <FaCheckCircle
                            size='1rem'
                            color='green'
                          />
                        </Col>
                        </div>
                      </Col>
                    </Form.Row>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Unit Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='DINAS PENDIDIKAN'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>Kantor Verifikasi Anggaran</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>


                <Form.Row>
                  <Col>
                    <Form.Label className='mt-3'>Lokasi Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className='ml-3 mt-3'>TASPEN</Form.Label>
                    <div className='ml-2' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <Form.Label className='mt-3'>Satuan Kerja</Form.Label>
                    <div className='mr-3' style={{ display: "flex" }}>
                      <Form.Control disabled
                        size='lg'
                        style={{ width: "100%" }}
                        type='text'
                        placeholder='Pemerintah Kota Surabaya'
                        required
                      /><Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      />
                    </Col>
                    </div>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </Tab>


        <Tab eventKey='redumedata2' title='RESUME DATA 2'>
          <Card>
            <Card.Body>
            <Form.Row className="Step-3">
                      <Col md={6}>TMT CPNS & PNS</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja Pensiun</Col>
                    </Form.Row>

                    {/* input 1 */}
                    <Form.Row className="Step-3">
                    <Col md={2}>
                    <Form.Control disabled></Form.Control>
                    <Form.Text className="text-muted">
                        TMT CPNS
                      </Form.Text>
                      </Col><Col md={3}>
                      <Form.Control disabled></Form.Control>
                    <Form.Text className="text-muted">
                        TMT PNS
                      </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled></Form.Control><Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={1} className="paddingRight">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col><Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Pensiun
                      </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Golongan Sekarang</Col>
                      <Col md={5} className="paddingLeft">Masa Kerja PNS</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Golongan
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Nama Pangkat
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Golongan
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 3 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Gaji</Col>
                      <Col md={6} className="paddingLeft">Pendidikan Pertama PNS</Col>
                    </Form.Row>

                    {/* Input 3 */}
                    <Form.Row className="Step-3">
                      <Col md={3} className="paddingRight">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Gaji Pokok Terakhir
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingRight">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun Gaji
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Pendidikan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                        <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                          Tahun Lulus
                        </Form.Text>
                      </Col>
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>KP Pengabdian</Col>
                      <Col md={6} className="paddingLeft">Gelar</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Diusulkan?
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Golongan Baru
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT KPP
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>

                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Depan
                        </Form.Text>
                      </Col>
                      <Col md={2} className="paddingLeft">
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Gelar Belakang
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>

                    {/* Judul 2 */}
                    <Form.Row className="Step-3">
                      <Col md={6}>Masa Kerja Golongan</Col>
                    </Form.Row>

                    {/* Input 2 */}
                    <Form.Row className="Step-3">
                      <Col md={1}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Tahun
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                        <Form.Text className="text-muted">
                        Bulan
                        </Form.Text>
                      </Col>
                      <Col md={2}>
                      <Form.Control disabled></Form.Control>
                      <Form.Text className="text-muted">
                        TMT Golongan Baru
                        </Form.Text>
                      </Col>
                      
                      <Col md={1}>
                      <FaCheckCircle
                        size='1rem'
                        color='green'
                      /> </Col>
                    </Form.Row>
            </Card.Body>
          </Card>
        </Tab>


        <Tab eventKey='resumedokumen' title='RESUME DOKUMEN'>
          <Card>
            <Card.Body></Card.Body>
            <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>Daftar Perorangan Calon Penerima Pensiun (DPCP)
         </Form.Label>
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
                            <Form.Label> SK Pengangkatan Pertama dlm Jabatan Fungsional
         </Form.Label>
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
                            <Form.Label> SP Pemberhentian sbg PNS Instansi Kolektif
          </Form.Label>
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
                            <Form.Label>SK Pemberhentian Sementara
         </Form.Label>
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

                    {/* Judul 4 */}
                    <Form.Row className="Step-3">
                        <Col md={5}></Col>
                        <Col className="paddingLeft"> </Col>
                    </Form.Row>

                    {/* Input 4 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label> Surat Permohonan Berhenti Sebagai PNS
          </Form.Label>
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
                            <Form.Label>SK Penaikan Pangkat Sesuai Ijazah
          </Form.Label>
                            <Form.Control disabled
                                id="custom-file"
                                value="Belum Upload Document"
                            />
                        </Col>
                        <Col md={1}><br></br><FaTimesCircle
                            size='1.5rem'
                            color='red'
                        />
                        </Col>
                    </Form.Row>

                    {/* Judul 5 */}
                    <Form.Row className="Step-3">
                        <Col md={5}></Col>
                    </Form.Row>

                    {/* Input 5 */}
                    <Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>Srt Pernyataan tdk Sedang Menjalani Proses Pidana/Pernah Dipidana
         </Form.Label>
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
                            <Form.Label>SK Pengangkatan, Pemindahan dan Pemberhentian Jabatan</Form.Label>
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


{/* Input 5 */}
<Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>
          SK Pengaktifan dari CLTN
          
         </Form.Label>
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
                            <Form.Label>Surat Keputusan CPNS
         </Form.Label>
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

                    {/* Input 5 */}
<Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>SK CLTN
          
         </Form.Label>
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
                            <Form.Label>
          Surat Keputusan Kenaikan Pangkat Terakhir
         </Form.Label>
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

                    {/* Input 5 */}
<Form.Row className="Step-3 align-items-center">
                        <Col md={5}>
                            <Form.Label>
          Surat Keputusan Penunjauan Masa Kerja
          
         </Form.Label>
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
                    

        <br></br><br></br>
          </Card>
        </Tab>
      </Tabs>

      <br></br>
    </>
  );
}
