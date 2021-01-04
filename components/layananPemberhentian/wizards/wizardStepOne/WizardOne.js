import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pemberhentian } from "../../../../redux/actions/pemberhentian";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
//import Form from 'react-bootstrap/Form';
import { Layout } from "./../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "../wizardStepOne/WizardSteps";
import { useDispatch } from "react-redux";

export default function WizardOne() {
  const router = useRouter();
  const [isButtonClick, setIsButtonClick] = useState(false);
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
  };

  {
    /* selectOption untuk radio button jabatan, selectButton untuk dropdown jenis pemberhentian  */
  }
  const [multiValue, setMultiValue] = useState({
    selectGolongan: "",
    selectOption: "",
    selectButton: "",
  });

  console.log(multiValue);

  {
    /* selectOption untuk radio button jabatan, selectButton untuk dropdown jenis pemberhentian  */
  }
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
      multiValue.selectOption != "" &&
      multiValue.selectButton != ""
    ) {
      dispatch({
        type: "addValue",
        item: multiValue,
      });
    }
  };

  {
    /* Option untuk radio button jabatan, Button untuk dropdown jenis pemberhentian  */
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const dataSubmit = {
      Golongan: multiValue.selectGolongan,
      Option: multiValue.selectOption,
      Button: multiValue.selectButton,
    };
    dispatch(pemberhentian(dataSubmit));

    router.push("/layananPemberhentian/berkasUsulan/step-2");
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className='wizard__title'>
          <h2>Berkas Usulan</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-1' />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className='wizard__inputForm monitoringUsulan'>
          <Form onSubmit={(e) => onSubmit(e)}>
            {/* Radio BUtton Golongan */}
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Group>
                  <Form.Label>Golongan</Form.Label>
                  <Row>
                    <Form.Label className='' style={{}}>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='1'
                        value='Pemberhentian Instansi Pusat IV/b ke Bawah'
                        onChange={handleClick}
                      />
                      <span>Pemberhentian Instansi Pusat IV/b ke Bawah</span>
                    </Form.Label>
                  </Row>
                  <Row>
                    <Form.Label className='' style={{}}>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='2'
                        value='Pemberhentian Instansi Pusat IV/c ke Atas'
                        onChange={handleClick}
                      />
                      <span>Pemberhentian Instansi Pusat IV/c ke Atas</span>
                    </Form.Label>
                    <Form.Label>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='3'
                        value='Pemberhentian Instansi Daerah IV/b ke Bawah'
                        onChange={handleClick}
                      />
                      <span>Pemberhentian Instansi Daerah IV/b ke Bawah</span>
                    </Form.Label>
                  </Row>
                  <Row>
                    <Form.Label className='' style={{ marginRight: "2.5%" }}>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='4'
                        value='Pemberhentian Instansi Daerah IV/c ke Atas'
                        onChange={handleClick}
                      />
                      <span>Pemberhentian Instansi Daerah IV/c ke Atas</span>
                    </Form.Label>
                    <Form.Label className=''>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='5'
                        value='Pemberhentian Tanpa Hak Pensiun'
                        onChange={handleClick}
                      />
                      <span>Pemberhentian Tanpa Hak Pensiun</span>
                    </Form.Label>
                    <Form.Label className=''>
                      <Form.Control
                        type='radio'
                        name='selectGolongan'
                        id='6'
                        value='Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)'
                        onChange={handleClick}
                      />
                      <span>
                        Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja
                        (PPPK)
                      </span>
                    </Form.Label>
                  </Row>
                </Form.Group>
              </Col>
            </Form.Row>

            {/* Radio BUtton Jenis Jabatan */}
            <Form.Row>
              <Col xs={12} md={11}>
                <Form.Group>
                  <Form.Label>Jenis Jabatan</Form.Label>
                  <Row>
                    <Form.Label className='' style={{ marginRight: "10%" }}>
                      <Form.Control
                        type='radio'
                        name='selectOption'
                        id='7'
                        value='JPTM'
                        onChange={handleClick}
                      />
                      <span>JPT Madya</span>
                    </Form.Label>
                    <Col>
                      <Form.Label>
                        <Form.Control
                          type='radio'
                          name='selectOption'
                          id='8'
                          value='JPTU'
                          onChange={handleClick}
                        />
                        <span>JPT Utama</span>
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label>
                        <Form.Control
                          type='radio'
                          name='selectOption'
                          id='9'
                          value='JFTU'
                          onChange={handleClick}
                        />
                        <span>JFT Utama</span>
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label>
                        <Form.Control
                          type='radio'
                          name='selectOption'
                          id='10'
                          value='JKFU'
                          onChange={handleClick}
                        />
                        <span>JKF Utama</span>
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label>
                        <Form.Control
                          type='radio'
                          name='selectOption'
                          id='11'
                          value='JPTP'
                          onChange={handleClick}
                        />
                        <span>JPTP</span>
                      </Form.Label>
                    </Col>
                  </Row>
                  {/* Radio Button Memilih Jabatan */}
                  <Row>
                    <Form.Label className='' style={{ marginRight: "18%" }}>
                      <Form.Control
                        type='radio'
                        name='selectOption'
                        id='12'
                        value='JA'
                        onChange={handleClick}
                      />
                      <span>JA</span>
                    </Form.Label>
                    <Col>
                      <Form.Label>
                        <Form.Control
                          type='radio'
                          name='selectOption'
                          id='13'
                          value='JF'
                          onChange={handleClick}
                        />
                        <span>JF</span>
                      </Form.Label>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Form.Label>
                      <Form.Control type="radio" name="selectOption" id="9" value="JFTU" onChange={handleClick} />
                      <span>JFT Utama</span>
                    </Form.Label>
                    
                    <Form.Label className="">
                      <Form.Control type="radio" name="selectGolongan" id="10" value="JKFU" onChange={handleClick} />
                      <span>JKFU</span>
                    </Form.Label>
                    <Form.Label className="">
                      <Form.Control type="radio" name="selectGolongan" id="6" value="JPTP" onChange={handleClick} />
                      <span>JPTP</span>
                    </Form.Label> 
                    
                  </Row>*/}
                </Form.Group>
              </Col>
            </Form.Row>

            {/* List Box Radio BUtton */}
            <Form.Row>
              <Col xs={12} md={7}>
                <Form.Group>
                  <Form.Label>Pilih Jenis Pemberhentian</Form.Label>
                  <Form.Control
                    as='select'
                    name='selectButton'
                    onClick={handleClick}>
                    <option selected value=''>
                      --- Pilih Jenis Pemberhentian ---
                    </option>
                    <option value='Pemberhentian Atas Permintaan Sendiri (APS)'>
                      Pemberhentian Atas Permintaan Sendiri (APS)
                    </option>
                    <option value='Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON KPP'>
                      Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) NON
                      KPP
                    </option>
                    <option value='Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP'>
                      Pemberhentian Karena Mencapai Batas Usia Pensiun (BUP) KPP
                    </option>
                    <option value='Pemberhentian Karena Perampingan Organisasi atau Kebijakan Pemerintah'>
                      Pemberhentian Karena Perampingan Organisasi atau Kebijakan
                      Pemerintah
                    </option>
                    <option value='Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani'>
                      Pemberhentian Karena Tidak Cakap Jasmani dan/atau Rohani
                    </option>
                    <option value='Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP'>
                      Pemberhentian Karena Meninggal Dunia (Janda/Duda) NON KPP
                    </option>
                    <option value='Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP'>
                      Pemberhentian Karena Meninggal Dunia (Janda/Duda) KPP
                    </option>
                    <option value='Pemberhentian Karena Tewas'>
                      Pemberhentian Karena Tewas
                    </option>
                    <option value='Pemberhentian Karena Hilang'>
                      Pemberhentian Karena Hilang
                    </option>
                    <option value='Pemberhentian Dengan Hormat dengan Hak Pensiun'>
                      Pemberhentian Dengan Hormat dengan Hak Pensiun
                    </option>
                    <option value='Pemberhentian Tanpa Hak Pensiun'>
                      Pemberhentian Tanpa Hak Pensiun
                    </option>
                    <option value='Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja (PPPK)'>
                      Pemberhentian Pegawai Pemerintah dengan Perjanjian Kerja
                      (PPPK)
                    </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              {/* <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                    </Form.Group> */}
            </Form.Row>
            {/* End List Box Radio Button */}

            {/* button submit */}
            <br />
            <input className='btn-submit___KP' type='submit' />
          </Form>
        </div>

        {/*End Wizard One - Main Component */}
      </Layout>
    </>
  );
}
