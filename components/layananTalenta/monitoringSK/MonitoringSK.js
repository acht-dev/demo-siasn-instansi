import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import TableMSK from "./TableMSK";
import PaginationTable from "../../../components/PaginationTable";
import { Layout } from "../../Layout";

function WizardFirstMSK() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };

  const selectOptions = {
    jenisKegiatan: [
      "--- Pilih Jenis Kegiatan ---",
      "Atas Permintaan Sendiri",
      "Batas Usia Pensiun",
      "Kebijakan Pemerintah",
      "Meninggal",
      "Batas Usia Pensiun",
    ],
    provinsi: [
      "--- Pilih Provinsi ---",
      "Banten",
      "DKI Jakarta",
      "Jawa Barat",
      "Jawa Tengah",
      "Jawa Timur",
    ],
  };

  return (
    <Layout>
      {/* <Layout> */}
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title mb-3'>
        <h2>Monitoring Surat Keputusan</h2>
      </div>

      {/* Component input form */}
      <div className='wizard__inputForm'>
        {/* form Monitoring */}
        <Form>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='nip'>
                <Form.Label>No. Surat Keputusan</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ketik Nomor Surat Keputusan'
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group className='' controlId='formGridAddress1'>
                <Form.Label>Tanggal Penetapan SK</Form.Label>
                <Form.Control type='date' name='dob' placeholder='DD/MM/YYYY' />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nama'>
                <Form.Label>NIP</Form.Label>
                <Form.Control type='text' placeholder='Ketik NIP Pengusul...' />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Jenis Kegiatan</Form.Label>
                <Form.Control as='select' size='sm'>
                  {selectOptions.jenisKegiatan.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Status Usulan</Form.Label>
                <Form.Control as='select' size='sm'>
                  {selectOptions.provinsi.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nama'>
                <Form.Label>Nama</Form.Label>
                <Form.Control type='text' placeholder='Ketik Nama' />
              </Form.Group>
            </Col>
          </Form.Row>

          <div className='wizard__inputForm-buttonBox mt-3'>
            <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
              Cari Usulan
            </Button>

            <Button className='wizard__formButtonReset' type='button'>
              Reset
            </Button>
          </div>
        </Form>
        {/* End Form Monitoring */}
      </div>

      {/* table surat usulan */}
      <div>
        <div className='mb-4'>
          <span>
            <div className='input-group'>
              <span style={{ marginTop: "3px" }}>Tampilkan</span>
              <Dropdown className='ml-2'>
                <Dropdown.Toggle
                  size='sm'
                  variant='btn btn-outline-secondary'
                  id='dropdown-basic'>
                  10
                  <svg
                    className='ml-1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='17'
                    viewBox='0 0 22 17'>
                    <path
                      id='Polygon_3'
                      data-name='Polygon 3'
                      d='M11,0,22,17H0Z'
                      transform='translate(22 17) rotate(-180)'
                      fill='#aaa'
                    />
                  </svg>
                </Dropdown.Toggle>
                <span className='ml-1'>entri</span>
                <Dropdown.Menu>
                  <Dropdown.Item value='5' href='#/action-1'>
                    5
                  </Dropdown.Item>
                  <Dropdown.Item value='10' href='#/action-1'>
                    10
                  </Dropdown.Item>
                  <Dropdown.Item value='20' href='#/action-2'>
                    20
                  </Dropdown.Item>
                  <Dropdown.Item value='30' href='#/action-3'>
                    30
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </span>
        </div>
        {/* table Monitoring Usulan */}
        <TableMSK></TableMSK>
      </div>
      {/* akhir table surat usulan */}

      <Row className='mb-5'>
        <Col>Menampilkan 1-10 dari 40 entri</Col>
        <Col className='text-right'>
          <PaginationTable />
        </Col>
      </Row>
      <br />
      <br />
    </Layout>
  );
}

export default WizardFirstMSK;
