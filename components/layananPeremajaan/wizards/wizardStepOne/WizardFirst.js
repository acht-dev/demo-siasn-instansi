import { Layout } from "../../../Layout";
import { Form, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ShowButton from "./ShowButton";
import CardProfile from "./CardProfile";
import Breadcrumb from "../../../Breadcrumb";
import WizardSteps from "./WizardSteps";
import {useSelector, useDispatch} from "react-redux"
import {getAsn} from "../../../../redux/actions/berkasUsul/getAsn"
import {testing} from "../../../../redux/actions/berkasUsul/testing"
import axios from 'axios';

function WizardFirst() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [dataNip, setDataNip] = useState({nipLama: "", nipBaru: ""});

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

  const _searchData = (e) => {
    e.preventDefault();
    // console.log(dataNip.nipBaru + " " + dataNip.nipLama);
    dispatch(getAsn(dataNip.nipLama, dataNip.nipBaru));
    // dispatch(testing(1));
    if (!isClick) {
      setIsClick(true);
    }
  }

  // useEffect(async () => {
  //   const result = await axios('http://202.125.94.151:8000/siasn-instansi/api/peremajaan/monit-usulan/get');
  //   console.log(result.data)
  // }, [])
  
  const {nipAsn} = useSelector(state => state.getIdAsn)
  // console.log(nipAsn.id)

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Cari NIP</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-1' />

        {/* Component input form */}
        <div className='wizard__inputForm'>
          <Form onSubmit={(e) => _searchData(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId='nipBaru'>
                <Form.Label>NIP Baru</Form.Label>
                <Form.Control 
                  type='text'
                  required 
                  placeholder='18020002123' 
                  onChange={(e) => setDataNip({...dataNip, nipBaru: e.target.value})}
                  />
              </Form.Group>

              <Form.Group as={Col} controlId='nipLama'>
                <Form.Label>NIP Lama</Form.Label>
                <Form.Control 
                  type='text' 
                  required
                  placeholder='18020002123' 
                  onChange={(e) => setDataNip({ ...dataNip, nipLama: e.target.value})}
                  />
              </Form.Group>
            </Form.Row>

            <div className='wizard__inputForm-buttonBox mt-3'>
              <Button
                className='mr-4 wizard__formButtonSubmit'
                type='submit'
                // onClick={handleSubmit}
                >
                Cari Pegawai
              </Button>

              <Button
                className='wizard__formButtonReset'
                type='button'
                onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Form>
        </div>

        {/* show card profile */}
        <CardProfile isClick={isClick} />

        {/* show button */}
        <ShowButton isShowButton={isClick} id={nipAsn.id}/>
      </Layout>
    </>
  );
}

export default WizardFirst;

// WizardFirst.getInitialProps = ({ req, res }) => {
//   // Create a cookies instance
//   const cookies = new Cookies(req, res);
//   // Get a cookie
//   return cookies.get("token");
// };
