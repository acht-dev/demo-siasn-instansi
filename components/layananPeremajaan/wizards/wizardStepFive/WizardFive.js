import { Layout } from "./../../../Layout";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import CardProfile from "./CardProfile";
import Breadcrumb from "./../../../Breadcrumb";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProsedur from "./ListProsedur";
import ParafSpeciment from "./ParafSpeciment";

function WizardFive() {
  const [prosedurs, setProsedurs] = useState("");
  const [isParaf, setIsParaf] = useState(false);
  const prosedurOne = useSelector((state) => state.wizards.procedureOne);
  const prosedurTwo = useSelector((state) => state.wizards.procedureTwo);
  const prosedurThree = useSelector((state) => state.wizards.procedureThree);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => setShow(e.target.value);

  const [isClick, setIsClick] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === true) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };

  const handlerClick = (e) => {
    const dataName = e.target.name;
    switch (dataName) {
      case "Golongan/KP":
        setProsedurs(dataName);
        setIsParaf(true);
        break;
      case "Pendidikan":
        setProsedurs(dataName);
        break;
      case "Angka Kredit":
        setProsedurs(dataName);
        break;
      case "PMK":
        setProsedurs(dataName);
        break;
      case "P. Instansi":
        setProsedurs(dataName);
        break;
      case "Kedudukan Hukum":
        setProsedurs(dataName);
        break;
      case "Profesi":
        setProsedurs(dataName);
        break;
      case "Data Pribadi":
        setProsedurs(dataName);
        break;
      case "Jabatan":
        setProsedurs(dataName);
        break;
      case "Diklat":
        setProsedurs(dataName);
        break;
      case "Keluarga":
        setProsedurs(dataName);
        break;
      case "Huk. Disiplin":
        setProsedurs(dataName);
        break;
      case "Kesehatan":
        setProsedurs(dataName);
        break;
      case "CTLN":
        setProsedurs(dataName);
        break;
      case "CPNS/PNS":
        setProsedurs(dataName);
        break;
      case "SKP":
        setProsedurs(dataName);
        break;
      case "Penghargaan":
        setProsedurs(dataName);
        break;
      case "LHKPN":
        setProsedurs(dataName);
        break;
      case "LHKASN":
        setProsedurs(dataName);
        break;
      case "Organisasi":
        setProsedurs(dataName);
        break;
      case "Kepanitian/Tim":
        setProsedurs(dataName);
        break;
      case "KGB":
        setProsedurs(dataName);
        break;
      case "Prestasi":
        setProsedurs(dataName);
        break;
      case "Potensi":
        setProsedurs(dataName);
        break;
      case "Tunjangan Kinerja":
        setProsedurs(dataName);
        break;
      case "Tunjangan Kemahalan":
        setProsedurs(dataName);
        break;
      case "Kontrak PPPK & Non-ASN":
        setProsedurs(dataName);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />
        {/* title */}
        <div className='wizard__title'>
          <h2>Simpan Berkas</h2>
        </div>
        {/* wizard step section */}
        <div className='wizard__page-5'>
          <div className='wizard__container'>
            <div className='wizard__row'>
              <div className='wizard__step-1 disabled'>
                <h5>Langkah 1</h5>
                <p>Cari NIP</p>
              </div>
              <div className='wizard__step-2 disabled'>
                <h5>Langkah 2</h5>
                <p>Pilih Prosedur</p>
              </div>
              <div className='wizard__step-3 disabled'>
                <h5>Langkah 3</h5>
                <p>Input Detail</p>
              </div>
              <div className='wizard__step-4 disabled'>
                <h5>Langkah 4</h5>
                <p>Verifikasi Data</p>
              </div>
              <div className='wizard__step-5 active'>
                <h5>Langkah 5</h5>
                <p>Simpan Berkas</p>
              </div>
            </div>
          </div>
        </div>
        {/* show card profile */}
        <CardProfile />
        {/* 27 prosedur */}
        <div className='wizard__choiceComponentStep-4'>
          <div className='wizard__choiceRow'>
            <ul>
              {prosedurOne.map((data, index) => {
                return (
                  <ListProsedur
                    {...data}
                    idKey={index}
                    clickHandler={handlerClick}
                  />
                );
              })}
            </ul>
          </div>
          <div className='wizard__choiceRow'>
            <ul>
              {prosedurTwo.map((data, index) => {
                return (
                  <ListProsedur
                    {...data}
                    idKey={index}
                    clickHandler={handlerClick}
                  />
                );
              })}
            </ul>
          </div>
          <div className='wizard__choiceRow'>
            <ul>
              {prosedurThree.map((data, index) => {
                return (
                  <ListProsedur
                    {...data}
                    idKey={index}
                    clickHandler={handlerClick}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        {/* show modal dialog */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='MarginRight'>Simpan Berkas</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda yakin ingin menyimpan berkas ini?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Kembali
            </Button>
            <Link href='/'>
              <Button variant='primary' onClick={handleClose}>
                Simpan
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        {(() => {
          if (prosedurs === "Golongan/KP") {
            return (
              <ParafSpeciment
                paraf={isParaf}
                handleShow={handleShow}
                handleReset={handleReset}
                handleSubmit={handleSubmit}
              />
            );
          } else {
            return (
              <ParafSpeciment
                paraf={false}
                handleShow={handleShow}
                handleReset={handleReset}
                handleSubmit={handleSubmit}
              />
            );
          }
        })()}
      </Layout>
    </>
  );
}

export default WizardFive;
