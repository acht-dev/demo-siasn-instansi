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
            <Tabs defaultActiveKey="editdata" id="uncontrolled-tab-example">
                <Tab eventKey="editdata" title="Edit Data">
                    <Card>
                        <Card.Body>
                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Pendidikan</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Tingkat Pendidikan</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                            </div>

                            <div class="form-group mt-0 mb-0">
                                <div class="row">
                                    <div class="col">
                                        <label for="noSKBKN">Tanggal Lulus</label>
                                    </div>
                                    <div class="col">
                                        <label for="TMT">Tahun Lulus</label>
                                    </div>
                                </div>
                                <div class="form-row mt-0">
                                    <div class="form-group col-md-2 col">
                                        <Form.Control type="text" placeholder="" disabled />
                                    </div>
                                    <div class="form-group col-md-4 col">
                                        <Form.Control type="text" placeholder="" disabled />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <Form.Control type="text" placeholder="" disabled />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Nomor Ijazah</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Nama Sekolah</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="aaa">Gelar Depan</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="bbb">Gelar Belakang</label>
                                    <Form.Control type="text" placeholder="" disabled />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>


                <Tab eventKey="dokumenpendukung" title="Dokumen Pendukung">
                    <Card>
                        <Card.Body>
                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="berkas">SK Peremajaan</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled />
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                        </Form.File.Label>
                                    </Form.File>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="berkas">Dokumen PerTek</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input disabled />
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                        </Form.File.Label>
                                    </Form.File>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="berkas">Dokumen SK Pencatuman Gelar*</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input isInvalid disabled />
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                        </Form.File.Label>
                                        <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
                                    </Form.File>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="berkas">Transkrip Nilai*</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input isInvalid disabled />
                                        <Form.File.Label data-browse="Pilih">
                                            Pilih Berkas
                                                        </Form.File.Label>
                                        <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
                                    </Form.File>
                                </div>
                            </div>

                            <div class="form-row mt-0">
                                <div class="form-group col-md-6">
                                    <label for="berkas">Ijazah*</label>
                                    <Form.File id="formcheck-api-custom" custom>
                                        <Form.File.Input isInvalid disabled />
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


                <Tab eventKey="status" title="Status">
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
                                        <td><Form.Check size="" type="checkbox" disabled /></td>
                                        <td>OK</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Upload Dokumen</td>
                                        <td><Form.Check size="" type="checkbox" disabled /></td>
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