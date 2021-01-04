import Layout from "../../../../Layout";
import Breadcrumb from "./../../../../Breadcrumb";
import ShowButton from "../ShowButton";
import WizardSteps from "../WizardSteps";
import DataPribadi from "./DataPribadi";
import CardProfile from "./../CardProfile";

function WizDataPribadi() {
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
        <DataPribadi />

        {/* show button */}
        <ShowButton />
      </Layout>
    </>
  );
}

export default WizDataPribadi;
