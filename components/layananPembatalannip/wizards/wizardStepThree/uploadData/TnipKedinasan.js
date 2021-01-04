import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

function TnipKedinasan(props) {
  const [file, setFile] = useState("");
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
                  <Form>
                      <div class="form-row mt-0">
                      <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Pernyataan 5 Point*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Lamaran*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Ijazah Pengangkatan Pertama*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Daftar Riwayat Hidup*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Bukti Pengalaman Kerja*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Keterangan Catatan Kepolisian*</label>
                          <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Kesehatan*</label>
                          <Form.File id="formcheck-api-custom" custom>
                            <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Bebas Narkoba*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Usul Penetapan NIP*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Usul Pengantar Kolektif*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Surat Pernyataan Rencana Penempatan*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok Persetujuan Teknis*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="berkas">Dok SK CPNS/SK Petikan CPNS*</label>
                          <Form.File id="formcheck-api-custom" custom>
                          <Form.File.Input isInvalid />
                            <Form.File.Label data-browse="Upload"></Form.File.Label>
                            <Form.Control.Feedback type="invalid">
                              *Mohon Unggah Berkas
                            </Form.Control.Feedback>
                          </Form.File>
                        </div>
                        
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

export default TnipKedinasan;
