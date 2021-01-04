import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PosisiJabatan(props) {
  const { data, dataName } = useSelector((state) => state.getDataNip);
  return (
    <>
      <h3 className='mb-3 lbl-dputama'>Posisi dan Jabatan</h3>
      <div className='card card-body my-3' id='Posisi dan jabatan'>
        <Form>
          <Row sm={12}>
            <Col sm={6}>
              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Instansi Induk
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={5} sm={3}>
                    <Form.Control
                      type='text'
                      placeholder='3013'
                      defaultValue={data.instansi_induk_id}
                      disabled
                    />
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type='text'
                      placeholder='Kementerian Ketenagakerjaan'
                      disabled
                      defaultValue={data.instansi_induk_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Satuan kerja Induk
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type='text'
                      placeholder='Kementerian Ketenagakerjaan'
                      disabled
                      defaultValue={data.satuan_kerja_induk_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Kanreg
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={5} sm={3}>
                    <Form.Control type='text' placeholder='000' disabled />
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type='text'
                      placeholder='Badan Kepegewaian Negara'
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Instansi Kerja
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={5} sm={3}>
                    <Form.Control
                      type='text'
                      placeholder='00'
                      defaultValue={data.instansi_kerja_id}
                      disabled
                    />
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type='text'
                      placeholder='Badan Kepegawaian Negara'
                      disabled
                      defaultValue={data.instansi_kerja_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Satuan Kerja
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type='text'
                      placeholder='Kementerian Ketenagakerjaan'
                      disabled
                      defaultValue={data.satuan_kerja_kerja_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className='font-view-instansi'>
                      Kanreg
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={5} sm={3}>
                    <Form.Control type='text' placeholder='000' disabled />
                  </Col>
                  <Col sm={9}>
                    <Form.Control
                      type='text'
                      placeholder='Badan Kepegawaian Negara'
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={7}>
              <Form.Group>
                <Form.Row>
                  <Form.Label className='font-view-instansi ml-1'>
                    Unit Organisasi
                  </Form.Label>
                </Form.Row>
                <Form.Row>
                  <Col sm={3} xs={3}>
                    <Form.Control
                      type='text'
                      placeholder='020604300'
                      disabled
                      defaultValue={data.unor_id}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type='text'
                      placeholder='SUB BAGIAN PEGEWAIAN DAN ORGANISASI'
                      disabled
                      className=''
                      defaultValue={data.unor_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group>
                <Form.Row>
                  <Form.Label className='font-view-instansi'>Eselon</Form.Label>
                </Form.Row>
                <Form.Row>
                  <Col sm={4} xs={3}>
                    <Form.Control
                      type='text'
                      placeholder='020604300'
                      disabled
                      defaultValue={data.eselon_nama}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>
          </Row>

          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={10}>
                  <Form.Label className='font-view-instansi'>
                    Unit Organisasi Induk
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='SEKRETARIAT DIREKTORAT JENDERAL PEMBINAAN PELATIHAN DAN PRODUKTIVITAS'
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={4}>
                  <Form.Label className='font-view-instansi'>
                    Jenis Jabatan
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Fungsional Umum'
                    disabled
                    defaultValue={data.jenis_jabatan_nama}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={8}>
                  <Form.Label className='font-view-instansi'>
                    Jabatan Struktural
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    defaultValue={data.latihan_struktural_nama}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    TMT Jabatan Struktural
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='DD-MM-YYYY'
                    defaultValue={data.tmt_melaksanakan_tugas}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Jabatan Fungsional
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    defaultValue={data.jabatan_fungsional_id}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={5}>
                  <Form.Label className='font-view-instansi'></Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    disabled
                    className='mt-2'
                    defaultValue={data.jabatan_fungsional_nama}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    TMT Jabatan Fungsional
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='DD-MM-YYYY'
                    defaultValue={data.tmt_jabatan}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Jabatan Fungsional Umum
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    defaultValue={data.jabatan_fungsional_umum_id}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={5}>
                  <Form.Label className='font-view-instansi'></Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    disabled
                    className='mt-2'
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    TMT Jabatan Fungsional Umum
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='DD-MM-YYYY'
                    defaultValue={data.jabatan_fungsional_umum_nama}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={2}>
                  <Form.Label className='font-view-instansi'>
                    Lokasi Kerja
                  </Form.Label>
                  <Form.Control type='text' placeholder='3100000000' disabled />
                </Form.Group>
                <Form.Group as={Col} sm={6}>
                  <Form.Label className='font-view-instansi'></Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='JAKARTA'
                    disabled
                    className='mt-2'
                    defaultValue={data.lokasi_kerja_nama}
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Golongan Ruang Awal
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='II/C'
                    defaultValue={data.golongan_awal_nama}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Golongan Ruang Terakhir
                  </Form.Label>
                  <Form.Control type='text' placeholder='III/B' disabled />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    TMT Golongan
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='01-10-2017'
                    defaultValue={data.tmt_golongan}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Gaji Pokok
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='II/C'
                    defaultValue={data.gaji_pokok}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Masa Kerja (Tahun/Bulan)
                  </Form.Label>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        sm={3}
                        type='text'
                        placeholder='5'
                        disabled
                        defaultValue={data.mk_tahun}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        sm={3}
                        type='text'
                        placeholder='10'
                        disabled
                        defaultValue={data.mk_bulan}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    No SPMT
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='JAKARTA-III'
                    disabled
                    defaultValue={data.nomor_spmt}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>
                    Tanggal SPMT
                  </Form.Label>
                  <Form.Control type='text' placeholder='DD-MM-YYYY' disabled />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
          <Row sm={12}>
            <Col>
              <Form.Row>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>KPPN</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='JAKARTA-III'
                    disabled
                    defaultValue={data.kpkn_nama}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>KTUA</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    defaultValue={data.ktua_nama}
                    disabled
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label className='font-view-instansi'>TASPEN</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='-'
                    defaultValue={data.taspen_nama}
                    disabled
                  />
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
