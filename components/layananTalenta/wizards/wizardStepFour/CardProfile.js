import { Form,Col,Row,Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CardProfile(props) {
  return (
    <>
    {props.isClick && (
      <Card className="mb-3">
          <Form >
            <Row>
              <Col sm={1}>
                <img src="/img/foto-profile.png" className="align-self-center mt-sm-3 img-card-peremajaan" />
              </Col>
              <Col sm={5} className='mt-2 ml-3'>
                <Form.Row className='align-items-center'>
                  <Col sm={12}>
                    <Form.Label className='font-card-view-instans-2 font-weight-bold'>Alan Bimo Giovan</Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row className='align-items-center'>
                  <Col sm={3}>
                    <Form.Label className='font-card-view-instansi font-weight-bold'>NIP LAMA :</Form.Label>
                  </Col>
                  <Col sm={7}>
                    <Form.Label className='font-card-view-instansi'>
                      1802002123
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row className='align-items-center'>
                  <Col sm={3}>
                    <Form.Label className='font-card-view-instansi font-weight-bold'>NIP BARU :</Form.Label>
                  </Col>
                  <Col sm={7}>
                    <Form.Label className='font-card-view-instansi'>
                      197003191997031002
                    </Form.Label>
                  </Col>
                </Form.Row>
              </Col>
              <Col sm={5} className='align-self-end text-sm-left'>
                <Form.Row className='align-items-center'>
                  <Col sm={4}>
                    <Form.Label className='font-card-view-instansi font-weight-bold'>Instansi :</Form.Label>
                  </Col>
                  <Col sm={7}>
                    <Form.Label className='font-card-view-instansi'>
                     Badan Kepegawaian Negara
                    </Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row className='align-items-center'>
                <Col sm={4}>
                    <Form.Label className='font-card-view-instansi font-weight-bold'>Satuan Kerja :</Form.Label>
                  </Col>
                  <Col sm={7}>
                    <Form.Label className='font-card-view-instansi'>
                     Badan Kepegawaian Negara
                    </Form.Label>
                  </Col>
                </Form.Row>
              </Col>
            </Row>
          </Form>
        </Card>
    )}
    </>
  );
}

export default CardProfile;
