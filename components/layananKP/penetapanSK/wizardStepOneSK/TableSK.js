import Table from 'react-bootstrap/Table';
import {Form} from 'react-bootstrap';
import GetData from "../../../../data/penetapanSK.json";

export default function TableSK() {
    return(
    <Table striped responsive="md">
    <thead>
      <tr>
        <th>Pilih</th>
        <th>Nip</th>
        <th>Nama</th>
        <th>Tgl Pengusulan</th>
        <th>Jenis Pemberhentian</th>
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
            <td>{getDetail.tglPengusulan}</td>
            <td>{getDetail.jenisPemberhentian}</td>
            <td><a className="font-weight-normal" href="/layananPeremajaan/suratUsulan/detailSU" style={{color:'#2D3C6C',fontSize:'120%'}}>Detail</a></td>
          </tr>
        </tbody>
         );
        })}
  </Table> 
    )
}