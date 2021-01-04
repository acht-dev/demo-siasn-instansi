import Table from "react-bootstrap/Table";
import GetData from "../../../data/monitoringPersetujuan.json";
import GetView from "../../../data/dataviewUsulan.json";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal,
Container,
Row,
Col } from "react-bootstrap";

function ViewModal(props) {
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

function SetujuModal(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header >
        <a>
          <b >Setujui Usulan</b>
        </a>
      </Modal.Header>
      <Modal.Body>
        <a>Apakah anda yakin ingin menyetujui usulan ini?</a>
        <div className="text-center mt-3">
        <Button variant="outline-secondary" onClick={props.onHide}>Kembali</Button>{''}
          <Link href="#">
            <Button className="ml-4" varian="primary"> Setuju </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function TolakModal(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header >
        <a>
          <b >Tolak Usulan</b>
        </a>
      </Modal.Header>
      <Modal.Body>
        <a>Apakah anda yakin ingin menolak usulan ini?</a>
        <div className="text-center mt-3">
           <Button variant="outline-secondary" onClick={props.onHide}>Kembali</Button>{''}
          <Link href="#">
            <Button className="ml-4" variant="danger">Tolak</Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}


export default function TablePU() {
  const [modalShow, setModalShow] = React.useState(false);
  const [setujumodalShow, setModalSetujuShow] = React.useState(false);
  const [tolakmodalShow, setModalTolakShow] = React.useState(false);

  return (
    <div>
      <Table striped responsive="md">
            <thead>
              <tr>
                <th>No. Surat Usulan</th>
                <th>Tgl Pengusulan</th>
                <th>Jenis Layanan</th>
                <th>Jenis Prosedur</th>
                <th className="text-center"><span className="ml-3">Aksi</span></th>
              </tr>
            </thead>
      {GetData.map((getDetail) => {
        return (
            <tbody>
              <tr>
                <td>{getDetail.NoSU}</td>
                <td>{getDetail.tglPengusulan}</td>
                <td>{getDetail.JenisLayanan}</td>
                <td>{getDetail.jenisProsedur}</td>
                <td>
                  <span className="btn label-viewpu">
                    <a onClick={() => setModalShow(true)}>
                      VIEW
                    </a>
                  </span>
                  <span className="btn label-setuju">
                    <a onClick={() => setModalSetujuShow(true)}>
                      SETUJU
                    </a>
                  </span>
                  <span className="btn label-tolak">
                    <a onClick={() => setModalTolakShow(true)}>
                      TOLAK
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
        );
      })}
       </Table>
       <ViewModal show={modalShow} onHide={() => setModalShow(false)} />
       <SetujuModal show={setujumodalShow} onHide={() => setModalSetujuShow(false)} />
       <TolakModal show={tolakmodalShow} onHide={() => setModalTolakShow(false)} />
    </div>
  );
}
