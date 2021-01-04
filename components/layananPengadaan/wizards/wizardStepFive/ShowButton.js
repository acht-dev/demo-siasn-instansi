import Link from "next/link";
import Button from 'react-bootstrap/Button'
import Modal from "react-bootstrap/Modal";

const ShowButton = ({ isShowButton }) => {
  
  const handleModal =() => {
    this.setState({show:true})
  }
  return (
    <>
      <div className="wizard__showButton">
        <div className="wizard__showButtonRow">
          <p>Silahkan klik "SIMPAN" jika data sudah benar.</p>
          {/* {isShowButton && ( */}
          <div className="wizard__showButton-buttonBox">
          <Link href="/layananPengadaan/berkasUsulan/step-4">
              <button className="btn btn-before">Sebelumnya</button>
            </Link>
            <Link href="/">
              <a onClick = {()=>{this.handleModal()}} className="btn btn-after">Berikutnya</a>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default ShowButton;
