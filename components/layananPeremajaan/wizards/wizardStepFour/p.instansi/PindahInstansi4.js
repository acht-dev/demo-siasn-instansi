import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
// icon ceklis verifikasi step4
import { FaCheckCircle } from "react-icons/fa";

export default function PindahInstansi() {
  const selectOptions = {
    jenisPemindahan: ["--- Pilih Jenis Pemindahan ---", "Aaaa", "Bbb", "Ccc"],
    jenisPegawai: ["--- Pilih Jenis Pegawai ---", "Aaaa", "Bbb", "Ccc"],
    jenisJabatanLama: [
      "--- Pilih Jenis Jabatan Lama ---",
      "Aaaa",
      "Bbb",
      "Ccc",
    ],
    jenisJabatanBaru: [
      "--- Pilih Jenis Jabatan Baru ---",
      "Aaaa",
      "Bbb",
      "Ccc",
    ],
  };
  return (
    <>
      <span>Riwayat</span>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type='checkbox' />
            </th>
            <th>Jenis CLTN</th>
            <th>TMT</th>
            <th>Tgl SK</th>
            <th>Insduk Baru</th>
            <th>Insker Baru</th>
            <th>Insduk Lama</th>
            <th>Insker Lama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Container></Container>
      <div className='mb-3'>
        <Row>
          <Col>
            <Tabs defaultActiveKey='editdata' id='uncontrolled-tab-example'>
              <Tab className='mr-2' eventKey='editdata' title='Edit Data 1'>
                <Container className='p-3'>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='JenisPemindahan'>
                        <Form.Label>Jenis Pemindahan</Form.Label>
                        <Form.Control as='select' disabled>
                          {selectOptions.jenisPemindahan.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='JenisPegawai'
                        className='ml-4'>
                        <Form.Label>Jenis Pegawai</Form.Label>
                        <Form.Control as='select' disabled>
                          {selectOptions.jenisPegawai.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='JenisJabatanLama'>
                        <Form.Label>Jenis Jabatan Lama</Form.Label>
                        <Form.Control as='select' disabled>
                          {selectOptions.jenisJabatanLama.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='JenisJabatanBaru'
                        className='ml-4'>
                        <Form.Label>Jenis Jabatan Baru</Form.Label>
                        <Form.Control as='select' disabled>
                          {selectOptions.jenisJabatanBaru.map((data) => {
                            return <option>{data}</option>;
                          })}
                        </Form.Control>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='InstansiKerjaLama'>
                        <Form.Label>Instansi Kerja Lama</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control disabled type='text' className='mr-4' />
                          <InputGroup>
                            <Form.Control
                              placeholder=''
                              aria-label='PNS pusat'
                              aria-describedby='pns-search'
                              disabled
                            />
                            <InputGroup.Append>
                              <Button
                                variant='outline-secondary'
                                style={{
                                  backgroundColor: "#EAEAEA",
                                  height: "40px",
                                }}>
                                <svg
                                  className='mb-2'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='1.2rem'
                                  height='1.2rem'
                                  viewBox='0 0 35.997 36.004'>
                                  <path
                                    id='Icon_awesome-search'
                                    data-name='Icon awesome-search'
                                    d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                    fill='#2d3c6c'
                                  />
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='InstansiKerjaBaru'>
                        <Form.Label>Instansi Kerja Baru</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control type='text' className='mr-4' disabled />
                          <InputGroup>
                            <Form.Control
                              placeholder=''
                              aria-label='PNS pusat'
                              aria-describedby='pns-search'
                              disabled
                            />
                            <InputGroup.Append>
                              <Button
                                variant='outline-secondary'
                                style={{
                                  backgroundColor: "#EAEAEA",
                                  height: "40px",
                                }}>
                                <svg
                                  className='mb-2'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='1.2rem'
                                  height='1.2rem'
                                  viewBox='0 0 35.997 36.004'>
                                  <path
                                    id='Icon_awesome-search'
                                    data-name='Icon awesome-search'
                                    d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                    fill='#2d3c6c'
                                  />
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='SatuanKerjaLama'>
                        <Form.Label>Satuan Kerja Lama</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='SatuanKerjaBaru'>
                        <Form.Label>Satuan Kerja Baru</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='UnorLama'>
                        <Form.Label>Unor Lama</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder=''
                            aria-label=''
                            aria-describedby='pns-search'
                            disabled
                          />
                          <InputGroup.Append>
                            <Button
                              variant='outline-secondary'
                              style={{
                                backgroundColor: "#EAEAEA",
                                height: "40px",
                              }}>
                              <svg
                                className='mb-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.2rem'
                                height='1.2rem'
                                viewBox='0 0 35.997 36.004'>
                                <path
                                  id='Icon_awesome-search'
                                  data-name='Icon awesome-search'
                                  d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                  fill='#2d3c6c'
                                />
                              </svg>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='UnorBaru'
                        className='ml-4'>
                        <Form.Label>Unor Baru</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder=''
                            aria-label=''
                            aria-describedby='pns-search'
                            disabled
                          />
                          <InputGroup.Append>
                            <Button
                              variant='outline-secondary'
                              style={{
                                backgroundColor: "#EAEAEA",
                                height: "40px",
                              }}>
                              <svg
                                className='mb-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.2rem'
                                height='1.2rem'
                                viewBox='0 0 35.997 36.004'>
                                <path
                                  id='Icon_awesome-search'
                                  data-name='Icon awesome-search'
                                  d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                  fill='#2d3c6c'
                                />
                              </svg>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='JabatanFungsionalLama'>
                        <Form.Label>Jab. Fungsional Lama</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='JabatanFungsionalBaru'>
                        <Form.Label>Jab. Fungsional Baru</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='InstansiIndukLama'>
                        <Form.Label>Instansi Induk Lama</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control type='text' className='mr-4' disabled />
                          <InputGroup>
                            <Form.Control
                              placeholder=''
                              aria-label='PNS pusat'
                              aria-describedby='pns-search'
                              disabled
                            />
                            <InputGroup.Append>
                              <Button
                                variant='outline-secondary'
                                style={{
                                  backgroundColor: "#EAEAEA",
                                  height: "40px",
                                }}>
                                <svg
                                  className='mb-2'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='1.2rem'
                                  height='1.2rem'
                                  viewBox='0 0 35.997 36.004'>
                                  <path
                                    id='Icon_awesome-search'
                                    data-name='Icon awesome-search'
                                    d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                    fill='#2d3c6c'
                                  />
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </Form.Group>

                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='InstansiIndukBaru'>
                        <Form.Label>Instansi Induk Baru</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control disabled type='text' className='mr-4' />
                          <InputGroup>
                            <Form.Control
                              placeholder=''
                              aria-label='PNS pusat'
                              aria-describedby='pns-search'
                              disabled
                            />
                            <InputGroup.Append>
                              <Button
                                variant='outline-secondary'
                                style={{
                                  backgroundColor: "#EAEAEA",
                                  height: "40px",
                                }}>
                                <svg
                                  className='mb-2'
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='1.2rem'
                                  height='1.2rem'
                                  viewBox='0 0 35.997 36.004'>
                                  <path
                                    id='Icon_awesome-search'
                                    data-name='Icon awesome-search'
                                    d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                    fill='#2d3c6c'
                                  />
                                </svg>
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </div>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='SatuanKerjaIndukLama'>
                        <Form.Label>Satuan Kerja Induk Lama</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='SatuanKerjaIndukBaru'>
                        <Form.Label>Satuan Kerja Induk Baru</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='LokasiKerjaLama'>
                        <Form.Label>Lokasi Kerja Lama </Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder=''
                            aria-label=''
                            aria-describedby='pns-search'
                            disabled
                          />
                          <InputGroup.Append>
                            <Button
                              variant='outline-secondary'
                              style={{
                                backgroundColor: "#EAEAEA",
                                height: "40px",
                              }}>
                              <svg
                                className='mb-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.2rem'
                                height='1.2rem'
                                viewBox='0 0 35.997 36.004'>
                                <path
                                  id='Icon_awesome-search'
                                  data-name='Icon awesome-search'
                                  d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                  fill='#2d3c6c'
                                />
                              </svg>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='LokasiKerjaBaru'>
                        <Form.Label>Lokasi Kerja Baru</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder=''
                            aria-label=''
                            aria-describedby='pns-search'
                            disabled
                          />
                          <InputGroup.Append>
                            <Button
                              variant='outline-secondary'
                              style={{
                                backgroundColor: "#EAEAEA",
                                height: "40px",
                              }}>
                              <svg
                                className='mb-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.2rem'
                                height='1.2rem'
                                viewBox='0 0 35.997 36.004'>
                                <path
                                  id='Icon_awesome-search'
                                  data-name='Icon awesome-search'
                                  d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                  fill='#2d3c6c'
                                />
                              </svg>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='KPPNBaru'>
                        <Form.Label>KPPN Baru</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder=''
                            aria-label=''
                            aria-describedby='tempat-lahir-search'
                            disabled
                          />
                          <InputGroup.Append>
                            <Button
                              variant='outline-secondary'
                              style={{
                                backgroundColor: "#EAEAEA",
                                height: "40px",
                              }}>
                              <svg
                                className='mb-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1.2rem'
                                height='1.2rem'
                                viewBox='0 0 35.997 36.004'>
                                <path
                                  id='Icon_awesome-search'
                                  data-name='Icon awesome-search'
                                  d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                                  fill='#2d3c6c'
                                />
                              </svg>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        controlId='JabatanFungsionalUmum Baru'
                        md='5'
                        className='ml-4'>
                        <Form.Label>Jab. Fungsional Umum Baru</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='NomorSuratInstansiAsal'>
                        <Form.Label>No. Surat Instansi Asal</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='TanggalSuratIA'>
                        <Form.Label>Tgl. Surat</Form.Label>
                        <Form.Control type='date' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        controlId='NomorSuratInstansiAsalProv'
                        md='5'>
                        <Form.Label>No. Surat Instansi Asal (Prov)</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='TanggalSuratIAP'>
                        <Form.Label>Tgl. Surat</Form.Label>
                        <Form.Control type='date' disabled />
                        <small>
                          *) Opsional ( jika pindah instansi dari kab/kota )
                        </small>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='5'
                        controlId='NomorSuratInstansiTujuan'>
                        <Form.Label>No. Surat Instansi Tujuan</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='TanggalSuratIT'>
                        <Form.Label>Tgl. Surat</Form.Label>
                        <Form.Control type='date' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group
                        as={Col}
                        controlId='NomorSuratInstansiTujuanProv'
                        md='5'>
                        <Form.Label>
                          No. Surat Instansi Tujuan (Prov)
                        </Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='TanggalSuratITP'>
                        <Form.Label>Tgl. Surat</Form.Label>
                        <Form.Control type='date' disabled />
                        <small>
                          *) Opsional ( jika pindah instansi dari kab/kota )
                        </small>
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='NomorSKBKN'>
                        <Form.Label>No. SK BKN</Form.Label>
                        <Form.Control type='text' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />

                      <Form.Group
                        as={Col}
                        md='5'
                        className='ml-4'
                        controlId='TanggalSKBKN'>
                        <Form.Label>Tgl. SK BKN</Form.Label>
                        <Form.Control type='date' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md='5' controlId='TMTPI'>
                        <Form.Label>TMT PI</Form.Label>
                        <Form.Control type='date' disabled />
                      </Form.Group>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                      <Col></Col>
                    </Form.Row>

                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                  </Form>
                </Container>
              </Tab>

              <Tab
                className='mr-2'
                eventKey='dokumenpendukung'
                title='Dokumen Pendukung'>
                <Container className='p-3'>
                  <Form>
                    <div class='form-row mt-0'>
                      <div class='form-group col-md-5'>
                        <label for='berkas'>SK Peremajaan</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Lihat'></Form.File.Label>
                        </Form.File>
                      </div>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                      <div class='form-group col-md-5 ml-4'>
                        <label for='berkas'>Dokumen Pertek</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Lihat'></Form.File.Label>
                        </Form.File>
                      </div>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                      <div class='form-group col-md-5'>
                        <label for='berkas'>Dokumen SK Pindah Instansi*</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Lihat'></Form.File.Label>
                        </Form.File>
                      </div>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                      <div class='form-group col-md-5  ml-4'>
                        <label for='berkas'>
                          Dokumen SPMT Instansi Tujuan*
                        </label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Lihat'></Form.File.Label>
                        </Form.File>
                      </div>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                      <div class='form-group col-md-5'>
                        <label for='berkas'>
                          Dokumen Pertimbangan Teknis PI*
                        </label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input disabled />
                          <Form.File.Label data-browse='Lihat'></Form.File.Label>
                        </Form.File>
                      </div>
                      <FaCheckCircle
                        size='2rem'
                        color='green'
                        as={Col}
                        md='1'
                        style={{ marginTop: "2rem" }}
                      />
                    </div>
                    <div className='wizard__showButton-buttonBox mt-3'>
                      <button className='btn btn-before ml-2 mb-2'>
                        Batal
                      </button>
                      <button className='btn btn-after  mb-2'>Simpan</button>
                    </div>
                  </Form>
                </Container>
              </Tab>

              <Tab className='mr-2' eventKey='status' title='Status Data'>
                <Container className='p-3'>
                  <h4>View Status Validasi</h4>
                  <Table striped bordered hover responsive='sm'>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Kondisi</th>
                        <th>Status</th>
                        <th>Catatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Input Data</td>
                        <td>
                          <Form.Check size='' type='checkbox' checked />
                        </td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Upload Dokumen</td>
                        <td>
                          <Form.Check size='' type='checkbox' checked />
                        </td>
                        <td>OK</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className='wizard__showButton-buttonBox mt-5'>
                    <button className='btn btn-before ml-2 mb-2'>Batal</button>
                    <button className='btn btn-after  mb-2'>Simpan</button>
                  </div>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    </>
  );
}
