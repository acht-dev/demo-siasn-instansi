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
  
  export default function StatusVWXY9C(props) {
    function StatusVWXY9C() {}
  
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
                      <td>Setiap unsur penilaian prestasi kerja /DP-3 dalam 1 (satu) tahun terakhir sekurang-kurangnya bernilai baik.</td>
                      <td className="text-center">
                        <input type="checkbox" className="css-checkbox" id="checkbox1"  />
					            	<label htmlFor="checkbox1" name="checkbox1_lbl" className="css-label lite-green-check"></label>
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
  