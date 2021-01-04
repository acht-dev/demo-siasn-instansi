import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import GetData from "../../../../data/UsulanTalenta.json";

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

export default function Tables() {
  return (
    <Table striped responsive='md'>
      <thead>
        <tr>
          <th>No</th>
          <th>NIP</th>
          <th>Nama</th>
          <th>Aksi</th>
        </tr>
      </thead>
      {GetData.map((getDetail) => {
        return (
          <tbody>
            <tr>
              <td>{getDetail.no}</td>
              <td>{getDetail.nip}</td>
              <td>{getDetail.nama}</td>
              <td>
                <a
                  className='font-weight-normal'
                  href='/layananKP/suratUsulan/detailSU/DetailSuratUsulan'
                  style={{ color: "red", fontSize: "120%" }}>
                  Hapus
                </a>
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
}
