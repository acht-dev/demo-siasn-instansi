import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, InputGroup } from "react-bootstrap";
import Iconsearch from "./Iconsearch";
import Datepicker from "./Datepicker";

export default function PejabarPenilaiSKP() {
  // Komponen 32 adalah komponen form pada bagian SKP si-asn BKN
  return (
    <div className='card'>
      <Form>
        <Form.Row className='form ml-3 mt-3'>
          <Col md={1}>
            <Form.Label>Status</Form.Label>
            <Form.Check
              type='radio'
              label='PNS'
              name='PNSRadios'
              id='PNSRadios'
            />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Check
              type='radio'
              label='NON PNS'
              name='nonPNSRadios'
              id='nonPNSRadios'
            />
          </Col>
          <Col md={1} className='mr-3'></Col>
          <Col md={2} id='PNSRadios'>
            <Form.Label>UNOR</Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
          <Col md={3} id='PNSRadios'>
            <Form.Label>
              <br />
            </Form.Label>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='Username'
                aria-describedby='inputGroupPrepend'
                name='username'
                disabled
              />
              <InputGroup.Append>
                <InputGroup.Text id='inputGroupPrepend'>
                  {" "}
                  <svg
                    width='20px'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 35.997 36.004'>
                    <path
                      id='Icon_awesome-search'
                      data-name='Icon awesome-search'
                      d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                      fill='#2d3c6c'
                    />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row className='form ml-3'>
          <Col md={5} className='mr-3'>
            <Form.Label>NIP/NRP</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={5}>
            <Form.Label>Golongan</Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
        </Form.Row>
        <Form.Row className='form ml-3'>
          <Col md={5} className='mr-3'>
            <Form.Label>Nama</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={5}>
            <Form.Label>TMT Golongan</Form.Label>
            <Datepicker></Datepicker>
          </Col>
        </Form.Row>
        <Form.Row className='form-group ml-3'>
          <Col md={5}>
            <Form.Label>Jabatan</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
