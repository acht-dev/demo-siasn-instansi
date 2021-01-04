import { Form } from "react-bootstrap";
import React, { useState } from "react";

export default function kenaikanJabatan(props) {
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* ScrollBox pilih jenis prosedur {props.isClick && ( */}
      <Form.Group>
        <Form.Label>Pilih Kategori Pindah Instansi</Form.Label>
        <Form className="ScrollBox" name="kenaikanJabatan">
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span className="">Pindah Instansi dari Instansi Pembina (Kementrian Pendidikan dan Kebudayan) dalam 1 Provinsi
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
          <li>
              <span className="">Pindah Instansi daro Instansi Pembina (Kementrian Pendidikan dan Kebudayan) Beda Provinsi
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pindah Instansi dari Instansi Pusat ke Instansi Pusat</span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pindah Instansi dari Instansi Daerah ke Instansi Daerah dalam 1 Provinsi
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pindah Instansi dari Instansi Daerah ke Instansi Daerah Antar Provinsi
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pindah Instansi dari Instansi Pusat ke Instansi Daerah 
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pindah Instansi dari Instansi Daerah ke Instansi Pusat
              </span>
            </li>
          </button>
          <button className="btn list-klik" onClick={handleButton}>
            <li>
              <span>Pengalihan PNS
              </span>
            </li>
          </button>
        </Form>
      </Form.Group>
      {/* )} */}
    </>
  );
}
