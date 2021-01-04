import Link from "next/link";
import a from "../../../../pages/layananPI/berkasUsulan/step-2";
const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <div className="wizard__showButton-buttonBox">
            <Link href="/">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/layananPI/berkasUsulan/step-2">
              <a className="btn btn-after">Berikutnya</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowButton;
