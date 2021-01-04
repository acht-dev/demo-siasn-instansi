import React from "react";

function WizardSteps({ wizardClassName }) {
  return (
    <div className={wizardClassName}>
      <div className='wizard__container'>
        <div className='wizard__row'>
          <div className='wizard__step-1 disabled'>
            <h5>Langkah 1</h5>
            <p>Cari NIP</p>
          </div>
          <div className='wizard__step-2 disabled'>
            <h5>Langkah 2</h5>
            <p>Pilih Prosedur</p>
          </div>
          <div className='wizard__step-3 disabled'>
            <h5>Langkah 3</h5>
            <p>Input Detail</p>
          </div>
          <div className='wizard__step-4 active'>
            <h5>Langkah 4</h5>
            <p>Verifikasi Data</p>
          </div>
          <div className='wizard__step-5 disabled'>
            <h5>Langkah 5</h5>
            <p>Simpan Berkas Usulan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WizardSteps;
