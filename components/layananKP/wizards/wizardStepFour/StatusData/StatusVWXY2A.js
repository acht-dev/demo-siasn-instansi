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
  
  export default function StatusVWXY2A(props) {
    function StatusVWXY2A() {}
  
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
                      <th className="text-center">Status</th>
                      <th className="text-center">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Keudukan hukum aktif</td>
                      <td className="text-center">
                        <input type="checkbox"    checked="checked" disabled/>
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minimal 4 tahun dalam pangkat jika bukan satu tingkat dibawah pangkat terendah pada eselon tsb</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox2" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Minimal 1 tahun dalam pangkat jika satu tingkat dibawah pangkat terendah pada eselon tsb</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox3" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Minimal 1 tahun dalam jabatan struktural jika satu tingkat dibawah pangkat terendah pada eselon tsb</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox4" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pendidikan melampaui pangkat puncak eselon ring</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox5" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Jenis jabatan Struktural</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox6" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Tidak boleh melampaui golongan dari atasan langsung</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox7" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>penilaian prestasi kerja/DP-3 2 tahun terakhir bernilai minimal baik</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					            	<label htmlFor="checkbox8" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                  </tbody>
                </Table>
  
                
              </Card.Body>
            </Card>
        <br></br>
      </>
    );
  }
  