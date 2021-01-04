import "bootstrap/dist/css/bootstrap.min.css";
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
    FormControl,
    Container
} from "react-bootstrap";
import React, { useState } from "react";


function Lhkasn () {
    const [isClick, setIsClick] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isClick) {
            setIsClick(true);
        }
    };

    const handleReset = () => {
        if (isClick) {
            setIsClick(false);
        }
    };
    return (
        <>
                {/* Component input detail */}
                <div>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="EDIT DATA">
                        {/*Form*/}
                        <div>
                            <Container>
                            <Row>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="my-1">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Jabatan</Form.Label>
                                                        <Form.Control type="text" disabled >
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="MarginLeft">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Tgl Pelaporan</Form.Label>
                                                        <Form.Control type="date" placeholder="" name="dob" disabled/>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <div className="w-100"></div>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="MarginLeft">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>TMT Jabatan</Form.Label>
                                                        <Form.Control type="date" placeholder="" name="dob" disabled/>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="my-1">
                                                    <Form.Group as={ Col }>
                                                        <Form.Label>Jenis Form</Form.Label>
                                                        <Form.Control as="select" disabled>
                                                            <option>---Pilih Jenis Form---</option>
                                                            <option>One</option>
                                                            <option>Two</option>
                                                            <option>Three</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <div className="w-100"></div>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="my-1">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Instansi Kerja</Form.Label>
                                                        <Form.Control type="text" placeholder="Badan Pengkajian dan Penerapan Teknologi" disabled/>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col sm className="my-1" >
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Unor</Form.Label>
                                                        <FormControl type="text" placeholder="" disabled/>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="my-1">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Keterangan</Form.Label>
                                                        <Form.Control as="textarea" rows="4" disabled/>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                                <div className="w-100"></div>
                                <Col>
                                    <span>
                                        <Form>
                                            <Form.Row>
                                                <Col sm className="my-1">
                                                    <Form.Group as={Col}>
                                                        <Form.Label>Eselon</Form.Label>
                                                        <FormControl type="text" placeholder="l.a" disabled/>
                                                    </Form.Group>
                                                </Col>
                                                <Col></Col>
                                            </Form.Row>
                                        </Form>
                                    </span>
                                </Col>
                            </Row>
                            </Container>
                                </div>
                            </Tab>

                            {/*TAB Dokumen Pendukung*/}
                    <Tab eventKey="profile" title="DOKUMEN PENDUKUNG">
                        <Container>
                        <Row>
                            <Col>
                                <span>
                                    <Form>
                                        <Form.Row>
                                            <Col sm={6} className="my-1">
                                                <Form.Group as={Col}>
                                                    <Form.Label>SK Peremajaan</Form.Label>
                                                    <Form.File
                                                        id="custom-file-translate-html"
                                                        label="Pilih Berkas"
                                                        data-browse="Pilih"
                                                        custom
                                                        disabled/>
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6} className="my-1">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Dokumen PerTek</Form.Label>
                                                    <Form.File
                                                        id="custom-file-translate-html"
                                                        label="Pilih Berkas"
                                                        data-browse="Pilih"
                                                        custom
                                                        disabled/>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </span>
                            </Col>
                            <div className="w-100"></div>
                            <Col>
                                <span>
                                    <Form>
                                        <Form.Row>
                                            <Col sm={6} className="my-1">
                                                <Form.Group as={Col}>
                                                    <Form.Label>Dokumen LHKASN*</Form.Label>
                                                    <Form.File id="formcheck-api-custom" custom >
                                                        <Form.File.Input isInvalid disabled/>
                                                        <Form.File.Label data-browse="Pilih"  >
                                                            Pilih Berkas 
                                                        </Form.File.Label>
                                                        <Form.Control.Feedback type="invalid">*Mohon Unggah Berkas</Form.Control.Feedback>
                                                    </Form.File>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </span>
                            </Col>
                        </Row>
                        </Container>
                            </Tab>

                            {/*TAB Status Data*/}
                    <Tab eventKey="contact" title="STATUS DATA">
                        <div>
                                    <br/>
                                    <h4 className='h4-tab'>View Status Validasi</h4>
                                    <br/>
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
                                </div>
                            </Tab>                            
                        </Tabs>
                    </div>
                    <br></br>

        </>
    );
}
export default Lhkasn;
