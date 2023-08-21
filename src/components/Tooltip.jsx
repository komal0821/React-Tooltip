import React, { useState } from "react";
import "../tooltip.css";

export default function Tooltip({ text }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip">{text}</div>
    </div>
  );
}
