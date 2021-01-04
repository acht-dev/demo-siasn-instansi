import React, { useState } from "react";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";

export default function IIIDKeBawah() {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* {props.isClick && ( */}
      <Form.Group>
        <Form className="ScrollBox" name="ivbBawah">
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span className="">Kenaikan Pangkat Reguler</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Kenaikan Pangkat Struktural</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Kenaikan Pangkat Jabatan Fungsional Tertentu</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Kenaikan Pangkat Memperoleh Ijazah/Penyesuaian Ijazah</span>
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
              <span>Jabatan Hakim / Panitera</span>
            </li>
          </button>
        </Form>
      </Form.Group>
      {/* )} */}
    </>
  );
}
