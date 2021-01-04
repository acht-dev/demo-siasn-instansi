import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Form, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import Tables from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";

const products = [
  {
    golongan_id: "31",
    sk_nomor: "821.13/126/2003",
    sk_tanggal: "0001-01-01T00:00:00Z",
    tmt_golongan: "2002-12-01T00:00:00Z",
    nomor_letter_bkn: "GG-21115000027",
    tanggal_letter_bkn: "0001-01-01T00:00:00Z",
    jenis_kp_id: "211",
    asal_nama: "MIGRASI",
  },
];

const rowStyle = { backgroundColor: "#c8e6c9" };

const columns = [
  {
    dataField: "golongan_id",
    text: "Golongan",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "sk_nomor",
    text: "Nomor SK",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "sk_tanggal",
    text: "Tanggal SK",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "tmt_golongan",
    text: "TMT Golongan",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "nomor_letter_bkn",
    text: "Nomor BKN",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "tanggal_letter_bkn",
    text: "Tanggal BKN",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "jenis_kp_id",
    text: "Jenis KP",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "asal_nama",
    text: "Asal Nama",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
];

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
  clickToEdit: true, // Click to edit cell also
};

const cellEdit = {
  mode: "click",
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total pagination-color">
    Menampilkan {from} - {to} dari {size} Entri
  </span>
);

const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  const activeStyle = {};
  if (active) {
    activeStyle.color = "black";
  } else {
    activeStyle.color = "#2d3c6c";
  }
  if (typeof page === "string") {
    activeStyle.color = "#2d3c6c";
  }
  return (
    <li className="page-item">
      <a href="#" onClick={handleClick} style={activeStyle} className="mr-1">
        {page}
      </a>
    </li>
  );
};

const options = {
  paginationSize: 5,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: "PERTAMA",
  prePageText: "SEBELUMNYA",
  nextPageText: "SELANJUTNYA",
  lastPageText: "TERAKHIR",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  pageButtonRenderer,
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "All",
      value: products.length,
    },
  ], // A numeric array is also available. the purpose of above example is custom the text
};

export default function Keluarga(props) {
  return (
    <>
      <div>
        <h3>Keluarga</h3>
        <div>
          <Tables
            keyField="id"
            data={products}
            columns={columns}
            selectRow={selectRow}
            cellEdit={cellEditFactory({ mode: "click" })}
            bordered={false}
            striped
            pagination={paginationFactory(options)}
          />
        </div>
        <div id="Keluarga">
          <Tabs defaultActiveKey="KELUARGA" id="uncontrolled-tab-example">
            <Tab
              eventKey="KELUARGA"
              title="KELUARGA"
              className="card card-body "
            >
              <Row xs={12} sm={12}>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Row as={Col}>
                      <Col xs={12} sm={3}>
                        <Image
                          src="./img/userbg.png"
                          width={80}
                          height={80}
                          roundedCircle
                        />
                      </Col>
                      <Col xs={12} sm={9}>
                        <Form.Row>
                          <Form.Label className="font-view-instansi">
                            Foto
                          </Form.Label>
                        </Form.Row>
                        <Form.Row>
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" />
                            <label
                              className="custom-file-label"
                              data-browse="LIHAT"
                            >
                              Lihat Berkas
                            </label>
                          </div>
                        </Form.Row>
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Nama
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Gelar Depan
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Gelar Belakang
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Tempat Lahir
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Tanggal Lahir
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Jenis Kelamin
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Agama
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Jenis Dokumen ID
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Nomor Dokumen ID
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Alamat
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          No. HP
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          No. Telepon
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Status Perkawinan
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Akte Kelahiran
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Akte Meninggal
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Tanggal Meninggal
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Status Hidup
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Form>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              disabled
                              label="Hidup"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                            <Form.Check
                              inline
                              disabled
                              label="Tidak Hidup"
                              type={type}
                              id={`inline-${type}-2`}
                            />
                          </div>
                        ))}
                      </Form>
                    </Form.Row>
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            <Tab
              eventKey="ORANG TUA"
              title="ORANG TUA"
              className="card card-body "
            ></Tab>
            <Tab
              eventKey="SUAMI/ISTRI"
              title="SUAMI/ISTRI"
              className="card card-body "
            ></Tab>
            <Tab eventKey="ANAK" title="ANAK" className="card card-body "></Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
