import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { InputGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datepicker() {
  const [startDate, setStartDate] = useState();
  return (
    <div>
      <InputGroup>
        <DatePicker
          placeholderText=' DD/MM/YYYY'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat='dd/MM/yyyy'
          showYearDropdown
          scrollableMonthYearDropdown
          className='Form.Control'
        />
        <InputGroup.Append>
          <InputGroup.Text>
            <svg
              width='16px'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 35.997 36.004'>
              <path
                id='Calendar'
                data-name='Calendar'
                d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
                fill='#2d3c6c'
              />
            </svg>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
