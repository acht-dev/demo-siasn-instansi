import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row, Modal } from "react-bootstrap";
import { Layout } from "../../../Layout";
import Breadcrumb from "../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "./WizardSteps";
import TablesPilih from "./TablesPilih";
import Tables from "./Tables";
import Link from "next/link";
import PaginationTable from "./PaginationTable";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      backdrop='static'
      size='xl'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Pilih PNS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Row>
          <Col>
            <Form.Label>Cari PNS (NIP Baru)</Form.Label>
            <Form.Control
              type='email'
              placeholder='Cari pegawai dengan NIP baru'
            />
          </Col>
          <Col>
            <Form.Label>Cari PNS (NIP Lama)</Form.Label>
            <Form.Control
              type='email'
              placeholder='Cari pegawai dengan NIP lama'
            />
          </Col>
        </Form.Row>
        <br />
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
        <TablesPilih />
        <Row>
          <Col md={4}>Menampilkan 1-10 dari 40 entri</Col>
          <Col className='text-right'></Col>
          <Col>
            <PaginationTable />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className='wizard__showButton-buttonBox mt-3'>
          <button className='btn btn-after ml-2 mb-2 margin-left'>
            Submit
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function WizardTwo() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Pilih PNS</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-2' />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className='wizard__showButton-buttonBox mt-3'>
          <button
            className='btn btn-after  mb-2'
            onClick={() => setModalShow(true)}>
            Pilih PNS
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <br />
        {/* Ubah di Sini */}
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

          {/* table*/}
          <Tables />
        </div>
        <br />
        <Row>
          <Col md={4}>Menampilkan 1-10 dari 40 entri</Col>
          <Col className='text-right'></Col>
          <Col>
            <PaginationTable />
          </Col>
        </Row>
        <br />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizardTwo;
