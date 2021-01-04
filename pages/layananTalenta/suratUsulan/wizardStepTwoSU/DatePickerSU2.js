import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import IconcalendarSU2 from "./IconCalendarSU2";

 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export default function Datepicker() {
  const [startDate, setStartDate] = useState();
  return (
      <div>
        <div className="input-group">
              <DatePicker  
              placeholderText=" dd/mm/yyyy" 
              selected={startDate} 
              onChange={date => setStartDate(date)}
              dateFormat='dd/MM/yyyy'
              showYearDropdown
              scrollableMonthYearDropdown
              />
              <IconcalendarSU2></IconcalendarSU2>
        </div>
      </div>
    
  );
};