import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
export default function UploadY3B_B() {
  return (
    <>
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
          <Form.Label>SK PAK*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Asli Klarifikasi PAK</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Dok SK Jabatan (Terakhir)*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Surat Penunjukan PLT dari PPK</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Surat Pernyataan Pelantikan*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Berita Acara Sumpah/Janji/Pelantikan Jabatan</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
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
