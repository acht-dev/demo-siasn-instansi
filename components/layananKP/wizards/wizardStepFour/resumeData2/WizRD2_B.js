import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl, Card } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Wiz_ED2(props) {
  const [file, setFile] = useState("");

  const selectOptions = {
    Golongan: ["--- Pilih ---", "III/a", "III/b", "III/c"],
  };

  return (
    <>
      <Card>
        <Card.Body>
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.row}></div>
              <div className={styles.components}>
                {/* Step 3-2 */}
                <Form>
                  <Form.Row className="Step-3">
                    <Col md={7}></Col>
                    <Col className="paddingLeft">
                      <b>Atasan</b>
                    </Col>
                  </Form.Row>
                  <Form.Row className="Step-3" style={{ marginTop: "-19px" }}>
                    <Col md={5}>KPPN</Col>
                    <Col className="paddingRD2">NIP/NRP</Col>
                  </Form.Row>

                  {/* Input 1 */}
                  <Form.Row className="Step-3">
                    <Col md={2}>
                      <Form.Control defaultValue={"10903"} disabled></Form.Control>
                    </Col>
                    <Col md={3}>
                      <Form.Control defaultValue={"JAKARTA-III"} disabled></Form.Control>
                    </Col>
                    <Col md={1}>
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                    <Col md={5}>
                      <Form.Control defaultValue={"194507231970022002"} disabled></Form.Control>
                    </Col>
                    <Col md={1}>
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                  </Form.Row>

                  {/* Judul 2 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>Kanreg</Col>
                    <Col className="paddingRD2">Nama</Col>
                  </Form.Row>

                  {/* Input 2 */}
                  <Form.Row className="Step-3">
                    <Col md={2}>
                      <Form.Control defaultValue={"00"} disabled></Form.Control>
                    </Col>
                    <Col md={3}>
                      <Form.Control defaultValue={"Badan Kepegawaian Negara"} disabled></Form.Control>
                    </Col>
                    <Col md={1}>
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                    <Col md={5}>
                      <Form.Control defaultValue={"Putri Ambarwati"} disabled></Form.Control>
                    </Col>
                    <Col md={1}>
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                  </Form.Row>

                  {/* Judul 3 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>Formasi</Col>
                    <Col className="paddingRD2">Golongan</Col>
                  </Form.Row>

                  {/* Input 3 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>
                      <Form.Group controlId="Masa Kerja">
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <Form.Control type="text" placeholder="0" className="mr-4" disabled />
                          <Form.Control type="text" placeholder="0" className="mr-4" disabled />
                          <Form.Control type="text" placeholder="0" disabled />
                        </div>
                        <Form.Text className="text-muted">
                          Jumlah&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          Telah Terisi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sisa
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                    <Col md={5}>
                      <div class="form-row mt-0">
                        <select class="custom-select form-control" id="jabatanLama" disabled>
                          {selectOptions.Golongan.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </select>
                      </div>
                    </Col>
                    <Col md={1}>
                      <FaTimesCircle size="1rem" color="red" />
                    </Col>
                  </Form.Row>

                  {/* Judul 4 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>Alasan Kenaikan Pangkat</Col>
                    <Col className="paddingRD2">TMT Golongan</Col>
                    <Col style={{ paddingRight: "12%" }}>Nama Pangkat</Col>
                  </Form.Row>

                  {/* Input 4 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>
                      <Form.Control as="textarea" rows={2} disabled />
                    </Col>
                    <Col>
                      <FaTimesCircle size="1rem" color="red" />
                    </Col>
                    <Col md={2} className="paddingLeft">
                      <Form.Control defaultValue={"06/08/1963"} disabled></Form.Control>
                    </Col>
                    <Col md={3} className="">
                      <Form.Control defaultValue={"Penata Muda"} disabled></Form.Control>
                    </Col>
                    <Col md={1}>
                      <FaTimesCircle size="1rem" color="red" />
                    </Col>
                  </Form.Row>

                  {/* Judul 5 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>Keterangan Masa Kerja</Col>
                    <Col className="paddingRD2">Unit Organisasi</Col>
                  </Form.Row>

                  {/* Input 5 */}
                  <Form.Row className="Step-3">
                    <Col md={5}>
                      <Form.Control as="textarea" rows={4} disabled />
                    </Col>
                    <Col md>
                      <FaTimesCircle size="1rem" color="red" />
                    </Col>
                    <Col md={5}>
                      <Form.Control disabled></Form.Control>
                      <Form.Label>Jabatan</Form.Label>
                      <FormControl defaultValue={"Struktural"} disabled />
                    </Col>
                    <Col md>
                      <FaTimesCircle size="1rem" color="red" />
                      <br />
                      <br />
                      <br />
                      <FaCheckCircle size="1rem" color="green" />
                    </Col>
                  </Form.Row>
                  <br />
                </Form>
              </div>
            </section>
          </main>
        </Card.Body>
      </Card>
    </>
  );
}
export default Wiz_ED2;
