import Table from "react-bootstrap/Table";
import GetData from "../../../data/monitoringPenetapan.json";

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
                  <span className="btn label-status-diterima">
                    {getDetail.statusUsulan}
                  </span>
                </td>
                <td>
                  <a
                    className="btn label-detail-penetapan"
                    href="/layananPI/monitoringPenetapan/detailPenetapan"
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
