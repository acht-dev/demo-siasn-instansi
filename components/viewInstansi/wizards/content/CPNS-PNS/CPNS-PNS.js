import React from "react";
import Tables from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Form, Row, Col } from "react-bootstrap";

const products = [
  {
    golongan_id: "31",
    sk_nomor: "821.13/126/2003",
    sk_tanggal: "0001-01-01T00:00:00Z",
    tmt_golongan: "2002-12-01T00:00:00Z",
    nomor_letter_bkn: "GG-21115000027",
    tanggal_letter_bkn: "0001-01-01T00:00:00Z",
    jenis_kp_id: "211",
  },
];

const rowStyle = { backgroundColor: "#c8e6c9" };

const columns = [
  {
    dataField: "golongan_id",
    text: "Jenis CLTN",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "sk_nomor",
    text: "TMT",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "sk_tanggal",
    text: "Tgl SK",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "tmt_golongan",
    text: "Induk Baru",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "nomor_letter_bkn",
    text: "Insker Baru",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "tanggal_letter_bkn",
    text: "Insduk Baru",
    headerStyle: {
      fontWeight: "bold",
    },
    style: {
      fontSize: "16px",
    },
  },
  {
    dataField: "jenis_kp_id",
    text: "Insker Lama",
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

function CPNSPNS(props) {
  return (
    <>
      <div>
        <h3>CPNS / PNS</h3>
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
        <div id="CPNS/PNS">
          <Row xs={12} sm={12}>
            <Col sm={6}>
              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      Status Kepeg
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control type="text" placeholder="PNS" disabled />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      TMT CPNS
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="01/10/1986"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      Tgl. SK CPNS
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. SK CPNS
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control type="text" placeholder="" disabled />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      Jenis Pengadaan
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col xs={4} sm={4}>
                    <Form.Control type="text" placeholder=" " disabled />
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
                      Tgl. SPMT
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. SPMT
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
                      TMT PNS
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="01/07/1988"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      Tgl. SK PNS
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. SK PNS
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
                      Tgl. Pertek C2TH
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No Pertek C2TH
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
                      Tgl. Kep PNS Honorer &gt;= 2 Thn
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. Kep PNS Honorer &gt;= 2 Thn
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm={12}>
                    <Form.Control type="text" placeholder=" " disabled />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12} sm={12}>
                    <Form.Label className="font-view-instansi">
                      Karis/Karsu
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
                      Karpeg
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
                      TgL STTPL
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. STTPL
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
                      Tgl.Dokter
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YYYY"
                      disabled
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12}>
                    <Form.Label className="font-view-instansi">
                      No. Surat Dokter
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col sm={12}>
                    <Form.Control type="text" placeholder=" " disabled />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col xs={12} sm={12}>
                    <Form.Label className="font-view-instansi">
                      Nama Jabatan Yang Mengangkat CPNS
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
        </div>
      </div>
    </>
  );
}

export default CPNSPNS;
