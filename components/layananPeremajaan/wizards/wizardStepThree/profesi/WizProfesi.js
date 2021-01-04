import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import Profesi from "./Profesi";
import CardProfile from "./../CardProfile";

function WizProfesi() {
  return (
    <>
      <Layout>
        {/* breadcrumb */}
        <Breadcrumb />

        {/* title */}
        <div className='wizard__title'>
          <h2>Input Detail Profesi</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

        {/* card profile */}
        <CardProfile />

        {/* form data pribadi */}
        <Profesi />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizProfesi;
