import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <p>Silahkan klik "KEMBALI" setelah semua data selesai divalidasi</p>

          <div className='wizard__showButton-buttonBox'>
            <Link href='/layananPembatalannip/monitoringUsulan'>
              <button className='btn btn-before'>KEMBALI</button>
            </Link>
            {isShowButton && (
              <Link href='/wizards/stepThird'>
                <a className='btn btn-after'>Berikutnya</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowButton;
