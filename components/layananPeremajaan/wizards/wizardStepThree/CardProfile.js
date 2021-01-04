import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector, useDispatch} from "react-redux"

function CardProfilePI3(props) {
  const {nipAsn, nameAsn} = useSelector(state => state.getIdAsn)
  return (
    <>
      <div className='card card-profile my-3' id='pindahInstansi'>
        <div className='row align-items-center p-4 justify-content-between'>
          <div className='col-1'>
            <div className='box-img-profile'>
              <img src='/img/foto-profile.png' />
            </div>
          </div>
          <div className='col-9 ml-4 profile__info'>
            <h4 className='mb-2 title'>{nameAsn.nama}</h4>
            <div className='text-body'>
              <div className='row'>
                <div className='col-5'>
                  <p className='mb-0'>
                    <span>NIP Baru:</span> {nipAsn.nip_baru}
                  </p>
                  <p className='mb-0'>
                    <span>NIP Lama:</span> {nipAsn.nip_lama}
                  </p>
                </div>
                <div className='col-7'>
                  <p className='mb-0'>
                    <span>Instansi:</span> {nipAsn.isntansi_kerja_nama}
                  </p>
                  <p className='mb-0'>
                    <span>Satuan Kerja:</span> {nipAsn.satuan_kerja_kerja_nama}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfilePI3;
