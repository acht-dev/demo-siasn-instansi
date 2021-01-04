import Layout from "../../../../Layout";
import React, { useState } from "react";
import ShowButton from "./../ShowButton";
import CardProfile from "./../CardProfile";
import Breadcrumb from "../../../../Breadcrumb";
import WizardSteps from "../WizardSteps";
import Tables from "./Tables";
import Golongan from "./Golongan";

function WizGolongan() {
  const data = [
    {
      id: 1,
      golongan: "test",
      Nomor_SK: "test",
      Tanggal_SK: "test",
      TMTGolongan: "test",
      NomorBKN: "test",
      TanggalBKN: "test",
      JenisKP: "test",
      AsalNama: "test",
    },
  ];
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Golongan/KP</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* show card profile */}
        <CardProfile />
        <p>Riwayat</p>
        <Tables data={data} />

        <Golongan />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizGolongan;
