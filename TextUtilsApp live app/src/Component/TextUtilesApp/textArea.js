import React, { useState } from "react";

// TextArea component definition
const TextArea = ({ props }) => {
  // State for managing text, conversion messages, errors, and copy status
  const [Text, setText] = useState("");
  const [Convert, setConvert] = useState("");
  const [Error, setError] = useState("");
  const [Copy, setCopy] = useState("");

  // Function to handle copying text to clipboard
  const handleCopyClick = () => {
    // Check if text is empty
    if (Text.trim() === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      // Copy text to clipboard
      navigator.clipboard
        .writeText(Text)
        .then(() => {
          setError("");
          setCopy("✔️copied successfully");
          setTimeout(() => {
            setCopy("");
          }, 1000);
        })
        .catch((error) => {
          console.error("Copy failed:", error);
        });
    }
  };

  // Function to convert text to uppercase
  const HandleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    // Check for text and existing case
    if (Text === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else if (Text === Text.toUpperCase()) {
      setError("Text is already in UpperCase");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      setConvert("✔️Converted Successfully");
      setTimeout(() => {
        setConvert("");
      }, 1000);
    }
  };

  // Function to convert text to lowercase
  const HandleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    // Check for text and existing case
    if (Text === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else if (Text === Text.toLowerCase()) {
      setError("Text is already in LowerCase");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      setConvert("✔️Converted Successfully");
      setTimeout(() => {
        setConvert("");
      }, 1000);
    }
  };

  // Function to handle text input change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function to remove extra spaces
  const spacesRemover = () => {
    let trimmedText = Text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
    // Check for text and extra spaces
    if (Text === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else if (Text === Text.replace(/\s+/g, " ").trim()) {
      setError("❌Text Already Modified'");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      setConvert("✔️Extra Spaces removed Successfully");
      setTimeout(() => {
        setConvert("");
      }, 1000);
    }
  };

  // Function to capitalize first letters of words
  const Capitilizer = () => {
    let Cpit = Text.replace(/\b\w/g, (match) => match.toUpperCase());
    setText(Cpit);
    // Check for text and existing case
    if (Text === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else if (Text === Text.replace(/\b\w/g, (match) => match.toUpperCase())) {
      setError("❌Text Already In CamelCase");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      setConvert("✔️Text Capitalized Successfully");
      setTimeout(() => {
        setConvert("");
      }, 1000);
    }
  };

  // Function to add commas after words
  const AddCommaAfterWords = () => {
    let keyword = Text.replace(/([A-Za-z]+)(\s+|$|,)/g, "$1, ");
    setText(keyword);
    // Check for text and modification
    if (Text === "") {
      setError("❌Please Enter The Text");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else if (Text === Text.replace(/([A-Za-z]+)(\s+|$|,)/g, "$1, ")) {
      setError("❌Text Already Modified");
      setTimeout(() => {
        setError("");
      }, 1000);
    } else {
      setConvert("✔️Text Modified Successfully");
      setTimeout(() => {
        setConvert("");
      }, 1000);
    }
  };

  return (
    <>
      {/* Main content */}
      <main>
        <div className="meassages">
          {/* Conversion and error messages */}
          <p className="message">
            <strong>{Convert}</strong>
          </p>
          <p className="error">
            <strong>{Error}</strong>
          </p>
          <p className="message">
            <strong> {Copy}</strong>
          </p>
        </div>
        <div className="mainBody">
          <label htmlFor="text">Enter Your Text Here</label>
          {/* TextArea input */}
          <textarea
            className="hero"
            style={props}
            name="text"
            id="text"
            cols="100"
            rows="13"
            onChange={handleOnChange}
            value={Text}
            placeholder="Paste Your Text"
          />
          <div className="buttonsAll">
            {/* Conversion buttons */}
            <button className="btni" onClick={HandleUpClick}>
              Upper Case
            </button>
            <button className="btni" onClick={HandleLoClick}>
              Lower Case
            </button>
            <button className="btni" onClick={handleCopyClick}>
              Copy Text
            </button>
            <button className="btni" onClick={spacesRemover}>
              Remove Extra Spaces
            </button>
            <button className="btni" onClick={Capitilizer}>
              Capitalize First Word
            </button>
            <button className="btni" onClick={AddCommaAfterWords}>
              Convert to Keywords
            </button>
          </div>
          {/* Summary section */}
          <div className="summarys my-1">
            <h5 className="summary">Summary:</h5>
            <p className="child-summary ">
              Words: {Text.trim() === "" ? 0 : Text.split(" ").length},
              Characters: {Text.length} & Characters (without spaces):{" "}
              {Text.replace(/\s/g, "").length}
            </p>
            <p className="child-summary mb-20">
              Sentences:
              {Text.trim() !== ""
                ? Text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!)\s/g)
                    .length
                : 0}{" "}
              & Paragraphs:
              {Text.split("\n").filter((line) => line.trim() !== "").length}
            </p>
            {/* Preview */}
            <div className="prev">
              <h5 className="Prev">Preview:</h5>
              <p className="child-prev">{Text}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TextArea;
