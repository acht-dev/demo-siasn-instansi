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
          <h2>Verifikasi Data</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-4' />

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
