import Table from "react-bootstrap/Table";
import GetData from "../../../data/monitoringSK.json";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";

export default function TableMU() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
       <Table striped responsive="md">
                          <thead>
                            <tr>
                              <th>No. Surat Keputusan</th>
                              <th>NIP</th>
                              <th>Nama</th>
                              <th>Jenis Pemberhentian</th>
                              <th>Tgl Penetapan SK</th>
                              <th>
                                <span className="ml-3">Aksi</span>
                              </th>
                            </tr>
                          </thead>
                          {GetData.map((getDetail) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{getDetail.NoSK}</td>
                                  <td>{getDetail.nip}</td>
                                  <td>{getDetail.nama}</td>
                                  <td>{getDetail.jenisPemberhentian}</td>
                                  <td>{getDetail.tglPenetapanSK}</td>
                                  <td>
                                      <span className="btn label-status-lengkap">
                                          LIHAT
                                      </span>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                        </Table>
    </div>
  );
  

}
