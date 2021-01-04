import {
    striped,
    bordered,
    hover,
    Table,
    responsive,
    Form,
    Container,
    Row,
    Col,
    Tab,
    Tabs,
    Card,
    InputGroup,
    FormControl,
    Button,
  } from "react-bootstrap";
  
  import "bootstrap/dist/css/bootstrap.min.css";
  
  export default function StatusVW1C(props) {
    function StatusVW1C() {}
  
    return (
      <>
 
            <Card>
              <Card.Body>
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
                  <tbody >
                    <tr>
                      <td>1</td>
                      <td>Kedudukan hukum aktif</td>
                      <td className="text-center"> 
                        <input type="checkbox" className="css-checkbox" id="checkbox1"  />  
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Kedudukan hukum tugas pelajar</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox2"/>
					            	<label htmlFor="checkbox2" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Minimal 4 tahun dalam pangkat terakhir</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox3"/>
					            	<label htmlFor="checkbox3" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pendidikan tidak melampaui golongan dari atasan langsung</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox4"/>
					            	<label htmlFor="checkbox4" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Jenis jabatan fungsional umum</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox5"/>
					            	<label htmlFor="checkbox5" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Tidak boleh melampaui golongan dari atasan langsung</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox6"/>
					            	<label htmlFor="checkbox6" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Penilaian prestasi kerja/DP-3 2 tahun terakhir bernilai minimal baik</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox7"/>
					            	<label htmlFor="checkbox7" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                  </tbody>
                </Table>
  
                {/* <div className='wizard__showButton-buttonBox'>
                  <button className='btn btn-before ml-2 mb-2'>Batal</button>
                  <button className='btn btn-after  mb-2'>Simpan</button>
                </div> */}
              </Card.Body>
            </Card>
        <br></br>
      </>
    );
  }
  