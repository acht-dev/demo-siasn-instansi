import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button, Col, Form, Image, Card} from "react-bootstrap";

function CardProfile(props) {
  return (
    <>
        <Card className="mb-3">
          <Form >
            
            <Row>
              <Col sm={1}>
                <img src="/img/foto-profile.png" className="align-self-center mt-sm-3 img-card-peremajaan" />
              </Col>
              <Col sm={5} className='mt-2 ml-3'>
                <Form.Row className='align-items-center'>
                  <Col sm={12}>
                    <Form.Label className='font-card-view-instansi-2 font-weight-bold'>Alan Bimo Giovan</Form.Label>
                  </Col>
                </Form.Row>

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
    </>
  );
}

export default CardProfile;
