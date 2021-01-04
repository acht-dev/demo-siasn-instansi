import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { kp1 } from "../../../../redux/actions/kp1";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import {Layout} from "../../../Layout";
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
    if (multiValue.selectGolongan != "" && multiValue.selectButton != "" && multiValue.selectOption != "") {
      dispatch({
        type: "addValue",
        item: multiValue,
      });
    }
  };

  const selectOptions = {
   InstansiPK: ["--- Pilih Jenis ---", " 1", "2", "3"],
   MetodePenilaian: ["--- Pilih---", "1", "2", "3"],
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const dataSubmit = {
      Golongan : multiValue.selectGolongan,
      Button : multiValue.selectButton,
      Option : multiValue.selectOption,
    }
    dispatch(kp1(dataSubmit))

    router.push("/layananPengadaan/berkasUsulan/step-2")

  }

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* End breadcrumb */}

        {/* title */}
        <div className="wizard__title">
          <h2>Input Kegiatan</h2>
        </div>
        {/* End title */}

        {/* wizard step section */}
        <WizardSteps wizardClassName="wizard__page-1" />
        {/* End wizard step section */}

        {/* Wizard One - Main Component */}
        <div className="wizard__inputForm monitoringUsulan">
          <Form>
        {/* UBAH DI SINI */}
        {/* End Wizard One - Main Component */}
                   <Form.Row>
                      <Form.Group as={Col} md='5' controlId='pendidikan'>
                        <Form.Label>Nama Kegiatan</Form.Label>
                        <Form.Control 
                          type='text'
                          placeholder='Kegiatan A'
                        />
                      </Form.Group>
                      <Form.Group as={Col} md='5' controlId="instansi" className='ml-4'>
                      <Form.Label>Instansi Penilai Kompetensi</Form.Label>
                      <Form.Control as="select">
                        {selectOptions.InstansiPK.map((data) => {
                          return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                      <Form.Group as={Col} md='5' controlId='pendidikan'>
                        <Form.Label>Tahun</Form.Label>
                        <Form.Control 
                          type='text'
                          placeholder='2020'
                        />
                      </Form.Group>
                      <Form.Group as={Col} md='5' controlId="metode" className='ml-4'>
                      <Form.Label>Metode Penilaian</Form.Label>
                      <Form.Control as="select">
                        {selectOptions.MetodePenilaian.map((data) => {
                          return <option>{data}</option>;
                    })}
                  </Form.Control>
                </Form.Group>
                </Form.Row>
                 
                <Form.Row>
                <Form.Group as={Col} md='5' controlId="TanggalMulai">
                  <Form.Label>Tanggal Mulai</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md='5' controlId="TanggalSelesai">
                  <Form.Label>Tanggal Selesai</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                </Form.Row>
                <div className="wizard__showButton-buttonBox mt-3">
                  <button className="btn btn-before ml-2 mb-2">Batal</button>
                  <button className="btn btn-after  mb-2">Simpan</button>
                </div>
                </Form>
                </div>
        {/* show button */}
        <ShowButton />
        {/* Endshow button */}
      </Layout>
    </>
  );
}
