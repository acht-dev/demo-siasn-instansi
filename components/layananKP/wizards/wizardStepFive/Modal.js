import Modal from "react-bootstrap/Modal";
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

function Modal() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>SIMPAN</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Apakah Anda yakin ingin simpan ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default Modal;
