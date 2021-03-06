import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "black" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
      {/* <Button color="red" text="Why?"></Button> */}
      {/* <Button color="blue" text="Nope"></Button> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
