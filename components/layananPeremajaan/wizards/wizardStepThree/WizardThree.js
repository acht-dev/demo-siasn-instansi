import { useSelector } from "react-redux";
import { useState } from "react";
import Golongan from "./golongan/Golongan";
import P_INSTANSI from "./p.instansi/PindahInstansi";
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
import KGB from "./kgb/KGB";
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

function WizardThree() {
  const [prosedurs, setProsedurs] = useState("");
  const [title, setTitle] = useState("Pilih Prosedur");
  const prosedurOne = useSelector((state) => state.wizards.procedureOne);
  const prosedurTwo = useSelector((state) => state.wizards.procedureTwo);
  const prosedurThree = useSelector((state) => state.wizards.procedureThree);

  // handler click
  const handlerClick = (e) => {
    const dataName = e.target.name;
    setTitle(`Input Detail ${dataName}`);
    setProsedurs(dataName);
  };

  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>{title}</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-3' />

      {/* card profile */}
      <CardProfile />

      {/* wizard component choice */}
      <div className='wizard__choiceComponentStep-3'>
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

export default WizardThree;
