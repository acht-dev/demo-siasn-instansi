import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import TableMU from "./TableMU";
import PaginationTable from "../../../components/PaginationTable";
import { useDispatch, useSelector } from "react-redux";
import { getUsulanAsn } from "../../../redux/actions/getUsulanAsn";

function WizardFirstMU() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.getUsulanAsn);
  const [isClick, setIsClick] = useState(false);
  const [getUsul, setGetUsul] = useState({
    no_srt_usul: "",
    tgl_usul: "",
    pns_orang_id_pengusul: "",
    jenis_permajaan: "",
    provinsi_id: "",
    nama_pengusul: "",
  });

  useEffect(() => {
    dispatch(getUsulanAsn());
    // if (getUsul.jenis_permajaan === undefined) {
    //   dispatch(getUsulanAsn());
    // }
  }, [getUsul]);

  const _searchDataUsulan = (e) => {
    e.preventDefault();
    const dataSearch = {
      no_srt_usul: getUsul.no_srt_usul,
      tgl_usul: getUsul.tgl_usul,
      pns_orang_id_pengusul: getUsul.pns_orang_id_pengusul,
      jenis_layanan_nama: getUsul.jenis_permajaan,
      provinsi_id: getUsul.provinsi_id,
      nama_pengusul: getUsul.nama_pengusul,
    };
    console.log(JSON.stringify(dataSearch));
    dispatch(
      getUsulanAsn(
        dataSearch.no_srt_usul,
        dataSearch.tgl_usul,
        dataSearch.pns_orang_id_pengusul,
        dataSearch.jenis_layanan_nama,
        dataSearch.provinsi_id,
        dataSearch.nama_pengusul
      )
    );
    if (!isClick) {
      setIsClick(true);
    }
  };

  const selectOptions = {
    jenisPeremajaan: [
      "--- Pilih Jenis Peremajaan ---",
      "Kesehatan",
      "PMK",
      "LHKPN",
      "CLTN",
      "Profesi",
      "Golongan/KP",
    ],
    statusUsulan: [
      "--- Pilih Status Usulan ---",
      "Terkirim",
      "Ditolak",
      "On Progress",
    ],
  };

  return (
    <>
      {/* <Layout> */}
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title mb-3'>
        <h2>Monitoring Usulan</h2>
      </div>

      {/* Component input form */}
      <div className='wizard__inputForm'>
        {/* form Monitoring */}
        <Form onSubmit={(e) => _searchDataUsulan(e)}>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='nip'>
                <Form.Label>Nomor Surat Usulan</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ketik NIP Pengusul...'
                  onChange={(e) =>
                    setGetUsul({ ...getUsul, no_srt_usul: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group className='' controlId='formGridAddress1'>
                <Form.Label>Tanggal Pengusulan </Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of Birth'
                  onChange={(e) =>
                    setGetUsul({ ...getUsul, tgl_usul: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nama'>
                <Form.Label>NIP</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ketik NIP Pengusul...'
                  onChange={(e) =>
                    setGetUsul({
                      ...getUsul,
                      pns_orang_id_pengusul: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={3} className='mr-md-3'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Jenis Peremajaan</Form.Label>
                <Form.Control
                  as='select'
                  size='sm'
                  onChange={(e) =>
                    setGetUsul({ ...getUsul, jenis_permajaan: e.target.value })
                  }>
                  {selectOptions.jenisPeremajaan.map((data) => {
                    return <option value={data}>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='ml-md-5'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                <Form.Label>Status Usulan</Form.Label>
                <Form.Control
                  as='select'
                  size='sm'
                  onChange={(e) =>
                    setGetUsul({ ...getUsul, provinsi_id: e.target.value })
                  }>
                  {selectOptions.statusUsulan.map((data) => {
                    return <option>{data}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className='mr-md-5 ml-md-5'>
              <Form.Group controlId='nama'>
                <Form.Label>Nama Pengusul</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ketik Nama Pengusul...'
                  onChange={(e) =>
                    setGetUsul({ ...getUsul, nama_pengusul: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <div className='wizard__inputForm-buttonBox mt-3'>
            <Button className='mr-4 wizard__formButtonSubmit' type='submit'>
              Cari Usulan
            </Button>

            <Button className='wizard__formButtonReset' type='button'>
              Reset
            </Button>
          </div>
        </Form>
        {/* End Form Monitoring */}
      </div>

      {/* table surat usulan */}
      <div>
        <div className='mb-4'>
          <span>
            <div className='input-group'>
              <span style={{ marginTop: "3px" }}>Tampilkan</span>
              <Dropdown className='ml-2'>
                <Dropdown.Toggle
                  size='sm'
                  variant='btn btn-outline-secondary'
                  id='dropdown-basic'>
                  10
                  <svg
                    className='ml-1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='17'
                    viewBox='0 0 22 17'>
                    <path
                      id='Polygon_3'
                      data-name='Polygon 3'
                      d='M11,0,22,17H0Z'
                      transform='translate(22 17) rotate(-180)'
                      fill='#aaa'
                    />
                  </svg>
                </Dropdown.Toggle>
                <span className='ml-1'>entri</span>
                <Dropdown.Menu>
                  <Dropdown.Item value='5' href='#/action-1'>
                    5
                  </Dropdown.Item>
                  <Dropdown.Item value='10' href='#/action-1'>
                    10
                  </Dropdown.Item>
                  <Dropdown.Item value='20' href='#/action-2'>
                    20
                  </Dropdown.Item>
                  <Dropdown.Item value='30' href='#/action-3'>
                    30
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </span>
        </div>
        {/* table Monitoring Usulan */}
        <TableMU></TableMU>
      </div>
      {/* akhir table surat usulan */}

      <Row className='mb-5'>
        <Col>Menampilkan 1-10 dari 40 entri</Col>
        <Col className='text-right'>
          <PaginationTable />
        </Col>
      </Row>
      <br />
      <br />
    </>
  );
}

export default WizardFirstMU;
