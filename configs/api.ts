import axios from "axios"
import Cookies from 'js-cookie';

const host = axios.create({
  baseURL: process.env.API_GATEAWAY_ENDPOINT
});

const token = Cookies.get('token');

const api = {
  searchNip : (nipLama, nipBaru) => host.get(`profilasn/api/pns?nip_lama=${nipLama}&nip_baru=${nipBaru}`, {
    headers: {
      Authorization: token,
    }
  }),
  searchNameAsn: (id) => host.get(`profilasn/api/orang?id=${id}`, {
    headers: {
      Authorization: token,
    }
  }),
  searchUsulanAsn: (no_srt_usul, tgl_usul, pns_orang_id_pengusul,jenis_permajaan,provinsi_id, nama_pengusul) => host.get(`siasn-instansi/api/peremajaan/monit-usulan/get?limit=10&no_srt_usul=${no_srt_usul}&tgl_usul=${tgl_usul}&pns_orang_id_pengusul=${pns_orang_id_pengusul}&jenis_permajaan=${jenis_permajaan}&provinsi_id=${provinsi_id}&nama_pengusul=${nama_pengusul}`, {
      headers: {
        Authorization: token,
      }
    }),
    updateDataAsn: (bodyData) => host.post('siasn-instansi/api/peremajaan/golongan/update-data', 
    { ...bodyData },
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data"
      }
    }),
    uploadFileUsulan: (bodyData) => host.post('peremajaan/upload-dok',
      bodyData,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      }
    ),
    getGolongan: (id) => host.get(`profilasn/api/golongan?pns_orang_id=${id}`,{
      headers:{
        Authorization: token,
      }
    })
}

export default api;