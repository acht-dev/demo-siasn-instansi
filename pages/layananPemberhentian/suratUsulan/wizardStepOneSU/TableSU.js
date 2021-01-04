import Table from 'react-bootstrap/Table';
import {Form} from 'react-bootstrap';
import GetData from "../../../../data/suratUsulan.json";


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

function filterCSS(a){
  if(a === 'Tidak Lengkap') {
    return (
      <span className="tlengkap">
          {a}
      </span>
    );
  } else if (a === 'Lengkap')  {
    return (
      <span className="lengkap">
          {a}
      </span>
    );
  }
}

export default function TableSU() {
    return(
    <Table striped responsive="md">
    <thead>
      <tr>
        <th>Pilih</th>
        <th>Nip</th>
        <th>Nama</th>
        <th>Jenis Peremajaan</th>
        <th>Tgl Pengusulan</th>
        <th>Status Usulan</th>
        <th>Aksi</th>
      </tr>
    </thead>
    {GetData.map((getDetail) => {
      return (
        <tbody>
          <tr>
            <td>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox"/>
            </Form.Group>
            </td>
            <td>{getDetail.Nip}</td>
            <td>{getDetail.nama}</td>
            <td>{getDetail.jenisPeremajaan}</td>
            <td>{getDetail.tglPengusulan}</td>
            <td>{filterCSS(getDetail.statusUsulan)}</td>
            <td><a className="font-weight-normal" href="/layananPeremajaan/suratUsulan/detailSU/DetailSuratUsulan" style={{color:'#2D3C6C',fontSize:'120%'}}>Detail</a></td>
          </tr>
        </tbody>
         );
        })}
  </Table> 
    )
}