import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>
          {isShowButton && (
            <div className='wizard__showButton-buttonBox'>
              <button className='btn btn-before'>Sebelumnya</button>
              <Link href='/berkasUsulan/step-2'>
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
