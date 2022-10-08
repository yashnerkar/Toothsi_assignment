import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchField from 'react-search-field';
const Input = ({ onChange }) => {
    const [search, setSearch] = useState('');
    const handleChanges = (e) => {

        setSearch(e.target.value);
        onChange(e.target.value);
        console.log("search", search);

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