import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
        
          {isShowButton && (
            <div className="wizard__showButton-buttonBox">
              <p>Silahkan klik "BERIKUTNYA" jika pegawai yang dipilih sudah benar.</p>
              <Link href="/layananPemberhentian/berkasUsulan">
                <a className="btn btn-before">SEBELUMNYA</a>
              </Link>
              <Link href="/layananPemberhentian/berkasUsulan/step-3">
                <a className="btn btn-after">BERIKUTNYA</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
