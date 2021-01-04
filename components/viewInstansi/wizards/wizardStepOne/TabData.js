import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import DataUtama from "./DataUtama";
import DataRiwayat from "./DataRiwayat";

import {
  Tabs,
  Tab,
  Modal,
  Row,
  Button,
  Col,
  Form,
  Card,
  Container,
} from "react-bootstrap";

function TabData(props) {
  const [buttonName, setButtonName] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);

  return (
    <>
      {props.isClick && (
        <Form.Row className="mt-3">
          <Col>
            <Tabs defaultActiveKey="DataUtama">
              <Tab eventKey="DataUtama" title="Data Utama">
                <DataUtama />
              </Tab>
              <Tab eventKey="DataRiwayat" title="Data Riwayat">
                <DataRiwayat />
              </Tab>
            </Tabs>
          </Col>
        </Form.Row>
      )}
      {/* <GolonganKP isButtonClick={isButtonClick} /> */}
    </>
  );
}

export default TabData;
