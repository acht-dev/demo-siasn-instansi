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
  
  export default function StatusZ10B(props) {
    function StatusZ10B() {}
  
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
                      <td>Kedudukan Hukum Aktif</td>
                      <td className="text-center">
                        <input type="checkbox"  checked="checked" disabled/>
					    <label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      {/* Catatan */}
                      <td className="text-center">OK</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Memenuhi Angka Kredit yang Dipersyaratkan</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					    <label htmlFor="checkbox2" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      {/* Catatan */}
                      <td className="text-center">OK</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>SKP 2 Tahun Terakhir Bernilai Miniml Baik</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					    <label htmlFor="checkbox3" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      {/* Catatan */}
                      <td className="text-center">OK</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Jenis Jbatan Fungsional Tertentu</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					    <label htmlFor="checkbox4" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      {/* Catatan */}
                      <td className="text-center">OK</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Waktu irim usul minimal 3 bulan sebelum BUP</td>
                      <td className="text-center">
                      <input type="checkbox"  checked="checked" disabled/>
					    <label htmlFor="checkbox5" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      {/* Catatan */}
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
  