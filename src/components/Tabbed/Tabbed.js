import "./Tabbed.css"
import TabbedItem from "../Tabbed/TabbedItem";
import { useState } from "react"
const Tabbed = () => {

  const [openTabbed, setOpenTabbed] = useState()

  const hoverHandler = () => {
     setOpenTabbed(!openTabbed)
  }

  return (
    <div className="tabbed">
      
      <div onClick={hoverHandler} className="tabbedMenu__title">
        Tabbed Submenu
      </div>
      <div className={`tabbedMenu__item ${openTabbed ? "active" : "inactive"}`}>
       <div className="tabbedMenu__items">
       <TabbedItem/>
       </div>
      </div>
    
    </div>
  )
}

export default Tabbed