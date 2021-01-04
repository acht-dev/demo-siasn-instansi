import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
export default function UploadY2A_A() {
  return (
    <>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Dok Realisasi SKP 2 tahun terakhir*</Form.Label>
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
          <Form.Label>DOK SK jabatan (struktural)*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>DOK Surat Pelantikan*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Surat Penunjukan PLT dari PPK</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Hasil 3 nama yang lolos seleksi JPT*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Berita Acara Sumpah/Janji/Pelantikan Jabatan</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>SPMT (Surat Perintah Melaksanakan Tugas)</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
    </>
  );
}
