import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function CardProfile(props) {
  return (
    <>
      {props.isClick && (
        <div className="card card-profile my-3" id="pindahInstansi">
          <div className="row align-items-center p-4 justify-content-between">
            <div className="col-1">
              <div className="box-img-profile">
                <img src="/img/foto-profile.png" />
              </div>
            </div>
            <div className="col-9 ml-4 profile__info">
              <h4 className="mb-2 title">Pramasta Ramadha Raharjo</h4>
              <div className="text-body">
                <div className="row">
                  <div className="col-5">
                    <p className="mb-0">
                      <span>NIP</span> 197003191997031002
                    </p>
                    <p className="mb-0">
                      <span>No.Pengusulan:</span> 18020002123
                    </p>
                  </div>
                  <div className="col-7">
                    <p className="mb-0">
                      <span>Tanggal Pengusulan:</span> 25 Oktober 2020
                    </p>
                    <p className="mb-0"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1 profile__check"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProfile;
