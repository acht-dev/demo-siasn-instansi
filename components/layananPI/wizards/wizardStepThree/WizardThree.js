import {Layout} from "../../../Layout";
import { Form, Col, Button,Tabs,Tab,Card } from "react-bootstrap";
import React, { useState } from "react";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "../Breadcrumb";
import WizardSteps from "./WizardSteps";
import ED1_B from "./EditData1/WizED1_B";
// import { useState } from "react";

function WizardThree() {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Usulan</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* show card profile */}
        <CardProfile isClick={isClick} />

        {/* mulai content step 3 */}
        <ED1_B/>

      <br></br>

        {/* show button */}
        <ShowButton isClick={isClick} />
      </Layout>
    </>
  );
}

export default WizardThree;