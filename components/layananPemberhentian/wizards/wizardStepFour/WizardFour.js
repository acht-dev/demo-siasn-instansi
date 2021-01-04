import {Layout} from "./../../../Layout";
import { Form, Col, Button, Tabs, Tab, Card,  Modal } from "react-bootstrap";
import React, { useState } from "react";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "./../../Breadcrumb";
import WizardSteps from "./WizardSteps";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumeData1 from "./ResumeData1/ResumeData1";
import ResumeData2 from "./ResumeData2/ResumeData2";
import styles from "../../../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useSelector } from "react-redux";


// Resume Dokumen
import APS from "./ResumeDokumen/APS";
import BUP from "./ResumeDokumen/BUP";
import Hilang from "./ResumeDokumen/Hilang";
import Hormat from "./ResumeDokumen/Hormat";
import Meninggal from "./ResumeDokumen/Meninggal";
import POKP from "./ResumeDokumen/POKP";
import PPPK from "./ResumeDokumen/PPPK";
import TCJR from "./ResumeDokumen/TCJR";
import Tewas from "./ResumeDokumen/Tewas";
import THP from "./ResumeDokumen/THP";


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function WizardFour() {
  const multivalue = useSelector((state) => state.pemberhentian);

  console.log(JSON.stringify(multivalue));
  // --- Pusat IV/b ke Bawah ---

  //APS
  if (
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
          {/* End wizard step section */}
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Pusat IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/b ke Bawah" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTM" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JPTU" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Atas Permintaan Sendiri (APS)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />
  
          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>
  
          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />
  
          {/* show card profile */}
          <CardProfile />
  
          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <APS />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <BUP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <POKP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <TCJR />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Meninggal />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Tewas"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Tewas />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Karena Hilang"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hilang />
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
    multivalue.multivalue.Golongan === "Pemberhentian Instansi Daerah IV/c ke Atas" &&
    multivalue.multivalue.Option === "JFTU" &&
    multivalue.multivalue.Button === "Pemberhentian Dengan Hormat dengan Hak Pensiun"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <Hormat />
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
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <THP />
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
    multivalue.multivalue.Golongan === "Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)" &&
    multivalue.multivalue.Option === "" &&
    multivalue.multivalue.Button === "Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)"
  ) {
    return (
      <>
        <Layout>
          {/* breadcrumb */}
          <Breadcrumb />

          {/* title */}
          <div className="wizard__title">
            <h2>Resume</h2>
          </div>

          {/* wizard step section */}
          <WizardSteps wizardClassName="wizard__page-4" />

          {/* show card profile */}
          <CardProfile />

          {/* mulai content step 3 */}
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.components}>
                <Tabs
                  defaultActiveKey="resumeData1"
                  transition={false}
                  id="noanim-tab-example"
                >
                  {/*Tab Edit Data 1*/}
                  <Tab eventKey="resumeData1" title="RESUME DATA 1">

                    {/*Rubah disini */}
                    <ResumeData1 />
                  </Tab>

                  {/*Tab Edit Data 2*/}
                  <Tab eventKey="resumeData2" title="RESUME DATA 2">

                    {/*Rubah disini */}
                    <ResumeData2 />
                  </Tab>

                  {/*TAB Dokumen Pendukung*/}
                  <Tab eventKey="resumeDokumen" title="RESUME DOKUMEN">

                    {/*Rubah disini */}
                    <PPPK />
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

  else {
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
        <Link href="/layananPemberhentian/berkasUsulan">
          <Button variant="primary">Kembali</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default WizardFour;
