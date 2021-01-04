import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Form,InputGroup} from 'react-bootstrap';

export default function DokumentPendukungSKP(){
    return(
        <Form>
            <Form.Row className='form-group'>
                                <Col md={5} className="ml-3 mt-3">
                                    <Form.Label>SK Peremajaan</Form.Label>
                                    <Form.File 
                                        id="PilihBerkas"
                                        label="Pilih Berkas"
                                        data-browse="PILIH"
                                        custom
                                    />
                                </Col>
                                <Col md={5} className="mt-3">
                                    <Form.Label>Dokumen PerTek</Form.Label>
                                    <Form.File 
                                        id="PilihBerkas"
                                        label="Pilih Berkas"
                                        data-browse="PILIH"
                                        custom
                                    />
                                </Col>
            </Form.Row>
            <Form.Row className='form-group'>
                                <Col md={5} className="ml-3 mt-3">
                                    <Form.Label>Dokumen Realisasi SKP</Form.Label>
                                    <Form.File 
                                        id="PilihBerkas"
                                        label="Pilih Berkas"
                                        data-browse="PILIH"
                                        custom
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    *Mohon Unggah Berkas
                                    </Form.Control.Feedback>
                                </Col>
            </Form.Row>
        </Form>
    );
}