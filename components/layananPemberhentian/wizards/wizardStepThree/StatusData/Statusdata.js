import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl,  Card, CardBody } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";
import UploadY3B from "../uploadDokumen/UploadY3B";
import UploadY4ABC from "../uploadDokumen/UploadY4ABC";
import UploadY6ABC from "../uploadDokumen/UploadY6ABC";
import UploadZ101112B from "../uploadDokumen/UploadZ101112B";

function Statusdata(props) {
  const [file, setFile] = useState("");
  const selectOptions={
    tahun: ["--- Tahun ---","Aaaa", "Bbb", "Ccc"],
    golonganLama:["--- Pilih ---","Aaaa", "Bbb", "Ccc"],
    satuanKerja:["--- Pilih ---","Aaaa","Bbbb","Ccccc"],     
  };
  return (
    <>
      <main className={styles.main}>
                <section className={styles.container}>
                  <div className={styles.row}></div>
                  <div className={styles.components}>
                    {/* Step 3-1 */}

                    {/* Judul 1 */}
                    <Card>
            <Card.Body>
              <h4>View Status Validasi</h4>
              <Table striped bordered hover responsive='sm'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Kondisi</th>
                    <th>Status</th>
                    <th>Catatan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Kedudukan Hukum Aktif</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Tidak Aktif</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Telah Mencapai BUP</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Umur Kurang Dari 58 Tahun</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Nilai SKP Baik</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>4</td>
                    <td>Data Keluarga Lengkap</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Tidak Lengkap</td>
                  </tr><tr>
                    <td>5</td>
                    <td>Data Alamat Lengkap</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>6</td>
                    <td>Tidak Ada Hukuman Disiplin Aktif</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>OK</td>
                  </tr><tr>
                    <td>7</td>
                    <td>Masa Kerja</td>
                    <td>
                      <Form.Check size='' type='checkbox' />
                    </td>
                    <td>Masa Kerja Lebih Dari 30 Tahun</td>
                  </tr>
                </tbody>
              </Table>
              <div className='wizard__showButton-buttonBox mt-5'>
                <button className='btn btn-before ml-2 mb-2'>Batal</button>
                <button className='btn btn-after  mb-2'>Simpan</button>
              </div>
            </Card.Body>
          </Card>
            <br />
          </div>
        </section>
      </main>
    </>
  );
}

export default Statusdata;
