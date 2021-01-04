import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          {isShowButton && (
            <div className="wizard__showButton-buttonBox">
              <p>Silahkan klik "BERIKUTNYA" jika pegawai yang dipilih sudah benar.</p>
              <Link href="/layananPengadaan/berkasUsulan/step-1">
                <a className="btn btn-before">Sebelumnya</a>
              </Link>
              <Link href="/layananPengadaan/berkasUsulan/step-3">
                <a className="btn btn-after">Berikutnya</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
