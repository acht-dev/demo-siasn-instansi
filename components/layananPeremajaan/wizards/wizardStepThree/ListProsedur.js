import React from "react";

function ListProsedur(props) {
  return (
    <>
      {props.isCheck ? (
        <li key={props.id}>
          <input
            type='checkbox'
            name={props.name}
            id={props.name}
            checked={props.isCheck}
            onClick={props.clickHandler}
          />
          <label htmlFor={props.name}>
            <img src={props.src} alt={props.name} />
            <p>{props.name}</p>
          </label>
        </li>
      ) : (
        <li key={props.id}>
          <input
            disabled
            type='checkbox'
            name={props.id}
            id={props.name}
            // onChange={props.onChangeValue}
            // checked={props.isCheck}
          />
          <label htmlFor={props.name}>
            <img src={props.src} alt={props.name} />
            <p>{props.name}</p>
          </label>
        </li>
      )}
    </>
  );
}

export default ListProsedur;
