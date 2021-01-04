import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateDataAsn } from "../../../../../redux/actions/berkasUsul/updateDataAsn";
import { uploadFileAsn } from "../../../../../redux/actions/berkasUsul/uploadFileAsn";
import {getGolonganPns} from "../../../../../redux/actions/berkasUsul/getGolonganPns";
import {newUsulanGolongan} from "../../../../../redux/actions/berkasUsul/newUsulanGolongan";
// import {refGolongan} from "../../../../../redux/actions/berkasUsul/refGolongan";
// import {refKP} from "../../../../../redux/actions/berkasUsul/refKP";
import Tables from "./Tables";

export default function Golongan(props) {
  const dispatch = useDispatch();
  const selectOptions = {
    jenisKP: ["Jenis KP", "1", "2", "3"],
  };
  const { nipAsn, getUsulanId, getGolongan } = useSelector((state) => state.getIdAsn);

  // useEffect(() => {
  //   dispatch(getGolonganPns(nipAsn.id))
  // },[])

  const { dataGolongan, dataKP } = useSelector((state) => state.referensiUsulan)

  const [uploadFile, setUploadFile] = useState('');
  const [dataUsul, setDataUsul] = useState({
    tipe: 'I',
    id_riwayat: '',
    usulan_id: getUsulanId.id,
    pns_orang_id: nipAsn.id,
    mk_golongan_bulan: null,
    mk_golongan_tahun: null,
    sk_nomor: null,
    sk_tanggal: null,
    tanggal_letter_bkn: null,
    tmt_golongan: null,
    nomor_letter_bkn: null,
    jenis_kp_id: null,
    tanggal_usul: new Date().toISOString().slice(0, 10),
    golongan_id: null,
    // nip_lama: null,
  });

  const _simpanUsul = (e) => {
    e.preventDefault();
    const dataBody = new FormData();
    dataBody.append('tipe', 'I');
    dataBody.append('id_riwayat', dataUsul.id_riwayat);
    dataBody.append('usulan_id', dataUsul.usulan_id);
    dataBody.append('pns_orang_id', dataUsul.pns_orang_id);
    dataBody.append('mk_golongan_bulan', dataUsul.mk_golongan_bulan);
    dataBody.append('mk_golongan_tahun', dataUsul.mk_golongan_tahun);
    dataBody.append('sk_nomor', dataUsul.sk_nomor);
    dataBody.append('sk_tanggal', dataUsul.sk_tanggal);
    dataBody.append('tanggal_letter_bkn', dataUsul.tanggal_letter_bkn);
    dataBody.append('tmt_golongan', dataUsul.tmt_golongan);
    dataBody.append('nomor_letter_bkn', dataUsul.nomor_letter_bkn);
    dataBody.append('jenis_kp_id', dataUsul.jenis_kp_id);
    dataBody.append('tanggal_usul', dataUsul.tanggal_usul);
    dataBody.append('golongan_id', dataUsul.golongan_id);
    dispatch(newUsulanGolongan(dataBody));
  };

  const onChange = async (e) =>{
    console.log(e.target.files[0])
    setUploadFile(e.target.files[0])
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('pns_orang_id', nipAsn.id);
    formData.append('usulan_id', getUsulanId.id);
    dispatch(uploadFileAsn(formData))
  }

  return (
    <>
      <div className='mb-3'>
        <ToastContainer autoClose={2000} />
        <Row>
          <Tables data={getGolongan.Value}/>
        </Row>
        <Row>
          <Col>
            <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
              <Tab className='mr-2' eventKey='editdata' title='Edit Data '>
                <Container className='p-3'>
                  <Form onSubmit={(e) => _simpanUsul(e)}>
                    <Form.Row>
                      <Form.Group as={Col} controlId='Golongan'>
                        <Form.Label>Golongan</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          {/* <Form.Control
                            type='text'
                            placeholder='22'
                            className='mr-2'
                            disabled
                            // defaultValue={nipAsn.golongan_id}
                            onChange={(e) =>
                              setDataUsul({
                                ...dataUsul,
                                golongan_id: e.target.value,
                              })
                            }data.nama + " " + data.namaPangkat
                          /> */}
                          <Form.Control as='select' onChange={(e) => setDataUsul({ ...dataUsul, golongan_id: e.target.value})}>
                            <option disabled selected>----PILIH GOLONGAN-----</option>
                          {dataGolongan.results.map((data) => {
                            return <option value={data.id}>{`( ${data.nama} ) ${data.namaPangkat}`}</option>;
                          })}
                        </Form.Control>
                          {/* <Form.Control type='text' placeholder='0' /> */}
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} controlId='TanggalBKN'>
                        <Form.Label>Tanggal Letter BKN</Form.Label>
                        <Form.Control
                          type='date'
                          // defaultValue={nipAsn.ncsistime}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              tanggal_letter_bkn: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='MasaGolongan'>
                        <Form.Label>Masa Golongan Kerja Tahun</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                          // defaultValue={nipAsn.mk_tahun}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              mk_golongan_tahun: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TMT Golongan'>
                        <Form.Label>TMT Golongan</Form.Label>
                        <Form.Control
                          type='date'
                          // defaultValue={nipAsn.tmt_golongan}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              tmt_golongan: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NOBKN'>
                        <Form.Label>Nomor BKN</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                          // defaultValue={nipAsn.pns_bkncod}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              nomor_letter_bkn: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId='TMT Golongan'>
                        <Form.Label>Tanggal SK</Form.Label>
                        <Form.Control
                          type='date'
                          // defaultValue={nipAsn.tmt_golongan}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              sk_tanggal: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      {/* <Form.Group as={Col} controlId='KerjaBulan'>
                        <Form.Label>NIP Lama</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                          // defaultValue={nipAsn.nip_lama}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              nip_lama: e.target.value,
                            })
                          }
                        />
                      </Form.Group> */}
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='GelarDepan'>
                        <Form.Label>Nomor SK</Form.Label>
                        <Form.Control
                          type='text'
                          // defaultValue={nipAsn.sk_konv_nomor}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              sk_nomor: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='JenisKP'>
                        <Form.Label>Jenis KP</Form.Label>
                        <Form.Control as='select' onChange={(e) => setDataUsul({ ...dataUsul, jenis_kp_id: e.target.value})}>
                          <option disabled selected>----PILIH JENIS KP-----</option>
                          {dataKP.results.map((data) => {
                            return <option value={data.id}>{data.nama}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='Masa Kerja Bulan'>
                          <Form.Label>Masa Golongan Kerja Bulan</Form.Label>
                          <Form.Control
                            type='text'
                            // defaultValue={nipAsn.mk_bulan}
                            onChange={(e) =>
                              setDataUsul({
                                ...dataUsul,
                                mk_golongan_bulan: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2' type='submit'>
                        Simpan
                      </button>
                    </div>
                  </Form>
                </Container>
              </Tab>
              <Tab
                className='mr-2'
                eventKey='dokumenpendukung'
                title='Dokumen Pendukung'>
                <Container className='p-3'>
                  <Form>
                    <div class='form-row mt-0'>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>SK Peremajaan</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input onChange={onChange} />
                          <Form.File.Label data-browse='Pilih'>
                          </Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Pertek</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input
                            id='file2'
                            onChange={onChange}
                          />
                          <Form.File.Label data-browse='Pilih'>
                            
                          </Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen SK KP</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input
                            id='file3'
                            onChange={onChange}
                          />
                          <Form.File.Label data-browse='Pilih'>
                            
                          </Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>
                          Dokumen Pertimbangan Teknis KP
                        </label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input
                            id='file4'
                            onChange={onChange}
                          />
                          <Form.File.Label data-browse='Pilih'>
                          
                          </Form.File.Label>
                        </Form.File>
                      </div>
                    </div>
                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after mb-2' type='submit'>
                        Simpan
                      </button>
                    </div>
                  </Form>
                </Container>
              </Tab>

              <Tab className='mr-2' eventKey='status' title='Status Data'>
                <Container className='p-3'>
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
                        <td>Input Data</td>
                        <td>
                          <Form.Check size='' type='checkbox' />
                        </td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Upload Dokumen</td>
                        <td>
                          <Form.Check size='' type='checkbox' />
                        </td>
                        <td>OK</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className='wizard__showButton-buttonBox mt-5'>
                    <button className='btn btn-before ml-2 mb-2'>Batal</button>
                    <button className='btn btn-after  mb-2'>Simpan</button>
                  </div>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    </>
  );
}
