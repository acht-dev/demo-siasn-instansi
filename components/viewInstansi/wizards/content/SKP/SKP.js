import React from "react";
import Tables from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Form, Row, Col, Tab, Tabs } from "react-bootstrap";

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

function SKP(props) {
  const selectOptions = {
    jenisJabatan: ["Fungsional Umum", "Fungsional"],
  };
  return (
    <>
      <div>
        <h3>SKP</h3>
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
        <div id="SKP">
          <Tabs defaultActiveKey="RIWAYATSKP" id="uncontrolled-tab-example">
            <Tab
              eventKey="RIWAYATSKP"
              title="RIWAYAT SKP"
              className="card card-body"
            >
              <Row xs={12} sm={12}>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Row>
                      <Col sm={12}>
                        <Form.Label className="font-view-instansi">
                          Jenis Kelamin
                        </Form.Label>
                        <Form.Control as="select">
                          {selectOptions.jenisJabatan.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Tahun
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          NIP SKP
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder="60%" disabled />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Orientasi Pelayanan
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Komitmen
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Kerjasama
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>

                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Nilai Perilaku Kerja
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder="40%" disabled />
                      </Col>
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
                          Nilai Perilaku Kerja
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>

                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Disiplin
                        </Form.Label>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col xs={3} sm={3}>
                        <Form.Control type="text" placeholder=" " />
                      </Col>

                      <Col>
                        <Form.Control type="text" placeholder=" " disabled />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={12}>
                        <Form.Label className="font-view-instansi">
                          Inisiatif Kerja
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
              </Row>
            </Tab>
            <Tab
              eventKey="PejabatPenilai"
              title="PEJABAT PENILAI"
              className="card card-body"
            ></Tab>
            <Tab
              eventKey="AtasanPejabatPenilai"
              title="ATASAN PEJABAT PENILAI"
              className="card card-body"
            ></Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default SKP;
