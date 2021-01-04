import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

function BnipPPPK(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
                  <Form>
                      <div class="form-row mt-0">
                      <div class="form-group col-md-5">
                          <label for="berkas">Dok Usulan Pembatalan NIP*</label>
                          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                            <InputGroup>
                                <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                                <InputGroup.Append>
                                <InputGroup className="icon-size">
                                    <Button className="buttonLihat">View</Button>
                                </InputGroup>
                                </InputGroup.Append>
                            </InputGroup>
                            </a>
                                </div>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                        <div class="form-group col-md-5 ml-4">
                          <label for="berkas">Surat Pembatalan NIP*</label>
                          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                            <InputGroup>
                                <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                                <InputGroup.Append>
                                <InputGroup className="icon-size">
                                    <Button className="buttonLihat">View</Button>
                                </InputGroup>
                                </InputGroup.Append>
                            </InputGroup>
                            </a>
                                </div>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                        
                        <div class="form-group col-md-5">
                          <label for="berkas">Dok SK Pembatalan NIP*</label>
                          <a href="../../../../../file/SK_PERTEK.pdf" target="_blank">
                            <InputGroup>
                                <Form.Control type="text" className="custominput" defaultValue="dokumen.pdf" />
                                <InputGroup.Append>
                                <InputGroup className="icon-size">
                                    <Button className="buttonLihat">View</Button>
                                </InputGroup>
                                </InputGroup.Append>
                            </InputGroup>
                            </a>
                                </div>
                                <FaCheckCircle
                                    size="1rem"
                                    color="green"
                                    as={Col}
                                    md="1"
                                    style={{ marginTop: "2rem" }}
                                />
                        
                      </div>
                      <div className="wizard__showButton-buttonBox mt-3">
                        <button className="btn btn-before ml-2 mb-2">
                          Batal
                        </button>
                        <button className="btn btn-after  mb-2">Simpan</button>
                      </div>
                  </Form>
                </div>
        </section>
      </main>
    </>
  );
}

export default BnipPPPK;
