import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form } from "react-bootstrap";

export default function Komponen32() {
  // Komponen 32 adalah komponen form pada bagian SKP si-asn BKN

  return (
    <div>
      <Form>
        <Form.Row className='form-group mt-3'>
          <Col className='ml-3' md={5}>
            <Form.Label>Jenis Jabatan</Form.Label>
            <Form.Control disabled as='select' defaultValue='Fungsional Umum'>
              <option>Fungsional Umum</option>
              <option>Option1</option>
              <option>Option2</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col className='ml-3' md={5}>
            <Form.Label>Tahun</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Nilai SKP</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={1}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='60%' disabled />
          </Col>
          <Col md={2}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Orientasi Pelayanan</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
          <Col md={2} className='ml-3'>
            <Form.Label>Integritas</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Komitmen</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
          <Col md={2} className='ml-3'>
            <Form.Label>Disiplin</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Kerja Sama</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
          <Col md={5} className='ml-3'>
            <Form.Label>Inisiatif Kerja</Form.Label>
            <Form.Control disabled as='select' defaultValue='Inisiatif Kerja'>
              <option>--- Pilih Predikat Penilaian ---</option>
              <option>Dibawah Ekspektasi</option>
              <option>Sesuai Ekspektasi</option>
              <option>Diatas Ekspektasi</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Nilai Perilaku Kerja</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={1}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='40%' disabled />
          </Col>
          <Col md={2}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
        </Form.Row>
        <Form.Row className='form-group'>
          <Col md={2} className='ml-3'>
            <Form.Label>Nilai Prestasi Kerja</Form.Label>
            <Form.Control disabled type='text' placeholder='' />
          </Col>
          <Col md={3}>
            <Form.Label>
              <br />
            </Form.Label>
            <Form.Control type='text' placeholder='' disabled />
          </Col>
          <Col md={5}></Col>
        </Form.Row>
      </Form>
    </div>
  );
}
