import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNameAsn} from "../../../../../redux/actions/getNameAsn";
export default function DataPribadi(props) {
  const dispatch = useDispatch();

  const { data, dataName } = useSelector(state => state.getDataNip)

  useEffect(() => {
    dispatch(getNameAsn(data.id))
  }, [])

  return (
    <>
      {/* {props.isButtonClick && ( */}
      <div className="section mb-4">
        <h3 className="mb-3 lbl-dputama">Data Pribadi</h3>
        <div className="col-md-12 col-12 main card">
          {/* Sebelum col-md-9 col-12 */}
          <div className="card-body">
            {/* Form Data Pribadi */}
            <form>
              <div className="form-row mt-0">
                <div className="form-group col-sm-5 ml-0">
                  <div className="input-group mb-1">
                    <div className="col-sm-6">
                      <label className="font-view-instansi">NIP Baru</label>
                      <input
                        type="text"
                        id="nipBaru"
                        name="nipBaru"
                        className="form-control"
                        defaultValue={data.nip_baru}
                        disabled
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="font-view-instansi">NIP Lama</label>
                      <input
                        type="text"
                        id="nipLama"
                        name="nipLama"
                        className="form-control"
                        defaultValue={data.nip_lama}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="col-sm-12">
                      <label className="font-view-instansi">Nama</label>
                      <input
                        type="text"
                        id="namaDputama"
                        name="namaDputama"
                        className="form-control"
                        defaultValue={dataName.nama}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">Gelar Depan</label>
                      <input
                        type="text"
                        id="gelarDpn"
                        name="gelarDpn"
                        className="form-control"
                        defaultValue={dataName.gelar_depan}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Gelar Belakang
                      </label>
                      <input
                        type="text"
                        id="gelarB"
                        name="gelarB"
                        className="form-control"
                        defaultValue={dataName.gelar_blk}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-12">
                      <label className="font-view-instansi">Tempat Lahir</label>
                      <input
                        type="text"
                        id="tempatLahir"
                        name="tempatLahir"
                        className="form-control"
                        defaultValue={dataName.kabupaten_nama}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Tanggal Lahir
                      </label>
                      <input
                        type="text"
                        id="tglLahirDp"
                        name="tglLahirDp"
                        className="form-control"
                        defaultValue={dataName.tgl_lhr}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Jenis Kelamin
                      </label>
                      <input
                        type="text"
                        id="jenisKelamin"
                        name="jenisKelamin"
                        className="form-control"
                        defaultValue={dataName.jenis_kelamin === 'F' ? 'Wanita' : 'Pria'}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-12">
                      <label className="font-view-instansi">Agama</label>
                      <input
                        type="text"
                        id="agamaDpUtama"
                        name="agamaDpUtama"
                        className="form-control"
                        defaultValue={dataName.agama_nama}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-12">
                      <label className="font-view-instansi">Email</label>
                      <input
                        type="text"
                        id="emailDpUtama"
                        name="emailDpUtama"
                        className="form-control"
                        defaultValue={dataName.email}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-7">
                      <label className="font-view-instansi">
                        Jenis Dokumen
                      </label>
                      <input
                        type="text"
                        id="jenisDokDp"
                        name="jenisDokDp"
                        className="form-control"
                        defaultValue={dataName.jenis_id_dokumen_nama}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-5">
                      <label className="font-view-instansi">
                        Nomor Dokumen
                      </label>
                      <input
                        type="text"
                        id="noDokDp"
                        name="noDokDp"
                        className="form-control"
                        defaultValue={dataName.nomor_id_document}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group col-sm-7 ml-0">
                  <div className="col-sm-12">
                    <label className="font-view-instansi">Alamat</label>
                    <textarea
                      name="alamat"
                      id="alamat"
                      cols="70"
                      rows="5"
                      className="form-control"
                      defaultValue={
                        dataName.alamat
                      }
                      disabled
                    ></textarea>
                  </div>

                  <div className="input-group mb-1 mt-1">
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">No. HP</label>
                      <input
                        type="text"
                        id="noHp"
                        name="noHp"
                        className="form-control"
                        defaultValue={dataName.nomor_hp}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Nomor Telepon
                      </label>
                      <input
                        type="text"
                        id="noTelp"
                        name="noTelp"
                        className="form-control"
                        defaultValue={dataName.nomor_telpon}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-12">
                      <label className="font-view-instansi">
                        Jenis Pegawai
                      </label>
                      <input
                        type="text"
                        id="jnsPegawai"
                        name="jnsPegawai"
                        className="form-control"
                        defaultValue={
                          data.jenis_pegawai_nama
                        }
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Kedudukan PNS
                      </label>
                      <input
                        type="text"
                        id="kedPns"
                        name="kedPns"
                        className="form-control"
                        defaultValue={data.kedudukan_hukum_nama}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Status Pegawai
                      </label>
                      <input
                        type="text"
                        id="statPegawaiDp"
                        name="statPegawaiDp"
                        className="form-control"
                        defaultValue={data.status_cpns_pns === "P" ? "Active" : "Non-Aktif"}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group mb-1">
                    <div className="row col-sm-4">
                      <label className="font-view-instansi">TMT PNS</label>
                      <input
                        type="text"
                        id="tmtPnsDpUtama"
                        name="tmtPnsDpUtama"
                        className="form-control"
                        defaultValue={data.tmt_pns}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-4">
                      <label className="font-view-instansi">
                        No. Seri Karpeg
                      </label>
                      <input
                        type="text"
                        id="noSerKarpegDp"
                        name="noSerKarpegDp"
                        className="form-control"
                        defaultValue={data.kartu_pegawai}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-4">
                      <label className="font-view-instansi">TMT CPNS</label>
                      <input
                        type="text"
                        id="tmtCpnsDp"
                        name="tmtCpnsDp"
                        className="form-control"
                        defaultValue={data.tmt_cpns}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="input-group mb-1">
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Tingkat Pendidikan
                      </label>
                      <input
                        type="text"
                        id="tingkatPendDp"
                        name="tingkapPendDp"
                        className="form-control"
                        defaultValue={dataName.tingkat_pendidikan_nama}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-6">
                      <label className="font-view-instansi">
                        Diktat Struktural
                      </label>
                      <input
                        type="text"
                        id="diktatPnsDp"
                        name="diktatPnsDp"
                        className="form-control"
                        defaultValue={"PNS"}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <div className="row col-sm-12">
                      <label className="font-view-instansi">
                        Pendidikan Terakhir
                      </label>
                    </div>
                    <div className="row col-sm-4">
                      <input
                        type="text"
                        id="pendAkhirDp"
                        name="pendAkhirDp"
                        className="form-control"
                        defaultValue={dataName.pendidikan_nama}
                        disabled
                      />
                    </div>
                    <div className="row col-sm-8">
                      <input
                        type="text"
                        id="pendAkhirDp"
                        name="pendAkhirDp"
                        className="form-control"
                        defaultValue={dataName.pendidikan_nama}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* End Form Data Pribadi */}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
