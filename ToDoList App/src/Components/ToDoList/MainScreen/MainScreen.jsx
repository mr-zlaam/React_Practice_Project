import { useState } from "react";
import "../MainScreen/MainScreen.css";
import OlList from "./OlList";
const TodMain = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const ListOfItems = () => {
    setItems((items) => {
      return [...items, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((items) => {
      return items.filter((arrayelement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <div className="header-div">
            <h1 className="heading">Your TodoList</h1>
          </div>
          <div className="Content-div">
            <div className="inputTodo">
              <input
                value={inputList}
                onChange={itemEvent}
                type="text"
                name="todlist"
                id="todo"
                placeholder="Enter  Task Here"
              />
              <span className="btn">
                {inputList !== "" ? (
                  <button onClick={ListOfItems}>+</button>
                ) : (
                  <button disabled onClick={ListOfItems}>
                    +
                  </button>
                )}
              </span>
            </div>
            <div className="wrapper">
              <ol>
                {items.map((itemsValue, index) => {
                  return (
                    <OlList
                      text={itemsValue}
                      key={index}
                      id={index}
                      deleteItems={deleteItems}
                    />
                  );
                })}
              </ol>
            </div>
            <div className="owner">
              <p className="author" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodMain;
