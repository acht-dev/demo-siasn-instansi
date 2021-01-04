import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
// import GetData from "../../../../data/BerkasUsulanPns.json";

// function BL() {
// return(
//     <span className='lengkap'>Lengkap</span>
// )
// }

// function BTL() {
//     return(
//         <span className='tlengkap'>Tidak Lengkap</span>
//     )
// }

function filterCSS(a) {
  if (a === "Tidak Lengkap") {
    return <span className='tlengkap'>{a}</span>;
  } else if (a === "Lengkap") {
    return <span className='lengkap'>{a}</span>;
  }
}

export default function TablesPilih() {
  return (
    <Table striped responsive='md'>
      <thead>
        <tr>
          <th>Pilih</th>
          <th>NIP</th>
          <th>Nama</th>
        </tr>
      </thead>
      {GetData.map((getDetail) => {
        return (
          <tbody>
            <tr>
              <td>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check type='checkbox' />
                </Form.Group>
              </td>
              <td>{getDetail.nip}</td>
              <td>{getDetail.nama}</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
}
