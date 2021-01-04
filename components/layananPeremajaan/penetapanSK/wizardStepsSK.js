import React from "react";

function WizardStepsSK({ wizardClassName }) {
  return (
    <div className={wizardClassName}>
      <div className="wizard__container">
        <div className="wizard__row">
          <div className="wizard__step-2 active">
            <h5>Langkah 1</h5>
            <p>Pilih ASN</p>
          </div>
          <div className="wizard__step-2 disabled">
            <h5>Langkah 2</h5>
            <p>Pembuatan SK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardStepsSK;
