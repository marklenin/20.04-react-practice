import React, { useState } from "react";

function Paragraph() {
  const [paragraph, setParagraph] = useState("");
  const [string, setString] = useState("");
  const takeParagraph = (value) => {
    setParagraph(value);
    console.log(paragraph);
  };
  const addToParagraph = () => {
    setString((prevvalue) => (prevvalue += " " + paragraph));
    console.log(string);
  };
  return (
    <div>
      <input
        onInput={(e) => takeParagraph(e.target.value)}
        type="text"
        placeholder="Type here..."
      />
      <button onClick={addToParagraph}>Add Paragraph</button>
      <p>{string}</p>
    </div>
  );
}

export default Paragraph;
