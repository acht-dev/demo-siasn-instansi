import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CardProfile() {
  return (
    <>
      <div className="card card-profile my-3" id="pindahInstansi">
        <div className="row align-items-center p-4 justify-content-between">
          <div className="col-1">
            <div className="box-img-profile">
              <img src="/img/foto-profile.png" />
            </div>
          </div>
          <div className="col-9 ml-4 profile__info">
            <h4 className="mb-2 title" style={{marginLeft:"50px"}}>Pramasta Ramadha Raharjo</h4>
            <div className="text-body">
              <div className="card-body ml-2">
                <div className="col-md-9">
                  <p className="mb-0">
                    <span>NIP</span> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &nbsp;: 197003191997031002
                  </p>
                  <p className="mb-0">
                    <span>Jenis Prosedur</span>&emsp; &nbsp; &nbsp; &nbsp; &emsp;: Data Pribadi
                  </p>
                  <p className="mb-0">
                    <span>Nomor Surat Usulan</span>&nbsp;&nbsp;&nbsp; &nbsp;: 18020002123
                  </p>
                  <p className="mb-0">
                    <span>Tanggal Penetapan</span> &emsp; &nbsp;: 03-11-2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1 profile__check">
            <Form></Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
