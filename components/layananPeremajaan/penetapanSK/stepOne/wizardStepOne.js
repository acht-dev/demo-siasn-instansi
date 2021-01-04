import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../components/layananPeremajaan/penetapanSK/Breadcrumb";
import ShowButton from "./ShowButton";
import TableSK from "./TableSK";
import WizardStepsSK from "../wizardStepsSK";

export default function WizardStepOne() {
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
          <h2>Penetapan SK</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardStepsSK wizardClassName="wizard__page-1" />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className="wizard__inputForm monitoringUsulan">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="nip">
                    <Form.Label>NIP</Form.Label>
                    <Form.Control
                          type="text-muted"
                          name="nip"
                          placeholder="Masukkan NIP"
                        />
                </Form.Group>
                <Form.Group as={Col} controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                          type="text-muted"
                          name="nama"
                          placeholder="Masukkan Nama"
                        />
                </Form.Group>
                <Form.Group as={Col} controlId="tanggalPertek">
                    <Form.Label>Tanggal Penetapan Usulan/Pertek</Form.Label>
                    <Form.Control
                          type="date"
                          name="tanggalPertek"
                          placeholder="dd/mm/yyyy"
                        />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} xs={4} controlId="jenisPemberhentian">
                    <Form.Label>Jenis Pemberhentian</Form.Label>
                    <Form.Control as="select" defaultValue="--Pilih Jenis Pemberhentian--">
                        <option>--Pilih Jenis Pemberhentian--</option>
                        <option>...</option>
                        <option>...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} mt={4} >
                    <Button className="wizard__formButtonSubmit" type="submit" className='mr-2'> 
                        CARI USULAN
                    </Button>
                    <Button className="wizard__formButtonReset" type="submit">
                        RESET
                    </Button>
                </Form.Group>
            </Form.Row>
        </Form>
        </div>

        <TableSK/>

        {/*End Wizard One - Main Component */}

        {/* show button */}
        <ShowButton isShowButton={isButtonClick} />
        {/* Endshow button */}
      </Layout>
    </>
  );
}
