import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <p>Silahkan klik "BERIKUTNYA" setelah semua data selesai ditambahkan.</p>
          {/* {isShowButton && ( */}
          <div className="wizard__showButton-buttonBox">
            <Link href="/layananPengadaan/berkasUsulan/step-3">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/layananPengadaan/berkasUsulan/step-5">
              <a className="btn btn-after">Berikutnya</a>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
