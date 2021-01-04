import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Checkbox,
  Row,
  Card,
  Col,
  Button,
  FormControl,
} from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import styles from "../../../../../styles/Home.module.css";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function UploadY7B() {
  return (
    <Card><Card.Body>
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.components}>
          {/* Step 4-3 */}
          
         {/* Judul 1 */}
         <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Penilaian Prestasi Kerja/DP-3 2 tahun terakhir*</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>SK KP Terakhir*</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>
         

          {/* Judul 2 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Pengantar Instansi (Kolektif) *</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Surat Pengantar Provinsi (Kolektif)*</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a> 
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 3 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Pertek*</Form.Label>  
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Surat Pembatalan Pertek</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          {/* Judul 4 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Pengantar Keluar Pertek KP (Kolektif)*</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>SK KP Perorangan/Sk Petikan*</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          
          {/* Judul 5 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Surat Perintah Tugas Belajar</Form.Label>  
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
            <Col md={5} >
              <Form.Label>Ijazah</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>

          
          {/* Judul 6 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Transkip Nilai*</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>Akreditasi Program Studi*</Form.Label>
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
          </Form.Row>

          {/* Judul 7 */}
          
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Uraian Tigas yang Ditetapkan Pejabat Setingkat eselon II*</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaTimesCircle
                      size='1rem'
                      color='red'
                    /></Col>
            <Col md={5} >
              <Form.Label>PAK</Form.Label>
              <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>
          

          {/* Judul 8 */}
          <Form.Row className="Step-3 align-items-center">
            <Col md={5}>
                  <Form.Label>Asli Klasifikasi PAK</Form.Label> 
                  <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                <div className="input-group">
                  <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                  <InputGroup.Append>
                    <InputGroup className="icon-size">
                      <Button className="buttonLihat">View</Button>
                    </InputGroup>
                  </InputGroup.Append>
                </div>
              </a>
            </Col>
            <Col md={1}><br></br><FaCheckCircle
                      size='1rem'
                      color='green'
                    /></Col>
          </Form.Row>
          <br />
        </div>
      </section>
    </main>
    </Card.Body>
    </Card>
  );
}

export default UploadY7B;
 