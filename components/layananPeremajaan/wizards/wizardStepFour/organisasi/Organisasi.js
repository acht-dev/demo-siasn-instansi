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
            <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
                <Tab eventKey='editdata' title='Edit Data'>
                    <Card>
                        <Card.Body>
                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='aaa'>Nama Organisasi</label>
                                    <Form.Control type='text' placeholder='' disabled />
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Jabatan dalam Organisasi</label>
                                    <select class='custom-select form-control' id='jabatanLama'  disabled>
                                        <option selected>---Pilih Jabatan---</option>
                                        <option value='1'>One</option>
                                        <option value='2'>Two</option>
                                        <option value='3'>Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='aaa'>Pengalaman</label>
                                    <Form.Control type='text' placeholder='' disabled />
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Tanggal Mulai</label>
                                    <div class='input-group'>
                                        <Form.Control type='date' placeholder='' name='dob' disabled />
                                    </div>
                                </div>
                            </div>

                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='a'>Tanggal Selesai</label>
                                    <div class='input-group'>
                                        <Form.Control type='date' placeholder='' name='dob' disabled />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey='dokumenpendukung' title='Dokumen Pendukung'>
                    <Card>
                        <Card.Body>
                            <div class='form-row mt-0'>
                                <div class='form-group col-md-6'>
                                    <label for='berkas'>Dokumen SK Organisasi*</label>
                                    <Form.File id='formcheck-api-custom' custom>
                                        <Form.File.Input isInvalid  disabled/>
                                        <Form.File.Label data-browse='Pilih'>

                                        </Form.File.Label>
                                        <Form.Control.Feedback type='invalid'>
                                            *Mohon Unggah Berkas
                    </Form.Control.Feedback>
                                    </Form.File>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey='status' title='Status'>
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
                                        <td>Input Data</td>
                                        <td>
                                            <Form.Check size='' type='checkbox' disabled />
                                        </td>
                                        <td>OK</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Upload Dokumen</td>
                                        <td>
                                            <Form.Check size='' type='checkbox' disabled />
                                        </td>
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