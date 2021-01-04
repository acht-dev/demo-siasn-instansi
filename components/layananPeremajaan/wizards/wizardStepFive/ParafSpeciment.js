import Link from "next/link";
import { Form, Col, show, setShow, Button, Modal } from "react-bootstrap";

export default function ParafSpeciment({
  paraf,
  handleShow,
  handleReset,
  handleSubmit,
}) {
  return (
    <>
      {/* pilih spesimen paraf & tanda tangan */}
      {paraf ? (
        <>
          <div className='wizard__inputForm'>
            <strong>
              <p className='mb-2 title'>PILIH SPECIMEN</p>
            </strong>

            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='paraf'>
                  <Form.Label>Pilih Pejabat untuk Paraf</Form.Label>
                  <Form.Control as='select'>
                    <option> --- Pilih Pejabat ---- </option>
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId='ttd'>
                  <Form.Label>Pilih Pejabat untuk Tanda Tangan</Form.Label>
                  <Form.Control as='select'>
                    <option> --- Pilih Pejabat ---- </option>
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <div className='wizard__inputForm-buttonBox mt-3'>
                <Button
                  className='mr-3 wizard__formButtonReset'
                  type='button'
                  onClick={handleReset}>
                  RESET
                </Button>

                <Button
                  className='mr-4 wizard__formButtonSubmit'
                  type='submit'
                  value={true}
                  onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>

          <div className='wizard__inputForm'>
            <div className='wizard__showButtonRow'>
              <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>

              <div className='wizard__inputForm-buttonBox mt-3'>
                <Link href='/berkasUsulan/step-4'>
                  <Button
                    className='mr-3 wizard__formButtonReset'
                    type='button'>
                    SEBELUMNYA
                  </Button>
                </Link>

                <Button
                  className='mr-3 wizard__formButtonSubmit'
                  type='submit'
                  value={true}
                  onClick={handleShow}>
                  SIMPAN BERKAS
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='wizard__inputForm'>
          <div className='wizard__showButtonRow'>
            <p>Silahkan klik "BERIKUTNYA" setelah memilih prosedur.</p>

            <div className='wizard__inputForm-buttonBox mt-3'>
              <Link href='/berkasUsulan/step-4'>
                <Button className='mr-3 wizard__formButtonReset' type='button'>
                  SEBELUMNYA
                </Button>
              </Link>

              <Button
                className='mr-3 wizard__formButtonSubmit'
                type='submit'
                onClick={handleShow}>
                SIMPAN BERKAS
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
