import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProsedur from "./ListProsedur";
import Golongan from "./../content/golongan/Golongan";
import Pendidikan from "./../content/Pendidikan/Pendidikan";
import Organisasi from "./../content/organisasi/Organisasi";
import PMK from "./../content/PMK/PMK";
import PindahInstansi from "./../content/PindahInstansi/PindahInstansi";
import Profesi from "./../content/Profesi/Profesi";
import KedudukanHukum from "./../content/KedudukanHukum/KedudukanHukum";
import Jabatan from "./../content/Jabatan/Jabatan";
import Diklat from "./../content/Diklat/Diklat";
import DataPribadi from "./../content/DataPribadiRiwayat/DataPribadiRiwayat";
import Keluarga from "./../content/Keluarga/Keluarga";
import AngkaKredit from "./../content/AngkaKredit/AngkaKredit";
import HukDisiplin from "./../content/HukDisiplin/HukDisiplin";
import Kesehatan from "./../content/Kesehatan/Kesehatan";
import CTLN from "../content/CTLN/CTLN";
import CPNSPNS from "../content/CPNS-PNS/CPNS-PNS";
import SKP from "../content/SKP/SKP";
import Penghargaan from "../content/Penghargaan/Penghargaan";
import LHKPN from "../content/LHKPN/LHKPN";
import LHKASN from "../content/LHKASN/LHKASN";
import KepanitiaanTim from "../content/KepanitiaanTim/KepanitiaanTim";
import KGB from "../content/KGB/KGB";
import Prestasi from "../content/Prestasi/Prestasi";
import Potensi from "../content/Potensi/Potensi";
import TunjanganKinerja from "../content/TunjanganKinerja/TunjanganKinerja";
import TunjanganKemahalan from "../content/TunjanganKemahalan/TunjanganKemahalan";
import KontrakPPPKNONASN from "../content/Kontrak-PPPK-NON-ASN/Kontrak-PPPK-NON-ASN";

function DataRiwayat(props) {
  const prosedurOne = useSelector((state) => state.viewInstansi.procedureOne);
  const prosedurTwo = useSelector((state) => state.viewInstansi.procedureTwo);
  const prosedurThree = useSelector(
    (state) => state.viewInstansi.procedureThree
  );
  const [prosedurName, setProsedureName] = useState("");
  const dispatch = useDispatch();

  const handleClick = (name) => {
    setProsedureName(name);
  };

  return (
    <div className="mb-3">
      {/* wizard component choice */}
      <div className="wizard__choiceComponent">
        <div className="wizard__choiceRow">
          {prosedurOne.map((data) => {
            return (
              <ListProsedur {...data} onClick={() => handleClick(data.name)} />
            );
          })}
        </div>
        <div className="wizard__choiceRow">
          {prosedurTwo.map((data) => {
            return (
              <ListProsedur {...data} onClick={() => handleClick(data.name)} />
            );
          })}
        </div>
        <div className="wizard__choiceRow">
          {prosedurThree.map((data) => {
            return (
              <ListProsedur {...data} onClick={() => handleClick(data.name)} />
            );
          })}
        </div>
      </div>

      {/* logic 27 prosedur (Input component dari wizard 3 nanti yg single componentnnya ya misal Golongan untuk single component golongan, begitupun yang lain, jgn yg wizGolongan.
        Terima kasih)*/}
      <div>
        {(() => {
          switch (prosedurName) {
            case "Golongan/KP":
              return <Golongan />;
            case "Pendidikan":
              return <Pendidikan />;
            case "PMK":
              return <PMK />;
            case "P. Instansi":
              return <PindahInstansi />;
            case "Profesi":
              return <Profesi />;
            case "Kedudukan Hukum":
              return <KedudukanHukum />;
            case "Data Pribadi":
              return <DataPribadi />;
            case "Jabatan":
              return <Jabatan />;
            case "Diklat":
              return <Diklat />;
            case "Keluarga":
              return <Keluarga />;
            case "Angka Kredit":
              return <AngkaKredit />;
            case "Huk. Disiplin":
              return <HukDisiplin />;
            case "Kesehatan":
              return <Kesehatan />;
            case "CTLN":
              return <CTLN />;
            case "CPNS/PNS":
              return <CPNSPNS />;
            case "SKP":
              return <SKP />;
            case "Penghargaan":
              return <Penghargaan />;
            case "LHKPN":
              return <LHKPN />;
            case "LHKASN":
              return <LHKASN />;
            case "Organisasi":
              return <Organisasi />;
            case "Kepanitian/Tim":
              return <KepanitiaanTim />;
            case "KGB":
              return <KGB />;
            case "Prestasi":
              return <Prestasi />;
            case "Potensi":
              return <Potensi />;
            case "Tunjangan Kinerja":
              return <TunjanganKinerja />;
            case "Tunjangan Kemahalan":
              return <TunjanganKemahalan />;
            case "Kontrak PPPK & Non-ASN":
              return <KontrakPPPKNONASN />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}
export default DataRiwayat;
