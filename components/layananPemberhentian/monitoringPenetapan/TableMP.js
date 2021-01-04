import Table from "react-bootstrap/Table";
import GetData from "../../../data/pemberhentian/monitoringPenetapan.json";

function filterCSS(a){
  if(a === 'Diterima') {
    return (
      <span className="btn label-status-diterima">
          {a}
      </span>
    );
  } else if (a === 'Ditolak')  {
    return (
      <span className="btn label-status-ditolak">
          {a}
      </span>
    );
  }
}
  
export default function TableMP() {
  return (
    <div>
      <Table striped responsive="md">
            <thead>
              <tr>
                <th>No. Surat Usulan</th>
                <th>Jenis Prosedur</th>
                <th>Nama</th>
                <th>Tgl Pengusulan</th>
                <th>Tgl Penetapan</th>
                <th><span className="ml-3">Status Usulan</span></th>
                <th><span className="ml-3">Aksi</span></th>
              </tr>
            </thead>
      {GetData.map((getDetail) => {
        return (
            <tbody>
              <tr>
                <td>{getDetail.NoSU}</td>
                <td>{getDetail.jenisProsedur}</td>
                <td>{getDetail.nama}</td>
                <td>{getDetail.tglPengusulan}</td>
                <td>{getDetail.tglPenetapan}</td>
                <td>
                  {filterCSS(getDetail.statusUsulan)}
                </td>
                <td>
                  <a
                    className="btn label-detail-penetapan"
                    href="/layananPemberhentian/monitoringPenetapan/detailMP"
                  >
                    DETAIL
                  </a>
                </td>
              </tr>
            </tbody>
        );
      })}
       </Table>
    </div>
  );
}
