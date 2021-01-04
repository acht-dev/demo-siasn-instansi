import React from "react";
 
function ListProsedur(props) {
  return (
    <>
      <button className='btn' onClick={props.onClick} key={props.id}>
        <img src={props.src} />
        <p>{props.name}</p>
      </button>
    </>
  );
}

export default ListProsedur;
