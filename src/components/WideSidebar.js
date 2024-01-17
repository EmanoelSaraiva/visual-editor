import React from "react";

export default function WideSidebar({ children }) {
  return (
    <div className="mh-100 d-flex flex-column inspector-wrapper">
      <div style={{ display: "flex", width: "400px", flexGrow: 1 }}>
        {children}
      </div>
    </div>
  );
}
