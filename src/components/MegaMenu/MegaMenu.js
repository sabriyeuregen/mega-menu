import "./MegaMenu.css";
import Dropdown from "../Dropdown/Dropdown";
import List from "../List/List";
import Tabbed from "../Tabbed/Tabbed";
const MegaMenu = () => {
  return (
    <div className="navbar">
      <Dropdown/>
      <List/>
      <Tabbed/>
    </div>
  )
}

export default MegaMenu;