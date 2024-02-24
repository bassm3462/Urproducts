import React from "react";

function Sidbar() {
  return (
    <div className=" position-relative ">
      <div className="position-absolute z-0 styleNvbar ">
        <ul
          className="d-flex justify-content-center flex-column  "
          style={{ backgroundColor: "white" }}
        >
          <li className="p-3">
            <a href="/">Home</a>
          </li>
          <li className="p-3">
            <a href="/">Home</a>
          </li>
          <li className="p-3">
            <a href="/">Home</a>
          </li>
          <li className="p-3 Dropdown">
            <a href="/">Home</a>
            <ul  className=" " >
              <li className="p-3">
                <a href="#">Deep Drop Down 1</a>
              </li>
              <li className="p-3">
                <a href="#">Deep Drop Down 2</a>
              </li>
              <li className="p-3">
                <a href="#">Deep Drop Down 3</a>
              </li>
              <li className="p-3">
                <a href="#">Deep Drop Down 4</a>
              </li>
              <li className="p-3">
                <a href="#">Deep Drop Down 5</a>
              </li>
            </ul>
          </li>
          <li className="p-3">
            <a href="/">Home</a>
          </li>
          <li className="p-3">
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidbar;
