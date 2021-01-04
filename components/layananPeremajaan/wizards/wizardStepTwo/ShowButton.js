import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>
          {isShowButton && (
            <div className='wizard__showButton-buttonBox'>
              <Link href='/layananPeremajaan/berkasUsulan/step-1'>
                <a className='btn btn-before'>Berikutnya</a>
              </Link>
              <Link href='/layananPeremajaan/berkasUsulan/step-3'>
                <a className='btn btn-after'>Berikutnya</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
