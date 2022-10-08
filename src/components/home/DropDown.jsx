import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const options = {
  category: ["hoodies", "shirts", "tshirts", "sweaters", "sweatshirt"],
  size: ["L", "XL", "XXL", "XXXL", "M", "S"],
};
const DropDown = ({ name, filters, handleSetFilters }) => {
  return (
    <div className="mx-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          style={{ backgroundColor: "#DDF2F9" }}
          id="dropdown-basic"
        >
          {filters[name] === null ? `select ${name}` : filters[name]}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options[name].map((option, i) => {
            return (
              <Dropdown.Item
                onClick={(e) => {
                  handleSetFilters(name, e.target.innerHTML);
                }}
                href="#/action-1"
              >
                {option}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
