import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>
          {/* {isShowButton && ( */}
          <div className="wizard__showButton-buttonBox">
            <Link href="/layananPI/berkasUsulan/step-4">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/">
              <a className="btn btn-after">Simpan</a>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
