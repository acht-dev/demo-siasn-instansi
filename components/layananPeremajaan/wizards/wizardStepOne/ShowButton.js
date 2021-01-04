import Link from "next/link";
import {useRouter} from "next/router"
import {useDispatch} from "react-redux"
import {postUsulanPns} from "../../../../redux/actions/berkasUsul/postUsulanPns"

const ShowButton = ({ isShowButton, id }) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const _submitUsulan = (e) => {
    e.preventDefault();
    const sumber = "instansi"
    dispatch(postUsulanPns(id, sumber))
    router.push('/layananPeremajaan/berkasUsulan/step-2')
  }

  return (
    <>
      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>

          <div className='wizard__showButton-buttonBox'>
            <Link href='/'>
              <button className='btn btn-before'>Sebelumnya</button>
            </Link>
            {isShowButton && (
              <Link href='/layananPeremajaan/berkasUsulan/step-2'>
                <a className='btn btn-after' onClick={(e) => _submitUsulan(e)}>Berikutnya</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowButton;
