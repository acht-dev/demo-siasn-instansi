import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateDataAsn } from "../../../../../redux/actions/berkasUsul/updateDataAsn";
import { uploadFileAsn } from "../../../../../redux/actions/berkasUsul/uploadFileAsn";
import axios from "axios";

export default function Golongan(props) {
  const dispatch = useDispatch();
  const selectOptions = {
    jenisKP: ["Jenis KP", "1", "2", "3"],
  };
  const { nipAsn, getUsulanId } = useSelector((state) => state.getIdAsn);
  const [uploadFile, setUploadFile] = useState('');
  const [files, setFiles] = useState([]);
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);
  const [files4, setFiles4] = useState([]);
  const [nameFiles1, setNameFiles1] = useState("");
  const [nameFiles2, setNameFiles2] = useState("");
  const [nameFiles3, setNameFiles3] = useState("");
  const [nameFiles4, setNameFiles4] = useState("");
  const [dataUsul, setDataUsul] = useState({
    golongan_id: nipAsn.golongan_id,
    mk_golongan_bulan: nipAsn.mk_bulan,
    mk_golongan_tahun: nipAsn.mk_tahun,
    nip_lama: nipAsn.nip_lama,
    sk_nomor: nipAsn.sk_konv_nomor,
    sk_tanggal: nipAsn.sk_konv_tanggal,
    tanggal_letter_bkn: nipAsn.ncsistime,
    tmt_golongan: nipAsn.tmt_golongan,
    nomor_letter_bkn: nipAsn.pns_bkncod,
    jenis_kp_id: 0,
    pns_orang_id: nipAsn.id,
    tanggal_usul: new Date().toISOString().slice(0, 10),
    usulan_id: getUsulanId.id,
    Tipe: "I",
  });

  const _simpanUsul = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(dataUsul));
    dispatch(updateDataAsn(dataUsul));
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

  const _onChangeHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files);
    console.log(file);
  };

  const _onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    console.log(data);
  };

  const onFileUpload1 = (e) => {
    let fileName = e.target.files[0].name;
    console.log(fileName);
    setNameFiles1((nameFiles1) => fileName);
    console.log(nameFiles1);
    let file_reader = new FileReader();
    // Get the actual file itself
    let file = e.target.files[0];
    file_reader.onload = () => {
      // After uploading the file
      // appending the file to our state array
      // set the object keys and values accordingly
      setFiles1([...files1, { uploaded_file: file_reader.result }]);
    };
    // reading the actual uploaded file
    file_reader.readAsDataURL(file);
    const data = {
      usulan_id: getUsulanId.id,
      pns_orang_id: nipAsn.id,
      file: files1[0],
    };
    dispatch(uploadFileAsn(data));
    console.log(data);
  };

  const onFileUpload2 = (e) => {
    let fileName = e.target.files[0].name;
    console.log(fileName);
    setNameFiles2((nameFiles2) => fileName);
    console.log(nameFiles2);
  };

  const onFileUpload3 = (e) => {
    let fileName = e.target.files[0].name;
    console.log(fileName);
    setNameFiles3((nameFiles3) => fileName);
    console.log(nameFiles3);
  };

  const onFileUpload4 = (e) => {
    let fileName = e.target.files[0].name;
    console.log(fileName);
    setNameFiles4((nameFiles) => fileName);
    console.log(nameFiles4);
  };

  // function onFileUpload(event) {
  //   event.preventDefault();
  //   // Get the file Id
  //   // let id = event.target.id;
  //   // Create an instance of FileReader API
  //   let file_reader = new FileReader();
  //   // Get the actual file itself
  //   let file = event.target.files[0];
  //   let fileName = event.target.files[0].name;
  //   console.log(fileName);
  //   setNameFiles([...nameFiles, { fileName: fileName }]);
  //   console.log(nameFiles);
  //   file_reader.onload = () => {
  //     // After uploading the file
  //     // appending the file to our state array
  //     // set the object keys and values accordingly
  //     setFiles([...files, { uploaded_file: file_reader.result }]);
  //   };
  //   // reading the actual uploaded file
  //   file_reader.readAsDataURL(file);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(files);
  //   for (let i = 0; i < files.length; i++) {
  //     console.log(files[i]);
  //     const data = {
  //       usulan_id: getUsulanId.id,
  //       pns_orang_id: nipAsn.id,
  //       file: files[i],
  //     };
  //     dispatch(uploadFileAsn(data));
  //   }
  // }

  return (
    <>
      <div className='mb-3'>
        <ToastContainer autoClose={2000} />
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
                          <Form.Control
                            type='text'
                            placeholder='22'
                            className='mr-4'
                            defaultValue={nipAsn.golongan_id}
                            onChange={(e) =>
                              setDataUsul({
                                ...dataUsul,
                                golongan_id: e.target.value,
                              })
                            }
                          />
                          <Form.Control type='text' placeholder='0' />
                        </div>
                      </Form.Group>
                      <Form.Group as={Col} controlId='TanggalBKN'>
                        <Form.Label>Tanggal BKN</Form.Label>
                        <Form.Control
                          type='date'
                          defaultValue={nipAsn.ncsistime}
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
                          defaultValue={nipAsn.mk_tahun}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              mk_golgongan_tahun: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TMT Golongan'>
                        <Form.Label>TMT Golongan</Form.Label>
                        <Form.Control
                          type='date'
                          defaultValue={nipAsn.tmt_golongan}
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
                      <Form.Group as={Col} controlId='KerjaBulan'>
                        <Form.Label>NIP Lama</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                          defaultValue={nipAsn.nip_lama}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              nip_lama: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NOBKN'>
                        <Form.Label>Nomor BKN</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder=''
                          defaultValue={nipAsn.pns_bkncod}
                          onChange={(e) =>
                            setDataUsul({
                              ...dataUsul,
                              nomor_letter_bkn: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='GelarDepan'>
                        <Form.Label>Nomor SK</Form.Label>
                        <Form.Control
                          type='text'
                          defaultValue={nipAsn.sk_konv_nomor}
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
                        <Form.Control as='select'>
                          {selectOptions.jenisKP.map((data) => {
                            return <option>{data}</option>;
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
                            defaultValue={nipAsn.mk_bulan}
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
