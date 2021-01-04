import { Layout } from "./../../../Layout";
import { Form, Col, Button, Tabs, Tab, Card, Modal } from "react-bootstrap";
import React, { useState } from "react";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "./../../Breadcrumb";
import WizardSteps from "./WizardSteps";
import EditData1 from "./EditData1/EditData1";
import EditData2 from "./EditData2/EditData2";
import StatusData from "./StatusData/Statusdata";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../../styles/Home.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

// Upload Dokumen
import APS from "./uploadDokumen/APS";
import BUP from "./uploadDokumen/BUP";
import Hilang from "./uploadDokumen/Hilang";
import Hormat from "./uploadDokumen/Hormat";
import Meninggal from "./uploadDokumen/Meninggal";
import POKP from "./uploadDokumen/POKP";
import PPPK from "./uploadDokumen/PPPK";
import TCJR from "./uploadDokumen/TCJR";
import Tewas from "./uploadDokumen/Tewas";
import THP from "./uploadDokumen/THP";

// Status Data
//import StatusVWXY2A from "./StatusData/StatusVWXY2A";
//import StatusVW1C from "./StatusData/StatusVW1C";
//import StatusVWXY4A from "./StatusData/StatusVWXY4A";
//import StatusVWXY3B from "./StatusData/StatusVWXY3B";
//import StatusVWXY4B from "./StatusData/StatusVWXY4B";
//import StatusVWXY4C from "./StatusData/StatusVWXY4C";
//import StatusVWXY5A from "./StatusData/StatusVWXY5A";
//import StatusVWXY5C from "./StatusData/StatusVWXY5C";
//import StatusVWXY6C from "./StatusData/StatusVWXY6C";
//import StatusVWXY7A from "./StatusData/StatusVWXY7A";

// import { useState } from "react";

function WizardThree() {
  const multivalue = useSelector((state) => state.pemberhentian);

  console.log(JSON.stringify(multivalue));
  // --- Pusat IV/b ke Bawah ---

  //APS
  if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi Pusat IV/c ke Atas ---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi Pusat IV/c ke Atas Khusus JPT Madya---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi Pusat IV/c ke Atas Khusus JPT Utama---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi Pusat IV/c ke Atas JFT Utama---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi DAERAH IV/b ke Bawah ---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi DAERAH IV/c ke Atas ---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi DAERAH IV/c ke Atas Khusus JPT Madya ---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi DAERAH IV/c ke Atas Khusus JPT Utama---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  // --- Pemberhentian Instansi DAERAH IV/c ke Atas JFT Utama---

  //APS
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Atas Permintaan Sendiri (APS)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <APS />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP Non KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //BUP KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <BUP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah (POKP)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <POKP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani (TCJR)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <TCJR />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Meninggal />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Tewas
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Tewas />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Karena Hilang
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hilang />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Dengan Hormat dengan Hak Pensiun
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Dengan Hormat dengan Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <Hormat />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Tanpa Hak Pensiun
  else if (
    multivalue.multivalue.Golongan === "Pemberhentian Tanpa Hak Pensiun" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Tanpa Hak Pensiun"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <THP />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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

  //Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)
  else if (
    multivalue.multivalue.Golongan ===
      "Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button ===
      "Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)"
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
                    <EditData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey='editData2' title='EDIT DATA 2'>
                    {/*Rubah disini */}
                    <EditData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey='unggahDokumen' title='UNGGAH DOKUMEN'>
                    {/*Rubah disini */}
                    <PPPK />
                  </Tab>

                  {/*TAB Status Data*/}
                  <Tab eventKey='statusData' title='STATUS DATA'>
                    {/*Rubah disini */}
                    <StatusData />
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
        <Link href='/layananPemberhentian/berkasUsulan'>
          <Button variant='primary'>Kembali</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default WizardThree;
