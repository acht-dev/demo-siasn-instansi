import Table from "react-bootstrap/Table";
import GetData from "../../../data/monitoringPersetujuan.json";
import GetView from "../../../data/dataviewUsulan.json";

import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal,
Container,
Row,
Col } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>View Usulan</Modal.Header>
      <Modal.Body>
      <Container>
          <Row>
            <Col xs={12} md={6}>
              <a><b>No Surat Usulan :</b>198609262015051001</a>
            </Col>
            <Col xs={12} md={6}>
              <a><b>No Surat Usulan :</b>Pindah Instansi</a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <a><b>Tanggal Pengusulan</b>17/08/2020</a>
            </Col>
            <Col xs={12} md={6}>
            <a><b>Jenis Prosedur</b>Instansi Daerah ke Instansi Daerah dalam 1 Provinsi</a>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>NIP</th>
                          <th>Nama</th>
                        </tr>
                      </thead>
                {GetView.map((getView) => {
                  return (
                      <tbody>
                        <tr>
                          <td>{getView.NIP}</td>
                          <td>{getView.Nama}</td>
                        </tr>
                      </tbody>
                  );
                })}
            </Table>
          </Row>        
        </Container>
      </Modal.Body>
    </Modal>
  );
}


export default function TableMP() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Table striped responsive="md">
            <thead>
              <tr>
                <th>No. Surat Usulan</th>
                <th>Tgl Pengusulan</th>
                <th>Tgl Penetapan</th>
                <th>Jenis Layanan</th>
                <th>Jenis Prosedur</th>
                <th><span className="ml-3">Aksi</span></th>
              </tr>
            </thead>
      {GetData.map((getDetail) => {
        return (
            <tbody>
              <tr>
                <td>{getDetail.NoSU}</td>
                <td>{getDetail.tglPengusulan}</td>
                <td>{getDetail.tglPenetapan}</td>
                <td>{getDetail.JenisLayanan}</td>
                <td>{getDetail.jenisProsedur}</td>
                <td>
                  <span className="btn label-viewmp">
                    <a onClick={() => setModalShow(true)}>
                      VIEW
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
        );
      })}
       </Table>

       <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
