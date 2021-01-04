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
import Image from "next/image";

export default function DataPribadi() {
  return (
    <>
    <span>Riwayat</span>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check type='checkbox' />
            </th>
            <th>Nomor SK</th>
            <th>Tanggal SK</th>
            <th>Kredit Utama</th>
            <th>Kredit Penunjang</th>
            <th>Total Kredit</th>
            <th>Jabatan</th>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
          </tr>
          <tr>
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
                      <Form.Group as={Col} controlId='NIPBaru'>
                        <Form.Label>NIP Baru</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='1391889898378989'
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NumberHandphone'>
                        <Form.Label>Nomor HP</Form.Label>
                        <Form.Control type='text' placeholder='0812988878748' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NIPLama'>
                        <Form.Label>NIP Lama</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='1391889898378989'
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NumberTelephone'>
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control type='text' placeholder='0812988878748' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Nama'>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type='text' placeholder='Setyo Dwi' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='JenisPegawai'>
                        <Form.Label>Jenis Pegawai</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='PNS Pusat'
                            aria-label='PNS pusat'
                            aria-describedby='pns-search'
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
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='GelarDepan'>
                        <Form.Label>Gelar Depan</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='KedudukanPNS'>
                        <Form.Label>Kedudukan PNS</Form.Label>
                        <Form.Control as='select'>
                          <option>Aktif</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='GelarBelakang'>
                        <Form.Label>Gelar Belakang</Form.Label>
                        <Form.Control type='text' placeholder='S.Kom, MMSi,' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='StatusPNS'>
                        <Form.Label>Status PNS</Form.Label>
                        <Form.Control as='select'>
                          <option>PNS</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='TempatLahir'>
                        <Form.Label>Tempat Lahir</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Tangerang'
                            aria-label='Tangerang'
                            aria-describedby='tempat-lahir-search'
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

                      <Form.Group as={Col} controlId='TMTPNS'>
                        <Form.Label>TMT PNS</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='TanggalLahir'>
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NomorKampeg'>
                        <Form.Label>Nomor Seri Kampeg</Form.Label>
                        <Form.Control type='text' placeholder='#123456' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Agama'>
                        <Form.Label>Agama</Form.Label>
                        <Form.Control as='select'>
                          <option>--Pilih Agama--</option>
                          <option>Islam</option>
                          <option>Kristen</option>
                          <option>Budha</option>
                          <option>Hindu</option>
                          <option>Kongucu</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId='TMTCPNS'>
                        <Form.Label>TMT CPNS</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='budy@gmail.com'
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TingkatPendidikan'>
                        <Form.Label>Tingkat Pendidikan</Form.Label>
                        <Form.Control type='text' placeholder='SLTA' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='JenisKelamin'>
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Control as='select'>
                          <option>Pria</option>
                          <option>Perempuan</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId='KodePendidikan'>
                        <Form.Label>Kode Pendidikan Terakhir</Form.Label>
                        <Form.Control type='text' placeholder='3004300982' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='JenisDokumen'>
                        <Form.Label>Jenis Dokumen</Form.Label>
                        <Form.Control as='select'>
                          <option>Kartu Tanda Penduduk</option>
                          <option>-</option>
                          <option>-</option>
                          <option>-</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId='PendidikanTerakhir'>
                        <Form.Label>Pendidikan Terakhir</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='SMA/ILMU SOSIAL'
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NomorDokumen'>
                        <Form.Label>Nomor Dokumen</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='1391889898378989'
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TahunLulus'>
                        <Form.Label>Tahun Lulus</Form.Label>
                        <Form.Control type='text' placeholder='2011' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='Alamat'>
                          <Form.Label>Alamat</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Kab. Tangerang. Banten'
                          />
                        </Form.Group>
                      </Col>
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

              <Tab className='mr-2' eventKey='editdata2' title='Edit Data 2'>
                <Container className='p-3'>
                  <Form>
                    <Form.Row>
                      <Form.Group as={Col} controlId='InstansiInduk'>
                        <Form.Label>Instansi Induk</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Badan Pengkajian dan Penerapan Teknologi'
                            aria-label='Badan Pengkajian dan Penerapan Teknologi'
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

                      <Form.Group as={Col} controlId='JabatanFungsionalUmum'>
                        <Form.Label>Jabatan Fungsional Umum</Form.Label>
                        <Form.Control type='text' placeholder='' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='SatuanKerjaInduk'>
                        <Form.Label>Satuan Kerja Induk</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Badan Pengkajian dan Penerapan Teknologi'
                            aria-label='Badan Pengkajian dan Penerapan Teknologi'
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

                      <Form.Group as={Col} controlId='TMTJabatanFungsionalUmum'>
                        <Form.Label>TMT Jabatan Fungsional Umum</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='InstansiKerja'>
                        <Form.Label>Instansi Kerja</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Badan Pengkajian dan Penerapan Teknologi'
                            aria-label='Badan Pengkajian dan Penerapan Teknologi'
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

                      <Form.Group as={Col} controlId='GolonganRuangAwal'>
                        <Form.Label>Golongan Ruang Awal</Form.Label>
                        <Form.Control type='text' placeholder='II / A' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='SatuanKerja'>
                        <Form.Label>Satuan Kerja</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Badan Pengkajian dan Penerapan Teknologi'
                            aria-label='Badan Pengkajian dan Penerapan Teknologi'
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

                      <Form.Group as={Col} controlId='GolonganRuangTerakhir'>
                        <Form.Label>Golongan Ruang Terakhir</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='II / C'></Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Kanreg'>
                        <Form.Label>Kanreg</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Badan Kepegawaian Negara'
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TMTGolongan'>
                        <Form.Label>TMT Golongan</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='UnitOrganisasi'>
                        <Form.Label>Unit Organisasi</Form.Label>
                        <InputGroup>
                          <Form.Control
                            placeholder='Badan Pengkajian dan Penerapan Teknologi'
                            aria-label='Badan Pengkajian dan Penerapan Teknologi'
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

                      <Form.Group as={Col} controlId='GajiPokok'>
                        <Form.Label>Gaji Pokok</Form.Label>
                        <Form.Control type='text' placeholder='II / C' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Eselon'>
                        <Form.Label>Eselon</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='Masa Kerja'>
                        <Form.Label>Masa Kerja (Tahun / Bulan)</Form.Label>
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <Form.Control
                            type='text'
                            placeholder='22'
                            className='mr-4'
                          />
                          <Form.Control type='text' placeholder='0' />
                        </div>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='UnitOrganisasiInduk'>
                        <Form.Label>Unit Organisasi Induk</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NomorSPMT'>
                        <Form.Label>Nomor SPMT</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Jenis Jabatan'>
                        <Form.Label>Jenis Jabatan</Form.Label>
                        <Form.Control as='select'>
                          <option value='FungsionalUmum'>
                            Fungsional Umum
                          </option>
                          <option>-</option>
                          <option>-</option>
                          <option>-</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId='TanggalSPMT'>
                        <Form.Label>Tanggal SPMT</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='JabatanStruktural'>
                        <Form.Label>Jabatan Struktural</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='KPPN'>
                        <Form.Label>KPPN</Form.Label>
                        <InputGroup>
                          <Form.Control />
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
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='TMTJabatanStruktural'>
                        <Form.Label>TMT Jabatan Struktural</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='KTUA'>
                        <Form.Label>KTUA</Form.Label>
                        <InputGroup>
                          <Form.Control />
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
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='JabatanFungsional'>
                        <Form.Label>Jabatan Fungsional</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TASPEN'>
                        <Form.Label>TASPEN</Form.Label>
                        <InputGroup>
                          <Form.Control />
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
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='TMTJabatanFungsional'>
                          <Form.Label>TMT Jabatan Fungsional</Form.Label>
                          <Form.Control type='date' />
                        </Form.Group>
                      </Col>
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

              <Tab className='mr-2' eventKey='editdata3' title='Edit Data 3'>
                <Container className='p-3'>
                  <Form>
                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='InstansiInduk'>
                          <Form.Label>Status Perkawinan</Form.Label>
                          <Form.Control as='select'>
                            <option>Menikah</option>
                            <option>Lajang</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col md={3}>
                        <Form.Group controlId='JumlahIstriSuami'>
                          <Form.Label>Jumlah Istri/Suami</Form.Label>
                          <Form.Control type='number' min='0' />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group controlId='JumlahAnak'>
                          <Form.Label>Jumlah Anak</Form.Label>
                          <Form.Control type='number' min='0' />
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NoSuratKeteranganDokter'>
                        <Form.Label>No. Surat Keterangan Dokter</Form.Label>
                        <Form.Control type='text' placeholder='1878887487888' />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        controlId='TanggalSuratKeteranganDokter'>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NoSuratKeteranganNarkoba'>
                        <Form.Label>No. Surat Keterangan Narkoba</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TanggalKeteranganNarkoba'>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NoSuratCatatanKepolisian'>
                        <Form.Label>No. Surat Catatan Kepolisian</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TanggalCatatanKepolisian'>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='AktaKelahiran'>
                        <Form.Label>Akta Kelahiran</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='StatusHidup'>
                        <Form.Label>Status Hidup</Form.Label>
                        <Form.Control as='select'>
                          <option>Hidup</option>
                          <option>Mati</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='Akta Meninggal'>
                        <Form.Label>Akta Meninggal</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='TanggalAktaMeninggal'>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NoAskes'>
                        <Form.Label>No ASKES</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='NoTaspen'>
                        <Form.Label>No Taspen</Form.Label>
                        <Form.Control type='text' placeholder='xxxxxx' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId='NoNPWP'>
                        <Form.Label>No. NPWP</Form.Label>
                        <Form.Control type='text' />
                      </Form.Group>

                      <Form.Group as={Col} controlId='tanggalNPWP'>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type='date' />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Col md={6}>
                        <Form.Group controlId='bahasa'>
                          <Form.Label>Bahasa</Form.Label>
                          <Form.Control as='select'>
                            <option>---Tambah Bahasa---</option>
                            <option>-</option>
                            <option>-</option>
                            <option>-</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
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
                      <div class='form-group col-md-6'>
                        <label for='berkas'>SK Peremajaan</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Pertek</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen Kartu NPWP*</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                          <Form.Control.Feedback type='invalid'>
                            *Mohon Unggah Berkas
                          </Form.Control.Feedback>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>Dokumen KTP*</label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                          <Form.Control.Feedback type='invalid'>
                            *Mohon Unggah Berkas
                          </Form.Control.Feedback>
                        </Form.File>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='berkas'>
                          Dokumen Kartu BPJS Kesehatan*
                        </label>
                        <Form.File id='formcheck-api-custom' custom>
                          <Form.File.Input isInvalid />
                          <Form.File.Label data-browse='Pilih'></Form.File.Label>
                          <Form.Control.Feedback type='invalid'>
                            *Mohon Unggah Berkas
                          </Form.Control.Feedback>
                        </Form.File>
                      </div>
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
                          <Form.Check size='' type='checkbox' />
                        </td>
                        <td>OK</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Upload Dokumen</td>
                        <td>
                          <Form.Check size='' type='checkbox' />
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
