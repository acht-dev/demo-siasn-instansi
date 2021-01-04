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
} from "react-bootstrap";
import styles from "../../../../../styles/Home.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import Link from "next/link";

function DataPribadi(props) {
  const [file, setFile] = useState("");
  const selectOptions = {
    pns: ["Aktif", "Aaaa", "Bbb", "Ccc"],
    pnsaktif: ["PNS", "Aaaa", "Bbb", "Ccc"],
    jenisKelamin: ["--- Jenis ---", "Aaaa", "Bbbb", "Ccccc"],
    agama: ["--- Pilih  Agama ---", "Aaaa", "Bbb", "Ccc"],
    dokumen: ["--- Pilih ---", "Aaaa", "Bbb", "Ccc"],
    pendidikanTerakhir: ["--- Pilih ---", "Aaaa", "Bbbb", "Ccccc"],
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.row}></div>
          <div className={styles.components}>
            {/* Step 3-1 */}

            {/* Judul 1 */}
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="nipbaru">
                  <Form.Label>Nip Baru</Form.Label>
                  <Form.Control type="text" placeholder="3223232323222" />
                </Form.Group>

                <Form.Group as={Col} controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="intan@gmail.com" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="niplama">
                  <Form.Label>Nip Lama</Form.Label>
                  <Form.Control type="text" placeholder="3223232323222" />
                </Form.Group>

                <Form.Group as={Col} controlId="alamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control type="text" placeholder="jakarta" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="nama">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Zulfa" />
                </Form.Group>

                <Form.Group as={Col} controlId="nomor">
                  <Form.Label>Nomor</Form.Label>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="22"
                      className="mr-4"
                    />
                    <Form.Control type="text" placeholder="" />
                  </div><Form.Text className="text-muted">
                  HP  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Telepon</Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="gelar">
                  <Form.Label>Gelar</Form.Label>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="22"
                      className="mr-4"
                    />
                    <Form.Control type="text" placeholder="" />
                  </div><Form.Text className="text-muted">
                  Gelar Depan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Gelar Belakang</Form.Text>
                </Form.Group>

                <Form.Group as={Col} controlId="tempatLahir">
                  <Form.Label>Tempat Lahir</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder=""
                      aria-label=""
                      aria-describedby="pns-search"
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        style={{
                          backgroundColor: "#EAEAEA",
                          height: "40px",
                        }}
                      >
                        <svg
                          className="mb-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2rem"
                          height="1.2rem"
                          viewBox="0 0 35.997 36.004"
                        >
                          <path
                            id="Icon_awesome-search"
                            data-name="Icon awesome-search"
                            d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                            fill="#2d3c6c"
                          />
                        </svg>
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="jenisPegawai">
                  <Form.Label>Jenis Pegawai</Form.Label>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <InputGroup>
                      <Form.Control
                        placeholder=""
                        aria-label=""
                        aria-describedby="pns-search"
                      />
                      <InputGroup.Append>
                        <Button
                          variant="outline-secondary"
                          style={{
                            backgroundColor: "#EAEAEA",
                            height: "40px",
                          }}
                        >
                          <svg
                            className="mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.2rem"
                            height="1.2rem"
                            viewBox="0 0 35.997 36.004"
                          >
                            <path
                              id="Icon_awesome-search"
                              data-name="Icon awesome-search"
                              d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                              fill="#2d3c6c"
                            />
                          </svg>
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </div>
                </Form.Group>
                <Form.Group as={Col} controlId="pns">
                  <Form.Label>PNS</Form.Label>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Form.Control as="select" class="mr-4 form-control">
                      {selectOptions.pns.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </Form.Control>
                    <Form.Control as="select">
                      {selectOptions.pnsaktif.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </Form.Control>
                  </div>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="TanggalSK">
                  <Form.Label>Tanggal SK</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Col md={6}>
                  <Form.Group controlId="tanggalLahir">
                    <Form.Label>TMT CPNS</Form.Label>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <Form.Control
                        type="date"
                        placeholder="22"
                        className="mr-3"
                      />
                      <Form.Control type="date" />
                    </div><Form.Text className="text-muted">
                      TMT CPNS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    TMT PNS</Form.Text>
                  </Form.Group>
                </Col>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="agama">
                  <Form.Label>Agama</Form.Label>
                  <Form.Control as="select">
                    {selectOptions.agama.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="tingkapendidikan">
                  <Form.Label>Tingkat Pendidikan</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="jenisKelamin">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control as="select">
                    {selectOptions.jenisKelamin.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="email">
                  <Form.Label>Kode Pendidikan Terakhir</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                  <Form.Group as={Col} controlId="pns">
                    <Form.Label>Dokumen</Form.Label>
                    <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Form.Control as="select" class="mr-4 form-control">
                      {selectOptions.dokumen.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </Form.Control>
                    <Form.Control type="text" />
                    </div><Form.Text className="text-muted">
                    Jenis  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Nomor</Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} controlId="pendidikan Terakhir">
                    <Form.Label>Pendidikan Terakhir</Form.Label>
                    <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Form.Control type="text" class="mr-4 form-control"/>
                    <Form.Control as="select">
                      {selectOptions.pendidikanTerakhir.map((data) => {
                        return <option>{data}</option>;
                      })}
                    </Form.Control>
                    </div><Form.Text className="text-muted">
                      Kedudukan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Tahun Lulus</Form.Text>
                  </Form.Group>
              </Form.Row>
            </Form>

            <br />
            <div className="wizard__showButton-buttonBox mt-3">
              <button className="btn btn-before ml-2 mb-2">Batal</button>
              <button className="btn btn-after  mb-2">Simpan</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DataPribadi;