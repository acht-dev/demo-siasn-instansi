import { Table, Form, Col, Tab, Tabs, Card } from "react-bootstrap";

import { Layout } from "../../../Layout";
import Breadcrumb from "./Breadcrumb";
import CardProfile from "../wizardStepOneSU/CardProfile";
import ShowButton from "../wizardStepOneSU/ShowButton";

import "bootstrap/dist/css/bootstrap.min.css";

export default function DetailSuratUsulan() {
  const selectOptions = {
    jenisPenyakit: ["--- Jenis Penyakit ---", "Aaaa", "Bbb", "Ccc"],
    kategori: ["--- Kategori ---", "Aaaa", "Bbb", "Ccc"],
    status: ["--- Status ---", "Aaaa", "Bbb", "Ccc"],
    lokasiPerawatan: [
      "--- Lokasi Perawatan A ---",
      "Lokasi Perawatan B",
      "Lokasi Perawatan C",
    ],
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* title */}
        <div className='wizard__title'>
          <h2>Detail Surat Usulan</h2>
        </div>
        <CardProfile></CardProfile>
        <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
          <Tab eventKey='editdata' title='Data'>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Col className='mr-4' xs={10} md={5} lg={5}>
                      <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Jenis Penyakit</Form.Label>
                        <Form.Control size='sm' as='select'>
                          {selectOptions.jenisPenyakit.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col xs={10} md={5} lg={5}>
                      <Form.Label>Lokasi Rumah</Form.Label>
                      <div className='mr-3' style={{ display: "flex" }}>
                        <Form.Control
                          size='lg'
                          style={{ width: "100%" }}
                          type='text'
                          placeholder='Lokasi Rumah A'
                          required
                        />
                      </div>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col className='mr-4' xs={10} md={5} lg={5}>
                      <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Control as='select' size='sm'>
                          {selectOptions.kategori.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col xs={10} md={5} lg={5}>
                      <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                          style={{ width: "96%" }}
                          size='sm'
                          as='select'>
                          {selectOptions.status.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col xs={10} md={5} lg={5} className='mr-4'>
                      <Form.Row>
                        <Col>
                          <Form.Label className=''>
                            Tanggal Penetapan Kategori
                          </Form.Label>
                          <Form.Control
                            type='date'
                            name='dob'
                            placeholder='Date of Birth'
                          />
                        </Col>
                      </Form.Row>
                    </Col>
                    <Col xs={10} md={5} lg={5}>
                      <Form.Row>
                        <Col>
                          <Form.Label className=''>Tanggal Status</Form.Label>
                          <Form.Control
                            style={{ width: "97%" }}
                            type='date'
                            name='dob'
                            placeholder='Date of Birth'
                          />
                        </Col>
                      </Form.Row>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col className='mr-4 mt-2' xs={10} md={5} lg={5}>
                      <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Lokasi Perawatan</Form.Label>
                        <Form.Control size='sm' as='select'>
                          {selectOptions.lokasiPerawatan.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className='mt-2' xs={10} md={5} lg={5}>
                      <Form.Label>Keterangan</Form.Label>
                      <div className='mr-3' style={{ display: "flex" }}>
                        <Form.Control
                          size='lg'
                          style={{ width: "100%" }}
                          type='text'
                          placeholder='Keterangan A'
                          required
                        />
                      </div>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col className='mr-2' xs={10} md={5} lg={5}>
                      <Form.Label className=''>Rumah Sakit</Form.Label>
                      <Form.Control
                        size='sm'
                        type='text'
                        placeholder='Rumah Sakit A'
                      />
                    </Col>
                    <Col xs={10} md={5} lg={5}>
                      <Form.Label className='ml-3'>
                        Dokumen Kesehatan
                      </Form.Label>
                      <Form.File
                        id='custom-file-translate-scss'
                        label='Custom file input'
                        lang='en'
                        custom
                        style={{ width: "96%" }}
                        className='ml-3'
                      />
                    </Col>
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
                      <Col xs={10} md={10} lg={10}>
                        <Form.Label className=''>
                          Dokumen Pendukung A
                        </Form.Label>
                        <Form.File
                          id='custom-file-translate-scss'
                          label='Custom file input'
                          lang='en'
                          custom
                        />
                      </Col>
                    </Form.Row>
                  </Col>
                  <Col className='ml-4'>
                    <Form.Row>
                      <Col xs={10} md={10} lg={10}>
                        <Form.Label className=''>
                          Dokumen Pendukung B
                        </Form.Label>
                        <Form.File
                          id='custom-file-translate-scss'
                          label='Custom file input'
                          lang='en'
                          custom
                        />
                      </Col>
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
                        <Form.Check size='' type='checkbox' />
                      </td>
                      <td>OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Upload Dokumen</td>
                      <td>
                        <Form.Check size='' type='checkbox' />
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
