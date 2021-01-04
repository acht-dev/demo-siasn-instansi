import React, { useState } from "react";
import { Layout } from "../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "../wizardStepFour/ShowButton";
import CardProfile from "../../../layananKP/CardProfile";
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

// untuk import resume dokumen
//bagian mahesa
import UploadV1C from "./resumeDokumen/UploadV1C";
import UploadV2A from "./resumeDokumen/UploadV2A";
import UploadV3B from "./resumeDokumen/UploadV3B";
import UploadV4AC from "./resumeDokumen/UploadV4AC";
import UploadV4B from "./resumeDokumen/UploadV4B";
import UploadV5A from "./resumeDokumen/UploadV5A";
import UploadV5B from "./resumeDokumen/UploadV5B";
import UploadV5C from "./resumeDokumen/UploadV5C";
import UploadV6C from "./resumeDokumen/UploadV6C";
import UploadV7A from "./resumeDokumen/UploadV7A";
//bagian haritz
import UploadV7B from "./resumeDokumen/UploadV7B";
import UploadV7C from "./resumeDokumen/UploadV7C";
import UploadV89ABC from "./resumeDokumen/UploadV89ABC";
import UploadW1C from "./resumeDokumen/UploadW1C";
import UploadW2A from "./resumeDokumen/UploadW2A";
import UploadW3B from "./resumeDokumen/UploadW3B";
import UploadW4A from "./resumeDokumen/UploadW4A";
import UploadW4B from "./resumeDokumen/UploadW4B";
import UploadW4C from "./resumeDokumen/UploadW4C";
import UploadW5A from "./resumeDokumen/UploadW5A";
//bagian rahma
import UploadW5B from "./resumeDokumen/UploadW5B";
import UploadW5C from "./resumeDokumen/UploadW5C";
import UploadW6C from "./resumeDokumen/UploadW6C";
import UploadW7A from "./resumeDokumen/UploadW7A";
import UploadW7B from "./resumeDokumen/UploadW7B";
import UploadW7C from "./resumeDokumen/UploadW7C";
import UploadW89ABC from "./resumeDokumen/UploadW89ABC";
import UploadX2A from "./resumeDokumen/UploadX2A";
import UploadX3B from "./resumeDokumen/UploadX3B";
import UploadX5A from "./resumeDokumen/UploadX5A";
//bagian ilham
import UploadX5B from "./resumeDokumen/UploadX5B";
import UploadX5C from "./resumeDokumen/UploadX5C";
import UploadX6C from "./resumeDokumen/UploadX6C";
import UploadX78AC from "./resumeDokumen/UploadX78AC";
import UploadX7B from "./resumeDokumen/UploadX7B";
import UploadX89ABC from "./resumeDokumen/UploadX89ABC";
import UploadY2A_A from "./resumeDokumen/UploadY2A_A";
import UploadY2A from "./resumeDokumen/UploadY2A";
import UploadY3B from "./resumeDokumen/UploadX5B";
import UploadY5A from "./resumeDokumen/UploadX5B";
import UploadY5B from "./resumeDokumen/UploadX5B";

import UploadZ101112B from "./resumeDokumen/UploadZ101112B";
import UploadY4ABC from "./resumeDokumen/UploadY4ABC";
import UploadY5ABC from "./resumeDokumen/UploadY5ABC";
import UploadY6ABC from "./resumeDokumen/UploadY6ABC";
import UploadY7ABC from "./resumeDokumen/UploadY7ABC";
import UploadY8ABC from "./resumeDokumen/UploadY8ABC";
import UploadY9ABC from "./resumeDokumen/UploadY9ABC";

import UploadY5C from "./resumeDokumen/UploadY5C";
import UploadY6C from "./resumeDokumen/UploadY6C";
import UploadY7AC from "./resumeDokumen/UploadY7AC";
import UploadY7B from "./resumeDokumen/UploadY7B";
import UploadZ1011B from "./resumeDokumen/UploadZ1011B";
import UploadZ12B from "./resumeDokumen/UploadZ12B";
import UploadZ13B from "./resumeDokumen/UploadZ13B";
import UploadX7C from "./resumeDokumen/UploadX7C";

import UploadX8ABC from "./resumeDokumen/UploadX8ABC";
import UploadX9ABC from "./resumeDokumen/UploadX9ABC";

import WizRD1_A from "./resumeData1/WizRD1_A";
import WizRD2_B from "./resumeData2/WizRD2_B";
import WizRD1_Z from "./resumeData1/WizRD1_Z";
import StatusVW1C from "./StatusData/StatusVW1C";

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
                defaultActiveKey='editData1'
                transition={false}
                id='noanim-tab-example'>
                {/*Tab Edit Data 1*/}
                <Tab eventKey='editData1' title='RESUME DATA 1'>
                  {/*Rubah disini */}
                  {/* <WizRD1_A /> */}
                  <WizRD1_Z />
                </Tab>

                {/*Tab Edit Data 2*/}
                <Tab eventKey='editData2' title='RESUME DATA 2'>
                  {/*Rubah disini */}
                  <WizRD2_B />
                </Tab>

                {/*TAB Resume Dokumen*/}
                <Tab eventKey='unggahDokumen' title='RESUME DOKUMEN'>
                  {/*Rubah disini */}
                  <UploadW5B />
                  {/* <UploadZ101112B /> */}
                  {/* <UploadW7A/> */}
                </Tab>

                {/* Tab Status Data */}
                <Tab eventKey='statusData' title='STATUS DATA'>
                  <StatusVW1C />
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
