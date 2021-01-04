import React, { useState } from "react";
import { Layout } from "../../../Layout";
import Breadcrumb from "./../../Breadcrumb";
import ShowButton from "../wizardStepFour/ShowButton";
import {
  Form,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Checkbox,
  Row,
  Card,
  Col,
  Button,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import WizardSteps from "./WizardSteps";
import Tables from "./Tables";
import PaginationTable from "./PaginationTable";
import DetailKompetensi from "./ResumeDetailKompetensi/DetailKompetensi";
import DetailKegiatan from "./ResumeDetailKegiatan/DetailKegiatan";
import styles from "../../../../styles/Home.module.css";

function WizardFour() {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Usulan</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-4' />

        {/* table surat usulan */}
        <div>
          <div className='mb-4'>
            <span>
              <div className='input-group'>
                <span>Tampilkan</span>
                <Dropdown className='ml-2'>
                  <Dropdown.Toggle
                    size='sm'
                    variant='btn btn-outline-secondary'
                    id='dropdown-basic'>
                    10
                    <svg
                      className='ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='17'
                      viewBox='0 0 22 17'>
                      <path
                        id='Polygon_3'
                        data-name='Polygon 3'
                        d='M11,0,22,17H0Z'
                        transform='translate(22 17) rotate(-180)'
                        fill='#aaa'
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <span className='ml-1'>entri</span>
                  <Dropdown.Menu>
                    <Dropdown.Item value='5' href='#/action-1'>
                      5
                    </Dropdown.Item>
                    <Dropdown.Item value='10' href='#/action-1'>
                      10
                    </Dropdown.Item>
                    <Dropdown.Item value='20' href='#/action-2'>
                      20
                    </Dropdown.Item>
                    <Dropdown.Item value='30' href='#/action-3'>
                      30
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </span>
          </div>

          {/* table*/}
          <Tables />
        </div>
        <br />
        <Row>
          <Col md={4}>Menampilkan 1-10 dari 40 entri</Col>
          <Col className='text-right'></Col>
          <Col>
            <PaginationTable />
          </Col>
        </Row>
        <br />

        {/* mulai content step 3 */}
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.components}>
              <Tabs
                defaultActiveKey='detailKegiatan'
                transition={false}
                id='noanim-tab-example'>
                {/*Tab Resume Detail Kegiatan*/}
                <Tab eventKey='detailKegiatan' title='Detail Kegiatan'>
                  <Card>
                    <Card.Body>
                      <DetailKegiatan />
                    </Card.Body>
                  </Card>
                </Tab>

                {/*Tab Resume Detail Kompetensi*/}
                <Tab eventKey='detailKompetensi' title='Detail Kompetensi'>
                  <Card>
                    <Card.Body>
                      <DetailKompetensi />
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </section>
        </main>

        <br></br>

        {/* show button */}
        <ShowButton isClick={isClick} />
      </Layout>
    </>
  );
}

export default WizardFour;
