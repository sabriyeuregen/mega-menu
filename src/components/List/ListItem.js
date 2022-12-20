import "./ListItem.css";
const ListItem = () => {
  return (
    <div className="listItem">
      <div class="listItem__columnOne">
        <h3>Category 1</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>

      <div class="listItem__columnTwo">
        <h3>Category 2</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div class="listItem__columnThree">
        <h3>Category 3</h3>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default ListItem;
