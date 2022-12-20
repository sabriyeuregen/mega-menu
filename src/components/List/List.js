import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";
const List = () => {
  const [listopen, setListOpen] = useState(false);

  const hoverHandler = () => {
    setListOpen(!listopen);
  };

  return (
    <div className="listmenu">
      <div onMouseOver={hoverHandler} className="listmenu__title">
        List Submenu
      </div>
      <div className={`listmenu__item ${listopen ? "active" : "inactive"}`}>
       <div className="listmenu__items">
       <ListItem />
       </div>
      </div>
    </div>
  );
};

export default List;
