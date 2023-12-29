import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

export function TextEditor() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [color, setColor] = useState("#000000");
  const [textSize, setTextSize] = useState(16);

  const handleFormat = (formatType) => {
    const textarea = document.getElementById("myTextarea");
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);

    let newText = textarea.value;

    switch (formatType) {
      case "bold":
        newText =
          newText.substring(0, selectionStart) +
          (bold ? "" : "**") +
          selectedText +
          (bold ? "" : "**") +
          newText.substring(selectionEnd);
        setBold(!bold);
        break;
      case "italic":
        newText =
          newText.substring(0, selectionStart) +
          (italic ? "" : "_") +
          selectedText +
          (italic ? "" : "_") +
          newText.substring(selectionEnd);
        setItalic(!italic);
        break;
      case "color":
        newText =
          newText.substring(0, selectionStart) +
          `<span style="color: ${color}">${selectedText}</span>` +
          newText.substring(selectionEnd);
        break;
      case "textSize":
        newText =
          newText.substring(0, selectionStart) +
          `<span style="font-size: ${textSize}px">${selectedText}</span>` +
          newText.substring(selectionEnd);
        break;
      default:
        break;
    }

    textarea.value = newText;
  };

  return (
    <div className="mb-20">
      <Toaster />
      <div>
        <button onClick={() => handleFormat("bold")}>Font Bold</button>
        <button onClick={() => handleFormat("italic")}>Font Italic</button>
        <input
          onChange={(e) => setColor(e.target.value)}
          type="color"
          name=""
          id=""
        />
        <input
          defaultValue={16}
          type="number"
          onChange={(e) => setTextSize(e.target.value)}
        />
      </div>

      <motion.textarea
        drag
        name=""
        id="myTextarea"
        cols="20"
        rows="10"
        style={{
          width: "300px",
          height: "200px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      ></motion.textarea>
    </div>
  );
}

export default TextEditor;
