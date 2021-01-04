import { Layout } from "./../../../Layout";
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
import Link from "next/link";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "./../../Breadcrumb";
import WizardSteps from "./WizardSteps";
import { useSelector } from "react-redux";

// Upload Dokumen
import UploadV1C from "./uploadDokumen/UploadV1C";
import UploadV2A from "./uploadDokumen/UploadV2A";
import UploadV3B from "./uploadDokumen/UploadV3B";
import UploadV4B from "./uploadDokumen/UploadV4B";
import UploadV4AC from "./uploadDokumen/UploadV4AC";
import UploadV5A from "./uploadDokumen/UploadV5A";
import UploadV5B from "./uploadDokumen/UploadV5B";
import UploadV5C from "./uploadDokumen/UploadV5C";
import UploadV6C from "./uploadDokumen/UploadV6C";
import UploadV7A from "./uploadDokumen/UploadV7A";
import UploadV7B from "./uploadDokumen/UploadV7B";
import UploadV7C from "./uploadDokumen/UploadV7C";
import UploadV89ABC from "./uploadDokumen/UploadV89ABC";
import UploadW1C from "./uploadDokumen/UploadW1C";
import UploadW2A from "./uploadDokumen/UploadW2A";
import UploadW3B from "./uploadDokumen/UploadW3B";
import UploadW4A from "./uploadDokumen/UploadW4A";
import UploadW4B from "./uploadDokumen/UploadW4B";
import UploadW4C from "./uploadDokumen/UploadW4C";
import UploadW5A from "./uploadDokumen/UploadW5A";
import UploadW5B from "./uploadDokumen/UploadW5B";
import UploadW5C from "./uploadDokumen/UploadW5C";
import UploadW6C from "./uploadDokumen/UploadW6C";
import UploadW7A from "./uploadDokumen/UploadW7A";
import UploadW7B from "./uploadDokumen/UploadW7B";
import UploadW7C from "./uploadDokumen/UploadW7C";
import UploadW89ABC from "./uploadDokumen/UploadW89ABC";
import UploadX2A from "./uploadDokumen/UploadX2A";
import UploadX3B from "./uploadDokumen/UploadX3B";
import UploadX5A from "./uploadDokumen/UploadX5A";
import UploadX5B from "./uploadDokumen/UploadX5B";
import UploadX5C from "./uploadDokumen/UploadX5C";
import UploadX6C from "./uploadDokumen/UploadX6C";
import UploadX78AC from "./uploadDokumen/UploadX78AC";
import UploadX7B from "./uploadDokumen/UploadX7B";
import UploadX89ABC from "./uploadDokumen/UploadX89ABC";
import UploadY2A from "./uploadDokumen/UploadY2A";
import UploadY3B from "./uploadDokumen/UploadY3B";
import UploadY5A from "./uploadDokumen/UploadY5A";
import UploadY5B from "./uploadDokumen/UploadY5B";
import UploadY5C from "./uploadDokumen/UploadY5C";
import UploadY6C from "./uploadDokumen/UploadY6C";
import UploadY7AC from "./uploadDokumen/UploadY7AC";
import UploadY7B from "./uploadDokumen/UploadY7B";
import UploadZ1011B from "./uploadDokumen/UploadZ1011B";
import UploadZ12B from "./uploadDokumen/UploadZ12B";
import UploadZ13B from "./uploadDokumen/UploadZ13B";

// Status Data
import StatusVWXY2A from "./StatusData/StatusVWXY2A";
import StatusVW1C from "./StatusData/StatusVW1C";
import StatusVWXY4A from "./StatusData/StatusVWXY4A";
import StatusVWXY3B from "./StatusData/StatusVWXY3B";
import StatusVWXY4B from "./StatusData/StatusVWXY4B";
import StatusVWXY4C from "./StatusData/StatusVWXY4C";
import StatusVWXY5A from "./StatusData/StatusVWXY5A";
import StatusVWXY5C from "./StatusData/StatusVWXY5C";
import StatusVWXY6C from "./StatusData/StatusVWXY6C";
import StatusVWXY7A from "./StatusData/StatusVWXY7A";
import StatusVWXY7BC from "./StatusData/StatusVWXY7BC";
import StatusVWXY8A from "./StatusData/StatusVWXY8A";
import StatusVWXY8B from "./StatusData/StatusVWXY8B";
import StatusVWXY8C from "./StatusData/StatusVWXY8C";
import StatusVWXY9A from "./StatusData/StatusVWXY9A";
import StatusVWXY9B from "./StatusData/StatusVWXY9B";
import StatusVWXY9C from "./StatusData/StatusVWXY9C";

// Wizard ED 2
import Wiz_ED2 from "./EditData2/Wiz_ED2";

// Wizard ED 1
import WizED_1C from "./EditData1/WizED1_C";
import WizED_1B from "./EditData1/WizED1_B";
import WizED_1A from "./EditData1/WizED1_A";

import styles from "../../../../styles/Home.module.css";
// import { useState } from "react";

function WizardThree() {
  const multivalue = useSelector((state) => state.kp1);

  // --- Start Golongan III D ke Bawah ---

  //V1C
  if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "KP reguler" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV1C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVW1C />
                  </Tab>
                </Tabs>
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
  //V2A
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "KP Struktural" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV2A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY2A />
                  </Tab>
                </Tabs>
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
  //V3B
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Jabatan Fungsional Tertentu" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV3B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY3B />
                  </Tab>
                </Tabs>
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
  //V4AC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV4AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY4A />
                  </Tab>
                </Tabs>
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
  //V4B
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV4B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY4B />
                  </Tab>
                </Tabs>
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
  //V4AC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV4AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY4C />
                  </Tab>
                </Tabs>
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
  //V5A
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV5A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY5A />
                  </Tab>
                </Tabs>
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
  //V5B
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV5B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*<StatusVWXY5B />*/}
                  </Tab>
                </Tabs>
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
  //V5C
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV5C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY5C />
                  </Tab>
                </Tabs>
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
  //V6C
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV6C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY6C />
                  </Tab>
                </Tabs>
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
  //V7A
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV7A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY7A />
                  </Tab>
                </Tabs>
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
  //V7BC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV7B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY7BC />
                  </Tab>
                </Tabs>
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
  //V7BC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV7C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY7BC />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY8A />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY8B />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY8C />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY9A />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY9B />
                  </Tab>
                </Tabs>
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
  //V89ABC
  else if (
    multivalue.multivalue.Golongan === "Gol III D ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadV89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY9C />
                  </Tab>
                </Tabs>
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

  // --- Start Golongan IV B ke Bawah

  //W1C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "KP reguler" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW1C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVW1C />
                  </Tab>
                </Tabs>
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
  //W2A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "KP Struktural" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW2A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY2A />
                  </Tab>
                </Tabs>
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
  //W2A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "KP Struktural" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW2A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    <StatusVWXY2A />
                  </Tab>
                </Tabs>
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
  //W3B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Jabatan Fungsional Tertentu" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW3B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W4A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW4A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W4B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW4B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W4C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW4C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W5A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW5A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W5B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW5B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W5C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW5C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W6C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW6C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W7A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW7A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W7B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW7B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W7C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW7C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W8A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W8B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W8C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W9A
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //W9B
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X1C
  else if (
    multivalue.multivalue.Golongan === "Gol IV B ke Bawah" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X1C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "KP reguler" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*kosong gan*/}
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X2A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "KP Struktural" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX2A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X3B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Jabatan Fungsional Tertentu" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX3B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X5A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX5A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X5B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX5B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X5C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX5C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X6C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX6C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X6C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX6C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X7A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX78AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X7B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX7B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X7C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX78AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X8A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X8B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X8C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X9A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X9B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //X9C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y2A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "KP Struktural" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY2A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y3B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Jabatan Fungsional Tertentu" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY3B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y5A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY5A />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y5B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY5B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y5C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Kenaikan Pangkat Prestasi Luar Biasa" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY5C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y6C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY6C />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y7A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY7AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y7B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY7B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y7C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button ===
      "Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadY7AC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y8A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y8B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y8C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Penemuan Baru" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadX89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y9A
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "A"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1A />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y9B
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Y9C
  else if (
    multivalue.multivalue.Golongan === "Gol IV C NON Jenjang Utama" &&
    multivalue.multivalue.Button === "Jabatan Hakim / Panitera" &&
    multivalue.multivalue.Option === "C"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1C />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadW89ABC />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Z10B
  else if (
    multivalue.multivalue.Golongan === "Kenaikan Jabatan" &&
    multivalue.multivalue.Button === "Kenaikan dalam Jabatan" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadZ1011B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Z11B
  else if (
    multivalue.multivalue.Golongan === "Kenaikan Jabatan" &&
    multivalue.multivalue.Button === "Pemberhentian dalam Jabatan" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadZ1011B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Z12B
  else if (
    multivalue.multivalue.Golongan === "Kenaikan Jabatan" &&
    multivalue.multivalue.Button === "Pengangkatan kembali dalam Jabatan" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadZ12B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
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
  //Z13B
  else if (
    multivalue.multivalue.Golongan === "Kenaikan Jabatan" &&
    multivalue.multivalue.Button === "Perpindahan dalam Jabatan" &&
    multivalue.multivalue.Option === "B"
  ) {
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
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey='editData1'
                  transition={false}
                  id='noanim-tab-example'>
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey='editData1' title='EDIT DATA 1'>
                    {/*Rubah disini */}
                    <WizED_1B />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <Wiz_ED2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <UploadZ13B />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*kosong gan*/}
                  </Tab>
                </Tabs>
              </div>
            </section>
          </main>

          <br></br>

          {/* show button */}
          <ShowButton />
        </Layout>
      </>
    );
  } else {
    return <Error />;
  }
}

function Error() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Kesalahan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Maaf pilihan Anda tidak tersedia, Silahkan Kembali</p>
      </Modal.Body>

      <Modal.Footer>
        <Link href='/layananKP/berkasUsulan/step-1'>
          <Button variant='primary'>Kembali</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default WizardThree;
