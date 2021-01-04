import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import {useSelector} from "react-redux"

export default function DataLainnya(props) {
  const { data, dataName } = useSelector(state => state.getDataNip)

  return (
    <>
      <h3 className="mb-3 lbl-dputama">Data Lainnya</h3>
      <div className="card card-body my-3" id="DataLainnya">
        <Form>
          <Row sm={12}>
            <Col sm={6}>
              <Form.Group>
                <Form.Label className="font-view-instansi">
                  Status Perkawinan
                </Form.Label>
                <Form.Control type="text" placeholder="Belum Kawin" defaultValue={dataName.jenis_kawin_nama} disabled />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label className="font-view-instansi">
                    Jumlah Istri/ Suami
                  </Form.Label>
                  <Form.Control type="text" placeholder="1" disabled />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="font-view-instansi">
                    Jumlah Anak
                  </Form.Label>
                  <Form.Control type="text" placeholder="0" defaultValue={dataName.anak_tanggungan} disabled />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} sm={8}>
                  <Form.Label className="font-view-instansi">
                    No. Surat Keterangan Sehat Dokter
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="B/02/XI/2009/UPT LAB"
                    disabled
                    defaultValue={dataName.ket_sehat_dokter}
                  />
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label className="font-view-instansi">
                    Tanggal
                  </Form.Label>
                  <Form.Control type="text" placeholder="DD/MM/YYYY" defaultValue={dataName.ket_sehat_tanggal} disabled />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm={8}>
                  <Form.Label className="font-view-instansi">
                    No. Surat Ket. Bebas Narkoba
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="B/02/XI/2009/UPT LAB"
                    disabled
                    defaultValue={dataName.ket_bebas_narkoba_nomor}
                  />
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label className="font-view-instansi">
                    Tanggal
                  </Form.Label>
                  <Form.Control type="text" placeholder="DD/MM/YYYY" defaultValue={dataName.ket_bebas_narkoba_tanggal} disabled />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm={8}>
                  <Form.Label className="font-view-instansi">
                    No. Surat Catatan Kepolisian
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="B/02/XI/2009/UPT LAB"
                    disabled
                    defaultValue={dataName.ket_kelakuanbaik_nomor}
                  />
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label className="font-view-instansi">
                    Tanggal
                  </Form.Label>
                  <Form.Control type="text" placeholder="DD/MM/YYYY" defaultValue={dataName.ket_kelakuanbaik_tanggal} disabled />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm={8}>
                  <Form.Label className="font-view-instansi">
                    Akta Kelahiran
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="B/02/XI/2009/UPT LAB"
                    disabled
                    defaultValue={dataName.akta_kelahiran}
                  />
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label className="font-view-instansi">
                    Status Hidup
                  </Form.Label>
                  <Form.Control type="text" placeholder="Hidup" defaultValue={data.status_hidup === true ? "Hidup" : "Meninggal"} disabled />
                </Form.Group>
              </Form.Row>
            </Col>

            <Col sm={6}>
              <Form.Row>
                <Col sm={7}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      Akta Meninggal
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="B/02/XI/2009/UPT LAB"
                      disabled
                      defaultValue={data.akta_meninggal}
                    />
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      Tanggal
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                      defaultValue={data.tgl_meninggal}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={7}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      No. ASKES
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="B/02/XI/2009/UPT LAB"
                      disabled
                      defaultValue={data.askes_nomor}
                    />
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      No. TASPEN
                    </Form.Label>
                    <Form.Control type="text" placeholder="XXXX" defaultValue={data.taspen_id} disabled />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={7}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      No. NPWP
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="B/02/XI/2009/UPT LAB"
                      disabled
                      defaultValue={dataName.npwp_nomor}
                    />
                  </Form.Group>
                </Col>
                <Col sm={5}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      Tanggal NPWP
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                      defaultValue={dataName.npwp_tanggal}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col sm={7}>
                  <Form.Group>
                    <Form.Label className="font-view-instansi">
                      Bahasa
                    </Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      className="textarea-fix"
                      rows="6"
                      placeholder="Bahasa Indonesia
                                        Bahasa Inggris"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
