import Table from "react-bootstrap/Table";
import GetData from "../../../data/monitoringUsulan.json";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";

function filterCSS(a){
  if(a === 'Terkirim') {
    return (
      <span className="btn label-status-diterima">
          {a}
      </span>
    );
  } else if (a === 'Ditolak')  {
    return (
      <span className="btn label-status-ditolak">
          {a}
      </span>
    );
  }
  else{
    return (
      <span className="btn label-status-op">
          {a}
      </span>
    );
  }
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Apakah anda yakin ingin menghapus data ini?</h4>
        <p>Dengan menghapus data ini berarti anda menghapus surat usulan. Data yang dihapus tidak bisa kembali.</p>
        <div className="text-right">
          <Button className="mr-4" variant="info" onClick={props.onHide}>
            Kembali
          </Button>
          <Link href="/">
            <Button variant="danger"> Hapus </Button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function TableMU() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
       <Table striped responsive="md">
                          <thead>
                            <tr>
                              <th>No. Surat Usulan</th>
                              <th>Jenis Kegiatan</th>
                              <th>NIP</th>
                              <th>Nama</th>
                              <th>Tgl Pengusulan</th>
                              <th>
                                <span className="ml-3">Status Usulan</span>
                              </th>
                              <th>
                                <span className="ml-3">Aksi</span>
                              </th>
                            </tr>
                          </thead>
                          {GetData.map((getDetail) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{getDetail.NoSU}</td>
                                  <td>{getDetail.jenisPemberhentian}</td>
                                  <td>{getDetail.nip}</td>
                                  <td>{getDetail.nama}</td>
                                  <td>{getDetail.tglPengusulan}</td>
                                  <td>
                                    {filterCSS(getDetail.statusUsulan)}
                                  </td>
                                  <td>
                                    <span className="btn label-detail">
                                      <a>
                                        <Link href="/layananTalenta/monitoringUsulan/wizardDetail/DetailMonitoringUsulan">
                                          <FaEdit />
                                        </Link>
                                      </a>
                                      |
                                      <a>
                                        <FaTrashAlt
                                          onClick={() => setModalShow(true)}
                                        />
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </Table>
                         {/* modal */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
  

}
