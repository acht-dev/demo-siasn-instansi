import Link from "next/link";
import a from "../../../../pages/layananPemberhentian/berkasUsulan/step-2";
const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <div className="wizard__showButton-buttonBox">
            <Link href="/">
              <button className="btn btn-before">SEBELUMNYA</button>
            </Link>
            <Link href="/layananPemberhentian/berkasUsulan/step-2">
              <a className="btn btn-after">BERIKUTNYA</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowButton;
