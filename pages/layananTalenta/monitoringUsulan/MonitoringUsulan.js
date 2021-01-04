// import Layout from "../../../components/Layout";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import TableMU from "./TableMU";
import PaginationTable from "../../../components/PaginationTable";
import Link from "next/link";


function WizardFirstSU() {
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
    <>
      {/* <Layout> */}
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title mb-3'>
          <h2>Monitoring Usulan</h2>
        </div>

        {/* Component input form */}
        <div className='wizard__inputForm'>
            {/* form Monitoring */}
            <Form>
                          <Form.Row>
                            <Col xs={12} md={3} className="mr-md-3">
                              <Form.Group controlId="nip">
                                <Form.Label>Nomor Surat Usulan</Form.Label>
                                <Form.Control type="text" placeholder="Ketik No.Surat Usulan..." />
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={3} className="ml-md-5">
                              <Form.Group className="" controlId="formGridAddress1">
                                <Form.Label>Nama Kegiatan</Form.Label>
                                <Form.Control type="text" placeholder="Ketik Nama Kegiatan..." />
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={3} className="mr-md-5 ml-md-5">
                              <Form.Group controlId="nama">
                                <Form.Label>Tanggal Pengusulan</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </Col>
                          </Form.Row>
                          <Form.Row>
                            <Col xs={12} md={3} className="mr-md-3">
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Tahun</Form.Label>
                                <Form.Control type="text" placeholder="Ketik Tahun Kegiatan..." />
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={3} className="ml-md-5">
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Tanggal Mulai</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </Col>
                            <Col xs={12} md={3} className="mr-md-5 ml-md-5">
                              <Form.Group controlId="nama">
                                <Form.Label>Tanggal Selesai</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                              </Form.Group>
                            </Col>
                          </Form.Row>

                          <div className="wizard__inputForm-buttonBox mt-3">
                            <Button className="mr-4 wizard__formButtonSubmit" type="submit">
                              Cari Usulan
                            </Button>

                            <Button className="wizard__formButtonReset" type="button">
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
                <span>Tampilkan</span>
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
          <TableMU></TableMU>
        </div>
        {/* akhir table surat usulan */}

        <Row className='mb-4'>
          <Col>Menampilkan 1-10 dari 40 entri</Col>
          <Col className='text-right'>
            <PaginationTable/>
          </Col>
        </Row>

        <Link href='/layananTalenta/suratUsulan/step-2'>
          <Button className='mr-4 mb-5 wizard__formButtonSubmit' type='submit'>
            Selanjutnya
          </Button>
        </Link>

        {/* show card profile */}
        {/* <CardProfile isClick={isClick} /> */}

        {/* show button */}
        {/* <ShowButton isShowButton={isClick} /> */}
      {/* </Layout> */}
    </>
  );
}

export default WizardFirstSU;
