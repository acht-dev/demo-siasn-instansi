import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNameAsn } from "../../../../redux/actions/berkasUsul/getNameAsn";

function CardProfile(props) {
  const { nipAsn } = useSelector((state) => state.getIdAsn);
  // console.log(nipAsn.id)

  const dispatch = useDispatch();

  // if(nipAsn.id !== undefined && props.isClick === true){
  //   dispatch(getNameAsn(nipAsn.id))
  // }
  useEffect(() => {
    if (props.isClick && nipAsn.id !== undefined) {
      dispatch(getNameAsn(nipAsn.id));
    }
  }, [nipAsn.id]);
  // const {nipAsn} = useSelector(state => state.getIdAsn)
  // useEffect(()=>{
  //   if(props.isClick){
  //     // console.log(nipAsn.id)
  //     dispatch(getNameAsn(nipAsn.id))
  //   }
  // })
  const { nameAsn } = useSelector((state) => state.getIdAsn);

  return (
    <>
      {props.isClick && (
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
                      <span>Instansi:</span> {nipAsn.instansi_kerja_nama}
                    </p>
                    <p className='mb-0'>
                      <span>Satuan Kerja:</span> {nipAsn.satuan_kerja_kerja_nama}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-1 profile__check'>
              <Form>
                <Form.Check aria-label='option 1' checked />
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProfile;
