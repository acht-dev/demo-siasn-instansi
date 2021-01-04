import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { kp1 } from "../../../../redux/actions/kp1";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import { Layout } from "../../../Layout";
import Breadcrumb from "../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "../../WizardSteps";
import { useDispatch } from "react-redux";

export default function WizardOne() {
  const router = useRouter();
  const [isButtonClick, setIsButtonClick] = useState(false);
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
  };

  const [multiValue, setMultiValue] = useState({
    selectJenisPengadaan: "",
    selectPegawai: "",
  });

  console.log(multiValue);

  const handleClick = (e) => {
    if (!isButtonClick) {
      setIsButtonClick(true);
    }
    const value = e.target.value;
    const name = e.target.name;
    setMultiValue({
      ...multiValue,
      [name]: value,
    });
    if (
      multiValue.selectGolongan != "" &&
      multiValue.selectButton != "" &&
      multiValue.selectOption != ""
    ) {
      dispatch({
        type: "addValue",
        item: multiValue,
      });
    }
  };

  const selectOptions = {
    JenisPengadaan: [
      "--- Pilih Jenis ---",
      "Penetapan NIP CPNS",
      "Pembatalan NIP PNS",
    ],
    // TahunPengusulan: ["--- Pilih Satu ---", "1", "2", "3"],
    // TahunFormasi: ["--- Pilih Satu ---", "1", "2", "3"],
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const dataSubmit = {
      Golongan: multiValue.selectGolongan,
      Button: multiValue.selectButton,
      Option: multiValue.selectOption,
    };
    dispatch(kp1(dataSubmit));

    router.push("/layananPengadaan/berkasUsulan/step-2");
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Pilih Jenis Prosedur</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-1' />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className='wizard__inputForm monitoringUsulan'>
          <Form onSubmit={(e) => onSubmit(e)}>
            {/* <Form.Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Periode</Form.Label>
                  <Form.Control type="text" defaultValue="Oktober" disabled />
                </Form.Group>
              </Col>
            </Form.Row> */}
            <Form.Row>
              <Col xs={12} md={10}>
                <Form.Group>
                  <Form.Label>Jenis Pegawai</Form.Label>
                  <Row>
                    <Form.Label className='' style={{ marginRight: "3rem" }}>
                      <Form.Control
                        type='radio'
                        name='selectPegawai'
                        id='1'
                        value='CPNS'
                        onChange={handleClick}
                      />
                      <span>CPNS</span>
                    </Form.Label>
                    <Form.Label className='' style={{ marginRight: "3rem" }}>
                      <Form.Control
                        type='radio'
                        name='selectPegawai'
                        id='2'
                        value='PPPK'
                        onChange={handleClick}
                      />
                      <span>PPPK</span>
                    </Form.Label>
                    <Form.Label>
                      <Form.Control
                        type='radio'
                        name='selectPegawai'
                        id='3'
                        value='nonPNS'
                        onChange={handleClick}
                      />
                      <span>NON PNS</span>
                    </Form.Label>
                  </Row>
                </Form.Group>
              </Col>
            </Form.Row>
            {/* List Box Radio BUtton */}
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Jenis Pengadaan</Form.Label>
                  <Form.Control
                    as='select'
                    name='selectJenisPengadaan'
                    onClick={handleClick}>
                    {selectOptions.JenisPengadaan.map((data) => {
                      return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            {/* End List Box Radio Button */}
            {/* Row 3 */}
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Tahun Pengusulan</Form.Label>
                <Form.Control type='text'>
                  {/* <Form.Control as="select" name="selectOption" onClick={handleClick}> */}
                  {/* {selectOptions.TahunPengusulan.map((data)=> {
                            return<option>{data}</option> 
                          })} */}
                </Form.Control>
              </Col>
            </Form.Row>
            <br />
            {/* Row 4 */}
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Tahun Formasi</Form.Label>
                <Form.Control type='text'>
                  {/* <Form.Control as="select" name="selectOption" onClick={handleClick}>
                {selectOptions.TahunFormasi.map((data)=> {
                            return<option>{data}</option> 
                          })} */}
                </Form.Control>
              </Col>
            </Form.Row>
            <br />
            <input className='btn-submit___KP' type='submit' />
            {/*<ShowButton >*/}
          </Form>
        </div>

        {/* End Wizard One - Main Component */}
        {/* isShowButton={isButtonClick} onClick={(e)=> {multiValue}}  */}
        {/* show button */}

        {/* Endshow button */}
      </Layout>
    </>
  );
}
