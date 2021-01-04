import { Layout } from "../../../Layout";
import React, { useState } from "react";
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
  Modal,
  Card,
} from "react-bootstrap";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "../../Breadcrumb";
import WizardSteps from "./WizardSteps";
import Link from "next/link";
import DataPribadi from "./dataPribadi/DataPribadi";
import DataTambahan from "./dataTambahan/DataTambahan";
import Pendidikan from "./Pendidikan/Pendidikan";
import Keluarga from "./Keluarga/Keluarga";
import PMK from "./PMK/PMK";
import { useSelector } from "react-redux";
import styles from "../../../../styles/Home.module.css";
import BnipKedinasan from "./uploadData/BnipKedinasan";
import BnipPPPK from "./uploadData/BnipPPPK";
import BnipPNS from "./uploadData/BnipPNS";
import StatusVW1C from "./StatusData/StatusVW1C";
// import { useState } from "react";

function WizardThree() {
  const multivalue = useSelector((state) => state.kp1);

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
        <CardProfile isClick />

        {/* mulai content step 3 */}
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.components}>
              <Tabs
                defaultActiveKey='dataPribadi'
                transition={false}
                id='noanim-tab-example'>
                {/*Tab data pribadi*/}
                <Tab eventKey='dataPribadi' title='Data Pribadi'>
                  {/*Rubah disini */}
                  {/* <WizED_1C /> */}
                  <Card>
                    <Card.Body>
                      <DataPribadi />
                    </Card.Body>
                  </Card>
                </Tab>

                {/*Tab keluarga*/}
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
                  <DataTambahan />
                </Tab>

                {/*TAB Dokumen Pendukung*/}
                <Tab eventKey='unggahDokumen' title='Unggah Dokumen'>
                  {/*Rubah disini */}
                  <Card>
                    <Card.Body>
                      <BnipKedinasan />
                    </Card.Body>
                  </Card>
                  {/* <BnipPNS/> */}
                  {/* <BnipPPPK/> */}
                </Tab>

                {/*TAB Status Data*/}
                <Tab eventKey='statusData' title='Status Data'>
                  <StatusVW1C />
                </Tab>
              </Tabs>
              <br></br>
            </div>
          </section>
        </main>

        <br></br>

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizardThree;
