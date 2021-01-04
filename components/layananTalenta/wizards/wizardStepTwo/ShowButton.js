import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          {/* {isShowButton && ( */}
          <div className="wizard__showButton-buttonBox">
            <Link href="/layananTalenta/berkasUsulan/step-1">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/layananTalenta/berkasUsulan/step-3">
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
