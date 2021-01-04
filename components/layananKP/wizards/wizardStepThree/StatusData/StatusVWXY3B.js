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
  
  export default function StatusVWXY3B(props) {
    function StatusVWXY3B() {}
  
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
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Keudukan hukum aktif</td>
                      <td className="text-center">
                        <input type="checkbox" className="css-checkbox" id="checkbox1"  />
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minimal 2 tahun dalam pangkat</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox2"  />
					            	<label htmlFor="checkbox2" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Memenuhi angka kredit yang dipersyaratkan</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox3"/>
					            	<label htmlFor="checkbox3" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>SKP 2 tahun terakhir bernilai minimal baik</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox4"  />
					            	<label htmlFor="checkbox4" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Jenis jabatan fungsional tertentu</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox5"  />
					            	<label htmlFor="checkbox5" name="checkbox1_lbl" className="css-label lite-green-check"></label>
                      </td>
                      <td className="text-center">OK</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Minimal 1 tahun dalam jabatan fungsional</td>
                      <td className="text-center">
                      <input type="checkbox" className="css-checkbox" id="checkbox6"  />
					            	<label htmlFor="checkbox6" name="checkbox1_lbl" className="css-label lite-green-check"></label>
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
  