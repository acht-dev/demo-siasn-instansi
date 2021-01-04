import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { kp1 } from "../../../../redux/actions/kp1";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import { Layout } from "../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "./../../WizardSteps";
import KenaikanJabatan from "./KenaikanJabatan";
import { useDispatch } from "react-redux";

export default function WizardOne() {
  const router = useRouter();
  const [isButtonClick, setIsButtonClick] = useState(false);
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
  };

  const [multiValue, setMultiValue] = useState({
    selectGolongan: "",
    selectButton: "",
    selectOption: "",
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

  const onSubmit = (e) => {
    e.preventDefault();

    const dataSubmit = {
      Golongan: multiValue.selectGolongan,
      Button: multiValue.selectButton,
      Option: multiValue.selectOption,
    };
    dispatch(kp1(dataSubmit));
    console.log(dataSubmit)
    router.push("/layananKP/berkasUsulan/step-2");
  };

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className="wizard__title">
          <h2>Berkas Usulan</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName="wizard__page-1" />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className="wizard__inputForm monitoringUsulan">
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Periode</Form.Label>
                  <Form.Control type="text" defaultValue="Oktober" disabled />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={12} md={10}>
                <Form.Group>
                  <Form.Label>Golongan</Form.Label>
                  <Row>
                    <Form.Label className="" style={{}}>
                      <Form.Control
                        type="radio"
                        name="selectGolongan"
                        id="1"
                        value="Gol III D ke Bawah"
                        onChange={handleClick}
                      />
                      <span>Gol III D ke Bawah</span>
                    </Form.Label>
                  </Row>
                  <Row>
                    <Form.Label className="" style={{ marginRight: "17%" }}>
                      <Form.Control
                        type="radio"
                        name="selectGolongan"
                        id="2"
                        value="Gol IV B ke Bawah"
                        onChange={handleClick}
                      />
                      <span>Golongan IVB ke Bawah</span>
                    </Form.Label>
                    <Form.Label>
                      <Form.Control
                        type="radio"
                        name="selectGolongan"
                        id="3"
                        value="Kenaikan Jabatan"
                        onChange={handleClick}
                      />
                      <span>Kenaikan Jabatan</span>
                    </Form.Label>
                  </Row>
                  <Row>
                    <Form.Label className="" style={{ marginRight: "2.5%" }}>
                      <Form.Control
                        type="radio"
                        name="selectGolongan"
                        id="4"
                        value="Gol IV C Jenjang Utama"
                        onChange={handleClick}
                      />
                      <span>Golongan IVC ke Atas Jenjang Utama</span>
                    </Form.Label>
                    <Form.Label className="">
                      <Form.Control
                        type="radio"
                        name="selectGolongan"
                        id="5"
                        value="Gol IV C NON Jenjang Utama"
                        onChange={handleClick}
                      />
                      <span>Golongan IVC ke Atas Non Jenjang Utama</span>
                    </Form.Label>
                  </Row>
                </Form.Group>
              </Col>
            </Form.Row>
            {/* List Box Radio BUtton */}
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Pilih Kategori Kenaikan Pangkat</Form.Label>

                  <Form.Control
                    as="select"
                    name="selectButton"
                    onClick={handleClick}
                  >
                    <option selected value="">
                      --- Pilih Kategori ---
                    </option>
                    <option value="KP reguler">Kenaikan Pangkat Reguler</option>
                    <option value="KP Struktural">
                      Kenaikan Pangkat Struktural
                    </option>
                    <option value="Kenaikan Pangkat Jabatan Fungsional Tertentu">
                      Kenaikan Pangkat Jabatan Fungsional Tertentu
                    </option>
                    <option value="Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah">
                      Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah
                    </option>
                    <option value="Kenaikan Pangkat Prestasi Luar Biasa">
                      Kenaikan Pangkat Prestasi Luar Biasa
                    </option>
                    <option value="Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar">
                      Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar
                    </option>
                    <option value="Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar">
                      Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar
                    </option>
                    <option value="Penemuan Baru">Penemuan Baru</option>
                    <option value="Jabatan Hakim / Panitera">
                      Jabatan Hakim / Panitera
                    </option>
                    <option value="Kenaikan dalam Jabatan">
                      Kenaikan dalam Jabatan
                    </option>
                    <option value="Pemberhentian dalam Jabatan">
                      Pemberhentian dalam Jabatan
                    </option>
                    <option value="Pengangkatan kembali dalam Jabatan">
                      Pengangkatan kembali dalam Jabatan
                    </option>
                    <option value="Perpindahan dalam Jabatan">
                      Perpindahan dalam Jabatan
                    </option>
                  </Form.Control>

                  {/*<Form className="ScrollBox" name="kenaikanJabatan">
                    <input type="button" className="btn list-klik" id="1" value="Kenaikan dalam Jabatan" name="selectButton" onClick={handleClick} />
                    <input type="button" className="btn list-klik" id="2" value="Pemberhentian dalam Jabatan" name="selectButton" onClick={handleClick} />
                    <input type="button" className="btn list-klik" id="3" value="Pengangkatan kembali dalam Jabatan" name="selectButton" onClick={handleClick} />
                    <input type="button" className="btn list-klik" id="4" value="Perpindahan dalam Jabatan" name="selectButton" onClick={handleClick} />
                  </Form>*/}
                </Form.Group>
              </Col>
            </Form.Row>
            {/* End List Box Radio Button */}
            <Form.Row>
              <Col xs={12} md={6}>
                <Form.Label>Jenis Jabatan</Form.Label>
                <Form.Control
                  as="select"
                  name="selectOption"
                  onClick={handleClick}
                >
                  <option selected value="">
                    --- Jabatan ---
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <br />
              <input className ="btn-submit___KP" type="submit" />
            {/*<ShowButton >*/}
          </Form>
        </div>

        {/*End Wizard One - Main Component */}
        {/* isShowButton={isButtonClick} onClick={(e)=> {multiValue}}  */}
        {/* show button */}

        {/* Endshow button */}
      </Layout>
    </>
  );
}
