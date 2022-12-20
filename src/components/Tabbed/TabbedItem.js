import "./TabbedItem.css";
import { useState } from "react";
const TabbedItem = () => {
  const [openMenuFirst, setOpenMenuFirst] = useState(false);
  const [openMenuSec, setOpenMenuSec] = useState(false);
  const [openMenuThird, setOpenMenuThird] = useState(false);

  const openMenuFirstHandler = () => {
    setOpenMenuFirst(!openMenuFirst);
  };

  const openMenuSecHandler = () => {
    setOpenMenuSec(!openMenuSec);
  };

  const openMenuThirdHandler = () => {
    setOpenMenuThird(!openMenuThird);
  };

  return (
    <div className="tabbedMenu">
      <div className="firstcolumn">
     <div onMouseOver={openMenuFirstHandler}>Menu1</div>
      <div className={`tabbedMenuFirst__item ${openMenuFirst ? "active" : "inactive"}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
      <div className="secondcolumn">
      <div onMouseOver={openMenuSecHandler}>Menu2</div>
      <div className={`tabbedMenuSec__item ${openMenuSec ? "active" : "inactive"}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
      <div className="thirdcolumn">
      <div onMouseOver={openMenuThirdHandler}>Menu3</div>
      <div className={`tabbedMenuThird__item ${openMenuThird ? "active" : "inactive"}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
    </div>
  );
};

export default TabbedItem;
