import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import { useParams } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const Notes = () => {
  const { fold } = useParams();
  const [folders, setFolder] = useState([]);
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
      <h1 className="container">Notes</h1>
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
      {folders.map((foldn, foldIndex) => {
        return (
          <h4>
            <Link
              key={foldIndex}
              to={routes.NotesText.replace(":fold", foldn)}
              color="primary"
            >
              {foldn}
            </Link>
          </h4>
        );
      })}
    </div>
  );
};

export default Notes;
