import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
const Folder = () => {
  const [folders, setFolder] = useState(["fold1"]);
  const [input, setInput] = useState("");
  const onChangeText = (e) => {
    setInput(e.target.value);
  };
  const addInput = () => {
    if (input) {
      const newfold = `${input}`;
      setFolder([...folders, newfold]);
      setInput("");
    }
  };

  return (
    <div className="container">
      <h1>Folders</h1>
      <InputGroup>
        <InputGroupAddon addonType="append"></InputGroupAddon>
        <Input
          type="text"
          value={input}
          onChange={onChangeText}
          placeholder="folder Name"
        />
        <Button onClick={addInput}>Add</Button>
      </InputGroup>
      <br />
      {folders.map((fold, foldIndex) => {
        return (
          <h4>
            <Link key={foldIndex} to="#" color="primary">
              {fold}
            </Link>
          </h4>
        );
      })}
    </div>
  );
};

export default Folder;
