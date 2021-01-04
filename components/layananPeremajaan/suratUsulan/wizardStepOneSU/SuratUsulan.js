import {Layout} from "../../../../components/Layout";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "./../Breadcrumb";
import TableSU from "./TableSU";
import PaginationTable from "../../../../components/PaginationTable";
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

  const selectOptions={
    jenisPeremajaan: ["--- Pilih Jenis Peremajaan ---","Kesehatan","PMK","LHKPN","CLTN","Profesi","Golongan/KP"],
    statusUsulan: ["--- Pilih Status Usulan ---","Lengkap","Tidak Lengkap"]
  };


  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Surat Usulan</h2>
        </div>
        {/* wizard step section */}
        <div className='wizard__page-1_SU'>
          <div className='wizard__container'>
            <div className='row'>
              <div className='col-6 wizard__step-1 active'>
                <h5>Langkah 1</h5>
                <p>Pilih Surat Usulan</p>
              </div>
              <div className='col-6  wizard__step-2 disabled'>
                <h5>Langkah 2</h5>
                <p>Upload Surat Usulan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component input form */}
        <div className='wizard__inputForm'>
          <Form>
            <Form.Row>
              <Col xs={12} md={3} className='mr-md-3'>
                <Form.Group controlId='nip'>
                  <Form.Label>NIP</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ketik NIP Pengusul...'
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className='mr-md-3 ml-md-3'>
                <Form.Group controlId='nama'>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ketik Nama Pengusul...'
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className='ml-md-3'>
                <Form.Group className='' controlId='formGridAddress1'>
                  <Form.Label>Tanggal Pengusulan </Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    placeholder='Date of Birth'
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12} md={3} className='mr-md-3'>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Jenis Peremajaan</Form.Label>
                  <Form.Control as='select' size='sm' style={{fontSize:'17px'}}>
                  {selectOptions.jenisPeremajaan.map((data)=>{
                      return<option>{data}</option>
                    })}

                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className='mr-md-3 ml-md-3'>
                <Form.Group controlId='exampleForm.ControlSelect1'>
                  <Form.Label>Status Pengusulan</Form.Label>
                  <Form.Control as='select' size='sm' style={{fontSize:'17px'}}>
                  {selectOptions.statusUsulan.map((data)=>{
                      return<option>{data}</option>
                    })}

                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <div className='wizard__inputForm-buttonBox mt-3'>
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
            </div>
          </Form>
        </div>

        {/* table surat usulan */}
        <div>
          <div className='mb-4'>
            <span>
              <div className='input-group'>
                <span style={{marginTop:"3px"}}>Tampilkan</span>
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
          {/* table Surat Usulan Langkah 1 (Pilih Surat Usulan) */}
          <TableSU></TableSU>
        </div>
        {/* akhir table surat usulan */}

        <Row className='mb-4'>
          <Col>Menampilkan 1-10 dari 40 entri</Col>
          <Col className='text-right'>
            <PaginationTable/>
          </Col>
        </Row>

        <Link href='/layananPeremajaan/suratUsulan/step-2'>
          <Button className='mr-4 mb-5 wizard__formButtonSubmit' type='submit'>
            Selanjutnya
          </Button>
        </Link>

        {/* show card profile */}
        {/* <CardProfile isClick={isClick} /> */}

        {/* show button */}
        {/* <ShowButton isShowButton={isClick} /> */}
      </Layout>
    </>
  );
}

export default WizardFirstSU;
