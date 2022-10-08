import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Input = ({ onChange }) => {
  const [search, setSearch] = useState("");
  const handleChanges = (e) => {
    setSearch(e.target.value);
    onChange(e.target.value);
  };
  return (
    <InputGroup
      type="text"
      placeholder="Search products"
      value={search}
      onChange={(e) => handleChanges(e)}
    >
      <Form.Control
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
};

export default Input;
