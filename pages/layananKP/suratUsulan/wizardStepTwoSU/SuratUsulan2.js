import { Layout } from "../../../../components/Layout";
import { Form, Col, Button, Dropdown, Row } from "react-bootstrap";
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Link from "next/link";

function SuratUsulan2() {
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handleReset = () => {
    if (isClick) {
      setIsClick(false);
    }
  };
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Surat Usulan</h2>
        </div>

        {/* wizard step section */}
        <div className='wizard__page-2_SU'>
          <div className='wizard__container'>
            <div className='row'>
              <div className='col-6 wizard__step-1 disabled'>
                <h5>Langkah 1</h5>
                <p>Pilih Surat Usulan</p>
              </div>
              <div className='col-6  wizard__step-2 active'>
                <h5>Langkah 2</h5>
                <p>Upload Surat Usulan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Component input form */}
        <div className='wizard__inputForm'>
          <Form>
            <Form.Row className='align-items-center'>
              <Col xs={12} md={3} className='mr-md-3'>
                <Form.Group controlId='nip'>
                  <Form.Label style={{fontSize:'17px'}}>Nomor Surat Usulan</Form.Label>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className='mr-md-3 '>
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label style={{fontSize:'17px'}}>Tanggal Pengusulan </Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    placeholder='Date of Birth'
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className='ml-md-3'>
              <Form.Group controlId='exampleForm.ControlSelect1'>
                      <Form.Label style={{fontSize:'17px'}}>Spesimen Tanda Tangan </Form.Label>
                      <Form.Control as='select' style={{fontSize:'15px'}}>
                        <option>-- Pilih Spesimen Approval --</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
              </Col>
            </Form.Row>

            <div className=' wizard__inputForm-buttonBox mt-3'>
              <Link href='/layananKP/suratUsulan'>
                <Button
                  className='wizard__formButtonReset'
                  type='button'
                  onClick={handleReset}>
                  Kembali
                </Button>
              </Link>

              <Link  href='/layananKP/suratUsulan'>
              <Button
                className='ml-4 wizard__formButtonSubmit'
                type='submit'
                >
                Kirim
              </Button>
              </Link>
            </div>
          </Form>
        </div>

        {/* show card profile */}
        {/* <CardProfile isClick={isClick} /> */}

        {/* show button */}
        {/* <ShowButton isShowButton={isClick} /> */}
      </Layout>
    </>
  );
}

export default SuratUsulan2;
