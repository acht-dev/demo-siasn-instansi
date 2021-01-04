import {
  Nav,
  Card,
  Tabs,
  Tab,
  FormControl,
  Form,
  InputGroup,
  Button,


} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function AlertDismissibleExample() {
  function Tabnav() {
  }

  return (

    <>
      <Tabs defaultActiveKey="editdata" id="uncontrolled-tab-example">
        <Tab eventKey="editdata" title="Edit Data">
          <Card>
            <Card.Body>
            <h4>AAA</h4>
            </Card.Body>
          </Card>
        </Tab>


        <Tab eventKey="dokumenpendukung" title="Dokumen Pendukung">
          <Card>
            <Card.Body>
              <h4>PPP</h4>
            </Card.Body>
          </Card>
        </Tab>


        <Tab eventKey="status" title="Status">
        <Card>
            <Card.Body>
              <h4>BBB</h4>
              </Card.Body>
              </Card>
        </Tab>
      </Tabs>

      <div className='wizard__showButton'>
        <div className='wizard__showButtonRow'>
          <div className='wizard__showButton-buttonBox'>
            <Link href='/'>
              <button className='btn btn-before'>&nbsp;&nbsp;Batal&nbsp;&nbsp;</button>
            </Link>
            <Link href='/'>
              <a className='btn btn-after'>&nbsp;Simpan&nbsp;</a>
            </Link>
          </div>
        </div>
      </div><br></br>

    </>
  );
}