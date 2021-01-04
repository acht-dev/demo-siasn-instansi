import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Tabs, Tab, Table, InputGroup, Checkbox, Row, Col, Button, FormControl } from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";

export default function Wiz_ED2() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
            {/* Step 3-2 */}

            {/* Judul 1 */}
            <Form.Row className="Step-3">
              <Col md={5}></Col>
              <Col className="paddingLeft">
                <b>Atasan</b>
              </Col>
            </Form.Row>
            <Form.Row className="Step-3" style={{ marginTop: "-19px" }}>
              <Col md={5}>KPPN</Col>
              <Col className="paddingLeft">NIP/NRP</Col>
            </Form.Row>

            {/* Input 1 */}
            <Form.Row className="Step-3">
              <Col md={2}>
                <Form.Control defaultValue={"10903"} disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control defaultValue={"JAKARTA-III"} disabled></Form.Control>
              </Col>

              <Col md={5} className="paddingLeft">
                <Form.Control defaultValue={"194507231970022002"} disabled></Form.Control>
              </Col>
            </Form.Row>

            {/* Judul 2 */}
            <Form.Row className="Step-3">
              <Col md={5}>Kanreg</Col>
              <Col className="paddingLeft">Nama</Col>
            </Form.Row>

            {/* Input 2 */}
            <Form.Row className="Step-3">
              <Col md={2}>
                <Form.Control defaultValue={"00"} disabled></Form.Control>
              </Col>
              <Col md={3}>
                <Form.Control defaultValue={"Badan Kepegawaian Negara"} disabled></Form.Control>
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control defaultValue={"Putri Ambarwati"} disabled></Form.Control>
              </Col>
            </Form.Row>

            {/* Judul 3 */}
            <Form.Row className="Step-3">
              <Col md={5}>Formasi</Col>
              <Col className="paddingLeft">Golongan</Col>
            </Form.Row>

            {/* Input 3 */}
            <Form.Row className="Step-3">
              <Col xs={12} md={2}>
                <Form.Control defaultValue={"0"}></Form.Control>
              </Col>
              <Col xs={12} md={2}>
                <Form.Control defaultValue={"0"}></Form.Control>
              </Col>
              <Col xs={12} md={1}>
                <Form.Control defaultValue={"0"}></Form.Control>
              </Col>
              <Col md={5} className="paddingLeft">
                <div class="form-row mt-0">
                  <select class="custom-select form-control" id="jabatanLama" disabled>
                    <option>--- Pilih ---</option>
                    <option value="1" selected>
                      lll/a
                    </option>
                    <option value="2">Bbbb</option>
                    <option value="3">Cccc</option>
                  </select>
                </div>
              </Col>
            </Form.Row>

            {/* Judul 4 */}
            <Form.Row className="Step-3">
              <Col md={5}>Alasan KP</Col>
              <Col style={{ paddingLeft: "4%" }}>TMT Golongan</Col>
              <Col style={{ paddingRight: "5%" }}>Nama Pangkat</Col>
            </Form.Row>

            {/* Input 4 */}
            <Form.Row className="Step-3">
              <Col md={5}>
                <Form.Control as="textarea" rows={2} />
              </Col>
              <Col md={3} className="paddingLeft">
                <Form.Control defaultValue={"06/08/1963"} disabled></Form.Control>
              </Col>
              <Col md={3} className="">
                <Form.Control defaultValue={"Penata Muda"} disabled></Form.Control>
              </Col>
            </Form.Row>

            {/* Judul 5 */}
            <Form.Row className="Step-3">
              <Col md={5}>Keterangan Masa Kerja</Col>
              <Col className="paddingLeft">Unit Organisasi</Col>
            </Form.Row>

            {/* Input 5 */}
            <Form.Row className="Step-3">
              <Col md={5}>
                <Form.Control as="textarea" rows={4} />
              </Col>
              <Col md={5} className="paddingLeft">
                <Form.Control disabled></Form.Control>
                <Form.Label>Jabatan</Form.Label>
                <FormControl defaultValue={"Struktural"} disabled />
              </Col>
            </Form.Row>
            <br />
          </div>
        </section>
      </main>
    </>
  );
}
