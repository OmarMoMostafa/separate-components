import React, { useState } from "react";

function CollapseBtn({
  children,
  collapseText = "read less",
  expandText = "read more",
  color = "blue",
  numWordsExpanded = 10,
  defaultExpanded = false,
  className = "",
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const textToShow = expanded
    ? children
    : children.split(" ").slice(0, numWordsExpanded).join(" ") + "...";

  const buttonStyle = {
    color,
    background: "none",
    border: "0",
  };

  return (
    <div className={className}>
      <span>{textToShow}</span>
      <button onClick={toggleExpanded} style={buttonStyle}>
        {expanded ? collapseText : expandText}
      </button>
    </div>
  );
}

export default CollapseBtn;
