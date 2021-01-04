export default function MonitoringUsulan() {
  return (
    <div>
      <div className="">
        <div className="row">
          <label className="card-body mt-3 lbl-monitoring">Monitoring Usulan</label>
          <div className="col-md-12 col-12">
            {/* Sebelum col-md-10 col-12 */}
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-4">
                  {/* /.card-header */}
                  <div className="card">
                    <div className="col-md-12 col-12">
                      {/* Sebelum col-md-9 col-12 */}
                      <div className="card-body">
                        {/* form Monitoring */}
                        <form>
                          <div className="form-row mt-0">
                            <div className="form-group col-md-3">
                              <label>Nomor Surat Usulan</label>
                              <div className="input-group mb-1">
                                <input type="text" id="noSuratUsulan" name="noSurat Usulan" className="form-control" placeholder="Ketik No. Usulan..." />
                              </div>
                            </div>

                            <span className="mr-5"></span>

                            <div className="form-group col-md-3">
                              <label>Tanggal Pengusulan</label>
                              <div className="input-group mb-1">
                                <div class="input-group date" data-target-input="nearest">
                                  <input
                                    type="text"
                                    name="tglPengusulan"
                                    className="form-control datetimepicker-input"
                                    id="tglPengusulan"
                                    data-target="#tglPengusulan"
                                    placeholder="dd/mm/yyyy"
                                  />
                                  <div className="input-group-append" data-target="#tglPengusulan" data-toggle="datetimepicker">
                                    <div className="input-group-text btn-bg-icon">
                                      {/* <i class="fa fa-calendar-alt"></i> */}
                                      <img src="../img/logo-calender.png" className="icon-size" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <span className="mr-5"></span>

                            <div className="form-group col-md-3">
                              <label>NIP</label>
                              <div className="input-group mb-1">
                                <input type="text" id="nipUsulan" name="nipUsulan" className="form-control" placeholder="Ketik NIP Pengusul" />
                              </div>
                            </div>
                          </div>

                          <div className="form-row mt-0">
                            <div className="form-group col-md-3">
                              <label>Jenis Peremajaan</label>
                              <div className="input-group mb-1">
                                <select id="jenisKelamin" name="jenisKelamin" class="form-control select">
                                  <option value="" selected>
                                    --- Pilih Jenis Peremajaan ---
                                  </option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                            </div>

                            <span className="mr-5"></span>

                            <div className="form-group col-md-3">
                              <label>Status Usulan</label>
                              <div className="input-group mb-1">
                                <select id="statUsulan" name="statUsulan" class="form-control select">
                                  <option value="" selected>
                                    --- Pilih Status Usulan ---
                                  </option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                            </div>

                            <span className="mr-5"></span>

                            <div className="form-group col-md-3">
                              <label>Nama Pengusul</label>
                              <div className="input-group mb-1">
                                <input type="text" id="namaPengusul" name="namaPengusul" className="form-control" placeholder="Ketik Nama Pengusul" />
                              </div>
                            </div>
                          </div>

                          {/* Button */}
                          <div className="mt-4">
                            <div className="row">
                              <div className="box-button-usulan col-md-1 col-12 my-1 my-lg-0 mr-3">
                                <button type="submit" className="btn btn-block btn-lg-inline btn-cari-usulan">
                                  Cari Usulan
                                </button>
                              </div>

                              <span className="mr-5"></span>
                              <div className="box-button-usulan-reset col-md-2 col-12 my-1 my-lg-0">
                                <button type="submit" className="btn btn-block btn-lg-inline btn-reset">
                                  Reset
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* End Button */}
                        </form>
                        {/* End Form Monitoring */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}

                <div className="mb-4">
                  {/* /.card-header */}
                  <div className="">
                    <div className="col-md-12 col-12">
                      {/* Sebelum col-md-9 col-12 */}
                      <div className="">
                        {/* Tabel Monitoring */}
                        <div className="table-responsive-lg">
                          {/* Datatable */}
                          <table id="example" className="table table-striped">
                            <thead>
                              <tr>
                                <th>No. Surat Usulan</th>
                                <th>Jenis Peremajaan</th>
                                <th>NIP</th>
                                <th>Nama</th>
                                <th>Tgl Pengusulan</th>
                                <th>Status Usulan</th>
                                <th>Aksi</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>198609262015051001</td>
                                <td>Kesehatan</td>
                                <td>197003191997031001</td>
                                <td>Alan Hadi</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-op">On Progress</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051002</td>
                                <td>PMK</td>
                                <td>197003191997031001</td>
                                <td>Azis Pasha</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051003</td>
                                <td>LHKPN</td>
                                <td>197003191997031001</td>
                                <td>Bimo Suryo</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-ditolak">Ditolak</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051004</td>
                                <td>Potensi</td>
                                <td>197003191997031001</td>
                                <td>FigaRizfa</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051001</td>
                                <td>Kesehatan</td>
                                <td>197003191997031001</td>
                                <td>Alan Hadi</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-op">On Progress</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051002</td>
                                <td>PMK</td>
                                <td>197003191997031001</td>
                                <td>Azis Pasha</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051003</td>
                                <td>LHKPN</td>
                                <td>197003191997031001</td>
                                <td>Bimo Suryo</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-ditolak">Ditolak</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051004</td>
                                <td>Potensi</td>
                                <td>197003191997031001</td>
                                <td>FigaRizfa</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051001</td>
                                <td>Kesehatan</td>
                                <td>197003191997031001</td>
                                <td>Alan Hadi</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-op">On Progress</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051002</td>
                                <td>PMK</td>
                                <td>197003191997031001</td>
                                <td>Azis Pasha</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051003</td>
                                <td>LHKPN</td>
                                <td>197003191997031001</td>
                                <td>Bimo Suryo</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-ditolak">Ditolak</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051004</td>
                                <td>Potensi</td>
                                <td>197003191997031001</td>
                                <td>FigaRizfa</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051001</td>
                                <td>Kesehatan</td>
                                <td>197003191997031001</td>
                                <td>Alan Hadi</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-op">On Progress</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051002</td>
                                <td>PMK</td>
                                <td>197003191997031001</td>
                                <td>Azis Pasha</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051003</td>
                                <td>LHKPN</td>
                                <td>197003191997031001</td>
                                <td>Bimo Suryo</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-ditolak">Ditolak</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                              <tr>
                                <td>198609262015051004</td>
                                <td>Potensi</td>
                                <td>197003191997031001</td>
                                <td>FigaRizfa</td>
                                <td>01/08/2020</td>
                                <td>
                                  <span className="btn label-status-terkirim">Terkirim</span>
                                </td>
                                <td>
                                  <span className="btn label-detail">DETAIL</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* /. Datatable */}
                        </div>

                        {/* End Tabel Monitoring */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </div>
  );
}
