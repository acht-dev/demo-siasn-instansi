import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row ,Card} from "react-bootstrap";
export default function UploadX6C() {
  return (
    <>
    <Card>
      <Card.Body>
      
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Dok Realisasi SKP 1 tahun terakhir*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>DOK SK KP Perorangan/SK Petikan Terakhir*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Dok SK Tugas Belajar / Izin Belajar*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Surat Keputusan Pengangkatan Jabatan</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Surat Keputusan Pemindahan Jabatan</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Surat Keputusan Pemberhentian Jabatan</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
     
      </Card.Body>
    </Card>
     </>
  );
}
