import { Form } from "react-bootstrap";
import React, { useState } from "react";

export default function kenaikanJabatan(props) {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* {props.isClick && ( */}
      <Form.Group>
        <Form.Label>Pilih Kategori Kenaikan Pangkat</Form.Label>
        <Form className="ScrollBox" name="kenaikanJabatan">
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span className="" id="1">Kenaikan dalam Jabatan</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span id="2">Pemberhentian dalam Jabatan</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span id="3">Pengangkatan kembali dalam Jabatan</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span id="4">Perpindahan dalam Jabatan</span>
            </li>
          </button>
        </Form>
      </Form.Group>
      {/* )} */}
    </>
  );
}
