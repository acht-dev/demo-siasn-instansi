import WizardFirst from "../../../components/layananPeremajaan/wizards/wizardStepOne/WizardFirst";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux"
import {refGolongan} from "../../../redux/actions/berkasUsul/refGolongan";
import {refKP} from "../../../redux/actions/berkasUsul/refKP";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refKP())
    dispatch(refGolongan())
  },[])

  return (
    <>
      <WizardFirst />
    </>
  );
}
