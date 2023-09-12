import {} from "react";
import PropTypes from "prop-types";
import { HiXCircle } from "react-icons/hi";

const OlList = (props) => {
  return (
    <>
      {props.items === null ? null : (
        <div className="todo_style">
          <HiXCircle
            size={25}
            color="white"
            cursor="pointer"
            onClick={() => props.deleteItems(props.id)}
          />
          <li>{props.text}</li>
        </div>
      )}
    </>
  );
};
OlList.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default OlList;
