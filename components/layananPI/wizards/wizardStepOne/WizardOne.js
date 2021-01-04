import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import {Layout} from "../../../Layout";
import Breadcrumb from "../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "../../../WizardSteps";
import PindahInstansi from "./PindahInstansi";

export default function WizardOne() {
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className="wizard__title">
          <h2>Berkas Usulan</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName="wizard__page-1" />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className="wizard__inputForm monitoringUsulan">
          <Form>
            {/* List Box Radio BUtton */}
            <Form.Row>
              <Col xs={20} md={6}>
                <PindahInstansi />
              </Col>
            </Form.Row>
            {/* End List Box Radio Button */}
          </Form>
        </div>

        {/*End Wizard One - Main Component */}

        {/* show button */}
        <ShowButton isShowButton={isButtonClick} />
        {/* Endshow button */}
      </Layout>
    </>
  );
}
