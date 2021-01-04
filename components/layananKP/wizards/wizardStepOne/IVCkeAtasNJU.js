import { Form } from "react-bootstrap";
import React, { useState } from "react";

export default function IVCkeAtasNJU() {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {props.isClick && (
        <Form.Group>
          <Form.Label>Pilih Kategori Kenaikan Pangkat</Form.Label>
          <Form className="ScrollBox" name="golonganivcJU">
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span className="">Kenaikan Pangkat Struktural</span>
              </li>
            </button>
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Kenaikan Pangkat Jabatan Fungsional Tertentu</span>
              </li>
            </button>
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Kenaikan Pangkat Prestasi Luar Biasa</span>
              </li>
            </button>
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Kenaikan Pangkat Sedang Melaksanakan Tugas Belajar</span>
              </li>
            </button>
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Kenaikan Pangkat Selesai Melaksanakan Tugas Belajar</span>
              </li>
            </button>
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Penemuan Baru</span>
              </li>
            </button>
            <br />
            <button className="btn list-klik" onClick={handleButton}>
              <li>
                <span>Jabatan Hakim/Panitera</span>
              </li>
            </button>
          </Form>
        </Form.Group>
      )}
    </>
  );
}
