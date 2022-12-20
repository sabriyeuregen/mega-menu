import "./Dropdown.css";
import DropdownItem from "./DropdownItem";
import { useState } from "react";
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  //const [secLevelOpen, setSecLevelOpen] = useState(false);
  //const [thirdLevelOpen, setThirdLevelOpen] = useState(false);

  const hoverHandler = () => {
    setOpen(!open);
  };
 /* const secLevelHandler = () => {
    setSecLevelOpen(!secLevelOpen);
  };
  const thirdLevelHandler = () => {
    setThirdLevelOpen(!thirdLevelOpen);
  };*/

  return (
    <div className="dropdown">
      <div onMouseOver={hoverHandler} className="dropdown__title"> Dropdown</div>
       <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <DropdownItem text={"Item1"} />
          <DropdownItem text={"Item2"} />
          <DropdownItem text={"Item3"} />
          <DropdownItem text={"Item4"} />
        </div>
        {/*<div className={`hoverSecItem ${secLevelOpen ? "active" : "inactive"}`}>
        <ul>
          <DropdownItem text={"2nd Level"} onMouseOver={thirdLevelHandler} />
        </ul>
        </div>
        <div className={`hoverThirdItem ${thirdLevelOpen ? "active" : "inactive"}`}>
        <ul>
          <DropdownItem text={"3rd Level"} />
        </ul>
        </div>*/}
      </div>
     
  );
};

export default Dropdown;
