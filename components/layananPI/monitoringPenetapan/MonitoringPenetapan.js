import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import TableMP from "./TableMP";
import PaginationTable from "../../PaginationTable";
import Breadcrumb from "./Breadcrumb";
import { Layout } from "../../Layout";

export default function MonitoringPenetapan() {
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
  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb></Breadcrumb>
      {/* title */}
      <div className='wizard__title'>
        <h2 className=' my-4'>Monitoring Penetapan</h2>
      </div>

      {/* Component input form */}
      <div className='wizard__inputForm monitoringUsulan'>
        <Form>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='nomorSU'>
                <Form.Label>Nomor Surat Usulan</Form.Label>
                <Form.Control type='text' placeholder='Ketik No. Usulan...' />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group className='' controlId='formGridAddress1'>
                <Form.Label>Tanggal Pengusulan </Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of Birth'
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nip'>
                <Form.Label>NIP</Form.Label>
                <Form.Control type='text' placeholder='Ketik NIP Pengusul...' />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Jenis Peremajaan</Form.Label>
                <Form.Control as='select' size='lg'>
                  <option>--Pilih Jenis Peremajaan--</option>
                  <option>Golongan/KP</option>
                  <option>Pendidikan</option>
                  <option>PMK</option>
                  <option>Pindah Instansi</option>
                  <option>Profesi</option>
                  <option>Kedudukan Hukum</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group className='' controlId='formGridAddress1'>
                <Form.Label>Tanggal Penetapan </Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of Birth'
                />
              </Form.Group>
            </Col>
            {/* <span className="mr-5"></span> */}
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nama'>
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ketik Nama Pengusul...'
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <div className='wizard__inputForm-buttonBox mt-3'>
            <Form.Row>
              <Button
                className='mr-4 wizard__formButtonSubmit'
                type='submit'
                onClick={handleSubmit}>
                Cari Usulan
              </Button>

              <Button
                className='wizard__formButtonReset'
                type='button'
                onClick={handleReset}>
                Reset
              </Button>
            </Form.Row>
          </div>
        </Form>
      </div>

      {/* dropdown table */}

      {/* table surat usulan */}
      <div>
        <div className='mb-4'>
          <span>
            <div className='input-group'>
              <span>Tampilkan</span>
              <Dropdown className='ml-2'>
                <Dropdown.Toggle
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
        {/* table Surat Usulan Langkah 1 (Pilih Surat Usulan) */}
        <TableMP></TableMP>
      </div>
      {/* akhir table surat usulan */}

      <Row className='mb-4'>
        <Col>
          <p className='monitoringUsulan' style={{ color: "#2D3C6C" }}>
            Menampilkan 1-10 dari 40 entri
          </p>
        </Col>
        <Col className='text-right'>
          <PaginationTable />
        </Col>
      </Row>
    </Layout>
  );
}
