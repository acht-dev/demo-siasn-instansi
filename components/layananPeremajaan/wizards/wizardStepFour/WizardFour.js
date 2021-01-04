import { useSelector } from "react-redux";
import { useState } from "react";
import Golongan from "./golongan/Golongan";
import P_INSTANSI from "./p.instansi/PindahInstansi4";
import Pendidikan from "./pendidikan/Pendidikan";
import Penghargaan from "./penghargaan/Penghargaan";
import Angkakredit from "./angkaKredit/Angkakredit";
import CLTN from "./ctln/CLTN";
import CPNS from "./cpns/CPNS";
import Diklat from "./diklat/Diklat";
import Lhkasn from "./lhkasn/Lhkasn";
// import Hukuman from "./hukuman/Hukuman";
import Jabatan from "./jabatan/Jabatan";
import LHKPN from "./lhkpn/LHKPN";
import Potensi from "./potensi/Potensi";
import Prestasi from "./prestasi/Prestasi";
import PMK from "./pmk/PMK";
import Kesehatan from "./kesehatan/Kesehatan";
import Keluarga from "./keluarga/Keluarga";
import Kepanitiaan from "./kepanitiaan/Kepanitiaan";
import KGB from "./kgb/KGB4";
import DataPribadi from "./dataPribadi/DataPribadi";
import Profesi from "./profesi/Profesi";
import SKP from "./skp/TabSKP";
import Organisasi from "./organisasi/Organisasi";
import { Layout } from "./../../../Layout";
import Breadcrumb from "./../../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "./WizardSteps";
import ListProsedur from "./ListProsedur";
import CardProfile from "./CardProfile";

function WizardFour() {
  const [prosedurs, setProsedurs] = useState("");
  const prosedurOne = useSelector((state) => state.wizards.procedureOne);
  const prosedurTwo = useSelector((state) => state.wizards.procedureTwo);
  const prosedurThree = useSelector((state) => state.wizards.procedureThree);

  // handler click
  const handlerClick = (e) => {
    const dataName = e.target.name;
    switch (dataName) {
      case "Golongan/KP":
        setProsedurs(dataName);
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
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Verifikasi Data</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-4' />

      {/* card profile */}
      <CardProfile />

      {/* wizard component choice */}
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

      {/* conditional untuk 27 prosedur */}
      {(() => {
        switch (prosedurs) {
          case "Golongan/KP":
            return <Golongan />;
          case "Angka Kredit":
            return <Angkakredit />;
          case "Pendidikan":
            return <Pendidikan />;
          case "PMK":
            return <PMK />;
          case "P. Instansi":
            return <P_INSTANSI />;
          case "Kedudukan Hukum":
            return null;
          case "Profesi":
            return <Profesi />;
          case "Data Pribadi":
            return <DataPribadi />;
          case "Jabatan":
            return <Jabatan />;
          case "Diklat":
            return <Diklat />;
          case "Keluarga":
            return <Keluarga />;
          case "Huk. Disiplin":
            return null;
          case "Kesehatan":
            return <Kesehatan />;
          case "CTLN":
            return <CLTN />;
          case "CPNS/PNS":
            return <CPNS />;
          case "SKP":
            return <SKP />;
          case "Penghargaan":
            return <Penghargaan />;
          case "LHKPN":
            return <LHKPN />;
          case "LHKASN":
            return <Lhkasn />;
          case "Organisasi":
            return <Organisasi />;
          case "Kepanitian/Tim":
            return <Kepanitiaan />;
          case "KGB":
            return <KGB />;
          case "Prestasi":
            return <Prestasi />;
          case "Potensi":
            return <Potensi />;
          case "Tunjangan Kinerja":
            return null;
          case "Tunjangan Kemahalan":
            return null;
          case "Kontrak PPPK & Non-ASN":
            return null;
          default:
            return null;
        }
      })()}

      {/* show button */}
      <ShowButton />
    </Layout>
  );
}

export default WizardFour;
