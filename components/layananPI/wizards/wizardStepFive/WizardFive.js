import React, { useState } from "react";
import {Layout} from "../../../../components/Layout";
import Breadcrumb from "../Breadcrumb";
import ShowButton from "./ShowButton";
import CardProfile from "../wizardStepFour/CardProfile";
import WizardSteps from "../../../WizardSteps";
import { Form, Col, show, setShow, Button, Modal} from "react-bootstrap";
import Link from "next/link";

export default function WizardFive() {
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [buttonName, setButtonName] = useState("");

  const handleClick = (buttonName) => {
    if (!isButtonClick) {
      setIsButtonClick(true);
    }
    switch (buttonName) {
      case "golongan_kp":
        setButtonName(buttonName);
        break;
      case "pendidikan":
        setButtonName(buttonName);
        break;
      default:
        break;
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className="wizard__title">
          <h2>Simpan Berkas</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName="wizard__page-5" />
        {/* End wizard step section */}
        {/* Card PRofile */}
        <CardProfile />
        {/* End Card PRofile */}

        {/* show modal dialog */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="MarginRight">Simpan Berkas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menyimpan berkas ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kembali
          </Button>
          <Link href='/'>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>


      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>
          {/* {isShowButton && ( */}
          <div className="wizard__showButton-buttonBox">
          <Link href="/layananKP/berkasUsulan/step-4">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/">
              <Button
                  className="btn btn-after"
                  type='submit'
                  onClick={handleShow}>
                  SIMPAN
              </Button>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
      
      </Layout>
    </>
  );
}
