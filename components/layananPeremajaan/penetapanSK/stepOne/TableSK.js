import React, { useState } from "react";
import { Form, Col, Row ,
  Button} from "react-bootstrap";

function TableSK(){
    const [isClick, setIsClick] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isClick) {
        setIsClick(true);
        }
    };

    return(
        <div className="mt-4">
            {/* Tabel Monitoring */}
            <div>
                {/* Datatable */}
                <table id="penetapanSK" className="table table-striped">
                  <thead>
                    <tr>
                      <th class="pilih">Pilih</th>
                      <th class="nip">NIP</th>
                      <th class="nama">Nama</th>
                      <th class="tanggalPenetapan">Tanggal Penetapan</th>
                      <th class="jenisPemberhentian">Jenis Pemberhentian</th>
                      <th class="aksi">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check className="table__check" type="checkbox" />
                        </td>
                        <td>197003191997031001</td>
                        <td>Bima Pramasta Yobel</td>
                        <td>01/08/2020</td>
                        <td>Batas Usia Pensiun</td>
                        <td>
                        <a className="font-weight-normal btn-detail-PP" href="">DETAIL</a>
                        </td>
                    </tr>
                  </tbody>
                </table>
                <p className="entry">Menampilkan 1 - 5 dari 8 entri</p>
                {/* /. Datatable */}
              </div>
              {/* End Tabel Monitoring */}

            {/* Show Tab */}
            {/* <ShowButton isShowButton={isButtonClick} /> */}
            {/* <TabData isClick={isClick} />            */}
        </div>
    );
}

export default TableSK;