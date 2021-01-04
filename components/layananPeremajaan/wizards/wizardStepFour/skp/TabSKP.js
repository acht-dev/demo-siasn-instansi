import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Komponen32 from "./Komponen32";
import PejabatPenilaiSKP from "./PejabatPenilaiSKP";
import AtasanPejabatPenilaiSKP from "./AtasanPejabatPenilaiSKP";
import DokumenPendukungSkp from "./DokumenPendukungSKP";
import WizardShowButtonBox from "./WizardShowButtonBox";
import StatusDataSKP from "./StatusDataSKP";

export default function TabSKP() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}>
            RIWAYAT SKP
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab == "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}>
            PEJABAT PENILAI
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab == "3" ? "active" : ""}
            onClick={() => setActiveTab("3")}>
            ATASAN PEJABAT PENILAI
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab == "4" ? "active" : ""}
            onClick={() => setActiveTab("4")}>
            DOKUMEN PENDUKUNG
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab == "5" ? "active" : ""}
            onClick={() => setActiveTab("5")}>
            STATUS DATA
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <div className='card cardCustom'>
            <Komponen32></Komponen32>
            <div className='mt-4'></div>
            <span className='ml-2 mb-4'>
              <WizardShowButtonBox></WizardShowButtonBox>
            </span>
          </div>
        </TabPane>
        <TabPane tabId='2'>
          <div className='card cardCustom'>
            <PejabatPenilaiSKP></PejabatPenilaiSKP>
            <div className='mt-4'></div>
            <span className='ml-2 mb-4'>
              <WizardShowButtonBox></WizardShowButtonBox>
            </span>
          </div>
        </TabPane>
        <TabPane tabId='3'>
          <div className='card cardCustom'>
            <AtasanPejabatPenilaiSKP></AtasanPejabatPenilaiSKP>
            <div className='mt-4'></div>
            <span className='ml-2 mb-4'>
              <WizardShowButtonBox></WizardShowButtonBox>
            </span>
          </div>
        </TabPane>
        <TabPane tabId='4'>
          <div className='card cardCustom'>
            <DokumenPendukungSkp></DokumenPendukungSkp>
            <div className='mt-4'></div>
            <span className='ml-2 mb-4'>
              <WizardShowButtonBox></WizardShowButtonBox>
            </span>
          </div>
        </TabPane>
        <TabPane tabId='5'>
          <div className='card cardCustom'>
            <StatusDataSKP></StatusDataSKP>
            <div className='mt-4'></div>
            <span className='ml-2 mb-4'>
              <WizardShowButtonBox></WizardShowButtonBox>
            </span>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
}
