import Layout from "../../../../Layout";
import ShowButton from "../ShowButton";
import Breadcrumb from "../../../../Breadcrumb";
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
          <h2>Input Detail Data Pribadi</h2>
        </div>

        {/* wizard step section */}
        <WizardSteps wizardClassName='wizard__page-3' />

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
