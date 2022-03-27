import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearText = () => {
    const newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control mb-4 bg-${
            props.mode === "dark" ? "dark" : "light"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="textBox"
          rows="8"
          placeholder="Enter text here..."
          value={text}
          onChange={handleUpChange}
          htmlFor=""
        ></textarea>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mb-3`}
          onClick={handleUpClick}
        >
          Convert Uppercase
        </button>

        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mb-3 mx-2`}
          onClick={handleLowClick}
        >
          Convert Lowercase
        </button>

        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mb-3 mx-2`}
          onClick={handleClearText}
        >
          Clear Text
        </button>

        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mb-3 mx-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "dark" : "light"
          } mb-3 mx-2`}
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes Read</p>
      </div>

      <h3>Preview</h3>
      <p>
        {text.length > 0
          ? text
          : "Enter something in the above TextBox to preview it here!"}
      </p>
    </>
  );
};

export default TextForm;
