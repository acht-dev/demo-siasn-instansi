import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProsedur from "./ListProsedur";
import DataPribadi from "./../content/DataPribadi/DataPribadi";
import Posisi from "./../content/Posisi-Jabatan/Posisi-Jabatan";
import DataLainnya from "./../content/DataLainnya/DataLainnya";

function DataUtama(props) {
  const prosedurUtama = useSelector(
    (state) => state.viewInstansi.procedureDataUtama
  );
  const [prosedurName, setProsedureName] = useState("");

  const handleClick = (name) => {
    setProsedureName(name);
  };

  return (
    <div>
      {/* wizard component choice */}
      <div className='wizard__choiceComponent'>
        <div className='wizard__choiceRow'>
          {prosedurUtama.map((data) => {
            return (
              <ListProsedur {...data} onClick={() => handleClick(data.name)} />
            );
          })}
        </div>
      </div>

      {(() => {
        switch (prosedurName) {
          case "Data Pribadi":
            return <DataPribadi />;
          case "Posisi & Jabatan":
            return <Posisi />;
          case "Data Lainnya":
            return <DataLainnya />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
export default DataUtama;
