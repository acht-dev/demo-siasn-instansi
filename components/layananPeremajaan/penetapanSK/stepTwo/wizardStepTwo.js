import Link from "next/link";
import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../components/layananPeremajaan/penetapanSK/Breadcrumb";
import ShowButton from "./ShowButton";
import WizardStepsSK from "../wizardStepsSK";

export default function wizardStepTwo() {
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      }

      setValidated(true);
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className="wizard__title">
          <h2>Surat Usulan</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardStepsSK wizardClassName="wizard__page-5" />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className="wizard__inputForm monitoringUsulan">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="noSK">
                    <Form.Label>Masukkan Nomor Surat Keputusan</Form.Label>
                    <Form.Control
                          type="text-muted"
                          name="noSK"
                          placeholder="Masukkan No. Surat Keputusan"
                        />
                </Form.Group>
                <Form.Group as={Col} controlId="tanggalSK">
                    <Form.Label>Tanggal SK</Form.Label>
                    <Form.Control
                          type="date"
                          name="tanggalSK"
                          placeholder="dd/mm/yyyy"
                        />
                </Form.Group>
                <Form.Group as={Col} controlId="spesimenTTD">
                    <Form.Label>Pilih Spesimen Tanda Tangan</Form.Label>
                    <Form.Control as="select" defaultValue="--Pilih Pejabat--">
                        <option>--Pilih Pejabat--</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} mt={4} >
                    <div className="wizard__showButton-buttonBox">
                        <Link href="/layananKP/penetapanSK/step-1">
                            <a className="btn btn-before">Kembali</a>
                        </Link>
                        <Link href="/layananKP/monitoringSK/monitoringSK">
                            <a className="btn btn-after">Kirim</a>
                        </Link>
                    </div>
                </Form.Group>
            </Form.Row>
        </Form>
        </div>

        {/*End Wizard One - Main Component */}

       
      </Layout>
    </>
  );
}
