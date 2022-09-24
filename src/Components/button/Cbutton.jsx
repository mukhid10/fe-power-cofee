import React from "react";

function Cbutton({ title, color, width, icon, margin, border, click }) {
  return (
    <button
      type="button"
      className={`btn ${color} fw-bold ${margin} ${border}`}
      style={{ width: `${width}` }}
      onClick={click}
    >
      {title} {icon}
    </button>
  );
}

export default Cbutton;
