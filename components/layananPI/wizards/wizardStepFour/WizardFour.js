import React, { useState } from "react";
import {Layout} from "../../../Layout";
import Breadcrumb from "../Breadcrumb";
import ShowButton from "../wizardStepFour/ShowButton";
import CardProfile from "./CardProfile";
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
import WizardSteps from "./WizardSteps";
import styles from "../../../../styles/Home.module.css";
import UploadX9ABC from "./resumeDokumen/UploadX9ABC";
import WizRD1_B from "./resumeData1/WizRD1_B";
import WizRD2_B from "./resumeData2/WizRD2_B";


function WizardFour() {
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
        <WizardSteps wizardClassName='wizard__page-4' />

        {/* show card profile */}
        <CardProfile isClick={isClick} />

        {/* mulai content step 3 */}
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.components}>
              <Tabs
                defaultActiveKey="editData1"
                transition={false}
                id="noanim-tab-example"
              >
                {/*Tab Edit Data 1*/}
                <Tab eventKey="editData1" title="RESUME DATA 1">

                  {/*Rubah disini */}
                  <WizRD1_B/>
                </Tab>

                {/*Tab Edit Data 2*/}
                <Tab eventKey="editData2" title="RESUME DATA 2">

                  {/*Rubah disini */}
                  <WizRD2_B/>
                </Tab>

                {/*TAB Dokumen Pendukung*/}
                <Tab eventKey="unggahDokumen" title="RESUME DOKUMEN">

                  {/*Rubah disini */}
                  {/* <UploadX7C/> */}
                  {/* <UploadY5C/> */}
                    {/* <UploadY6C/> */}
                    {/* <UploadY7AC/> */}
                    {/* <UploadY7B/> */}
                    {/* <UploadZ1011B/> */}
                    {/* <UploadZ12B/> */}
                    {/* <UploadZ13B/> */}
                    {/* <UploadX8ABC/> */}
                    <UploadX9ABC/>

                </Tab>
              </Tabs>
            </div>
          </section>
        </main>

      <br></br>

        {/* show button */}
        <ShowButton isClick={isClick} />
      </Layout>
    </>
  );
}

export default WizardFour;