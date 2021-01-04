import React, { useState } from "react";
import { Layout } from "../../../Layout";
import Breadcrumb from "../../Breadcrumb";

import { useDispatch } from "react-redux";
import { findByNip } from "../../../../redux/actions/searchNip";

import TabData from "./TabData";

import { Row, Button, Col, Form, Image, Card } from "react-bootstrap";

function WizardFirst() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [nip, setNip] = useState({ nipLama: "", nipBaru: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const _searchData = (e) => {
    e.preventDefault();
    const dataSearch = {
      nipLama: nip.nipLama,
      nipBaru: nip.nipBaru,
    };
    console.log(JSON.stringify(dataSearch));
    dispatch(findByNip(dataSearch.nipLama, dataSearch.nipBaru));
    if (!isClick) {
      setIsClick(true);
    }
  };

  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className="wizard__title">
        <h5>Tampilan Data PNS</h5>
      </div>

      {/* CARD */}
      {/* Component input form */}

      <Card className="mb-3">
        <Form onSubmit={(e) => _searchData(e)}>
          <Row>
            <Col sm={1} className="mt-2 ml-1">
              <img src="/img/default.png" className="img-view-instansi" />
            </Col>
            <Col sm={5} className="mt-2 ml-3">
              <Form.Row className="align-items-center">
                <Col sm={3}>
                  <Form.Label className="font-card-view-instansi">
                    NIP LAMA :
                  </Form.Label>
                </Col>
                <Col sm={7}>
                  <Form.Control
                    placeholder="Masukan NIP Lama"
                    onChange={(e) =>
                      setNip({ ...nip, nipLama: e.target.value })
                    }
                  />
                </Col>
                <Col sm={2} className="my-1">
                  {/* <Button variant="light" type="submit" onClick={handleSubmit}>
                    <Image src="/img/magnify-scan.png" />
                  </Button> */}
                </Col>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col sm={3}>
                  <Form.Label className="font-card-view-instansi">
                    NIP BARU :
                  </Form.Label>
                </Col>
                <Col sm={7}>
                  <Form.Control
                    placeholder="Masukan NIP Baru"
                    onChange={(e) =>
                      setNip({ ...nip, nipBaru: e.target.value })
                    }
                  />
                </Col>
                <Col sm={2} className="my-1">
                  <Button variant="light" type="submit" onClick={_searchData}>
                    <Image src="/img/magnify-scan.png" />
                  </Button>
                </Col>
              </Form.Row>
            </Col>
            <Col sm={5} className="mt-2">
              <Form.Row className="">
                <Form.Label sm={12} className="font-card-view-instansi">
                  <b>-</b>
                </Form.Label>
              </Form.Row>
              <Form.Row className="">
                <Form.Label sm={3} className="font-card-view-instansi">
                  <b>Instansi : </b>
                </Form.Label>
                <Form.Label sm={9} className="ml-1 font-card-view-instansi">
                  {" "}
                  -
                </Form.Label>
              </Form.Row>
              <Form.Row className="">
                <Form.Label sm={3} className="font-card-view-instansi">
                  <b>Unit Kerja : </b>
                </Form.Label>
                <Form.Label sm={9} className="ml-1 font-card-view-instansi">
                  {" "}
                  -
                </Form.Label>
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </Card>
      {/* </div> */}

      {/* Show Tab */}
      {/* <ShowButton isShowButton={isButtonClick} /> */}
      <TabData isClick={isClick} onClick={handleSubmit} />
    </Layout>
  );
}

export default WizardFirst;
