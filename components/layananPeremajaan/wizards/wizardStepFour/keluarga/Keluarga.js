import {
    Form,
    Tabs,
    Tab,
    Table,
    InputGroup,
    Checkbox,
    Row,    
    Col,
    Button,
    Container,
    Card,
    FormControl,


} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function VerifikasiData(props) {
    function VerivikasiData() {
    }

    return (

        <>
            <Tabs defaultActiveKey="keluarga" id="uncontrolled-tab-example">
                <Tab eventKey="keluarga" title="KELUARGA">
                    <Card>
                        <Card.Body>
                            <div class="form-row mt-0">
                                <div className='form-group col-md-6 row p-3'>
                                    <div className='col-1'>
                                        <div className='box-img-profile'>
                                            <img src='/img/foto-profile.png' />
                                        </div>
                                    </div>
                                    <div className='ml-0 '>
                                        <label className='offset-4'>Foto</label><div className='offset-4'>
                                            <Form.File id="formcheck-api-custom" custom>
                                                <Form.File.Input disabled/>
                                                <Form.File.Label data-browse="Pilih">
                                                    Pilih Berkas
                                                          </Form.File.Label>
                                            </Form.File>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Nomor Dokumen ID</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                            </div>


                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Nama</label>
                                    <Form.Control type="text" placeholder=""disabled />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Alamat</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Gelar Depan</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">No. HP</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Gelar Belakang</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">No. Telepon</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Tempat Lahir</label>
                                    <Form.Control type="text" placeholder=""disabled />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Status Perkawinan</label>
                                    <Form.Control type="text" placeholder=""disabled />
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="a">Tanggal Lahir</label>
                                    <div class="input-group">
                                        <Form.Control type='date' name='dob' placeholder=''disabled />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Akte Kelahiran</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="a">Jenis Kelamin</label>
                                    <select class="custom-select form-control" id="jabatanLama" disabled>
                                        <option selected>---Pilih Jenis Kelamin---</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Akte Meninggal</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="a">Agama</label>
                                    <select class="custom-select form-control" id="jabatanLama"disabled>
                                        <option selected>---Pilih Agama---</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Tanggal Meninggal</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="a">Jenis Dokumen ID</label>
                                    <select class="custom-select form-control" id="jabatanLama"disabled>
                                        <option selected>Jenis Dokumen ID</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Tanggal Meninggal</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>


                <Tab eventKey="orangtua" title="ORANGTUA">
                    <Card>
                        <Card.Body>
                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='aaa'>Nama</label>
                                    <Form.Control type='text' placeholder='' disabled/>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Berstatus PNS</label>
                                    <select class='custom-select form-control' id='jabatanLama'disabled>
                                        <option selected>---Pilih Status---</option>
                                        <option value='1'>One</option>
                                        <option value='2'>Two</option>
                                        <option value='3'>Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Tanggal Lahir</label>
                                    <div class='input-group'>
                                        <Form.Control type='date' placeholder='' name='dob' disabled/>
                                    </div>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='aaa'>Jabatan Fungsional</label>
                                    <Form.Control type='text' placeholder='' disabled/>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>TMT Jabatan Fungsional</label>
                                    <div class='input-group'>
                                        <Form.Control type='date' placeholder='' name='dob' disabled/>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>


                <Tab eventKey="suamiistri" title="SUAMI/ISTRI">
                    <Card>
                        <Card.Body>
                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Nama</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">KARSUS</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Status Perkawinan</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                            Menikah
                                                          </Form.File.Label>
                                    </Form.File>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Status</label>
                                    <Form.Control type="text" placeholder="" disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Tanggal Menikah</label>
                                    <div class="input-group">
                                        <Form.Control type='date' name='dob' placeholder=''disabled />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Tanggal Meninggal</label>
                                    <div class="input-group">
                                        <Form.Control type='date' name='dob' placeholder=''disabled />
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="a">Akta Meninggal</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                        </Form.File.Label>
                                    </Form.File>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Tanggal Cerai</label>
                                    <div class="input-group">
                                        <Form.Control type='date' name='dob' placeholder='' disabled/>
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="a">Akta Cerai</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                        </Form.File.Label>
                                    </Form.File>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="anak" title="ANAK">
                    <Card>
                        <Card.Body>
                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='aaa'>Nama Anak</label>
                                    <Form.Control type='text' placeholder='' disabled/>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Akta Kelahiran</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                        </Form.File.Label>
                                    </Form.File>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Nama Ibu</label>
                                    <select class='custom-select form-control' id='jabatanLama'disabled>
                                        <option selected>---Pilih Nama Ibu---</option>
                                        <option value='1'>One</option>
                                        <option value='2'>Two</option>
                                        <option value='3'>Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Status Anak</label>
                                    <select class='custom-select form-control' id='jabatanLama'disabled>
                                        <option selected>---Pilih Status---</option>
                                        <option value='1'>One</option>
                                        <option value='2'>Two</option>
                                        <option value='3'>Three</option>
                                    </select>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="dokumenpendukung" title="DOKUMEN PENDUKUNG">
                    <Card>
                        <Card.Body>
                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="berkas">SK Peremajaan</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                          </Form.File.Label>
                                    </Form.File>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="berkas">Dokumen PerTek</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                          </Form.File.Label>
                                    </Form.File>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="berkas">Dokumen PAK*</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input isInvalid disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                          </Form.File.Label>
                                        <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
                                    </Form.File>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="berkas">SK PAK*</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input isInvalid disabled/>
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                          </Form.File.Label>
                                        <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
                                    </Form.File>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>


                <Tab eventKey="status" title="STATUS">
                    <Card>
                        <Card.Body>
                            <h4>View Status Validasi</h4>
                            <Table striped bordered hover responsive="sm">
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
                                        <td><Form.Check size="" type="checkbox" disabled/></td>
                                        <td>OK</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Upload Dokumen</td>
                                        <td><Form.Check size="" type="checkbox" disabled/></td>
                                        <td>OK</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
            <br></br>

        </>
    );
}