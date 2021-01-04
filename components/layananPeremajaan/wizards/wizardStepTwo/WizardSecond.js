import React, { useState, useEffect } from "react";
import { Layout } from "../../../Layout";
import Breadcrumb from "../../../Breadcrumb";
import ShowButton from "./ShowButton";
import WizardSteps from "./WizardSteps";
import { useDispatch, useSelector } from "react-redux";
import ListProsedur from "./ListProsedur";
import {getGolonganPns} from "../../../../redux/actions/berkasUsul/getGolonganPns"

function WizardSecond() {
  const prosedurOne = useSelector((state) => state.wizards.procedureOne);
  const prosedurTwo = useSelector((state) => state.wizards.procedureTwo);
  const prosedurThree = useSelector((state) => state.wizards.procedureThree);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const dispatch = useDispatch();
  const {nipAsn} = useSelector(state => state.getIdAsn)
  useEffect(() => {
    dispatch(getGolonganPns(nipAsn.id))
  },[])

  const handleClick = (index) => (e) => {
    if (!isButtonClick) {
      setIsButtonClick(true);
    }

    const value = e.target.checked;
    let newArrOne = [...prosedurOne];
    let newArrTwo = [...prosedurTwo];
    let newArrThree = [...prosedurThree];
    if (parseInt(e.target.name) > 9 && parseInt(e.target.name) <= 18) {
      newArrTwo[index].isCheck = value;
      dispatch({
        type: "SELECT_CHECK",
        item: newArrTwo,
      });
    } else if (parseInt(e.target.name) > 18 && parseInt(e.target.name) <= 28) {
      newArrThree[index].isCheck = value;
      dispatch({
        type: "SELECT_CHECK",
        item: newArrThree,
      });
    } else {
      newArrOne[index].isCheck = value;
      dispatch({
        type: "SELECT_CHECK",
        item: newArrOne,
      });
    }
  };

  return (
    <Layout>
      {/* breadcrumb */}
      <Breadcrumb />

      {/* title */}
      <div className='wizard__title'>
        <h2>Pilih Prosedur</h2>
      </div>

      {/* wizard step section */}
      <WizardSteps wizardClassName='wizard__page-2' />

      {/* wizard component choice */}
      <div className='wizard__choiceComponent'>
        <div className='wizard__choiceRow'>
          <ul>
            {prosedurOne.map((data, index) => {
              return (
                <ListProsedur
                  {...data}
                  idKey={index}
                  onChangeValue={handleClick(index)}
                />
              );
            })}
          </ul>
        </div>
        <div className='wizard__choiceRow'>
          <ul>
            {prosedurTwo.map((data, index) => {
              return (
                <ListProsedur
                  {...data}
                  idKey={index}
                  onChangeValue={handleClick(index)}
                />
              );
            })}
          </ul>
        </div>
        <div className='wizard__choiceRow'>
          <ul>
            {prosedurThree.map((data, index) => {
              return (
                <ListProsedur
                  {...data}
                  idKey={index}
                  onChangeValue={handleClick(index)}
                />
              );
            })}
          </ul>
        </div>
      </div>

      {/* show button */}
      <ShowButton isShowButton={isButtonClick} />
    </Layout>
  );
}

export default WizardSecond;
