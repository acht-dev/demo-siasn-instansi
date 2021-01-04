import React, { useState } from "react";
import { Layout } from "../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "../wizardStepFour/ShowButton";
import CardProfile from "../wizardStepFour/CardProfile";
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
  Card,
  FormControl,
} from "react-bootstrap";
import WizardSteps from "./WizardSteps";
import Pendidikan from "./Pendidikan/Pendidikan";
import styles from "../../../../styles/Home.module.css";
import StatusVW1C from "./StatusData/StatusVW1C";
import Datatambahan from "./dataTambahan/Datatambahan";
import DataPribadi from "./dataPribadi/Datapribadi";
import Keluarga from "./Keluarga/Keluarga";
import PMK from "./PMK/PMK";
import BnipKedinasan from "./resumeData/BnipKedinasan";
import BnipPPPK from "./resumeData/BnipPPPK";
import BnipPNS from "./resumeData/BnipPNS";

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
        <CardProfile isClick />

        {/* mulai content step 3 */}
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.components}>
              <Tabs
                defaultActiveKey='dataPribadi'
                transition={false}
                id='noanim-tab-example'>
                {/*Tab Edit Data 1*/}
                <Tab eventKey='dataPribadi' title='Data Pribadi'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <DataPribadi />
                    </Card.Body>
                  </Card>
                </Tab>

                {/*Tab Edit Data 2*/}
                <Tab eventKey='Keluarga' title='Keluarga'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <Keluarga />
                    </Card.Body>
                  </Card>
                </Tab>

                <Tab eventKey='Pendidikan' title='Pendidikan'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <Pendidikan />
                    </Card.Body>
                  </Card>
                </Tab>

                <Tab eventKey='PMK' title='PMK'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <PMK />
                    </Card.Body>
                  </Card>
                </Tab>

                <Tab eventKey='dataTambahan' title='Data Tambahan'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <Datatambahan />
                    </Card.Body>
                  </Card>
                </Tab>

                {/*TAB Dokumen Pendukung*/}
                <Tab eventKey='resumeDokumen' title='Resume Dokumen'>
                  {/*Rubah disini */}
                </Tab>

                {/*TAB Status Data*/}
                <Tab eventKey='statusData' title='Status Data'>
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
