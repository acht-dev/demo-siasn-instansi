import Link from "next/link";

const ShowButton = ({ isShowButton }) => {
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          {isShowButton && (
            <div className="wizard__showButton-buttonBox">
              <Link href="/layananKP/penetapanSK/step-1">
                <a className="btn btn-before">Kembali</a>
              </Link>
              <Link href="/components/monitoringSK/WizardMonitoring">
                <a className="btn btn-after">Kirim</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowButton;