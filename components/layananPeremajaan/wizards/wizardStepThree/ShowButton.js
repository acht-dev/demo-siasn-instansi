import Link from "next/link";

const ShowButtonPI3 = ({ isShowButton }) => {
  return (
    <>
      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <p>
            Silahkan klik "BERIKUTNYA" setelah semua data selesai ditambahkan.
          </p>

          <div className='wizard__showButton-buttonBox'>
            <Link href='/layananPeremajaan/berkasUsulan/step-2'>
              <button className='btn btn-before'>Sebelumnya</button>
            </Link>
            {/* {isShowButton && ( */}
            <Link href='/layananPeremajaan/berkasUsulan/step-4'>
              <a className='btn btn-after'>Berikutnya</a>
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowButtonPI3;
