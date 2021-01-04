import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
export default function UploadY5B() {
  return (
    <>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>DoK Realisasi SKP 1 tahun terakhir*</Form.Label>
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
          <Form.Label>DOK SK penetepan prestasi kerja luar biasa di tandatangani PPK*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Pas Foto terbaru*</Form.Label>
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
          <Form.Label>Bukti Prestasi*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Dok SK Jabatan (terakhir)*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>Dok Surat Pelantikan (dalam Jabatan Terakhir)*</Form.Label>
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
          <Form.Label className="mb-4">SPMT (Surat Perintah Melaksanakan Tugas)</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
        <Col md={5} className="paddingLeft">
          <Form.Label>Surat Perintah Pelaksana Tugas (plt) dari Pejabat Pembina Kepegawaian</Form.Label>
          <Form>
            <Form>
              <Form.File id="custom-file" label="Pilih Berkas" data-browse="Pilih" custom />
            </Form>
          </Form>
        </Col>
      </Form.Row>
      <Form.Row className="Step-3">
        <Col md={5}>
          <Form.Label>CV terbaru*</Form.Label>
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isInvalid />
            <Form.File.Label data-browse="Pilih">Pilih Berkas</Form.File.Label>
            <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
          </Form.File>
        </Col>
      </Form.Row>
    </>
  );
}
